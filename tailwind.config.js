/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#f9fbfc",
          "200": "#808080",
          "300": "#1c1c1c",
          "400": "#111538",
          "500": "rgba(255, 255, 255, 0.32)",
          "600": "rgba(0, 0, 0, 0.2)",
        },
        white: "#fff",
        darkslategray: "#333",
        mediumslateblue: {
          "100": "#525fe1",
          "200": "rgba(82, 95, 225, 0.16)",
        },
        goldenrod: "#ffcf59",
        dimgray: "#4d4d4d",
        tomato: "#f66742",
        hotpink: "#ff60a8",
        blueviolet: "#9848ff",
        cornflowerblue: "#4d93df",
        yellowgreen: "#a7ce4a",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "work-sans": "'Work Sans'",
      },
      borderRadius: {
        "7xl": "26px",
        smi: "13px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lg: "18px",
      "33xl": "52px",
      "3xl": "22px",
      "17xl": "36px",
      "27xl": "46px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
