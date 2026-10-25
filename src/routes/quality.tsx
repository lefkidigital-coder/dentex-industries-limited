import { createFileRoute } from "@tanstack/react-router";
import { Layout, Reveal } from "@/components/site/Layout";
import { ShieldCheck, FlaskConical, Cog, Leaf, Sparkles } from "lucide-react";
import { InspectionHero } from "@/components/site/InspectionHero";
import engineer from "@/assets/innovation-engineer.webp.asset.json";
import { RecyclingLoop } from "@/components/site/RecyclingLoop";

/**
 * Approved inspection photo (public/assets/quality-inspection.png, kept as the
 * master) compressed to WebP at full size plus an 828px copy for phones.
 * The older quality-inspection.webp is a different image and must not be used.
 */
const INSPECTION = {
  src: "/assets/quality-inspection-approved.webp",
  srcSet: "/assets/quality-inspection-approved-828w.webp 828w, /assets/quality-inspection-approved.webp 1083w",
  sizes: "(min-width: 1024px) 48vw, 100vw",
  width: 1083,
  height: 1453,
};

export const Route = createFileRoute("/quality")({
  head: () => ({
    links: [{ rel: "preload", as: "image", imageSrcSet: INSPECTION.srcSet, imageSizes: INSPECTION.sizes, fetchPriority: "high" }],
    meta: [
      { title: "Quality & Innovation | Dentex Industries Ltd" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "description", content: "How Dentex ensures every product meets the highest standards through QA, R&D, and sustainability." },
      { property: "og:title", content: "Quality & Innovation | Dentex Industries Ltd" },
      { property: "og:description", content: "Driven by innovation, defined by quality. Inside our QA, R&D, and sustainability programs." },
    ],
  }),
  component: Quality,
});

const qa = [
  { icon: ShieldCheck, t: "Raw Material Inspection", d: "Every batch of polymer is inspected and certified before entering our production lines." },
  { icon: Cog, t: "In-Process Controls", d: "Continuous in-line monitoring ensures dimensional accuracy and consistency throughout production." },
  { icon: FlaskConical, t: "Final Inspection", d: "Each batch is sampled and tested to verify performance against customer specifications." },
];

function Quality() {
  return (
    <Layout>
      <InspectionHero image={INSPECTION} alt="Gloved hand inspecting a white jar with a green lid under precision lighting"
        eyebrow="Quality & Innovation"
        title="Driven by Innovation, Defined by Quality."
        subtitle="How we ensure every product meets the highest standards."
      />

      {/* Quality Assurance */}
      <section className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Quality Assurance</p>
              <h2 data-lines className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Honesty and transparency, embedded in every step.</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We conduct our business with honesty and transparency, building trust with our customers, partners, and employees. From raw material selection to final inspection, quality is embedded in every step of our process.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 sm:mt-12 grid gap-6 md:grid-cols-3">
            {qa.map((q, i) => (
              <Reveal key={q.t} delay={i * 0.1}>
                <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 h-full hover:shadow-lg transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <q.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-primary">{q.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{q.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & R&D */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(137,23,40,0.6), transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground">Innovation & R&D</p>
              <h2 data-lines className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">Investing in tomorrow's packaging today.</h2>
              <p className="mt-5 text-primary-foreground/95 leading-relaxed">
                We continuously invest in research and development to introduce innovative products and maintain market leadership across East Africa.
              </p>
              <div className="mt-8 p-6 bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-2xl">
                <div className="flex items-start gap-4">
                  <Sparkles className="h-8 w-8 text-primary-foreground shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Injection Moulding Technology</h3>
                    <p className="mt-2 text-sm text-primary-foreground/95 leading-relaxed">
                      Our precision injection-moulding capabilities produce parts with tight tolerances, consistent wall thickness, and superior surface finish, at production volumes that match your demand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <img
              src={engineer.url}
              alt="Dentex engineer inspecting a PET preform beside moulding equipment"
              loading="lazy"
              decoding="async"
              width={713}
              height={542}
              className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Sustainability</p>
              <h2 data-lines className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Responsible manufacturing for a better tomorrow.</h2>
            </div>
          </Reveal>
          <div className="mt-8 sm:mt-12 grid gap-6 md:grid-cols-2">
            {[
              { icon: Leaf, t: "Waste Reduction", d: "Our lean manufacturing processes minimize scrap and energy consumption, protecting both margins and the environment." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1}>
                <div className="flex gap-4 sm:gap-6 p-6 sm:p-8 bg-tech-grey rounded-2xl border border-border/60 hover:shadow-lg transition-all">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{s.t}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.05}>
              <RecyclingLoop />
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}