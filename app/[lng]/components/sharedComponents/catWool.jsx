import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

const CatWool = ({ myRef, isGameActive, x, y }) => {
  const [isFlyingAway, setIsFlyingAway] = useState(false);
  const [originalPosition, setOriginalPosition] = useState({
    x: 0,
    y: 0,
  });
  const [prevCursorX, setPrevCursorX] = useState(0);

  const cursorRef = useRef(null);

  useEffect(() => {
    setOriginalPosition({ x, y });
  }, [x, y]);

  useEffect(() => {
    if (cursorRef.current) {
      setPrevCursorX(cursorRef.current.clientX);
    }
  }, []);

  const cursorMoved = cursorRef.current
    ? cursorRef.current.clientX - prevCursorX
    : 0;

  return (
    <motion.div
      style={{
        backgroundImage: "url('/knitted-wool.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
      ref={myRef}
      className={`${isGameActive ? "" : "hidden"} woolBall active:cursor-paw3`}
      animate={{
        x: isFlyingAway ? originalPosition.x + 300 : x,
        y: isFlyingAway ? -300 : y,
        rotate: (isFlyingAway ? 1800 : 0) + cursorMoved * 4,
      }}
      onClick={() => {
        if (!isFlyingAway) {
          setIsFlyingAway(true);
          setTimeout(() => {
            setIsFlyingAway(false);
          }, 1000);
        }
      }}
      onMouseMove={(event) => {
        setPrevCursorX(
          cursorRef.current ? cursorRef.current.clientX : event.clientX
        );
        cursorRef.current = event;
      }}
      transition={{
        type: "spring",
        damping: 5,
        stiffness: 20,
        restDelta: 0.001,
        bounce: 10,
      }}
    />
  );
};

export default CatWool;
