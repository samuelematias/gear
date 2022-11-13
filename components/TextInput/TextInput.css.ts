import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  width: "100%",
  padding: tokens.spacing.sm,
  border: "1px solid",
  borderColor: themeVars.color.border,
  backgroundColor: themeVars.color.surface,
  borderRadius: tokens.radius.md,
});
