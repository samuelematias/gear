import { sage, sageDark, grass, grassDark } from "@radix-ui/colors";
import { createGlobalTheme } from "@vanilla-extract/css";

export const tokens = createGlobalTheme(":root", {
  font: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    mono: "'JetBrains Mono Web', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  color: {
    light: {
      ...sage,
      ...grass,
    },
    dark: {
      ...sageDark,
      ...grassDark,
    },
  },
});
