import * as styles from "./VisuallyHidden.css";

interface VisuallyHiddenProps {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  children: React.ReactNode;
}

export const VisuallyHidden = ({
  as: Component = "span",
  children,
}: VisuallyHiddenProps) => {
  return <Component className={styles.root}>{children}</Component>;
};
