"use client";

import * as React from "react";
import { Play, Pause, Maximize2, X } from "lucide-react";

const videos = [
  {
    src: "/gallery-1.mp4",
    title: "OJLDF Community Highlight 1",
  },
  {
    src: "/gallery-2.mp4",
    title: "OJLDF Community Highlight 2",
  },
  {
    src: "/gallery-3.mp4",
    title: "OJLDF Community Highlight 3",
  },
];

function VideoCard({
  src,
  title,
  onExpand,
}: {
  src: string;
  title: string;
  onExpand: () => void;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black shadow-lg">
      <video
        src={src}
        controls
        preload="metadata"
        playsInline
        className="aspect-video w-full bg-black"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
        <p className="text-white font-semibold text-sm">{title}</p>
      </div>
      <button
        type="button"
        onClick={onExpand}
        className="absolute top-3 right-3 rounded-lg bg-black/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/70"
        aria-label="Expand video"
      >
        <Maximize2 className="h-4 w-4" />
      </button>
    </div>
  );
}

function LightboxModal({
  video,
  onClose,
}: {
  video: (typeof videos)[number] | null;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <button
        type="button"
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
        aria-label="Close"
      />
      <div className="relative z-10 w-[92vw] max-w-4xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <video
          src={video.src}
          controls
          autoPlay
          playsInline
          className="w-full rounded-2xl bg-black shadow-2xl"
        />
        <p className="mt-3 text-center text-white font-semibold">
          {video.title}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [expandedVideo, setExpandedVideo] = React.useState<
    (typeof videos)[number] | null
  >(null);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-playfair text-3xl font-bold text-gray-900 sm:text-4xl">
              Video Gallery
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Watch highlights, community moments, and behind-the-scenes content
              from OJLDF events and broadcasts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCard
                key={video.src}
                src={video.src}
                title={video.title}
                onExpand={() => setExpandedVideo(video)}
              />
            ))}
          </div>
        </div>
      </section>

      <LightboxModal
        video={expandedVideo}
        onClose={() => setExpandedVideo(null)}
      />
    </div>
  );
}
