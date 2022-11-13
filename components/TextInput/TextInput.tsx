import * as styles from "./TextInput.css";

type TextInputProps = JSX.IntrinsicElements["input"];

const TextInput = (props: TextInputProps) => {
  return <input {...props} className={styles.root} />;
};

export { TextInput };
