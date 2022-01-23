module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {  
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        'width': 'width',
        'borderRadius':'borderRadius'
      },
      overflow:{
        'inherit':'inherit'
      },
      colors: {
        'blue': '#1fb6ff',
        'mainGray':'#43425F', // top nav icons gray & nav links
        'darkText':'#16142D',
        'headerText':'#261A49',
        'brightAccent':'#150A7C', //bright purple accent
        'darkAccent': '#1D137A',  // dark purple
        'overlay':'#110D1B',
        'lightBlue':'#38A2D7',//for gradients
        'midPurple':'#561139' // for gradients
      },
    },
  },
  plugins: [],
}
