import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="relative pt-44 pb-28 lg:pt-52 lg:pb-36 bg-grid">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(37,99,235,0.25),transparent),radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(34,211,238,0.12),transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/40 to-navy-950" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-cy-300 border border-cy-300/25 rounded-full px-4 py-1.5 mb-8 bg-cy-300/5">
            <span className="w-1.5 h-1.5 rounded-full bg-cy-300 animate-pulse-node" />
            Operating in 47 countries
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
             Driving <span className="text-cyan-400">Global Digital Infrastructure</span> for the Future of Enterprise.
            </h1>
             <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
              <p className="...">
          We design, develop, and maintain scalable digital platforms that help businesses operate efficiently, grow sustainably, and compete in today’s digital landscape.
              </p>

              <section className="py-20 px-6 bg-[#020617] text-center">
  <div className="max-w-3xl mx-auto">
    
    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
      We don’t just deliver technology.
    </p>

    <p className="mt-5 text-lg md:text-xl text-gray-400 leading-relaxed">
      We partner with businesses to design systems that last, scale, and compete globally.
    </p>

  </div>
</section>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-primary text-navy-950 font-semibold transition-all duration-300"
            >
              Talk to our team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold hover:border-cy-300/50 hover:bg-white/5 transition-all duration-300"
            >
              Explore capabilities
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 max-w-md gap-6 border-t border-white/10 pt-8">
            <div>
              <div className="font-display font-bold text-2xl text-white">
                26<span className="text-cy-400">+</span>
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mt-1">
                Years in operation
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-white">
                4,200<span className="text-cy-400">+</span>
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mt-1">
                Specialists worldwide
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-white">
                98<span className="text-cy-400">%</span>
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mt-1">
                Client retention
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative h-[420px] lg:h-[560px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 480 480" className="w-full h-full max-w-[520px] animate-drift">
                <defs>
                  <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                </defs>
                <circle cx="240" cy="240" r="160" fill="url(#coreGlow)" />
                <g className="animate-spin-slow" style={{ transformOrigin: 'center' }}>
                  <ellipse cx="240" cy="240" rx="150" ry="150" fill="none" stroke="rgba(91,141,247,0.25)" strokeWidth="1" />
                  <ellipse cx="240" cy="240" rx="150" ry="55" fill="none" stroke="rgba(91,141,247,0.35)" strokeWidth="1" />
                  <ellipse cx="240" cy="240" rx="150" ry="100" fill="none" stroke="rgba(91,141,247,0.2)" strokeWidth="1" />
                  <ellipse cx="240" cy="240" rx="55" ry="150" fill="none" stroke="rgba(91,141,247,0.35)" strokeWidth="1" />
                  <ellipse cx="240" cy="240" rx="100" ry="150" fill="none" stroke="rgba(91,141,247,0.2)" strokeWidth="1" />
                </g>
                <g className="animate-spin-rev" style={{ transformOrigin: 'center' }}>
                  <circle cx="240" cy="240" r="195" fill="none" stroke="url(#ringGrad)" strokeWidth="1.2" strokeDasharray="2 10" opacity="0.6" />
                </g>
                <circle cx="240" cy="240" r="150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle className="animate-pulse-node" cx="150" cy="170" r="4" fill="#22D3EE" />
                <circle className="animate-pulse-node" cx="330" cy="190" r="4" fill="#67E8F9" style={{ animationDelay: '.6s' }} />
                <circle className="animate-pulse-node" cx="290" cy="330" r="4" fill="#22D3EE" style={{ animationDelay: '1.2s' }} />
                <circle className="animate-pulse-node" cx="175" cy="320" r="4" fill="#3B82F6" style={{ animationDelay: '1.8s' }} />
                <circle className="animate-pulse-node" cx="240" cy="90" r="3.5" fill="#67E8F9" style={{ animationDelay: '.3s' }} />
                <path d="M150 170 Q240 110 330 190" fill="none" stroke="#22D3EE" strokeWidth="1" opacity="0.45" />
                <path d="M330 190 Q310 270 290 330" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
                <path d="M290 330 Q230 380 175 320" fill="none" stroke="#22D3EE" strokeWidth="1" opacity="0.4" />
                <path d="M175 320 Q130 250 150 170" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>

            <div className="absolute top-6 right-2 lg:right-8 glass rounded-2xl px-5 py-4 animate-drift">
              <div className="font-mono text-[10px] uppercase tracking-wider text-cy-300">Live deployments</div>
              <div className="font-display text-xl text-white font-bold mt-1">1,840 nodes</div>
            </div>
            <div className="absolute bottom-8 left-0 lg:left-4 glass rounded-2xl px-5 py-4 animate-drift" style={{ animationDelay: '2.2s' }}>
              <div className="font-mono text-[10px] uppercase tracking-wider text-cy-300">Uptime SLA</div>
              <div className="font-display text-xl text-white font-bold mt-1">99.99%</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
