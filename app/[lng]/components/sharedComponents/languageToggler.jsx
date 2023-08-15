import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "/app/i18n/settings";
import Link from "next/link";
import React from "react";

const LanguageToggler = ({ lng, isDropDownLangOpen, LangDropdownToggle }) => {
  return (
    <>
      <Trans i18nKey="languageSwitcher">
        <button onClick={LangDropdownToggle}>
          {lng === "de" ? (
            <div
              className="rounded-full border-solid border-2 border-white w-6 h-6"
              style={{
                backgroundImage: 'url("/germany.svg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
              }}
            ></div>
          ) : lng === "ch" ? (
            <div
              className="rounded-full border-solid border-2 border-white w-6 h-6"
              style={{
                backgroundImage: 'url("/switzerland.svg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
              }}
            ></div>
          ) : (
            <div
              className="rounded-full border-solid border-2 border-white w-6 h-6"
              style={{
                backgroundImage: 'url("/usa.svg")',
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
                    <div
                      className="rounded-full border-solid border-2 border-white w-6 h-6"
                      style={{
                        backgroundImage: 'url("/germany.svg")',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                      }}
                    ></div>
                  ) : l === "ch" ? (
                    <div
                      className="rounded-full border-solid border-2 border-white w-6 h-6"
                      style={{
                        backgroundImage: 'url("/switzerland.svg")',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                      }}
                    ></div>
                  ) : (
                    <div
                      className="rounded-full border-solid border-2 border-white w-6 h-6"
                      style={{
                        backgroundImage: 'url("/usa.svg")',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                      }}
                    ></div>
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
