import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";

export const content = style({
  width: "100%",
  borderBottom: "1px solid",
  borderColor: themeVars.color.borderNeutral,
});

export const anchor = style({
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
