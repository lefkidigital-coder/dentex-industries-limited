import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Reveal } from "@/components/site/Layout";
import { Target, Eye, Heart, Award } from "lucide-react";
import { HeritageScrubber } from "@/components/site/HeritageScrubber";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Dentex Industries Ltd" },
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
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title="A Legacy of Manufacturing Excellence Since 1986"
        subtitle="From a small plastic manufacturing business to a market leader in the region."
      />

      {/* Our Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Story</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Built on craft, trust, and continuous growth.</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>Dentex Industries Limited is a fully registered company in Kenya, established in 1986. Specializing in the production of rigid plastic products for packaging, we have become a leader in plastic packaging in the region.</p>
                <p>Our journey is one of continuous growth — expanding our manufacturing processes into a fully-fledged class of manufacturing business entity that serves pharmaceutical, food & beverage, and industrial customers across East Africa.</p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { k: "1986", v: "Founded" },
                  { k: "500+", v: "Clients" },
                  { k: "24/7", v: "Production" },
                ].map((s) => (
                  <div key={s.k} className="border-l-2 border-accent pl-3">
                    <p className="text-2xl font-extrabold text-primary">{s.k}</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/dentex-story/900/700"
                alt="Dentex manufacturing"
                className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl max-w-xs hidden sm:block">
                <Award className="h-8 w-8" />
                <p className="mt-2 font-bold">40 years of packaging excellence in East Africa.</p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
          <Reveal>
            <HeritageScrubber />
          </Reveal>
        </div>
      </section>

      {/* MVV */}
      <section className="bg-tech-grey py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight max-w-2xl">Mission, Vision & Values</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {mvv.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <div className="h-full bg-card border border-border/60 rounded-2xl p-8 hover:shadow-lg transition-all">
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

      {/* Leadership */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Leadership</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">The team behind Dentex.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 rounded-2xl border border-border/60 bg-card p-8 sm:p-12 shadow-sm">
              <p className="text-lg font-semibold text-primary">Leadership profiles coming soon.</p>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                Dentex Industries Limited is led by a management team overseeing manufacturing, quality and customer
                relationships, supported by a workforce of {COMPANY.employeesLabel} employees. Individual profiles will
                be published here shortly.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="bg-tech-grey py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Facility</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Inside our Nairobi production plant.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Reveal key={i} delay={i * 0.04}>
                <img
                  src={`https://picsum.photos/seed/facility-${i}/500/500`}
                  alt={`Facility ${i}`}
                  className={`rounded-xl object-cover w-full ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"} hover:scale-[1.02] transition-transform`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}