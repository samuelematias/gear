import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { tokens } from "./tokens.css";
import { themeVars } from "./theme.css";

globalFontFace("Inter var", {
  fontStyle: "normal",
  fontWeight: "100 900",
  fontDisplay: "swap",
  src: 'url(/fonts/Inter.var.woff2) format("woff2")',
});

globalStyle("html", {
  lineHeight: 1.5,
  WebkitTextSizeAdjust: "100%",
});

globalStyle("body, #__next, .container", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
  paddingRight: tokens.spacing.md,
  paddingLeft: tokens.spacing.md,
  fontFamily: tokens.font.sans,
  backgroundColor: themeVars.color.page,
  color: themeVars.color.foreground,
});

globalStyle("main", {
  marginInline: "auto",
  marginBottom: "auto",
  width: "100%",
  maxWidth: tokens.maxWidth.md,
});

globalStyle("a:not([class])", {
  textDecoration: "underline",
  textDecorationColor: themeVars.color.underline,
});

globalStyle("a:not([class]):hover", {
  textDecorationColor: themeVars.color.underlineHover,
});

globalStyle("a:focus-visible", {
  outlineWidth: "2px",
  outlineStyle: "solid",
  outlineOffset: "2px",
  outlineColor: "#3e91f7",
});

globalStyle("time", {
  color: themeVars.color.foregroundSecondary,
});
