const PARTNERS = [
  'NORTHBRIDGE',
  'VELOR INDUSTRIES',
  'ARCADIA HOLDINGS',
  'MERIDIAN BANK',
  'OCTAVE LOGISTICS',
  'STRATA ENERGY',
];

export default function LogoStrip() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="border-y border-white/[0.06] py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-6">
          Trusted by category leaders across five continents
        </p>
        <div className="flex overflow-hidden">
          <div className="flex gap-16 animate-ticker shrink-0 items-center opacity-60">
            {items.map((name, i) => (
              <span key={i} className="font-display font-semibold text-xl text-slate-400 whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
