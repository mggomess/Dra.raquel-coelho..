/** Identidade visual Raquel Coelho: preto quente + dourado metálico. */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0D0C0A',
          2: '#14120F',
          3: '#1B1813',
          4: '#0A0908',
        },
        gold: {
          DEFAULT: '#C9A24E',
          hi: '#F3E2A8',
          lo: '#9A7430',
        },
        ivory: '#F4ECDA',
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        sans: ['Jost', "'Helvetica Neue'", 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gold-metal': 'linear-gradient(100deg, #B8913F, #F1DFA1 52%, #C9A24E)',
        'gold-text': 'linear-gradient(95deg, #B8913F 0%, #F6E7AE 48%, #C9A24E 100%)',
      },
      boxShadow: {
        gold: '0 10px 30px rgba(201,162,78,.22)',
        'gold-lg': '0 16px 40px rgba(201,162,78,.36)',
      },
      letterSpacing: {
        label: '.24em',
      },
    },
  },
  plugins: [],
};
