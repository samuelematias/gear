import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
} from "@vanilla-extract/sprinkles";
import { themeVars } from "./theme.css";
import { tokens } from "./tokens.css";

const space = tokens.spacing;
export type Space = keyof typeof space;

const maxWidth = tokens.maxWidth;
export type MaxWidth = keyof typeof maxWidth;

const fontSize = tokens.fontSize;
export type FontSize = keyof typeof fontSize;

const letterSpacing = tokens.letterSpacing;
export type LetterSpacing = keyof typeof letterSpacing;

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
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column", "row-reverse"],
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
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    gap: space,
    columnGap: space,
    rowGap: space,
    width: space,
    height: space,
    aspectRatio: ["1/1", "4/3", "16/9"],
    fontSize,
    maxWidth,
    float: ["none", "right", "left"],
    textAlign: ["center", "right", "left"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    color,
    textTransform: ["none", "uppercase"],
    letterSpacing,
    flexShrink: [0],
  },
});

export const mapResponsiveValue = createMapValueFn(responsiveProperties);

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
