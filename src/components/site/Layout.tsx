import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollCap } from "./ScrollCap";
import { WhatsAppFab } from "./WhatsApp";
import { SmoothScroll } from "./SmoothScroll";
import { useEntrance, useScrollReveal } from "@/hooks/use-gsap";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-background font-sans antialiased">
      <SmoothScroll />
      <ScrollCap />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  const ref = useEntrance<HTMLDivElement>(["[data-anim='eyebrow']", "[data-anim='title']", "[data-anim='sub']"]);
  return (
    <section className="relative overflow-hidden bg-hero-deep text-primary-foreground">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(137,23,40,0.45), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div ref={ref} className="max-w-3xl">
          {eyebrow && <p data-anim="eyebrow" className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground accent-underline mb-4">{eyebrow}</p>}
          <h1 data-anim="title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">{title}</h1>
          {subtitle && <p data-anim="sub" className="mt-6 text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">{subtitle}</p>}
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useScrollReveal<HTMLDivElement>(delay);
  return (
    <div ref={ref}>
      {children}
    </div>
  );
}
