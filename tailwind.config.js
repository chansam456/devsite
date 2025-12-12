import { lunar, solar } from './palettes';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        normal: lunar,
        solar: solar,
      },
      fontFamily: {
        main: ['"JetBrains Mono"', 'monospace']
      },
    },
  },
  plugins: [],
}