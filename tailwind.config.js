const colors = require("tailwindcss/colors");
// const apple = require('./shared/colors/colors')
// const opacity = require('./shared/colors/opacity')

module.exports = {
  mode: "jit",
  purge: [
    "./packages/**/src/*.{vue}",
    "./shared/styles/*.{css,scss}",
    "./index.html",
    "./website/*.{vue}",
    "./website/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  presets: [require("./shared/tailwind-preset")],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: colors.white,
        black: colors.black,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        gray: colors.gray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,

        // text: apple.text,
        // link: apple.link,
        // hr: apple.hr,
        // note: apple.note,
        // title: apple.title,
        // subtitle: apple.subtitle,
        // head: apple.head,
        // notify: apple.notify,
        // recycle: apple.recycle,
        // header: apple.header,
        // affix: apple.affix,
        // banner: apple.banner,
        // button: apple.button,
        // card: apple.card,
        // privacy: apple.privacy,
        // rate: apple.rate,
        // footer: apple.footer,
      },
      // opacity: {
      //   header: opacity.header,
      //   affix: opacity.affix
      // },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "8xl": "88rem",
        "9xl": "96rem",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "8xl": "88rem",
        "9xl": "96rem",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        19.5: "4.875rem",
      },
      fontSize: {
        "3xs": ".5 rem",
        "2xs": ".625 rem",
      },
      // fontWeight: {
      //   'weight-100': 100,
      //   'weight-200': 200,
      //   'weight-300': 300,
      //   'weight-400': 400,
      //   'weight-500': 500,
      //   'weight-600': 600,
      //   'weight-700': 700,
      //   'weight-800': 800,
      //   'weight-900': 900,
      // },
      boxShadow: {
        "inner-sm": "inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "inner-md":
          "inset 0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "inner-lg":
          "inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "inner-xl":
          "inset 0 20px 25px -5px rgba(0, 0, 0, 0.1), inset 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "inner-2xl": "inset 0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "inner-3xl": "inset 0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first", "last", "odd", "even"],
      backgroundColor: ["odd", "even", "active", "group-focus", "group-hover"],
      borderWidth: ["first", "last", "hover", "focus"],
      cursor: ["active"],
      opacity: ["disabled"],
      textColor: ["group-focus", "active", "group-hover"],
      ringWidth: ["focus-visible"],
      ringOffsetWidth: ["focus-visible"],
      ringOffsetColor: ["focus-visible"],
      ringColor: ["focus-visible"],
      ringOpacity: ["focus-visible"],
      rotate: ["first", "last", "odd", "even"],
    },
  },
  plugins: [],
};
