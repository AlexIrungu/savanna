/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eerie-black': '#28231C',
        'beaver': '#967D69',
        'mindaro': '#EDFF86',
        'vanilla': '#FFF5B2',
        'ghost-white': '#E8E9F3',
        'savanna': {
          dark: '#28231C',
          brown: '#967D69',
          light: '#EDFF86',
          cream: '#FFF5B2',
          white: '#E8E9F3'
        }
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        // Set default font families
        'sans': ['Raleway', 'sans-serif'], // This makes Raleway the default sans-serif
        'serif': ['"Playfair Display"', 'serif'], // This makes Playfair the default serif
      }
    },
  },
  plugins: [],
}