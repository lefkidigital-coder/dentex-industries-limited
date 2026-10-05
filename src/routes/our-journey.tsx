import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { QuoteCta } from "@/components/site/QuoteCta";
import { useEntrance } from "@/hooks/use-gsap";
import heroImg from "@/assets/journey-hero.jpg";
import img1986 from "@/assets/journey-1986.jpg";
import imgPharma from "@/assets/journey-pharma.jpg";
import imgFood from "@/assets/journey-food.jpg";
import imgIndustrial from "@/assets/journey-industrial.jpg";
import imgPet from "@/assets/journey-pet.jpg";
import imgToday from "@/assets/journey-today.jpg";
import imgNext from "@/assets/journey-next40.jpg";

export const Route = createFileRoute("/our-journey")({
  head: () => ({
    meta: [
      { title: "Our Journey | 40 Years of Dentex Industries" },
      { name: "description", content: "From three injection moulding machines in 1986 to a growing rigid plastic packaging operation: the Dentex story." },
      { property: "og:title", content: "Our Journey | Dentex Industries Ltd" },
      { property: "og:description", content: "40 years of making what's next. Discover how Dentex grew from 1986 to today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurJourney,
});

const CHAPTERS = [
  { label: "1986", title: "Where it began", text: "Dentex began after acquiring a toothbrush manufacturing plant and started operations with three injection moulding machines.", img: img1986 },
  { label: "Chapter 02", title: "New opportunities", text: "When imported toothbrushes changed the market, Dentex adapted and diversified into pharmaceutical packaging and other plastic products.", img: imgPharma },
  { label: "Chapter 03", title: "Expanding the range", text: "Dentex expanded into food packaging, cutlery and a wider range of plastic products.", img: imgFood },
  { label: "Chapter 04", title: "Industrial capability", text: "Dentex moved into industrial packaging through extrusion blow moulding, adding new manufacturing capability.", img: imgIndustrial },
  { label: "Chapter 05", title: "The PET era", text: "More recent investment expanded Dentex into PET preforms and PET bottles.", img: imgPet },
  { label: "Today & beyond", title: "A more sustainable future", text: "The business continues to invest in technology, automation, recycled materials, solar energy, efficiency and new product development.", img: imgToday },
];

function OurJourney() {
  const heroRef = useEntrance<HTMLDivElement>(["[data-anim='eyebrow']", "[data-anim='title']", "[data-anim='sub']", "[data-anim='image']"]);
  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-10 pb-8 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-20 lg:pb-16">
          <div>
            <p data-anim="eyebrow" className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Our Journey <span className="h-px w-16 bg-border" />
            </p>
            <h1 data-anim="title" className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-tight text-primary sm:text-6xl lg:text-7xl">
              40 years<br />of making<br />what’s next
            </h1>
            <p data-anim="sub" className="mt-6 max-w-xl text-lg leading-relaxed text-foreground">
              From three injection moulding machines in 1986 to a growing rigid plastic packaging operation, Dentex’s story has been shaped by adaptation, investment and long-term relationships.
            </p>
          </div>
          <div data-anim="image" className="relative">
            <img src={heroImg} alt="Dentex technician inspecting a PET bottle on the production floor" width={1600} height={1008} className="aspect-[16/11] w-full rounded-2xl object-cover shadow-xl" />
          </div>
        </div>
      </section>

      <Timeline />
      <NextForty />
      <QuoteCta />
    </Layout>
  );
}

function Timeline() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(list.querySelectorAll<HTMLElement>("[data-chapter]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.innerHeight * 0.55;
      let idx = 0;
      items.forEach((el, i) => {
        if (el.getBoundingClientRect().top < mid) idx = i;
      });
      setActive(idx);
      const r = list.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="py-8 sm:py-16 lg:py-20" aria-label="The Dentex journey">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol ref={listRef} className="relative">
          {/* Track + progress line */}
          <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-border lg:left-1/2" />
          <div ref={fillRef} aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-accent transition-transform duration-300 ease-out motion-reduce:transition-none lg:left-1/2" style={{ transform: "scaleY(0)" }} />

          {CHAPTERS.map((c, i) => {
            const state = i === active ? "active" : i < active ? "past" : "future";
            const flip = i % 2 === 1;
            return (
              <li key={c.title} data-chapter className="relative grid gap-5 pb-12 pl-10 last:pb-0 sm:pb-16 lg:grid-cols-2 lg:gap-16 lg:pl-0 lg:pb-24">
                <span
                  aria-hidden
                  className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 transition-colors duration-500 lg:left-1/2 lg:-translate-x-1/2 ${
                    state === "future" ? "border-primary/40 bg-background" : state === "active" ? "border-accent bg-accent" : "border-accent bg-background"
                  }`}
                />
                <div
                  className={`transition-all duration-700 ease-out motion-reduce:transition-none lg:pt-0 ${flip ? "lg:order-2 lg:pl-4" : "lg:pr-4 lg:text-right"} ${
                    state === "active" ? "opacity-100 translate-y-0" : state === "past" ? "opacity-60 translate-y-0" : "opacity-35 translate-y-3"
                  }`}
                >
                  <p className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${state === "active" ? "text-accent" : "text-primary"}`}>{c.label}</p>
                  <h2 className="mt-2 text-2xl font-bold text-primary">{c.title}</h2>
                  <p className={`mt-3 max-w-md leading-relaxed text-foreground ${flip ? "" : "lg:ml-auto"}`}>{c.text}</p>
                </div>
                <div className={`overflow-hidden rounded-xl transition-all duration-700 ease-out motion-reduce:transition-none ${flip ? "lg:order-1" : ""} ${state === "future" ? "opacity-40 translate-y-4" : "opacity-100 translate-y-0"}`}>
                  <img src={c.img} alt={c.title} loading="lazy" width={1408} height={800} className={`aspect-[16/9] w-full object-cover transition-transform duration-1000 ease-out motion-reduce:transition-none ${state === "active" ? "scale-100" : "scale-105"}`} />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function NextForty() {
  return (
    <section className="relative overflow-hidden bg-hero-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/80">
            <span className="h-px w-8 bg-accent" /> Next Chapter
          </p>
          <h2 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">The next 40</h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-primary-foreground/85">
            The first 40 years have built the foundation. Our focus now is on building the next 40.
          </p>
        </div>
        <img src={imgNext} alt="Dentex operator at an injection moulding machine control panel" loading="lazy" width={1600} height={1008} className="aspect-[16/10] w-full rounded-2xl object-cover" />
      </div>
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  );
}
