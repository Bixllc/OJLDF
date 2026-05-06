'use client';

import * as React from 'react';
import Image from 'next/image';
import { Heart, BookOpen, Shield } from 'lucide-react';

type InitiativeCardProps = {
  title: string;
  children: React.ReactNode;
};

const MAGNITSKY_PETITION_URL =
  'https://www.change.org/p/implement-the-magnitsky-act-to-challenge-corruption-and-human-rights-violations-in-jamaica?recruiter=1369522934&recruited_by_id=1c543860-0a23-11f0-b758-2dd111e54ae9&utm_source=share_petition&utm_campaign=share_petition&utm_term=psf&utm_medium=copylink&utm_content=cl_sharecopy_490492327_en-US%3A9';

const DONATE_URL = 'https://www.zeffy.com/en-US/donation-form/ojldf';

function CardShell({ title, children }: InitiativeCardProps) {
  return (
    <div className="rounded-2xl border-2 border-[#00843D]/20 bg-white shadow-lg overflow-hidden">
      <div className="p-8">
        <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function ImageBlock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden mb-5">
      <Image src={src} alt={alt} width={1200} height={700} className="w-full h-48 object-cover" />
    </div>
  );
}

function PetitionVideo() {
  return (
    <div className="mt-4 rounded-xl overflow-hidden bg-black">
      <video controls className="w-full aspect-video bg-black" preload="metadata">
        <source src="/ojldf-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function MagnitskySignDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-10 h-10 text-red-600" />
            <div>
              <h3 className="text-3xl font-extrabold text-red-600 tracking-tight">STOP</h3>
              <p className="mt-1 text-base text-gray-600">Important information before you proceed</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="text-3xl leading-none text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 rounded-2xl border-2 border-red-500 bg-red-50 p-6">
          <p className="text-2xl font-extrabold text-gray-900 mb-3">
            Do not Donate here, ONLY SIGN
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This page is for signing the Magnitsky Petition only. If you wish to donate,
            please click the Donate button instead.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          {/* Continue to Sign */}
          <button
            type="button"
            onClick={() => {
              onClose();
              window.open(MAGNITSKY_PETITION_URL, '_blank', 'noopener,noreferrer');
            }}
            className="flex-1 inline-flex items-center justify-center rounded-2xl bg-[#00843D] px-6 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#006930]"
          >
            <Shield className="w-5 h-5 mr-2" />
            Continue to Sign
          </button>

          {/* Donate Instead */}
          <button
            type="button"
            onClick={() => {
              onClose();
              window.open(DONATE_URL, '_blank', 'noopener,noreferrer');
            }}
            className="flex-1 inline-flex items-center justify-center rounded-2xl bg-[#FCD116] px-6 py-4 text-lg font-semibold text-gray-900 shadow-lg hover:bg-[#E5BD0F]"
          >
            <Heart className="w-5 h-5 mr-2" />
            Donate Instead
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ImportantInitiatives() {
  const [showMagnitskyDialog, setShowMagnitskyDialog] = React.useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 font-playfair text-3xl md:text-4xl font-bold text-gray-900">
            Important Initiatives &amp; Updates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us in advocating for justice and making a difference in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Rural School Bus Program Petition */}
          <CardShell title="Rural School Bus Program Petition to Auditor General">
            <ImageBlock src="/schoolbus.png" alt="Jamaican School Bus" />

            <p className="text-gray-600 mb-6 leading-relaxed">
              The rural school bus program in Jamaica is a great step in the right direction. However
              there are some discrepancies that need to be resolved! Join the effort in getting this
              addressed by emailing it to the Auditor General.
            </p>

            <div className="bg-[#FCD116]/10 border-l-4 border-[#FCD116] p-4 rounded-r-lg mb-6">
              <p className="mb-2 font-semibold text-gray-900">How to email this letter:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Download the file below</li>
                <li>
                  Email it to:{' '}
                  <a
                    href="mailto:audgen@auditorgeneral.gov.jm"
                    className="text-[#00843D] font-semibold hover:underline"
                  >
                    audgen@auditorgeneral.gov.jm
                  </a>
                </li>
              </ol>
            </div>

            <a
              href="/Rural_School_Bus_Petition.pdf"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#00843D] px-4 py-3 font-semibold text-white hover:bg-[#00843D]/90"
              download
            >
              <Shield className="w-5 h-5 mr-2" />
              Download Petition Letter
            </a>
          </CardShell>

          {/* Magnitsky Petition */}
          <CardShell title="Magnitsky Petition">
            <ImageBlock src="/magnisky.png" alt="Magnitsky Petition - Scales of Justice" />

            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Donate */}
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#FCD116] px-3 py-2.5 text-sm font-semibold text-gray-900 hover:bg-[#FCD116]/90"
              >
                <Heart className="w-4 h-4 mr-1" />
                Donate
              </a>

              {/* Sign Now (opens warning dialog) */}
              <button
                type="button"
                onClick={() => setShowMagnitskyDialog(true)}
                className="inline-flex items-center justify-center rounded-xl bg-[#00843D] px-3 py-2.5 text-sm font-semibold text-white hover:bg-[#00843D]/90"
              >
                <Shield className="w-4 h-4 mr-2" />
                Sign Now
              </button>
            </div>

            <PetitionVideo />
          </CardShell>

          {/* Jamaica Diaspora Council Election Postponed */}
          <CardShell title="Jamaica Diaspora Council Election Postponed">
            <ImageBlock src="/jadiaspora.jpeg" alt="Jamaica Diaspora Council Election" />

            <p className="text-gray-600 mb-6 leading-relaxed">
              The Jamaica Diaspora Council elections have been postponed. Stay informed about this
              important development affecting diaspora representation and governance.
            </p>

            <div className="bg-[#FCD116]/10 border-l-4 border-[#FCD116] p-4 rounded-r-lg mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Read the full story from The Jamaica Gleaner to understand the reasons behind the
                postponement and what it means for the diaspora community.
              </p>
            </div>

            <a
              href="https://jamaica-gleaner.com/article/news/20251124/jamaica-diaspora-council-elections-postponed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#00843D] px-4 py-3 font-semibold text-white hover:bg-[#00843D]/90"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Read Full Article
            </a>
          </CardShell>
        </div>
      </div>

      <MagnitskySignDialog open={showMagnitskyDialog} onClose={() => setShowMagnitskyDialog(false)} />
    </section>
  );
}
