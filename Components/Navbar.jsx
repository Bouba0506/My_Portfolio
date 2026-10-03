import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

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

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const height = document.body.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section owns the middle of the viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Keep the page from scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-ink-line bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#home"
          className="display text-lg tracking-tight text-bone transition-colors hover:text-crimson"
        >
          Bah<span className="text-crimson">.</span>Dev
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-bone" : "text-bone-dim hover:text-bone"
                }`}
              >
                {item.name}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-gradient-to-r from-crimson to-ember transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-bone-dim transition-all duration-300 hover:border-crimson hover:text-crimson"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="z-50 text-bone md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Reading progress */}
      <div
        className="h-px origin-left bg-gradient-to-r from-crimson to-ember transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-2 bg-ink/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {navItems.map((item, i) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="display text-4xl text-bone transition-all duration-300 hover:text-crimson"
            style={{
              transitionDelay: isOpen ? `${i * 55}ms` : "0ms",
              transform: isOpen ? "none" : "translateY(14px)",
              opacity: isOpen ? 1 : 0,
            }}
          >
            {item.name}
          </a>
        ))}

        <div className="mt-10 flex items-center gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-line text-bone-dim transition-colors hover:border-crimson hover:text-crimson"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
