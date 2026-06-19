'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import ContactModal from './ContactModal';

export default function CTABand() {
  const [open, setOpen] = useState(false);

  return (
    <section id="cta" className="relative py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="relative rounded-3xl glass p-12 lg:p-16 text-center overflow-hidden">

            {/* Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent blur-3xl opacity-60" />

            <div className="relative">

              {/* Heading */}
              <h2 className="font-bold text-3xl sm:text-4xl text-white max-w-2xl mx-auto">
                Let’s Build Infrastructure That Scales With Your Business
              </h2>

              {/* Text */}
              <p className="mt-5 text-slate-400 max-w-lg mx-auto">
                EEE Global partners with forward-thinking businesses to design and scale digital systems built for growth.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap justify-center gap-4">

                {/* ✅ OPEN MODAL */}
                <button
                  onClick={() => setOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
                >
                  Start a Strategic Partnership →
                </button>

                {/* ✅ WHATSAPP */}
                <a
                  href="https://wa.me/2348132709509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full border border-white/15 text-white hover:bg-white/5 transition"
                >
                  Chat on WhatsApp
                </a>

              </div>

            </div>
          </div>
        </Reveal>
      </div>

      {/* ✅ MODAL */}
      <ContactModal open={open} onClose={() => setOpen(false)} />

    </section>
  );
}