import Reveal from './Reveal';
import TestimonialCard, { type Testimonial } from './TestimonialCard';

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'EEE Global rebuilt our core banking platform without a single hour of unplanned downtime across an 18-month migration. Their delivery discipline is the best we\u2019ve worked with.',
    name: 'Helena Voss',
    title: 'CTO, Meridian Bank',
  },
  {
    quote:
      'Their applied AI team embedded directly with our analysts and shipped a forecasting engine that\u2019s now used in every regional office. Genuinely senior people, start to finish.',
    name: 'Marcus Adeyemi',
    title: 'VP Operations, Octave Logistics',
  },
  {
    quote:
      'We evaluated four global integrators. EEE Global was the only one that brought a working prototype to the pitch instead of a slide deck. That same energy carried through delivery.',
    name: 'Priya Raman',
    title: 'Head of Digital, Strata Energy',
  },
];

export default function Testimonials() {
  return (
    <section id="insights" className="relative py-28 lg:py-36 bg-navy-900/40 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="block max-w-2xl mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cy-400">Client outcomes</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 leading-tight">
            What it&rsquo;s like to run your mission-critical systems with us.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-7">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
