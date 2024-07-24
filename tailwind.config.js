/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "index.html", "scr/styles.css"],
  theme: {
    extend: {
      colors: {
      golden: {
          light: '#FFF8DC',
          DEFAULT: '#FFD700',
          dark: '#DAA520',
          darker: '#B8860B'
      }}},
  },
  plugins: [],
}

