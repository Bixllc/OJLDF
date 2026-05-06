'use client';

import Image from 'next/image';

export default function JoinUs() {
  return (
    <section id="join-us" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="mb-6 font-playfair text-3xl sm:text-4xl font-bold tracking-tight">
              Join Us in Making a Difference
            </h2>

            <p className="mb-8 text-gray-600 text-lg leading-relaxed">
              The fight for justice is ongoing, and we need your support. Whether
              you are a legal professional, an advocate, or simply someone who
              believes in equality, there are many ways to get involved with
              OJLDF. Together, we can make a difference and ensure that justice
              is served for all.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  window.open(
                    'https://www.zeffy.com/en-US/donation-form/ojldf',
                    '_blank'
                  )
                }
                className="inline-flex w-fit items-center justify-center rounded-xl border-2 border-[#00843D] px-6 py-3 font-semibold text-[#00843D] transition-colors hover:bg-[#00843D] hover:text-white"
              >
                Get Involved
              </button>
            </div>
          </div>

          {/* Image */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/jaflag.jpeg"
                alt="People volunteering together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
