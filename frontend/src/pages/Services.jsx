import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { IMAGES } from "../data/site";
import { useSiteContent } from "../site/SiteContentContext";

export default function Services() {
  const { serviceCategories } = useSiteContent();

  return (
    <div>
      <PageHero
        title="Cover, compared and"
        accent="arranged for you."
        description="As brokers we don't sell our own policies. We compare across Malawi's insurers to find the right fit for your risk and your budget — then stand with you through renewals and claims."
        image={IMAGES.broker}
      />

      {/* Insurance Solutions — category cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="Insurance Solutions"
            title="Explore our cover,"
            accent="by category."
            description="Choose a category to see the cover types we arrange and who each one is suited for."
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat, idx) => (
              <Reveal
                key={cat.id}
                delay={idx * 100}
                className="group bg-white rounded-2xl overflow-hidden border border-charcoal/10 hover:shadow-lift hover:border-brand/40 transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {cat.image ? (
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-mist" />
                  )}
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display text-xl text-charcoal font-bold mb-3">
                    {cat.label}
                  </h3>
                  <p className="text-charcoal/65 text-sm leading-relaxed mb-6 flex-1">
                    {cat.tagline}
                  </p>

                  <ul className="space-y-2 mb-7">
                    {(cat.items || []).slice(0, 3).map((item) => (
                      <li
                        key={item.name}
                        className="text-sm text-charcoal/60 flex items-center gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                        {item.name}
                      </li>
                    ))}
                    {(cat.items || []).length > 3 && (
                      <li className="text-sm text-charcoal/45 pl-4">
                        + {(cat.items || []).length - 3} more
                      </li>
                    )}
                  </ul>

                  <NavLink
                    to={`/services/${cat.id}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all mt-auto"
                  >
                    Learn more
                    <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1" />
                  </NavLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why broker */}
      <section className="bg-mist py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <SectionHeading
              eyebrow="Why Use a Broker"
              title="Same market. Better view."
              description="Insurers' terms differ — sometimes by a lot. A broker reads every word so you don't have to, and shows you the options side by side."
            />
            <div className="space-y-5">
              {[
                { title: "One source for the whole market", body: "We compare across 20+ insurers rather than a single company's shelves." },
                { title: "Advice that costs you nothing", body: "Brokers are paid by the insurer, so the premium you're quoted is the premium you'd pay direct." },
                { title: "A single point of contact", body: "One number for new cover, renewals, mid-term changes and claims — forever." },
              ].map((it, idx) => (
                <Reveal key={it.title} delay={idx * 90} className="group bg-white border border-charcoal/10 rounded-2xl p-6 flex gap-5 hover:shadow-card transition-all">
                  <span className="font-display text-3xl font-light text-brand/60 w-10 shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-charcoal font-bold mb-1">{it.title}</h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed">{it.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
