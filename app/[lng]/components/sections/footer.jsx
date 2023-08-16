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
      {/* Footer */}
      <div className="text-xs md:text-lg text-white text-center leading-8 px-4 dark:text-gray-600">
        {t("footer.text1")}
        <div className="flex flex-row gap-6 pt-6 justify-center mx-auto text-white text-m dark:text-gray-600">
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
