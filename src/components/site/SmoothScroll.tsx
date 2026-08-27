import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

/**
 * Subtle inertial scrolling on desktop pointers only. Touch devices keep
 * native scrolling. ScrollTrigger is driven off Lenis so positions stay synced.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    if (!mq.matches) return;

    const lenis = new Lenis({ duration: 0.9, smoothWheel: true, syncTouch: false });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
