/**
 * "Mould close" page transition, framework-agnostic.
 *
 * On an internal link click, two halves close over the page (below the
 * header), a red parting line draws across with the destination's name, the
 * navigation happens behind it, then the halves open onto the new page.
 *
 * - Single-page apps (the current React site) pass a `navigate` function that
 *   resolves once the new route has rendered.
 * - Multi-page sites (a WordPress theme) set `crossDocument: true`: the halves
 *   close, the browser loads the next page, and that page starts closed and
 *   opens as soon as it is ready.
 *
 * Visitors who prefer reduced motion get normal, instant navigation.
 */
import { gsap, markNavigated, MOTION, PAGE_VISIBLE_EVENT, reducedMotion } from "./core";

const STORAGE_KEY = "dtx-mould";
const MAX_WAIT_MS = 4000;

export type MouldTransitionOptions = {
  /** Performs the navigation. Resolve when the new page has rendered. */
  navigate?: (url: URL) => void | Promise<unknown>;
  /** Element kept visible above the halves, normally the sticky header. */
  headerSelector?: string;
  /** Text shown on the parting line, e.g. "OUR PRODUCTS". */
  labelFor?: (url: URL) => string;
  /** Multi-page mode: let the browser load the next page. */
  crossDocument?: boolean;
};

export function initMouldTransition(opts: MouldTransitionOptions = {}) {
  const html = document.documentElement;
  // A server-rendered theme may print the markup itself so the next page is
  // covered from its very first paint; otherwise it is created here.
  const existing = document.querySelector<HTMLElement>(".dtx-mould");
  const root = existing ?? document.createElement("div");
  if (!existing) {
    root.className = "dtx-mould";
    root.setAttribute("aria-hidden", "true");
    root.innerHTML =
      '<div class="dtx-mould__half dtx-mould__half--top"></div>' +
      '<div class="dtx-mould__half dtx-mould__half--bottom"></div>' +
      '<div class="dtx-mould__seam"></div>' +
      '<div class="dtx-mould__label"></div>';
    document.body.appendChild(root);
  }
  const top = root.children[0] as HTMLElement;
  const bottom = root.children[1] as HTMLElement;
  const seam = root.children[2] as HTMLElement;
  const label = root.children[3] as HTMLElement;

  let busy = false;
  let timeline: gsap.core.Timeline | null = null;

  function placeBelowHeader() {
    const header = opts.headerSelector ? document.querySelector(opts.headerSelector) : null;
    const offset = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
    root.style.top = `${offset}px`;
  }

  function markClosed() {
    html.setAttribute("data-mould", "closed");
  }

  function announceVisible() {
    html.removeAttribute("data-mould");
    window.dispatchEvent(new Event(PAGE_VISIBLE_EVENT));
  }

  function open() {
    timeline?.kill();
    root.classList.add("is-active");
    gsap.set([top, bottom], { yPercent: 0 });
    timeline = gsap
      .timeline({
        onComplete: () => {
          root.classList.remove("is-active");
          busy = false;
        },
      })
      .to([seam, label], { opacity: 0, duration: 0.16, ease: "none" })
      .to(top, { yPercent: -101, duration: 0.48, ease: MOTION.easeInOut }, "<")
      .to(bottom, { yPercent: 101, duration: 0.48, ease: MOTION.easeInOut }, "<")
      .call(announceVisible, [], 0.12);
  }

  function close(url: URL) {
    busy = true;
    markNavigated();
    markClosed();
    placeBelowHeader();
    label.textContent = opts.labelFor?.(url) ?? "";
    root.classList.add("is-active");
    timeline?.kill();
    timeline = gsap
      .timeline()
      .fromTo(top, { yPercent: -101 }, { yPercent: 0, duration: 0.34, ease: MOTION.easeInOut }, 0)
      .fromTo(bottom, { yPercent: 101 }, { yPercent: 0, duration: 0.34, ease: MOTION.easeInOut }, 0)
      .fromTo(seam, { scaleX: 0, opacity: 1 }, { scaleX: 1, duration: 0.32, ease: MOTION.ease })
      .fromTo(label, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.26, ease: MOTION.ease }, "<")
      .call(() => void go(url), [], "+=0.06");
  }

  async function go(url: URL) {
    if (opts.crossDocument || !opts.navigate) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* storage blocked: the next page simply loads without the opening */
      }
      window.location.assign(url.href);
      return;
    }
    const timeout = new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS));
    try {
      await Promise.race([opts.navigate(url), timeout]);
    } catch {
      /* navigation errors are shown by the router; still reveal the page */
    }
    // Two frames so the new page has painted before the halves open.
    requestAnimationFrame(() => requestAnimationFrame(open));
  }

  function onClick(e: MouseEvent) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const target = e.target as Element | null;
    const a = target?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!a) return;
    if ((a.target && a.target !== "_self") || a.hasAttribute("download") || a.hasAttribute("data-no-transition")) return;
    const url = new URL(a.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    // Same page (filters, anchors, search changes): no transition.
    if (url.pathname === window.location.pathname) return;
    if (reducedMotion()) return;
    e.preventDefault();
    if (!busy) close(url);
  }

  // Multi-page mode: the previous page closed the mould; open it here.
  function resume() {
    let pending = false;
    try {
      pending = sessionStorage.getItem(STORAGE_KEY) === "1";
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      pending = false;
    }
    if (!pending || reducedMotion()) {
      announceVisible();
      return;
    }
    markClosed();
    placeBelowHeader();
    root.classList.add("is-active");
    gsap.set([top, bottom], { yPercent: 0 });
    gsap.set(seam, { scaleX: 1, opacity: 1 });
    requestAnimationFrame(() => requestAnimationFrame(open));
  }

  // Back/forward cache can restore a page that was left closed.
  function onPageShow(e: PageTransitionEvent) {
    if (e.persisted && root.classList.contains("is-active")) open();
  }

  document.addEventListener("click", onClick, true);
  window.addEventListener("pageshow", onPageShow);
  if (opts.crossDocument) resume();

  return {
    destroy() {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("pageshow", onPageShow);
      timeline?.kill();
      if (!existing) root.remove();
      html.removeAttribute("data-mould");
    },
  };
}
