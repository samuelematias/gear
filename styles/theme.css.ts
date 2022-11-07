import { createGlobalTheme } from "@vanilla-extract/css";
import { slate, grass } from "@radix-ui/colors";

export const themeVars = createGlobalTheme(":root", {
  color: {
    page: slate.slate1,
    foreground: slate.slate12,
    foregroundNeutral: slate.slate10,
    foregroundHighContrast: slate.slate1,
    surface: slate.slate2,
    surfaceStrong: slate.slate12,
    borderNeutral: slate.slate3,
    highlight: "#FF4F00",
  },
});
