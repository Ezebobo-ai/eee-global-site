import Image from 'next/image';

const SOLUTION_LINKS = [
  'Web Development',
  'Cloud & Hosting',
  'Cybersecurity',
  'IT Infrastructure',
  'Digital Transformation',
];

const COMPANY_LINKS = [
  'About EEE Global',
  'Our Projects',
  'Careers',
  'Insights',
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/[0.06] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            {/* ✅ LOGO */}
            <a href="#top" className="flex items-center gap-3 mb-5">
              <Image
                src="/eee logo.jpeg"
                alt="EEE Global Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-white font-bold text-lg">
                EEE <span className="text-cyan-400">Global</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              EEE Global is a technology and infrastructure company delivering scalable digital solutions across Africa and beyond.
            </p>

            {/* ✅ SAFE SOCIAL ICONS (IMAGES) */}
            <div className="flex gap-4">

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                  className="opacity-70 hover:opacity-100 transition"
                />
              </a>

              
                {/* ✅ TikTok */}
              <a
                href="https://tiktok.com"
                  target="_blank"
                className="hover:opacity-80 transition"
                >
                <Image src="/tiktok.png" alt="TikTok" width={22} height={22} />
               </a>


              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={22}
                  height={22}
                  className="opacity-70 hover:opacity-100 transition"
                />
              </a>

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={22}
                  height={22}
                  className="opacity-70 hover:opacity-100 transition"
                />
              </a>

            </div>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 className="text-xs uppercase text-slate-300 mb-5">Solutions</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {SOLUTION_LINKS.map((link) => (
                <li key={link}>
                  <a href="#services" className="hover:text-cyan-400 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-xs uppercase text-slate-300 mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {COMPANY_LINKS.map((link) => (
                <li key={link}>
                  <a href="#why" className="hover:text-cyan-400 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs uppercase text-slate-300 mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>eeeglobal3@gmail.com</li>
              <li>+234 813 270 9509</li>
              <li>
                Abuja, Nigeria <br />
                Lagos, Nigeria
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex justify-between pt-8 border-t border-white/[0.06] text-xs text-slate-500">
          <p>© 2026 EEE Global. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}