import { createGlobalTheme } from "@vanilla-extract/css";
import { slate, blue } from "@radix-ui/colors";

export const themeVars = createGlobalTheme(":root", {
  color: {
    page: slate.slate1,
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
