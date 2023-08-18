import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import { SiReact, SiTailwindcss, SiWebstorm } from "react-icons/si";
import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

function scrollToTop() {
  const aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

const Footer = ({ darkMode, lng, t }) => {
  return (
    <section
      id="footer"
      className="pl-2 pt-20 flex justify-center bg-gray-900 h-fit select-none"
    >
      <div
        className="text-xs md:text-lg
        text-white text-center leading-8
      px-4 dark:text-gray-600 mt-6  "
      >
        <div
          className="text-gray-500 text-center font-bold 
        flex flex-row justify-around"
        >
          <span>Coded in Webstorm. Deployed with Netlify. Built with </span>
          <div className="overflow-hidden h-14 mx-2.5 -translate-y-3">
            <div className="animate-mobileSlide md:animate-slide">
              <span className="inline-block uppercase text-white py-1 px-2 mt-1 mb-11 bg-blue-500 dark:text-gray-600 dark:bg-transparent dark:border-2 dark:border-gray-600">
                Next.js
              </span>
            </div>
            <div>
              <span className="inline-block uppercase text-white py-1 px-2 mb-11 bg-teal-500 dark:text-gray-600 dark:bg-transparent dark:border-2 dark:border-gray-600">
                Tailwind CSS
              </span>
            </div>
            <div>
              <span className="inline-block uppercase text-white py-1 px-2 mb-11 bg-violet-600 dark:text-gray-600 dark:bg-transparent dark:border-2 dark:border-gray-600">
                Framer Motion
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex flex-row gap-6 pt-6 justify-center mx-auto text-white text-m dark:text-gray-600
        "
        >
          <TbBrandNextjs />
          <SiWebstorm />
          <SiReact />
          <SiTailwindcss />
          <TbBrandFramerMotion />
        </div>
        <div className="pt-12 pb-6">
          {" "}
          <button onClick={scrollToTop}>
            {darkMode ? (
              <AiOutlineArrowUp className="h-8 w-8 animate-bounce text-white dark:text-gray-600" />
            ) : (
              <BsFillArrowUpCircleFill className="h-10 w-10 animate-bounce text-white dark:text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
