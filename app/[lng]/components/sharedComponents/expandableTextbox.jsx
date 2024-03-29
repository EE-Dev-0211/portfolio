import React, { useState } from "react";
import { FaBook, FaBookOpen } from "react-icons/fa";

const ExpandableTextBox = ({ content, buttonText }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="grid gap-8 items-start justify-center mt-6">
        <button
          onClick={toggleExpand}
          className="group text-xs relative px-4 py-4 bg-transparent
          border-dashed border-2 border-white
          dark:hover:border-teal-500 dark:transition dark:duration-1000
          hover:border-yellow-300 transition duration-1000
          rounded-lg leading-none flex items-center"
        >
          <span className="flex items-center justify-center space-x-3">
            <span
              className="text-white
            dark:group-hover:text-teal-500 dark:transition dark:duration-1000
                group-hover:text-yellow-300 transition duration-1000"
            >
              {buttonText}
            </span>
            <span
              className="text-white
            dark:group-hover:text-teal-500 dark:transition dark:duration-1000
                group-hover:text-yellow-300 transition duration-1000"
            >
              {expanded ? <FaBookOpen /> : <FaBook />}
            </span>
          </span>
        </button>
      </div>

      {expanded && (
        <div
          className="leading-4 mt-4 p-4  bg-gray-100 dark:text-white dark:bg-black
        rounded-lg border-solid dark:border-double border-2 dark:border-teal-200 border-gray-800
         bg-opacity-10  backdrop-filter backdrop-blur-sm
                  dark:bg-opacity-10  dark:backdrop-filter dark:backdrop-blur-sm
            text-white"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default ExpandableTextBox;
