import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { categoryName, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const [quickView, setQuickView] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col bg-card border border-border/60 rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/40 transition-all"
    >
      <Link
        to="/products/$category/$product"
        params={{ category: product.category, product: product.slug }}
        className="block w-full text-left"
      >
        <div className="aspect-square overflow-hidden bg-secondary p-6 sm:p-8">
          <img
            src={product.images.main}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6 pt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          {categoryName(product.category)}
        </p>
        <Link
          to="/products/$category/$product"
          params={{ category: product.category, product: product.slug }}
          className="mt-2"
        >
          <h3 className="text-lg font-bold text-primary">{product.title}</h3>
        </Link>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.desc}</p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
          <button
            type="button"
            onClick={() => setQuickView(true)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Quick View <Eye className="h-4 w-4" />
          </button>
          <Link
            to="/products/$category/$product"
            params={{ category: product.category, product: product.slug }}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
          >
            View Product <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Dialog open={quickView} onOpenChange={setQuickView}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-primary">{product.title}</DialogTitle>
            <DialogDescription className="sr-only">Quick view of {product.title}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 sm:grid-cols-2 items-center">
            <div className="rounded-xl bg-secondary p-6">
              <img src={product.images.main} alt={product.title} className="w-full h-56 object-contain" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {categoryName(product.category)}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
              <Link
                to="/products/$category/$product"
                params={{ category: product.category, product: product.slug }}
                onClick={() => setQuickView(false)}
                className="mould-press mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-md"
              >
                View Product <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
