import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categoryName, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-card border border-border/60 rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/40 transition-all"
    >
      <Link
        to="/products/$category/$product"
        params={{ category: product.category, product: product.slug }}
        className="block w-full text-left"
      >
        <div className="aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={product.images.main}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {categoryName(product.category)}
          </p>
          <h3 className="mt-2 text-lg font-bold text-primary">{product.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.desc}</p>
        </div>
      </Link>
      <div className="px-6 pb-6">
        <Link
          to="/products/$category/$product"
          params={{ category: product.category, product: product.slug }}
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
        >
          View Product <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}