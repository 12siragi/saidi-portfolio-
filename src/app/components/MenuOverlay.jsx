"use client";
import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ toggleMenu }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-50">
      <div className="text-white text-2xl mb-4">Menu</div>
      <NavLink href="#about" onClick={toggleMenu}>About</NavLink>
      <NavLink href="#projects" onClick={toggleMenu}>Projects</NavLink>
      <NavLink href="#skills" onClick={toggleMenu}>Skills</NavLink>
      <NavLink href="#contact" onClick={toggleMenu}>Contact</NavLink>
      <button
        className="mt-4 text-white hover:text-gray-300"
        onClick={toggleMenu}
      >
        Close Menu
      </button>
    </div>
  );
};

export default MenuOverlay;