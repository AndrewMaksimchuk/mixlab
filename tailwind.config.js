module.exports = {
  theme: {
    extend: {
      colors: {
        'yellow-light': '#FEF7E5',
        'yellow-neutral': '#F7A500',
        'back-section3': '#FAF9F6',
        'back-section4': '#F6F3FA',
        'back-section5': '#DFF5F6',
        'footer-header': '#C282F0'
      },
      height: {
        'section1': '651px',
      },
      width: {
        '177': '177px',
        '238': '238px',
        '384': '384px',
        '455': '455px',
        '565': '565px',
        '527': '527px',
        '1072': '1072px'
      },
      flex: {
        '50': '1 1 50%'
      }
    },
  },
  purge: [
    './components/**/*.{vue,js}',
    './pages/**/*.vue'
  ]
}
