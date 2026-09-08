import { useEffect, useRef, useState } from "react";

/**
 * Adds `is-visible` once the element scrolls into view.
 *
 * Returns [ref, inView]. Spread the ref onto any element carrying a
 * `.reveal` / `.wipe` / `.rule` class, then append `is-visible` when
 * `inView` is true.
 *
 * `once` (default) unobserves after the first hit so scrolling back up
 * doesn't replay the entrance.
 */
export function useInView({ threshold = 0.2, rootMargin = "0px 0px -10% 0px", once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (or a very old browser): show everything.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}

/** Convenience: `cx("reveal", inView)` -> "reveal is-visible" */
export const cx = (base, inView) => `${base}${inView ? " is-visible" : ""}`;
