/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      fontFamily: {
        primary: "Poppins",
      },
      colors: {
        primary: "#ee1e27",
        secondary: "#808080",
        accent: {
          DEFAULT: "#ff343d",
          secondary: "#ff646b",
          tertiary: "#c80d15",
        },
        black: "#010B13",
      },
      backgroundImage: {
        about: "url()",
      },
    },
  },
  plugins: [],
};
