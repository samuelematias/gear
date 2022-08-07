import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  listStyle: "none",
  counterReset: "li",
  display: "grid",
  rowGap: tokens.spacing.md,
});

export const item = style({
  display: "flex",
  gap: tokens.spacing.sm,
  "::before": {
    counterIncrement: "li",
    content: "counter(li, decimal-leading-zero)",
    fontFamily: tokens.font.mono,
    color: themeVars.color.foregroundSecondary,
  },
});
