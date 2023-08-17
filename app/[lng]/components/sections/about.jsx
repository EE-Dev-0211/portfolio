import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import React, { useState } from "react";
import { Reveal } from "app/[lng]/components/sharedComponents/reveal.jsx";
import { motion } from "framer-motion";

const About = ({ t }) => {
  // state for the Avatarcoin
  const [isFlipped, setIsFlipped] = useState(true);

  // Avatar toggle
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="about" className="pt-20 min-h-full bg-transparent select-none">
      <div className="mt-8 md:mt-4 text-center p-10">
        <span
          className="font-custom animate-fadeInTopText
        text-black font-extrabold dark:text-white text-xl py-2 md:text-2xl"
        >
          {t("about.top-text1")}
        </span>

        <Reveal
          slide={"hidden"}
          popInDuration={0.5}
          popInDelay={0.4}
          content={
            <h2
              className="text-4xl py-2 bg-clip-text text-transparent
            bg-gradient-to-r from-black via-cobaltBlue to-blue-900
            animate-text dark:bg-gradient-to-r dark:from-teal-400
            dark:via-cobaltBlue dark:to-teal-700 dark:animate-text
            font-extrabold md:text-6xl"
            >
              Eric Eiselt
            </h2>
          }
        />

        <h3
          className="animate-fadeInLeft font-extrabold
        text-white dark:text-white text-2xl py-2 md:text-3xl"
        >
          {t("about.top-text2")}
        </h3>

        <div
          className="break-words md:break-normal animate-fadeInAvatar
        text-md py-5 leading-8 font-bold text-white max-w-lg mx-auto
        dark:text-amber-50"
        >
          <Reveal
            revealDuration={2}
            revealDelay={0.65}
            popInDelay={0.65}
            slide={""}
            content={<span>{t("about.top-text3")} </span>}
          />
          <Reveal
            revealDuration={2}
            revealDelay={0.9}
            popInDelay={0.9}
            slide={""}
            content={<span>{t("about.top-text4")}</span>}
          />
          <Reveal
            revealDuration={2}
            revealDelay={1.15}
            popInDelay={1.15}
            slide={""}
            content={<span>{t("about.top-text5")}</span>}
          />
          <Reveal
            revealDuration={2}
            revealDelay={1.4}
            popInDelay={1.4}
            slide={""}
            content={<span>{t("about.top-text6")} </span>}
          />
        </div>
      </div>

      <div className="animate-fadeInAvatar  text-5xl flex justify-center gap-16 text-gray-600">
        <a
          className="z-10"
          href="https://www.linkedin.com/in/eric-e-11x88"
          target="_blank"
        >
          <AiFillLinkedin
            className="text-white hover:text-blue-400 transition duration-1000
                       dark:text-amber-50 dark:hover:text-teal-300 dark:transition dark:duration-1000"
          />
        </a>{" "}
      </div>

      {/*Avatar Coin*/}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="relative mx-auto w-60 h-60 mt-20"
      >
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
      </motion.div>
    </section>
  );
};

export default About;
