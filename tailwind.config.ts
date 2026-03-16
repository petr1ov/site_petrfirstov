import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        card: '#111111',
        border: '#1F1F1F',
        accent: '#7C3AED',
        muted: '#9CA3AF',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,58,237,.35), 0 10px 30px rgba(124,58,237,.18)',
      },
    },
  },
  plugins: [],
};

export default config;
