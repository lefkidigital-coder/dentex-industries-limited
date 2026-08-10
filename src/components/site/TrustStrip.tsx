import { Pill, UtensilsCrossed, IceCream, Sandwich, Droplet, Factory } from "lucide-react";

/**
 * Placeholder trust strip. Uses neutral industry identifiers — swap the
 * `ITEMS` array for approved client logos when they are available.
 */
const ITEMS = [
  { label: "Pharmaceutical", icon: Pill },
  { label: "Restaurants", icon: UtensilsCrossed },
  { label: "Ice Cream", icon: IceCream },
  { label: "Food & Beverage", icon: Sandwich },
  { label: "Mineral Water", icon: Droplet },
  { label: "Industrial / Multinational", icon: Factory },
];

export function TrustStrip() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <section className="border-y border-border/60 bg-background py-12">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        Trusted Across Industries
      </p>
      <div className="marquee-viewport relative mt-8 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-16 pr-16">
          {loop.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="flex shrink-0 items-center gap-3 text-muted-foreground/80"
            >
              <item.icon className="h-5 w-5" strokeWidth={1.5} />
              <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.16em]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
