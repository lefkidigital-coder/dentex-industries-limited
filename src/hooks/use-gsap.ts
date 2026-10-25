import { useEffect, useRef } from "react";
import { ScrollTrigger } from "@/lib/motion";
import { heroEntrance, isInitialMobileLoad, onScreen, reducedMotion, scrollReveal, whenPageVisible } from "@/motion/core";

/**
 * Once-only scroll reveal for a grouped block of content. Headings marked
 * `data-lines` inside the block rise line by line. On a phone's first load,
 * a block that is already on screen stays visible instead of replaying.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    if (isInitialMobileLoad() && onScreen(el)) return;
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
 * rises further and slower. On a phone's first load the hero is already
 * showing, so it is left as it is rather than hidden and replayed.
 */
export function useEntrance<T extends HTMLElement = HTMLDivElement>(selectors: string[]) {
  const ref = useRef<T | null>(null);
  const key = selectors.join("|");

  useEffect(() => {
    const root = ref.current;
    if (!root || reducedMotion() || isInitialMobileLoad()) return;
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
