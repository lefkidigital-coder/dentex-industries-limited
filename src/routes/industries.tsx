import { createFileRoute, Link } from "@tanstack/react-router";
import { Pill, UtensilsCrossed, Droplet, Sparkles, Building2, ArrowRight } from "lucide-react";
import { Layout, PageHero, Reveal } from "@/components/site/Layout";
import { ProductGrid } from "@/components/site/ProductCard";
import { QuoteCta } from "@/components/site/QuoteCta";
import { PRODUCTS, type CategorySlug } from "@/data/products";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Dentex Industries Ltd" },
      { name: "description", content: "Rigid plastic packaging for pharmaceutical, food & beverage, water, cosmetics and industrial customers across East Africa." },
      { property: "og:title", content: "Industries Served — Dentex Industries Ltd" },
      { property: "og:description", content: "Packaging built for pharmaceutical, food & beverage, water, cosmetics and industrial applications." },
    ],
  }),
  component: Industries,
});

const INDUSTRIES: { icon: typeof Pill; label: string; blurb: string; category: CategorySlug }[] = [
  { icon: Pill, label: "Pharmaceutical", blurb: "Precision injection-moulded packaging engineered for product safety and integrity.", category: "pharmaceutical" },
  { icon: UtensilsCrossed, label: "Food & Beverage", blurb: "Durable, visually appealing packaging for restaurants, dairy and beverage brands.", category: "food-beverage" },
  { icon: Droplet, label: "Water & Beverage", blurb: "Clear, lightweight bottles for water, juices and carbonated beverages.", category: "food-beverage" },
  { icon: Sparkles, label: "Cosmetics", blurb: "Rigid containers and closures from our existing range, adapted to cosmetic products.", category: "industrial" },
  { icon: Building2, label: "Industrial / Chemicals", blurb: "Heavy-duty containers and bespoke mouldings for industrial applications.", category: "industrial" },
];

function Industries() {
  return (
    <Layout>
      <PageHero
        eyebrow="Industries Served"
        title="Packaging built around the industry it serves."
        subtitle="Each sector we supply carries its own requirements — from pharmaceutical-grade tolerances to freezer-safe food packaging."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Who We Supply</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Five sectors, one manufacturing standard.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Dentex Industries Limited has manufactured rigid plastic packaging in Nairobi since 1986. Select an
                industry to view the relevant product range.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.label} delay={i * 0.08}>
                <Link
                  to="/products/$category"
                  params={{ category: ind.category }}
                  className="mould-press group flex h-full flex-col bg-card border border-border/60 rounded-2xl p-8 hover:shadow-xl hover:border-accent/40"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground group-hover:bg-accent transition-colors">
                    <ind.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-primary">{ind.label}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">{ind.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    View Products <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-tech-grey py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Related Products</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">A selection from our range</h2>
            </div>
          </Reveal>
          <div className="mt-10">
            <ProductGrid products={PRODUCTS.slice(0, 6)} />
          </div>
        </div>
      </section>

      {/* Manufacturing capability */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-border/60 bg-card p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">Our manufacturing capability</h2>
              <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
                Injection-moulded rigid plastic packaging produced in Nairobi by a team of 70+, operating under an
                ISO 9001:2015 Quality Management System. Talk to us about tooling, materials and production volumes.
              </p>
              <Link
                to="/quality"
                className="mould-press mt-8 inline-flex items-center gap-2 rounded-md border-2 border-primary px-6 py-3 text-base font-semibold text-primary"
              >
                Quality &amp; Innovation <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <QuoteCta />
    </Layout>
  );
}
