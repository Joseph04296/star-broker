import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useSiteContent } from "../site/SiteContentContext";

const ABOUT_LINKS = [
  { label: "About Star", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Insights", to: "/insights" },
  { label: "Contact Us", to: "/contact" },
];

const HELP_LINKS = [
  { label: "Get a Quote", to: "/quote" },
  { label: "Report a Claim", to: "/contact" },
  { label: "FAQs", to: "/insights" },
  { label: "Request Support", to: "/contact" },
];

export default function Footer() {
  const { site, serviceCategories } = useSiteContent();
  const services = serviceCategories.filter((cat) =>
    ["personal", "business"].includes(cat.id),
  );

  return (
    <footer className="relative overflow-hidden bg-charcoal text-white/70">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-light/50 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Services and their covers */}
          {services.map((cat) => (
            <div key={cat.id}>
              <NavLink
                to={`/services/${cat.id}`}
                className="text-sm font-semibold text-white transition-colors hover:text-brand-light"
              >
                {cat.label}
              </NavLink>
              <ul className="mt-3 space-y-2 text-sm">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={`/services/${cat.id}`}
                      className="text-white/55 transition-colors hover:text-white"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* About */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white">
              About
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {ABOUT_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className="text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white">
              Help Center
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className="text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white">
              Contacts
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-brand-light" />
                <a
                  href={site.phone2Href}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {site.phone2}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-brand-light" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-white/60 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-light" />
                <span className="text-white/60">
                  {site.address}
                  <br />
                  {site.city}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/35 md:flex-row md:px-8">
          <p>&copy; 2026 Star Insurance Brokers Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <NavLink to="#" className="transition-colors hover:text-white/60">
              Privacy Policy
            </NavLink>
            <NavLink to="#" className="transition-colors hover:text-white/60">
              Terms of Use
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
