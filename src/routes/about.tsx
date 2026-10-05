import { createFileRoute } from "@tanstack/react-router";
import { Layout, Reveal } from "@/components/site/Layout";
import { Target, Eye, Heart } from "lucide-react";
import { JourneyIntro, Timeline, NextForty } from "@/components/site/Journey";
import { QuoteCta } from "@/components/site/QuoteCta";
import { useEntrance } from "@/hooks/use-gsap";
import heroImg from "@/assets/staff-operator.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Dentex Industries Ltd" },
      { name: "description", content: "A legacy of manufacturing excellence since 1986. Discover Dentex's story, mission, and leadership." },
      { property: "og:title", content: "About Dentex Industries Ltd" },
      { property: "og:description", content: "From a small Kenyan plastic manufacturer to a regional packaging leader." },
    ],
  }),
  component: About,
});

const mvv = [
  { icon: Target, title: "Our Mission", text: "To deliver innovative, high-quality rigid plastic packaging that protects products, elevates brands, and serves East Africa's growing industries." },
  { icon: Eye, title: "Our Vision", text: "To be the most trusted and innovative plastic packaging partner across the East African region." },
  { icon: Heart, title: "Our Values", text: "Integrity, Innovation, Customer Focus, and Quality guide every decision we make." },
];

function About() {
  const heroRef = useEntrance<HTMLDivElement>(["[data-anim='eyebrow']", "[data-anim='title']", "[data-anim='sub']", "[data-anim='image']"]);
  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-10 pb-4 sm:px-6 sm:pt-16 lg:grid-cols-[45fr_55fr] lg:gap-12 lg:px-8 lg:py-16">
          <div>
            <p data-anim="eyebrow" className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              About Us <span className="h-px w-16 bg-border" />
            </p>
            <h1 data-anim="title" className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              A Legacy of Manufacturing Excellence Since 1986
            </h1>
            <p data-anim="sub" className="mt-6 max-w-xl text-lg leading-relaxed text-foreground">
              From a small plastic manufacturing business to a market leader in the region.
            </p>
          </div>
          <div data-anim="image">
            <img src={heroImg.url} alt="Dentex machine operator on the production floor" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" style={{ objectPosition: "center 20%" }} />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="pt-10 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Story</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Built on adaptation, investment and trust.</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Dentex Industries Limited is a Kenyan manufacturer of rigid plastic packaging, established in 1986 when the company acquired a toothbrush manufacturing plant and began production with three injection moulding machines.</p>
                <p>Forty years on, Dentex serves pharmaceutical, food & beverage, cosmetics, agrochemical and industrial customers, growing step by step as markets changed.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyIntro />
      <Timeline />
      <NextForty />

      {/* MVV */}
      <section className="bg-tech-grey py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight max-w-2xl">Mission, Vision & Values</h2>
          </Reveal>
          <div className="mt-8 sm:mt-12 grid gap-6 md:grid-cols-3">
            {mvv.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <div className="h-full bg-card border border-border/60 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <m.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-primary">{m.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteCta />
    </Layout>
  );
}