import React from "react";
import { workSections, educationSections } from "./resumeData";

export default function Resume() {
  return (
    <section
      id="resume"
      className="flex flex-col items-center justify-center md:pt-10 md:snap-start md:min-h-full text-center "
    >
      <div className="w-4/5 mb-4">
        <h3 className="text-3xl pb-10 pt-16">Resumé</h3>
        {/*-----*/}
        {educationSections.map((educationSection) => (
          <div
            key={educationSection.id}
            className="text-black dark:text-white flex flex-col p-4 text-center bg-gray-100 dark:bg-black"
          >
            <span className="">{educationSection.period}</span>
            <span className="font-bold">{educationSection.position}</span>
            <span className="font-bold">{educationSection.positionSL}</span>
            <span className="font-medium">{educationSection.company}</span>
            <span className="italic dark:not-italic dark:font-thin">
              {educationSection.location}
            </span>
          </div>
        ))}{" "}
      </div>{" "}
      <div className="w-4/5">
        {/*-----*/}
        {workSections.map((workSection) => (
          <div
            key={workSection.id}
            className="text-black dark:text-white flex flex-col p-4 text-center bg-gray-100 dark:bg-black"
          >
            <span className="">{workSection.period}</span>
            <span className="font-bold">{workSection.position} </span>
            <span className="font-bold">{workSection.positionSL} </span>
            <span className="font-medium">{workSection.company} </span>
            <span className="italic dark:not-italic dark:font-thin dark:text-white">
              {workSection.location}
            </span>
          </div>
        ))}
        {/*-----*/}
      </div>
    </section>
  );
}
