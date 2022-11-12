import * as React from "react";
import * as styles from "./Prose.css";

const Prose = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.root}>{children}</div>;
};

export { Prose };
