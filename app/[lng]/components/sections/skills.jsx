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
export default function Skills({ t }) {
  const [tooltipContent, setTooltipContent] = useState(null);

  return (
    <section
      id="skills"
      className="py-16 min-h-full text-center bg-transparent select-none"
    >
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
      <div
        className="flex flex-col items-center md:flex md:justify-center
       md:gap-16 md:flex-row md:items-start md:mx-10"
      >
        <div
          className="items-center bg-gray-100 dark:bg-black text-center
    p-6 md:pt-8 md:px-8 md:pb-4 rounded-xl mt-6 mb-10 w-60 md:w-1/4 flex flex-col
    shadow-lg border-solid dark:border-double border-2 dark:border-teal-200 border-gray-800
    bg-opacity-10 backdrop-filter backdrop-blur-sm  dark:bg-opacity-10  dark:backdrop-filter
    dark:backdrop-blur-sm"
        >
          <Reveal
            popInDuration={1}
            popInDelay={0.7}
            slide={"hidden"}
            content={
              <h3 className="text-lg  font-medium pb-6 text-white">
                {t("skills.languages")}
              </h3>
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
                          className: `hidden md:block ${language.iconColor} text-5xl dark:text-white hover:cursor-help md:mr-16`,
                          onMouseEnter: () => {
                            setTooltipContent(language.name);
                          },
                          onMouseLeave: () => {
                            setTooltipContent(null);
                          },
                        })}
                        {/*show Tooltip only when != Null (on Hover) [mobile & desktop] */}
                        {/*{tooltipContent === language.name && (*/}
                        {/*  <Tooltip*/}
                        {/*    tooltipKey={tooltipContent}*/}
                        {/*    tooltipContent={language.name}*/}
                        {/*  />*/}
                        {/*)}*/}
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
        </div>

        <div
          className="border-solid dark:border-double border-2 dark:border-teal-200
        border-gray-800 w-60 items-center
        bg-gray-100 dark:bg-black text-center
        shadow-lg p-6 md:pt-8 md:px-8 md:pb-4 rounded-xl mt-6 mb-10 flex flex-col md:w-1/4
          bg-opacity-10 backdrop-filter backdrop-blur-sm  dark:bg-opacity-10  dark:backdrop-filter dark:backdrop-blur-sm
 "
        >
          <Reveal
            slide={"hidden"}
            duration={1.1}
            popInDelay={0.7}
            content={
              <h3 className="text-lg font-medium pb-6 text-white ">
                {t("skills.fw-lib")}
              </h3>
            }
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
                          className: `hidden md:block ${framLib.iconColor} md:text-5xl md:dark:text-white md:hover:cursor-help md:mr-16`,
                          onMouseEnter: () => setTooltipContent(framLib.name),
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
        </div>

        <div
          className="border-solid dark:border-double border-2 dark:border-teal-200 border-gray-800 w-60 md:w-1/4
        bg-gray-100 dark:bg-black text-center md:p-10 rounded-xl mt-6 mb-10 flex flex-col
         bg-opacity-10 shadow-lg backdrop-filter backdrop-blur-sm  dark:bg-opacity-10  dark:backdrop-filter dark:backdrop-blur-sm"
        >
          <Reveal
            slide={"hidden"}
            duration={1.2}
            popInDelay={0.7}
            content={
              <h3 className="text-lg font-medium py-6 text-white">Software</h3>
            }
          />

          <div className="grid grid-cols-3 text-black dark:text-white">
            {/*iterating over the software entries*/}
            {software.map((software) => (
              <Reveal
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
        </div>
      </div>
    </section>
  );
}
