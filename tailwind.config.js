/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-gradiant': 'linear-gradient(to right, #194FDC, #6E5ED9)',
        'main-blue': '#0C3FC1',
        'main-navy': '#133AA1',
        'main-black': '#181818',
        'main-charcoal': '#414149',
        'main-gray': '#5E5E5E',
        'quiz-red': '#912828',
        'quiz-blue': '#0C3FC1',
        kakao: '#FFE34E',
      },

      backgroundImage: {
        'main-gradiant-full': 'linear-gradient(to bottom, #0F3FBB, #5545C3)',
        'main-gradiant-top': 'linear-gradient(to bottom, #194FDC, #4557DA)',
        'main-gradiant-bottom': 'linear-gradient(to bottom, #4557DA, #6E5ED9)',
        'gradiant-quiz': 'linear-gradient(to bottom, #194FDC, #6E5ED9)',
      },
      boxShadow: {
        base: '3px 3px 4px 0px rgba(26, 29, 37, 0.01)',
        quiz: '0 4px 4px rgba(0, 0, 0, 0.25)',
        'quiz-button': '3px 3px 4px rgba(26, 29, 37, 0.01)',
      },
      fontFamily: {
        gugi: ['var(--font-gugi)'],
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
  plugins: [],
};
