import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Recycle, Play } from "lucide-react";

/**
 * Recycling loop interaction — user triggers a looping animation showing
 * polypropylene moving from finished product → recycled pellet → back into
 * the moulding process. Tied to the "100% recyclable polypropylene" claim.
 */
const STAGES = [
  { label: "Product", angle: 270 },
  { label: "Collected", angle: 0 },
  { label: "Pellet", angle: 90 },
  { label: "Re-moulded", angle: 180 },
] as const;

export function RecyclingLoop() {
  const [running, setRunning] = useState(false);
  const reduced = useReducedMotion();

  return (
    <div className="rounded-2xl bg-card border border-border/60 p-8 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
          <Recycle className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">100% Recyclable Polypropylene</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Trigger the loop to watch a single pellet's lifecycle through our process.
          </p>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div className="relative mx-auto w-[280px] h-[280px]">
          {/* Loop ring */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
            <circle cx="100" cy="100" r="78" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 6" opacity="0.45" />
          </svg>
          {/* Stage labels */}
          {STAGES.map((s) => {
            const r = ((s.angle - 90) * Math.PI) / 180;
            const left = 50 + Math.cos(r) * 44;
            const top = 50 + Math.sin(r) * 44;
            return (
              <div
                key={s.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-widest text-primary"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <span className="inline-block px-2 py-1 rounded-full bg-tech-grey border border-border">
                  {s.label}
                </span>
              </div>
            );
          })}
          {/* Traveling pellet */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-4 h-3 rounded-full bg-accent shadow-lg"
            style={{ x: -8, y: -6, transformOrigin: "8px 6px" }}
            animate={
              running && !reduced
                ? { rotate: 360, x: [-8, 100, -8, -116, -8], y: [-100, -6, 88, -6, -100] }
                : { x: -8, y: -100 }
            }
            transition={{
              duration: 5,
              repeat: running ? Infinity : 0,
              ease: "linear",
            }}
          />
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <button
            onClick={() => setRunning((r) => !r)}
            className="mould-press inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow"
          >
            <Play className="h-4 w-4" />
            {running ? "Pause the loop" : "Run the loop"}
          </button>
          <p className="text-xs text-muted-foreground md:text-right max-w-[14rem]">
            Every PP product we mould can re-enter our hopper as a pellet — closing the loop on the
            shop floor, not in theory.
          </p>
        </div>
      </div>
    </div>
  );
}