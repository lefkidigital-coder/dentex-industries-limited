import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Pill, UtensilsCrossed, Boxes, ShieldCheck, Users, Lightbulb } from "lucide-react";
import { Layout, Reveal } from "@/components/site/Layout";

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

const values = [
  { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Our packaging solutions are designed to make your products unique and visually appealing while enhancing protection." },
  { icon: Users, title: "Customer Focus", desc: "We prioritize our customers' needs, delivering customized solutions and exceptional service." },
  { icon: Lightbulb, title: "Continuous Innovation", desc: "We continuously invest in research and development to introduce innovative products and maintain market leadership." },
];

const clients = ["Major Pharmaceutical Co.", "Leading Restaurants Group", "East Africa Mineral Water", "Multinational Corp.", "Premium Beverages Ltd", "Regional Foods Co."];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/dentex-factory/1920/1200')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(10,37,64,0.95) 0%, rgba(10,37,64,0.75) 60%, rgba(10,37,64,0.5) 100%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-primary-foreground"
          >
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />Established 1986 · Nairobi, Kenya
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
              Precision Plastic Packaging for <span className="text-accent">East Africa's</span> Leading Brands
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
              For over 35 years, Dentex has been the trusted partner for rigid plastic packaging solutions — delivering quality, innovation, and integrity.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                Explore Our Capabilities
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 bg-white/5 backdrop-blur px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-white/10 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
                <div className="group h-full bg-card border border-border/60 rounded-2xl p-8 hover:shadow-xl hover:border-accent/40 transition-all hover:-translate-y-1">
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

      {/* Why Dentex */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(0,166,81,0.5), transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Why Dentex</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Three decades of doing it right.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="border-t-2 border-accent/40 pt-6">
                  <v.icon className="h-10 w-10 text-accent" />
                  <h3 className="mt-4 text-xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-primary-foreground/75 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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