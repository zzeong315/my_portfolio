module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", "Arial", "sans-serif"],
        notoKR: ['Noto Sans KR', 'sans-serif'],
      },
      colors: {
        'darkText': '#31302F',
        'lightText': '#D9D9D9',
        'myOrange': '#FBB04C',
        'myPink': '#F3817D',
        'myGreen': '#888B49',
        'myBlue': '#548BDA',
        'myPurple': '#8390C8',
        'bgLight': '#F8EDE0',
        'bgDark': '#EBDED0',
      },
      backgroundImage: {
        'profile1': "url('/public/image/profile1.jpeg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
