"use client";
import React, { useEffect, useState } from "react";
import About from "/app/[lng]/components/sections/about";
import Skills from "/app/[lng]/components/sections/skills";
import Resume from "/app/[lng]/components/sections/resume";
import Footer from "/app/[lng]/components/sections/footer";
import NavBar from "/app/[lng]/components/sections/navBar";
import NavBarMobile from "/app/[lng]/components/sections/navBarMobile";
import { useTranslation } from "../../i18n/client";
import Link from "next/link";

export default function Home({ params: { lng } }) {
  const [contentLoading, setContentLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isPopupBoxOpen, setIsPopupBoxOpen] = useState(false);
  const [isCustomCursor, setIsCustomCursor] = useState(false);

  const { t } = useTranslation(lng, "home");
  const [counter, setCounter] = useState(0);

  // toggles for Mobile Menu, Tooltip, Impressum & Darkmode
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const darkmodeToggle = () => setDarkMode(!darkMode);
  const togglePopupBox = () => setIsPopupBoxOpen(!isPopupBoxOpen);
  const toggleTooltip = () => setIsTooltipVisible(!isTooltipVisible);

  useEffect(() => {
    // Get darkMode state from localStorage
    const storedDarkMode = localStorage.getItem("darkMode");
    console.log("darkMode is: " + storedDarkMode);

    // Set darkMode
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === "true");
    }

    // Timeout for loading screen (formerly for FOUC, now for style)
    const timeout = setTimeout(() => {
      setContentLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // DarkMode
  useEffect(() => {
    // Save darkMode state to localStorage when it's changed
    localStorage.setItem("darkMode", darkMode.toString());
    console.log("darkMode has been set to: " + darkMode);
  }, [darkMode]);

  // scroll function when loading screen finished
  useEffect(() => {
    if (contentLoading) {
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
  }, [contentLoading]);

  useEffect(() => {
    if (!contentLoading) {
      //monitor the viewed sections after the loading screen has disappeared
      const observer = new IntersectionObserver(getSectionIDs, {
        rootMargin: "-50% 0% -50% 0%",
      });

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        observer.observe(section);
      });

      //reset active section
      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }
  }, [contentLoading]);

  const getSectionIDs = (entries) => {
    // set activeSection to the targets id, when there is no loading screen to apply effects
    entries.forEach((entry) => {
      if (entry.isIntersecting && !contentLoading) {
        setActiveSection(entry.target.id);
      }
    });
  };

  // scroll to sections onclick
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  // scroll to sections on click in mobile version, after a delay of closing the mobile menu
  function scrollToSectionBurgerMenu(sectionId) {
    toggleMenu();
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:eiselt.eric@proton.me`;
  };

  // Loadingscreen for 1 second with animated text and spinner
  if (contentLoading) {
    return (
      <div className="flex justify-center flex-col items-center h-screen bg-black">
        <div className="pb-36">
          {["WELCOME", "TO", "MY", "PORTFOLIO"].map((word, index) => (
            <span
              key={index}
              className={`ml-4 animate-fadeInLeftLoading${
                index + 1
              } md:text-5xl text-xl font-semibold py-2 text-teal-500 select-none`}
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
    <div
      className={` ${darkMode ? "dark" : ""} ${
        isCustomCursor ? "cursor-paw" : ""
      }`}
    >
      <NavBar
        darkMode={darkMode}
        darkmodeToggle={darkmodeToggle}
        activeSection={activeSection}
        toggleTooltip={toggleTooltip}
        isTooltipVisible={isTooltipVisible}
        scrollToSection={scrollToSection}
        togglePopupBox={togglePopupBox}
        isPopupBoxOpen={isPopupBoxOpen}
        isCustomCursor={isCustomCursor}
        setIsCustomCursor={setIsCustomCursor}
        handleEmailClick={handleEmailClick}
        lng={lng}
        t={t}
      />

      {/*burger menu instead of navbar when width of screen is below 1130px*/}
      <NavBarMobile
        darkMode={darkMode}
        darkmodeToggle={darkmodeToggle}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        scrollToSectionBurgerMenu={scrollToSectionBurgerMenu}
        handleEmailClick={handleEmailClick}
        togglePopupBox={togglePopupBox}
        isPopupBoxOpen={isPopupBoxOpen}
        lng={lng}
        t={t}
      />
      {/* Content */}
      <main className="scroll-smooth overscroll-none">
        <div
          className="hw-md:snap-y hw-md:snap-mandatory h-screen overflow-scroll scrollbar-hide"
          style={{
            backgroundImage: darkMode
              ? 'url("/space-unsplash.jpg")'
              : 'url("/mountains-unsplash.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <About lng={lng} t={t} />

          <Skills darkMode={darkMode} lng={lng} t={t} />

          <Resume lng={lng} />
          <Footer darkMode={darkMode} lng={lng} t={t} />
        </div>
      </main>
    </div>
  );
}
