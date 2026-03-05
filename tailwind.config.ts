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
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--fg)',
        muted: 'var(--fg-muted)',
        accent: 'var(--accent)',
        border: 'var(--border)',
        surface: 'var(--surface)',
      },
      height: {
        18: '4.5rem',
        24: '6rem',
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
