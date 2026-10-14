import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { INDUSTRY_OPTIONS, isIndustryKey, productIndustries } from "@/data/industries";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Container, LayoutGrid, Milk, Package, TestTube, UtensilsCrossed } from "lucide-react";
import { Layout, Reveal } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { QuoteCta } from "@/components/site/QuoteCta";
import { CATEGORIES, PRODUCTS, type CategorySlug } from "@/data/products";
import heroComposition from "@/assets/products-hero-composition.png.asset.json";

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): { industry?: string; category?: string } => ({
    industry: typeof search.industry === "string" && isIndustryKey(search.industry) ? search.industry : "all",
    category: typeof search.category === "string" && CATEGORIES.some((category) => category.slug === search.category) ? search.category : "All",
  }),
  head: () => ({
    meta: [
      { title: "Our Products | Dentex Industries Ltd" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "description",
        content:
          "Explore Dentex bottles, jerrycans, jars, closures and other packaging solutions manufactured for a wide range of applications.",
      },
      { property: "og:title", content: "Rigid Plastic Packaging Built for Your Business | Dentex" },
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
  closures: Package,
  bottles: Milk,
  jerrycans: Container,
  "jars-containers": Package,
  "food-service": UtensilsCrossed,
  cutlery: UtensilsCrossed,
  "pet-preforms": TestTube,
  accessories: Package,
};

const FILTERS: Filter[] = ["All", ...CATEGORIES.map((c) => c.slug)];

function filterLabel(f: Filter) {
  return f === "All" ? "All Products" : CATEGORIES.find((c) => c.slug === f)?.name ?? f;
}

function Products() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const filter = FILTERS.find((value) => value === search.category) ?? "All";
  const selectedIndustry = search.industry ?? "all";
  const industry = isIndustryKey(selectedIndustry) ? selectedIndustry : "all";
  const list = PRODUCTS.filter((p) => (filter === "All" || p.category === filter) && (industry === "all" || productIndustries(p).includes(industry)));

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
                alt="Dentex rigid plastic packaging range, jerrycans, bottles and jars"
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Industry</p>
          <div className="mb-5 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]" aria-label="Industry filters">
            {[{ key: "all", label: "All Industries" }, ...INDUSTRY_OPTIONS].map((option) => (
              <Button key={option.key} variant="ghost" aria-pressed={industry === option.key} onClick={() => navigate({ search: (prev) => ({ ...prev, industry: option.key }), resetScroll: false })}
                className={`h-auto shrink-0 rounded-full px-4 py-2.5 font-semibold ${industry === option.key ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-card text-primary border border-border"}`}>{option.label}</Button>
            ))}
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Product category</p>
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max items-center gap-2 rounded-2xl border border-border/60 bg-card p-2 lg:min-w-0 lg:flex-wrap">
              {FILTERS.map((f) => {
                const Icon = FILTER_ICONS[f];
                const active = filter === f;
                return (
                  <Button variant="ghost"
                    key={f}
                    type="button"
                    onClick={() => navigate({ search: (prev) => ({ ...prev, category: f }), resetScroll: false })}
                    aria-pressed={active}
                    className={`mould-press h-auto inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                      active
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "text-primary hover:bg-secondary hover:text-accent"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {filterLabel(f)}
                  </Button>
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
              No products match these filters. Try All Industries or All Products, or contact us to confirm the application.
            </p>
          )}
        </div>
      </section>

      {/* Category shortcuts */}
      <section className="bg-tech-grey py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Categories</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Explore by category</h2>
            </div>
          </Reveal>
          <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.1}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                   className="mould-press block h-full bg-card border border-border/60 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-accent/40"
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
