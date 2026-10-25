import { useEffect, useRef } from "react";
import { ScrollTrigger } from "@/lib/motion";
import { heroEntrance, reducedMotion, scrollReveal, whenPageVisible } from "@/motion/core";

/**
 * Once-only scroll reveal for a grouped block of content. Headings marked
 * `data-lines` inside the block rise line by line.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    let cleanup = () => {};
    const cancel = whenPageVisible(() => {
      cleanup = scrollReveal(el, { delay });
      ScrollTrigger.refresh();
    });
    return () => {
      cancel();
      cleanup();
    };
  }, [delay]);

  return ref;
}

/**
 * Hero entrance: plays the given parts in order once the page is visible.
 * A `data-anim="title"` element rises line by line; `data-anim="image"`
 * rises further and slower.
 */
export function useEntrance<T extends HTMLElement = HTMLDivElement>(selectors: string[]) {
  const ref = useRef<T | null>(null);
  const key = selectors.join("|");

  useEffect(() => {
    const root = ref.current;
    if (!root || reducedMotion()) return;
    let cleanup = () => {};
    const cancel = whenPageVisible(() => {
      cleanup = heroEntrance(root, key.split("|"));
    });
    return () => {
      cancel();
      cleanup();
    };
  }, [key]);

  return ref;
}
