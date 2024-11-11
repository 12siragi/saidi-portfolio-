
"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink"; // A separate component for navigation links
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay"; // A component for mobile menu overlay

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the menu open/close state
  };

  return (
    <nav className="bg-[#121212] border-b border-[#33353F]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Saidi&apos;s Portfolio</div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path}>{link.title}</NavLink>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && <MenuOverlay toggleMenu={toggleMenu} links={navLinks} />} {/* Render MenuOverlay if isOpen is true */}
    </nav>
  );
};

export default Navbar;