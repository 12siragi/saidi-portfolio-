// src/app/components/About.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-black text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-center max-w-2xl mx-auto mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I am a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
        Currently pursuing my Computer Science degree at ICS College, I have gained valuable skills and experience through 
        various certifications, including a year-long Full Stack Developer program at ALX.
      </motion.p>
      <motion.p
        className="text-lg text-center max-w-2xl mx-auto mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        My journey in programming started with a passion for problem-solving, which led me to explore various languages and frameworks. 
        I have completed over 20 programming books that have further solidified my understanding and skills in this field.
      </motion.p>
      
      <motion.h3
        className="text-2xl font-semibold text-center mb-4"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Certifications
      </motion.h3>
      <ul className="list-disc list-inside max-w-2xl mx-auto mb-6 space-y-2">
        <li>
          <TypeAnimation
            sequence={[
              "Python (Basic) - Verified Skill",
              1000,
              "SQL (Basic) - Verified Skill",
              1000,
              "JavaScript (Basic) - Verified Skill",
              1000,
              "JavaScript (Intermediate) - Verified Skill",
              1000,
              "Problem Solving (Basic) - Verified Skill",
              1000,
              "Problem Solving (Intermediate) - Verified Skill",
              1000,
              "CSS (Basic) - Verified Skill",
              1000,
              "Node (Basic) - Verified Skill",
              1000,
              "Angular (Basic) - Verified Skill",
              1000,
              "REST API (Intermediate) - Verified Skill",
              1000,
              "SQL (Intermediate) - Verified Skill",
              1000,
              "Software Engineer - Verified Role",
              1000,
            ]}
            wrapper="div"
            speed={50}
            repeat={Infinity}
          />
        </li>
      </ul>
      
      <motion.p
        className="text-lg text-center max-w-2xl mx-auto mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        I believe that continuous learning is key to growth in technology, and I am always eager to learn and improve my skills. 
        My self-study approach has been instrumental in my development as a programmer.
      </motion.p>
    </section>
  );
};

export default About;
