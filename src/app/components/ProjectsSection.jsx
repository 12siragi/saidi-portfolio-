"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [tag, setTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((data) => setProjectsData(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const filteredProjects = projectsData.filter(
    (project) =>
      (tag === "All" || project.tags.includes(tag)) &&
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="projects">
      <h2 className="text-4xl font-bold text-white mt-4 mb-8">My Projects</h2>
      <div className="text-white flex gap-4 py-6">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-700 text-white rounded-md px-4 py-2"
        />
        <ProjectTag onClick={setTag} name="All" isSelected={tag === "All"} />
      </div>
      <ul className="grid md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              gitUrl={project.link}
              tags={project.tags}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
