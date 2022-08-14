import { style } from "@vanilla-extract/css";
import { tokens } from "@/styles/tokens.css";

export const root = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: tokens.spacing.md,
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
});

export const item = style({
  display: "grid",
});
