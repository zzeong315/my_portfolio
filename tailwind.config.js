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
        'profile2': "url('/public/image/profile2.jpeg')",
        'profile3': "url('/public/image/profile3.png')",
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(25deg)' },
          '50%': { transform: 'rotate(12deg)' },
        },
        bounce : {
          '0%, 100%': { transform: "translateY(-20%)"},
          "50%": { transform: "translateY(0)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
