import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/data/products";

export function ProductGallery({ product }: { product: Product }) {
  const images = [product.images.main, ...product.images.alternates, ...product.images.details];
  const labels = ["Main view", ...product.images.alternates.map((_, i) => `Alternative view ${i + 1}`), ...product.images.details.map((_, i) => `Detail view ${i + 1}`)];
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-secondary shadow-md">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${product.title} — ${labels[index]}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            aria-label={labels[i]}
            aria-current={i === index}
            className={`mould-press aspect-square overflow-hidden rounded-xl border-2 transition-colors ${
              i === index ? "border-accent" : "border-border/60 hover:border-accent/50"
            }`}
          >
            <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}