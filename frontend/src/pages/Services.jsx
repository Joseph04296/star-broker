import { NavLink } from "react-router-dom";
import { ArrowRight, BadgeCheck, Scale, Search } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import QuoteCTA from "../components/QuoteCTA";
import StatsBand from "../components/StatsBand";
import Reveal from "../components/Reveal";
import { useSiteContent } from "../site/SiteContentContext";
import familyImg from "../assets/family.jpg";

const REASONS = [
  {
    icon: Search,
    title: "One source for the whole market",
    body: "We compare across 20+ insurers rather than a single company's shelves.",
  },
  {
    icon: Scale,
    title: "Advice that costs you nothing",
    body: "Brokers are paid by the insurer, so the premium you're quoted is the premium you'd pay direct.",
  },
  {
    icon: BadgeCheck,
    title: "A single point of contact",
    body: "One number for new cover, renewals, mid-term changes and claims — forever.",
  },
];

export default function Services() {
  const { serviceCategories } = useSiteContent();

  return (
    <div>
      <PageHero
        title="Cover, compared and"
        accent="arranged for you."
        image={familyImg}
        cta={{ to: "/quote", label: "Get a Quote" }}
      />

      {/* Products and services */}
      <section className="overflow-hidden bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Products and services"
            accent="to cover what matters most."
            description="The risk landscape is always changing and no two clients are alike. We assess your individual needs to arrange cover tailored to what you're protecting."
            className="mb-14"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat, idx) => (
              <Reveal key={cat.id} delay={idx * 100}>
                <ServiceCard
                  to={`/services/${cat.id}`}
                  title={cat.label}
                  summary={cat.intro}
                  image={cat.image}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All cover options */}
      <section className="bg-mist py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="ALL COVER OPTIONS"
            title="Find the cover"
            accent="that fits."
            description="Browse every cover we arrange, grouped by category. Not sure which one you need? Talk to us and we'll point you in the right direction."
            className="mb-14"
          />

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {serviceCategories.map((cat) => (
              <div key={cat.id}>
                <h3 className="font-display text-lg font-bold text-charcoal">
                  {cat.label}
                </h3>

                <ul className="mt-4 divide-y divide-charcoal/10 border-y border-charcoal/10">
                  {cat.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name}>
                        <NavLink
                          to={`/services/${cat.id}`}
                          className="group flex items-center justify-between gap-3 py-3.5 text-sm text-charcoal/70 transition-colors hover:text-brand focus-ring"
                        >
                          <span className="flex items-center gap-2.5">
                            {Icon && <Icon size={16} className="shrink-0 text-brand" />}
                            {item.name}
                          </span>
                          <ArrowRight
                            size={14}
                            className="shrink-0 opacity-40 transition-transform group-hover:translate-x-1 group-hover:opacity-100"
                          />
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>

                <NavLink
                  to={`/services/${cat.id}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all hover:gap-2.5 focus-ring"
                >
                  View all {cat.label.toLowerCase()}
                  <ArrowRight size={14} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Star */}
      <section className="relative overflow-hidden bg-charcoal py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="WHY STAR"
              title="Raise your expectations."
              accent="We're here to meet them."
              description="As a licensed broker, we put the market on your side — comparing terms, explaining the detail and standing with you when it matters."
              tone="dark"
            />

            <div className="space-y-4">
              {REASONS.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <Reveal
                    key={reason.title}
                    delay={idx * 90}
                    className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-light">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {reason.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-12">
            <StatsBand />
          </div>
        </div>
      </section>

      <QuoteCTA image={familyImg} />
    </div>
  );
}
