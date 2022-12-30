import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  width: "100%",
  paddingLeft: tokens.spacing.md,
  paddingRight: tokens.spacing.md,
  borderTop: "4px solid",
  borderBottom: "1px solid",
  borderColor: themeVars.color.borderNeutral,
});

export const nav = style({
  display: "flex",
  justifyContent: "space-between",
  gap: tokens.spacing.md,
  maxWidth: tokens.maxWidth.md,
  marginRight: "auto",
  marginLeft: "auto",
});

export const group = style({
  display: "flex",
  gap: tokens.spacing.md,
});

export const anchor = style({
  position: "relative",
  display: "grid",
  placeItems: "center",
  paddingTop: tokens.spacing.md,
  paddingBottom: tokens.spacing.md,
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

export const highlight = style({
  position: "absolute",
  top: -4,
  left: 0,
  width: "100%",
  height: 4,
  backgroundColor: themeVars.color.highlight,
});
