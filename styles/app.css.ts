import { globalStyle, globalFontFace } from "@vanilla-extract/css";
import { tokens } from "./tokens.css";

globalFontFace("Inter", {
  fontStyle: "normal",
  fontWeight: "100 900",
  fontDisplay: "swap",
  src: 'url(/fonts/inter-var-latin.woff2) format("woff2")',
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
});

globalFontFace("JetBrains Mono Web", {
  fontStyle: "normal",
  fontDisplay: "swap",
  src: 'url(/fonts/JetBrainsMono.woff2) format("woff2")',
});

globalStyle("html", {
  lineHeight: 1.5,
  WebkitTextSizeAdjust: "100%",
});

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
  fontFamily: tokens.font.sans,
});
