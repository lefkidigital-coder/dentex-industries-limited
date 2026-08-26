import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Container, LayoutGrid, Milk, Package, TestTube, UtensilsCrossed } from "lucide-react";
import { Layout, Reveal } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { QuoteCta } from "@/components/site/QuoteCta";
import { CATEGORIES, PRODUCTS, type CategorySlug } from "@/data/products";
import heroComposition from "@/assets/products-hero-composition.png.asset.json";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Our Products — Dentex Industries Ltd" },
      {
        name: "description",
        content:
          "Explore Dentex bottles, jerrycans, jars, closures and other packaging solutions manufactured for a wide range of applications.",
      },
      { property: "og:title", content: "Rigid Plastic Packaging Built for Your Business — Dentex" },
      {
        property: "og:description",
        content:
          "Explore Dentex bottles, jerrycans, jars, closures and other packaging solutions manufactured for a wide range of applications.",
      },
    ],
  }),
  component: Products,
});

type Filter = "All" | CategorySlug;

const FILTER_ICONS: Record<Filter, typeof LayoutGrid> = {
  All: LayoutGrid,
  bottles: Milk,
  jerrycans: Container,
  "jars-containers": Package,
  "food-service": UtensilsCrossed,
  "pet-preforms": TestTube,
};

const FILTERS: Filter[] = ["All", ...CATEGORIES.map((c) => c.slug)];

function filterLabel(f: Filter) {
  return f === "All" ? "All Products" : CATEGORIES.find((c) => c.slug === f)!.name;
}

function Products() {
  const [filter, setFilter] = useState<Filter>("All");
  const list = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-deep text-primary-foreground">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 25%, rgba(137,23,40,0.45), transparent 42%), radial-gradient(circle at 78% 60%, rgba(255,255,255,0.16), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] accent-underline">Our Products</p>
              <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06]">
                Rigid Plastic Packaging Built for Your Business.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
                Explore Dentex bottles, jerrycans, jars, closures and other packaging solutions manufactured for a wide
                range of applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="-mx-2 sm:mx-0"
            >
              <img
                src={heroComposition.url}
                alt="Dentex rigid plastic packaging range — jerrycans, bottles and jars"
                className="mx-auto w-full max-w-[560px] h-[min(52svh,380px)] sm:h-[400px] lg:h-[440px] object-contain"
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </section>

      {/* Filters + grid */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max items-center gap-2 rounded-2xl border border-border/60 bg-card p-2 lg:min-w-0 lg:justify-between">
              {FILTERS.map((f) => {
                const Icon = FILTER_ICONS[f];
                const active = filter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={active}
                    className={`mould-press inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                      active
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "text-primary hover:bg-secondary hover:text-accent"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {filterLabel(f)}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </AnimatePresence>
          </motion.div>

          {list.length === 0 && (
            <p className="mt-10 text-center text-muted-foreground">
              More products in this category are coming soon — contact us for current availability.
            </p>
          )}
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
