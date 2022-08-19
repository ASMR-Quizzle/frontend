/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#0070FF',
        primaryAccent: '#D8E9FF',
        white: '#ffffff',
        black: '#363636',
        textSecondary: '#A0A6AD',
        textPrimary: '#757A80',
        iconPrimary: '#64687B',
        surfacePrimary: '#F2F2F2',
        statusGreen: '#00D100',
        statusOrange: '#FF9900',
        statusRed: '#FF2E00',
        statusGreenAccent: '#CBFFCB',
      },
    },
  },
  plugins: [],
};
