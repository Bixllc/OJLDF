import * as React from 'react';

type VideoItem = {
  id: string; // YouTube video id
  title: string;
};

const videos: VideoItem[] = [
  {
    id: 'hoU-7j9FV3w',
    title:
      'Beverly Manley Duncan/Holness & The IC/Diaspora Senator/Negotiation With Teachers/School Buses',
  },
  {
    id: 'NUDVyt7ytyA',
    title: 'Election Finally! Taxpayers Funding Campaigns, School Bus Safety',
  },
  {
    id: 'uvcZhF8MDz0',
    title: 'Andrew IC Debacle; Perception of Independence, Election & School Bus!',
  },
];

function VideoCard({ id, title }: VideoItem) {
  return (
    <div className="space-y-4">
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <p className="text-center text-gray-900 leading-relaxed">{title}</p>
    </div>
  );
}

export default function RecapComeReasonWithRattigan() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900">
            Recap: Come Reason With Rattigan
          </h2>
          <p className="text-gray-600">
            Watch some of our latest videos here. Tune in every Wednesday 8pm-10pm EST.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v) => (
            <VideoCard key={v.id} id={v.id} title={v.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
