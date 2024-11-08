// ProjectTag.jsx
import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`px-4 py-2 rounded-full ${
        isSelected ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
      } hover:bg-blue-400 hover:text-white transition-colors duration-200`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
