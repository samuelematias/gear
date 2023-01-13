import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

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

export const info = style({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  gap: tokens.spacing.sm,
});

export const icon = style({
  opacity: 0,
  transition: "opacity ease-in-out 0.2s",
  selectors: {
    [`${root}:hover &`]: {
      opacity: 1,
    },
  },
});
