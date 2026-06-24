import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

/**
 * Hero with a cursor-reactive "mould cavity" blob — the cursor appears to
 * deform the polymer surface beneath the hero copy. Falls back to a static
 * blob if the user prefers reduced motion or is on a touch device.
 */
export function MouldHero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [touch, setTouch] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.4);
  const sx = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 80, damping: 18, mass: 0.4 });

  useEffect(() => {
    setTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced || touch) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-primary"
    >
      {/* Base factory plate */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('https://picsum.photos/seed/dentex-factory/1920/1200')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(10,37,64,0.95) 0%, rgba(10,37,64,0.78) 60%, rgba(10,37,64,0.55) 100%)",
        }}
      />

      {/* Mould cavity — follows cursor, deforms slightly */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute hidden md:block"
        style={{
          left: useSpringPercent(sx),
          top: useSpringPercent(sy),
          x: "-50%",
          y: "-50%",
          width: 520,
          height: 520,
        }}
      >
        {/* Outer halo — heated polymer glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,166,81,0.32) 0%, rgba(0,166,81,0.10) 35%, transparent 65%)",
            filter: "blur(8px)",
          }}
        />
        {/* Cavity rim */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="cavity" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="rgba(255,255,255,0)" />
              <stop offset="85%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          <motion.circle
            cx="100"
            cy="100"
            r="62"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.6"
            strokeDasharray="2 3"
            animate={reduced ? undefined : { rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <circle cx="100" cy="100" r="78" fill="url(#cavity)" />
          {/* Ejector pin dots */}
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const r = (deg * Math.PI) / 180;
            return (
              <circle
                key={deg}
                cx={100 + Math.cos(r) * 48}
                cy={100 + Math.sin(r) * 48}
                r="1.2"
                fill="rgba(0,166,81,0.9)"
              />
            );
          })}
        </svg>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-primary-foreground"
        >
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Established 1986 · Nairobi, Kenya
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
            Precision Plastic Packaging for{" "}
            <span className="text-accent">East Africa's</span> Leading Brands
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
            For over 35 years, Dentex has been the trusted partner for rigid plastic packaging
            solutions — delivering quality, innovation, and integrity.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="mould-press group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-lg"
            >
              Explore Our Capabilities
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="mould-press inline-flex items-center gap-2 rounded-md border-2 border-white/30 bg-white/5 backdrop-blur px-6 py-3 text-base font-semibold text-primary-foreground"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Hint text — desktop only */}
      <div className="absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50 hidden md:block">
        Move cursor — shape the cavity
      </div>
    </section>
  );
}

// Helpers to turn a 0..1 spring into a CSS percentage string usable in `style`
import type { MotionValue } from "framer-motion";
import { useTransform } from "framer-motion";
function useSpringPercent(mv: MotionValue<number>) {
  return useTransform(mv, (v) => `${v * 100}%`);
}