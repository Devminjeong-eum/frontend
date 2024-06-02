/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '430px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'main-gradient': 'linear-gradient(to right, #194FDC, #6E5ED9)',
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
        'main-gradient-full': 'linear-gradient(to bottom, #0F3FBB, #5545C3)',
        'main-gradient-top': 'linear-gradient(to bottom, #194FDC, #4557DA)',
        'main-gradient-bottom': 'linear-gradient(to bottom, #4557DA, #6E5ED9)',
        'gradient-quiz': 'linear-gradient(to bottom, #194FDC, #6E5ED9)',

        // trending-posts-linear-color
        // 1 순위
        'rank-gradient-one':
          'linear-gradient(to right, #9AACED, #4F6EDB, #1B42CC)',
        // 2 순위
        'rank-gradient-two':
          'linear-gradient(to right, #C6CCF5, #8993ED, #616FE8)',
        // 3 순위
        'rank-gradient-three':
          'linear-gradient(to right, #F0F3FC, #E6EBFB, #DDE3F9)',

        // wordbook
        'wordbook-gradient':
          'linear-gradient(180deg, #194FDC -16.93%, #1B50DC -16.92%, #4557DA 39.77%, #4657DA 41.55%, #6E5ED9 96.61%)',

        // QuizBanner
        'quiz-banner-circle-gradient':
          'linear-gradient(133.25deg, #294cd1 -7.96%, rgba(97, 122, 218, 0.425) 43.43%, rgba(123, 129, 153, 0) 83%)',
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
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-1.5px)' },
          '50%': { transform: 'translateX(1.5px)' },
          '75%': { transform: 'translateX(-1.5px)' },
        },
      },
      animation: {
        shake: 'shake 0.2s',
      },
    },
  },
  plugins: [],
};
