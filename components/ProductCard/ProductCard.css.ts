import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";

export const root = style({
  position: "relative",
  display: "block",
  ":focus": {
    outline: "transparent",
  },
  ":focus-visible": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineColor: themeVars.color.outline,
  },
});
