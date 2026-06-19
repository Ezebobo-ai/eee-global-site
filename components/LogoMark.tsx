type LogoMarkProps = {
  size?: number;
  gradientId: string;
};

export default function LogoMark({ size = 34, gradientId }: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" className="shrink-0">
      <circle cx="17" cy="17" r="15" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.4" opacity="0.55" />
      <ellipse cx="17" cy="17" rx="15" ry="6" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.2" opacity="0.85" />
      <circle cx="17" cy="17" r="3.2" fill={`url(#${gradientId})`} />
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="34" y2="34">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
