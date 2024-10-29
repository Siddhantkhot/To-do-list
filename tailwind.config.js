/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./script.js'],
  theme: {
    extend: {
      fontFamily:{
        'caveat':'"Caveat", cursive',
      },
      'backgroundImage':{
        'unchecked':"url('/images/unchecked.png')",
      },

    },
  },
  plugins: [],
}

