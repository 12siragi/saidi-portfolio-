import React from "react";

const ProjectTag = ({ tag }) => {
  return (
    <span className="bg-[#33353F] text-white px-3 py-1 rounded-full text-sm">
      {tag}
    </span>
  );
};

export default ProjectTag;
