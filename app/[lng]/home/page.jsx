"use client";
import React, { useEffect, useState } from "react";
import About from "/app/[lng]/components/sections/about";
import Skills from "/app/[lng]/components/sections/skills";
import Resume from "/app/[lng]/components/sections/resume";
import Footer from "/app/[lng]/components/sections/footer";
import NavBar from "/app/[lng]/components/sections/navBar";
import LoadingScreen from "/app/[lng]/components/sharedComponents/loadingScreen";
import { useTranslation } from "../../i18n/client";

export default function Home({ params: { lng } }) {
  const [darkMode, setDarkMode] = useState(true);
  const [contentLoading, setContentLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isPopupBoxOpen, setIsPopupBoxOpen] = useState(false);
  const [isCustomCursor, setIsCustomCursor] = useState(false);
  const [isDropDownLangOpen, setIsDropDownLangOpen] = useState(false);

  const { t } = useTranslation(lng, "home");

  const LangDropdownToggle = () => {
    setIsDropDownLangOpen(!isDropDownLangOpen);
  };

  // toggles for Tooltip, Impressum & Darkmode
  const darkmodeToggle = () => setDarkMode(!darkMode);
  const togglePopupBox = () => setIsPopupBoxOpen(!isPopupBoxOpen);
  const toggleTooltip = () => setIsTooltipVisible(!isTooltipVisible);

  useEffect(() => {
    // Get darkMode state from localStorage
    const storedDarkMode = localStorage.getItem("darkMode");
    console.log("darkMode is: " + storedDarkMode);
    console.log("contentLoading is: " + contentLoading);

    // Set darkMode
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === "true");
    }
  }, []);

  useEffect(() => {
    // Timeout for loading screen (formerly for FOUC, now for style)
    const timeout = setTimeout(() => {
      setContentLoading(false);
    }, 1100);

    return () => clearTimeout(timeout);
  }, []);

  // Save darkMode state to localStorage when it's changed
  useEffect(() => {
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
  //observe sections
  useEffect(() => {
    if (!contentLoading) {
      //monitor the viewed sections after the loading screen has disappeared
      const observer = new IntersectionObserver(getSectionIDs, {
        rootMargin: "-65% 0% -35% 0%",
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

  const handleEmailClick = () => {
    window.location.href = `mailto:eiselt.eric@proton.me`;
  };

  // Loadingscreen for 1 second with animated text and spinner
  if (contentLoading) {
    return <LoadingScreen t={t} darkMode={darkMode} />;
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
        isTooltipVisible={isTooltipVisible}
        setIsTooltipVisible={setIsTooltipVisible}
        toggleTooltip={toggleTooltip}
        scrollToSection={scrollToSection}
        togglePopupBox={togglePopupBox}
        isPopupBoxOpen={isPopupBoxOpen}
        isCustomCursor={isCustomCursor}
        setIsCustomCursor={setIsCustomCursor}
        handleEmailClick={handleEmailClick}
        lng={lng}
        t={t}
        isDropDownLangOpen={isDropDownLangOpen}
        LangDropdownToggle={LangDropdownToggle}
      />
      {/* Content */}
      <main className="scroll-smooth overscroll-none">
        <div
          className="h-screen overflow-scroll scrollbar-hide"
          style={{
            backgroundImage: darkMode
              ? 'url("/space-unsplash.jpg")'
              : 'url("/mountains-unsplash.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <About lng={lng} t={t} darkMode={darkMode} />
          <Skills darkMode={darkMode} lng={lng} t={t} />
          <Resume lng={lng} t={t} darkMode={darkMode} />
          <Footer darkMode={darkMode} lng={lng} t={t} />
        </div>
      </main>
    </div>
  );
}
