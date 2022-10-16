/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': ' 0 0 7px 8px rgb(255 0 0 / 30%)',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
