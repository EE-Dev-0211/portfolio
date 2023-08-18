import React from "react";

const Skillbox = ({ content }) => {
  return (
    <div
      className="group items-center bg-gray-100 dark:bg-black text-center
            p-6 md:pt-8 md:px-8 md:pb-4 rounded-xl mt-6 mb-10 w-60 md:w-1/4 flex flex-col
            shadow-lg border-solid dark:border-double border-2 dark:border-teal-200 border-gray-800
            bg-opacity-10 backdrop-filter backdrop-blur-sm  dark:bg-opacity-10  dark:backdrop-filter
            dark:backdrop-blur-sm hover:border-yellow-100 transition duration-500
        dark:hover:border-teal-700 dark:transition dark:duration-500"
    >
      {content}
    </div>
  );
};

export default Skillbox;
