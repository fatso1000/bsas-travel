/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#e5f4f9",
          elevated: "#f2fbfd",
          subtle: "#d8eef6",
        },
        ink: {
          DEFAULT: "#0c4a6e",
          muted: "#155e75",
          faint: "#5f7c8c",
        },
        brand: {
          DEFAULT: "#0891b2",
          sea: "#0e7490",
          coral: "#ea580c",
          bloom: "#c026d3",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
