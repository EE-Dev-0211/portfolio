"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import About from "./sections/about";
import Skills from "./sections/skills";
import Resume from "./sections/resume";
import Footer from "./sections/footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Home() {
  const [contentLoading, setContentLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function darkmodeToggle() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    //get DarkModeState from LS
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === "true");
    }

    // timeout for loading screen (formerly bc of FOUC)
    const timeout = setTimeout(() => {
      setContentLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Save darkMode state to localStorage when it's changed
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    if (!contentLoading) {
      const handleScroll = () => {
        document.body.classList.toggle(
          "scroll-lock",
          activeSection !== null && activeSection !== "about"
        );
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [activeSection]);

  useEffect(() => {
    //monitor the viewed sections after the loading screen has disappeared
    if (!contentLoading) {
      const observer = new IntersectionObserver(getSectionIDs, {
        rootMargin: "-50% 0% -50% 0%",
      });

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }
  }, [contentLoading]);

  const getSectionIDs = (entries) => {
    // set activeSection to the targets id, when there is no loading screen
    entries.forEach((entry) => {
      if (entry.isIntersecting && !contentLoading) {
        setActiveSection(entry.target.id);
      }
    });
  };

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToSectionBurgerMenu(sectionId) {
    toggleMenu();
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
  }

  // TODO: Dynamisches Anpassen der Inhalte an Bildschirmgrößen
  if (contentLoading) {
    return (
      <div className="flex justify-center flex-col items-center h-screen bg-black">
        <div className="pb-36">
          {["WELCOME", "TO", "MY", "PORTFOLIO"].map((word, index) => (
            <span
              key={index}
              className={`ml-4 animate-fadeInLeftLoading${
                index + 1
              } text-5xl font-semibold py-2 text-teal-500 select-none`}
            >
              {word}
            </span>
          ))}
        </div>
        <div>
          <div role="status pt-60">
            <svg
              aria-hidden="true"
              className="inline w-10 h-10 mr-2 text-gray-600 fill-teal-500 animate-spin dark:text-gray-200 dark:fill-teal-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark " : ""}>
      <nav className="hidden md:py-6 md:fixed md:flex md:w-screen md:justify-between md:top-0 md:z-50 md:mx-auto md:bg-gray-800 md:dark:bg-black">
        <span className="mx-10 select-none">Portfolio.</span>

        {/*big menu*/}
        <ul className="flex items-center">
          <li key="about">
            <a
              className={`${
                activeSection === "about"
                  ? "after:absolute after:inset-x-0 after:h-px after:bg-blue-500 after:bottom-[-10px] after:font-bold dark:text-teal-50"
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
              } tracking-wider select-none mx-6 relative hover:after:absolute hover:after:inset-x-0 hover:after:h-px hover:after:bg-blue-700 hover:after:bottom-[-10px] hover:after:font-bold`}
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
                  hover:after:bg-blue-700 hover:after:bottom-[-10px] hover:after:font-bold`}
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
                className="mr-14 ml-10 cursor-pointer text-2xl text-amber-200 hover:text-gray-400"
              />
            ) : (
              <BsFillSunFill
                onClick={darkmodeToggle}
                className="mr-14 ml-10 cursor-pointer text-2xl text-yellow-400 hover:text-red-200"
              />
            )}
          </li>
        </ul>
      </nav>
      {/*burger menu*/}
      <div className="md:hidden">
        <button
          className="fixed top-0 right-0 m-4 z-50 p-2 rounded-md bg-gray-800 text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>

        {isMenuOpen && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black
          bg-opacity-50 flex justify-center items-center z-50"
          >
            <div
              className="border-2 border-gray-800 dark:border-gray-400 text-center bg-white text-black font-bold
             dark:text-white dark:bg-gray-800 w-3/5 p-4 rounded-lg shadow"
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
                    className="flex items-center justify-center
                  w-10 h-10 bg-black border-gray-400 border-2 text-gray-800 font-bold rounded"
                    onClick={darkmodeToggle}
                  >
                    <BsFillMoonStarsFill className="text-2xl text-amber-200" />{" "}
                  </button>
                ) : (
                  <button
                    className="flex items-center justify-center
                  w-10 h-10 dark:bg-black border-gray-400 border-2 text-gray-800 font-bold rounded"
                    onClick={darkmodeToggle}
                  >
                    <BsFillSunFill className="text-2xl text-yellow-600" />{" "}
                  </button>
                )}

                <button
                  className="flex items-center justify-center
                  w-10 h-10 dark:bg-black border-gray-400 border-2 text-gray-800 font-bold rounded"
                  onClick={toggleMenu}
                >
                  <AiFillCloseCircle className="text-red-800 dark:text-red-500 text-2xl" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <main className="bg-white scroll-smooth overscroll-none dark:bg-gray-900">
        <div className="md:snap-y md:snap-mandatory h-screen overflow-scroll scrollbar-hide">
          <About />
          <Skills />
          <Resume />
          <Footer darkMode={darkMode} />
        </div>
      </main>
    </div>
  );
}
