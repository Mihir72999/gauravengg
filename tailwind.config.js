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
        },
        gsapx:{
          '0%':{
          'transform':'translateX(100%)'
         },
         '100%':{
          'transform':'translateX(0%)'
         }
        },
        gsapy:{
          '0%':{
          'transform':'translateX(500px)'
         },
         '100%':{
          'transform':'translateX(0px)'
         }
        }
      },
      animation:{
       'spin':'spin 4s linear infinite',
       'spinReverse':'spinReverse 4s linear infinite',
       'gsapanimation':'gsapx 2s linear forwards',
       'gsapanimation1':'gsapy 2s linear forwards' 
       
      },
      rotate:{
        '10':'25deg'
      },
      fontFamily:{
        Phetsarath:["Phetsarath" , "serif"]
      },
      fontWeight:{
        '700':700
      },
      colors:{
        
        "pista":"#87dd4f"
      }
      ,
      backgroundColor:{
        "pista":"#87dd4f"
      },
      fill:{
        "pista":"#87dd4f"
      }
    },
  },
  plugins: [],
}

