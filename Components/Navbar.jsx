import React, { useEffect, useState } from "react";
const navIems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`text-white fixed top-0 left-0 flex justify-between  items-center w-full h-16  md:px-4 px-8 py-2 ${
        isScroll ? "bg-[#373535] shadow-md" : "bg-transparent"
      }`}
    >
      <h1 className="text-xl font-semibold text-amber-50 px-10">
        <a href="#home">
          <span className="text-red-500">My</span> Portfolio
        </a>
      </h1>
      {/* Button to open/close the Navbar */}
      <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6 text-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Navbar */}
      <div className="hidden md:flex space-x-4 gap-10">
        {navIems.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              className="text-xl font-medium hover:text-[#9b061c] "
            >
              {item.name}
            </a>
          );
        })}
      </div>
      {/* Mobile Navbar */}
      <div
        className={`${
          isOpen
            ? "opacity-100 pointer-events-auto top-16"
            : "opacity-0 pointer-events-none -top-9"
        } fixed inset-0 w-full bg-[#232121] backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8
      transition-all duration-300 md:hidden py-10 space-y-8
      `}
      >
        {navIems.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              className="text-xl font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          );
        })}
      </div>

      {/* icons social media */}
      <div className="lg:flex items-center space-x-3 hidden">
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
            width="16"
            height="16"
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
    </div>
  );
};
