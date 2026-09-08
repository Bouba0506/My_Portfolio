import { useInView, cx } from "@/hooks/useInView";

/**
 * Shared section heading: display title, a crimson rule that draws
 * itself on entry, and an optional lead paragraph.
 *
 * The rule carries the emphasis so the title itself stays a single
 * solid colour — no one-word highlight.
 */
const SectionHeading = ({ title, lead, id }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <div ref={ref} className="w-full max-w-3xl">
      <h2
        id={id}
        className={cx(
          "display text-[clamp(2.25rem,6vw,4rem)] text-bone wipe",
          inView
        )}
      >
        {title}
      </h2>
      <div
        className={cx(
          "mt-5 h-[3px] w-24 origin-left rounded-full bg-gradient-to-r from-crimson to-ember rule",
          inView
        )}
      />
      {lead && (
        <p
          className={cx("mt-6 max-w-[62ch] text-[0.975rem] leading-relaxed text-bone-dim reveal", inView)}
          style={{ "--delay": "220ms" }}
        >
          {lead}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
