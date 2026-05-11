import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1220',
        purple: '#7C3AED',
        blue: '#2563EB',
        gold: '#F4C542',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,.08), 0 24px 80px rgba(18, 24, 40, .55)',
        soft: '0 10px 50px rgba(0, 0, 0, .25)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top left, rgba(124,58,237,.22), transparent 30%), radial-gradient(circle at top right, rgba(37,99,235,.20), transparent 28%), radial-gradient(circle at center, rgba(244,197,66,.08), transparent 36%)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};

export default config;
