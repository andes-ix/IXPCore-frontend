/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: {
          "100": "#eff6ff",
          "200": "#eff5ff",
          "300": "#f1f5f9",
          "400": "#eaeef3",
          "500": "#e6ebf1",
        },
        cornflowerblue: "#168eea",
        white: "#fff",
        mediumslateblue: "#7c60ff",
        lightslategray: {
          "100": "#8a8f9c",
          "200": "#838eab",
        },
        dimgray: {
          "100": "#59626a",
          "200": "#51626e",
        },
        darkslategray: "#172b4d",
        royalblue: "#2b80ff",
        whitesmoke: {
          "100": "#f7fafc",
          "200": "#f9f9f9",
          "300": "#f5f6f7",
          "400": "#f0f0f0",
          "500": "#eee",
        },
        steelblue: "#3f88cb",
        gray: {
          "100": "#8f9198",
          "200": "#262626",
          "300": "rgba(0, 0, 0, 0.45)",
          "400": "rgba(0, 0, 0, 0.12)",
        },
        crimson: {
          "100": "#fb516d",
          "200": "#ef4444",
        },
        lightseagreen: "#249782",
        goldenrod: "#eab308",
        gainsboro: "#dbdbdb",
        darkgray: {
          "100": "#95989a",
          "200": "#959595",
        },
        darkslateblue: {
          "100": "#6b3e9a",
          "200": "#562f7f",
        },
        yellow: "#cddc01",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        avenir: "Avenir",
      },
      borderRadius: {
        "10xs": "3px",
        "3xs": "10px",
        "8xs": "5px",
        "12xs": "1px",
        "31xl": "50px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lg: "18px",
      "9xl": "28px",
      "7xl": "26px",
      "3xl": "22px",
      xs: "12px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
