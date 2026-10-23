import { Navigate, NavLink, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import QuoteCTA from "../components/QuoteCTA";
import { useSiteContent } from "../site/SiteContentContext";

const CATEGORY_COPY = {
  personal: {
    title: "Personal insurance, made simple.",
    body: "Cover for you, your family and the things you own — arranged around your needs and budget.",
    productsBody:
      "The personal risk landscape is evolving rapidly and no two clients are alike. We carefully assess your individual risk exposures to provide customised personal insurance coverages to help prevent loss — and cover it if it occurs.",
  },
  business: {
    title: "Business cover built around you.",
    body: "Protection for your premises, people and liabilities — tailored to how your business operates.",
    productsBody:
      "Every business carries its own mix of risk. We assess your premises, people, operations and liabilities to provide customised commercial insurance coverages that help prevent loss — and cover it if it occurs.",
  },
  benefits: {
    title: "Employee benefits for your team.",
    body: "Group medical and group life cover that supports your people and keeps your organisation moving.",
    productsBody:
      "Your people are your most valuable asset and every workforce is different. We assess your team's needs to arrange group medical and group life schemes that support their wellbeing and your organisation's continuity.",
  },
};

export default function ServiceCategory() {
  const { categoryId } = useParams();
  const { serviceCategories } = useSiteContent();

  const cat = serviceCategories.find((c) => c.id === categoryId);

  // Unknown / stale id — send the visitor back to the services index
  // rather than showing an empty page.
  if (!cat) return <Navigate to="/services" replace />;

  const items = cat.items || [];
  const copy = CATEGORY_COPY[cat.id] || {
    title: cat.tagline,
    body: cat.intro,
    productsBody: cat.intro,
  };

  const collage = [
    ...new Set([cat.image, ...items.map((item) => item.image)].filter(Boolean)),
  ].slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-charcoal text-white">
        {cat.image && (
          <img
            src={cat.image}
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

        <div className="mx-auto flex min-h-[420px] max-w-7xl items-center px-5 py-16 md:min-h-[520px] md:px-8 md:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow mb-5 inline-block text-brand-light">
              {cat.label}
            </span>
            <h1 className="font-hero text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              {copy.body}
            </p>
            <NavLink
              to="/quote"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-ring"
            >
              Get a Quote
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Products and services */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-charcoal md:text-5xl">
              Products and services{" "}
              <span className="text-charcoal/60">
                to cover what matters most.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/65 md:text-lg">
              {copy.productsBody}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <NavLink
                      to={`/quote?type=${encodeURIComponent(item.name)}`}
                      className="group flex items-center gap-3.5 rounded-xl border border-charcoal/10 bg-white px-4 py-3.5 transition-all hover:border-brand/40 hover:shadow-card focus-ring"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal text-white">
                        {Icon && <Icon size={18} strokeWidth={1.75} />}
                      </span>
                      <span className="flex-1 text-sm font-semibold text-charcoal transition-colors group-hover:text-brand">
                        {item.name}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="text-charcoal/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                      />
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {collage.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {collage[0] && (
                <div className="col-span-2 overflow-hidden rounded-2xl shadow-card">
                  <img
                    src={collage[0]}
                    alt=""
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              {collage.slice(1, 3).map((img) => (
                <div
                  key={img}
                  className={`overflow-hidden rounded-2xl shadow-card ${
                    collage.length === 2 ? "col-span-2" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className={`w-full object-cover ${
                      collage.length === 2 ? "aspect-[16/9]" : "aspect-square"
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <QuoteCTA
        image={cat.image}
        eyebrow="NOT SURE WHERE TO START?"
        title="Tell us what you need"
        accent="and we'll point you right."
        body="A short conversation is often enough. We'll ask about what you're protecting, who needs cover and what matters most — then come back with options compared across insurers."
      />
    </div>
  );
}
