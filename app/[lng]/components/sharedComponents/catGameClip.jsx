import { CgPlayStopO } from "react-icons/cg";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaCat } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";

const CatGameClip = ({
  hasCatVanished,
  isGameActive,
  gamemodeToggle,
  toggleTooltip,
  catToggle,
  t,
  isTooltipVisible,
}) => {
  return (
    <div
      className={`hidden md:block md:absolute md:-left-16 
      md:-bottom-40 md:hover:-left-4 md:hover:-bottom-40 md:w-20 md:h-20 md:z-0 
          ${hasCatVanished === true ? "" : "md:cursor-paw2"}
          md:rounded-r-full md:bg-gray-800 md:border-2 md:border-teal-100 `}
    >
      {hasCatVanished ? (
        isGameActive ? (
          <CgPlayStopO
            onClick={() => {
              gamemodeToggle();
              toggleTooltip();
            }}
            className="mt-7.5 ml-7.5 cursor-pointer text-2xl text-red-400 hover:text-red-700"
          />
        ) : (
          <AiFillPlayCircle
            onClick={() => {
              gamemodeToggle();
              toggleTooltip();
            }}
            className="mt-7.5 ml-7.5 text-2xl text-green-800 hover:text-green-300"
          />
        )
      ) : (
        <FaCat
          onClick={() => {
            catToggle();
            toggleTooltip();
          }}
          className="mt-7.5 ml-7.5 dark:ml-7.5
              hover:text-white text-2xl text-gray-400"
          onMouseEnter={toggleTooltip}
          onMouseLeave={toggleTooltip}
        />
      )}

      <motion.div
        animate={{ scale: isTooltipVisible ? 1 : 0 }}
        className={`  
 ${
   isTooltipVisible
     ? "absolute top-20 left-full ml-2 mt-2 bg-gray-700 text-white w-36 px-4 py-2 rounded-md dark:bg-blue-600"
     : "hidden"
 } `}
      >
        <span className="">
          {" "}
          {t("navbar.cat-tooltip1")} <br />
          <br />
        </span>
        <span className="">
          <kbd className="kbd -translate-x-1.5">Esc</kbd>
          {t("navbar.cat-tooltip2")}{" "}
        </span>
      </motion.div>
    </div>
  );
};

export default CatGameClip;
