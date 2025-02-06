module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "...defaultTheme.fontFamily.sans"],
      },
    },
  },
  plugins: [require("tw-elements/plugin")],
};
