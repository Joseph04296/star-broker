import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PageHero({
  title,
  accent,
  image,
  cta = { to: "/quote", label: "Request a Quote" },
}) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-white">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          loading="eager"
        />
      )}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/50 to-black/20"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[380px] max-w-7xl items-center px-5 py-16 md:min-h-[460px] md:px-8 md:py-24">
        <div className="flex w-full flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h1 className="max-w-3xl font-hero text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {title}
            {accent && <span className="text-brand-light"> {accent}</span>}
          </h1>

          {cta && (
            <NavLink
              to={cta.to}
              className="group inline-flex shrink-0 items-center gap-2.5 self-start rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-ring sm:px-7 sm:py-4 md:self-auto"
            >
              {cta.label}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </NavLink>
          )}
        </div>
      </div>
    </section>
  );
}
