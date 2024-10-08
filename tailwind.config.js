/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        muli: ["Muli", "sans-serif"],
        japanese: ["'Noto Sans JP'", "sans-serif"],
      },

      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      textColor: {
        color: "#3b82f6",
        hover: "#3b82f6",
      },
    },
  },
  plugins: [],
};
