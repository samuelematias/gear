import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: tokens.spacing.md,
  borderBottom: "1px solid",
  borderColor: themeVars.color.borderNeutral,
  paddingBlock: tokens.spacing.md,
});

export const item = style({});
