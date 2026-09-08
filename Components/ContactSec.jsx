import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook } from "lucide-react";
import FoundMe from "./FoundMe";
import SectionHeading from "./SectionHeading";
import { useInView, cx } from "@/hooks/useInView";

const details = [
  {
    Icon: Mail,
    label: "Email",
    value: "Bouba.Sisu@proton.me",
    href: "mailto:Bouba.Sisu@proton.me",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+212 695 632 657",
    href: "https://wa.me/212695632657",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "1465 Tilila, Agadir, Morocco",
  },
];

const socials = [
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

const fieldClass =
  "w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-bone placeholder:text-bone-dim/50 transition-colors duration-300 focus:border-crimson focus:outline-none";

const ContactSec = () => {
  const [infoRef, infoInView] = useInView({ threshold: 0.15 });
  const [formRef, formInView] = useInView({ threshold: 0.15 });

  return (
    <section id="contact" className="relative px-6 py-24 md:px-16 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-crimson-deep/12 blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <SectionHeading
          title="Get in touch"
          lead="Have a project, a role, or a rough idea you want a second opinion on? Send it over. I answer every message."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Details */}
          <div ref={infoRef} className="flex flex-col gap-5">
            {details.map(({ Icon, label, value, href }, i) => {
              const Row = href ? "a" : "div";
              return (
                <Row
                  key={label}
                  {...(href
                    ? {
                        href,
                        target: href.startsWith("http") ? "_blank" : undefined,
                        rel: href.startsWith("http") ? "noreferrer" : undefined,
                      }
                    : {})}
                  className={cx(
                    "panel panel-hover group flex items-center gap-4 rounded-2xl p-5 reveal",
                    infoInView
                  )}
                  style={{ "--delay": `${i * 110}ms` }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-line bg-ink text-crimson transition-colors duration-300 group-hover:border-crimson/50 group-hover:text-ember">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="mono block text-bone-dim">{label}</span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-bone">
                      {value}
                    </span>
                  </span>
                </Row>
              );
            })}

            <div
              className={cx("mt-4 reveal", infoInView)}
              style={{ "--delay": "340ms" }}
            >
              <h3 className="text-sm font-semibold text-bone">
                Find me elsewhere
              </h3>
              <div className="mt-3 flex items-center gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-line text-bone-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson hover:text-crimson"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            ref={formRef}
            className={cx("panel rounded-3xl p-7 sm:p-9 reveal", formInView)}
            style={{ "--delay": "140ms" }}
          >
            <h3 className="display text-2xl text-bone">Send a message</h3>
            <p className="mt-2 text-sm text-bone-dim">
              Tell me what you are building and when you need it.
            </p>

            <form
              action="https://formspree.io/f/mrbkljrn"
              method="POST"
              className="mt-7 flex flex-col gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-medium text-bone-dim"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Amina Ouali"
                    className={fieldClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-medium text-bone-dim"
                  >
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="amina@example.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-medium text-bone-dim"
                >
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="A short brief, a timeline, a link to something you like."
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-crimson px-7 py-3.5 text-sm font-semibold text-bone transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember"
              >
                Send message
                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>
            </form>
          </div>
        </div>

        <FoundMe />
      </div>
    </section>
  );
};

export default ContactSec;
