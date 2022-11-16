/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: { max: "1440px"},
      laptop: { max: "1180px" },
      tablet: { max: "914px" },
      phone: { max: "450px" },
    },
    extend: {
      colors: {
        dark_blue: "var(--dark-blue-color)",
        blue: "var(--blue-color)",
        light_blue: "var(--light-blue-color)",
        darker_light_blue: "var(--darker-light-blue-color)",
        sky_blue: "var(--sky-blue-color)",
        dark_green: "var(--dark-green-color)",
        green: "var(--green-color)",
        light_green: "var(--light-green-color)",
        white: "#ffffff",
        transparent: "transparent",
      },
      fontFamily: {
        russian: "var(--russian)",
        english: "var(--english)",
      },
    },
  },
  plugins: [],
};
