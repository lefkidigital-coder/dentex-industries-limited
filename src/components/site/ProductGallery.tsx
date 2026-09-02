import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductGallery({ product }: { product: Product }) {
  const images = [product.images.main, ...product.images.alternates, ...product.images.details];
  const labels = [
    "Main view",
    ...product.images.alternates.map((_, i) => `Alternative view ${i + 1}`),
    ...product.images.details.map((_, i) => `Detail view ${i + 1}`),
  ];
  const [index, setIndex] = useState(0);
  const go = (dir: number) => setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <div>
      <div className="relative aspect-square sm:aspect-[4/3] product-stage overflow-hidden rounded-2xl border border-border/60">
        <span className="product-stage-shadow" aria-hidden />
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${product.title}, ${labels[index]}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 h-full w-full object-contain object-center p-8 sm:p-12"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-card/90 text-primary shadow-sm hover:text-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-card/90 text-primary shadow-sm hover:text-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={labels[i]}
              aria-current={i === index}
              className={`mould-press h-20 w-20 shrink-0 product-stage overflow-hidden rounded-xl border-2 p-2 transition-colors ${
                i === index ? "border-accent" : "border-border/60 hover:border-accent/50"
              }`}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-contain object-center" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
