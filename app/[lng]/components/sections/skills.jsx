import {
  framLibs,
  languages,
  software,
} from "app/[lng]/components/data/techData.js";
import React, { useState } from "react";
import HeadingBox from "app/[lng]/components/sharedComponents/headingBox.jsx";
import { RiComputerFill } from "react-icons/ri";
import { Reveal } from "app/[lng]/components/sharedComponents/reveal.jsx";
import Tooltip from "/app/[lng]/components/sharedComponents/tooltip";
import Skillbox from "/app/[lng]/components/sharedComponents/skillbox";
export default function Skills({ t, darkMode }) {
  const [tooltipContent, setTooltipContent] = useState(null);

  return (
    <section
      id="skills"
      className="py-16 min-h-full text-center bg-transparent select-none"
    >
      {/* heading for Skills*/}
      <Reveal
        slide={"hidden"}
        popInDuration={0.8}
        popInDelay={0.5}
        content={
          <div>
            <HeadingBox
              icon={<RiComputerFill className="dark:text-blue-600 mr-6" />}
              title={t("skills.languages")}
              additive={t("skills.additive")}
            />
          </div>
        }
      />
      {/*  Skillboxes*/}
      <div
        className="flex flex-col items-center md:flex md:justify-center
       md:gap-16 md:flex-row md:items-start md:mx-10"
      >
        <Skillbox
          content={
            <>
              <Reveal
                popInDuration={1}
                popInDelay={0.7}
                slide={"hidden"}
                content={
                  <h3 className="heading-text">{t("skills.languages")}</h3>
                }
              />
              {/*iterating over the languages*/}
              {languages.map((language) => (
                <div key={language.id}>
                  <Reveal
                    key={language.id}
                    revealDuration={1}
                    revealDelay={0.2}
                    content={
                      <div
                        key={language.id}
                        className="md:grid md:grid-cols-3 md:h-20"
                      >
                        {/*mobile version */}
                        <div className="col-span-1 flex justify-start">
                          <div className="relative">
                            <div className="my-2 md:hidden relative w-16 h-16 ">
                              {/*icons on mobile version are filled corresponding to the level of the progress bar in desktop mode */}
                              <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-full">
                                <div
                                  className={`absolute bottom-0 left-0 w-full ${language.filled} ${language.bgColor} dark:bg-blue-600`}
                                />
                                <div
                                  className={`md:hidden absolute top-0 left-0 w-full ${language.notFilled} bg-gray-400`}
                                />
                              </div>
                              <div className="md:hidden absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                {React.createElement(language.icon, {
                                  className: `md:hidden text-4xl dark:text-white hover:cursor-help`,
                                  onTouchStart: () =>
                                    setTooltipContent(language.name),
                                  onTouchEnd: () => setTooltipContent(null),
                                })}
                              </div>
                            </div>
                            {/* Desktop version */}

                            {React.createElement(language.icon, {
                              className: `hidden md:block ${language.iconColor} text-5xl dark:text-white hover:cursor-help 
                             mr-16 hover:opacity-50 transition duration-500 dark:hover:opacity-100 dark:hover:text-teal-200 dark:transition dark:duration-500`,
                              onMouseEnter: () => {
                                setTooltipContent(language.name);
                              },
                              onMouseLeave: () => {
                                setTooltipContent(null);
                              },
                            })}
                          </div>
                        </div>
                        <div className="col-span-2">
                          {/* Progress bars are only shown when width > 1130px */}

                          <div
                            className="hidden md:block md:mt-4 md:w-full md:bg-gray-500 md:rounded-full
                        md:border-2 md:border-gray-500 md:dark:bg-white md:dark:border-white"
                          >
                            <div
                              className={`${language.progressTwTag} bg-amber-400 text-s text-white font-semibold text-center p-0.5 leading-none rounded-full dark:bg-blue-700 dark:text-white`}
                            >
                              {language.progressText}
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  />{" "}
                  {tooltipContent === language.name && (
                    <Tooltip
                      tooltipKey={tooltipContent}
                      tooltipContent={language.name}
                    />
                  )}
                </div>
              ))}
            </>
          }
        />

        <Skillbox
          content={
            <>
              <Reveal
                slide={"hidden"}
                duration={1.1}
                popInDelay={0.7}
                content={<h3 className="heading-text">{t("skills.fw-lib")}</h3>}
              />
              {/*iterating over frameworks & libraries*/}
              {framLibs.map((framLib) => (
                <div key={framLib.id}>
                  <Reveal
                    key={framLib.id}
                    revealDuration={1.1}
                    revealDelay={0.2}
                    content={
                      <div
                        key={framLib.id}
                        className="md:grid md:grid-cols-3 md:h-20
                  "
                      >
                        <div className="md:col-span-1 md:flex md:justify-start">
                          <div className="relative">
                            {/*--Mobile--*/}
                            <div className="my-2 md:hidden relative w-16 h-16">
                              <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-full">
                                <div
                                  className={`absolute bottom-0 left-0 w-full  ${framLib.filled} ${framLib.bgColor} dark:bg-blue-600`}
                                />
                                <div
                                  className={`absolute top-0 left-0 w-full ${framLib.notFilled} bg-gray-400`}
                                />
                              </div>
                              <div className="md:hidden absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                {React.createElement(framLib.icon, {
                                  className: `md:hidden text-4xl dark:text-white hover:cursor-help`,
                                  onTouchStart: () =>
                                    setTooltipContent(framLib.name),
                                  onTouchEnd: () => setTooltipContent(null),
                                })}
                              </div>
                            </div>
                            {/*-Desktop--*/}
                            {React.createElement(framLib.icon, {
                              className: `hidden md:block ${framLib.iconColor} md:text-5xl md:dark:text-white md:hover:cursor-help hover:opacity-50 transition duration-500 dark:hover:opacity-100 dark:hover:text-teal-200 dark:transition dark:duration-500 mr-16`,
                              onMouseEnter: () =>
                                setTooltipContent(framLib.name),
                              onMouseLeave: () => setTooltipContent(null),
                            })}
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div
                            className="hidden md:block md:mt-4 md:w-full md:bg-gray-500 md:rounded-full
                md:border-2 md:border-gray-500 md:dark:bg-white md:dark:border-white"
                          >
                            <div
                              className={`${framLib.progressTwTag} bg-amber-400 text-s text-white font-semibold text-center 
                        p-0.5 leading-none rounded-full dark:bg-blue-700 dark:text-white`}
                            >
                              {framLib.progressText}
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  />
                  {tooltipContent === framLib.name && (
                    <Tooltip
                      tooltipKey={tooltipContent}
                      tooltipContent={framLib.name}
                    />
                  )}
                </div>
              ))}
            </>
          }
        />

        <Skillbox
          content={
            <>
              <Reveal
                darkMode={darkMode}
                slide={"hidden"}
                duration={1.2}
                popInDelay={0.7}
                content={<h3 className="heading-text">Software</h3>}
              />

              <div className="grid grid-cols-3 text-black dark:text-white">
                {/*iterating over the software entries*/}
                {software.map((software) => (
                  <Reveal
                    darkMode={darkMode}
                    key={software.id}
                    revealDuration={1.2}
                    revealDelay={0.2}
                    content={
                      <div
                        key={software.id}
                        className="flex flex-col items-center justify-center py-2 px-6"
                      >
                        <div
                          data-tooltip={software.name}
                          className={`${software.iconColor} relative text-5xl dark:text-white                 
  `}
                        >
                          {React.createElement(software.icon)}
                        </div>

                        <div className="text-center text-xxs md:text-xs text-black dark:text-white pt-4">
                          {software.name}
                        </div>
                      </div>
                    }
                  />
                ))}
              </div>
            </>
          }
        />
      </div>
    </section>
  );
}
