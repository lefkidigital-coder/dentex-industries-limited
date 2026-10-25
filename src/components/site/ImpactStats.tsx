import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarClock, Users, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/data/company";
import { countUp, reducedMotion } from "@/motion/core";
import { useScrollReveal } from "@/hooks/use-gsap";

/**
 * Credibility modules. Only verified Dentex figures are shown. Unverified
 * metrics (client count, production volume) are intentionally omitted -
 * add a new entry here once a figure is confirmed.
 */
const MODULES = [
  {
    icon: CalendarClock,
    value: COMPANY.yearsLabel,
    unit: "Years",
    title: "Manufacturing since 1986",
    note: "Nairobi-based rigid plastic packaging production.",
  },
  {
    icon: Users,
    value: COMPANY.employeesLabel,
    unit: "Team",
    title: "People on the floor",
    note: "Production, quality control, tooling and support staff.",
  },
  {
    icon: ShieldCheck,
    value: "QC",
    unit: "Every batch",
    title: "Rigorous quality control",
    note: COMPANY.qualityStatement,
  },
];

function Module({ m, index }: { m: (typeof MODULES)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const valueRef = useRef<HTMLSpanElement>(null);

  // Figures count up once, ending on the exact verified value.
  useEffect(() => {
    if (!inView || !valueRef.current || reducedMotion()) return;
    return countUp(valueRef.current, { delay: 0.35 + index * 0.12 });
  }, [inView, index]);

  return (
    <div ref={ref} className="relative">
      {/* Outline draws in once on first entry */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
        <motion.rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="16"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.1, delay: index * 0.12, ease: "easeInOut" }}
        />
      </svg>

      <div className="group relative rounded-2xl p-8 transition-colors hover:bg-card/60">
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.12 }}
          className="block h-1 w-12 origin-left rounded-full bg-accent"
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.35 + index * 0.12 }}
        >
          <div className="mt-6 flex items-baseline gap-2">
            <span ref={valueRef} className="text-5xl lg:text-6xl font-extrabold tracking-tight text-primary tabular-nums">
              {m.value}
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {m.unit}
            </span>
          </div>
          <p className="mt-4 text-base font-bold text-primary">{m.title}</p>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.note}</p>
        </motion.div>

        {/* Measurement detail */}
        <div className="mt-8 flex items-center gap-2 text-muted-foreground/60">
          <m.icon className="h-4 w-4" strokeWidth={1.5} />
          <span className="h-px flex-1 bg-border" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Verified</span>
        </div>
      </div>
    </div>
  );
}

export function ImpactStats() {
  const headRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-tech-grey py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Impact</p>
          <h2 data-lines className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Measured, controlled, and built over decades.
          </h2>
        </div>
        <div className="mt-8 sm:mt-12 grid gap-6 md:grid-cols-3">
          {MODULES.map((m, i) => (
            <Module key={m.title} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
