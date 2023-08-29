import React from "react";
import {
  workSections,
  educationSections,
} from "app/[lng]/components/data/resumeData.js";
import ExpandableTextBox from "app/[lng]/components/sharedComponents/expandableTextbox.jsx";
import HeadingBox from "app/[lng]/components/sharedComponents/headingBox.jsx";
import { BsFileTextFill } from "react-icons/bs";
import { Reveal } from "app/[lng]/components/sharedComponents/reveal.jsx";

export default function Resume({ lng, t, darkMode }) {
  return (
    <section
      id="resume"
      className="flex flex-col items-center
      justify-center md:pt-16 md:min-h-full text-center
      bg-gradient-to-b from-transparent to-gray-900 select-none"
    >
      <div className="w-full mb-4">
        <Reveal
          slide={"hidden"}
          popInDelay={0.5}
          content={
            <HeadingBox
              icon={<BsFileTextFill className="dark:text-blue-600 mr-6" />}
              title={t("resumeHeader.title")}
              additive={t("resumeHeader.additive")}
            />
          }
        />
        <div
          className="flex flex-col items-center md:justify-center md:gap-x-24 md:items-start md:flex-row
        "
        >
          <div className="pb-10 w-4/5 md:w-1/4 flex flex-col items-center ">
            {/*mapping the education entries*/}

            <div className="info-box">
              {educationSections.map((educationSection) => (
                <Reveal
                  darkMode={darkMode}
                  key={educationSection.id}
                  revealDuration={1}
                  revealDelay={0.3}
                  content={
                    <div
                      key={educationSection.id}
                      className={`flex flex-col items-center text-white p-4 
                  text-center bg-transparent `}
                    >
                      <div
                        className="w-2 h-2 rounded-full bg-gradient-to-tr from-rose-950 to-orange-300
            dark:from-teal-100 dark:to-blue-600 mb-2 "
                      ></div>
                      <span className="">{educationSection.period}</span>
                      <span className="font-bold">
                        {lng === "de"
                          ? educationSection.positionDE
                          : lng === "ch"
                          ? educationSection.positionCH
                          : educationSection.position}
                      </span>
                      <span className="font-bold">
                        {lng === "de"
                          ? educationSection.positionSLDE
                          : lng === "ch"
                          ? educationSection.positionSLCH
                          : educationSection.positionSL}
                      </span>
                      <span className="font-medium">
                        {lng === "de"
                          ? educationSection.companyDE
                          : educationSection.company}
                      </span>
                      <span className="italic dark:not-italic dark:font-thin">
                        {lng === "de"
                          ? educationSection.locationDE
                          : educationSection.location}
                      </span>
                    </div>
                  }
                />
              ))}
            </div>

            {/*personal information box*/}
            <ExpandableTextBox
              buttonText={t("personal.buttonText")}
              content={
                <>
                  <p> {t("personal.text1")}</p>
                  <br />
                  <p>{t("personal.text2")}</p>
                  <br />
                  <p>{t("personal.text3")}</p>
                  <br />
                  <p>{t("personal.text4")}</p>
                </>
              }
            />
          </div>

          <div className="w-4/5 md:w-1/4 flex flex-col items-center">
            {/*mapping the work experience entries*/}
            <div className="info-box">
              {workSections.map((workSection) => (
                <Reveal
                  darkMode={darkMode}
                  key={workSection.id}
                  revealDuration={1.2}
                  revealDelay={0.3}
                  content={
                    <div
                      key={workSection.id}
                      className={` items-center text-white
                flex flex-col p-4 text-center bg-transparent `}
                    >
                      <div
                        className="w-2 h-2 rounded-full bg-gradient-to-tr from-rose-950 to-orange-300
            dark:from-teal-100 dark:to-blue-600 mb-2"
                      ></div>
                      <span className="">{workSection.period}</span>
                      <span className="font-bold">
                        {lng === "de"
                          ? workSection.positionDE
                          : lng === "ch"
                          ? workSection.positionCH
                          : workSection.position}
                      </span>
                      <span className="font-bold">
                        {lng === "de"
                          ? workSection.positionSLDE
                          : lng === "ch"
                          ? workSection.positionSLCH
                          : workSection.positionSL}
                      </span>
                      <span className="font-medium">
                        {workSection.company}{" "}
                      </span>
                      <span className="italic dark:not-italic dark:font-thin dark:text-white">
                        {lng === "de"
                          ? workSection.locationDE
                          : workSection.location}
                      </span>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
