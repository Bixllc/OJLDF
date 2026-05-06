'use client';

import Image from 'next/image';
import { Users } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-20 scroll-mt-24"
      aria-labelledby="who-we-are-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FCD116]/20 rounded-full mb-6">
              <Users className="w-5 h-5 text-[#b89510]" />
              <span className="text-[#b89510] font-medium">Who We Are</span>
            </div>

            <h2
              id="who-we-are-heading"
              className="mb-6 font-playfair text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
            >
              Passionate Advocates for Change
            </h2>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              OJLDF was founded on the principle that justice should be a right, not
              a privilege. Our organization is made up of passionate legal
              professionals, advocates, and community leaders who share a common
              goal: to create a more just society by providing high-quality legal
              defense and advocating for human rights.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our team brings together years of experience in law, advocacy, and
              community service, working tirelessly to represent individuals in
              need and to challenge systemic injustices within the legal system.
              We are based in Jamaica but our reach extends globally, as we
              collaborate with international partners and supporters who share
              our vision of a world where justice prevails for all.
            </p>
          </div>

          {/* Image */}
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
            <Image
                src="/whoweare.jpeg"
                alt="Community members supporting one another"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
