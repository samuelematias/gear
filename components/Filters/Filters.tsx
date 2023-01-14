import * as styles from "./Filters.css";

const Filters = ({ children }: { children: React.ReactNode }) => {
  return (
    <fieldset className={styles.root}>
      <legend className={styles.legend}>Filter</legend>
      <div className={styles.items}>{children}</div>
    </fieldset>
  );
};

export { Filters };
