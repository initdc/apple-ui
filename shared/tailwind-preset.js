const apple = require('./colors/colors')
const opacity = require('./colors/opacity')

module.exports = {
  // mode: 'jit',
  theme: {
    extend: {
      colors: {
        text: apple.text,
        link: apple.link,
        hr: apple.hr,
        note: apple.note,
        title: apple.title,
        subtitle: apple.subtitle,
        notify: apple.notify,
        recycle: apple.recycle,
        header: apple.header,
        affix: apple.affix,
        banner: apple.banner,
        button: apple.button,
        card: apple.card,
        privacy: apple.privacy,
        rate: apple.rate,
        footer: apple.footer,
      },
      opacity: {
        'header-bg': opacity.header.bg,
        'header-text': opacity.header.text,
        'header-cur': opacity.header.current,
        'header-link': opacity.header.link,
        'affix-bg': opacity.affix.bg,
        'affix-text': opacity.affix.text,
        'affix-cur': opacity.affix.current,
        'affix-link': opacity.affix.link
      },
      screens: {
        '720p': '720px',
        '980p': '980px',
        '1080p': '1080px',
        '1440p': '1440px'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      fontSize: {
        'px-0': '0rem',
        'px-1': '0.125rem',
        'px-2': '0.313rem',
        'px-3': '0.188rem',
        'px-4': '0.25rem',
        'px-5': '0.313rem',
        'px-6': '0.375rem',
        'px-7': '0.438rem',
        'px-8': '0.5rem',
        'px-9': '0.563rem',
        'px-10': '0.625rem',
        'px-11': '0.6875rem',
        'px-12': '0.75rem',
        'px-13': '0.8125rem',
        'px-14': '0.875rem',
        'px-15': '0.9375rem',
        'px-16': '1rem',
        'px-17': '1.0625rem',
        'px-18': '1.125rem',
        'px-19': '1.1875rem',
        'px-20': '1.25rem',
        'px-21': '1.3125rem',
        'px-22': '1.375rem',
        'px-23': '1.4375rem',
        'px-24': '1.5rem',
        'px-25': '1.5625rem',
        'px-26': '1.625rem',
        'px-27': '1.6875rem',
        'px-28': '1.75rem',
        'px-29': '1.8125rem',
        'px-30': '1.875rem',
        'px-31': '1.9375rem',
        'px-32': '2rem',
        'px-33': '2.0625rem',
        'px-34': '2.125rem',
        'px-35': '2.1875rem',
        'px-36': '2.25rem',
        'px-37': '2.3125rem',
        'px-38': '2.375rem',
        'px-39': '2.4375rem',
        'px-40': '2.5rem',
        'px-41': '2.5625rem',
        'px-42': '2.625rem',
        'px-43': '2.6875rem',
        'px-44': '2.75rem',
        'px-45': '2.8125rem',
        'px-46': '2.875rem',
        'px-47': '2.9375rem',
        'px-48': '3rem',
        'px-49': '3.0625rem',
        'px-50': '3.125rem',
        'px-51': '3.1875rem',
        'px-52': '3.25rem',
        'px-53': '3.3125rem',
        'px-54': '3.375rem',
        'px-55': '3.4375rem',
        'px-56': '3.5rem',
        'px-57': '3.5625rem',
        'px-58': '3.625rem',
        'px-59': '3.6875rem',
        'px-60': '3.75rem',
        'px-61': '3.8125rem',
        'px-62': '3.875rem',
        'px-63': '3.9375rem',
        'px-64': '4rem'
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
