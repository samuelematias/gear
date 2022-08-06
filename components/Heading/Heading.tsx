import { tokens } from "@/styles/tokens.css";
import * as styles from "./Heading.css";

interface HeadingProps {
  as?: "h1" | "h2" | "h3";
  size?: keyof typeof tokens.fontSize;
  children: React.ReactNode;
}

export const Heading = ({
  as: Component = "h2",
  children,
  size = "md",
}: HeadingProps) => {
  return <Component className={styles.root[size]}>{children}</Component>;
};
