const apple = require('./colors/colors.ts')
const opacity = require('./colors/opacity.ts')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        text: apple.text,
        link: apple.link,
        hr: apple.hr,
        note: apple.note,
        title: apple.title,
        subtitle: apple.subtitle,
        head: apple.head,
        notify: apple.notify,
        recycle: apple.recycle,
        nav: apple.nav,
        affix: apple.affix,
        banner: apple.banner,
        button: apple.button,
        card: apple.card,
        privacy: apple.privacy,
        rate: apple.rate,
        footer: apple.footer,
      },
      opacity: {
        nav: opacity.nav,
        affix: opacity.affix
      },
      fontWeight: {
        'weight-100': 100,
        'weight-200': 200,
        'weight-300': 300,
        'weight-400': 400,
        'weight-500': 500,
        'weight-600': 600,
        'weight-700': 700,
        'weight-800': 800,
        'weight-900': 900,
      }
    }
  },
  plugins: [],
}
