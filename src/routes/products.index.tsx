import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";

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

type Category = "All" | "Pharmaceutical" | "Food & Beverage" | "Industrial";

type Product = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  desc: string;
  specs: string[];
  material: string;
  image: string;
};

const products: Product[] = [
  { id: "p1", title: "Pharmaceutical Grade Bottles", category: "Pharmaceutical", desc: "Tamper-evident HDPE bottles engineered for liquid and solid pharmaceutical formulations.", specs: ["Capacities: 30ml – 1L", "Tamper-evident closures", "Food-grade certified", "Custom labeling"], material: "HDPE / PP, food and pharma grade", image: "https://picsum.photos/seed/prod-pharma1/800/600" },
  { id: "p2", title: "Tablet & Capsule Containers", category: "Pharmaceutical", desc: "Wide-mouth jars with child-resistant caps for tablets, capsules, and powders.", specs: ["Wide-mouth design", "Child-resistant lids", "Moisture barrier"], material: "PET / HDPE", image: "https://picsum.photos/seed/prod-pharma2/800/600" },
  { id: "p3", title: "Ice Cream Tubs", category: "Food & Beverage", desc: "Durable, freezer-safe tubs in a range of capacities for premium dairy brands.", specs: ["100ml – 5L sizes", "Freezer & microwave safe", "IML decoration available"], material: "Polypropylene (PP)", image: "https://picsum.photos/seed/prod-icecream/800/600" },
  { id: "p4", title: "Beverage Bottles", category: "Food & Beverage", desc: "Clear, lightweight PET bottles for water, juices, and carbonated beverages.", specs: ["250ml – 2L", "Crystal-clear PET", "Custom neck finishes"], material: "PET, recyclable", image: "https://picsum.photos/seed/prod-bottle/800/600" },
  { id: "p5", title: "Restaurant Takeaway Packs", category: "Food & Beverage", desc: "Microwave-safe containers tailored for restaurants and quick-service brands.", specs: ["Stackable", "Microwave & freezer safe", "Branded inserts available"], material: "PP", image: "https://picsum.photos/seed/prod-takeaway/800/600" },
  { id: "p6", title: "Industrial Chemical Containers", category: "Industrial", desc: "Heavy-duty containers for industrial chemicals and lubricants.", specs: ["1L – 25L", "Chemical resistant", "Stackable for transport"], material: "HDPE industrial grade", image: "https://picsum.photos/seed/prod-industrial1/800/600" },
  { id: "p7", title: "Custom Moulded Solutions", category: "Industrial", desc: "Bespoke injection-moulded packaging tailored to your product specifications.", specs: ["Custom tooling", "Low to high volume", "Material consultation"], material: "Various polymers", image: "https://picsum.photos/seed/prod-custom/800/600" },
  { id: "p8", title: "Closures & Caps", category: "Industrial", desc: "Precision-engineered closures for a wide range of bottle and container types.", specs: ["Multiple thread sizes", "Tamper-evident options", "Custom colors"], material: "PP / HDPE", image: "https://picsum.photos/seed/prod-caps/800/600" },
];

const cats: Category[] = ["All", "Pharmaceutical", "Food & Beverage", "Industrial"];

function Products() {
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<Product | null>(null);
  const list = filter === "All" ? products : products.filter((p) => p.category === filter);

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
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-card text-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-card border border-border/60 rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/40 transition-all"
                >
                  <button onClick={() => setActive(p)} className="block w-full text-left">
                    <div className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</p>
                      <h3 className="mt-2 text-lg font-bold text-primary">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                    </div>
                  </button>
                  <div className="px-6 pb-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
                    >
                      Request a Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm grid place-items-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={active.image} alt={active.title} className="w-full aspect-[16/9] object-cover" />
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-card shadow-lg hover:bg-secondary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{active.category}</p>
                <h3 className="mt-2 text-3xl font-extrabold text-primary">{active.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{active.desc}</p>

                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Specifications</h4>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {active.specs.map((s) => (
                        <li key={s} className="flex gap-2"><span className="text-accent">▸</span>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Material</h4>
                    <p className="mt-3 text-sm text-muted-foreground">{active.material}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-md hover:brightness-110 transition-all"
                >
                  Request a Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}