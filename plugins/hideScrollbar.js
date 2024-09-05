const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".hide-scrollbar": {
      /* Hide scrollbar for modern browsers */
      "-ms-overflow-style": "none", // IE and Edge
      "scrollbar-width": "none", // Firefox
      "&::-webkit-scrollbar": {
        display: "none", // Chrome, Safari, and Opera
      },
    },
  };

  addUtilities(newUtilities, ["responsive"]);
});
