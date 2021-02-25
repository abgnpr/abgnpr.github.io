module.exports = {
  purge: {
    // enabled: true,
    content: ["./src/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => ({
      ...theme("colors"),
      primary: "rgba(14,165,233,1)",
    }),
    backgroundColor: theme => ({
      ...theme("colors"),
      primary: "rgba(14,165,233,1)",
    }),
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/3": "33.33%",
      "1/2": "50%",
      "2/5": "40%",
      "3/5": "60%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {
      boxShadow: ["active"],
      backgroundImage: theme => ({
        tree: "url('../images/tree_smaller.jpg')",
      }),
      screens: {
        portrait: { raw: "(orientation: portrait)" },
        landscape: { raw: "(orientation: landscape)" },
        "ratio-3/2": { raw: "(min-aspect-ratio: 3/2)" },
        "ratio-4/3": { raw: "(min-aspect-ratio: 4/3)" },
        "ratio-max-1/2": { raw: "(max-aspect-ratio: 1/2)" },
        "ratio-max-5/8": { raw: "(max-aspect-ratio: 5/8)" },
      },
    },
  },
  variants: {
    extend: {
      scale: ["active", "group-hover"],
    },
  },
};
