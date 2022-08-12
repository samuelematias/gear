import type { Sprinkles } from "@/styles/sprinkles.css";
import clsx from "clsx";
import { sprinkles } from "@/styles/sprinkles.css";
import * as styles from "./Blockquote.css";

interface BlockquoteProps {
  fontSize?: Sprinkles["fontSize"];
  children: string;
}

export const Blockquote = ({ fontSize, children }: BlockquoteProps) => {
  return (
    <blockquote
      className={clsx(
        sprinkles({
          fontSize,
        }),
        styles.root
      )}
    >
      {children}
    </blockquote>
  );
};
