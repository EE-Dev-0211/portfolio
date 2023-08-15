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
            className="border-4 border-solid border-black dark:border-white text-center bg-white text-black
              font-bold dark:text-white dark:bg-gray-800 text-xs md:text-xl w-3/4 md:w-auto p-4 rounded-lg shadow
             bg-gradient-to-b from-yellow-100 to-gray-300"
            // Prevent the menu from closing, stop the click event from propagating to the parent element
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: darkMode ? 'url("/dotgrid.svg")' : "",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <span className="leading-loose">{content}</span>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default PopupBox;
