/**
 * Dentex motion system, framework-agnostic.
 *
 * Everything here works on plain DOM elements and data attributes, so the same
 * module can drive the React site today and a WordPress theme later. React
 * components only call these functions; they never hold animation logic.
 *
 * Rules: one easing family, no bounce, transform/opacity only, every effect
 * plays once, and nothing moves when the visitor asks for reduced motion.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, Flip);
}

export const MOTION = {
  ease: "expo.out",
  easeInOut: "power2.inOut",
  fast: 0.18,
  base: 0.3,
  slow: 0.6,
  reveal: 0.9,
  rise: 32,
  stagger: 0.09,
} as const;

export function reducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ------------------------------------------------------------------ */
/* First load on phones                                                */
/* The server-rendered page is already on screen before scripts run.   */
/* On phones, where scripts arrive late, re-hiding that content to     */
/* play an entrance would blank the hero for seconds. So on the first  */
/* load of a phone-sized screen, content already on screen stays as    */
/* it is. Page changes (behind the mould) and desktop keep the full    */
/* entrance.                                                           */
/* ------------------------------------------------------------------ */

const MOBILE_QUERY = "(max-width: 1023.98px)";
let navigated = false;

/** Called when a page change starts, so later pages play their entrances. */
export function markNavigated() {
  navigated = true;
}

export function isInitialMobileLoad() {
  if (typeof window === "undefined" || navigated) return false;
  return window.matchMedia(MOBILE_QUERY).matches;
}

/** True when the element is at least partly inside the viewport now. */
export function onScreen(el: Element) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight && r.bottom > 0;
}

/* ------------------------------------------------------------------ */
/* Page visibility gate                                                */
/* While the mould transition covers the screen, entrance and reveal   */
/* animations wait, so they play when the visitor can actually see.    */
/* ------------------------------------------------------------------ */

const MOULD_ATTR = "data-mould";
export const PAGE_VISIBLE_EVENT = "dtx:page-visible";

export function whenPageVisible(cb: () => void): () => void {
  if (typeof document === "undefined") return () => {};
  if (document.documentElement.getAttribute(MOULD_ATTR) !== "closed") {
    cb();
    return () => {};
  }
  const handler = () => cb();
  window.addEventListener(PAGE_VISIBLE_EVENT, handler, { once: true });
  return () => window.removeEventListener(PAGE_VISIBLE_EVENT, handler);
}

/* ------------------------------------------------------------------ */
/* Masked line reveal for headings                                     */
/* ------------------------------------------------------------------ */

/**
 * Splits a static heading into lines and raises each one out of its own
 * mask. The original markup is restored when the animation ends, so the
 * heading is plain text again for resizing, copying and screen readers.
 * Only use on headings whose text does not change while mounted.
 */
export function revealLines(el: HTMLElement, opts: { delay?: number; duration?: number } = {}) {
  const split = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "dtx-line" });
  const tween = gsap.from(split.lines, {
    yPercent: 110,
    duration: opts.duration ?? MOTION.reveal,
    delay: opts.delay ?? 0,
    stagger: MOTION.stagger,
    ease: MOTION.ease,
    onComplete: () => split.revert(),
  });
  return () => {
    tween.kill();
    split.revert();
  };
}

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */

/**
 * Raises a block into place the first time it scrolls into view, and runs
 * the line reveal on any `[data-lines]` heading inside it.
 */
export function scrollReveal(el: HTMLElement, opts: { delay?: number } = {}) {
  const delay = opts.delay ?? 0;
  const headings = Array.from(el.querySelectorAll<HTMLElement>("[data-lines]"));
  if (el.matches("[data-lines]")) headings.unshift(el);
  const cleanups: (() => void)[] = [];

  const ctx = gsap.context(() => {
    gsap.set(el, { opacity: 0, y: MOTION.rise });
    ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, duration: MOTION.reveal, delay, ease: MOTION.ease, clearProps: "transform" });
        headings.forEach((h) => cleanups.push(revealLines(h, { delay: delay + 0.12 })));
      },
    });
  }, el);

  return () => {
    cleanups.forEach((c) => c());
    ctx.revert();
  };
}

/* ------------------------------------------------------------------ */
/* Entrance sequence for page heroes                                   */
/* ------------------------------------------------------------------ */

/**
 * Plays a hero entrance: the eyebrow fades up, the title rises line by line,
 * then the remaining parts follow in order. `steps` are selectors inside
 * `root`; a step whose element has `data-anim="title"` gets the line reveal.
 */
export function heroEntrance(root: HTMLElement, steps: string[]) {
  const cleanups: (() => void)[] = [];
  const ctx = gsap.context(() => {
    let at = 0;
    steps.forEach((sel) => {
      const nodes = Array.from(root.querySelectorAll<HTMLElement>(sel));
      if (!nodes.length) return;
      nodes.forEach((node) => {
        const kind = node.dataset.anim;
        if (kind === "title") {
          cleanups.push(revealLines(node, { delay: at, duration: 0.85 }));
          at += 0.35;
        } else if (kind === "image") {
          gsap.from(node, { opacity: 0, y: 60, duration: 1.1, delay: at, ease: MOTION.ease, clearProps: "transform,opacity" });
        } else {
          gsap.from(node, { opacity: 0, y: 16, duration: 0.7, delay: at, ease: MOTION.ease, clearProps: "transform,opacity" });
          at += 0.12;
        }
      });
    });
  }, root);
  return () => {
    cleanups.forEach((c) => c());
    ctx.revert();
  };
}

/* ------------------------------------------------------------------ */
/* Count-up for figures such as "40" or "70+"                          */
/* ------------------------------------------------------------------ */

export function countUp(el: HTMLElement, opts: { delay?: number } = {}) {
  const text = el.textContent ?? "";
  const match = text.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return () => {};
  const [, prefix, digits, suffix] = match;
  const target = Number(digits);
  const state = { v: 0 };
  el.textContent = `${prefix}0${suffix}`;
  const tween = gsap.to(state, {
    v: target,
    duration: 1.6,
    delay: opts.delay ?? 0,
    ease: "power4.out",
    onUpdate: () => {
      el.textContent = `${prefix}${Math.round(state.v)}${suffix}`;
    },
    onComplete: () => {
      el.textContent = text;
    },
  });
  return () => {
    tween.kill();
    el.textContent = text;
  };
}

/* ------------------------------------------------------------------ */
/* Group entrance (cards that are already on screen)                   */
/* ------------------------------------------------------------------ */

export function riseIn(targets: Element[], opts: { delay?: number; stagger?: number } = {}) {
  if (!targets.length) return;
  // Large groups share a fixed stagger budget so the last card never lags.
  const each = Math.min(opts.stagger ?? 0.06, 0.45 / targets.length);
  gsap.fromTo(
    targets,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: opts.delay ?? 0,
      stagger: each,
      ease: MOTION.ease,
      clearProps: "transform,opacity",
    },
  );
}

/* ------------------------------------------------------------------ */
/* Filtered grids: cards glide to their new places                     */
/* ------------------------------------------------------------------ */

/** Call before the grid changes. Returns the state to pass to `flipGrid`. */
export function captureGrid(grid: HTMLElement | null) {
  if (!grid || reducedMotion()) return null;
  return Flip.getState(grid.querySelectorAll("[data-flip-id]"));
}

/**
 * Call after the grid has re-rendered. Cards that stayed glide from their old
 * position; new cards rise in. Removed cards are already gone, so filtering
 * never waits on an exit animation.
 */
export function flipGrid(grid: HTMLElement | null, state: Flip.FlipState | null) {
  if (!grid || !state) return;
  Flip.from(state, {
    targets: grid.querySelectorAll("[data-flip-id]"),
    duration: 0.5,
    ease: MOTION.ease,
    absolute: false,
    nested: false,
    onEnter: (els) => riseIn(els, { delay: 0.06 }),
  });
}

export { gsap, ScrollTrigger };
