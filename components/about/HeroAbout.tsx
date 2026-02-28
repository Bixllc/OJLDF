'use client';

import * as React from 'react';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#00843D] via-[#009B3A] to-[#00843D] py-24 text-white">
      {/* soft glows */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#FCD116] blur-3xl" />
        <div className="absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-black blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About One Jamaica Legal Defense Foundation
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Justice for all starts with you. Join us in our mission to make it a reality.
          </p>
        </div>
      </div>
    </section>
  );
}
