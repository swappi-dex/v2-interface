import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import presetWind from "@unocss/preset-wind";
import transformerDirective from "@unocss/transformer-directives";
import { handler } from '@unocss/preset-mini/utils'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    Unocss({
      transformers: [transformerDirective()],
      presets: [presetWind({
        text: { size: { lineHeight: false } },
      })],
      rules: [
        [
          /^bg-gradient-(?:repeating-)?linear-(.+)$/,
          ([, s]) => ({
            'background-image': `linear-gradient${handler.bracket(s)}`,
          }),
        ]
      ],
      shortcuts: {
        btn: "inline-flex justify-center items-center rounded-.5rem px-.75rem py-.375rem leading-1rem sm:leading-1.5rem text-white text-xs sm:text-sm font-medium",
        'bg-linear-orange-green': 'bg-gradient-linear-[(117.33deg,rgba(193,117,46,1)10.65%,rgba(239,140,49,1)23.92%,rgba(24,99,79,1)82.6%,rgba(23,88,72,1)92.55%)]',
        'bg-linear-yellow': 'bg-gradient-linear-[(90deg,rgb(250,250,234)0%,rgb(251,255,223)100%)]',
        'bg-linear-yellow-light': 'bg-gradient-linear-[(90deg,rgba(236,251,254,.6)0%,rgba(248,254,202,.6)100%)]',
        'bg-linear-lime': 'bg-gradient-linear-[(90deg,rgb(236,251,254)0%,rgb(248,254,202)100%)]',
        'bg-linear-lime-light': 'bg-gradient-linear-[(90deg,rgba(236,251,254,.4)0%,rgba(248,254,202,.4)100%)]',
        'bg-linear-gray-light': 'bg-gradient-linear-[(90deg,rgba(248,254,202,.8)0%,rgb(236,251,254)100%)]',
        'bg-linear-egg': 'bg-gradient-linear-[(90deg,rgb(250,250,234)0%,rgb(251,255,223)100%)]',
        'bg-linear-background': 'bg-gradient-linear-[(116.59deg,rgb(245,253,255)-0.69%,rgb(236,251,254)6.24%,rgb(250,252,227)92.57%,rgb(251,255,207)100%)]',
        'bg-linear-ellipse-bright': 'bg-gradient-linear-[(50%50%at50%50%,rgb(248,234,232)0%,rgba(248,234,232,0)100%)]',
        'bg-linear-card-background': 'bg-gradient-linear-[(180deg,rgba(255,255,255,0.42)0%,rgba(255,255,255,0)100%)]',
        'bg-linear-lottery-warm': 'bg-gradient-linear-[(90deg,rgb(255,248,221)0%,rgb(254,227,202)100%)]',
        'bg-linear-or': 'bg-gradient-linear-[(76.64deg,rgb(235,156,37)1.99%,rgb(249,230,67)98.58%)]',
        'text-xs': 'text-.75rem',
        'text-sm': 'text-.875rem',
        'text-base': 'text-1rem',
        'text-lg': 'text-1.125rem',
        'text-xl': 'text-1.25rem',
        'text-2xl': 'text-1.5rem',
        'text-3xl': 'text-1.875rem',
        'text-4xl': 'text-2.25rem',
      },
      theme: {
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
        animation: {
          keyframes: {},
        },
        boxShadow: {
          container:
            "0 4px 20px rgba(42,61,74,.1), 0 40px 106px 11px rgba(159,234,225,.15)",
        },
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@utils": resolve(__dirname, "src/utils"),
      "@contract": resolve(__dirname, "src/contract"),
      "@core": resolve(__dirname, "src/core"),
      "@modules": resolve(__dirname, "src/modules"),
      "@pages": resolve(__dirname, "src/pages"),
      "@router": resolve(__dirname, "src/router"),
      "@components": resolve(__dirname, "src/components"),
    },
  },
});
