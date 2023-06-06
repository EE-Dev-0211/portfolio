import { TbBrandNextjs } from "react-icons/tb";
import { SiReact, SiTailwindcss, SiWebstorm } from "react-icons/si";
import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

function scrollToTop() {
  const aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

const Footer = ({ darkMode }) => {
  return (
    <section
      id="footer"
      className="pl-2 pt-20 snap-start h-24 flex justify-center"
    >
      <div className="text-md text-black text-center leading-8 dark:text-gray-600">
        Coded in Webstorm. Built with Next.js and Tailwind CSS, deployed with
        Vercel. 8bit-Avatar by{" "}
        <a href="https://8bitpix.com/" target="_blank">
          8bitpix.com
        </a>
        <div className="flex flex-row px-10 gap-6 justify-center mx-auto text-black my-4 pb-10 text-m dark:text-gray-600">
          <TbBrandNextjs />
          <SiWebstorm />
          <SiReact />
          <SiTailwindcss />
        </div>
      </div>

      <div className="px-10">
        {" "}
        <button onClick={scrollToTop}>
          {darkMode ? (
            <AiOutlineArrowUp className="h-8 w-8 animate-bounce text-black dark:text-gray-600" />
          ) : (
            <BsFillArrowUpCircleFill className="h-10 w-10 animate-bounce text-black dark:text-gray-700" />
          )}
        </button>
      </div>
    </section>
  );
};

export default Footer;
