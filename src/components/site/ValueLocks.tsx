import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Users, Lightbulb, Scale } from "lucide-react";

/**
 * The four Dentex values rendered as four mould-press tiles. Each one
 * "presses down and locks" on click/hover and reveals its description; once
 * all four are locked, a central seal completes, reinforcing that the four
 * values form one integrated standard.
 */
const VALUES = [
  { key: "customer", title: "Customer Focus", icon: Users, body: "We prioritise our customers' needs, delivering customised solutions and exceptional service." },
  { key: "quality", title: "Quality", icon: ShieldCheck, body: "Uncompromising quality is embedded in every step, from raw material to final inspection." },
  { key: "innovation", title: "Innovation", icon: Lightbulb, body: "Continuous R&D investment keeps Dentex at the leading edge of packaging technology." },
  { key: "integrity", title: "Integrity", icon: Scale, body: "Honesty and transparency in every interaction, with customers, partners and employees." },
] as const;

type Key = (typeof VALUES)[number]["key"];

export function ValueLocks() {
  const [locked, setLocked] = useState<Set<Key>>(new Set());
  const reduced = useReducedMotion();
  const allLocked = locked.size === VALUES.length;

  const toggle = (k: Key) =>
    setLocked((prev) => {
      const next = new Set(prev);
      next.has(k) ? next.delete(k) : next.add(k);
      return next;
    });

  return (
    <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(137,23,40,0.5), transparent 50%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground">Our Values</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Four values. One closed mould.
          </h2>
          <p className="mt-4 text-primary-foreground/90">
            Press each value to lock it in, when all four close, the seal completes.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr_320px] gap-10 items-center">
          <div className="grid sm:grid-cols-2 gap-4">
            {VALUES.map((v) => {
              const isLocked = locked.has(v.key);
              return (
                <motion.button
                  key={v.key}
                  onClick={() => toggle(v.key)}
                  className="text-left rounded-2xl border-2 p-6 relative overflow-hidden"
                  animate={
                    reduced
                      ? undefined
                      : isLocked
                        ? { y: 6, scale: 0.985, borderColor: "var(--accent)" }
                        : { y: 0, scale: 1, borderColor: "rgba(255,255,255,0.15)" }
                  }
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  style={{ background: isLocked ? "rgba(137,23,40,0.14)" : "rgba(255,255,255,0.04)" }}
                  whileHover={{ y: 2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`grid h-10 w-10 place-items-center rounded-lg ${isLocked ? "bg-accent text-accent-foreground" : "bg-white/10 text-primary-foreground"}`}>
                      <v.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">{v.title}</h3>
                    <span className={`ml-auto text-[10px] uppercase tracking-widest font-bold ${isLocked ? "text-primary-foreground" : "text-primary-foreground/70"}`}>
                      {isLocked ? "Locked" : "Press"}
                    </span>
                  </div>
                  <motion.p
                    initial={false}
                    animate={{ height: isLocked ? "auto" : 0, opacity: isLocked ? 1 : 0 }}
                    className="text-sm text-primary-foreground/95 leading-relaxed overflow-hidden"
                  >
                    <span className="block pt-3">{v.body}</span>
                  </motion.p>
                  {/* Mould platen lines */}
                  <div className="absolute inset-x-3 top-2 h-[2px] rounded-full bg-accent/40" />
                  <div className="absolute inset-x-3 bottom-2 h-[2px] rounded-full bg-accent/40" />
                </motion.button>
              );
            })}
          </div>

          {/* Central seal */}
          <div className="relative aspect-square">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="86" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="3 5" />
              {VALUES.map((v, i) => {
                const isLocked = locked.has(v.key);
                const angle = (i / VALUES.length) * Math.PI * 2 - Math.PI / 2;
                const x = 100 + Math.cos(angle) * 60;
                const y = 100 + Math.sin(angle) * 60;
                return (
                  <motion.circle
                    key={v.key}
                    cx={x}
                    cy={y}
                    r="14"
                    fill={isLocked ? "var(--accent)" : "rgba(255,255,255,0.08)"}
                    stroke="var(--accent)"
                    strokeWidth="2"
                    animate={{ scale: isLocked ? 1 : 0.9 }}
                  />
                );
              })}
              <motion.circle
                cx="100"
                cy="100"
                r="36"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                animate={{ rotate: allLocked && !reduced ? 360 : 0, opacity: allLocked ? 1 : 0.3 }}
                transition={{ duration: 8, repeat: allLocked ? Infinity : 0, ease: "linear" }}
                style={{ transformOrigin: "100px 100px" }}
                strokeDasharray="6 4"
              />
              <motion.text
                x="100"
                y="105"
                textAnchor="middle"
                className="text-[10px] uppercase tracking-widest"
                fill={allLocked ? "var(--accent)" : "rgba(255,255,255,0.5)"}
                style={{ font: "700 9px Inter, sans-serif", letterSpacing: "2px" }}
                animate={{ scale: allLocked ? 1 : 0.9 }}
              >
                {allLocked ? "DENTEX SEAL" : `${locked.size} / 4 LOCKED`}
              </motion.text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}