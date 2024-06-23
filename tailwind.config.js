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
        dimgray: {
          "100": "#59626a",
          "200": "#51626e",
          "300": "rgba(112, 112, 112, 0.18)",
        },
        darkgray: {
          "100": "#95989a",
          "200": "#959595",
        },
        white: "#fff",
        whitesmoke: {
          "100": "#f7fafc",
          "200": "#f9f9f9",
          "300": "#f6f6f6",
          "400": "#f5f6f7",
          "500": "#f0f0f0",
          "600": "#eee",
        },
        lightslategray: {
          "100": "#8a8f9c",
          "200": "#838eab",
        },
        darkslateblue: {
          "100": "#6b3e9a",
          "200": "#562f7f",
        },
        gray: {
          "100": "#8f9198",
          "200": "#262626",
          "300": "rgba(9, 8, 43, 0.2)",
          "400": "rgba(0, 0, 0, 0.12)",
          "500": "rgba(0, 0, 0, 0.45)",
        },
        steelblue: {
          "100": "#3f88cb",
          "200": "#6e6893",
        },
        mediumslateblue: "#7c60ff",
        darkslategray: "#172b4d",
        royalblue: "#2b80ff",
        gainsboro: "#dbdbdb",
        yellow: "#cddc01",
        mediumseagreen: "#1bd699",
        crimson: {
          "100": "#fb516d",
          "200": "#ef4444",
        },
        lightseagreen: "#249782",
        goldenrod: "#eab308",
        mediumblue: "#562eff",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        avenir: "Avenir",
      },
      borderRadius: {
        "3xs": "10px",
        "12xs": "1px",
        "10xs": "3px",
        "8xs": "5px",
        "31xl": "50px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      "5xl": "24px",
      lg: "18px",
      "9xl": "28px",
      xl: "20px",
      "3xl": "22px",
      "7xl": "26px",
      smi: "13px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
