/**
 * Auto-start for non-React pages (e.g. the WordPress theme).
 *
 * Bundle this file into one script, load it on every page together with
 * motion.css, and mark up the HTML with the same attributes the React site
 * uses:
 *
 *   data-hero                 hero block; its children use data-anim="eyebrow|title|sub|cta|image"
 *   data-reveal               block that rises in once when scrolled into view
 *   data-lines                static heading inside a data-reveal block; rises line by line
 *   data-count                figure such as "40" or "70+" that counts up once
 *   data-no-transition        link that should skip the mould page transition
 *
 * The React site does not import this file; it calls the same functions
 * through hooks instead.
 */
import { countUp, heroEntrance, reducedMotion, ScrollTrigger, scrollReveal, whenPageVisible } from "./core";
import { initMouldTransition } from "./page-transition";

const HERO_STEPS = ["[data-anim='eyebrow']", "[data-anim='title']", "[data-anim='sub']", "[data-anim='cta']", "[data-anim='image']"];

function start() {
  initMouldTransition({ crossDocument: true, headerSelector: "header" });
  if (reducedMotion()) return;

  whenPageVisible(() => {
    document.querySelectorAll<HTMLElement>("[data-hero]").forEach((el) => heroEntrance(el, HERO_STEPS));
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => scrollReveal(el));
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => countUp(el) });
    });
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
else start();
