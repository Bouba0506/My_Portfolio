import  { useState } from "react";

const skilltab = [
  // Front-End
  { name: "React", level: 90, category: "Front-End" },
  { name: "Next.js", level: 90, category: "Front-End" },
  { name: "Tailwind CSS", level: 90, category: "Front-End" },
  { name: "HTML", level: 90, category: "Front-End" },
  { name: "CSS", level: 90, category: "Front-End" },
  { name: "JavaScript", level: 90, category: "Front-End" },

  // Back-End
  { name: "Node.js", level: 60, category: "Back-End" },
  { name: "MongoDB", level: 80, category: "Back-End" },
  { name: "MySQL", level: 70, category: "Back-End" },
  // Tools
  { name: "Git", level: 90, category: "Back-End" },
  { name: "Figma", level: 60, category: "Tools" },
  { name: "Vs Code", level: 90, category: "Tools" },
];
const categorys = ["all", "Front-End", "Back-End", "Tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

const filterSkills=skilltab.filter((skill)=>activeCategory==="all" || skill.category===activeCategory);

  return (
    <section
      id="skills"
      className="mt-28 text-white px-16 gap-10 w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl font-bold">
        My <span className="text-[#ed072a]"> Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categorys.map((category, key) => (
          <button
            key={key}
            onClick={() => setActiveCategory(category)}
            className={`${
              activeCategory === category
                ? "bg-[#542d33] text-white"
                : "bg-[#133c67] text-white"
            } rounded-full flex items-center text-xl p-3 justify-center`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filterSkills.map((skill, key) => (
          <div
            key={key}
            className="pb-4 pt-2 w-52 px-2 rounded-sm bg-[#542d3371] shadow-xl"
          >
            <div className="text-left mb-4">
              <h2 className="text-lg font-semibold">{skill.name}</h2>
            </div>
            <div className="w-full rounded-full h-2 overflow-hidden bg-[#dbdddffd]">
              <div
                className="bg-[#142e82] h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] transition-all"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="text-right mt-1">
              <span>{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
