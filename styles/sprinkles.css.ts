import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { themeVars } from "./theme.css";
import { tokens } from "./tokens.css";

const space = tokens.spacing;
export type Space = keyof typeof space;

const fontSize = tokens.fontSize;
export type FontSize = keyof typeof fontSize;

const color = themeVars.color;
export type Color = keyof typeof color;

const responsiveProperties = defineProperties({
  conditions: {
    sm: {},
    md: { "@media": "screen and (min-width: 768px)" },
    lg: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "sm",
  properties: {
    position: ["relative", "absolute"],
    display: ["none", "flex", "grid", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    gap: space,
    columnGap: space,
    rowGap: space,
    gridTemplateColumns: ["1fr", "repeat(12, minmax(0, 1fr))"],
    gridColumnStart: [1, 2, 3, 4],
    gridColumnEnd: [1, 2, 3, 4],
    width: space,
    height: space,
    aspectRatio: ["1/1", "4/3", "16/9"],
    fontSize,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    color: color,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
