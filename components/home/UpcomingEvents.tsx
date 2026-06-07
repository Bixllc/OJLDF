import * as React from 'react';
import Image from 'next/image';

type EventItem = {
  title: string;
  date: string;
  type: 'Online' | 'In Person';
  imageSrc: string;
  objectFit?: 'cover' | 'contain';
  href?: string;
};

const events: EventItem[] = [
  {
    title: 'Come Reason With Rattigan',
    date: 'Every Wednesday 8pm–10pm EST',
    type: 'Online',
    imageSrc: '/come-reason.png',
    href: '/events',
  },
  {
    title: 'Reason with Rattigan',
    date: 'Every Saturday 3pm–8pm EST',
    type: 'Online',
    imageSrc: '/reason-rattigan.png',
    href: '/events',
  },
  {
    title: '2nd Biennial Online Diaspora Conference',
    date: 'June 14–18, 2026 · 7pm EDT / 6pm JT',
    type: 'Online',
    imageSrc: '/diaspora-conference.png',
    objectFit: 'contain',
    href: '/events',
  },
];

function EventCard({ title, date, type, imageSrc, objectFit = 'cover', href }: EventItem) {
  const CardInner = (
    <div className="h-full flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
      <div className="relative h-64 w-full overflow-hidden flex-shrink-0 bg-black">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={objectFit === 'contain' ? 'object-contain' : 'object-cover'}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-3 w-fit"
          style={{
            backgroundColor: type === 'Online' ? '#00843D' : '#FCD116',
            color: type === 'Online' ? '#fff' : '#000',
          }}
        >
          {type}
        </span>

        <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{date}</p>
      </div>
    </div>
  );

  // If you want the whole card clickable
  if (href) {
    return (
      <a href={href} className="block h-full focus:outline-none focus:ring-2 focus:ring-[#00843D]/40 rounded-2xl">
        {CardInner}
      </a>
    );
  }

  return CardInner;
}

export default function UpcomingEvents() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="mb-2 font-playfair text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="text-gray-600">
              Join us for our latest community programs and broadcasts
            </p>
          </div>

          <a
            href="/events"
            className="inline-flex items-center justify-center rounded-xl border border-[#00843D] px-5 py-2.5 font-semibold text-[#00843D] hover:bg-[#00843D]/5"
          >
            View All Events
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
