import * as React from "react";
import Image from "next/image";
import { Heart, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220]">
      {/* Call to Action Bar */}
      <div className="bg-gradient-to-r from-[#00843D] to-[#009B3A] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-playfair text-white mb-1 text-2xl font-bold">Support Our Mission</h3>
              <p className="text-white/90 max-w-3xl">
                Support justice and equality with OJLDF. Donate, volunteer, or spread awareness today.
                Stand up for those who need it most. Act now!
              </p>
            </div>

            <a
              href="https://www.zeffy.com/en-US/donation-form/ojldf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#FCD116] px-6 py-3 font-semibold text-gray-900 hover:bg-[#e5bd0f] shadow-sm"
            >
              <Heart className="w-5 h-5 mr-2" />
              Get Involved
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* Put your logo in /public/logo.png (or update path) */}
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src="/logo.png" alt="One Jamaica" fill className="object-cover" />
              </div>

              <div>
                <div className="text-white text-lg font-bold leading-tight">ONE JAMAICA</div>
                <div className="text-gray-400 text-sm">Legal Defense Foundation</div>
              </div>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-sm">
              Democracy is central to Jamaican identity and institutions, but the number of Jamaicans
              saying they do not trust the government has increased to the breaking point of government
              instability. One Jamaica Legal Defense Foundation (OJLDF) is dedicated to defeating the
              threat to democracy, and hold public officials accountable.
            </p>

            <a
              href="https://www.facebook.com/people/One-Jamaica-Legal-Defense-Foundation/61550819896267/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-[#00843D] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-5 text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Events", href: "#events" },
                { label: "Learning Center", href: "#learning" },
                { label: "Memberships", href: "#memberships" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#B8860B] transition-colors text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-5 text-xl font-semibold">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.zeffy.com/en-US/donation-form/ojldf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#B8860B] transition-colors text-lg"
                >
                  Donate
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#B8860B] transition-colors text-lg">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-[#B8860B] transition-colors text-lg">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-[#B8860B] transition-colors text-lg">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-gray-300 hover:text-[#B8860B] transition-colors text-lg">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h4 className="text-white mb-5 text-xl font-semibold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-lg leading-relaxed">
                  11582 SW Village Parkway, #571
                  <br />
                  Port St. Lucie, FL 34987
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#B8860B] flex-shrink-0" />
                <a
                  href="tel:+17576553377"
                  className="text-gray-300 hover:text-[#B8860B] transition-colors text-lg"
                >
                  (757) 655-3377
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#B8860B] flex-shrink-0" />
                <a
                  href="mailto:aojldf@gmail.com"
                  className="text-gray-300 hover:text-[#B8860B] transition-colors text-lg"
                >
                  aojldf@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} One Jamaica Legal Defense Foundation. All rights reserved.
            Designed &amp; Developed by Bix LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
