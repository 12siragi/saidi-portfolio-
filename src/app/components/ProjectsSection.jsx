"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  // Hardcoded mock data for testing purposes
  const projectsData = [
    {
      id: 1,
      title: "Recipe Finder App",
      description: "A web app that allows users to search for recipes based on available ingredients. Includes filtering options and dietary preferences.",
      tags: ["React", "Redux", "API Integration", "CSS Modules"],
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "A real-time weather dashboard displaying current conditions and forecasts based on user location. Integrated with a weather API.",
      tags: ["Vue.js", "Chart.js", "Weather API", "Bootstrap"],
    },
    {
      id: 3,
      title: "Personal Finance Tracker",
      description: "A tool to track income, expenses, and savings over time. Includes charts and personalized budgeting features.",
      tags: ["Node.js", "Express", "MongoDB", "D3.js"],
    },
    // Add more mock projects as needed
  ];

  const [tag, setTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProjects = projectsData.filter(
    (project) =>
      (tag === "All" || project.tags.includes(tag)) &&
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      
      {/* Search and Tag Filter */}
      <div className="text-white flex flex-row justify-center items-center gap-4 py-6">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="bg-gray-700 text-white rounded-md px-4 py-2"
        />
        <ProjectTag onClick={() => handleTagChange("All")} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={() => handleTagChange("Web")} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={() => handleTagChange("Mobile")} name="Mobile" isSelected={tag === "Mobile"} />
      </div>

      {/* Project Grid */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard {...project} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
