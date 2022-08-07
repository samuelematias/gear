import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  width: "100vw",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  // paddingBlock: tokens.spacing.md,
  overflowX: "scroll",
  overscrollBehaviorX: "contain",
  scrollSnapType: "x proximity",
  scrollbarWidth: "none",
  display: "grid",
  gridTemplateColumns: `[full-start] 1fr
    [content-start]
    min(48rem, 100% - ${tokens.spacing.md} * 2)
    [content-end]
    1fr [full-end]`,

  "::-webkit-scrollbar": {
    inlineSize: "0 !important",
    display: "none",
  },
});

export const inner = style({
  display: "flex",
  alignItems: "center",
  gridTemplateColumns: "inherit",
  gap: tokens.spacing.lg,
  gridColumn: "content",
  "::after": {
    content: "",
    alignSelf: "stretch",
    paddingInlineEnd: `max(${tokens.spacing.md}, (100vw - 48rem) / 2 - ${tokens.spacing.md})`,
  },
});

export const item = style({
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  scrollSnapAlign: "center",
  inlineSize: "100%",
  maxInlineSize: "48rem",
  overflow: "hidden",
});

export const note = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: tokens.spacing.md,
  textAlign: "center",
  fontFamily: tokens.font.mono,
  color: themeVars.color.foregroundSecondary,
  gap: tokens.spacing.xs,
});
