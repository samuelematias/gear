import clsx from "clsx";
import * as styles from "./ProsCons.css";

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export const ProsCons = ({ pros, cons }: ProsConsProps) => {
  return (
    <div className={styles.root}>
      <ul className={styles.group}>
        {pros.map((pro, idx) => {
          return (
            <li key={idx}>
              <span
                aria-hidden={true}
                className={clsx(styles.mark, styles.pro)}
              >
                ✓
              </span>{" "}
              {pro}
            </li>
          );
        })}
      </ul>

      <ul className={styles.group}>
        {cons.map((con, idx) => {
          return (
            <li key={idx}>
              <span
                aria-hidden={true}
                className={clsx(styles.mark, styles.con)}
              >
                ×
              </span>{" "}
              {con}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
