module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "desk": "1440px",
      },
      fontFamily:{
        "redHatDisplay": ["Red Hat Display", "Serif-Sans"],
      },
      fontSize:{
        "15px": "15px",
        "22px": "22px",
        "14px": "14px",
        "16px": "16px",
        "30px": "28px"
      },
      backgroundColor:{
        "paleBlue": "hsl(225, 100%, 94%)",
        "brightBlue": "hsl(245, 75%, 52%)",
        "desaturatedBlue": "hsl(224, 23%, 55%)",
      },
      textColor:{
        "veryPaleBlue": "hsl(225, 100%, 98%)",
        "desaturatedBlue": "hsl(224, 23%, 55%)",
        "darkBlue": "hsl(223, 47%, 23%)",
        "brightBlue": "hsl(245, 75%, 52%)",
      },
      backgroundImage:{
        "patternMob": "url('/img/pattern-background-mobile.svg')",
        "patternDesk": "url('/img/pattern-background-desktop.svg')",
      },
      boxShadow:{
        "shadow1":"0 10px 15px -3px rgba(56, 41, 224, 0.5)"
      },
      width:{
        "450px": "450px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
