// Navbar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink"; // Component for individual nav links
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay"; // Component for mobile menu overlay

// Define navigation links as an array of objects for easy mapping
const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu open/close
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] border-b border-[#33353F]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo or Brand Name */}
        <Link href="/" aria-label="Home">
          Saidi&apos;s Portfolio
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path}>
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Conditional rendering of MenuOverlay for mobile view */}
      {isMenuOpen && <MenuOverlay toggleMenu={toggleMenu} links={navLinks} />}
    </nav>
  );
};

export default Navbar;
