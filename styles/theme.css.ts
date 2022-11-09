import {
  createGlobalThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";
import { slate, slateDark, slateDarkA, blue } from "@radix-ui/colors";

export const themeVars = createGlobalThemeContract({
  color: {
    page: "color-page",
    pageFaint: "color-page-faint",
    foreground: "color-foreground",
    foregroundNeutral: "color-foreground-neutral",
    foregroundHighContrast: "color-foreground-high-contrast",
    surface: "color-surface",
    surfaceStrong: "color-surface-strong",
    border: "color-border",
    borderNeutral: "color-border-neutral",
    highlight: "color-highlight",
    outline: "color-outline",
  },
});

createGlobalTheme(":root.light", themeVars, {
  color: {
    page: slate.slate1,
    pageFaint: slate.slate3,
    foreground: slate.slate12,
    foregroundNeutral: slate.slate10,
    foregroundHighContrast: slate.slate1,
    surface: slate.slate2,
    surfaceStrong: slate.slate12,
    border: slate.slate8,
    borderNeutral: slate.slate4,
    highlight: "#FF4F00",
    outline: blue.blue8,
  },
});

createGlobalTheme(":root.dark", themeVars, {
  color: {
    page: slateDark.slate1,
    pageFaint: slateDark.slate3,
    foreground: slateDark.slate12,
    foregroundNeutral: slateDark.slate10,
    foregroundHighContrast: slateDark.slate1,
    surface: slateDark.slate2,
    surfaceStrong: slateDark.slate12,
    border: slateDark.slate8,
    borderNeutral: slateDark.slate4,
    highlight: "#FF4F00",
    outline: blue.blue8,
  },
});
