'use client';

import * as React from 'react';
import Image from 'next/image';
import { Target } from 'lucide-react';

export default function AboutMission() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/about-1.jpeg" 
                alt="Volunteering and community"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#00843D]/10 px-4 py-2">
              <Target className="h-5 w-5 text-[#00843D]" />
              <span className="font-medium text-[#00843D]">Our Mission</span>
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fighting for Justice and Equality
            </h2>

            <p className="mb-6 text-[1.125rem] leading-[1.9] text-gray-600">
              The One Jamaica Legal Defense Foundation (OJLDF) is dedicated to ensuring justice and
              equality for all, particularly those who have been wrongfully accused, marginalized,
              or denied access to fair legal representation.
            </p>

            <p className="text-[1.125rem] leading-[1.9] text-gray-600">
              We believe that every individual deserves a fair chance to defend their rights,
              regardless of their socio-economic status, and we are committed to fighting for those
              who cannot fight for themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
