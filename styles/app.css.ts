import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
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
  overflowX: "hidden",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
  paddingInline: tokens.spacing.md,
  fontFamily: tokens.font.sans,
  backgroundColor: themeVars.color.page,
  color: themeVars.color.foreground,
});

globalStyle("main", {
  marginInline: "auto",
  marginBottom: "auto",
  width: "100%",
  maxWidth: tokens.maxWidth.md,
  paddingBlockStart: calc.add(tokens.spacing.md, "3rem"),
  "@media": {
    "screen and (min-width: 960px)": {
      paddingBlockStart: tokens.spacing.md,
    },
  },
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

globalStyle("ul:not([class])", {
  display: "grid",
  rowGap: tokens.spacing.sm,
});

globalStyle("time", {
  color: themeVars.color.foregroundSecondary,
});
