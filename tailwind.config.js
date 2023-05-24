const path = require("path");

const spacing = Array(100)
  .fill("$")
  .map((_, index) => index + 1)
  .reduce((spacing, index) => {
    spacing[index] = `${index / 4}rem`;
    return spacing;
  }, {});

module.exports = {
  content: [path.resolve(__dirname, "./src/**/*.{js,ts,jsx,tsx}")],
  theme: {
    extend: {
      spacing,
      colors: {
        "ink-green": "#2A3D4A",
        "ink-gray": "#AAB1B7",
        grass: "#D9ECCA",
        windy: "#C8E3B3",
        orange: "#EBA337",
        lime: "#BEE09C",
        bluegreen: "#4DAF9E",
        medigreen: "#163B56",
        limo: "#A6D379",
        pinko: "#FEE9E8",
        "activate-green": "#7fbf4e",
        fail: "#D96E81",
        "light-black": "#474C5F",
        diary: "#864551",
        brownie: "#4A2A41",
      },
    },
  },
};
