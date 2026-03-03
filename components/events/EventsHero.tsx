"use client";

import * as React from "react";
import { Video } from "lucide-react";
import { format } from "date-fns";
import { getLatestEventForBanner } from "../../lib/events-data";

function openLink(url: string) {
  if (url.startsWith("http")) {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = url;
  }
}

function pickPrimaryUrl(links?: { url: string; primary?: boolean }[]) {
  return links?.find((l) => l.primary)?.url ?? links?.[0]?.url;
}

function bannerSummaryFromEvent(ev: { description?: string; agenda?: string[] }) {
  if (ev.description && ev.description.trim()) return ev.description;

  if (ev.agenda?.length) {
    const line = ev.agenda.slice(0, 2).join(" • ");
    return line.length > 140 ? `${line.slice(0, 137)}...` : line;
  }

  return "Watch the latest recap.";
}

export default function EventsHero() {
  const latest = React.useMemo(() => getLatestEventForBanner(new Date()), []);

  const badgeDate = latest ? format(latest.date, "MMM d") : "";
  const title = latest?.title ?? "Latest Broadcast";
  const summary = latest ? bannerSummaryFromEvent(latest) : "Watch the latest recap.";

  // ✅ ALWAYS a string
  const primaryUrl =
    (latest ? pickPrimaryUrl(latest.links) : undefined) ??
    "https://www.youtube.com/@OJLDF";

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00843D] via-[#009B3A] to-[#00843D] py-24 text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Events &amp; Programs
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Join us for educational broadcasts, community gatherings, cultural
              celebrations, and legal clinics designed to support and empower our
              diaspora community.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-4 border-[#FCD116] bg-gradient-to-r from-red-600 to-red-700 py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-white" />
              </span>

              <div>
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-red-600">
                    WATCH THE RECAP{badgeDate ? ` • ${badgeDate}` : ""}
                  </span>
                  <h3 className="font-semibold">{title}</h3>
                </div>

                <p className="text-white/90">{summary}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openLink(primaryUrl)}
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-red-600 shadow-lg hover:bg-gray-100"
              >
                <Video className="mr-2 h-5 w-5" />
                YouTube
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}