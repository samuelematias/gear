import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";
import { red } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const root = style({
  position: "relative",

  selectors: {
    [`.prose &`]: {
      marginTop: tokens.spacing.lg,
    },
  },
});

export const avatar = style({
  float: "right",
  width: 200,
  maxWidth: "30%",
  marginLeft: tokens.spacing.lg,
  marginBottom: tokens.spacing.lg,
});

export const meta = style({
  position: "relative",
});

export const metaRow = style({
  selectors: {
    [`${meta} * + &`]: {
      marginTop: tokens.spacing.md,
    },
  },
});

export const metaTitle = style({
  position: "relative",
  fontFamily: tokens.font.mono,
  color: themeVars.color.foregroundSecondary,
});

export const metaDescription = style({
  marginTop: tokens.spacing.xs,
});
