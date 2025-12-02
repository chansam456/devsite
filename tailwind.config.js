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
        normal: {
          background: '#0d1117', //0d1117
          accentblue: '#58a6ff',
          accentgreen: '#83F860',
          accentpink: '#ca054d',
          textlight: '#e8e6e3', //consider #e0e0e0 (darker) or #f5f5f0 (warm)
          textdark: '#8b949e',
          bright: '#fff',
        },
        
        solar: {
          background: '#002b36', //switch to 002b36 if too bright
          accentpink: '#e8429c',
          textlight: '#fdf8e8',
          textdark: '#c4ba98',
          bright: '#fff',
        }
      },

      fontFamily: {
        main: ['"JetBrains Mono"', 'monospace'],
        links: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}