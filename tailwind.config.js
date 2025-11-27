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
        accentgreen: '#83F860',
        accentpink: '#ca054d',
        textlight: '#e8e6e3', //consider #e0e0e0 (darker) or #f5f5f0 (warm)
        textdark: '#8b949e',
        bright: '#ffffff',
      },

      fontFamily: {
        main: ['"JetBrains Mono"', 'monospace'],
        links: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}