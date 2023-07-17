import React, { useEffect, useRef, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillMail, AiFillPlayCircle } from "react-icons/ai";
import { CgPlayStopO } from "react-icons/cg";
import { FaCat } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { motion } from "framer-motion";
import PopupBox from "app/[lng]/components/sharedComponents/popupBox.jsx";
import { useFollowPointer } from "app/[lng]/components/use-follow-pointer.ts";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import Link from "next/link";

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
  handleEmailClick,
  lng,
  t,
}) => {
  const [isGameActive, setIsGameActive] = useState(false);
  const myRef = useRef(null);
  const { x, y } = useFollowPointer(myRef, isGameActive);
  const [hasCatVanished, setHasCatVanished] = useState(false);
  const [isCustomCursorActive, setIsCustomCursorActive] = useState(false);
  const [isDropDownLangOpen, setIsDropDownLangOpen] = useState(false);

  const gamemodeToggle = () => {
    setIsGameActive(!isGameActive);
    setIsCustomCursorActive(!isCustomCursorActive);
    setIsCustomCursor(!isCustomCursor);
  };

  const LangDropdownToggle = () => {
    setIsDropDownLangOpen(!isDropDownLangOpen);
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
        activeSection !== "about"
          ? "md:bg-gray-800 md:dark:bg-black"
          : "md:bg-transparent"
      }  `}
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
              className="mt-7.5 ml-7.5 dark:ml-7.5
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
            <Trans i18nKey="languageSwitcher" t={t}>
              <button onClick={LangDropdownToggle}>
                <strong>{{ lng }}</strong>
              </button>
            </Trans>
            <ul className={`${isDropDownLangOpen ? "block" : "hidden"}`}>
              {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                  return (
                    <span key={l}>
                      {index > 0 && " or "}
                      <Link href={`/${l}/home`}>{l}</Link>
                    </span>
                  );
                })}
            </ul>
            <IoMdInformationCircle
              onClick={togglePopupBox}
              className="text-base font-bolder hover:cursor-help hover:text-green-400"
            />
            <AiFillMail
              className="text-base font-bolder hover:cursor-pointer hover:text-blue-400"
              onClick={handleEmailClick}
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
          darkMode={darkMode}
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
              .<br /> Background image{" "}
              <a
                className="text-gray-500 hover:text-gray-800 dark:text-teal-100 dark:hover:text-teal-500"
                href="https://unsplash.com/de/fotos/blick-auf-eine-bergkette-bei-sonnenuntergang-MSoJwmGW5_oBackground"
                target="_blank"
              >
                [1]
              </a>
              <a
                className="text-gray-500 hover:text-gray-800 dark:text-teal-100 dark:hover:text-teal-500"
                href="https://unsplash.com/de/fotos/yNnprHFiMBk"
                target="_blank"
              >
                [2]
              </a>{" "}
              free for use under the{" "}
              <a
                className="text-gray-500 hover:text-gray-800 dark:text-teal-100 dark:hover:text-teal-500"
                href="https://unsplash.com/de/lizenz"
                target="_blank"
              >
                Unsplash License
              </a>
              .
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
                  ? "font-bold after:absolute after:inset-x-0 after:h-px after:bg-blue-500 after:bottom-[-10px] after:font-bold dark:text-teal-50"
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
              ${activeSection === "about" ? "font-bold" : ""} `}
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
                   ${activeSection === "about" ? "font-bold" : ""}  `}
              href="#resume"
              onClick={() => scrollToSection("resume")}
            >
              Resumé
            </a>
          </li>
          <li key="cv">
            <a
              className={`tracking-wider select-none relative border-2 py-2.5
                  px-5 font-medium uppercase transition-colors before:absolute
                  before:left-0 before:top-0 before:-z-10 before:h-full before:w-full
                  before:origin-top-left before:scale-x-0 before:transition-transform
                  before:duration-300 before:content-[''] before:hover:scale-x-100     
                  bg-transparent text-teal-200 border-teal-200 before:border-green-500 hover:text-gray-800 before:bg-teal-100        
                  ${
                    activeSection === "about"
                      ? "text-teal-500 border-teal-500 before:border-green-800 hover:text-gray-800 before:bg-teal-500"
                      : ""
                  } dark:bg-transparent dark:text-gray-500 dark:border-gray-600
                  dark:hover:text-black dark:before:bg-gray-600 mr-6
                  `}
              href="/cv.pdf"
              target="_blank"
            >
              CV
            </a>
          </li>
          <li className="flex flex-row" key="darkmodeToggle">
            <BsFillSunFill
              className={` mt-1 ${
                activeSection === "about" ? "text-red-400" : "text-yellow-400"
              }   mr-4  text-2xl  dark:text-gray-200`}
            />
            <div
              className={` rounded-full p-1 w-14 h-8 bg-gray-300 ${
                darkMode ? "bg-gray-800" : "bg-white"
              } hover:cursor-pointer`}
              onClick={darkmodeToggle}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition duration-300 ease-in-out ${
                  darkMode ? "translate-x-6" : ""
                } border-solid border-2 border-opacity-20 border-black bg-gray-500 bg-opacity-20
                dark:border-opacity-70 dark:bg-opacity-70`}
              ></div>
            </div>{" "}
            <BsFillMoonStarsFill
              className={`mt-1 ${
                activeSection === "about" ? "text-gray-400" : "text-gray-200"
              } 
                ml-4 mr-6 text-2xl dark:text-amber-200`}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
