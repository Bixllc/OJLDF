import { Resend } from "resend";

export const runtime = "nodejs";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const firstName = String(body.firstName ?? "").trim();
    const lastName = String(body.lastName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Honeypot (spam trap): should be empty
    const company = String(body.company ?? "").trim();
    if (company) {
      return Response.json({ ok: true }, { status: 200 });
    }

    if (!firstName || !lastName || !email || !subject || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return Response.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
    const FROM_EMAIL = process.env.FROM_EMAIL;

    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !FROM_EMAIL) {
      return Response.json(
        { ok: false, error: "Server is not configured (missing env vars)." },
        { status: 500 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const fullName = `${firstName} ${lastName}`.trim();

    const { error } = await resend.emails.send({
      from: FROM_EMAIL, // e.g. "OJLDF Contact <no-reply@onejamaica.org>"
      to: CONTACT_TO_EMAIL, // e.g. "info@onejamaica.org"
      replyTo: email, // so you can reply directly to the sender
      subject: `[Contact] ${subject}`,
      text: [
        `New contact form submission`,
        ``,
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone || "(not provided)"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    if (error) {
      return Response.json(
        { ok: false, error: "Email failed to send.", detail: error },
        { status: 500 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}