import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Reveal } from "app/[lng]/components/sharedComponents/reveal.jsx";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
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

  useEffect(() => {
    const typed = new Typed(typedText.current, {
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
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

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
             py-2 text-gray-800 dark:text-white
            font-extrabold "
              >
                {" "}
                <span ref={typedText} />
              </h2>{" "}
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

      <div className="animate-fadeInAvatar text-6xl flex justify-center gap-6 text-gray-600">
        <a
          className="text-5xl text-white
          hover:text-blue-400 transition duration-1000
            dark:hover:text-teal-300 dark:transition dark:duration-1000"
          href="https://www.linkedin.com/in/eric-e-11x88"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>

        <a
          className="text-5xl text-white
          hover:text-black transition duration-1000
            dark:hover:text-teal-300 dark:transition dark:duration-1000
            "
          href="https://github.com/daath-dweller"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
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
