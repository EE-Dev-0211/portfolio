import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { AiFillMail } from "react-icons/ai";
import PopupBox from "app/[lng]/components/sharedComponents/popupBox.jsx";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "/app/i18n/settings";
import Link from "next/link";

const NavBarMobile = ({
  darkMode,
  darkmodeToggle,
  toggleMenu,
  isMenuOpen,
  scrollToSectionBurgerMenu,
  handleEmailClick,
  togglePopupBox,
  isPopupBoxOpen,
  lng,
  isDropDownLangOpen,
  LangDropdownToggle,
}) => {
  function toggleImprintOnMobile() {
    toggleMenu();
    setTimeout(() => {
      togglePopupBox();
    }, 300);
  }

  return (
    <div className="md:hidden">
      <button
        className="fixed top-0 right-0 m-4 z-50 p-2 rounded-md bg-gray-800 text-white"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu />
      </button>

      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={toggleMenu} //  close menu if click outside of it
        >
          <div
            className="border-4 border-double
            border-gray-800  text-center bg-white
            text-black font-bold
            bg-gradient-to-r from-red-100 to-yellow-100
            dark:text-white dark:border-gray-400 dark:bg-gradient-to-r dark:from-gray-800 dark:to-teal-950
            w-auto p-4 rounded-lg shadow"
            // Prevent the menu from closing, stop the click event from propagating to the parent element
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-4 ml-2 select-none p-2 border-b border-gray-300 pb-4">
              <Trans i18nKey="languageSwitcher">
                <button onClick={LangDropdownToggle}>
                  {lng === "de" ? (
                    <div
                      className="rounded-full border-solid border-2 border-white w-6 h-6"
                      style={{
                        backgroundImage: 'url("/germany.svg")',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                      }}
                    ></div>
                  ) : lng === "ch" ? (
                    <div
                      className="rounded-full border-solid border-2 border-white w-6 h-6"
                      style={{
                        backgroundImage: 'url("/switzerland.svg")',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                      }}
                    ></div>
                  ) : (
                    <div
                      className="rounded-full border-solid border-2 border-white w-6 h-6"
                      style={{
                        backgroundImage: 'url("/usa.svg")',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                      }}
                    ></div>
                  )}
                </button>
              </Trans>
              <ul
                className={`${
                  isDropDownLangOpen ? "block" : "hidden"
                } flex flex-row gap-2`}
              >
                {languages
                  .filter((l) => lng !== l)
                  .map((l, index) => {
                    return (
                      <span key={l}>
                        <Link href={`/${l}/home`}>
                          {l === "de" ? (
                            <div
                              className="rounded-full border-solid border-2 border-white w-6 h-6"
                              style={{
                                backgroundImage: 'url("/germany.svg")',
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top",
                              }}
                            ></div>
                          ) : l === "ch" ? (
                            <div
                              className="rounded-full border-solid border-2 border-white w-6 h-6"
                              style={{
                                backgroundImage: 'url("/switzerland.svg")',
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top",
                              }}
                            ></div>
                          ) : (
                            <div
                              className="rounded-full border-solid border-2 border-white w-6 h-6"
                              style={{
                                backgroundImage: 'url("/usa.svg")',
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top",
                              }}
                            ></div>
                          )}
                        </Link>
                      </span>
                    );
                  })}
              </ul>{" "}
            </div>
            <div className="p-2 border-b border-gray-300 mt-2">
              <button onClick={() => scrollToSectionBurgerMenu("about")}>
                About
              </button>
            </div>
            <div className="p-2 border-b border-gray-300 mt-2">
              <button onClick={() => scrollToSectionBurgerMenu("skills")}>
                Skills
              </button>
            </div>
            <div className="p-2 border-b border-gray-300 mt-2">
              <button onClick={() => scrollToSectionBurgerMenu("resume")}>
                Resumé
              </button>
            </div>
            <div className="flex items-center justify-center p-2 mt-2 gap-6 ">
              <IoMdInformationCircle
                onClick={toggleImprintOnMobile}
                className="text-xl font-bolder hover:cursor-help "
              />
              <AiFillMail
                className="text-xl font-bolder hover:cursor-pointer "
                onClick={handleEmailClick}
              />
              <a
                className="text-base font-bolder hover:cursor-pointer "
                href="/cv.pdf"
                target="_blank"
              >
                CV
              </a>
            </div>
            <div className="flex items-center justify-center p-2 mt-2 gap-6">
              {darkMode ? (
                <button
                  className="flex items-center justify-center w-10 h-10 bg-black
                  border-gray-400 border-2 text-gray-800 font-bold rounded-full
                  bg-gradient-to-b from-yellow-300 to-red-700
                  "
                  onClick={darkmodeToggle}
                >
                  <BsFillSunFill className="text-2xl text-yellow-50 p-0.5" />{" "}
                </button>
              ) : (
                <button
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-blue-700 to-blue-950
                  border-gray-500 border-2 font-bold rounded-full"
                  onClick={darkmodeToggle}
                >
                  <BsFillMoonStarsFill className="text-2xl text-amber-200 p-0.5" />{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

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
            <br /> CV automatically generated by LinkedIn. <br /> All icons are
            part of the react-icons-Icon-Library. <br /> Custom cursor icons
            from cursor.cc (
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
    </div>
  );
};

export default NavBarMobile;
