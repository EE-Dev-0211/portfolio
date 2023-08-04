import React, { useEffect, useRef, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill, BsFlagFill } from "react-icons/bs";
import { AiFillMail, AiFillPlayCircle } from "react-icons/ai";
import { CgPlayStopO } from "react-icons/cg";
import { FaCat } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { motion } from "framer-motion";
import PopupBox from "app/[lng]/components/sharedComponents/popupBox.jsx";
import { useFollowPointer } from "app/[lng]/components/use-follow-pointer.ts";
import LanguageToggler from "/app/[lng]/components/sharedComponents/languageToggler";


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
  isDropDownLangOpen,
  LangDropdownToggle,
  setIsTooltipVisible,
}) => {
  const [isGameActive, setIsGameActive] = useState(false);
  const myRef = useRef(null);
  const { x, y } = useFollowPointer(myRef, isGameActive);
  const [hasCatVanished, setHasCatVanished] = useState(false);
  const [isCustomCursorActive, setIsCustomCursorActive] = useState(false);

  const isAboutActive = activeSection === 'about';
  const isAboutInactive = !isAboutActive;

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
    setIsTooltipVisible(false);
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
            isAboutInactive
          ? "md:bg-gray-800 md:dark:bg-black md:text-white"
          : "md:bg-transparent md:text-black md:dark:text-white"
      } `}
      >
        <div
          className={`absolute -left-16 -bottom-24 hover:-left-4 hover:-bottom-24 w-20 h-20 z-0 
          ${hasCatVanished === true ? "" : "cursor-paw2"}
          rounded-r-full bg-gray-800 border-2 border-teal-100 `}
        >
          {hasCatVanished ? (
            isGameActive ? (
              <CgPlayStopO
                onClick={() => {
                  gamemodeToggle();
                  toggleTooltip();
                }}
                className="mt-7.5 ml-7.5 cursor-pointer text-2xl text-red-400 hover:text-red-700"
              />
            ) : (
              <AiFillPlayCircle
                onClick={() => {
                  gamemodeToggle();
                  toggleTooltip();
                }}
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
              {t("navbar.cat-tooltip1")} <br />
              <br />
              {t("navbar.cat-tooltip2")}
            </span>
          </div>
        </div>

        <div className="flex flex-row">
          <span className="flex items-center gap-4 ml-4 select-none">
             <div
                 className="w-8 h-8"
                 style={{
                   backgroundImage: darkMode ?  'url("/logo-white.svg")' : isAboutInactive ?  'url("/logo-white.svg")' : 'url("/logo-black.svg")',
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
                   backgroundPosition: "top",
                 }}
             ></div>

            <IoMdInformationCircle
              onClick={togglePopupBox}
              className="text-base font-bolder hover:cursor-help hover:text-green-400"
            />
            <AiFillMail
              className="text-base font-bolder hover:cursor-pointer hover:text-blue-400"
              onClick={handleEmailClick}
            />
             <LanguageToggler
                 lng={lng}
                 isDropDownLangOpen={isDropDownLangOpen}
                 LangDropdownToggle={LangDropdownToggle}
             />

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
              {t("imprint.part1")} <br /> {t("imprint.part2")}
              <a
                className="text-gray-500 hover:text-gray-800
                  dark:text-teal-100 dark:hover:text-teal-500"
                href="https://8bitpix.com/"
                target="_blank"
              >
                8bitpix.com
              </a>
              .<br /> {t("imprint.part3")}
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
              {t("imprint.part4")}
              <a
                className="text-gray-500 hover:text-gray-800 dark:text-teal-100 dark:hover:text-teal-500"
                href="https://unsplash.com/de/lizenz"
                target="_blank"
              >
                Unsplash License
              </a>
              .
              <br /> {t("imprint.part5")} <br /> {t("imprint.part6")}
              <br /> {t("imprint.part7")} (
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
              ), <br /> {t("imprint.part8")}
            </>
          }
        />
        {/*big menu*/}
        <ul className="flex items-center">
          <li key="about">
            <a
              className={` ${
                activeSection === "about"
                  ? "font-bold text-black dark:text-teal-50 after:absolute after:inset-x-0 after:h-px " +
                    "after:bg-blue-500 after:bottom-[-10px] after:font-bold "
                  : "text-white"
              } tracking-wider select-none mx-6 relative
              hover:after:absolute hover:after:inset-x-0 hover:after:h-px 
              hover:after:bg-blue-700 hover:after:bottom-[-10px] hover:after:font-bold`}
              href="#about"
              onClick={() => scrollToSection("about")}
            >
              {t("navbar.menu-item1")}
            </a>
          </li>
          <li key="skills">
            <a
              className={` ${
                activeSection === "skills"
                  ? "font-bold after:absolute after:inset-x-0 after:h-px after:bg-blue-500 after:bottom-[-10px] " +
                    "after:font-bold dark:text-white"
                  : ""
              }  tracking-wider select-none mx-6 relative 
              hover:after:absolute hover:after:inset-x-0 hover:after:h-px hover:after:bg-blue-700 
              hover:after:bottom-[-10px] hover:after:font-bold 
              ${
                activeSection === "about"
                  ? "font-bold text-black dark:text-gray-200"
                  : ""
              } `}
              href="#skills"
              onClick={() => scrollToSection("skills")}
            >
              {t("navbar.menu-item2")}
            </a>
          </li>
          <li key="resume" className="mr-4">
            <a
              className={` ${
                activeSection === "resume"
                  ? "font-bold after:absolute after:inset-x-0 after:h-px after:bg-blue-500 after:bottom-[-10px] after:font-bold dark:text-teal-50"
                  : ""
              } tracking-wider mx-6 select-none relative hover:after:absolute hover:after:inset-x-0 hover:after:h-px 
                  hover:after:bg-blue-700 hover:after:bottom-[-10px] hover:after:font-bold
               ${
                 activeSection === "about"
                   ? "font-bold text-black dark:text-gray-200"
                   : "text-white"
               } `}
              href="#resume"
              onClick={() => scrollToSection("resume")}
            >
              {t("navbar.menu-item3")}
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
