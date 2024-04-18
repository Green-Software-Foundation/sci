/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          "darkest-2": "#002625",
          darkest: "#002c2a",
          darker: "#003734",
          dark: "#00524f",
          default: "#006d69",
          light: "#80b6b4",
          lighter: "#bfdbd9",
          "lightest-2": "#e5f0f0",
          "lightest-1": "#f2f8f7",
        },
        accent: {
          darker: "#576629",
          dark: "#83993e",
          default: "#aecc53",
          light: "#d7e6a9",
          lighter: "#ebf2d4",
          "lightest-2": "#f7faee",
          "lightest-1": "#fbfcf6",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
