import Reveal from './Reveal';
import AdvantageCard, { type Advantage } from './AdvantageCard';

const ADVANTAGES: Advantage[] = [
  {
    title: 'Global delivery network',
    description:
      '26 delivery hubs across 47 countries, giving every program follow-the-sun coverage and local market fluency.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="1.6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Engineering-first culture',
    description:
      'Senior architects stay embedded from discovery through production — no hand-offs between sales and delivery teams.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="1.6">
        <path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8L7 17M17 7l2.8-2.8" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: 'Security by default',
    description: 'ISO 27001 and SOC 2 controls are built into every engagement, not bolted on after launch.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="1.6">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    title: 'Measurable outcomes',
    description: 'Every program is scoped against business KPIs, with quarterly value reviews — not just delivery milestones.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="1.6">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="block max-w-2xl mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cy-400">Why EEE Global</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 leading-tight">
            Built for organizations that can&rsquo;t afford to stand still.
          </h2>
          <p className="mt-5 text-slate-400 text-lg leading-relaxed">
            We combine deep engineering rigor with enterprise-grade delivery discipline — so transformation programs
            ship on time, at scale, and without surprises.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((advantage, i) => (
            <AdvantageCard key={advantage.title} advantage={advantage} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
