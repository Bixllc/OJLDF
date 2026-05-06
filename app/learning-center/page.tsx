"use client";

import * as React from "react";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import LCHero from "@/components/learning-center/LCHero";
import Resources from "@/components/learning-center/Resources";
import Gallery from "@/components/learning-center/Gallery";

export default function LearningCenterPage() {
  const [tab, setTab] = React.useState<"resources" | "gallery">("resources");

  return (
    <>
      <NavBar />
      <LCHero />

      {/* Tab Bar */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8" aria-label="Learning Center tabs">
            <button
              type="button"
              onClick={() => setTab("resources")}
              className={`relative py-4 text-sm font-semibold transition-colors ${
                tab === "resources"
                  ? "text-[#00843D]"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Resources
              {tab === "resources" && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t bg-[#00843D]" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setTab("gallery")}
              className={`relative py-4 text-sm font-semibold transition-colors ${
                tab === "gallery"
                  ? "text-[#00843D]"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Gallery
              {tab === "gallery" && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t bg-[#00843D]" />
              )}
            </button>
          </nav>
        </div>
      </div>

      {tab === "resources" ? <Resources /> : <Gallery />}

      <Footer />
    </>
  );
}
