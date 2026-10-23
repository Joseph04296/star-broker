import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function QuoteCTA({
  image,
  eyebrow = "GET A QUOTE",
  title = "Get cover that fits",
  accent = "your unique needs.",
  body = "For individuals and businesses, Star provides risk guidance, cover tailored to your needs and support through claims. Get your quote today.",
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        {image && (
          <Reveal className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={image}
              alt=""
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        )}

        <div>
          <span className="eyebrow mb-4 inline-block text-brand">{eyebrow}</span>
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-charcoal md:text-5xl">
            {title} <span className="text-charcoal/60">{accent}</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/65 md:text-lg">
            {body}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink
              to="/quote"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-colors hover:bg-brand-dark focus-ring"
            >
              Request a Quote
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-7 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-brand hover:text-brand focus-ring"
            >
              Talk to an Advisor
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
