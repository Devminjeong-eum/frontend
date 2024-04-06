/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'linear-gradient(to right, #194FDC, #6E5ED9)',
        brandBlue: '#0C3FC1',
        brandBlack: '#414149',
      },
      backgroundImage: {
        brandTop: 'linear-gradient(to bottom, #194FDC, #4557DA)',
        brandBottom: 'linear-gradient(to bottom, #4557DA, #6E5ED9)',
      },
    },
  },
  plugins: [],
};
