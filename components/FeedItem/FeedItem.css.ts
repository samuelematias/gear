import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  paddingBottom: tokens.spacing.lg,
  borderBottom: "1px solid",
  borderColor: themeVars.color.borderNeutral,
});
