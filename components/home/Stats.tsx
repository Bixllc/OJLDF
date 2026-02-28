import * as React from 'react';

const stats = [
  { number: '500+', label: 'Community Members' },
  { number: '150+', label: 'Legal Cases Supported' },
  { number: '50+', label: 'Educational Events' },
  { number: '2+', label: 'Years of Service' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="text-center flex-1 min-w-[140px] px-6">
                <div className="text-[#00843D] mb-2 text-3xl md:text-4xl font-bold">
                  {stat.number}
                </div>

                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>

              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-24 bg-[#FCD116]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
