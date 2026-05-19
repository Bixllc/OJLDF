'use client';

import * as React from 'react';
import Image from 'next/image';
import { Heart, Radio, Video } from 'lucide-react';

type JamaicaImage = { url: string; alt: string };

function ImageWithFallback({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      priority={priority}
      className={className}
      onError={() => setImgSrc('/hero-fallback.jpg')}
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  );
}

function SubscribeDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-3xl font-bold text-[#00843D]">
              Subscribe to Our YouTube Channels
            </h3>
            <p className="mt-2 text-lg text-gray-600">
              Choose which channel you&apos;d like to subscribe to
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-800"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="mt-8 space-y-6">
          {/* OJLDF Channel */}
          <div className="rounded-2xl border-2 border-[#FCD116] p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FCD116]">
                <Video className="h-7 w-7 text-black" />
              </div>

              <div className="flex-1">
                <h4 className="text-xl font-bold text-[#00843D]">OJLDF</h4>
                <p className="mt-1 text-gray-600">Wednesday Shows – Come Reason With Rattigan</p>

                <a
                  href="https://www.youtube.com/@ojldf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#00843D] px-6 py-4 text-white font-semibold hover:bg-[#007636]"
                >
                  <Video className="h-5 w-5 mr-2" />
                  Subscribe to OJLDF
                </a>
              </div>
            </div>
          </div>

          {/* Reason With Rattigan Channel */}
          <div className="rounded-2xl border-2 border-[#00843D] p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00843D]">
                <Video className="h-7 w-7 text-white" />
              </div>

              <div className="flex-1">
                <h4 className="text-xl font-bold text-[#00843D]">Reason With Rattigan</h4>
                <p className="mt-1 text-gray-600">
                  Saturday Shows – Legal &amp; Community Discussions
                </p>

                <a
                  href="https://www.youtube.com/@reasonwithrattigan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#00843D] px-6 py-4 text-white font-semibold hover:bg-[#007636]"
                >
                  <Video className="h-5 h-5 mr-2" />
                  Subscribe to Reason With Rattigan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [showSubscribeDialog, setShowSubscribeDialog] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const jamaicaImages: JamaicaImage[] = [
    { url: '/hero1.jpeg', alt: 'Sunset over the Jamaican coastline' },
    { url: '/hero2.jpeg', alt: 'Scenic Jamaican landscape' },
  ];

  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % jamaicaImages.length);
    }, 4500);

    return () => clearInterval(id);
  }, [jamaicaImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(to right, rgba(22,101,52,0.92) 0%, rgba(22,101,52,0.92) 35%, rgba(22,101,52,0.15) 100%)',
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto" style={{ padding: '3.5rem 2.5rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10 lg:py-16">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Yellow Rule */}
              <div style={{ width: 40, height: 3, backgroundColor: '#EAB308' }} />

              <h1 className="font-playfair font-bold leading-[1.1] text-[3.25rem] sm:text-[3.5rem] lg:text-[4rem]">
                One Jamaica
                <span className="block text-[#FCD116]">Legal Defense Foundation</span>
              </h1>

              <p className="text-lg sm:text-xl leading-[1.7] max-w-xl font-light" style={{ color: 'rgba(255,255,255,0.70)' }}>
                Committed to protecting justice and equality for everyone - especially individuals
                who have been wrongfully accused, marginalized, or deprived of fair legal representation.
                We believe every person deserves the opportunity to defend their rights, regardless
                of their financial circumstances.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowSubscribeDialog(true)}
                  className="rounded-xl bg-white text-[#00843D] hover:bg-gray-100 font-semibold relative z-20"
                  style={{ fontSize: '1.125rem', padding: '1.5rem 2rem' }}
                >
                  Subscribe Now
                </button>

                <a
                  href="https://www.zeffy.com/en-US/donation-form/ojldf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-[#FCD116] bg-transparent text-white hover:bg-[#FCD116] hover:text-gray-900 font-semibold"
                  style={{ fontSize: '1.125rem', padding: '1.5rem 2rem' }}
                >
                  <Heart className="w-5 h-5 mr-2 text-current" />
                  Donate Now
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-[#FCD116] rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative w-full" style={{ aspectRatio: '4 / 3', minHeight: 320 }}>
                  {jamaicaImages.map((image, index) => (
                    <ImageWithFallback
                      key={image.url}
                      src={image.url}
                      alt={image.alt}
                      priority={index === 0}
                      className={`object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar — pinned to bottom */}
        <div style={{ backgroundColor: 'rgba(6,52,27,0.85)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-3 divide-x divide-white/20">
              {[
                { value: '20K+', label: 'Subscribers' },
                { value: '500+', label: 'Persons Helped' },
                { value: '2+', label: 'Years' },
              ].map((stat) => (
                <div key={stat.label} className="py-5 px-6 text-center sm:text-left">
                  <div className="text-[1.75rem] sm:text-[2rem] font-bold leading-none text-[#FCD116]">
                    {stat.value}
                  </div>
                  <div className="text-[0.7rem] sm:text-xs uppercase tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.60)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Broadcast Banner */}
      <section className="py-8 bg-gradient-to-r from-red-600 to-red-700 text-white border-y-4 border-[#FCD116]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
              </span>

              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-red-600">
                     🎬 WATCH THE RECAP
                  </span>
                  <h3 className="font-semibold">Reason With Rattigan</h3>
                </div>
                <p className="text-white/90">Should &ldquo;Patois&rdquo; Be Recognized in Parliament? &bull; Parliamentarians Disrupt Committee Meeting: &ldquo;Government Badness&rdquo; and Ignorance</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://reggaeglobalradio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-red-600 shadow-lg hover:bg-gray-100"
              >
                <Radio className="w-5 h-5 mr-2" />
                Reggae Global Radio
              </a>

             <a
              href="https://www.youtube.com/@OJLDF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-red-600 shadow-lg hover:bg-gray-100"
            >
              <Video className="w-5 h-5 mr-2" />
              YouTube
            </a>
            </div>
          </div>
        </div>
      </section>

      <SubscribeDialog open={showSubscribeDialog} onClose={() => setShowSubscribeDialog(false)} />
    </div>
  );
}
