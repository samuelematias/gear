import * as React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useMediaQuery } from "hooks/useMediaQuery";
import * as styles from "./Marquee.css";

const Marquee = ({ children }: { children: React.ReactNode }) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const controls = useAnimationControls();

  React.useEffect(() => {
    const duration = matches ? 30 : 10;
    controls.start({
      x: "-100%",
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls, matches]);

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
