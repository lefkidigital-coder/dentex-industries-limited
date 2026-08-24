import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Pill, UtensilsCrossed, Boxes } from "lucide-react";
import { Layout, Reveal } from "@/components/site/Layout";
import { MouldHero } from "@/components/site/MouldHero";
import { BuildYourProduct } from "@/components/site/BuildYourProduct";
import { IndustrySelector } from "@/components/site/IndustrySelector";
import { TrustStrip } from "@/components/site/TrustStrip";
import { ImpactStats } from "@/components/site/ImpactStats";
import { ValueLocks } from "@/components/site/ValueLocks";
import { RibbedDivider } from "@/components/site/RibbedDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dentex Industries Ltd — Precision Plastic Packaging" },
      { name: "description", content: "For 40 years, Dentex Industries has delivered reliable rigid plastic packaging for businesses across East Africa — pharma, food & beverage, industrial." },
      { property: "og:title", content: "Dentex Industries Ltd — Precision Plastic Packaging" },
      { property: "og:description", content: "Quality, innovation, integrity. Rigid plastic packaging solutions made in Kenya since 1986." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Pill, title: "Pharmaceutical Packaging", desc: "Precision injection-moulded packaging for the pharmaceutical industry, ensuring product safety and integrity." },
  { icon: UtensilsCrossed, title: "Food & Beverage Packaging", desc: "Durable and visually appealing rigid plastic packaging for restaurants, ice cream manufacturers, and beverage companies." },
  { icon: Boxes, title: "Industrial & Custom Packaging", desc: "Tailored, high-quality plastic solutions for a diverse range of industrial applications." },
];

function Home() {
  return (
    <Layout>
      {/* Hero — material to form */}
      <MouldHero />

      {/* Industries served — tint shifts with selection */}
      <IndustrySelector />

      {/* Scrolling trust / industry strip */}
      <TrustStrip />

      {/* Impact / credibility */}
      <ImpactStats />

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Core Services</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">Packaging built for every industry</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="mould-press group h-full bg-card border border-border/60 rounded-2xl p-8 hover:shadow-xl hover:border-accent/40">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground group-hover:bg-accent transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-primary">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/products" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Product — injection moulding stage walker */}
      <RibbedDivider from="var(--background)" to="var(--tech-grey)" />
      <BuildYourProduct />

      {/* Four values as a mould locking mechanism */}
      <ValueLocks />
    </Layout>
  );
}