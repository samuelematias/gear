import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: tokens.spacing.lg,
});

export const primary = style({
  gridColumn: "span 8",
});

export const secondary = style({
  gridColumn: "span 4",
});
