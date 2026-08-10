import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroArt from "@/assets/hero-material-to-form.jpg.asset.json";

/**
 * Hero — approved "material to form" art direction. The packaging cluster,
 * pedestal and pellet flow live in the artwork; all copy and CTAs stay as
 * real HTML so they remain selectable, translatable and accessible.
 */
export function MouldHero() {
  return (
    <section className="relative overflow-hidden bg-hero-deep text-primary-foreground">
      {/* Artwork — full-bleed right on desktop, stacked below copy on mobile */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block w-[62%]">
        <img
          src={heroArt.url}
          alt="Plastic pellets flowing into finished Dentex packaging — a PET bottle, pharmaceutical bottle, jar, tub and red closure on a marble pedestal"
          width={1600}
          height={1200}
          className="h-full w-full object-cover object-right"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--hero-deep) 0%, color-mix(in oklab, var(--hero-deep) 70%, transparent) 22%, transparent 48%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="lg:max-w-[46%]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Established 1986 · Nairobi, Kenya
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.04]">
              Precision Plastic Packaging for{" "}
              <span className="accent-underline">East Africa&apos;s</span> Leading Brands
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/95 max-w-xl leading-relaxed">
              For over 39 years, Dentex has been the trusted partner for rigid plastic packaging
              solutions — delivering quality, innovation, and integrity.
            </p>
          </motion.div>

          {/* Mobile / tablet artwork — same composition, scaled */}
          <div className="lg:hidden -mx-4 sm:-mx-6 mt-8 relative">
            <img
              src={heroArt.url}
              alt="Plastic pellets flowing into finished Dentex packaging on a marble pedestal"
              width={1600}
              height={1200}
              className="w-full h-[240px] xs:h-[280px] sm:h-[380px] object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, var(--hero-deep) 0%, transparent 18%, transparent 82%, var(--hero-deep) 100%)",
              }}
            />
          </div>

          <div className="mt-8 lg:mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="mould-press group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-lg"
            >
              Explore Our Capabilities
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="mould-press inline-flex items-center gap-2 rounded-md border-2 border-primary-foreground/40 px-6 py-3 text-base font-semibold text-primary-foreground"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
