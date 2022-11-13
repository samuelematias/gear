import * as styles from "./Button.css";

type ButtonProps = JSX.IntrinsicElements["button"];

const Button = (props: ButtonProps) => {
  return <button {...props} className={styles.root} />;
};

export { Button };
