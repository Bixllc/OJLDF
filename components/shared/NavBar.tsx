'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, Mail } from 'lucide-react';

type NavLink = { name: string; id: string; href: string };

interface NavbarProps {
  currentPage?: string; // optional legacy support
  onNavigate?: (page: string) => void; // optional legacy support
}

export default function NavBar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: 'Home', id: 'home', href: '/' },
    { name: 'About', id: 'about', href: '/about' },
    { name: 'Events', id: 'events', href: '/events' },
    { name: 'Learning Center', id: 'learning', href: '/learning-center' },
    { name: 'Memberships', id: 'memberships', href: '/memberships' },
    { name: 'Get Involved', id: 'getinvolved', href: '/getinvolved' },
  ];

  const isActive = (link: NavLink) => {
    if (currentPage) return currentPage === link.id;
    return pathname === link.href;
  };

  const closeMenu = () => setIsMenuOpen(false);

  // If you still need legacy support somewhere, keep this:
  const handleLegacyNavigate = (id: string) => {
    if (onNavigate) onNavigate(id);
    closeMenu();
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
            aria-label="Go to Home"
          >
            <Image
              src="/logo.png"
              alt="One Jamaica Legal Defense Foundation"
              width={64}
              height={64}
              className="h-16 w-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => handleLegacyNavigate(link.id)}
                className={`text-lg transition-colors ${
                  isActive(link)
                    ? 'text-[#00843D]'
                    : 'text-gray-700 hover:text-[#00843D]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="inline-flex items-center justify-center rounded-xl border border-[#00843D] px-5 py-3 font-semibold text-[#00843D] hover:bg-[#00843D]/5"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Link>

            <a
              href="https://www.zeffy.com/en-US/donation-form/ojldf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#FCD116] px-6 py-3 font-semibold text-gray-900 hover:bg-[#e5bd0f]"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLegacyNavigate(link.id)}
                  className={`rounded-lg px-4 py-3 text-left text-lg transition-colors ${
                    isActive(link)
                      ? 'bg-[#00843D]/10 text-[#00843D]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-2 flex flex-col gap-3 border-t px-4 pt-4">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-[#00843D] px-5 py-3 font-semibold text-[#00843D] hover:bg-[#00843D]/5"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>

                <a
                  href="https://www.zeffy.com/en-US/donation-form/ojldf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#FCD116] px-6 py-3 font-semibold text-gray-900 hover:bg-[#e5bd0f]"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}