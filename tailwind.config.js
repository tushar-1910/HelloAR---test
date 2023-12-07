/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#552583",
        yellow: "#FDB927",
      },
      fontFamily: {
        roboto: ["Roboto", "ui-sans-serif"],
      },
      borderColor: {
        gray: "rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
