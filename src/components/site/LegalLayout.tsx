import type { ReactNode } from "react";
import { Layout, PageHero } from "./Layout";

export function LegalLayout({
  title,
  subtitle,
  updated,
  children,
}: {
  title: string;
  subtitle: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <Layout>
      <PageHero eyebrow="Legal" title={title} subtitle={subtitle} />
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Last updated: {updated}</p>
          <div className="mt-8 space-y-8">{children}</div>
        </div>
      </section>
    </Layout>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">{heading}</h2>
      <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}
