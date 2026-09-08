import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Tracks the user's reduced-motion preference.
 *
 * The CSS in index.css already neutralises every stylesheet animation.
 * This hook is for the motion CSS cannot reach: JS-driven animation from
 * libraries, which has to be skipped at the render level instead.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia?.(QUERY).matches
  );

  useEffect(() => {
    const mql = window.matchMedia?.(QUERY);
    if (!mql) return;

    const onChange = (e) => setReduced(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
