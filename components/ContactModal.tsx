'use client';

import { useState } from 'react';

export default function ContactModal({ open, onClose }: any) {
  const [sent, setSent] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#020617] p-8 rounded-2xl w-full max-w-md relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => {
            setSent(false);
            onClose();
          }}
          className="absolute top-4 right-4 text-white text-lg"
        >
          ✕
        </button>

        {!sent ? (
          <>
            <h2 className="text-2xl text-white mb-4">
              Let’s Work Together
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.target as HTMLFormElement;
                const data = new FormData(form);

                await fetch("https://formspree.io/f/mlgkyzpv", {
                  method: "POST",
                  body: data,
                  headers: {
                    Accept: "application/json",
                  },
                });

                setSent(true);

                setTimeout(() => {
                  setSent(false);
                  onClose();
                }, 2500);
              }}
              className="flex flex-col gap-4"
            >

              <input
                name="name"
                placeholder="Your Name"
                required
                className="p-3 rounded bg-black border border-white/10 text-white"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="p-3 rounded bg-black border border-white/10 text-white"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project"
                required
                className="p-3 rounded bg-black border border-white/10 text-white"
              />

              <button className="bg-cyan-500 py-3 rounded text-white hover:bg-cyan-400 transition">
                Send Message
              </button>

            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-white text-xl mb-2">
              ✅ Message Sent!
            </h2>
            <p className="text-gray-400">
              We'll get back to you shortly.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}