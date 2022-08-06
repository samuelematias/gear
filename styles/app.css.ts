import { globalStyle } from "@vanilla-extract/css";
import { tokens } from "./tokens.css";

globalStyle("html", {
  lineHeight: 1.5,
  WebkitTextSizeAdjust: "100%",
});

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
  fontFamily: tokens.font.sans,
  backgroundColor: "#f3f2f3",
});
