import React from "react";
import { TypeAnimation } from "react-type-animation";
import blue from "@assets/images/Blue.png";
const Hero = () => {
  return (
    <section
      id="hero"
      className="mt-28 md:flex items-center text-white md:px-16 px-8 gap-10 w-full "
    >
      {/* left side */}
      <div className="md:w-1/2  flex flex-col text-3xl font-bold justify-center">
        <div className="space-y-6 ">
          <h1>Bah Boubacar, a Front-End</h1>
          <span className="text-[#ed072a] ">
            <TypeAnimation
              sequence={["Web developer", 1000]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
            ></TypeAnimation>
          </span>
        </div>
        <p className="mt-6 text-xs w-full leading-loose">
          with a focus on building modern, high-performance user interfaces
          tailored to client needs. Proficient in{" "}
          <span className="text-[#ed072a]"> HTML, CSS, JavaScript</span>, and
          frameworks such as{" "}
          <span className="text-[#ed072a]"> React and Next.js</span>, I am
          committed to delivering responsive, accessible, and optimized web
          solutions. My approach is centered on clean code, user experience, and
          effective team collaboration.
        </p>

        <div className="flex items-center mt-6 space-x-4">
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/Bouba0506"
              className="w-6 h-6 bg-[#9b061c] hover:scale-125 transition-all duration-300 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/boubacar-bah-a5b849278/"
              className="w-6 h-6 bg-[#9b061c] hover:scale-125 transition-all duration-300 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/bouba_bah224/"
              className="w-6 h-6 bg-[#9b061c] hover:scale-125 transition-all duration-300 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
          <button className="bg-[#9b061c] rounded-lg flex items-center text-xl p-2 justify-center">
            Contact Me
          </button>
        </div>
        {/* Experience */}
        <div className="mt-8 md:flex hidden items-center text-[18px] justify-between bg-[#750d1b69] rounded-md px-4 py-4 text-white">
          <div className="flex flex-col space-y-2">
            <div className="flex">
              <span>3</span>
              <span>+</span>
            </div>
            <p>Years of Experience</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex">
              <span>30</span>
              <span>+</span>
            </div>
            <p>Collobaration</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <span>20</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="yellow"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trophy-icon lucide-trophy"
              >
                <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
                <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
                <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
              </svg>
            </div>
            <p>Projects</p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="md:flex hidden w-1/2">
        <img
          src={blue}
          alt="portfolio"
          className="w-full h-96 object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
