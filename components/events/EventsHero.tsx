'use client';

import * as React from 'react';
import { Video } from 'lucide-react';

export default function AboutHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00843D] via-[#009B3A] to-[#00843D] py-24 text-white">
        {/* soft glows
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#FCD116] blur-3xl" />
          <div className="absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-black blur-3xl" />
        </div> */}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Events & Programs
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Join us for educational broadcasts, community gatherings, cultural
              celebrations, and legal clinics designed to support and empower
              our diaspora community.
            </p>
          </div>
        </div>
      </section>

      {/* Live Broadcast Banner */}
      <section className="border-y-4 border-[#FCD116] bg-gradient-to-r from-red-600 to-red-700 py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-white" />
              </span>

              <div>
                <div className="mb-1 flex items-center gap-3">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-red-600">
                    WATCH THE RECAP
                  </span>
                  <h3 className="font-semibold">Come Reason With Rattigan</h3>
                </div>

                <p className="text-white/90">
                  Rattigan Ejected From GJDC? Pirates Of Black River: Shifting
                  Sand &amp; Shores AG &amp; Moroccan Fertilizer
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.youtube.com/live/abMvR-GjJfo?si=azCUsmNHIDBEjaB3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-red-600 shadow-lg hover:bg-gray-100"
              >
                <Video className="mr-2 h-5 w-5" />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
