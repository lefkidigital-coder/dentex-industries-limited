import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pill, UtensilsCrossed, IceCream, CircleDot, Droplet, Building2 } from "lucide-react";

const INDUSTRIES = [
  { key: "pharma", label: "Pharmaceutical", tint: "tint-pharma", icon: Pill, blurb: "Tamper-evident bottles and child-resistant containers — built to pharmaceutical-grade tolerances.", clients: "Major Pharmaceutical Co." },
  { key: "restaurant", label: "Restaurants", tint: "tint-restaurant", icon: UtensilsCrossed, blurb: "Microwave-safe takeaway packs branded for leading restaurant groups across the region.", clients: "Leading Restaurants Group" },
  { key: "icecream", label: "Ice Cream", tint: "tint-icecream", icon: IceCream, blurb: "Freezer-safe polypropylene tubs in every capacity, with IML decoration available.", clients: "Premium Beverages Ltd" },
  { key: "tomato", label: "Tomato Sauce", tint: "tint-tomato", icon: CircleDot, blurb: "Hot-fill compatible jars and bottles engineered for sauces and condiments.", clients: "Regional Foods Co." },
  { key: "water", label: "Mineral Water", tint: "tint-water", icon: Droplet, blurb: "Crystal-clear PET bottles in 250 ml – 2 L with custom neck finishes.", clients: "East Africa Mineral Water" },
  { key: "multi", label: "Multinationals", tint: "tint-multinational", icon: Building2, blurb: "Custom-moulded packaging for multinationals operating in East Africa.", clients: "Multinational Corp." },
] as const;

type Key = (typeof INDUSTRIES)[number]["key"];

export function IndustrySelector() {
  const [active, setActive] = useState<Key>("pharma");
  const current = INDUSTRIES.find((i) => i.key === active)!;

  return (
    <section className={`tint-shift ${current.tint} py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Industries Served</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Select an industry — feel the room change.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each industry we serve carries its own pace, light and constraints. The surrounding tone
            shifts to match.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.key}
              onClick={() => setActive(ind.key)}
              className={`mould-press inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border-2 transition-colors ${
                active === ind.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card/70 text-primary border-border hover:border-accent"
              }`}
            >
              <ind.icon className="h-4 w-4" /> {ind.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-[1fr_1.4fr] gap-8 items-stretch">
          <div className="rounded-2xl bg-card/80 backdrop-blur border border-border/60 p-8 shadow-sm">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-primary-foreground">
              <current.icon className="h-7 w-7" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="mt-5 text-2xl font-bold text-primary">{current.label}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{current.blurb}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent">Representative client</p>
                <p className="text-sm font-bold text-primary">{current.clients}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border/60 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.key}
                src={`https://picsum.photos/seed/dentex-${current.key}/1200/800`}
                alt={current.label}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}