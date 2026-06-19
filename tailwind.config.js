/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#05070F',
          900: '#0A0F22',
          800: '#0E1530',
          700: '#131C42',
        },
        ebl: {
          600: '#2563EB',
          500: '#3B82F6',
          400: '#5B8DF7',
        },
        cy: {
          400: '#22D3EE',
          300: '#67E8F9',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(91,141,247,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(91,141,247,0.07) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
      keyframes: {
        'spin-slow': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        'spin-rev': { from: { transform: 'rotate(360deg)' }, to: { transform: 'rotate(0deg)' } },
        'pulse-node': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 38s linear infinite',
        'spin-rev': 'spin-rev 52s linear infinite',
        'pulse-node': 'pulse-node 3s ease-in-out infinite',
        drift: 'drift 6s ease-in-out infinite',
        ticker: 'ticker 28s linear infinite',
      },
    },
  },
  plugins: [],
};
