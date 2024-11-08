"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [tag, setTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch projects data from the server API
    fetch("http://localhost:5000/api/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProjectsData(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

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
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>

      {/* Project Grid */}
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
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
