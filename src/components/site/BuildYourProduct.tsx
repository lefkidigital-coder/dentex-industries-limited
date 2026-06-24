import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * "Build Your Product" — click through the five stages of injection moulding
 * (raw material → heated → injected → cooled → finished). The user controls
 * the sequence (no autoplay), mirroring precision control on the shop floor.
 */
const stages = [
  { key: "raw", label: "Raw Pellets", note: "Virgin polypropylene resin loaded into the hopper." },
  { key: "heated", label: "Heated", note: "Resin melted at ~220°C into a homogeneous flow." },
  { key: "injected", label: "Injected", note: "Molten polymer injected under pressure into the mould cavity." },
  { key: "cooled", label: "Cooled", note: "Cavity cools and the part solidifies to spec tolerance." },
  { key: "finished", label: "Finished", note: "Ejected, inspected, and ready for the customer." },
] as const;

type Silhouette = "bottle" | "tub" | "cap";

function Pellets({ active }: { active: boolean }) {
  return (
    <g>
      {Array.from({ length: 18 }).map((_, i) => {
        const x = 40 + (i % 6) * 22;
        const y = 60 + Math.floor(i / 6) * 18;
        return (
          <motion.ellipse
            key={i}
            cx={x}
            cy={y}
            rx="7"
            ry="5"
            fill="oklch(0.85 0.05 90)"
            animate={active ? { y: [y - 4, y, y - 4] } : { y }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.05 }}
          />
        );
      })}
    </g>
  );
}

function HeatBars({ active }: { active: boolean }) {
  return (
    <g>
      <rect x="40" y="100" width="160" height="28" rx="6" fill="oklch(0.92 0.02 60)" />
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={50 + i * 36}
          y="106"
          width="28"
          height="16"
          rx="3"
          fill="oklch(0.7 0.18 40)"
          animate={active ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.4 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </g>
  );
}

function Injection({ active, silhouette }: { active: boolean; silhouette: Silhouette }) {
  return (
    <g>
      <rect x="40" y="40" width="60" height="120" rx="4" fill="oklch(0.4 0.02 256)" />
      <motion.rect
        x={100}
        width="40"
        height="14"
        y="93"
        fill="oklch(0.62 0.18 148)"
        animate={active ? { width: [10, 70, 10] } : { width: 30 }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <CavityWithShape silhouette={silhouette} fill="oklch(0.62 0.18 148 / 0.6)" />
    </g>
  );
}

function Cooling({ silhouette }: { silhouette: Silhouette }) {
  return (
    <g>
      <CavityWithShape silhouette={silhouette} fill="oklch(0.7 0.1 200 / 0.7)" />
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={180 + i * 14}
          cy="60"
          r="4"
          fill="oklch(0.85 0.07 220)"
          animate={{ y: [0, -20, -40], opacity: [0.8, 0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </g>
  );
}

function Finished({ silhouette }: { silhouette: Silhouette }) {
  return (
    <motion.g
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      <Silhouette s={silhouette} fill="oklch(0.62 0.18 148)" />
    </motion.g>
  );
}

function Silhouette({ s, fill }: { s: Silhouette; fill: string }) {
  if (s === "bottle") {
    return (
      <path
        d="M110 50 L130 50 L130 64 Q140 70 140 86 L140 156 Q140 168 128 168 L112 168 Q100 168 100 156 L100 86 Q100 70 110 64 Z"
        fill={fill}
      />
    );
  }
  if (s === "tub") {
    return (
      <path
        d="M88 70 L152 70 L148 162 Q148 168 142 168 L98 168 Q92 168 92 162 Z"
        fill={fill}
      />
    );
  }
  return (
    <g>
      <ellipse cx="120" cy="110" rx="40" ry="14" fill={fill} />
      <rect x="80" y="106" width="80" height="22" fill={fill} />
      <ellipse cx="120" cy="128" rx="40" ry="10" fill="oklch(0.5 0.16 148)" />
    </g>
  );
}

function CavityWithShape({ silhouette, fill }: { silhouette: Silhouette; fill: string }) {
  return (
    <g>
      <rect x="76" y="40" width="100" height="140" rx="6" fill="oklch(0.3 0.02 256)" />
      <rect x="80" y="44" width="92" height="132" rx="4" fill="oklch(0.18 0.005 264)" />
      <Silhouette s={silhouette} fill={fill} />
    </g>
  );
}

export function BuildYourProduct() {
  const [step, setStep] = useState(0);
  const [silhouette, setSilhouette] = useState<Silhouette>("bottle");
  const reduced = useReducedMotion();

  const next = () => setStep((s) => Math.min(s + 1, stages.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <section className="bg-tech-grey py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Inside Our Process</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Build a product, stage by stage.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Step through the five stages of injection moulding — at your own pace — and watch a finished
            Dentex product take shape.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          {/* Stage viewer */}
          <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm">
            <div className="aspect-[5/4] rounded-xl bg-primary/5 overflow-hidden relative">
              <svg viewBox="0 0 240 200" className="w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.g
                    key={stages[step].key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduced ? 0 : 0.3 }}
                  >
                    {step === 0 && <Pellets active={!reduced} />}
                    {step === 1 && <HeatBars active={!reduced} />}
                    {step === 2 && <Injection active={!reduced} silhouette={silhouette} />}
                    {step === 3 && <Cooling silhouette={silhouette} />}
                    {step === 4 && <Finished silhouette={silhouette} />}
                  </motion.g>
                </AnimatePresence>
              </svg>
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-bold text-primary/70">
                Stage {step + 1} / {stages.length}
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <button
                onClick={prev}
                disabled={step === 0}
                className="mould-press inline-flex items-center gap-1 px-4 py-2 rounded-md bg-secondary text-primary font-semibold text-sm disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" /> Prev
              </button>
              <div className="flex-1 mx-2">
                <input
                  type="range"
                  min={0}
                  max={stages.length - 1}
                  value={step}
                  onChange={(e) => setStep(parseInt(e.target.value))}
                  className="w-full accent-accent"
                  aria-label="Moulding stage"
                />
              </div>
              <button
                onClick={next}
                disabled={step === stages.length - 1}
                className="mould-press inline-flex items-center gap-1 px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-sm disabled:opacity-40"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Stage info + silhouette picker */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {stages[step].label}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-primary">{stages[step].note}</h3>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Target product</p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {(["bottle", "tub", "cap"] as Silhouette[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSilhouette(s)}
                    className={`mould-press rounded-xl border-2 p-3 text-sm font-semibold capitalize ${
                      silhouette === s
                        ? "border-accent bg-accent/10 text-primary"
                        : "border-border bg-card text-foreground/70 hover:border-accent/50"
                    }`}
                  >
                    <svg viewBox="0 0 240 200" className="w-full h-16">
                      <Silhouette s={s} fill="currentColor" />
                    </svg>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <ol className="mt-8 grid grid-cols-5 gap-1 text-[10px] font-semibold uppercase tracking-wider">
              {stages.map((s, i) => (
                <li
                  key={s.key}
                  className={`text-center py-2 rounded ${
                    i <= step ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {s.label}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}