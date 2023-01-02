import * as React from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { cn } from "lib/utils";
import { ArrowRight, ArrowLeft } from "react-feather";
import { useRovingIndex } from "use-roving-index";
import { VisuallyHidden } from "components/VisuallyHidden";
import * as styles from "./Carousel.css";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const {
    activeIndex,
    setActiveIndex,
    moveBackward,
    moveBackwardDisabled,
    moveForward,
    moveForwardDisabled,
  } = useRovingIndex({ maxIndex: React.Children.count(children) - 1 });
  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <motion.div className={styles.root}>
        <motion.div
          className={styles.carousel}
          animate={{ x: `-${activeIndex * 100}%` }}
        >
          {React.Children.map(children, (child, index) => {
            return (
              <div key={index} className={styles.item}>
                {child}
              </div>
            );
          })}
        </motion.div>
        <nav className={styles.pagination}>
          <AnimatePresence initial={false}>
            {!moveBackwardDisabled && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{ opacity: 1 }}
                whileFocus={{ opacity: 1 }}
                onClick={() => moveBackward()}
                className={cn(styles.button, styles.prev)}
              >
                <VisuallyHidden>Previous</VisuallyHidden>
                <span className={styles.disc}>
                  <ArrowLeft width="16" height="16" />
                </span>
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {!moveForwardDisabled && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{ opacity: 1 }}
                whileFocus={{ opacity: 1 }}
                onClick={() => moveForward()}
                className={cn(styles.button, styles.next)}
              >
                <VisuallyHidden>Next</VisuallyHidden>
                <span className={styles.disc}>
                  <ArrowRight width="16" height="16" />
                </span>
              </motion.button>
            )}
          </AnimatePresence>

          <ol className={styles.list}>
            {React.Children.map(children, (child, index) => {
              return (
                <li key={index}>
                  <motion.button
                    variants={{
                      inactive: {
                        opacity: 0.7,
                      },
                      active: {
                        opacity: 1,
                      },
                    }}
                    initial={"inactive"}
                    animate={activeIndex === index ? "active" : "inactive"}
                    whileHover={{ opacity: 1 }}
                    whileFocus={{ opacity: 1 }}
                    className={styles.dot}
                    onClick={() => setActiveIndex(index)}
                    aria-current={activeIndex === index ? "true" : "false"}
                  >
                    <VisuallyHidden>View item {index + 1}</VisuallyHidden>
                  </motion.button>
                </li>
              );
            })}
          </ol>
        </nav>
      </motion.div>
    </MotionConfig>
  );
};

export { Carousel };
