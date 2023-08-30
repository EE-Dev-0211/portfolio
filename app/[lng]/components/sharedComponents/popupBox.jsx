import React from "react";
import { motion } from "framer-motion";

const PopupBox = ({
  isPopupBoxOpen,
  togglePopupBox,
  content,
  darkMode,
  itemMotion,
  navMotion,
}) => {
  return (
    <motion.div variants={navMotion} animate="visible" initial="hidden">
      {/* Impressums Popup */}
      {isPopupBoxOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={togglePopupBox} //  close menu if click outside of it
        >
          <motion.div
            variants={itemMotion}
            className="w-3/4 md:w-auto p-1.5 bg-gradient-to-b from-red-400 via-yellow-300 to-orange-400
            dark:bg-gradient-to-b dark:from-teal-300 dark:via-lime-300 dark:to-green-950 rounded-lg"
          >
            <div
              className="text-center bg-white text-black
              font-bold dark:text-white text-xs md:text-xl w-full p-4 rounded-lg shadow
             bg-gradient-to-b from-yellow-100 to-gray-300
             dark:bg-gradient-to-b dark:from-black dark:to-gray-700"
              // Prevent the menu from closing, stop the click event from propagating to the parent element
              onClick={(e) => e.stopPropagation()}
            >
              <span className="leading-loose">{content}</span>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default PopupBox;
