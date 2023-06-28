import { framLibs, languages, software } from "./techData";
import React, { useState } from "react";

export default function Skills() {
  const [tooltipContent, setTooltipContent] = useState(null);

  return (
    <section
      id="skills"
      className="py-16  min-h-full text-center bg-gradient2 dark:bg-darkGradient2"
    >
      <div>
        <h3 className="text-3xl text-black pt-4 dark:text-white">
          Technologies
        </h3>

        <p className="text-md pt-6 px-6 leading-8 text-gray-800 md:text-lg mx-auto dark:text-amber-50">
          Here you will find various technologies that I have had the pleasure
          of getting to know. I have worked with some of them more intensively,
          with others only superficially.
        </p>
      </div>

      <div className="flex flex-col items-center md:flex md:justify-center md:gap-16 md:flex-row md:items-start md:mx-10">
        <div className="w-60 items-center bg-gray-100 dark:bg-black text-center shadow-lg p-6 md:pt-8 md:px-8 md:pb-4 rounded-xl mt-6 mb-10 md:w-1/4 flex flex-col">
          <h3 className="text-lg text-black font-medium pb-6 dark:text-white">
            Languages
          </h3>
          {/*iterating over the languages*/}
          {languages.map((language) => (
            <div key={language.id} className="md:grid md:grid-cols-3 md:h-20">
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
                        onMouseEnter: () => setTooltipContent(language.name),
                        onMouseLeave: () => setTooltipContent(null),
                      })}
                    </div>
                  </div>
                  {/* Desktop version */}
                  {React.createElement(language.icon, {
                    className: `hidden md:block ${language.iconColor} text-5xl dark:text-white hover:cursor-help md:mr-16`,
                    onMouseEnter: () => setTooltipContent(language.name),
                    onMouseLeave: () => setTooltipContent(null),
                  })}
                  {/*show Tooltip only when != Null (on Hover) [mobile & desktop] */}
                  {tooltipContent === language.name && (
                    <div className="absolute top-0 left-full ml-2 mt-2 bg-gray-700 text-white px-4 py-2 rounded-md dark:bg-blue-600">
                      {language.name}
                    </div>
                  )}
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
          ))}
        </div>

        <div className="w-60 items-center bg-gray-100 dark:bg-black text-center shadow-lg p-6 md:pt-8 md:px-8 md:pb-4 rounded-xl mt-6 mb-10 flex flex-col md:w-1/4">
          <h3 className="text-lg text-black font-medium pb-6 dark:text-white">
            Frameworks & Libraries
          </h3>
          {/*iterating over frameworks & libraries*/}
          {framLibs.map((framLib) => (
            <div key={framLib.id} className="md:grid md:grid-cols-3 md:h-20">
              <div className="md:col-span-1 md:flex md:justify-start">
                <div className="relative">
                  {/*----*/}
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
                        onMouseEnter: () => setTooltipContent(framLib.name),
                        onMouseLeave: () => setTooltipContent(null),
                      })}
                    </div>
                  </div>
                  {/*---*/}
                  {React.createElement(framLib.icon, {
                    className: `hidden md:block ${framLib.iconColor} md:text-5xl md:dark:text-white md:hover:cursor-help md:mr-16`,
                    onMouseEnter: () => setTooltipContent(framLib.name),
                    onMouseLeave: () => setTooltipContent(null),
                  })}
                  {tooltipContent === framLib.name && (
                    <div className="absolute top-0 left-full ml-2 mt-2 bg-gray-700 dark:bg-blue-600 text-white px-4 py-2 rounded-md">
                      {framLib.name}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-2">
                <div
                  className="hidden md:block md:mt-4 md:w-full md:bg-gray-500 md:rounded-full
                md:border-2 md:border-gray-500 md:dark:bg-white md:dark:border-white"
                >
                  <div
                    className={`${framLib.progressTwTag} bg-amber-400 text-s text-white font-semibold text-center p-0.5 leading-none rounded-full dark:bg-blue-700 dark:text-white`}
                  >
                    {framLib.progressText}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-4/5 bg-gray-100 dark:bg-black text-center shadow-lg  p-10  rounded-xl mt-6 mb-10   flex flex-col md:w-1/4">
          <h3 className="text-lg text-black font-medium pb-6 dark:text-white">
            Software
          </h3>

          <div className="grid grid-cols-3 text-black dark:text-white">
            {/*iterating over the software entries*/}
            {software.map((software) => (
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

                <div className="text-center text-xs pt-4">{software.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
