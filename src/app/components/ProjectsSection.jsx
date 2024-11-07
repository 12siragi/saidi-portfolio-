// ProjectsSection.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Social Media Web App",
    description: "A social media platform with features like posts, user profiles, and real-time messaging.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://your-project-link.com", // replace with your live project link
  },
  {
    title: "E-commerce Store",
    description: "A full-stack e-commerce platform with product listings, shopping cart, and payment integration.",
    tags: ["Vue.js", "Laravel", "MySQL"],
    link: "https://your-project-link.com", // replace with your live project link
  },
  {
    title: "Blog Platform",
    description: "A blog platform with user authentication, comment section, and search functionality.",
    tags: ["Next.js", "GraphQL", "Apollo", "PostgreSQL"],
    link: "https://your-project-link.com", // replace with your live project link
  },
  // Add more projects here
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4 bg-[#121212]">
      <div className="container mx-auto">
        <h2 className="text-white text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
