import Reveal from './Reveal';

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  delay?: number;
};

export default function TestimonialCard({ testimonial, delay = 0 }: TestimonialCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="glass rounded-2xl p-8 card-hover flex flex-col h-full">
        <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="mb-6">
          <path
            d="M0 22V12.8C0 5.2 4.4 0.8 11.2 0L12.4 3.6C8.4 4.8 6.4 7.2 6 11.2H12V22H0ZM16 22V12.8C16 5.2 20.4 0.8 27.2 0L28.4 3.6C24.4 4.8 22.4 7.2 22 11.2H28V22H16Z"
            fill="#22D3EE"
            fillOpacity="0.5"
          />
        </svg>
        <p className="text-slate-300 leading-relaxed mb-8 flex-1">{testimonial.quote}</p>
        <div className="flex items-center gap-3 pt-6 border-t border-white/10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ebl-600 to-cy-400" />
          <div>
            <div className="text-sm font-medium text-white">{testimonial.name}</div>
            <div className="text-xs text-slate-500">{testimonial.title}</div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
