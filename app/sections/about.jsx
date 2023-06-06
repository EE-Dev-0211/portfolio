import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import React, { useState } from "react";
import { SiJabber, SiJquery } from "react-icons/si";

export default function About() {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const isAboveFold = true;

  return (
    <section id="about" className="pt-20 snap-start min-h-full">
      <div className="text-center p-10">
        <span className="animate-fadeIn-TopText select-none text-black dark:text-white text-xl py-2 md:text-2xl">
          Hi, I am
        </span>
        <h2 className="animate-fadeInLeft text-5xl py-2 text-teal-500 font-medium select-none md:text-6xl">
          Eric Eiselt
        </h2>
        <h3 className="animate-fadeInLeft select-none text-black dark:text-white text-2xl py-2 md:text-3xl">
          Aspiring Frontend Developer
        </h3>
        <p className="animate-fadeIn-Avatar select-none text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-amber-50">
          and I am currently in my final year of training to become an
          application developer. During my apprenticeship, I had many different
          insights into different areas, but I was most taken with frontend
          development.
        </p>
      </div>
      <div className="animate-fadeIn-Avatar select-none text-5xl flex justify-center gap-16 text-gray-600">
        <a href="https://www.linkedin.com/in/eric-e-720431201/" target="_blank">
          <AiFillLinkedin className="dark:text-amber-50 " />
        </a>
        {/*-----*/}

        {/*-----*/}
      </div>

      <div className="select-none relative mx-auto w-60 h-60 mt-20">
        <div
          className={`shadow-glow bg-gradient-to-b from-teal-500 w-60 h-60 rounded-full flex items-center justify-center overflow-hidden cursor-pointer flip ${
            isFlipped ? "flipped" : ""
          }`}
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
}
