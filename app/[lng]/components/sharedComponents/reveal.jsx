import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({
  content,
  slide,
  popInDuration,
  revealDuration,
  revealDelay,
  popInDelay,
  darkMode,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-auto overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: popInDuration, delay: popInDelay }}
      >
        {content}
      </motion.div>
      <motion.div
        className={`${slide}`}
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: revealDuration,
          delay: revealDelay,
          ease: "easeIn",
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: darkMode ? "#2DD4BF" : "#ffd476",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};
