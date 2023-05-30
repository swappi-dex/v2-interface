import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import presetWind from "@unocss/preset-wind";
import transformerDirective from "@unocss/transformer-directives";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      transformers: [transformerDirective()],
      presets: [presetWind()],
      theme: {
        lineHeight: {
          inherit: "inherit",
        },
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
        boxShadow: {
          popper: "0px 4px 16px rgba(0,0,0,0.16)",
        },
      },
    }),
    react(),
  ],
});
