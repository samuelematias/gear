import * as React from "react";
import * as styles from "./NumberedList.css";

interface NumberedListProps {
  children: any;
}

export const NumberedList = ({ children }: NumberedListProps) => {
  return (
    <ul className={styles.root}>
      {React.Children.map(children, (child) => (
        <li className={styles.item}>{React.cloneElement(child)}</li>
      ))}
    </ul>
  );
};
