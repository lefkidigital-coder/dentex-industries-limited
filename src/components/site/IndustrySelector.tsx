import { useEffect, useRef, useState } from "react";
import { sized } from "@/lib/images";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Dna, Cog, Leaf, Factory, Plus, UtensilsCrossed, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import pharma from "@/assets/showcase-pharma.webp.asset.json";
import food from "@/assets/showcase-food.webp.asset.json";
import cosmetics from "@/assets/showcase-cosmetics.webp.asset.json";
import automotive from "@/assets/showcase-automotive.webp.asset.json";
import agrochemical from "@/assets/showcase-agrovet.webp.asset.json";
import industrial from "@/assets/showcase-industrial.webp.asset.json";
import { motion, AnimatePresence } from "framer-motion";
import { industryLabel } from "@/data/industries";
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
    label: industryLabel("pharma"),
    tint: "tint-pharma",
    icon: IconPharma,
    example: "Medicine bottles, tablet containers and closures",
    application: "Rigid containers and closures supplied to pharmaceutical manufacturers and packers.",
    mood: "Clean, clinical, precise.",
  },
  {
    key: "food",
    label: "Food & Beverage",
    tint: "tint-food",
    icon: IconFoodBeverage,
    example: "Tubs, jars, bottles and closures",
    application: "Packaging for food processors, beverage bottlers and food service customers.",
    mood: "Warm, practical, energetic.",
  },
  {
    key: "cosmetics",
    label: "Cosmetics",
    tint: "tint-cosmetics",
    icon: IconCosmetics,
    example: "Personal care containers and caps",
    application: "Containers and closures used for cosmetic and personal care products.",
    mood: "Refined, clean, considered.",
  },
  {
    key: "automotive",
    label: "Automotive",
    tint: "tint-automotive",
    icon: IconAutomotive,
    example: "Lubricant bottles and containers",
    application: "Packaging for lubricants, additives and automotive care products.",
    mood: "Robust, technical, hard-wearing.",
  },
  {
    key: "agrochemical",
    label: industryLabel("agrochemical"),
    tint: "tint-agrochemical",
    icon: IconAgrochemical,
    example: "Agrovet bottles, jerrycans and closures",
    application: "Containers and closures for agricultural and veterinary products.",
    mood: "Durable, secure, field-ready.",
  },
  {
    key: "industrial",
    label: "Industrial & Allied",
    tint: "tint-industrial",
    icon: IconIndustrial,
    example: "Heavy-duty containers and bespoke mouldings",
    application: "Industrial packaging and custom mouldings produced to customer specification.",
    mood: "Controlled, industrial, dependable.",
  },
] as const;

export type IndustrySelectorKey = (typeof INDUSTRIES)[number]["key"];
type Key = IndustrySelectorKey;

export function IndustrySelector({ active: activeProp, onChange }: { active?: Key; onChange?: (key: Key) => void } = {}) {
  const [localActive, setLocalActive] = useState<Key>("pharma");
  const active = activeProp ?? localActive;
  const setActive = (key: Key) => { setLocalActive(key); onChange?.(key); };
  const current = INDUSTRIES.find((i) => i.key === active) ?? INDUSTRIES[0];
  const images: Record<Key, { url: string }> = { pharma, food, cosmetics, automotive, agrochemical, industrial } as Record<Key, { url: string }>;
  const decorations = { pharma: Plus, food: UtensilsCrossed, cosmetics: Sparkles, automotive: Cog, agrochemical: Leaf, industrial: Factory };
  const Decoration = decorations[active];

  // Only the active showcase loads at first. Others load when their tab is
  // chosen and stay mounted afterwards, so returning to a tab never refetches.
  const [mounted, setMounted] = useState<Key[]>([active]);
  const [ready, setReady] = useState<Key[]>([]);
  // The image on show: the active one once it has loaded, otherwise the last
  // one that had, so the crossfade never passes through an empty frame.
  const [shown, setShown] = useState<Key>(active);
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    setMounted((m) => (m.includes(active) ? m : [...m, active]));
    if (ready.includes(active)) setShown(active);
  }, [active, ready]);

  const onImageReady = (key: Key) => {
    setReady((r) => (r.includes(key) ? r : [...r, key]));
    if (key === activeRef.current) setShown(key);
  };

  return (
    <section id="industries-served" className={`industry-section tint-shift ${current.tint} relative overflow-hidden py-12 sm:py-20 lg:py-24`}>
      <Decoration aria-hidden="true" className="pointer-events-none absolute right-6 top-12 h-40 w-40 sm:h-56 sm:w-56 opacity-[0.06] text-primary" strokeWidth={1} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-7 sm:mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]" role="tablist" aria-label="Industries served">
          {INDUSTRIES.map((ind) => (
            <Button variant="ghost"
              key={ind.key}
              role="tab"
              aria-selected={active === ind.key}
              onClick={() => setActive(ind.key)}
              className={`mould-press h-auto shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border-2 transition-colors ${
                active === ind.key
                  ? "industry-active text-primary-foreground border-transparent"
                  : "bg-card/80 text-primary border-border hover:border-accent"
              }`}
            >
              <ind.icon className="h-4 w-4" /> {ind.label}
            </Button>
          ))}
        </div>

        <div className="relative mt-8 sm:mt-12 grid md:grid-cols-[1fr_1.2fr] gap-6 sm:gap-8 items-stretch">
          {active === "pharma" && <Dna aria-hidden="true" className="pointer-events-none absolute -left-16 top-0 h-56 w-24 opacity-[0.05] text-primary" />}
          <div className="industry-info rounded-2xl bg-card/85 backdrop-blur border border-border/60 p-6 sm:p-8 shadow-sm">
            <div className="grid h-14 w-14 place-items-center rounded-xl industry-active text-primary-foreground">
              <current.icon className="h-7 w-7" />
            </div>
            <AnimatePresence mode="wait" initial={false}>
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
                <div>
                <Button asChild className="mould-press mt-4 h-auto min-h-10 bg-accent text-accent-foreground hover:bg-accent/90 whitespace-normal text-left">
                  <Link to="/products" search={{ industry: current.key }}>View {current.label} Products <ArrowRight className="shrink-0 h-4 w-4" /></Link>
                </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative w-full aspect-[1.72] rounded-2xl overflow-hidden self-start md:self-center">
            {INDUSTRIES.filter((industry) => mounted.includes(industry.key)).map((industry) => {
              const url = images[industry.key].url;
              return (
                <img key={industry.key} src={url} srcSet={`${sized(url, 820)} 820w, ${url} 1641w`} sizes="(min-width: 768px) 55vw, 100vw"
                  alt={`${industry.label} packaging application showcase`}
                  aria-hidden={shown !== industry.key}
                  decoding="async"
                  ref={(el) => { if (el?.complete && el.naturalWidth) onImageReady(industry.key); }}
                  onLoad={() => onImageReady(industry.key)}
                  className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 motion-reduce:transition-none ${shown === industry.key ? "opacity-100" : "opacity-0"}`} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
