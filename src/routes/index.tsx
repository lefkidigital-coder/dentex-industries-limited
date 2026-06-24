import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Pill, UtensilsCrossed, Boxes } from "lucide-react";
import { Layout, Reveal } from "@/components/site/Layout";
import { MouldHero } from "@/components/site/MouldHero";
import { BuildYourProduct } from "@/components/site/BuildYourProduct";
import { IndustrySelector } from "@/components/site/IndustrySelector";
import { ValueLocks } from "@/components/site/ValueLocks";
import { RibbedDivider } from "@/components/site/RibbedDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dentex Industries Ltd — Precision Plastic Packaging" },
      { name: "description", content: "For over 35 years, Dentex has been East Africa's trusted partner for rigid plastic packaging — pharmaceutical, food & beverage, industrial." },
      { property: "og:title", content: "Dentex Industries Ltd — Precision Plastic Packaging" },
      { property: "og:description", content: "Quality, innovation, integrity. Rigid plastic packaging solutions made in Kenya since 1986." },
    ],
  }),
  component: Home,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.floor(v).toLocaleString() + suffix);
  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, value]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const services = [
  { icon: Pill, title: "Pharmaceutical Packaging", desc: "Precision injection-moulded packaging for the pharmaceutical industry, ensuring product safety and integrity." },
  { icon: UtensilsCrossed, title: "Food & Beverage Packaging", desc: "Durable and visually appealing rigid plastic packaging for restaurants, ice cream manufacturers, and beverage companies." },
  { icon: Boxes, title: "Industrial & Custom Packaging", desc: "Tailored, high-quality plastic solutions for a diverse range of industrial applications." },
];

const clients = ["Major Pharmaceutical Co.", "Leading Restaurants Group", "East Africa Mineral Water", "Multinational Corp.", "Premium Beverages Ltd", "Regional Foods Co."];

function Home() {
  return (
    <Layout>
      {/* Hero — cursor-reactive mould cavity */}
      <MouldHero />

      {/* Stats */}
      <section className="bg-tech-grey py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: 35, suffix: "+", label: "Years of Experience" },
            { num: 500, suffix: "+", label: "Clients Served" },
            { num: 100, suffix: "M+", label: "Units Produced" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-card p-8 rounded-2xl border border-border/60 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <p className="text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">
                  <Counter to={s.num} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{s.label}</p>
                <div className="mt-4 h-1 w-12 bg-accent rounded-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

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

      {/* Industry selector — tint shifts with selection */}
      <IndustrySelector />

      {/* Four values as a mould locking mechanism */}
      <ValueLocks />

      {/* Trusted By */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Trusted by industry leaders across the region</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((c) => (
              <div key={c} className="grid place-items-center h-20 rounded-lg border border-border/60 bg-tech-grey px-4 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary hover:border-accent/40 transition-colors">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}