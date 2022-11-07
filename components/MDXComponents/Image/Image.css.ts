import { style, styleVariants } from "@vanilla-extract/css";
import { tokens } from "styles/tokens.css";

export const root = style({
  position: "relative",
  width: "100%",
  aspectRatio: "16/9",
});

export const width = styleVariants({
  full: [root],
  half: [
    root,
    {
      width: "50%",
      aspectRatio: "4/3",
    },
  ],
  quarter: [
    root,
    {
      width: "25%",
      aspectRatio: "1/1",
    },
  ],
});

export const float = styleVariants({
  right: [
    root,
    {
      float: "right",
      marginLeft: tokens.spacing.lg,
      marginBottom: tokens.spacing.lg,
    },
  ],
  left: [
    root,
    {
      float: "left",
      marginRight: tokens.spacing.lg,
      marginBottom: tokens.spacing.lg,
    },
  ],
});
