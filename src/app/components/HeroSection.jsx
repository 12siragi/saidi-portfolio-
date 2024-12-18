"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";  // Import Link from next/link

const HeroSection = () => {
  return (
    <section aria-labelledby="hero-heading" className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 id="hero-heading" className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-600 to-gray-800 shadow-lg">
            Hello, I&apos;m{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Saidi Siragi",
              1000,
              "Web Developer",
              1000,
              "Mobile Designer",
              1000,
              "UI/UX Designer",
              1000,
              "Full Stack Developer",
              1000,
              "Software Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-gray-400 mb-6 text-lg lg:text-xl">
          Transforming ideas into stunning, user-friendly web solutions
        </p>
        <div>
          {/* Directly using Link without <a> */}
          <Link href="/#contact" className="bg-gradient-to-br from-blue-600 to-gray-700 hover:bg-blue-500 shadow-lg text-white px-6 py-3 rounded-full mr-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" aria-label="Hire me">
            Hire Me
          </Link>
          <a
            href="/CV/Saidi_Siragi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
          >
            <button className="m-4 bg-gradient-to-br from-blue-600 to-gray-700 px-1 py-1 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
              <span className="block bg-[#121212] hover:bg-gray-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </a>
        </div>
        <p className="text-gray-400 mb-6 text-lg lg:text-xl">
          Explore my projects and see what I can do for you!
        </p>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#1a1a1a] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative transition-transform duration-500 hover:scale-105">
          <Image
            src="/images/hero_image.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/default_image.png" // Placeholder image for smoother loading
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;