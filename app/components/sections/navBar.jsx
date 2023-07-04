import { TbBrandNextjs } from "react-icons/tb";
import { SiReact, SiTailwindcss, SiWebstorm } from "react-icons/si";
import React, { useEffect, useRef, useState } from "react";
import {
  BsFillArrowUpCircleFill,
  BsFillMoonStarsFill,
  BsFillSunFill,
} from "react-icons/bs";
import { AiFillPlayCircle, AiOutlineArrowUp } from "react-icons/ai";
import { CgPlayStopO } from "react-icons/cg";
import { FaCat } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { motion } from "framer-motion";
import PopupBox from "app/components/sharedComponents/popupBox";
import { useFollowPointer } from "app/components/use-follow-pointer";

const NavBar = ({
  darkMode,
  darkmodeToggle,
  activeSection,
  toggleTooltip,
  isTooltipVisible,
  scrollToSection,
  togglePopupBox,
  isPopupBoxOpen,
  setIsCustomCursor,
  isCustomCursor,
}) => {
  const [isGameActive, setIsGameActive] = useState(false);
  const myRef = useRef(null);
  const { x, y } = useFollowPointer(myRef, isGameActive);
  const [hasCatVanished, setHasCatVanished] = useState(false);
  const [isCustomCursorActive, setIsCustomCursorActive] = useState(false);

  const gamemodeToggle = () => {
    setIsGameActive(!isGameActive);
    setIsCustomCursorActive(!isCustomCursorActive);
    setIsCustomCursor(!isCustomCursor);
  };

  const catToggle = () => setHasCatVanished(!hasCatVanished);
  // stop the game via escape button
  function userStopsGame() {
    setIsGameActive(false);
    setIsCustomCursor(false);
  }

  function handleKeyPress(event) {
    if (event.keyCode === 27 || event.key === "Escape") {
      userStopsGame();
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <>
      <nav
        className={` hidden md:py-6 md:fixed md:flex md:w-screen md:justify-between
      md:top-0 md:z-50 md:mx-auto ${
        activeSection !== "about" ? "md:bg-gray-800" : "md:bg-transparent"
      } md:dark:bg-black `}
      >
        <div
          className={`absolute -left-16 -bottom-24 hover:-left-4 hover:-bottom-24 w-20 h-20 z-0 
          ${hasCatVanished === true ? "" : "cursor-paw2"}
          rounded-r-full bg-gray-800 border-2 border-teal-100 `}
        >
          {hasCatVanished ? (
            isGameActive ? (
              <CgPlayStopO
                onClick={gamemodeToggle}
                className="mt-7.5 ml-7.5 cursor-pointer text-2xl text-red-400 hover:text-red-700"
              />
            ) : (
              <AiFillPlayCircle
                onClick={gamemodeToggle}
                className="mt-7.5 ml-7.5 text-2xl text-green-800 hover:text-green-300"
              />
            )
          ) : (
            <FaCat
              onClick={() => {
                catToggle();
                toggleTooltip();
              }}
              className="mt-7.5 ml-7.5 dark:ml-8
              hover:text-white text-2xl text-gray-400"
              onMouseEnter={toggleTooltip}
              onMouseLeave={toggleTooltip}
            />
          )}

          <div
            className={`  
 ${
   isTooltipVisible
     ? "absolute top-20 left-full ml-2 mt-2 bg-gray-700 text-white w-36 px-4 py-2 rounded-md dark:bg-blue-600"
     : "hidden"
 } `}
          >
            <span>
              Digital wool for digital cats. <br />
              <br />
              ESC to exit.
            </span>
          </div>
        </div>

        <div className="flex flex-row">
          <span className="flex items-center gap-4 ml-2 select-none">
            <IoMdInformationCircle
              onClick={togglePopupBox}
              className="text-base font-bolder hover:cursor-help hover:text-green-400"
            />
            Portfolio.
          </span>
        </div>
        {/*Cat Woolball Game*/}
        <motion.div
          ref={myRef}
          className={`${isGameActive === true ? "" : "hidden"} woolBall `}
          animate={{ x, y }}
          transition={{
            type: "spring",
            damping: 3,
            stiffness: 50,
            restDelta: 0.001,
          }}
        />
        {/* Imprint Popup */}
        <PopupBox
          isPopupBoxOpen={isPopupBoxOpen}
          togglePopupBox={togglePopupBox}
          content={
            <>
              {" "}
              This is an private & non-commercial portfolio site. <br />{" "}
              8bit-Avatar generated @{" "}
              <a
                className="text-gray-500 hover:text-gray-800
                  dark:text-teal-100 dark:hover:text-teal-500"
                href="https://8bitpix.com/"
                target="_blank"
              >
                8bitpix.com
              </a>
              .<br />
              <a
                className="text-gray-500 hover:text-gray-800 dark:text-teal-100 dark:hover:text-teal-500"
                href=" https://unsplash.com/de/fotos/blick-auf-eine-bergkette-bei-sonnenuntergang-MSoJwmGW5_oBackground"
                target="_blank"
              >
                Background image{" "}
              </a>
              free for use under the Unsplash License.
              <br /> CV automatically generated by LinkedIn. <br /> All icons
              are part of the react-icons-Icon-Library. <br /> Custom cursor
              icons from cursor.cc (
              <a
                className="text-gray-500 hover:text-gray-800 dark:text-teal-100 dark:hover:text-teal-500"
                href="https://www.cursor.cc/?action=icon&file_id=189359"
                target="_blank"
              >
                189359
              </a>
              ,{" "}
              <a
                className="text-gray-500 hover:text-gray-800 dark:text-teal-100 dark:hover:text-teal-500"
                href="https://www.cursor.cc/?action=icon&file_id=183788"
                target="_blank"
              >
                183788
              </a>
              ), <br /> free for use under the creative commons license with no
              attribution.
            </>
          }
        />
        {/*big menu*/}
        <ul className="flex items-center">
          <li key="about">
            <a
              className={`${
                activeSection === "about"
                  ? "font-bold dark:font-normal after:absolute after:inset-x-0 after:h-px after:bg-blue-500 after:bottom-[-10px] after:font-bold dark:text-teal-50"
                  : "text-white dark:text-gray-400"
              } tracking-wider select-none mx-6 relative
              hover:after:absolute hover:after:inset-x-0 hover:after:h-px 
              hover:after:bg-blue-700 hover:after:bottom-[-10px] hover:after:font-bold`}
              href="#about"
              onClick={() => scrollToSection("about")}
            >
              About
            </a>
          </li>
          <li key="skills">
            <a
              className={`${
                activeSection === "skills"
                  ? "after:absolute after:inset-x-0 after:h-px after:bg-blue-500 after:bottom-[-10px] after:font-bold dark:text-teal-50 "
                  : "text-white dark:text-gray-400"
              }  tracking-wider select-none mx-6 relative 
              hover:after:absolute hover:after:inset-x-0 hover:after:h-px hover:after:bg-blue-700 
              hover:after:bottom-[-10px] hover:after:font-bold
              ${
                activeSection === "about" ? "font-bold dark:font-normal" : ""
              } `}
              href="#skills"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </a>
          </li>
          <li key="resume" className="mr-4">
            <a
              className={`${
                activeSection === "resume"
                  ? "after:absolute after:inset-x-0 after:h-px after:bg-blue-500 after:bottom-[-10px] after:font-bold dark:text-teal-50"
                  : "text-white dark:text-gray-400"
              } tracking-wider mx-6 select-none relative hover:after:absolute hover:after:inset-x-0 hover:after:h-px 
                  hover:after:bg-blue-700 hover:after:bottom-[-10px] hover:after:font-bold
                   ${
                     activeSection === "about"
                       ? "font-bold dark:font-normal"
                       : ""
                   }  `}
              href="#resume"
              onClick={() => scrollToSection("resume")}
            >
              Resumé
            </a>
          </li>
          <li key="cv">
            <a
              className="tracking-wider select-none relative border-2 py-2.5
                  px-5 font-medium uppercase transition-colors before:absolute
                  before:left-0 before:top-0 before:-z-10 before:h-full before:w-full
                  before:origin-top-left before:scale-x-0 before:transition-transform
                  before:duration-300 before:content-[''] before:hover:scale-x-100
                  bg-transparent text-teal-200 border-teal-200 before:border-green-500 hover:text-gray-800
                  before:bg-teal-100 dark:bg-transparent dark:text-gray-500 dark:border-gray-600
                  dark:hover:text-black dark:before:bg-gray-600"
              href="/cv.pdf"
              target="_blank"
            >
              CV
            </a>
          </li>
          <li key="darkmodeToggle">
            {darkMode ? (
              <BsFillMoonStarsFill
                onClick={darkmodeToggle}
                className="mr-14 ml-10 cursor-pointer text-2xl
                         }
               text-amber-200 hover:text-gray-400 "
              />
            ) : (
              <BsFillSunFill
                onClick={darkmodeToggle}
                className={`  ${
                  activeSection === "about" ? "text-red-400" : "text-yellow-400"
                }   mr-14 ml-10 cursor-pointer text-2xl  hover:text-red-800`}
              />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
