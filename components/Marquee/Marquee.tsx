import * as React from "react";
import { motion } from "framer-motion";
import * as styles from "./Marquee.css";

const motionProps = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
  },
  transition: {
    duration: 30,
    bounce: 0,
    repeat: Infinity,
    ease: "linear",
  },
};

const Marquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div className={styles.root}>
      <motion.div className={styles.scroller} {...motionProps}>
        {React.Children.map(children, (child, index) => {
          return (
            <div key={`rowOne-${index}`} className={styles.item}>
              {child}
            </div>
          );
        })}
      </motion.div>
      <motion.div className={styles.scroller} {...motionProps}>
        {React.Children.map(children, (child, index) => {
          return (
            <div key={`rowTwo-${index}`} className={styles.item}>
              {child}
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export { Marquee };
