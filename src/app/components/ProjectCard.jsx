import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl, tags }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <Image src={imgUrl} alt={`${title} screenshot`} width={500} height={200} loading="lazy" />
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
          {gitUrl && <a href={gitUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {previewUrl && <a href={previewUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
