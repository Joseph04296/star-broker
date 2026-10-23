import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";
import { WHO_WE_SERVE } from "../data/site";
import { useSiteContent } from "../site/SiteContentContext";
import meetingImg from "../assets/people-meeting.jpg";
import starBg from "../assets/starbg.png";

export default function Home() {
  const { serviceCategories } = useSiteContent();

  return (
    <div>
      <Hero />

      {/* About Star */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="flex flex-col">
            <SectionHeading
              eyebrow="About Us"
              title="Protection Shouldn't Be a Guess."
              description="Insurance decisions can be complex. Star is positioned to help clients better understand their protection needs and explore solutions that fit their personal, business or organisational circumstances. Through insurance broking and advisory services, our focus is on helping clients move from uncertainty to clarity."
            />
            <Reveal delay={200}>
              <NavLink
                to="/about"
                className="group mt-10 inline-flex items-center gap-2.5 bg-brand text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-brand-dark transition-colors focus-ring"
              >
                Learn About Star
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </NavLink>
            </Reveal>
          </div>

          <Reveal className="relative z-10 rounded-2xl overflow-hidden shadow-lift">
            <img
              src={meetingImg}
              alt="A Star advisor meeting with a client"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* What We Help With */}
      <section className="bg-mist py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Insurance and Risk,"
            accent="Made Clearer."
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Who We Serve */}
      <section className="bg-charcoal py-20 md:py-28 relative overflow-hidden">
        <img
          src={starBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/85" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-light/50 to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="WHO WE SERVE"
            title="Protection for Every Stage of"
            accent="Life and Business."
            tone="dark"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_WE_SERVE.map((item, idx) => (
              <Reveal
                key={item.title}
                delay={idx * 100}
                className="group bg-white/[0.04] border border-white/10 rounded-2xl p-7 hover:bg-white/[0.07] transition-colors flex flex-col"
              >
                <span className="mb-5 inline-flex text-white">
                  <item.icon size={26} strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-lg text-white font-bold mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mist py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="eyebrow text-brand mb-4">READY WHEN YOU ARE</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-charcoal">
              A Clearer Path <span className="text-charcoal/70">to Protection.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-charcoal/65 max-w-xl mx-auto lg:mx-0">
              Tell us what you need, and our team will help you take the next step with confidence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 shrink-0">
            <NavLink
              to="/quote"
              className="group inline-flex items-center gap-2 bg-brand text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-brand-dark transition-colors focus-ring shadow-card"
            >
              Request a Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 border border-charcoal/20 text-charcoal font-semibold text-sm px-8 py-4 rounded-full hover:border-brand hover:text-brand transition-colors focus-ring"
            >
              Talk to an Advisor
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}