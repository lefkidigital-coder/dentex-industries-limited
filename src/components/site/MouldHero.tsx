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
    <section className="relative flex overflow-hidden bg-hero-deep text-primary-foreground lg:min-h-[calc(100svh-4rem)] lg:items-center">
      {/* Artwork — full-bleed right on desktop, stacked below copy on mobile */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block w-[60%]">
        <img
          src={heroArt.url}
          alt="Plastic pellets flowing into finished Dentex packaging — a PET bottle, pharmaceutical bottle, jar, tub and red closure on a marble pedestal"
          width={1600}
          height={1200}
          className="h-full w-full object-contain object-right"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--hero-deep) 0%, color-mix(in oklab, var(--hero-deep) 70%, transparent) 22%, transparent 48%)",
          }}
        />
        {/* Material → form annotation */}
        <FlowLabel style={{ left: "4%", top: "26%" }} text="From material" align="left" />
        <FlowLabel style={{ right: "8%", top: "44%" }} text="To form" align="right" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="lg:max-w-[44%]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Established 1986 · Nairobi, Kenya
            </p>
            <h1 className="mt-5 text-[clamp(1.9rem,5.2vw,3.6rem)] font-extrabold tracking-tight leading-[1.06]">
              Precision Plastic Packaging for{" "}
              <span className="accent-underline">East Africa&apos;s</span> Leading Brands
            </h1>
            <p className="mt-4 text-base sm:text-lg text-primary-foreground/95 max-w-xl leading-relaxed">
              For over 39 years, Dentex has been the trusted partner for rigid plastic packaging
              solutions — delivering quality, innovation, and integrity.
            </p>
          </motion.div>

          {/* Mobile / tablet artwork — same composition, scaled */}
          <div className="lg:hidden -mx-4 sm:-mx-6 mt-5 relative">
            <img
              src={heroArt.url}
              alt="Plastic pellets flowing into finished Dentex packaging on a marble pedestal"
              width={1600}
              height={1200}
              className="w-full h-[min(34svh,260px)] sm:h-[min(38svh,340px)] object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, var(--hero-deep) 0%, transparent 18%, transparent 82%, var(--hero-deep) 100%)",
              }}
            />
            <FlowLabel style={{ left: "1rem", top: "1rem" }} text="From material" align="left" small />
            <FlowLabel style={{ right: "1rem", bottom: "1rem" }} text="To form" align="right" small />
          </div>

          <div className="mt-6 lg:mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/products"
              className="mould-press group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-accent-foreground shadow-lg"
            >
              Explore Our Capabilities
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="mould-press inline-flex items-center gap-2 rounded-md border-2 border-primary-foreground/40 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-primary-foreground"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Subtle dotted annotation used to label the material-to-form flow inside the
 * hero artwork. Pure HTML/CSS so the labels stay selectable and translatable.
 */
function FlowLabel({
  text,
  style,
  align,
  small,
}: {
  text: string;
  style?: React.CSSProperties;
  align: "left" | "right";
  small?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      style={style}
      className={`pointer-events-none absolute flex items-center gap-2 rounded-full bg-hero-deep/45 px-2.5 py-1 backdrop-blur-[2px] ${align === "right" ? "flex-row-reverse" : ""}`}
    >
      <span
        className={`whitespace-nowrap font-semibold uppercase text-primary-foreground/90 tracking-[0.22em] ${small ? "text-[9px]" : "text-[10px]"}`}
      >
        {text}
      </span>
      <span
        aria-hidden
        className={`block border-t border-dashed border-primary-foreground/40 ${small ? "w-8" : "w-14"}`}
      />
      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
    </motion.div>
  );
}
