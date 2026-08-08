import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Layout, PageHero, Reveal } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { QuoteCta } from "@/components/site/QuoteCta";
import { CATEGORIES, PRODUCTS, type CategorySlug } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Our Products — Dentex Industries Ltd" },
      { name: "description", content: "Browse Dentex's rigid plastic packaging product range — pharmaceutical, food & beverage, and industrial." },
      { property: "og:title", content: "Rigid Plastic Packaging Products — Dentex" },
      { property: "og:description", content: "Pharmaceutical-grade bottles, food containers, industrial packaging and custom solutions." },
    ],
  }),
  component: Products,
});

type Filter = "All" | CategorySlug;

function Products() {
  const [filter, setFilter] = useState<Filter>("All");
  const list = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <Layout>
      <PageHero
        eyebrow="Our Products"
        title="Rigid Plastic Packaging Solutions, Tailored to You."
        subtitle="Browse our range or request a custom quote — every product is engineered for performance, safety, and brand impact."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {(["All", ...CATEGORIES.map((c) => c.slug)] as Filter[]).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`mould-press px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                  filter === c
                    ? "bg-accent text-accent-foreground border-accent shadow-md"
                    : "bg-card text-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                {c === "All" ? "All" : CATEGORIES.find((x) => x.slug === c)!.name}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Category shortcuts */}
      <section className="bg-tech-grey py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Categories</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Explore by category</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.1}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="mould-press block h-full bg-card border border-border/60 rounded-2xl p-8 hover:shadow-xl hover:border-accent/40"
                >
                  <h3 className="text-xl font-bold text-primary">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.intro}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    View Range <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteCta />
    </Layout>
  );
}
