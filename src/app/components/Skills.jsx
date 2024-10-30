// src/app/components/Skills.jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useSpring, animated } from 'react-spring';

// Define skills data
const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Angular", level: 70 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Django", level: 75 },
      { name: "Flask", level: 70 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    category: "APIs",
    skills: [
      { name: "REST API", level: 80 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Webpack", level: 65 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-100 text-black">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      
      <div className="max-w-5xl mx-auto">
        {skillsData.map((group) => (
          <div key={group.category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">{group.category}</h3>
            {group.skills.map((skill) => {
              const [isHovered, setIsHovered] = useState(false);
              const maxLevel = skill.level;

              return (
                <div key={skill.name} className="flex items-center mb-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>
                        <CountUp end={skill.level} duration={2} />%
                      </span>
                    </div>
                    <div className="bg-gray-300 rounded-full h-4 mb-2">
                      <motion.div
                        className="bg-blue-600 h-4 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isHovered ? `${maxLevel}%` : `${maxLevel}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  <div 
                    className="w-16 h-16 ml-4" 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="bg-gray-300 rounded-full flex items-center justify-center">
                      <CircularProgressbar 
                        value={isHovered ? 100 : maxLevel} 
                        text={`${isHovered ? 100 : maxLevel}%`} 
                        strokeWidth={10}
                        styles={{
                          path: {
                            stroke: `#3b82f6`,
                            strokeLinecap: 'round',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                          },
                          text: {
                            fill: '#000',
                            fontSize: '16px',
                            fontWeight: 'bold',
                          },
                          trail: {
                            stroke: '#d9d9d9',
                          },
                        }} 
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;