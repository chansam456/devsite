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
        normal: { //lunar
          background: '#0d1117',
          accentblue: '#58a6ff',
          accentorange: '#FD5C39',
          textlight: '#e8e6e3', 
          textdark: '#8b949e',
          bright: '#fff',
        },
        
        solar: {
          background: '#002b36',
          accentpink: '#e8429c',
          textlight: '#fdf8e8',
          textdark: '#c4ba98',
          bright: '#fff',
        }
      },

      fontFamily: {
        main: ['"JetBrains Mono"', 'monospace']
      },
    },
  },
  plugins: [],
}