import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute h-[26rem] w-[26rem] rounded-full bg-crimson-deep/15 blur-[120px]"
    />
    <div className="relative">
      <p className="display bg-gradient-to-r from-crimson to-ember bg-clip-text text-[clamp(5rem,20vw,11rem)] text-transparent">
        404
      </p>
      <h1 className="display mt-2 text-3xl text-bone">
        This page does not exist
      </h1>
      <p className="mx-auto mt-4 max-w-[46ch] text-sm leading-relaxed text-bone-dim">
        The link may be out of date, or the address has a typo in it. The work
        and the contact form are both on the home page.
      </p>
      <Link
        to="/"
        className="group mt-9 inline-flex items-center gap-2 rounded-full bg-crimson px-7 py-3.5 text-sm font-semibold text-bone transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember"
      >
        <ArrowLeft
          size={16}
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
        Back to the portfolio
      </Link>
    </div>
  </section>
);

export default NotFound;
