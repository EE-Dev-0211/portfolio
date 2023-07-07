import React from "react";
import { BsFileTextFill } from "react-icons/bs";

const HeadingBox = ({ title, additive, icon }) => {
  return (
    <div className="grid gap-8 items-start justify-center my-8 ">
      <div className="relative group w-80 md:w-fit">
        {/*object behind the heading box*/}
        <div
          className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-yellow-600
           dark:from-teal-400 dark:to-blue-400 rounded-lg blur opacity-75
          group-hover:opacity-100 transition duration-200 animate-tilt "
        ></div>
        {/*heading box*/}
        <div className="relative px-3 py-2 md:px-7 md:py-4 bg-white dark:bg-black rounded-lg leading-none flex items-center">
          <span className="flex items-center space-x-5  divide-x divide-black dark:divide-white">
            <span className="flex items-center pr-1 md:pr-6 text-black dark:text-gray-100 font-extrabold">
              {icon} {title}
            </span>
            <span
              className="pl-2 md:pl-6 text-indigo-600 group-hover:text-black
            dark:text-indigo-400 dark:group-hover:text-gray-100 transition duration-200"
            >
              {additive}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeadingBox;
