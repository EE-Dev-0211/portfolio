import React from "react";
import {
  workSections,
  educationSections,
} from "app/components/data/resumeData.js";
import ExpandableTextBox from "app/components/sharedComponents/expandableTextbox";
import HeadingBox from "app/components/sharedComponents/headingBox";
import { BsFileTextFill } from "react-icons/bs";

export default function Resume() {
  return (
    <section
      id="resume"
      className="flex flex-col items-center justify-center md:pt-16 md:min-h-full text-center
      bg-gradient-to-b from-transparent to-gray-900"
    >
      <div className="w-4/5 md:w-full mb-4">
        <HeadingBox
          icon={<BsFileTextFill className="dark:text-blue-600 mr-6" />}
          title={"Resumé"}
          additive={"Education & Work Experience"}
        />
        <div
          className="flex flex-col items-center md:justify-center md:gap-x-24 md:items-start md:flex-row
        "
        >
          <div className="pb-10 w-4/5 md:w-1/4 flex flex-col items-center ">
            {/*mapping the education entries*/}
            <div
              className="mt-4 bg-gray-100 dark:bg-black border-solid rounded-lg
            dark:border-double border-2 dark:border-teal-200 border-gray-800
            w-60 md:w-full"
            >
              {educationSections.map((educationSection) => (
                <div
                  key={educationSection.id}
                  className={`flex flex-col items-center text-black dark:text-white p-4 
                  text-center bg-transparent `}
                >
                  <div
                    className="w-2 h-2 rounded-full bg-gradient-to-tr from-rose-950 to-orange-300
            dark:from-teal-100 dark:to-blue-600 mb-2"
                  ></div>
                  <span className="">{educationSection.period}</span>
                  <span className="font-bold">{educationSection.position}</span>
                  <span className="font-bold">
                    {educationSection.positionSL}
                  </span>
                  <span className="font-medium">
                    {educationSection.company}
                  </span>
                  <span className="italic dark:not-italic dark:font-thin">
                    {educationSection.location}
                  </span>
                </div>
              ))}
            </div>
            {/*personal information box*/}
            <ExpandableTextBox
              content={
                <>
                  <p>
                    Raised in provincial Thuringia I love nature and being in
                    nature. But I have also been interested in all kinds of
                    technology and electronics since early childhood. I am also
                    passionate about cinema, writing and culture.
                  </p>
                  <br />
                  <p>
                    I listen to a lot of dark and atmospheric music, from
                    extreme metal to dark wave to neofolk and post punk. I also
                    like various rock music and electronic music.
                  </p>
                  <br />
                  <p>
                    I am still interested in philosophy (Cioran, Nietzsche,
                    Camus, Schopenhauer, Hobbes, Sartre, Zizek) after my studies
                    and a little bit (more and more) in visual arts (Grimshaw,
                    Kittelsen, Corot, Bierstadt, Doré, Beksinski, Friedrich,
                    Lessing, Giger) as well.
                  </p>
                  <br />
                  <p>
                    Fitness and weight training are also essential to my life.
                  </p>
                </>
              }
            />
          </div>

          <div className="w-4/5 md:w-1/4 flex flex-col items-center">
            {/*mapping the work experience entries*/}
            <div
              className="mt-4 bg-gray-100 dark:bg-black border-solid rounded-lg
            dark:border-double border-2 dark:border-teal-200 border-gray-800
            w-60 md:w-full "
            >
              {workSections.map((workSection) => (
                <div
                  key={workSection.id}
                  className={` items-center text-black
                   dark:text-white flex flex-col p-4 text-center bg-transparent `}
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
      </div>
    </section>
  );
}
