import * as styles from "./VisuallyHidden.css";

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return <span className={styles.root}>{children}</span>;
};
