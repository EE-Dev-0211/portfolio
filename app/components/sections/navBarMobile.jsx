import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import React from "react";

const NavBarMobile = ({
  darkMode,
  darkmodeToggle,
  toggleMenu,
  isMenuOpen,
  scrollToSectionBurgerMenu,
}) => {
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
            className="border-4 border-double border-gray-800 dark:border-gray-400 text-center bg-white text-black font-bold dark:text-white dark:bg-gray-800 w-auto p-4 rounded-lg shadow"
            // Prevent the menu from closing, stop the click event from propagating to the parent element
            onClick={(e) => e.stopPropagation()}
          >
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
            <div className="flex items-center justify-center p-2 mt-2 gap-10">
              {darkMode ? (
                <button
                  className="flex items-center justify-center w-10 h-10 bg-black border-gray-400 border-2 text-gray-800 font-bold rounded"
                  onClick={darkmodeToggle}
                >
                  <BsFillMoonStarsFill className="text-2xl text-amber-200" />{" "}
                </button>
              ) : (
                <button
                  className="flex items-center justify-center w-10 h-10 dark:bg-black border-gray-400 border-2 text-gray-800 font-bold rounded"
                  onClick={darkmodeToggle}
                >
                  <BsFillSunFill className="text-2xl text-yellow-600" />{" "}
                </button>
              )}

              <a
                className=" flex items-center justify-center w-10 h-10
                  dark:bg-black border-gray-400 border-2 text-gray-800 dark:text-teal-500 font-bold rounded"
                href="/cv.pdf"
                target="_blank"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBarMobile;
