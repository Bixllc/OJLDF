'use client';

import { Eye } from 'lucide-react';

export default function OurVision() {
  return (
  <section className="relative overflow-hidden bg-white py-24 text-gray-900">
      {/* Glow background
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FCD116] blur-3xl" />
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-5 py-2 text-[#00843D]">
            <Eye className="h-5 w-5" />
            <span className="font-medium">Our Vision</span>
          </div>

          {/* Heading */}
          <h2 className="mb-8 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            A World Where Justice is Truly Blind
          </h2>

          {/* Copy */}
          <p className="mx-auto max-w-3xl text-lg sm:text-xl leading-relaxed text-black/95">
            Our vision is a world where justice is truly blind, where every
            individual has equal access to legal resources, and where the law
            serves as a tool for fairness and equity. We strive to create a
            society where no one is denied justice due to their financial
            situation or social standing.
          </p>
        </div>
      </div>
    </section>
  );
}
