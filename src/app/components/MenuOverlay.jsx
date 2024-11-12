// MenuOverlay.js
"use client";
import React from "react";
import NavLink from "./NavLink"; // Import the safe NavLink component

const MenuOverlay = ({ links, toggleMenu }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-50">
      <div className="text-white text-2xl mb-4">Menu</div>
      <ul className="flex flex-col items-center space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            {/* Pass onClick to close the menu when a link is clicked */}
            <NavLink href={link.path} onClick={toggleMenu}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Close menu button */}
      <button
        className="mt-6 text-white hover:text-gray-300"
        onClick={toggleMenu}
      >
        Close Menu
      </button>
    </div>
  );
};

export default MenuOverlay;
