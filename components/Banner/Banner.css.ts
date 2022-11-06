import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  width: "100%",
  paddingInline: tokens.spacing.md,
  background: "hsla(206, 30.0%, 98.8%, .9)",
  backdropFilter: "blur(15px)",
  zIndex: 1,
  borderBottom: "1px solid",
  borderColor: themeVars.color.borderNeutral,
});

export const nav = style({
  display: "flex",
  gap: tokens.spacing.md,
  maxWidth: tokens.maxWidth.md,
  marginInline: "auto",
});

export const anchor = style({
  position: "relative",
  paddingBlock: tokens.spacing.md,
  borderTop: "4px solid transparent",
});

export const highlight = style({
  position: "absolute",
  top: -4,
  left: 0,
  width: "100%",
  height: 4,
  backgroundColor: themeVars.color.highlight,
});
