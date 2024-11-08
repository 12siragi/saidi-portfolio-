// ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl, tags }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img src={imgUrl} alt={`${title} screenshot`} className="w-full h-48 object-cover" />
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between mt-4">
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
