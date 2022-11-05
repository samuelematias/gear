import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  position: "relative",
  display: "flex",
  overflow: "hidden",
  ":after": {
    content: "",
    position: "absolute",
    inset: 0,
    backgroundImage: `linear-gradient(to right, ${themeVars.color.page} 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%, ${themeVars.color.page} 100%)`,
    pointerEvents: "none",
  },
});

export const scroller = style({
  flexShrink: 0,
  width: "100%",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
});

export const item = style({
  width: "33.33%",
  paddingRight: tokens.spacing.md,
  display: "grid",
  placeItems: "center",
  flexShrink: 0,
  "@media": {
    "screen and (min-width: 768px)": {
      width: "20%",
    },
  },
});
