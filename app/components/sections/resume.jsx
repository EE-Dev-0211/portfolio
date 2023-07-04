import React from "react";
import {
  workSections,
  educationSections,
} from "app/components/data/resumeData.js";

export default function Resume() {
  return (
    <section
      id="resume"
      className="flex flex-col items-center justify-center md:pt-6 md:min-h-full text-center  dark:bg-darkGradient1"
    >
      <div className="w-4/5 md:w-full mb-4">
        <h3 className="text-3xl pb-10 pt-16 font-extrabold text-white">
          Resumé
        </h3>

        <div className="flex flex-col items-center md:justify-evenly md:items-start md:flex-row ">
          <div className="pb-10 w-4/5 md:w-1/3 md:flex md:flex-col md:items-center">
            <span className="text-white font-bold">Education</span>
            {/*mapping the education entries*/}
            {educationSections.map((educationSection) => (
              <div
                key={educationSection.id}
                className={`md:w-full items-center text-black dark:text-white flex flex-col p-4 text-center bg-gray-100 dark:bg-black ${
                  educationSection.id === 1 ? "mt-4" : ""
                }`}
              >
                <div
                  className="w-2 h-2 rounded-full bg-gradient-to-tr from-rose-950 to-orange-300
            dark:from-teal-100 dark:to-blue-600 mb-2"
                ></div>

                <span className="">{educationSection.period}</span>
                <span className="font-bold">{educationSection.position}</span>
                <span className="font-bold">{educationSection.positionSL}</span>
                <span className="font-medium">{educationSection.company}</span>
                <span className="italic dark:not-italic dark:font-thin">
                  {educationSection.location}
                </span>
              </div>
            ))}{" "}
          </div>

          <div className="w-4/5 md:w-1/3 md:flex md:flex-col md:items-center">
            <span className="text-white font-bold">Work Experience</span>
            {/*mapping the work experience entries*/}
            {workSections.map((workSection) => (
              <div
                key={workSection.id}
                className={`md:w-full items-center text-black dark:text-white flex flex-col p-4 text-center bg-gray-100 dark:bg-black ${
                  workSection.id === 2 ? "mt-4" : ""
                }`}
              >
                <div
                  className="w-2 h-2 rounded-full bg-gradient-to-tr from-rose-950 to-orange-300
            dark:from-teal-100 dark:to-blue-600 mb-2"
                ></div>
                <span className="">{workSection.period}</span>
                <span className="font-bold">{workSection.position} </span>
                <span className="font-bold">{workSection.positionSL} </span>
                <span className="font-medium">{workSection.company} </span>
                <span className="italic dark:not-italic dark:font-thin dark:text-white">
                  {workSection.location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
