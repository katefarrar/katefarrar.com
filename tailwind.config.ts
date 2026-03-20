import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Stack Sans Text"', 'system-ui', 'sans-serif'],
        notch: ['"Stack Sans Notch"', '"Stack Sans Text"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand-teal': '#A7FFF8',
        'teal': {
          DEFAULT: '#A7FFF8',
          dark: '#7FCCC6',
        },
      },
    },
  },
  plugins: [],
};

export default config;
