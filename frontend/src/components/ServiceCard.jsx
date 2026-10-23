import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({
  to,
  title,
  summary,
  image,
  aspect = "aspect-[4/5]",
}) {
  return (
    <NavLink
      to={to}
      className="group relative block overflow-hidden rounded-2xl bg-charcoal focus-ring"
    >
      <div className={aspect}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-charcoal-light" />
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-white p-5 md:p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-lg font-bold leading-tight text-charcoal md:text-xl">
            {title}
          </h3>
          <ArrowUpRight
            size={20}
            className="shrink-0 text-charcoal transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>

        {summary && (
          <div className="max-h-48 overflow-hidden opacity-100 transition-all duration-500 ease-out lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-48 lg:group-hover:opacity-100 lg:group-focus-visible:max-h-48 lg:group-focus-visible:opacity-100">
            <p className="pt-3 text-sm leading-relaxed text-charcoal/65">
              {summary}
            </p>
          </div>
        )}
      </div>
    </NavLink>
  );
}
