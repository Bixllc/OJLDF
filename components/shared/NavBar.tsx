'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, Mail } from 'lucide-react';

type NavLink = { name: string; id: string; href?: string };

interface NavbarProps {
  currentPage?: string; // optional legacy support
  onNavigate?: (page: string) => void; // optional legacy support
}

export default function NavBar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Map "id" -> route (for multi-page navigation)
  // You can add more routes later (events, etc.) when you create those pages.
  const navLinks: NavLink[] = [
    { name: 'Home', id: 'home', href: '/' },
    { name: 'About', id: 'about', href: '/about' },
    { name: 'Events', id: 'events', href:'/events' }, 
    { name: 'Learning Center', id: 'learning', href:'/learning-center'},
    { name: 'Memberships', id: 'memberships' },
    { name: 'Get Involved', id: 'getinvolved' },
  ];

  // Determine active state (works even if you don't pass currentPage)
  const isActive = (link: NavLink) => {
    if (currentPage) return currentPage === link.id; // support your existing prop if you use it
    if (link.href) return pathname === link.href;
    return false;
  };

  const scrollToId = (id: string) => {
    // try to find a section with that id on the current page
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    return false;
  };

  const handleNavClick = (link: NavLink) => {
    // Legacy callback support (if you used it somewhere)
    if (onNavigate) onNavigate(link.id);

    // If the link is a section id (no href), attempt smooth scroll
    if (!link.href) {
      scrollToId(link.id);
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
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
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link)}
                  className={`transition-colors text-lg ${
                    isActive(link) ? 'text-[#00843D]' : 'text-gray-700 hover:text-[#00843D]'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className={`transition-colors text-lg ${
                    isActive(link) ? 'text-[#00843D]' : 'text-gray-700 hover:text-[#00843D]'
                  }`}
                >
                  {link.name}
                </button>
              )
            )}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                // if you make a /contact page later, switch to router push or Link
                scrollToId('contact');
                setIsMenuOpen(false);
              }}
              className="inline-flex items-center justify-center rounded-xl border border-[#00843D] px-5 py-3 font-semibold text-[#00843D] hover:bg-[#00843D]/5"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </button>

            <a
              href="https://www.zeffy.com/en-US/donation-form/ojldf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#FCD116] px-6 py-3 font-semibold text-gray-900 hover:bg-[#e5bd0f]"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.href ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => handleNavClick(link)}
                    className={`text-left px-4 py-3 rounded-lg transition-colors text-lg ${
                      isActive(link) ? 'bg-[#00843D]/10 text-[#00843D]' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link)}
                    className={`text-left px-4 py-3 rounded-lg transition-colors text-lg ${
                      isActive(link) ? 'bg-[#00843D]/10 text-[#00843D]' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              )}

              <div className="flex flex-col gap-3 px-4 pt-4 mt-2 border-t">
                <button
                  type="button"
                  onClick={() => {
                    scrollToId('contact');
                    setIsMenuOpen(false);
                  }}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-[#00843D] px-5 py-3 font-semibold text-[#00843D] hover:bg-[#00843D]/5"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </button>

                <a
                  href="https://www.zeffy.com/en-US/donation-form/ojldf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#FCD116] px-6 py-3 font-semibold text-gray-900 hover:bg-[#e5bd0f]"
                >
                  <Heart className="w-5 h-5 mr-2" />
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
