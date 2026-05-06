"use client";

import * as React from "react";
import { Mail, Phone } from "lucide-react";

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

/** Local UI primitives (so you don't need ../ui/*) */
function Card({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

function CardContent({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#00843D] to-[#009B3A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 font-playfair text-5xl font-extrabold">Get In Touch</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Have questions? Need support? Reach out and we’ll respond as soon as
            possible.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Email */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#00843D]/10">
                  <Mail className="h-6 w-6 text-[#00843D]" />
                </div>

                <h2 className="text-2xl font-extrabold">Email Us</h2>
                <p className="mt-2 text-gray-600">
                  For general inquiries and support.
                </p>

                <a
                  href="mailto:aojldf@gmail.com?subject=OJLDF%20Inquiry"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-[#00843D] px-5 py-3 font-semibold text-[#00843D] hover:bg-[#00843D]/5"
                >
                  aojldf@gmail.com
                </a>
              </CardContent>
            </Card>

            {/* Call */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FCD116]/20">
                  <Phone className="h-6 w-6 text-[#b89510]" />
                </div>

                <h2 className="text-2xl font-extrabold">Call Us</h2>
                <p className="mt-2 text-gray-600">
                  Monday – Friday, 9AM – 6PM EST
                </p>

                <a
                  href="tel:+(757) 655-3377"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#00843D] px-5 py-3 font-semibold text-white hover:bg-[#006930]"
                >
                  (757) 655-3377
                </a>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            We aim to respond within 1–2 business days.
          </p>
        </div>
      </section>
    </div>
  );
}