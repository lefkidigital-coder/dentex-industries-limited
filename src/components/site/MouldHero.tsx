import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroAsset from "@/assets/hero-products-v3.png.asset.json";

const heroArt = heroAsset.url;

/**

 * Hero — approved "material to form" art direction. The packaging cluster,
 * pedestal and pellet flow live in the artwork; all copy and CTAs stay as
 * real HTML so they remain selectable, translatable and accessible.
 */
export function MouldHero() {
  return (
    <section className="relative flex overflow-hidden bg-hero-deep text-primary-foreground lg:min-h-[calc(100svh-4rem)] lg:items-center">
      {/* Desktop studio backdrop — kept exactly as-is for tablet and desktop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 72% 28%, oklch(0.46 0.055 252 / 0.85), transparent 62%), radial-gradient(90% 70% at 8% 8%, oklch(0.30 0.05 258 / 0.9), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background:
              "linear-gradient(to top, oklch(0.26 0.04 258 / 0.95), transparent 100%)",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-px bg-primary-foreground/10" />
      </div>

      {/* Mobile backdrop — clean, centred wash so the portrait artwork feels native */}
      <div aria-hidden className="pointer-events-none absolute inset-0 lg:hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(140% 100% at 50% 55%, oklch(0.44 0.05 252 / 0.75), oklch(0.32 0.045 258 / 0.92) 70%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[35%]"
          style={{
            background:
              "linear-gradient(to top, oklch(0.26 0.04 258 / 0.85), transparent 100%)",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-px bg-primary-foreground/10" />
      </div>

      {/* Artwork — full-bleed right on desktop, stacked below copy on mobile */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:flex lg:items-center w-[56%]">
        <img
          src={heroArt}
          alt="Dentex rigid plastic packaging range — HDPE bottle, jerrycan, PET jar, closures and a PET water bottle"
          width={1500}
          height={1000}
          className="relative h-full max-h-[92%] w-full object-contain object-right"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5 sm:py-12 lg:py-16">
        <div className="lg:max-w-[44%]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Established 1986 · Nairobi, Kenya
            </p>
            <h1 className="mt-3 sm:mt-4 text-[clamp(1.7rem,6.2vw,3.6rem)] font-extrabold tracking-tight leading-[1.04]">
              Precision Plastic Packaging for{" "}
              <span className="accent-underline">East Africa&apos;s</span> Leading Brands
            </h1>
            <p className="mt-3 sm:mt-3 text-sm sm:text-lg text-primary-foreground/95 max-w-xl leading-[1.45] sm:leading-relaxed">
              For 40 years, Dentex Industries has delivered reliable rigid plastic packaging
              solutions for businesses across East Africa — combining experience, consistency, and
              customer-focused manufacturing.
            </p>
          </motion.div>

          {/* Mobile artwork — as large as the screen width allows */}
          <div className="lg:hidden -mx-4 sm:-mx-6 mt-3 sm:mt-6 flex justify-center">
            <img
              src={heroArt}
              alt="Dentex rigid plastic packaging range — HDPE bottle, jerrycan, PET jar, closures and a PET water bottle"
              width={1500}
              height={1000}
              className="w-full max-w-none h-[min(34svh,300px)] sm:h-[min(46svh,420px)] object-contain object-center"
            />
          </div>

          <div className="mt-2 sm:mt-5 lg:mt-8 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4">

            <Link
              to="/products"
              className="mould-press group inline-flex w-full sm:w-auto items-center justify-center sm:justify-start gap-2 rounded-md bg-accent px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-accent-foreground shadow-lg"
            >
              Explore Our Capabilities
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="mould-press inline-flex w-full sm:w-auto items-center justify-center sm:justify-start gap-2 rounded-md border-2 border-primary-foreground/40 px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-primary-foreground"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
