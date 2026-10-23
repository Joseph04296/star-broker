import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSiteContent } from "../site/SiteContentContext";
import heroBg from "../assets/herobg.jpg";

export default function Hero() {
  const { heroSlides } = useSiteContent();
  const slide = heroSlides[0];
  const backgroundImages = [
    ...new Set([heroBg, ...heroSlides.map((item) => item.image)]),
  ]
    .filter(Boolean)
    .slice(0, 3);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (backgroundImages.length < 2) return undefined;

    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-[84vh] min-h-[560px] max-h-[860px] overflow-hidden bg-charcoal text-white">
      {backgroundImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          loading="eager"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === activeImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Lighter overlay than before so more of the image shows through. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl pb-16 sm:pb-20">
            <h1 className="max-w-2xl font-hero text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Helping protect what matters most
            </h1>

            <p className="mt-5 max-w-xl text-base leading-snug text-white/90 sm:mt-6 sm:text-lg md:text-xl">
              {slide.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
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
                className="inline-flex items-center gap-2.5 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-ring sm:px-7 sm:py-4"
              >
                {slide.cta2.label}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
