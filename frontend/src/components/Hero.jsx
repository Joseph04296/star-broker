import { NavLink } from "react-router-dom";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { useSiteContent } from "../site/SiteContentContext";
import heroBg from "../assets/herobg.jpg";

export default function Hero() {
  const { site, heroSlides } = useSiteContent();
  const slide = heroSlides[0];

  return (
    <section className="relative overflow-hidden bg-mist">
      <div
        className="pointer-events-none absolute -left-40 -top-24 h-[520px] w-[520px] rounded-full bg-brand/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 bottom-0 h-[420px] w-[420px] rounded-full border border-brand/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/70">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {slide.eyebrow}
          </span>

          <h1 className="mt-7 font-hero text-4xl font-bold leading-[1.06] tracking-tight text-charcoal sm:text-5xl md:text-6xl">
            {slide.title[0]} <span className="text-brand">{slide.accent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">
            {slide.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <NavLink
              to={slide.cta.to}
              className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-ring sm:px-7 sm:py-4"
            >
              {slide.cta.label}
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </NavLink>
            <NavLink
              to={slide.cta2.to}
              className="inline-flex items-center gap-2.5 rounded-full border border-charcoal/20 px-6 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-brand hover:text-brand focus-ring sm:px-7 sm:py-4"
            >
              {slide.cta2.label}
            </NavLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-charcoal/55">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand" />
              Licensed insurance brokerage
            </span>
            <span className="h-1 w-1 rounded-full bg-charcoal/25" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-charcoal/40" />
              {site.city}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <div
            className="absolute -inset-3 rounded-[2.75rem] border border-brand/20 sm:-inset-4"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-3 -right-3 h-24 w-24 rounded-[1.75rem] bg-brand/10"
            aria-hidden="true"
          />

          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-lift sm:aspect-[4/3] lg:aspect-square">
            <img
              src={heroBg}
              alt="Protection for individuals and businesses in Malawi"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          <div className="absolute -left-4 bottom-6 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
              <ShieldCheck size={18} />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-bold text-charcoal">Licensed Broker</p>
              <p className="text-[11px] text-charcoal/55">Advice you can trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
