import * as React from 'react';

type VideoItem = {
  id: string;
  title: string;
};

const videos: VideoItem[] = [
  {
    id: 'llz0e79lIiE',
    title:
      'Surcharge Action Against Vaz?; 20 Reasons PM Should Be Charged For IG & Corruption Prevention Acts!',
  },
  {
    id: 'gybOTP1fhLA',
    title:
      'Holness Got "Gold Spoons"; Will Vaz Admit Bus Is Expensive Failure; Rattigan To Give JA Free Buses?',
  },
  {
    id: 'OHq-Xy5ejIs',
    title:
      "A PARADIGM SHIFT: The J'Can People VOTE A Go Run TINGS – TINGS No Run We; One Rule of Law For All!",
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
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <p className="text-center text-gray-900 leading-relaxed">{title}</p>
    </div>
  );
}

export default function RecapReasonWithRattigan() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 font-playfair text-3xl md:text-4xl font-bold text-gray-900">
            Recap: Reason with Rattigan
          </h2>
          <p className="text-gray-600">
            Watch some of our latest videos here. Tune in every Saturday 3pm–8pm EST.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}
