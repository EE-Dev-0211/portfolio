import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "/app/i18n/settings";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const LanguageToggler = ({ lng, isDropDownLangOpen, LangDropdownToggle }) => {
  return (
    <>
      <Trans i18nKey="languageSwitcher">
        <button onClick={LangDropdownToggle}>
          {lng === "de" ? (
            <div
              className="rounded-full border-solid border-2 border-white w-8 h-8"
              style={{
                backgroundImage: 'url("/germany.svg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
              }}
            ></div>
          ) : lng === "ch" ? (
            <div
              className="rounded-full border-solid border-2 border-white w-8 h-8"
              style={{
                backgroundImage: 'url("/switzerland.svg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
              }}
            ></div>
          ) : (
            <div
              className="rounded-full border-solid border-2 border-white w-8 h-8 bg-white"
              style={{
                backgroundImage: 'url("/uk.svg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
              }}
            ></div>
          )}
        </button>
      </Trans>
      <ul
        className={`${
          isDropDownLangOpen ? "block" : "hidden"
        } flex flex-row gap-2`}
      >
        {languages
          .filter((l) => lng !== l)
          .map((l, index) => {
            return (
              <span key={l}>
                <Link href={`/${l}/home`}>
                  {l === "de" ? (
                    <motion.div
                      animate={{
                        scale: isDropDownLangOpen ? 1 : 0,
                      }}
                      className="rounded-full border-solid border-2 border-white w-6 h-6"
                      style={{
                        backgroundImage: 'url("/germany.svg")',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                      }}
                    ></motion.div>
                  ) : l === "ch" ? (
                    <motion.div
                      animate={{
                        scale: isDropDownLangOpen ? 1 : 0,
                      }}
                      className="rounded-full border-solid border-2 border-white w-6 h-6"
                      style={{
                        backgroundImage: 'url("/switzerland.svg")',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                      }}
                    ></motion.div>
                  ) : (
                    <motion.div
                      animate={{
                        scale: isDropDownLangOpen ? 1 : 0,
                      }}
                      className="rounded-full border-solid border-2 border-white w-6 h-6 bg-white"
                      style={{
                        backgroundImage: 'url("/uk.svg")',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                      }}
                    ></motion.div>
                  )}
                </Link>
              </span>
            );
          })}
      </ul>
    </>
  );
};

export default LanguageToggler;
