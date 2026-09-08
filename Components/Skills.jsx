import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { useInView, cx } from "@/hooks/useInView";

const skills = [
  { name: "React", level: 90, category: "Front-end" },
  { name: "Next.js", level: 90, category: "Front-end" },
  { name: "JavaScript", level: 90, category: "Front-end" },
  { name: "Tailwind CSS", level: 90, category: "Front-end" },
  { name: "HTML", level: 90, category: "Front-end" },
  { name: "CSS", level: 90, category: "Front-end" },
  { name: "MongoDB", level: 80, category: "Back-end" },
  { name: "MySQL", level: 70, category: "Back-end" },
  { name: "Node.js", level: 60, category: "Back-end" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Figma", level: 60, category: "Tools" },
];

const categories = ["All", "Front-end", "Back-end", "Tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sectionRef, inView] = useInView({ threshold: 0.1 });
  const [filled, setFilled] = useState(false);

  const visible = skills.filter(
    (s) => activeCategory === "All" || s.category === activeCategory
  );

  // Fill the bars once the list is on screen, and replay the fill
  // whenever the filter changes so the new rows animate too.
  useEffect(() => {
    if (!inView) return;
    setFilled(false);
    const frame = requestAnimationFrame(() => setFilled(true));
    return () => cancelAnimationFrame(frame);
  }, [inView, activeCategory]);

  return (
    <section id="skills" className="relative px-6 py-24 md:px-16 md:py-32">
      {/* Ambient wash, offset from the About section above. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-crimson-deep/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <SectionHeading
          title="Skills"
          lead="The tools I reach for, and how confident I am in each one."
        />

        <div ref={sectionRef} className="mt-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-crimson bg-crimson text-bone"
                      : "border-ink-line text-bone-dim hover:border-crimson/50 hover:text-bone"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Rows rather than cards: denser, and the bars line up so the
              levels are actually comparable. */}
          <ul className="mt-10 grid gap-x-14 gap-y-1 md:grid-cols-2">
            {visible.map((skill, i) => (
              <li
                key={skill.name}
                className={cx("group reveal", inView)}
                style={{ "--delay": `${i * 55}ms` }}
              >
                <div className="border-b border-ink-line py-4 transition-colors duration-300 group-hover:border-crimson/40">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-medium text-bone transition-colors duration-300 group-hover:text-crimson">
                      {skill.name}
                    </span>
                    <div className="flex items-baseline gap-3">
                      {activeCategory === "All" && (
                        <span className="mono text-bone-dim/70">
                          {skill.category}
                        </span>
                      )}
                      <span className="mono tabular-nums text-ember">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-ink-line">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-crimson-deep via-crimson to-ember"
                      style={{
                        width: filled ? `${skill.level}%` : "0%",
                        transition: `width 1.1s cubic-bezier(0.16,1,0.3,1) ${i * 55 + 120}ms`,
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
