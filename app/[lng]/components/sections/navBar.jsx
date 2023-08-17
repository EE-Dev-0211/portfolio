import React, { useEffect, useRef, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill, BsFlagFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { IoMdInformationCircle } from "react-icons/io";
import { motion } from "framer-motion";
import PopupBox from "app/[lng]/components/sharedComponents/popupBox.jsx";
import { useFollowPointer } from "app/[lng]/components/use-follow-pointer.ts";
import LanguageToggler from "/app/[lng]/components/sharedComponents/languageToggler";
import { useMediaQuery } from "usehooks-ts";
import CatGameClip from "/app/[lng]/components/sharedComponents/catGameClip";
import CatWool from "/app/[lng]/components/sharedComponents/catWool";

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
  isTooltipVisible,
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

  const isScreenBiggerThan1100 = useMediaQuery("(min-width: 1100px)");

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
        {/*Catgameclip*/}
        <CatGameClip
          hasCatVanished={hasCatVanished}
          isGameActive={isGameActive}
          gamemodeToggle={gamemodeToggle}
          toggleTooltip={toggleTooltip}
          catToggle={catToggle}
          t={t}
          isTooltipVisible={isTooltipVisible}
        />
        {/*Logo*/}
        <div className="flex flex-row">
          <span className="flex items-center gap-4 ml-4 select-none">
            <motion.div
              drag
              whileDrag={{ scale: 1.5 }}
              whileHover={{ scale: 0.8 }}
              className="w-8 h-8"
              style={{
                backgroundImage: darkMode
                  ? 'url("/logo-white.svg")'
                  : isScreenBiggerThan1100
                  ? isAboutInactive
                    ? 'url("/logo-white.svg")'
                    : 'url("/logo-black.svg")'
                  : 'url("/logo-black.svg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
              }}
            ></motion.div>

            {/*Mail und Info-icon*/}

            <IoMdInformationCircle
              onClick={togglePopupBox}
              className="hidden md:block text-base font-bolder hover:cursor-help hover:text-green-400"
            />
            <AiFillMail
              className="hidden md:block text-base font-bolder hover:cursor-pointer hover:text-blue-400"
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
        <CatWool myRef={myRef} isGameActive={isGameActive} x={x} y={y} />
        {/* Imprint Popup */}
        <PopupBox
          itemMotion={itemMotion}
          navMotion={navMotion}
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

        <ul className="hidden md:flex md:items-center">
          <li key="about">
            {/*underline effect for active nav point*/}
            <a
              className={`tracking-wider select-none mx-6 relative after:absolute after:inset-x-0 after:bottom-[-10px] 
                      after:h-px after:bg-blue-700 after:transform after:scale-x-0 
                      after:origin-center after:transition-transform after:duration-300 after:hover:scale-x-100   
                      ${
                        activeSection === "about"
                          ? "font-bold after:scale-x-100 hover:after:bg-white dark:hover:after:bg-teal-300"
                          : ""
                      }   `}
              href="#about"
              onClick={() => scrollToSection("about")}
            >
              {t("navbar.menu-item1")}
            </a>
          </li>
          <li key="skills">
            <a
              className={`tracking-wider select-none mx-6 relative after:absolute after:inset-x-0 after:bottom-[-10px] 
                      after:h-px after:bg-blue-700 after:transform after:scale-x-0 
                      after:origin-center after:transition-transform after:duration-300 after:hover:scale-x-100   
                      ${
                        activeSection === "skills"
                          ? "after:scale-x-100 hover:after:bg-teal-300"
                          : ""
                      }
                      ${activeSection === "about" ? "font-bold" : ""}   `}
              href="#skills"
              onClick={() => scrollToSection("skills")}
            >
              {t("navbar.menu-item2")}
            </a>
          </li>
          <li key="resume" className="mr-4">
            <a
              className={`tracking-wider select-none mx-6 relative after:absolute after:inset-x-0 after:bottom-[-10px] 
                      after:h-px after:bg-blue-700 after:transform after:scale-x-0 
                      after:origin-center after:transition-transform after:duration-300 after:hover:scale-x-100   
                      ${
                        activeSection === "resume"
                          ? "after:scale-x-100 hover:after:bg-teal-300"
                          : ""
                      }
                      ${activeSection === "about" ? "font-bold" : ""}   `}
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

        <div className="md:hidden  select-none flex flex-row gap-6 justify-center items-center">
          {/*mobile CV Button*/}
          <a
            href="/cv.pdf"
            target="_blank"
            className="flex items-center justify-center w-6 h-6
                  border-gray-400 border-2 text-xxs text-gray-800 font-bold rounded-full
                  bg-gradient-to-b from-yellow-200 to-red-300 text-black dark:text-white
                  dark:bg-gradient-to-b dark:from-teal-200 dark:to-gray-700
                  "
          >
            CV
          </a>

          {/*light dark mode button for mobile */}
          {darkMode ? (
            <button
              className="flex items-center justify-center w-6 h-6 bg-black
                  border-gray-400 border-2 text-gray-800 font-bold rounded-full
                  bg-gradient-to-b from-yellow-300 to-red-700
                  "
              onClick={darkmodeToggle}
            >
              <BsFillSunFill className="text-l text-yellow-50 p-0.5" />{" "}
            </button>
          ) : (
            <button
              className="flex items-center justify-center w-6 h-6 bg-gradient-to-b from-blue-700 to-blue-950
                  border-gray-500 border-2 font-bold rounded-full"
              onClick={darkmodeToggle}
            >
              <BsFillMoonStarsFill className="text-l text-amber-200 p-0.5" />{" "}
            </button>
          )}

          {/*  light dark switch button ends*/}
          {/*burger menu button animated */}
          <div
            onClick={() => setIsMobileMenuToggled((prevToggle) => !prevToggle)}
            className="space-y-1.5 cursor-pointer z-50 mr-6 select-none"
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
          <motion.div
            className="md:hidden select-none fixed flex bg-white dark:bg-black bottom-0 left-0 w-full h-screen
          items-center justify-center   bg-opacity-90 backdrop-filter backdrop-blur-sm
          "
          >
            <motion.div
              variants={navMotion}
              animate="visible"
              initial="hidden"
              className="flex flex-col gap-12 text-l "
            >
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="text-black dark:text-white text-2xl"
                variants={itemMotion}
                onClick={() => scrollToSectionBurgerMenu("about")}
              >
                {t("navbar.menu-item1")}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.2 }}
                className="text-black dark:text-white  text-2xl"
                variants={itemMotion}
                onClick={() => scrollToSectionBurgerMenu("skills")}
              >
                {t("navbar.menu-item2")}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.2 }}
                className="text-black dark:text-white  text-2xl"
                variants={itemMotion}
                onClick={() => scrollToSectionBurgerMenu("resume")}
              >
                {t("navbar.menu-item3")}
              </motion.button>

              <motion.div
                variants={itemMotion}
                className="flex justify-center items-center pt-10 gap-16"
              >
                <IoMdInformationCircle
                  onClick={togglePopupBox}
                  className="text-black dark:text-white text-3xl  font-bolder hover:cursor-help hover:text-green-400"
                />
                <AiFillMail
                  className="text-black dark:text-white text-3xl  font-bolder hover:cursor-pointer hover:text-blue-400"
                  onClick={handleEmailClick}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
