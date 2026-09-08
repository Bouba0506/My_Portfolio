import { useCallback, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Instagram, ArrowDown } from "lucide-react";
import bouba from "@assets/images/bouba.webp";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const socials = [
  { Icon: Github, href: "https://github.com/Bouba0506", label: "GitHub" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/boubacar-bah-a5b849278/",
    label: "LinkedIn",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/bouba_bah224/",
    label: "Instagram",
  },
];

const stats = [
  { value: 3, suffix: "+", label: "Years building for the web" },
  { value: 30, suffix: "+", label: "Collaborations" },
  { value: 20, suffix: "", label: "Projects shipped" },
];

const Stat = ({ value, suffix, label, start }) => {
  const shown = useCountUp(value, start);
  return (
    <div className="flex flex-col gap-1">
      <span className="display text-4xl text-bone tabular-nums">
        {shown}
        <span className="text-crimson">{suffix}</span>
      </span>
      <span className="text-xs leading-snug text-bone-dim">{label}</span>
    </div>
  );
};

// The four corner handles of the portrait selection frame.
const Handle = ({ className, delay }) => (
  <span
    className={`absolute h-2.5 w-2.5 border border-crimson bg-ink anim-tick ${className}`}
    style={{ "--delay": delay }}
  />
);

const taglines = [
  "React and Next.js interfaces",
  "accessible by default",
  "built from Agadir, Morocco",
];

const Hero = () => {
  const glowRef = useRef(null);
  const [statsRef, statsInView] = useInView({ threshold: 0.5 });
  const reducedMotion = usePrefersReducedMotion();

  // Pointer-tracked glow. Written straight to CSS vars so React never
  // re-renders on mousemove.
  const handlePointer = useCallback((e) => {
    const el = glowRef.current;
    if (!el) return;
    const { left, top } = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - left}px`);
    el.style.setProperty("--my", `${e.clientY - top}px`);
  }, []);

  return (
    <section
      id="home"
      ref={glowRef}
      onPointerMove={handlePointer}
      className="relative overflow-hidden px-6 pt-28 pb-20 md:px-16 md:pt-36 md:pb-16"
    >
      {/* Pointer glow, decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(440px circle at var(--mx, 72%) var(--my, 28%), rgba(237,11,46,0.14), transparent 70%)",
        }}
      />
      {/* Standing wash behind the portrait side. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[36rem] w-[36rem] rounded-full bg-crimson-deep/20 blur-[130px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Text column */}
        <div className="order-2 lg:order-1">
          <h1 className="display">
            <span
              className="anim-rise block text-[clamp(2.75rem,7vw,4.75rem)] text-bone"
              style={{ "--delay": "120ms" }}
            >
              Boubacar Bah
            </span>
            {/* w-fit keeps the gradient box hugging the text, otherwise
                the ember stop falls past the last glyph and the line
                reads as flat crimson. */}
            <span
              className="anim-rise mt-1 block w-fit bg-gradient-to-r from-crimson via-[#ff2f4b] to-ember bg-clip-text text-[clamp(1.6rem,3.6vw,2.6rem)] text-transparent"
              style={{ "--delay": "260ms" }}
            >
              front-end developer
            </span>
          </h1>

          <p
            className="mono anim-rise mt-6 flex min-h-6 items-center text-ember"
            style={{ "--delay": "420ms" }}
          >
            <span className="mr-2 text-crimson">{"//"}</span>
            {/* The typing effect is JS-driven, so the reduced-motion CSS
                cannot stop it. Skip it at render instead. */}
            {reducedMotion ? (
              <span>{taglines[0]}</span>
            ) : (
              <>
                <TypeAnimation
                  sequence={taglines.flatMap((line) => [line, 2200])}
                  wrapper="span"
                  speed={65}
                  repeat={Infinity}
                  cursor={false}
                />
                <span className="caret ml-1 inline-block h-3.5 w-[7px] bg-ember" />
              </>
            )}
          </p>

          <p
            className="anim-rise mt-8 max-w-[56ch] text-[0.975rem] leading-relaxed text-bone-dim"
            style={{ "--delay": "540ms" }}
          >
            I build modern, high-performance interfaces for the people who
            actually use them: responsive, accessible, and quick on a slow
            connection. Clean code, honest collaboration, and a bias for
            shipping.
          </p>

          <div
            className="anim-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ "--delay": "660ms" }}
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-crimson px-7 py-3.5 text-sm font-semibold text-bone transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Start a project</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-crimson-deep to-ember transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#projects"
              className="rounded-full border border-ink-line px-7 py-3.5 text-sm font-semibold text-bone transition-colors duration-300 hover:border-crimson hover:text-crimson"
            >
              See the work
            </a>

            <div className="flex items-center gap-2.5 sm:ml-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-bone-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson hover:text-crimson"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="anim-rise mt-14 grid grid-cols-3 gap-6 border-t border-ink-line pt-8"
            style={{ "--delay": "780ms" }}
          >
            {stats.map((s) => (
              <Stat key={s.label} {...s} start={statsInView} />
            ))}
          </div>
        </div>

        {/* Portrait, framed as a selected object.
            The entrance and the idle drift live on separate elements:
            two `animation` shorthands on one element cancel out. */}
        <div className="order-1 mx-auto w-full max-w-[15rem] sm:max-w-[18rem] lg:order-2 lg:max-w-[24rem]">
          <div className="anim-frame" style={{ "--delay": "300ms" }}>
            <div className="anim-drift relative">
              {/* Selection outline */}
              <div className="pointer-events-none absolute -inset-4 border border-crimson/45 sm:-inset-5" />

              <Handle
                className="-top-[1.3rem] -left-[1.3rem] sm:-top-[1.55rem] sm:-left-[1.55rem]"
                delay="900ms"
              />
              <Handle
                className="-top-[1.3rem] -right-[1.3rem] sm:-top-[1.55rem] sm:-right-[1.55rem]"
                delay="980ms"
              />
              <Handle
                className="-bottom-[1.3rem] -left-[1.3rem] sm:-bottom-[1.55rem] sm:-left-[1.55rem]"
                delay="1060ms"
              />
              <Handle
                className="-bottom-[1.3rem] -right-[1.3rem] sm:-bottom-[1.55rem] sm:-right-[1.55rem]"
                delay="1140ms"
              />

              {/* Layer name, the way a design tool labels a selection */}
              <span
                className="mono anim-tick absolute -top-4 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson px-3 py-1 whitespace-nowrap text-bone sm:-top-5"
                style={{ "--delay": "1220ms" }}
              >
                boubacar.bah
              </span>

              {/* The source is already cut out, so he stands free on the
                  page. A pool of light behind him does the grounding that
                  a card background would otherwise have to do. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-2 top-[22%] bottom-[6%] rounded-[50%] bg-crimson/25 blur-[55px]"
              />
              <div className="relative aspect-[4/5] w-full">
                <img
                  src={bouba}
                  alt="Boubacar Bah"
                  width="440"
                  height="566"
                  className="portrait-fade h-full w-full object-contain object-bottom"
                />
              </div>

              {/* Status readout */}
              <span
                className="mono anim-tick absolute -bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-ink px-3 py-1 whitespace-nowrap text-bone-dim ring-1 ring-ink-line sm:-bottom-5"
                style={{ "--delay": "1300ms" }}
              >
                available for work
              </span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="anim-rise mx-auto mt-8 hidden w-fit items-center gap-2 text-bone-dim transition-colors hover:text-crimson md:flex"
        style={{ "--delay": "1400ms" }}
      >
        <span className="mono">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
