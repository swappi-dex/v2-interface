import { defineConfig, presetUno } from "unocss";
import transformerDirective from "@unocss/transformer-directives";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { handler } from "@unocss/preset-mini/utils";

export default defineConfig({
  rules: [
    [
      /^bg-gradient-(?:repeating-)?linear-(.+)$/,
      ([, s]) => ({
        "background-image": `linear-gradient${handler.bracket(s)}`,
      }),
    ],
  ],
  shortcuts: {
    "bg-linear-orange-green":
      "bg-gradient-linear-[(117.33deg,rgba(193,117,46,1)10.65%,rgba(239,140,49,1)23.92%,rgba(24,99,79,1)82.6%,rgba(23,88,72,1)92.55%)]",
    "bg-linear-yellow":
      "bg-gradient-linear-[(90deg,rgb(250,250,234)0%,rgb(251,255,223)100%)]",
    "bg-linear-yellow-light":
      "bg-gradient-linear-[(90deg,rgba(236,251,254,.6)0%,rgba(248,254,202,.6)100%)]",
    "bg-linear-lime":
      "bg-gradient-linear-[(90deg,rgb(236,251,254)0%,rgb(248,254,202)100%)]",
    "bg-linear-lime-light":
      "bg-gradient-linear-[(90deg,rgba(236,251,254,.4)0%,rgba(248,254,202,.4)100%)]",
    "bg-linear-gray-light":
      "bg-gradient-linear-[(90deg,rgba(248,254,202,.8)0%,rgb(236,251,254)100%)]",
    "bg-linear-egg":
      "bg-gradient-linear-[(90deg,rgb(250,250,234)0%,rgb(251,255,223)100%)]",
    "bg-linear-background":
      "bg-gradient-linear-[(116.59deg,rgb(245,253,255)-0.69%,rgb(236,251,254)6.24%,rgb(250,252,227)92.57%,rgb(251,255,207)100%)]",
    "bg-linear-ellipse-bright":
      "bg-gradient-linear-[(50%50%at50%50%,rgb(248,234,232)0%,rgba(248,234,232,0)100%)]",
    "bg-linear-card-background":
      "bg-gradient-linear-[(180deg,rgba(255,255,255,0.42)0%,rgba(255,255,255,0)100%)]",
    "bg-linear-lottery-warm":
      "bg-gradient-linear-[(90deg,rgb(255,248,221)0%,rgb(254,227,202)100%)]",
    "bg-linear-or":
      "bg-gradient-linear-[(76.64deg,rgb(235,156,37)1.99%,rgb(249,230,67)98.58%)]",
    "flex-vertical-center": "flex items-center",
    "flex-center": "flex justify-center items-center",
    "inline-flex-vertical-center": "inline-flex items-center flex-shrink-0",
    "inline-flex-center":
      "inline-flex justify-center items-center flex-shrink-0",
    "absolute-center":
      "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  theme: {
    breakpoints: {
      tiny: "350px",
      mini: "375px",
      mobile: "460px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
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
      container:
        "0 4px 20px rgba(42,61,74,.1), 0 40px 106px 11px rgba(159,234,225,.15)",
    },
  },
  presets: [
    presetUno(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerCompileClass(),
    transformerDirective(),
  ],
});
