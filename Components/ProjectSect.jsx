import React from "react";
import turbo from "@assets/images/turbo.jpg";
import shoes from "@assets/images/shoes.jpg";
import barber from "@assets/images/barber.jpg";
import medcine from "@assets/images/medcine.jpg";
const projects = [
  {
    img: shoes,
    skill: ["React", "Tailwindcss"],
    titre: "Sneakers Website",
    hrefgithub:"https://github.com/Bouba0506/sneakers",
   
  },
  {
    img: barber,
    skill: ["Nextjs", "Tailwindcss"],
    titre: "Barber Website",
    hrefgithub:"https://github.com/Bouba0506/Barber_shop",
  },
  {
    img: medcine,
    skill: ["Nextjs", "Tailwindcss"],
    titre: "Medcine Website",
    hrefgithub:"https://github.com/Bouba0506/pharmacie",
  },
  {
    img: turbo,
    skill: ["Nextjs", "Tailwindcss"],
    titre: "this is a project description",
    hrefgithub:"https://github.com/Bouba0506",
  },
];

const ProjectSect = () => {
  return (
    <section
      id="projects"
      className="mt-28 text-white md:px-16 px-4 gap-10 w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl font-bold">
        Featured <span className="text-[#ed072a]">Projects</span>
      </h1>
      <p>
        Here are some of my recent projects: Each project is designed to
        showcase my skills and expertise in a specific area. Whether you're a
        front-end developer I'm always looking for opportunities to collaborate
        on exciting projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-2xl border-2 p-2 bg-[#121126]">
        {projects.map((items, key) => (
          <div
            key={key}
            className="flex flex-col gap-4 pb-2 rounded-sm bg-[#542d3371] hover:scale-105 transition-all duration-300"
          >
            <div className="w-full h-[200px] relative ">
              <img
                src={items.img}
                alt="portfolio"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="p-2 mt-2 flex items-center justify-center gap-2 ">
              {items.skill.map((index, key) => (
                <span
                  key={key}
                  className="rounded-xl bg-[#0d0f10a5] p-2 text-white"
                >
                  {index}
                </span>
              ))}
            </div>
            <span className="capitalize text-center">{items.titre}</span>
            <div className="mt-4 px-2 flex gap-2 items-center">
              <a
                href={items.hrefgithub}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSect;
