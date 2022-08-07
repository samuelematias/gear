import { tokens } from "@/styles/tokens.css";
import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  fontVariationSettings: "'wght' 500",
});

export const root = styleVariants({
  sm: [base, { fontSize: tokens.fontSize.sm }],
  md: [base, { fontSize: tokens.fontSize.md }],
  lg: [base, { fontSize: tokens.fontSize.lg }],
  xl: [base, { fontSize: tokens.fontSize.xl }],
});
