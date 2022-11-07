import { style, styleVariants } from "@vanilla-extract/css";
import { tokens } from "styles/tokens.css";
import { responsiveStyle } from "styles/utils";

export const root = style({
  position: "relative",
  width: "100%",
  aspectRatio: "16/9",
});

export const width = styleVariants({
  "1/1": [root],
  "1/2": [
    root,
    {
      width: "50%",
      aspectRatio: "4/3",
    },
  ],
  "1/3": [
    root,
    responsiveStyle({
      md: {
        width: "33.33%",
        aspectRatio: "4/3",
      },
    }),
  ],
  "1/4": [
    root,
    responsiveStyle({
      md: {
        width: "50%",
        aspectRatio: "4/3",
      },
      lg: {
        width: "25%",
        aspectRatio: "1/1",
      },
    }),
  ],
});

export const float = styleVariants({
  none: [root],
  right: [
    root,
    {
      float: "right",
      marginLeft: tokens.spacing.lg,
      marginBottom: tokens.spacing.lg,
    },
    // responsiveStyle({
    //   md: {
    //     float: "right",
    //     marginLeft: tokens.spacing.lg,
    //     marginBottom: tokens.spacing.lg,
    //   },
    // }),
  ],
  left: [
    root,
    {
      float: "left",
      marginRight: tokens.spacing.lg,
      marginBottom: tokens.spacing.lg,
    },
    // responsiveStyle({
    //   md: {
    //     float: "left",
    //     marginRight: tokens.spacing.lg,
    //     marginBottom: tokens.spacing.lg,
    //   },
    // }),
  ],
});
