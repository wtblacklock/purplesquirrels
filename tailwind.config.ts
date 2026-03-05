import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#000000',
        foreground: '#F2F0E9',
        muted: '#787272',
        accent: '#6DAF5E',
        border: '#1C1C1C',
        surface: '#0D0D0D',
      },
      lineHeight: {
        tightest: '0.9',
      },
      fontSize: {
        'hero': ['7.5rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'hero-md': ['5rem', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'hero-sm': ['3.25rem', { lineHeight: '0.93', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
};

export default config;
