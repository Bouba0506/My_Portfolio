import { ArrowUpRight } from "lucide-react";
import bouba from "@assets/images/bouba.webp";
import inst from "@assets/images/inst.png";
import faceb from "@assets/images/faceb.png";
import link from "@assets/images/link.png";
import what from "@assets/images/what.png";
import { useInView, cx } from "@/hooks/useInView";

const accounts = [
  {
    network: "Instagram",
    handle: "@bouba_bah224",
    logo: inst,
    href: "https://www.instagram.com/bouba_bah224/",
  },
  {
    network: "LinkedIn",
    handle: "Boubacar Bah",
    logo: link,
    href: "https://www.linkedin.com/in/boubacar-bah-a5b849278/",
  },
  {
    network: "Facebook",
    handle: "Bouba Bah",
    logo: faceb,
    href: "https://www.facebook.com/profile.php?id=100004883298025",
  },
  {
    network: "WhatsApp",
    handle: "+212 695 632 657",
    logo: what,
    href: "https://wa.me/212695632657",
  },
];

const FoundMe = () => {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <div className="mt-24">
      <h3 className="display text-center text-2xl text-bone">
        Wherever you prefer to talk
      </h3>

      <div
        ref={ref}
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {accounts.map((account, i) => (
          <a
            key={account.network}
            href={account.href}
            target="_blank"
            rel="noreferrer"
            className={cx(
              "panel panel-hover group flex items-center gap-3 rounded-2xl p-4 reveal",
              inView
            )}
            style={{ "--delay": `${i * 100}ms` }}
          >
            <span className="relative shrink-0">
              <img
                src={bouba}
                alt=""
                loading="lazy"
                className="h-11 w-11 rounded-full bg-crimson-deep/25 object-cover object-[50%_38%] ring-1 ring-ink-line"
              />
              <img
                src={account.logo}
                alt=""
                loading="lazy"
                className="absolute -right-1 -bottom-1 h-5 w-5 rounded-full bg-ink object-contain p-px ring-1 ring-ink-line"
              />
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-bone">
                {account.network}
              </span>
              <span className="mono block truncate text-bone-dim">
                {account.handle}
              </span>
            </span>

            <ArrowUpRight
              size={16}
              className="shrink-0 text-bone-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-crimson"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FoundMe;
