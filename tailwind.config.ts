import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // enable dark mode using class strategy
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
