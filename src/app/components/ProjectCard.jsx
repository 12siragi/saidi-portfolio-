import React from "react";
import ProjectTag from "./ProjectTag";

const ProjectCard = ({ title, description, tags, link }) => {
  console.log(title, description, tags, link);  // This will help in debugging the props
  return (
    <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-[#ADB7BE] text-base mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags && tags.length > 0 && tags.map((tag, index) => (
          <ProjectTag key={index} tag={tag} />
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00BFFF] hover:underline"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
