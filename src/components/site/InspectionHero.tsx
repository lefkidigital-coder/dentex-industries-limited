import type { ReactNode } from "react";
import { useEntrance } from "@/hooks/use-gsap";

export type HeroImage = {
  src: string;
  /** Optional responsive sources: a `srcSet` plus the matching `sizes`. */
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
};

export function InspectionHero({ eyebrow, title, subtitle, image, alt, children }: {
  eyebrow: string; title: string; subtitle: string; image: string | HeroImage; alt: string; children?: ReactNode;
}) {
  const ref = useEntrance<HTMLDivElement>(["[data-anim='eyebrow']", "[data-anim='title']", "[data-anim='sub']", "[data-anim='extra']"]);
  const img = typeof image === "string" ? { src: image } : image;
  return (
    <section className="bg-hero-deep text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] items-center">
        <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
          <div ref={ref}>
            <p data-anim="eyebrow" className="text-sm font-semibold uppercase tracking-[0.2em] border-b border-accent pb-3">{eyebrow}</p>
            <h1 data-anim="title" className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]">{title}</h1>
            <p data-anim="sub" className="mt-5 text-base sm:text-lg text-primary-foreground/85 leading-relaxed max-w-xl">{subtitle}</p>
            {children && <div data-anim="extra">{children}</div>}
          </div>
        </div>
        <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] lg:max-h-[600px] overflow-hidden">
          <img
            src={img.src}
            srcSet={img.srcSet}
            sizes={img.sizes}
            width={img.width}
            height={img.height}
            alt={alt}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="inspection-image-edge absolute inset-0 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
