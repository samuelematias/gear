import clsx from "clsx";
import { Glyph } from "../Glyph";
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
            <li key={idx} className={styles.item}>
              <div className={clsx(styles.mark, styles.pro)}>
                <Glyph name="circleCheck" />
              </div>
              {pro}
            </li>
          );
        })}
      </ul>

      <ul className={styles.group}>
        {cons.map((con, idx) => {
          return (
            <li key={idx} className={styles.item}>
              <div className={clsx(styles.mark, styles.con)}>
                <Glyph name="circleX" />
              </div>
              {con}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
