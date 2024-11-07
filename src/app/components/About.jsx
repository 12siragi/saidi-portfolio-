"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript (ES6+) & Typescript</li>
        <li>React.js & next.js & Redux</li>
        <li>Node.js & Express</li>
        <li>python & django,nginx, flask</li>
        <li>PostgreSQL & Sequelize & myslq</li>
        <li>HTML5 & CSS3 & tailwind & bootsrap</li>
        <li>Git & insomnia,</li>
        <li>RESTful APIs & Graphql</li>
        <li>versel,heruku,AWS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FULL STACK DEVELOPER ALX</li>
        <li>SOFTWARE ENGINER HACKERRACK</li>
        <li>ICS COLLAGE for Computer science, DIPLOMA, PRESENT </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>FULL STACK DEVELOPER</li>
        <li>SOFTWARE ENGINEER</li>
        <li>SOTWARE ENGINEER INTERNISHIP</li>
        <li>FRONTED DEVELOPER</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a dedicated full-stack web developer with a solid foundation in building dynamic applications using modern JavaScript frameworks and tools. My core expertise lies in backend technologies, including Django,Node.js,Express and PostgreSQL,Mysql, while I am also skilled in frontend development with Reactframework. I have a deep understanding of RESTful API integration, responsive design, and version control with Git. Known for my collaborative approach and adaptability, I am committed to continuously expanding my skill set to stay aligned with the latest industry trends.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
