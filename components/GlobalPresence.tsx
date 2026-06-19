import Reveal from './Reveal';

const STATS = [
  { value: '47', label: 'Countries served' },
  { value: '26', label: 'Delivery hubs' },
  { value: '4,200+', label: 'Specialists' },
  { value: '24/7', label: 'Follow-the-sun coverage' },
];

const REGIONS = [
  { name: 'Americas', hubs: '9 hubs', cities: ['New York · São Paulo', 'Toronto · Austin', 'Mexico City · Bogotá'] },
  { name: 'EMEA', hubs: '11 hubs', cities: ['London · Frankfurt', 'Lagos · Nairobi', 'Dubai · Warsaw'] },
  { name: 'APAC', hubs: '6 hubs', cities: ['Singapore · Bengaluru', 'Tokyo · Sydney', 'Seoul · Manila'] },
];

export default function GlobalPresence() {
  return (
    <section id="global" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(37,99,235,0.18),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="block max-w-2xl mx-auto text-center mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cy-400">Global footprint</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 leading-tight">
            One team, distributed across every time zone that matters.
          </h2>
        </Reveal>

        <Reveal className="block mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-navy-950/80 p-8 text-center">
                <div className="font-display font-bold text-3xl lg:text-4xl text-white">{stat.value}</div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {REGIONS.map((region, i) => (
            <Reveal key={region.name} delay={i * 80}>
              <div className="glass rounded-2xl p-8 h-full">
                <div className="font-mono text-[11px] uppercase tracking-wider text-cy-400 mb-3">{region.name}</div>
                <h3 className="font-display font-semibold text-lg text-white mb-4">{region.hubs}</h3>
                <ul className="text-sm text-slate-400 space-y-2">
                  {region.cities.map((city) => (
                    <li key={city}>{city}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
