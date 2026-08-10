import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroAsset from "@/assets/hero-cluster.png.asset.json";
import heroMobileAsset from "@/assets/hero-mobile.png.asset.json";

const heroArt = heroAsset.url;
const heroMobileArt = heroMobileAsset.url;


/**
 * Hero — approved "material to form" art direction. The packaging cluster,
 * pedestal and pellet flow live in the artwork; all copy and CTAs stay as
 * real HTML so they remain selectable, translatable and accessible.
 */
export function MouldHero() {
  return (
    <section className="relative flex overflow-hidden bg-hero-deep text-primary-foreground lg:min-h-[calc(100svh-4rem)] lg:items-center">
      {/* Studio backdrop: soft key light + floor gradient so the cut-out artwork
          reads as photographed in-place rather than pasted on. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
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

      {/* Artwork — full-bleed right on desktop, stacked below copy on mobile */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:flex lg:items-center w-[58%]">
        {/* grounding pool of light beneath the cluster */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[68%] h-40 w-[70%] -translate-x-1/2 rounded-[50%] blur-2xl"
          style={{ background: "oklch(0.62 0.03 250 / 0.28)" }}
        />
        <img
          src={heroArt}
          alt="Plastic pellets flowing into finished Dentex packaging — a PET bottle, pharmaceutical bottle, jar, tub and red closure on a marble pedestal"
          width={1350}
          height={650}
          className="relative h-auto max-h-[78%] w-full object-contain object-right drop-shadow-[0_28px_40px_rgba(0,0,0,0.45)]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5 sm:py-12 lg:py-16">
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
            <h1 className="mt-4 text-[clamp(1.65rem,5.2vw,3.6rem)] font-extrabold tracking-tight leading-[1.08]">
              Precision Plastic Packaging for{" "}
              <span className="accent-underline">East Africa&apos;s</span> Leading Brands
            </h1>
            <p className="mt-3 text-sm sm:text-lg text-primary-foreground/95 max-w-xl leading-relaxed">
              For over 39 years, Dentex has been the trusted partner for rigid plastic packaging
              solutions — delivering quality, innovation, and integrity.
            </p>
          </motion.div>

          {/* Mobile artwork — large, dominant focal point using the portrait mobile asset */}
          <div className="lg:hidden mt-3 sm:mt-8 relative flex justify-center">
            <div
              aria-hidden
              className="absolute left-1/2 bottom-0 h-28 w-[95%] -translate-x-1/2 rounded-[50%] blur-2xl"
              style={{ background: "oklch(0.62 0.03 250 / 0.32)" }}
            />
            <picture className="relative w-full max-w-[420px] h-[min(62svh,460px)] sm:h-[min(46svh,340px)] md:h-[min(50svh,400px)] flex justify-center">
              <source srcSet={heroMobileArt} media="(max-width: 639px)" />
              <img
                src={heroArt}
                alt="Plastic pellets flowing into finished Dentex packaging on a marble pedestal"
                width={1350}
                height={650}
                className="w-full h-full object-contain object-center drop-shadow-[0_28px_44px_rgba(0,0,0,0.5)] sm:drop-shadow-[0_22px_34px_rgba(0,0,0,0.45)]"
              />
            </picture>
          </div>



          <div className="mt-3 sm:mt-5 lg:mt-8 flex flex-wrap gap-3 sm:gap-4">
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
