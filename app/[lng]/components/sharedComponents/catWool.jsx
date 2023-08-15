import { motion } from "framer-motion";
import React from "react";

const CatWool = ({ myRef, isGameActive, x, y }) => {
  const [rotate, setRotate] = React.useState(false);
  const [move, setMove] = React.useState(false);

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
      animate={{ x, y, rotate: rotate ? 500 : 0 }}
      onClick={() => {
        setMove(!move);
        setRotate(!rotate);
      }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
};

export default CatWool;
