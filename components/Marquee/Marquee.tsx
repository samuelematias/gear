import * as React from "react";
import { motion, useAnimationControls } from "framer-motion";
import * as styles from "./Marquee.css";

const Marquee = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimationControls();

  React.useEffect(() => {
    controls.start({
      x: "-100%",
      transition: {
        duration: 50,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div className={styles.root}>
      <motion.div key="rowOne" className={styles.scroller} animate={controls}>
        {React.Children.map(children, (child, index) => {
          return (
            <div key={`rowOne-${index}`} className={styles.item}>
              {child}
            </div>
          );
        })}
      </motion.div>
      <motion.div key="rowTwo" className={styles.scroller} animate={controls}>
        {React.Children.map(children, (child, index) => {
          return (
            <div key={`rowTwo-${index}`} className={styles.item}>
              {child}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export { Marquee };
