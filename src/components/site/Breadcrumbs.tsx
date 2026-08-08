import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const base = tone === "dark" ? "text-primary-foreground/70" : "text-muted-foreground";
  const link = tone === "dark" ? "hover:text-accent-foreground" : "hover:text-accent";
  const current = tone === "dark" ? "text-primary-foreground" : "text-primary";

  return (
    <nav aria-label="Breadcrumb" className={`text-xs sm:text-sm font-medium ${base}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => (
          <li key={`${c.label}-${i}`} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} params={c.params as never} className={`transition-colors ${link}`}>
                {c.label}
              </Link>
            ) : (
              <span className={`font-semibold ${current}`}>{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}