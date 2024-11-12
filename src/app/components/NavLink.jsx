// NavLink.js
"use client";
import React from "react";
import Link from "next/link";

const NavLink = ({ href, children, onClick }) => {
  return (
    <Link
      href={href}
      className="text-lg text-white hover:text-gray-300 transition duration-300"
      onClick={onClick} // onClick for closing mobile menu or other actions
    >
      {children} {/* The children (e.g. link text) will be passed here */}
    </Link>
  );
};

export default NavLink;
