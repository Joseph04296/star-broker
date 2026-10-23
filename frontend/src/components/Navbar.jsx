import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { SITE } from "../data/site";
import { useSiteContent } from "../site/SiteContentContext";

function Logo({ onClick }) {
  return (
    <NavLink
      to="/"
      onClick={onClick}
      className="flex shrink-0 items-center gap-3 rounded focus-ring"
      aria-label={`${SITE.name} — home`}
    >
      <span className="leading-none">
        <span className="block font-display text-xl font-extrabold tracking-tight text-charcoal">
          Star
        </span>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.28em] text-brand">
          Insurance Brokers
        </span>
      </span>
    </NavLink>
  );
}

export default function Navbar() {
  const { site, serviceCategories } = useSiteContent();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white shadow-[0_1px_0_rgba(37,37,37,0.08),0_12px_32px_-16px_rgba(37,37,37,0.25)]"
          : "border-b border-charcoal/5 bg-white"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Logo onClick={() => setOpen(false)} />

        {/* Main navigation */}
        <nav className="hidden items-center gap-2 xl:flex">
          {serviceCategories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/services/${cat.id}`}
              className={({ isActive }) =>
                `rounded px-3 py-2 text-[15px] font-medium tracking-wide transition-colors focus-ring ${
                  isActive
                    ? "text-brand"
                    : "text-charcoal/80 hover:text-brand"
                }`
              }
            >
              {cat.label}
            </NavLink>
          ))}
          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `rounded px-3 py-2 text-[15px] font-medium tracking-wide transition-colors focus-ring ${
                isActive ? "text-brand" : "text-charcoal/80 hover:text-brand"
              }`
            }
          >
            Insights
          </NavLink>
        </nav>

        {/* Utility links */}
        <div className="hidden items-center gap-4 xl:flex">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[13px] font-medium transition-colors focus-ring ${
                isActive ? "text-brand" : "text-charcoal/60 hover:text-brand"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[13px] font-medium transition-colors focus-ring ${
                isActive ? "text-brand" : "text-charcoal/60 hover:text-brand"
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/quote"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-brand-dark focus-ring"
          >
            Get a Quote
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </NavLink>
        </div>

        <button
          className="rounded p-2 text-charcoal focus-ring xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-charcoal/10 bg-white px-5 pb-8 pt-2 xl:hidden">
          {serviceCategories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/services/${cat.id}`}
              className={({ isActive }) =>
                `border-b border-charcoal/5 py-3.5 text-base font-medium ${
                  isActive ? "text-brand" : "text-charcoal/80"
                }`
              }
            >
              {cat.label}
            </NavLink>
          ))}
          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `border-b border-charcoal/5 py-3.5 text-base font-medium ${
                isActive ? "text-brand" : "text-charcoal/80"
              }`
            }
          >
            Insights
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `border-b border-charcoal/5 py-3.5 text-base font-medium ${
                isActive ? "text-brand" : "text-charcoal/80"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="border-b border-charcoal/5 py-3.5 text-base font-medium text-charcoal/80"
          >
            Contact
          </NavLink>

          <NavLink
            to="/quote"
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-center text-sm font-semibold text-white"
          >
            Get a Quote <ArrowRight size={15} />
          </NavLink>
          <a
            href={site.phoneHref}
            className="mt-3 text-center text-sm font-medium text-charcoal/60"
          >
            {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
