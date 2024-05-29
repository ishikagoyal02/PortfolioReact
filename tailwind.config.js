/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Skills/skil.js",
  ],
  theme: {
    extend: {},
    backgroundImage:{
      circularLight: 'repeating-radial-gradient(rbga(0,0,0,0.4) 2px, f5f5f5 5px, f5f5f5 100px);'
    },
  },
  plugins: [],
}

