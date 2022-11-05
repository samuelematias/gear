import { style, globalStyle } from "@vanilla-extract/css";
import { tokens } from "styles/tokens.css";

export const root = style({});

globalStyle(`${root} > * + *`, {
  marginBlockStart: tokens.spacing.md,
});

globalStyle(`${root} > * + h2`, {
  marginBlockStart: tokens.spacing.lg,
});

globalStyle(`${root} > * + h3`, {
  marginBlockStart: tokens.spacing.lg,
});
