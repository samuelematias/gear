import { globalStyle } from "@vanilla-extract/css";
import { tokens } from "./tokens.css";
import { themeVars } from "./theme.css";

globalStyle("html", {
  lineHeight: 1.5,
  WebkitTextSizeAdjust: "100%",
});

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
  paddingTop: tokens.spacing.xl,
  paddingRight: tokens.spacing.md,
  paddingBottom: tokens.spacing.xl,
  paddingLeft: tokens.spacing.md,
  fontFamily: tokens.font.sans,
  backgroundColor: themeVars.color.page,
  color: themeVars.color.foreground,
});

globalStyle("a:not([class])", {
  textDecoration: "underline",
  textDecorationColor: themeVars.color.underline,
  textDecorationThickness: 2,
});

globalStyle("time", {
  fontFamily: tokens.font.mono,
  fontSize: tokens.fontSize.sm,
  color: themeVars.color.foregroundSecondary,
});

globalStyle(".container", {
  marginInline: "auto",
  maxWidth: "48rem",
});
