'use client';

import { Scale, Megaphone, BookOpen } from 'lucide-react';

const services = [
  {
    title: 'Legal Defense',
    description:
      'We provide expert legal representation to individuals who cannot afford it, ensuring they have a fair chance in the courtroom. Our focus includes cases of wrongful accusations, human rights violations, and other forms of legal injustice.',
    icon: Scale,
  },
  {
    title: 'Advocacy and Reform',
    description:
      'Beyond individual cases, we advocate for systemic changes to laws and policies that perpetuate injustice. We work with lawmakers, activists, and other organizations to push for reforms that protect the rights of all citizens.',
    icon: Megaphone,
  },
  {
    title: 'Education and Awareness',
    description:
      'We believe in the power of education to prevent injustice. OJLDF conducts workshops, seminars, and community outreach programs to inform the public about their legal rights and to promote a culture of justice and equality.',
    icon: BookOpen,
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight">
            What We Do
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our comprehensive approach to justice encompasses legal representation,
            systemic advocacy, and community education.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-black/5 hover:-translate-y-1"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00843D] to-[#009B3A] flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
