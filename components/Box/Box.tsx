import * as React from "react";
import { createElement } from "react";
import type { PolymorphicComponentProps } from "types";
import type { Sprinkles } from "styles/sprinkles.css";
import { sprinkles } from "styles/sprinkles.css";
import { cn } from "lib/utils";

export type BoxProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  Sprinkles
>;

export const Box = <C extends React.ElementType = "div">({
  as,
  position,
  className,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  display,
  flexDirection,
  alignItems,
  justifyContent,
  placeItems,
  flexShrink,
  gap,
  columnGap,
  rowGap,
  width,
  maxWidth,
  height,
  aspectRatio,
  float,
  ...restProps
}: BoxProps<C>) => {
  const atomClasses = cn(
    sprinkles({
      position,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingX,
      paddingY,
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginX,
      marginY,
      display,
      flexDirection,
      alignItems,
      justifyContent,
      placeItems,
      flexShrink,
      gap,
      columnGap,
      rowGap,
      width,
      maxWidth,
      height,
      aspectRatio,
      float,
    }),
    className
  );
  const component = as || "div";
  return createElement(component, { className: atomClasses, ...restProps });
};
