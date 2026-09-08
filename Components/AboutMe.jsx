import { Code2, LayoutTemplate, Workflow, Download, MessageSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useInView, cx } from "@/hooks/useInView";

const roles = [
  {
    Icon: Code2,
    title: "Web developer",
    body: "Responsive, accessible, fast web applications built with modern frameworks and no wasted bytes.",
  },
  {
    Icon: LayoutTemplate,
    title: "Front-end engineer",
    body: "Scalable interfaces in React and Next.js, with clean component boundaries and code other people can read.",
  },
  {
    Icon: Workflow,
    title: "Project delivery",
    body: "Taking a project from first sketch to production, and keeping everyone informed along the way.",
  },
];

const downloadCv = (url) => {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", url.split("/").pop());
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const AboutMe = () => {
  const [bodyRef, bodyInView] = useInView({ threshold: 0.15 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.15 });

  return (
    <section id="about" className="relative px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          title="About me"
          lead="Three years of turning designs into interfaces that hold up on real devices and real connections."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Bio */}
          <div ref={bodyRef}>
            <h3
              className={cx(
                "display text-2xl text-bone reveal",
                bodyInView
              )}
            >
              I care about the part users actually touch.
            </h3>
            <p
              className={cx(
                "mt-6 max-w-[62ch] leading-relaxed text-bone-dim reveal",
                bodyInView
              )}
              style={{ "--delay": "120ms" }}
            >
              Over three years in web development I have specialised in
              responsive, accessible, performant applications. A page that looks
              right but takes six seconds to load is a page that failed, so I
              treat speed and accessibility as part of the design, not a pass at
              the end.
            </p>
            <p
              className={cx(
                "mt-5 max-w-[62ch] leading-relaxed text-bone-dim reveal",
                bodyInView
              )}
              style={{ "--delay": "220ms" }}
            >
              What keeps me here is the problem-solving: finding the simple,
              elegant answer to a messy requirement. I keep learning new tools
              and revisiting old habits, because the web moves and standing
              still is a choice.
            </p>

            <div
              className={cx(
                "mt-9 flex flex-col gap-3 sm:flex-row reveal",
                bodyInView
              )}
              style={{ "--delay": "320ms" }}
            >
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-bone transition-transform duration-300 hover:-translate-y-0.5"
              >
                <MessageSquare size={16} />
                Let us talk
              </a>
              <button
                type="button"
                onClick={() => downloadCv("/Cv_campus.pdf")}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-ink-line px-6 py-3 text-sm font-semibold text-bone transition-colors duration-300 hover:border-crimson hover:text-crimson"
              >
                <Download size={16} />
                Download CV
              </button>
            </div>
          </div>

          {/* Roles */}
          <div ref={cardsRef} className="flex flex-col gap-4">
            {roles.map(({ Icon, title, body }, i) => (
              <article
                key={title}
                className={cx(
                  "panel panel-hover group flex gap-5 rounded-2xl p-6 reveal",
                  cardsInView
                )}
                style={{ "--delay": `${i * 130}ms` }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-line bg-ink text-crimson transition-colors duration-300 group-hover:border-crimson/50 group-hover:text-ember">
                  <Icon size={19} />
                </span>
                <div>
                  <h4 className="display text-lg text-bone">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-bone-dim">
                    {body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
