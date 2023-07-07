import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import React, { useState } from "react";
import { Reveal } from "app/components/sharedComponents/reveal";
const About = () => {
  // state for the Avatarcoin
  const [isFlipped, setIsFlipped] = useState(true);

  // Avatar toggle
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="about" className="pt-20 min-h-full bg-transparent ">
      <div className="mt-8 md:mt-4 text-center p-10">
        <span
          className="animate-fadeInTopText select-none
        text-black font-extrabold dark:text-white text-xl py-2 md:text-2xl"
        >
          Hi, I am
        </span>

        <Reveal
          slide={"hidden"}
          content={
            <h2
              className=" text-5xl py-2
        text-teal-400 font-extrabold select-none md:text-6xl"
            >
              Eric Eiselt
            </h2>
          }
        />

        <h3
          className="animate-fadeInLeft select-none font-extrabold
        text-white dark:text-white text-2xl py-2 md:text-3xl"
        >
          Aspiring Frontend Developer
        </h3>

        <div
          className="break-words md:break-normal animate-fadeInAvatar select-none
        text-md py-5 leading-8 font-bold text-white md:text-l max-w-lg mx-auto
        dark:text-amber-50 "
        >
          <Reveal
            revealFrequence={"JKhkj"}
            slide={""}
            content={
              <span>
                and I am currently in my final year of training to become an{" "}
                application developer. During my apprenticeship, I had many
                different insights into different areas, but I was most taken
                with frontend development.{" "}
              </span>
            }
          />
        </div>
      </div>

      <div className="animate-fadeInAvatar select-none text-5xl flex justify-center gap-16 text-gray-600">
        <a
          className="z-10"
          href="https://www.linkedin.com/in/eric-e-720431201/"
          target="_blank"
        >
          <AiFillLinkedin className="text-white hover:text-teal-200 dark:text-amber-50 dark:hover:text-teal-100" />
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
              className="animate-fadeInAvatar"
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
