/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
          500: "#B8C1EC",
          Main700: "#232946",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
        "grey-200": "#2B2C35",
        "orange-botones": "#f9bc60",
        "hover-botones": "#e16162",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
      buttonGeneral: {
        width: "16px",
        height: "36px",
        fontSize: "21px",
        backgroundColor: "#f9bc60",
        borderRadius: "12px",
        boxShadow: "2px 2px 4px rgba(3, 3, 3, 0.5)",
        marginTop: "12px",
        color: "#ffffff",
        cursor: "pointer",
      },
    },
  },
  plugins: [],
};
