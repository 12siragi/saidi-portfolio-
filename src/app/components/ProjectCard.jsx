import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component from next/image

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl, tags }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      {/* Replace img with Image from next/image */}
      <Image
        src={imgUrl}
        alt={`${title} screenshot`}
        className="w-full h-48 object-cover"
        width={500}  // Define a width (this can be adjusted based on the design)
        height={200} // Define a height (this can be adjusted based on the design)
        loading="lazy"
        placeholder="blur"  // Optional: Adds blur effect while loading
        blurDataURL="/images/default_image.png"  // Placeholder image for smoother loading
      />

      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>

        {/* Render tags dynamically */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags && tags.length > 0 ? (
            tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-gray-500">No tags available</span>
          )}
        </div>

        {/* Links */}
        <div className="flex justify-between mt-4">
          {gitUrl && (
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              GitHub
            </a>
          )}

          {/* Only render the preview link if previewUrl is available */}
          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
