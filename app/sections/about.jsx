import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import React, { useState } from "react";

const About = ({ darkMode }) => {
  // state for the Avatarcoin
  const [isFlipped, setIsFlipped] = useState(true);

  // Avatar toggle
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section
      id="about"
      className="pt-20 pb-10 min-h-full bg-transparent dark:bg-darkGradient1 "
      style={{
        backgroundImage: darkMode ? 'url("/dotgrid.svg")' : "",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <div className=" text-center p-10">
        <span
          className="animate-fadeIn-TopText select-none
        text-black font-extrabold dark:text-white text-xl py-2 md:text-2xl"
        >
          Hi, I am
        </span>

        <h2
          className="animate-fadeInLeft text-5xl py-2
        text-teal-500 font-extrabold select-none md:text-6xl"
        >
          Eric Eiselt
        </h2>
        <h3
          className="animate-fadeInLeft select-none font-extrabold
        text-black dark:text-white text-2xl py-2 md:text-3xl"
        >
          Aspiring Frontend Developer
        </h3>

        <p
          className="break-words md:break-normal animate-fadeIn-Avatar select-none
        text-md py-5 leading-8 text-white md:text-xl max-w-lg mx-auto
        dark:text-amber-50 "
        >
          and I am currently in my final year of training to become an
          application developer. During my apprenticeship, I had many different
          insights into different areas, but I was most taken with frontend
          development.
        </p>
      </div>

      <div className="animate-fadeIn-Avatar select-none text-5xl flex justify-center gap-16 text-gray-600">
        <a
          className="z-10"
          href="https://www.linkedin.com/in/eric-e-720431201/"
          target="_blank"
        >
          <AiFillLinkedin className="text-white dark:text-amber-50" />
        </a>
      </div>

      {/*Avatar Coin*/}
      <div className="select-none relative mx-auto w-60 h-60 mt-20">
        <div
          className={`
          shadow-glow bg-gradient-to-b from-teal-600 to bg-teal-400
          w-60 h-60 rounded-full flex items-center justify-center 
          overflow-hidden cursor-pointer flip ${isFlipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div>
            <Image
              className="animate-fadeIn-Avatar"
              src={isFlipped ? "/8bitpix.png" : "/portrait.png"}
              alt="Front of coin"
              width={500}
              height={500}
              priority={true}
            />
            {/*priority against above the fold warning*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
