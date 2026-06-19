import Reveal from './Reveal';

export type Advantage = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type AdvantageCardProps = {
  advantage: Advantage;
  delay?: number;
};

export default function AdvantageCard({ advantage, delay = 0 }: AdvantageCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="glass rounded-2xl p-7 card-hover h-full">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ebl-600/20 to-cy-400/20 border border-cy-400/20 flex items-center justify-center mb-6">
          {advantage.icon}
        </div>
        <h3 className="font-display font-semibold text-lg text-white mb-2">{advantage.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{advantage.description}</p>
      </div>
    </Reveal>
  );
}
