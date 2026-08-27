import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

/** Gentle, once-only scroll reveal for a grouped block of content. */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    }, el);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [delay]);

  return ref;
}

/** Entrance timeline helper: animates the given targets in sequence on mount. */
export function useEntrance<T extends HTMLElement = HTMLDivElement>(selectors: string[]) {
  const ref = useRef<T | null>(null);
  const key = selectors.join("|");

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = key.split("|");
    if (prefersReducedMotion()) {
      targets.forEach((s) => gsap.set(root.querySelectorAll(s), { opacity: 1, y: 0, scale: 1 }));
      return;
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.85, ease: "power3.out" } });
      targets.forEach((sel, i) => {
        const nodes = root.querySelectorAll(sel);
        if (!nodes.length) return;
        const isImage = sel.includes("image");
        tl.fromTo(
          nodes,
          { opacity: 0, y: isImage ? 16 : 26, scale: isImage ? 0.97 : 1 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.08 },
          i === 0 ? 0 : "-=0.62",
        );
      });
    }, root);
    return () => ctx.revert();
  }, [key]);

  return ref;
}
