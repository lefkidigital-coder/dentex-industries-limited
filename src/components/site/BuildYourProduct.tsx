import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

/**
 * "Build Your Product", the user picks a manufacturing process (injection or
 * blow moulding) and then steps manually through the five Dentex stages.
 * Nothing is scroll-triggered: the sequence is entirely user-controlled.
 */
type ProcessKey = "injection" | "blow";

const STAGE_CODES = ["01", "02", "03", "04", "05"] as const;
const STAGE_LABELS = ["Prepare", "Melt", "Form", "Cool", "Quality"] as const;

const PROCESSES: Record<
  ProcessKey,
  { label: string; stages: { title: string; copy: string }[] }
> = {
  injection: {
    label: "Injection Moulding",
    stages: [
      {
        title: "Material Preparation",
        copy: "Raw material resin and masterbatch/colourant are prepared and mixed according to the required customer specification.",
      },
      {
        title: "Feed & Melt",
        copy: "The prepared material is fed through the hopper into the injection moulding machine and melted inside the machine barrel.",
      },
      {
        title: "Injection Moulding",
        copy: "The molten resin is injected into the mould shaped according to the required product.",
      },
      {
        title: "Cool & Set",
        copy: "The moulded product is cooled and allowed to take its finished shape.",
      },
      {
        title: "Quality Control",
        copy: "The finished product undergoes rigorous quality control to ensure it meets customer requirements.",
      },
    ],
  },
  blow: {
    label: "Blow Moulding",
    stages: [
      {
        title: "Material Preparation",
        copy: "Raw material resin and masterbatch/colourant are prepared and mixed according to the required customer specification.",
      },
      {
        title: "Feed & Melt",
        copy: "The prepared material is fed through the hopper into the blow moulding machine and melted inside the machine barrel.",
      },
      {
        title: "Blow Moulding",
        copy: "The molten resin is extruded into the product-shaped mould.",
      },
      {
        title: "Cool & Set",
        copy: "The product is cooled inside the mould until it takes its finished form.",
      },
      {
        title: "Quality Control",
        copy: "The finished product undergoes rigorous quality control before being approved against customer requirements.",
      },
    ],
  },
};

const STEEL = "oklch(0.42 0.02 256)";
const STEEL_DARK = "oklch(0.30 0.02 256)";
const CAVITY = "oklch(0.22 0.01 260)";
const RESIN = "oklch(0.86 0.03 90)";
const MELT = "oklch(0.72 0.11 55)";
const SET = "oklch(0.90 0.015 250)";

/** Simple product profile used across the forming stages. */
function Product({ fill, opacity = 1 }: { fill: string; opacity?: number }) {
  return (
    <path
      d="M112 62 L128 62 L128 76 Q138 84 138 100 L138 152 Q138 162 128 162 L112 162 Q102 162 102 152 L102 100 Q102 84 112 76 Z"
      fill={fill}
      opacity={opacity}
    />
  );
}

function Mould({ children }: { children?: React.ReactNode }) {
  return (
    <g>
      <rect x="74" y="46" width="92" height="128" rx="4" fill={STEEL_DARK} />
      <rect x="78" y="50" width="84" height="120" rx="3" fill={CAVITY} />
      <line x1="120" y1="46" x2="120" y2="174" stroke="oklch(0.55 0.01 256)" strokeWidth="0.75" />
      {children}
    </g>
  );
}

function Prepare({ animate }: { animate: boolean }) {
  return (
    <g>
      {/* hopper */}
      <path d="M62 40 L178 40 L142 118 L98 118 Z" fill="none" stroke={STEEL} strokeWidth="2.5" />
      {Array.from({ length: 16 }).map((_, i) => {
        const x = 78 + (i % 6) * 17 + (Math.floor(i / 6) % 2) * 8;
        const y = 58 + Math.floor(i / 6) * 16;
        return (
          <motion.ellipse
            key={i}
            cx={x}
            cy={y}
            rx="5.5"
            ry="4"
            fill={i % 4 === 0 ? MELT : RESIN}
            initial={false}
            animate={animate ? { y: [0, 6, 0] } : { y: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
          />
        );
      })}
      <rect x="112" y="118" width="16" height="42" fill={STEEL} />
    </g>
  );
}

function Melt({ animate, process }: { animate: boolean; process: ProcessKey }) {
  return (
    <g>
      {/* barrel */}
      <rect x="40" y="88" width="160" height="30" rx="6" fill={STEEL} />
      <rect x="46" y="94" width="148" height="18" rx="4" fill={CAVITY} />
      <motion.rect
        x="46"
        y="94"
        height="18"
        rx="4"
        fill={MELT}
        initial={false}
        animate={animate ? { width: [40, 148, 40] } : { width: 100 }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* heater bands */}
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={56 + i * 36}
          y="80"
          width="24"
          height="46"
          rx="3"
          fill="none"
          stroke={MELT}
          strokeWidth="2"
          initial={false}
          animate={animate ? { opacity: [0.35, 0.9, 0.35] } : { opacity: 0.6 }}
          transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.25 }}
        />
      ))}
      <path d="M112 46 L128 46 L128 88 L112 88 Z" fill={STEEL} />

      {process === "injection" ? (
        /* reciprocating screw: the ram strokes back, then forward for the shot */
        <motion.g
          initial={false}
          animate={animate ? { x: [0, -16, 0] } : { x: -8 }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="30" y="98" width="26" height="10" rx="2" fill={STEEL_DARK} />
          <rect x="22" y="94" width="10" height="18" rx="2" fill={STEEL} />
        </motion.g>
      ) : (
        /* continuous extruder screw: material advances steadily to the die */
        <g>
          <rect x="24" y="96" width="26" height="14" rx="2" fill={STEEL_DARK} />
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.line
              key={i}
              x1={62 + i * 26}
              y1="97"
              x2={62 + i * 26}
              y2="109"
              stroke={STEEL_DARK}
              strokeWidth="2"
              initial={false}
              animate={animate ? { x: [0, 26] } : { x: 0 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
            />
          ))}
        </g>
      )}
    </g>
  );
}

/** Injection: the shot is forced through the nozzle and fills the closed cavity. */
function FormInjection({ animate }: { animate: boolean }) {
  const fillId = "dx-inject-fill";
  return (
    <g>
      <defs>
        <clipPath id={fillId}>
          <motion.rect
            x="96"
            width="52"
            initial={false}
            animate={animate ? { y: [166, 56, 56, 166], height: [0, 110, 110, 0] } : { y: 56, height: 110 }}
            transition={{ duration: 3.6, times: [0, 0.55, 0.85, 1], repeat: Infinity, ease: "easeInOut" }}
          />
        </clipPath>
      </defs>

      <Mould>
        {/* empty cavity outline of the part */}
        <g opacity="0.35">
          <Product fill="none" />
          <path
            d="M112 62 L128 62 L128 76 Q138 84 138 100 L138 152 Q138 162 128 162 L112 162 Q102 162 102 152 L102 100 Q102 84 112 76 Z"
            fill="none"
            stroke={SET}
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
        </g>
        {/* molten resin filling from the gate upward */}
        <g clipPath={`url(#${fillId})`}>
          <Product fill={MELT} />
        </g>
      </Mould>

      {/* nozzle, sprue and runner */}
      <rect x="14" y="96" width="46" height="18" rx="3" fill={STEEL} />
      <path d="M60 101 L78 101 L78 109 L60 109 Z" fill={STEEL_DARK} />
      <motion.rect
        x="60"
        y="102"
        height="6"
        fill={MELT}
        initial={false}
        animate={animate ? { width: [0, 18, 18, 0], opacity: [0.4, 1, 1, 0.4] } : { width: 18 }}
        transition={{ duration: 3.6, times: [0, 0.35, 0.85, 1], repeat: Infinity, ease: "easeInOut" }}
      />
      {/* clamp pressure marks */}
      <motion.g
        initial={false}
        animate={animate ? { opacity: [0.25, 0.7, 0.25] } : { opacity: 0.4 }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M170 104 L186 104" stroke={STEEL} strokeWidth="2.5" />
        <path d="M186 96 L186 112" stroke={STEEL} strokeWidth="2.5" />
      </motion.g>
    </g>
  );
}

/** Blow: a parison is extruded downward, the product-shaped mould closes and the parison forms out to the walls. */
function FormBlow({ animate }: { animate: boolean }) {
  const loop = { duration: 4.2, repeat: Infinity, ease: "easeInOut" as const };
  return (
    <g>
      {/* extrusion die head */}
      <rect x="100" y="14" width="40" height="16" rx="2" fill={STEEL} />
      <rect x="112" y="30" width="16" height="8" rx="1" fill={STEEL_DARK} />

      {/* parison extruded downward from the die */}
      <motion.rect
        x="114"
        y="38"
        width="12"
        rx="2"
        fill={MELT}
        initial={false}
        animate={animate ? { height: [0, 120, 120, 0], opacity: [0.6, 1, 0.15, 0] } : { height: 120 }}
        transition={{ ...loop, times: [0, 0.35, 0.62, 1] }}
      />

      {/* product-shaped mould halves closing around the parison */}
      <motion.g
        initial={false}
        animate={animate ? { x: [-22, -22, 0, 0, -22] } : { x: 0 }}
        transition={{ ...loop, times: [0, 0.3, 0.45, 0.85, 1] }}
      >
        <path d="M74 46 L120 46 L120 174 L74 174 Z" fill={STEEL_DARK} />
        <path
          d="M120 62 L112 62 L112 76 Q102 84 102 100 L102 152 Q102 162 112 162 L120 162 Z"
          fill={CAVITY}
        />
      </motion.g>
      <motion.g
        initial={false}
        animate={animate ? { x: [22, 22, 0, 0, 22] } : { x: 0 }}
        transition={{ ...loop, times: [0, 0.3, 0.45, 0.85, 1] }}
      >
        <path d="M120 46 L166 46 L166 174 L120 174 Z" fill={STEEL_DARK} />
        <path
          d="M120 62 L128 62 L128 76 Q138 84 138 100 L138 152 Q138 162 128 162 L120 162 Z"
          fill={CAVITY}
        />
      </motion.g>

      {/* the parison forms out to the cavity walls */}
      <motion.g
        style={{ originX: "120px", originY: "112px" }}
        initial={false}
        animate={animate ? { scaleX: [0.28, 0.28, 0.28, 1, 1, 0.28], opacity: [0, 0, 0.6, 1, 1, 0] } : { scaleX: 1, opacity: 1 }}
        transition={{ ...loop, times: [0, 0.35, 0.5, 0.68, 0.9, 1] }}
      >
        <Product fill={MELT} />
      </motion.g>

      {/* forming air line into the neck */}
      <motion.line
        x1="120"
        y1="38"
        x2="120"
        y2="70"
        stroke="oklch(0.72 0.07 230)"
        strokeWidth="2"
        strokeDasharray="5 4"
        initial={false}
        animate={animate ? { strokeDashoffset: [0, -18], opacity: [0, 0, 0.8, 0.8, 0] } : { opacity: 0.5 }}
        transition={{ ...loop, times: [0, 0.5, 0.62, 0.88, 1], ease: "linear" }}
      />
    </g>
  );
}

function Form({ animate, process }: { animate: boolean; process: ProcessKey }) {
  return process === "injection" ? <FormInjection animate={animate} /> : <FormBlow animate={animate} />;
}

function Cool({ animate, process }: { animate: boolean; process: ProcessKey }) {
  return (
    <g>
      <Mould>
        <Product fill={SET} />
      </Mould>
      {/* cooling channels */}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1="30"
          y1={72 + i * 34}
          x2="74"
          y2={72 + i * 34}
          stroke="oklch(0.72 0.07 230)"
          strokeWidth="2"
          strokeDasharray="6 5"
          initial={false}
          animate={animate ? { strokeDashoffset: [0, -22] } : { strokeDashoffset: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={`r${i}`}
          x1="166"
          y1={72 + i * 34}
          x2="210"
          y2={72 + i * 34}
          stroke="oklch(0.72 0.07 230)"
          strokeWidth="2"
          strokeDasharray="6 5"
          initial={false}
          animate={animate ? { strokeDashoffset: [0, -22] } : { strokeDashoffset: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
        />
      ))}

      {process === "injection" ? (
        /* ejector pins advance once the part has set */
        <motion.g
          initial={false}
          animate={animate ? { y: [0, -8, 0] } : { y: 0 }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="108" y="176" width="4" height="16" rx="2" fill={STEEL} />
          <rect x="128" y="176" width="4" height="16" rx="2" fill={STEEL} />
        </motion.g>
      ) : (
        /* the part holds its form against the cavity wall while it sets */
        <motion.g
          initial={false}
          animate={animate ? { opacity: [0.2, 0.6, 0.2] } : { opacity: 0.4 }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <line x1="120" y1="46" x2="120" y2="174" stroke={SET} strokeWidth="1" strokeDasharray="4 4" />
          <line x1="112" y1="40" x2="128" y2="40" stroke="oklch(0.72 0.07 230)" strokeWidth="2" />
        </motion.g>
      )}
    </g>
  );
}

function Quality({ animate }: { animate: boolean }) {
  return (
    <g>
      <rect x="60" y="168" width="120" height="6" rx="3" fill={STEEL_DARK} />
      <motion.g
        initial={animate ? { opacity: 0, y: 8 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Product fill={SET} />
      </motion.g>
      {/* inspection sweep */}
      <motion.line
        x1="88"
        y1="60"
        x2="152"
        y2="60"
        stroke="oklch(0.55 0.14 20)"
        strokeWidth="1.5"
        initial={false}
        animate={animate ? { y1: [60, 160, 60], y2: [60, 160, 60], opacity: [0.15, 0.55, 0.15] } : { opacity: 0.3 }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.g
        initial={animate ? { scale: 0.6, opacity: 0 } : false}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.35, type: "spring", stiffness: 220, damping: 20 }}
      >
        <circle cx="172" cy="58" r="14" fill="oklch(0.42 0.11 150)" />
        <path
          d="M165 58 L170 63 L179 53"
          fill="none"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </g>
  );
}

export function BuildYourProduct() {
  const [process, setProcess] = useState<ProcessKey>("injection");
  const [step, setStep] = useState(0);
  const reduced = useReducedMotion();
  const animate = !reduced;

  const stages = PROCESSES[process].stages;
  const current = stages[step];

  const next = () => setStep((s) => Math.min(s + 1, stages.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <section className="bg-tech-grey py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Inside Our Process</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Build a product, stage by stage.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose a manufacturing process, then step through each stage at your own pace and see how a
            Dentex product takes shape.
          </p>
        </div>

        {/* Process selection */}
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Manufacturing process">
          {(Object.keys(PROCESSES) as ProcessKey[]).map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={process === key}
              onClick={() => {
                setProcess(key);
                setStep(0);
              }}
              className={`mould-press rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-colors ${
                process === key
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-primary hover:border-accent"
              }`}
            >
              {PROCESSES[key].label}
            </button>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 grid lg:grid-cols-[1.1fr_1fr] gap-8 sm:gap-10 items-start">
          {/* Stage viewer */}
          <div className="min-w-0 bg-card rounded-2xl border border-border/60 p-4 sm:p-6 shadow-sm">
            <div className="aspect-[5/4] rounded-xl bg-primary/5 overflow-hidden relative">
              <svg viewBox="0 0 240 200" className="w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.g
                    key={`${process}-${step}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduced ? 0 : 0.3 }}
                  >
                    {step === 0 && <Prepare animate={animate} />}
                    {step === 1 && <Melt animate={animate} process={process} />}
                    {step === 2 && <Form animate={animate} process={process} />}
                    {step === 3 && <Cool animate={animate} process={process} />}
                    {step === 4 && <Quality animate={animate} />}
                  </motion.g>
                </AnimatePresence>
              </svg>
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-bold text-primary/70">
                {STAGE_CODES[step]} · {STAGE_LABELS[step]} · {PROCESSES[process].label}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:flex sm:justify-between sm:gap-3">
              <button
                onClick={prev}
                disabled={step === 0}
                className="mould-press inline-flex items-center justify-center gap-1 px-2 py-2 text-xs rounded-md bg-secondary text-primary font-semibold sm:px-4 sm:text-sm disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Stage {step + 1} / {stages.length}
              </span>
              <button
                onClick={next}
                disabled={step === stages.length - 1}
                className="mould-press inline-flex items-center justify-center gap-1 px-2 py-2 text-xs rounded-md bg-primary text-primary-foreground font-semibold sm:px-4 sm:text-sm disabled:opacity-40"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Stage detail + stage picker */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${process}-${step}-copy`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: reduced ? 0 : 0.25 }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {STAGE_CODES[step]} · {STAGE_LABELS[step]}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-primary">{current.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{current.copy}</p>
              </motion.div>
            </AnimatePresence>

            <ol className="mt-8 space-y-2" aria-label="Manufacturing stages">
              {stages.map((s, i) => (
                <li key={s.title + i}>
                  <button
                    onClick={() => setStep(i)}
                    aria-current={i === step}
                    className={`mould-press flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-colors ${
                      i === step
                        ? "border-accent bg-accent/10"
                        : "border-border bg-card hover:border-accent/50"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold tabular-nums ${
                        i === step ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {STAGE_CODES[i]}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                      {STAGE_LABELS[i]}
                    </span>
                    <span className="ml-auto text-xs text-muted-foreground hidden sm:inline">
                      {s.title}
                    </span>
                    {i < step && <Check className="h-4 w-4 text-accent shrink-0" />}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
