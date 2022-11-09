import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  marginTop: "auto",
  paddingTop: tokens.spacing.xxl,
  paddingBottom: tokens.spacing.xxl,
  paddingRight: tokens.spacing.md,
  paddingLeft: tokens.spacing.md,
  backgroundColor: themeVars.color.pageFaint,
  textAlign: "center",
});
