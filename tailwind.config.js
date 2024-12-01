/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes:{
        spinReverse:{
         'from':{
          'transform':'rotate(0deg)'
         },
         'to':{
          'transform':'rotate(-360deg)'
         }
        }
      },
      animation:{
       'spin':'spin 4s linear infinite',
       'spinReverse':'spinReverse 4s linear infinite'
      },
      rotate:{
        '10':'25deg'
      },
      colors:{
        
        "pista":"#87dd4f"
      },
      backgroundColor:{
        "pista":"#87dd4f"
      }
    },
  },
  plugins: [],
}

