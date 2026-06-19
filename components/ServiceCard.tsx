import Reveal from './Reveal';

export type Service = {
  index: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type ServiceCardProps = {
  service: Service;
  delay?: number;
};

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  return (
    <Reveal delay={delay} className="group">
      <div className="relative rounded-2xl p-8 glass card-hover overflow-hidden h-full">
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-ebl-600/10 blur-2xl group-hover:bg-cy-400/20 transition-all duration-500" />
        <span className="font-mono text-xs text-cy-400/70">{service.index}</span>
        <div className="w-12 h-12 mt-4 rounded-xl border border-white/10 flex items-center justify-center mb-6">
          {service.icon}
        </div>
        <h3 className="font-display font-semibold text-xl text-white mb-3">{service.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">{service.description}</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm text-cy-300 font-medium group-hover:gap-3 transition-all duration-300"
        >
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </Reveal>
  );
}
