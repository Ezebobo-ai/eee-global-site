'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Why EEE Global', href: '#why' },
  { label: 'Solutions', href: '#services' },
  { label: 'Global Impact', href: '#global' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
  { label: 'Team', href: '#team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-black/60 border-b border-white/10'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-20'
          }`}
        >
          {/* ✅ LOGO */}
          <a href="#top" className="flex items-center gap-3 group">
            <Image
              src="/eee logo.jpeg"
              alt="EEE Global Logo"
              width={40}
              height={40}
              className="rounded-full ring-2 ring-cyan-400/30 shadow-md"
              priority
            />

            <span className="font-bold text-lg text-white tracking-wide">
              EEE <span className="text-cyan-400">Global</span>
            </span>
          </a>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-8 text-sm tracking-wider uppercase text-slate-300">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

        
          <div className="flex items-center gap-4">
           <a
  href="#cta"
  className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
>
  Start a Strategic Partnership
</a>


            <button
              aria-label="Toggle menu"
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden mx-4 mt-2 rounded-xl bg-black/80 backdrop-blur-lg border border-white/10 px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-wider">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}