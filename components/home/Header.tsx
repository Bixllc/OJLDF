"use client";

import Link from "next/link";
import { Heart, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-gray-200 bg-gray-50" />
          <span className="sr-only">OJLDF</span>
        </Link>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-10 text-[15px]">
          <Link href="/" className="font-medium text-[#00843D]">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#00843D]">
            About
          </Link>
          <Link href="/events" className="text-gray-700 hover:text-[#00843D]">
            Events
          </Link>
          <Link
            href="/learning-center"
            className="text-gray-700 hover:text-[#00843D]"
          >
            Learning Center
          </Link>
          <Link
            href="/memberships"
            className="text-gray-700 hover:text-[#00843D]"
          >
            Memberships
          </Link>
          <Link
            href="/get-involved"
            className="text-gray-700 hover:text-[#00843D]"
          >
            Get Involved
          </Link>
        </nav>

        {/* Right: CTA buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex h-10 items-center rounded-full border border-[#00843D] px-5 text-sm font-medium text-[#00843D] hover:bg-[#00843D]/5"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Link>

          <Link
            href="/donate"
            className="inline-flex h-10 items-center rounded-full bg-[#FCD116] px-5 text-sm font-medium text-black hover:bg-[#E5BD0F]"
          >
            <Heart className="mr-2 h-4 w-4" />
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
