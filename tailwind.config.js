module.exports = {
  content: ['./src/**/*.tsx', './src/*.tsx'],
  theme: {
    colors: {
      "black": "rgba(25, 25, 25, 1)",
      "slim-black": "rgb(41, 41, 41)",
      "gray": "rgb(117, 117, 117)",
      "white": "rgb(255, 255, 255,1)",
      "yellow": "#FFC017",
      "gray": "rgb(117, 117, 117)"
    },
    fontSize: {
      '70': '70px',
      '24': '24px',
      '20': '20px' 
    },
    extend: {
      spacing: {
        '75':'75px',
        '92':'92px',
        '48':'48px',
        '24':'24px',
        '10': '10px',
        '40': '40px',
        '14px': '14px'
      },
      maxWidth: {
        '500':'500px', 
        '1/2': "50%",
        "1/3": "33.33%",
        'full': "100%",
        "trendItemWidth": '400px'
      }
    },
  },
  variants: {},
  plugins: [],
}