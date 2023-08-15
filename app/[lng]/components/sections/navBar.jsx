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

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

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
  const [isAboutInactive, isAboutActive] = [
    activeSection !== "about",
    activeSection === "about",
  ];

  // from nav
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  // scroll to sections on click in mobile version, after a delay of closing the mobile menu
  function scrollToSectionBurgerMenu(sectionId) {
    setIsMobileMenuToggled(false);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
  }
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

  function toggleImprintOnMobile() {
    toggleMenu();
    setTimeout(() => {
      togglePopupBox();
    }, 300);
  }

  return (
    <>
      <nav
        className={` py-6 fixed flex w-screen justify-between
      top-0 z-50 mx-auto ${
        isAboutInactive
          ? "md:bg-gray-800 md:dark:bg-black md:text-white"
          : "md:bg-transparent md:text-black md:dark:text-white"
      } `}
      >
        <div
          className={`hidden md:block md:absolute md:-left-16 md:-bottom-24 md:hover:-left-4 md:hover:-bottom-24 md:w-20 md:h-20 md:z-0 
          ${hasCatVanished === true ? "" : "md:cursor-paw2"}
          md:rounded-r-full md:bg-gray-800 md:border-2 md:border-teal-100 `}
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
                backgroundImage: darkMode
                  ? 'url("/logo-white.svg")'
                  : isAboutInactive
                  ? 'url("/logo-white.svg")'
                  : 'url("/logo-black.svg")',
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
          style={{
            backgroundImage: "url('/knitted-wool.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
          ref={myRef}
          className={`${isGameActive ? "" : "hidden"} woolBall `}
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

        {/* check if mobile or not */}

        <ul className="hidden md:flex md:items-center">
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
          {/*light/dark mode switch */}
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
        {/*    big Menu ends*/}
        {/*mobile menu starts */}
        {/*light dark mode button for mobile */}
        <div className="md:hidden flex flex-row gap-6 justify-center items-center">
          {darkMode ? (
            <button
              className="flex items-center justify-center w-6 h-6 bg-black
                  border-gray-400 border-2 text-gray-800 font-bold rounded-full
                  bg-gradient-to-b from-yellow-300 to-red-700
                  "
              onClick={darkmodeToggle}
            >
              <BsFillSunFill className="text-2xl text-yellow-50 p-0.5" />{" "}
            </button>
          ) : (
            <button
              className="flex items-center justify-center w-6 h-6 bg-gradient-to-b from-blue-700 to-blue-950
                  border-gray-500 border-2 font-bold rounded-full"
              onClick={darkmodeToggle}
            >
              <BsFillMoonStarsFill className="text-2xl text-amber-200 p-0.5" />{" "}
            </button>
          )}

          {/*  light dark switch button ends*/}
          {/*burger menu button animated */}
          <div
            onClick={() => setIsMobileMenuToggled((prevToggle) => !prevToggle)}
            className="space-y-1.5 cursor-pointer z-50 mr-6"
          >
            <motion.span
              animate={{
                rotateZ: isMobileMenuToggled ? 45 : 0,
                y: isMobileMenuToggled ? 8 : 0,
              }}
              className="block h-0.5 w-8 bg-black dark:bg-white"
            ></motion.span>
            <motion.span
              animate={{ width: isMobileMenuToggled ? 0 : 24 }}
              className="block h-0.5 w-6 bg-black dark:bg-white"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: isMobileMenuToggled ? -45 : 0,
                y: isMobileMenuToggled ? -8 : 0,
                width: isMobileMenuToggled ? 32 : 16,
              }}
              className="block h-0.5 w-4 bg-black dark:bg-white"
            ></motion.span>
          </div>
        </div>
        {/*mobile popup-Menu*/}
        {isMobileMenuToggled && (
          <motion.div className="md:hidden fixed flex bg-white dark:bg-black bottom-0 left-0 w-full h-screen items-center justify-center">
            <motion.div
              variants={navMotion}
              animate="visible"
              initial="hidden"
              className="flex flex-col gap-12 text-l "
            >
              <motion.button
                className="text-black dark:text-white text-2xl"
                variants={itemMotion}
                onClick={() => scrollToSectionBurgerMenu("about")}
              >
                About
              </motion.button>

              <motion.button
                className="text-black dark:text-white  text-2xl"
                variants={itemMotion}
                onClick={() => scrollToSectionBurgerMenu("skills")}
              >
                Skills
              </motion.button>

              <motion.button
                className="text-black dark:text-white  text-2xl"
                variants={itemMotion}
                onClick={() => scrollToSectionBurgerMenu("resume")}
              >
                Resumé
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
