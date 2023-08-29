import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Reveal } from "app/[lng]/components/sharedComponents/reveal.jsx";
import { motion } from "framer-motion";
import { FaGithub, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import Typed from "typed.js";

const About = ({ t }) => {
  // state for the Avatarcoin
  const [isFlipped, setIsFlipped] = useState(true);

  // Avatar toggle
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const text = String(t("name"));

  const typedText = useRef(null);
  const typed = useRef(null);
  const [isTypingAnimationActive, setIsTypingAnimation] = useState(true);

  useEffect(() => {
    const options = {
      strings: [
        t("about.top-text2.1"),
        t("about.top-text2.2"),
        t("about.top-text2.3"),
      ],
      typeSpeed: 150,
      backSpeed: 30,
      smartBackspace: true,
      startDelay: 800,
      backDelay: 200,
      loop: true,
      loopCount: Infinity,
    };

    typed.current = new Typed(typedText.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  const typingToggle = () => {
    typed.current.toggle();
    setIsTypingAnimation(!isTypingAnimationActive);
  };

  return (
    <section id="about" className="pt-20 min-h-full bg-transparent select-none">
      <div className="mt-8 md:mt-4 text-center p-10">
        <span
          className="font-custom animate-fadeInLeft
        text-black font-extrabold dark:text-white text-lg py-2 md:text-2xl"
        >
          {" "}
          {t("about.top-text1")}
        </span>

        <div className="font-boo relative overflow-hidden">
          {text.split("#").map((char, index) => (
            <h3
              key={index}
              className="inline-block font-extrabold text-cobaltBlue
                  dark:text-teal-400 text-4xl md:text-6xl py-2 px-0.5 animate-fillAndEmpty
                  "
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {char}
            </h3>
          ))}
        </div>

        <Reveal
          slide={"hidden"}
          popInDuration={0.5}
          popInDelay={0.4}
          content={
            <div className=" text-center mt-1">
              <h2
                className="
            text-lg md:text-3xl
             py-2 text-gray-100 dark:text-white
            font-extrabold "
              >
                {" "}
                <span ref={typedText} />
              </h2>{" "}
              <button
                className="hover:text-amber-900 dark:hover:text-teal-400"
                onClick={typingToggle}
              >
                {isTypingAnimationActive ? (
                  <AiOutlinePauseCircle />
                ) : (
                  <AiOutlinePlayCircle />
                )}
              </button>
            </div>
          }
        />

        <div
          className="break-words md:break-normal animate-fadeInAvatar
        text-sm md:text-md py-5 leading-8 font-bold text-white max-w-lg mx-auto
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

      <div className="animate-fadeInAvatar text-5xl flex justify-center gap-6 text-gray-600">
        <button
          className="w-20 bg-blue-800 dark:bg-teal-800 text-white border border-blue-400 dark:border-teal-400
        border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md
        hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span
            className="bg-blue-400 dark:bg-teal-400 shadow-blue-400 dark:shadow-teal-400 absolute -top-[150%]
          left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%]
          duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"
          ></span>
          <FaLinkedinIn />
        </button>
        <button
          className="w-20 bg-black dark:bg-teal-800  text-white border border-gray-600 dark:border-teal-400 border-b-4 font-medium
        overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4
        hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span
            className="bg-gray-400 dark:bg-teal-400 shadow-gray-400 dark:shadow-teal-400 absolute
          -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md
          opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"
          ></span>
          <FaGithub />
        </button>
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
