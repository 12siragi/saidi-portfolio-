"use client";
import React from "react";
import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} className="text-gray-300 hover:text-white">
      {children}
    </Link>
  );
};

export default NavLink;
