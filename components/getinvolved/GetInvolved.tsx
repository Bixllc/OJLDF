"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  Users,
  Megaphone,
  Calendar,
  Handshake,
  BookOpen,
  ArrowRight,
} from "lucide-react";

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

/** Local UI primitives (no ../ui/* needed) */
function Card({
  className,
  children,
  style,
}: React.PropsWithChildren<{ className?: string; style?: React.CSSProperties }>) {
  return (
    <div
      className={cn("rounded-2xl border border-gray-200 bg-white shadow-sm", className)}
      style={style}
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

function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
        "bg-[#00843D] text-white hover:bg-[#006D32] focus:outline-none focus:ring-2 focus:ring-[#00843D]/30 focus:ring-offset-2",
        className
      )}
      {...props}
    />
  );
}

export default function GetInvolved() {
  const router = useRouter();

  const ways = [
    {
      icon: Heart,
      title: "Donate Online",
      description:
        "Contribute financially to support legal defense, covering court fees and client needs.",
      additionalInfo:
        "Join our monthly giving program to provide ongoing support for our mission.",
      buttonText: "Donate Now",
      buttonAction: () =>
        window.open("https://www.zeffy.com/en-US/donation-form/ojldf", "_blank"),
    },
    {
      icon: Users,
      title: "Volunteer Your Expertise",
      description:
        "Legal professionals can offer pro bono services, advice, or research assistance.",
      additionalInfo:
        "Non-legal volunteers can assist with community outreach and administrative tasks.",
      buttonText: "Sign Up to Help",
      buttonAction: () => router.push("/contact"),
    },
    {
      icon: Megaphone,
      title: "Advocate Online",
      description:
        "Share our work on social media to raise awareness and engage your network.",
      additionalInfo:
        "Join our digital campaigns by signing petitions and contacting lawmakers.",
      buttonText: "Sign Up to Help",
      buttonAction: () => router.push("/contact"),
    },
    {
      icon: Calendar,
      title: "Host or Attend Events",
      description: "Organize local fundraisers or awareness events in your community.",
      additionalInfo:
        "Participate in OJLDF-hosted seminars, workshops, or fundraising events.",
      buttonText: "See Upcoming Events",
      buttonAction: () => router.push("/events"),
    },
    {
      icon: Handshake,
      title: "Partner with Us",
      description:
        "Businesses can support us through sponsorships or matching gift programs.",
      additionalInfo:
        "Collaborate on community events or legal clinics to expand our impact.",
      buttonText: "Sign Up to Help",
      buttonAction: () => router.push("/contact"),
    },
    {
      icon: BookOpen,
      title: "Educate and Spread Awareness",
      description:
        "Distribute informational materials and educate others about our mission.",
      additionalInfo:
        "Host discussions or webinars to engage your community on justice issues.",
      buttonText: "Learn How to Build a Team",
      buttonAction: () => router.push("/contact"),
    },
  ] as const;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00843D] via-[#009B3A] to-[#00843D] py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FCD116] blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-black blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold">Join the Fight for Justice</h1>
            <p className="mb-4 text-2xl leading-relaxed">How You Can Get Involved</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-extrabold">GET INVOLVED</h2>
          <p className="text-gray-700" style={{ fontSize: "1.125rem", lineHeight: "1.8" }}>
            At the One Jamaica Legal Defense Foundation (OJLD), we believe that everyone
            can play a role in advancing justice and equality. Whether you have time,
            skills, or resources to contribute, you can help us make a difference in
            many ways. Explore the options below to see how you can join our mission.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ways.map((way) => {
              const Icon = way.icon;
              return (
                <Card
                  key={way.title}
                  className="transition-shadow hover:shadow-xl"
                  style={{ borderTop: "4px solid #00843D" }}
                >
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#00843D15]">
                      <Icon className="h-8 w-8 text-[#00843D]" />
                    </div>

                    <h3 className="mb-4 text-xl font-bold">{way.title}</h3>
                    <p className="mb-3 text-gray-700" style={{ lineHeight: "1.7" }}>
                      {way.description}
                    </p>
                    <p className="mb-6 text-gray-600" style={{ lineHeight: "1.7" }}>
                      {way.additionalInfo}
                    </p>

                    <Button onClick={way.buttonAction} className="w-full">
                      {way.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-extrabold">Every Contribution Matters</h2>
          <p className="mb-8 text-gray-700" style={{ fontSize: "1.125rem", lineHeight: "1.8" }}>
            Whether you donate, volunteer, advocate, or educate, your involvement directly
            impacts lives and strengthens our fight for justice. Together, we can build a
            more equitable future for the Jamaican diaspora and beyond.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6">
              <div className="mb-2 text-5xl font-extrabold text-[#FCD116]">500+</div>
              <p className="text-gray-700">Volunteers Engaged</p>
            </div>
            <div className="p-6">
              <div className="mb-2 text-5xl font-extrabold text-[#FCD116]">1,000+</div>
              <p className="text-gray-700">Lives Impacted</p>
            </div>
            <div className="p-6">
              <div className="mb-2 text-5xl font-extrabold text-[#FCD116]">50+</div>
              <p className="text-gray-700">Community Events</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}