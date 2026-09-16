import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Draggable "Since 1986" timeline. As the user scrubs, a counter advances
 * and a simple factory/product silhouette set expands in real time -
 * reaching present day at the right edge.
 */
const MILESTONES = [
  { year: 1986, label: "Founded in Nairobi" },
  { year: 1995, label: "Pharma packaging line" },
  { year: 2005, label: "Food & beverage expansion" },
  { year: 2015, label: "Injection moulding upgrade" },
  { year: 2026, label: "Regional packaging leader" },
] as const;

const START = 1986;
const END = 2026;

export function HeritageScrubber() {
  const [year, setYear] = useState(END);
  const reduced = useReducedMotion();
  const progress = (year - START) / (END - START); // 0..1

  const machines = Math.max(1, Math.round(1 + progress * 11));
  const products = Math.max(1, Math.round(2 + progress * 30));

  return (
    <div className="overflow-hidden rounded-2xl bg-card border border-border/60 p-6 sm:p-8 shadow-sm">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Heritage Scrubber</p>
          <h3 className="mt-1 text-2xl font-bold text-primary">Drag to travel through Dentex history.</h3>
        </div>
        <div className="text-right">
          <div className="text-5xl font-extrabold text-primary tabular-nums leading-none">{year}</div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
            Year {year - START + 1} of operations
          </div>
        </div>
      </div>

      {/* Factory silhouette that grows */}
      <div className="mt-6 h-32 rounded-xl bg-primary/5 relative overflow-hidden">
        <svg viewBox="0 0 600 120" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          {/* Ground */}
          <line x1="0" y1="100" x2="600" y2="100" stroke="var(--primary)" strokeOpacity="0.2" strokeWidth="1" />
          {/* Factory units appear as year advances */}
          {Array.from({ length: 12 }).map((_, i) => {
            const visible = i < machines;
            const x = 20 + i * 48;
            return (
              <motion.g
                key={i}
                animate={{ opacity: visible ? 1 : 0.08, y: visible ? 0 : 8 }}
                transition={{ duration: reduced ? 0 : 0.35 }}
              >
                <rect x={x} y={60} width="32" height="40" fill="var(--primary)" />
                <polygon points={`${x},60 ${x + 16},44 ${x + 32},60`} fill="var(--accent)" />
                <rect x={x + 10} y={36} width="6" height="12" fill="var(--primary)" />
              </motion.g>
            );
          })}
          {/* Product silhouettes lined up below */}
          {Array.from({ length: 30 }).map((_, i) => {
            const visible = i < products;
            const x = 12 + i * 19.5;
            return (
              <motion.circle
                key={`p${i}`}
                cx={x}
                cy={112}
                r="3"
                fill="var(--accent)"
                animate={{ opacity: visible ? 1 : 0 }}
              />
            );
          })}
        </svg>
      </div>

      <div className="mt-6">
        <input
          type="range"
          min={START}
          max={END}
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          className="w-full accent-accent"
          aria-label="Year scrubber"
        />
        <div className="mt-3 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
          {MILESTONES.map((m) => (
            <button
              key={m.year}
              onClick={() => setYear(m.year)}
              className={`flex flex-col items-center gap-1 group ${year >= m.year ? "text-primary" : ""}`}
            >
              <span className={`h-2 w-2 rounded-full ${year >= m.year ? "bg-accent" : "bg-border"}`} />
              <span className="font-bold">{m.year}</span>
              <span className="hidden sm:block max-w-[110px] text-center normal-case tracking-normal text-[10px] text-muted-foreground group-hover:text-primary">
                {m.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}