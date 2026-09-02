import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconPharma,
  IconFoodBeverage,
  IconCosmetics,
  IconAutomotive,
  IconAgrochemical,
  IconIndustrial,
} from "./DentexIcons";

const INDUSTRIES = [
  {
    key: "pharma",
    label: "Pharma",
    tint: "tint-pharma",
    icon: IconPharma,
    example: "Medicine bottles, tablet containers and closures",
    application: "Rigid containers and closures supplied to pharmaceutical manufacturers and packers.",
    mood: "Clean, clinical, precise.",
    surface: "linear-gradient(135deg, oklch(0.96 0.01 240), oklch(0.88 0.02 240))",
  },
  {
    key: "food",
    label: "Food & Beverage",
    tint: "tint-food",
    icon: IconFoodBeverage,
    example: "Tubs, jars, bottles and closures",
    application: "Packaging for food processors, beverage bottlers and food service customers.",
    mood: "Warm, practical, energetic.",
    surface: "linear-gradient(135deg, oklch(0.95 0.04 70), oklch(0.86 0.06 55))",
  },
  {
    key: "cosmetics",
    label: "Cosmetics",
    tint: "tint-cosmetics",
    icon: IconCosmetics,
    example: "Personal care containers and caps",
    application: "Containers and closures used for cosmetic and personal care products.",
    mood: "Refined, clean, considered.",
    surface: "linear-gradient(135deg, oklch(0.97 0.02 340), oklch(0.89 0.04 330))",
  },
  {
    key: "automotive",
    label: "Automotive",
    tint: "tint-automotive",
    icon: IconAutomotive,
    example: "Lubricant bottles and containers",
    application: "Packaging for lubricants, additives and automotive care products.",
    mood: "Robust, technical, hard-wearing.",
    surface: "linear-gradient(135deg, oklch(0.93 0.02 250), oklch(0.82 0.04 250))",
  },
  {
    key: "agrochemical",
    label: "Agrochemical",
    tint: "tint-agrochemical",
    icon: IconAgrochemical,
    example: "Agrochemical containers and closures",
    application: "Containers and closures for agrochemical and crop-protection products.",
    mood: "Durable, secure, field-ready.",
    surface: "linear-gradient(135deg, oklch(0.95 0.03 150), oklch(0.86 0.05 145))",
  },
  {
    key: "industrial",
    label: "Industrial & Allied",
    tint: "tint-industrial",
    icon: IconIndustrial,
    example: "Heavy-duty containers and bespoke mouldings",
    application: "Industrial packaging and custom mouldings produced to customer specification.",
    mood: "Controlled, industrial, dependable.",
    surface: "linear-gradient(135deg, oklch(0.94 0.01 250), oklch(0.84 0.03 250))",
  },
] as const;

type Key = (typeof INDUSTRIES)[number]["key"];

export function IndustrySelector() {
  const [active, setActive] = useState<Key>("pharma");
  const current = INDUSTRIES.find((i) => i.key === active)!;

  return (
    <section className={`tint-shift ${current.tint} py-20 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Industries Served</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Select an industry, feel the room change.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each industry we serve carries its own pace, light, and constraints. The surrounding tone
            shifts to match.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Industries served">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.key}
              role="tab"
              aria-selected={active === ind.key}
              onClick={() => setActive(ind.key)}
              className={`mould-press inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border-2 transition-colors ${
                active === ind.key
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-card/80 text-primary border-border hover:border-accent"
              }`}
            >
              <ind.icon className="h-4 w-4" /> {ind.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-[1fr_1.2fr] gap-8 items-stretch">
          <div className="rounded-2xl bg-card/85 backdrop-blur border border-border/60 p-8 shadow-sm">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-primary-foreground">
              <current.icon className="h-7 w-7" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28 }}
              >
                <h3 className="mt-5 text-2xl font-bold text-primary">{current.label}</h3>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                  Packaging example
                </p>
                <p className="text-base font-semibold text-primary">{current.example}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">Application</p>
                <p className="text-muted-foreground leading-relaxed">{current.application}</p>
                <p className="mt-5 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {current.mood}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border/60 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 grid place-items-center"
                style={{ backgroundImage: current.surface }}
              >
                <div className="text-center px-8">
                  <current.icon className="mx-auto h-20 w-20 text-primary/70" strokeWidth={1.1} />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
                    {current.label}
                  </p>
                  <p className="mt-2 text-lg font-bold text-primary max-w-sm">{current.example}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-accent/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
