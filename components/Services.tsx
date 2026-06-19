import Reveal from './Reveal';
import ServiceCard, { type Service } from './ServiceCard';

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Cloud & Infrastructure',
    description:
      'Multi-cloud architecture, migration, and SRE operations engineered for scale, resilience, and cost efficiency.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="1.6">
        <path d="M3 18h18M3 12h18M3 6h18" />
      </svg>
    ),
  },
  {
    index: '02',
    title: 'Applied AI & Data',
    description:
      'Production-grade machine learning, data platforms, and intelligent automation tied directly to business outcomes.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8L7 17M17 7l2.8-2.8" />
      </svg>
    ),
  },
  {
    index: '03',
    title: 'Cybersecurity',
    description:
      'Threat modeling, zero-trust architecture, and managed detection & response for regulated, high-stakes environments.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="1.6">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    index: '04',
    title: 'Digital Product Engineering',
    description:
      'Cross-platform product teams that design, build, and ship customer-facing experiences at enterprise scale.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="1.6">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    index: '05',
    title: 'Enterprise Transformation',
    description:
      'Operating-model redesign and change management for organizations modernizing legacy systems at scale.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="1.6">
        <path d="M21 12a9 9 0 11-9-9 7 7 0 009 9z" />
      </svg>
    ),
  },
  {
    index: '06',
    title: 'Managed Operations',
    description: '24/7 follow-the-sun support, monitoring, and continuous optimization once systems reach production.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-navy-900/40 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="block">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cy-400">What we do</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 leading-tight">
                A full-stack technology partner, end to end.
              </h2>
            </div>
            <p className="text-slate-400 max-w-sm">
              Six capability lines, one accountable delivery team — from strategy to 24/7 operations.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={(i % 3) * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
