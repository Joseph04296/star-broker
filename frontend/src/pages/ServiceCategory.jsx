import { Navigate, NavLink, useParams } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { useSiteContent } from "../site/SiteContentContext";

export default function ServiceCategory() {
  const { categoryId } = useParams();
  const { serviceCategories } = useSiteContent();

  const cat = serviceCategories.find((c) => c.id === categoryId);

  // Unknown / stale id — send the visitor back to the services index
  // rather than showing an empty page.
  if (!cat) return <Navigate to="/services" replace />;

  const items = cat.items || [];

  return (
    <div>
      {/* Category switcher — lets visitors move between the three
          categories without going back to the services index. */}
      {serviceCategories.length > 1 && (
        <div className="sticky top-[76px] z-40 border-b border-charcoal/10 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/45 mr-2">
              Categories
            </span>
            {serviceCategories.map((c) => (
              <NavLink
                key={c.id}
                to={`/services/${c.id}`}
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-colors focus-ring ${
                    isActive
                      ? "bg-brand text-white"
                      : "text-charcoal/65 border border-charcoal/15 hover:border-brand/50 hover:text-brand"
                  }`
                }
              >
                {c.id === cat.id && <ShieldCheck size={14} />}
                {c.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Page header */}
      <section className="pt-14 pb-12 md:pt-20 md:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <span className="eyebrow text-brand mb-5">{cat.label}</span>
            <h1 className="font-display font-bold text-3xl md:text-5xl leading-[1.08] tracking-tight text-charcoal">
              {cat.tagline}
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-charcoal/65 max-w-2xl">
              {cat.intro}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            {cat.image ? (
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full aspect-[4/3] object-cover"
                loading="eager"
              />
            ) : (
              <ImagePlaceholder
                label={`Add a photo for ${cat.label}`}
                aspect="aspect-[4/3]"
              />
            )}
          </div>
        </div>
      </section>

      {/* Covers in this category */}
      <section className="py-16 md:py-24 bg-mist">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="Cover Options"
            title="Every cover in"
            accent={`${cat.label}.`}
            description={`We arrange the following ${cat.label.toLowerCase()} covers on your behalf, comparing terms across Malawi's insurers so you can choose with confidence.`}
            className="mb-14"
          />

          <div className="space-y-16 md:space-y-20">
            {items.map((item, idx) => {
              const Icon = item.icon;
              const flipped = idx % 2 === 1;

              return (
                <Reveal key={item.name}>
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Image */}
                    <div className={flipped ? "lg:order-2" : ""}>
                      {item.image ? (
                        <div className="rounded-2xl overflow-hidden shadow-card">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full aspect-[4/3] object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <ImagePlaceholder
                          label={`Add a photo for ${item.name}`}
                          aspect="aspect-[4/3]"
                        />
                      )}
                    </div>

                    {/* Detail */}
                    <div className={flipped ? "lg:order-1" : ""}>
                      <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                        {Icon && <Icon size={16} strokeWidth={1.75} />}
                        {cat.label}
                      </span>

                      <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-4">
                        {item.name}
                      </h3>

                      <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-7">
                        {item.desc}
                      </p>

                      {item.benefits?.length > 0 && (
                        <>
                          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/50 mb-4">
                            What's typically included
                          </h4>
                          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                            {item.benefits.map((b) => (
                              <li
                                key={b}
                                className="flex items-start gap-3 text-sm text-charcoal/75"
                              >
                                <Check size={16} className="text-brand shrink-0 mt-0.5" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {item.who && (
                        <p className="text-sm text-charcoal/60 leading-relaxed border-l-2 border-brand/40 pl-4 mb-8">
                          <span className="font-semibold text-charcoal/80">Who it's for: </span>
                          {item.who}
                        </p>
                      )}

                      <NavLink
                        to={`/quote?type=${encodeURIComponent(item.name)}`}
                        className="group inline-flex items-center gap-2.5 bg-brand text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-brand-dark transition-colors focus-ring"
                      >
                        Request a Quote
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </NavLink>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <SectionHeading
            eyebrow="Not Sure Where to Start?"
            title="Tell us what you need"
            accent="and we'll point you right."
            description="A short conversation is often enough. We'll ask about what you're protecting, who needs cover, and what matters most — then come back with options compared across insurers."
          />
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <NavLink
              to="/quote"
              className="group inline-flex items-center gap-2 bg-brand text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-brand-dark transition-colors focus-ring"
            >
              Request a Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 border border-charcoal/20 text-charcoal font-semibold text-sm px-7 py-4 rounded-full hover:border-brand hover:text-brand transition-colors focus-ring"
            >
              Talk to an Advisor
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
