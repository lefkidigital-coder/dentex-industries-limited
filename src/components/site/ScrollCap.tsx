import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Persistent visual motif: a tiny rotating bottle-cap that travels along the
 * top edge of the viewport as the user scrolls — reinforces the
 * "physical product" branding without a third-party progress bar.
 */
export function ScrollCap() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const left = useTransform(x, (v) => `${v * 100}%`);
  const rotate = useTransform(x, (v) => v * 720);

  return (
    <div aria-hidden className="fixed top-0 inset-x-0 z-[60] pointer-events-none">
      <div className="relative h-[3px] bg-primary/10">
        <motion.div className="absolute top-0 left-0 h-full bg-accent origin-left" style={{ scaleX: x }} />
        <motion.div
          className="absolute -top-[7px] motion-reduce:hidden"
          style={{ left, x: "-50%", rotate }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" fill="var(--accent)" stroke="var(--primary)" strokeWidth="1.5" />
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="12"
                y1="4"
                x2="12"
                y2="6"
                stroke="var(--primary)"
                strokeWidth="1.2"
                strokeLinecap="round"
                transform={`rotate(${i * 30} 12 12)`}
              />
            ))}
            <circle cx="12" cy="12" r="3" fill="var(--primary)" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}