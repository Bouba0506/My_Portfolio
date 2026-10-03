import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react";

const navigation = [
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
  {
    Icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100004883298025",
    label: "Facebook",
  },
];

const contact = [
  {
    Icon: Mail,
    value: "Bouba.Sisu@proton.me",
    href: "mailto:Bouba.Sisu@proton.me",
  },
  { Icon: Phone, value: "+212 695 632 657", href: "https://wa.me/212695632657" },
  { Icon: MapPin, value: "Agadir, Morocco" },
];

const Footer = () => (
  <footer className="relative border-t border-ink-line bg-ink-raised/40">
    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-16">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <a
            href="#home"
            className="display text-2xl text-bone transition-colors hover:text-crimson"
          >
            Bah<span className="text-crimson">.</span>Dev
          </a>
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-bone-dim">
            Front-end developer in Agadir, building fast and accessible
            interfaces with React, Next.js and Tailwind CSS.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-bone-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson hover:text-crimson"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-bone">Navigate</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm text-bone-dim transition-colors duration-300 hover:text-crimson"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-semibold text-bone">Contact</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {contact.map(({ Icon, value, href }) => (
              <li key={value} className="flex items-center gap-2.5">
                <Icon size={15} className="shrink-0 text-crimson" />
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-bone-dim transition-colors duration-300 hover:text-crimson"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-sm text-bone-dim">{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-line pt-7 sm:flex-row">
        <p className="mono text-bone-dim">
          Built by Boubacar Bah &copy; {new Date().getFullYear()}
        </p>
        <a
          href="#home"
          className="group flex items-center gap-2 text-sm text-bone-dim transition-colors duration-300 hover:text-crimson"
        >
          Back to top
          <ArrowUp
            size={15}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
