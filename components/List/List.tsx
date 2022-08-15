import * as React from "react";
import type { Sprinkles } from "@/styles/sprinkles.css";
import clsx from "clsx";
import { sprinkles } from "@/styles/sprinkles.css";

interface ListProps {
  as?: "ul" | "ol";
  children: React.ReactNode;
  rowGap?: Sprinkles["rowGap"];
}

export const List = ({
  as: Component = "ul",
  children,
  rowGap = "md",
}: ListProps) => {
  return (
    <Component
      className={clsx(
        sprinkles({
          display: "grid",
          rowGap,
        })
      )}
    >
      {React.Children.map(children, (child, idx) => {
        return <li key={idx}>{child}</li>;
      })}
    </Component>
  );
};
