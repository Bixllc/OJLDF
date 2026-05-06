"use client";

import * as React from "react";
import { Check, Star, Crown, Users, Shield } from "lucide-react";



function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

/** Simple local UI primitives (so you don't need ../ui/*) */
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

function Button({
  className,
  variant = "solid",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-200"
      : "bg-[#00843D] text-white hover:bg-[#006930] focus:ring-[#00843D]/30";

  return <button className={cn(base, styles, className)} {...props} />;
}

export default function Memberships() {  
    const tiers = [
    {
      name: "Community Member",
      icon: Users,
      price: "Free",
      period: "",
      description: "Join our community and access essential resources",
      color: "#00843D",
      features: [
        "Access to public events",
        "Monthly newsletter",
        "Basic legal resources",
        "Community forum access",
        "Cultural event invitations",
      ],
      cta: "Coming Soon",
      popular: false,
    },
    {
      name: "Supporting Member",
      icon: Star,
      price: "$50",
      period: "/year",
      description: "Enhanced access and priority support",
      color: "#FCD116",
      features: [
        "Everything in Community tier",
        "Priority event registration",
        "Quarterly legal consultations",
        "Educational workshop access",
        "Member directory access",
        "Exclusive networking events",
        "Discounted services",
      ],
      cta: "Coming Soon",
      popular: true,
    },
    {
      name: "Patron Member",
      icon: Crown,
      price: "$250",
      period: "/year",
      description: "Premium benefits and dedicated support",
      color: "#00843D",
      features: [
        "Everything in Supporting tier",
        "Unlimited legal consultations",
        "One-on-one mentorship",
        "VIP event access",
        "Advocacy support",
        "Recognition at events",
        "Board meeting invitations",
        "Priority case handling",
      ],
      cta: "Coming Soon",
      popular: false,
    },
  ] as const;

  const benefits = [
    {
      icon: Shield,
      title: "Legal Support",
      description: "Access to experienced attorneys and legal resources",
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with diaspora members worldwide",
    },
    {
      icon: Star,
      title: "Priority Access",
      description: "First access to events, programs, and services",
    },
    {
      icon: Crown,
      title: "Exclusive Content",
      description: "Member-only resources and educational materials",
    },
  ] as const;

  const compareRows: Array<[string, boolean, boolean, boolean]> = [
    ["Access to public events", true, true, true],
    ["Monthly newsletter", true, true, true],
    ["Basic legal resources", true, true, true],
    ["Priority event registration", false, true, true],
    ["Quarterly legal consultations", false, true, true],
    ["Educational workshops", false, true, true],
    ["Exclusive networking events", false, true, true],
    ["Unlimited legal consultations", false, false, true],
    ["One-on-one mentorship", false, false, true],
    ["VIP event access", false, false, true],
    ["Board meeting invitations", false, false, true],
  ];

  const faqs = [
    {
      q: "Can I upgrade my membership later?",
      a: "Yes. You can upgrade to a higher tier at any time. The price difference will be prorated based on your remaining membership period.",
    },
    {
      q: "Are memberships tax-deductible?",
      a: "One Jamaica Legal Defense Foundation is a registered non-profit. Membership fees above the fair market value of benefits received may be tax-deductible. Consult your tax advisor for specific guidance.",
    },
    {
      q: "What if I need to cancel my membership?",
      a: "You can cancel anytime by contacting us. Membership fees are non-refundable, but you’ll continue to receive benefits through the end of your current period.",
    },
    {
      q: "How do I access member benefits?",
      a: "Once you become a member, you’ll receive login credentials to access the member portal where you can book consultations, register for events, and access exclusive resources.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#00843D] to-[#009B3A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 font-playfair text-5xl font-extrabold">Coming Soon</h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Stay tuned to hear when it launches
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              const isPopular = tier.popular;

              return (
                <Card
                  key={tier.name}
                  className={cn(
                    "relative overflow-hidden",
                    isPopular
                      ? "border-2 border-[#FCD116] shadow-xl md:scale-105"
                      : "border-gray-200"
                  )}
                >
                  {isPopular && (
                    <div className="absolute right-0 top-0 bg-[#FCD116] px-4 py-1 text-sm font-semibold text-gray-900">
                      Most Popular
                    </div>
                  )}

                  <CardContent className="p-8">
                    <div
                      className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: isPopular ? "#FCD11620" : `${tier.color}15`,
                      }}
                    >
                      <Icon
                        className="h-8 w-8"
                        style={{ color: isPopular ? "#b89510" : tier.color }}
                      />
                    </div>

                    <h3 className="mb-2 text-xl font-bold">{tier.name}</h3>
                    <p className="mb-6 text-gray-600">{tier.description}</p>

                    <div className="mb-6 flex items-end gap-2">
                      <span className="text-5xl font-extrabold text-[#00843D]">
                        {tier.price}
                      </span>
                      {tier.period ? (
                        <span className="pb-1 text-lg text-gray-600">
                          {tier.period}
                        </span>
                      ) : null}
                    </div>

                    <Button
                      className="mb-6 w-full"
                      style={
                        isPopular
                          ? { backgroundColor: "#FCD116", color: "#000" }
                          : { backgroundColor: "#00843D", color: "#fff" }
                      }
                      disabled
                      aria-disabled="true"
                    >
                      {tier.cta}
                    </Button>

                    <div className="space-y-3">
                      {tier.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <Check
                            className="mt-0.5 h-5 w-5 flex-shrink-0"
                            style={{
                              color: isPopular ? "#FCD116" : "#00843D",
                            }}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-playfair text-4xl font-extrabold">Membership Benefits</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Every membership level provides valuable support and resources
              tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <Card key={b.title} className="border-none shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#00843D]/10">
                      <Icon className="h-8 w-8 text-[#00843D]" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{b.title}</h3>
                    <p className="text-gray-600">{b.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compare */}
      {/* <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-extrabold">
            Compare Membership Levels
          </h2>

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#00843D] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Features</th>
                    <th className="px-6 py-4 text-center">Community</th>
                    <th className="bg-[#FCD116] px-6 py-4 text-center text-gray-900">
                      Supporting
                    </th>
                    <th className="px-6 py-4 text-center">Patron</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {compareRows.map((row) => (
                    <tr key={row[0]} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">{row[0]}</td>
                      <td className="px-6 py-4 text-center">
                        {row[1] ? (
                          <Check className="mx-auto h-5 w-5 text-[#00843D]" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="bg-[#FCD116]/5 px-6 py-4 text-center">
                        {row[2] ? (
                          <Check className="mx-auto h-5 w-5 text-[#b89510]" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row[3] ? (
                          <Check className="mx-auto h-5 w-5 text-[#00843D]" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      {/* <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-extrabold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.q}>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-bold">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}