// import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle(".prose > * + *", {
  marginTop: tokens.spacing.md,
});

globalStyle(".prose > * + h2", {
  marginTop: tokens.spacing.lg,
});

globalStyle(".prose > h2", {
  fontSize: tokens.fontSize.lg,
});
