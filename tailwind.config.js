/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d1117',
        accentblue: '#58a6ff',
        accentgreen: '',
      },

      fontFamily: {
        main: ['"JetBrains Mono"', 'monospace'],
        links: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}