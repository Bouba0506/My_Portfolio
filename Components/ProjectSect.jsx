import { useCallback, useRef } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import shoes from "@assets/images/shoes.jpg";
import barber from "@assets/images/barber.jpg";
import medcine from "@assets/images/medcine.jpg";
import SectionHeading from "./SectionHeading";
import { useInView, cx } from "@/hooks/useInView";
import disco from "@assets/images/disco.jpg";
import homepage from "@assets/images/homepage.png";
import rentaldesign from "@assets/images/rentaldesign.jpeg";
import ecole from "@assets/images/ecole.png";
import systema from "@assets/images/systema.png";

const projects = [
  {
    img: shoes,
    alt: "Sneakers store interface",
    title: "Sneakers store",
    summary:
      "A product catalogue with filtering, cart state and a checkout flow that stays readable on a phone.",
    stack: ["React", "Tailwind CSS"],
    repo: "https://github.com/Bouba0506/sneakers",
  },
  {
    img: barber,
    alt: "Barber shop website",
    title: "Barber shop",
    summary:
      "A booking-led site for a local barber: services, gallery, and a contact flow that gets people in the chair.",
    stack: ["Next.js", "Tailwind CSS"],
    repo: "https://github.com/Bouba0506/Barber_shop",
  },
  {
    img: medcine,
    alt: "Pharmacy website",
    title: "Pharmacy",
    summary:
      "A pharmacy storefront built around search: find a product fast, see whether it is in stock, and get directions.",
    stack: ["Next.js", "Tailwind CSS"],
    repo: "https://github.com/Bouba0506/pharmacie",
  },
  {
    img: disco,
    alt: "Ecommerce website",
    title: "Ecommerce",
    summary:
      "A website for a local ecommerce store: a product catalogue, a search bar, and a checkout flow that stays readable on a phone.",
    stack: ["Next.js", "Tailwind CSS"],
    repo: "https://github.com/Bouba0506/Novatrend",
  },
  {
    img: homepage,
    alt: "Homepage design",
    title: "Homepage",
    summary:
      "A modern homepage design for a fashion brand",
    stack: ["React.js", "Tailwind CSS"],
    repo: "#",
  },
  {
    img: rentaldesign,
    alt: "Rental design",
    title: "Rental Design",
    summary:
      "A modern rental website design for a rental agency ",
    stack: ["Next.js", "Tailwind CSS"],
    repo: "#",
  },
  {
    img: ecole,
    alt: "School website",
    title: "School Website",
    summary:
      "School Pro website for a teacher and student: a searchable database, a calendar, and a contact form.",
    stack: ["Next.js", "Tailwind CSS"],
    repo: "#PrivateRepo",
  },
  {
    img: systema,
    alt: "SystemaVending",
    title: "Systema Vending",
    summary:
      "A modern vending machine design for a startup in Morocco with a focus on accessibility and usability.",
    stack: ["React.js", "Tailwind CSS"],
    repo: "#PrivateRepo",
  },

];

const ProjectCard = ({ project, index, inView }) => {
  const cardRef = useRef(null);

  // Small pointer-following tilt. Kept subtle so the card still reads
  // as flat until you interact with it.
  const handleMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-py * 5}deg) rotateY(${px * 5}deg) translateY(-6px)`;
  }, []);

  const handleLeave = useCallback(() => {
    const el = cardRef.current;
    if (el) el.style.transform = "";
  }, []);

  return (
    <article
      className={cx("reveal", inView)}
      style={{ "--delay": `${index * 120}ms` }}
    >
      <div
        ref={cardRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className="panel group w-96 h-full overflow-hidden rounded-3xl transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-crimson/45 hover:shadow-[0_30px_70px_-30px_rgba(237,11,46,0.5)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.img}
            alt={project.alt}
            loading="lazy"
            className="h-full w-full object-cover brightness-[0.82] saturate-[0.75] transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:brightness-100 group-hover:saturate-100"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-raised via-ink-raised/25 to-transparent" />

          <div className="absolute bottom-4 left-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="mono rounded-full bg-ink/80 px-2.5 py-1 text-bone backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="display text-xl text-bone">{project.title}</h3>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-line text-bone-dim transition-all duration-300 hover:border-crimson hover:text-crimson"
            >
              <Github size={16} />
            </a>
          </div>
          <p className="text-sm leading-relaxed text-bone-dim">
            {project.summary}
          </p>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="mt-1 flex w-fit items-center gap-1.5 text-sm font-semibold text-crimson transition-colors hover:text-ember"
          >
            Read the code
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
};

const ProjectSect = () => {
  const [ref, inView] = useInView({ threshold: 0.08 });

  return (
    <section id="projects" className="relative px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          title="Selected work"
          lead="Three builds that show how I structure an interface, handle state, and keep a page fast. The code is open on GitHub."
        />

        <div ref={ref} className="mt-16  grid gap-10 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              inView={inView}
            />
          ))}

          {/* Completes the grid with somewhere real to go, rather than
              padding it out with a fourth tile. */}
          <a
            href="https://github.com/Bouba0506?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className={cx(
              "group flex min-h-[16rem] flex-col items-start justify-center gap-4 rounded-3xl border border-dashed border-ink-line p-8 transition-colors duration-300 hover:border-crimson/60 reveal",
              inView
            )}
            style={{ "--delay": "360ms" }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-line text-bone-dim transition-colors duration-300 group-hover:border-crimson group-hover:text-crimson">
              <Github size={20} />
            </span>
            <h3 className="display text-xl text-bone">
              Everything else is on GitHub
            </h3>
            <p className="max-w-[38ch] text-sm leading-relaxed text-bone-dim">
              Experiments, unfinished ideas, and the commit history behind the
              work above.
            </p>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-crimson transition-colors group-hover:text-ember">
              Browse the repositories
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSect;
