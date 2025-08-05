/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#FE9BC9',
        'primary-white': '#FFFEFE',
        'background-light-pink': '#FCF1F3',
        'text-dark-charcoal': '#393334',
      },
    },
  },
  plugins: [],
}