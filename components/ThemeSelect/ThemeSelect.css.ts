import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  position: "relative",
  display: "inline-flex",
});

export const icon = style({
  position: "absolute",
  display: "grid",
  placeItems: "center",
  left: tokens.spacing.xs,
  top: 0,
  width: tokens.spacing.md,
  height: "100%",
});

export const select = style({
  border: "1px solid",
  borderColor: themeVars.color.border,
  paddingRight: tokens.spacing.xs,
  paddingLeft: calc.add(calc.multiply(tokens.spacing.xs, 2), tokens.spacing.md),
  fontSize: tokens.fontSize.sm,
  borderRadius: tokens.radius.md,
  textAlign: "left",
});
