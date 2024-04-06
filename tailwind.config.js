/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'linear-gradient(to right, #194FDC, #6E5ED9)',
      },
      backgroundImage: {
        brand: 'linear-gradient(to bottom, #194FDC, #6E5ED9)',
      },
    },
  },
  plugins: [],
};
