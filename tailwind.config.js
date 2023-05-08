module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
    extend: {
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
