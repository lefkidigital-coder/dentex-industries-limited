# Motion system

Page transitions and animations for the Dentex site. The logic lives in plain
TypeScript on top of GSAP (already a dependency), so the same code drives the
React site now and can drive the WordPress theme after the migration.

## What it does

| Effect | Where | Timing |
| --- | --- | --- |
| Mould-close page change | Every internal link to another page | Halves close 0.34 s, red parting line with the page name, halves open 0.48 s |
| Hero entrance | All page heroes | Eyebrow fades up, headline rises line by line, then text, buttons and image |
| Scroll reveal | Every `Reveal` block | Rises 32 px over 0.9 s, once; `data-lines` headings rise line by line |
| Count-up | Impact figures (40, 70+) | 1.6 s, ends on the exact figure |
| Filter glide | Products grid | Non-matching cards leave at once; the rest glide 0.5 s; new cards rise in |
| Quick View | Product cards | Dialog rises and settles 0.6 s; product image follows |
| Buttons | Red `mould-press` buttons | Darker red sweeps in from the left on hover |
| Header | Sticky header | Soft shadow once the page scrolls |
| Contact form | Errors and success | Errors fade in, success tick draws itself |

Everything uses one easing family with no bounce, animates only transform and
opacity, plays once, and is switched off for visitors who ask their device for
reduced motion (pages then change instantly and nothing moves).

## Files

- `src/motion/core.ts`: reveal, hero entrance, count-up, grid glide, page-visibility gate
- `src/motion/page-transition.ts`: mould-close transition (single-page and multi-page modes)
- `src/motion/motion.css`: plain CSS for the above (no Tailwind syntax)
- `src/motion/standalone.ts`: auto-start entry for non-React pages
- React wiring: `src/hooks/use-gsap.ts`, `src/components/site/PageTransition.tsx`

## Using it in WordPress

1. Bundle the standalone entry into one script (GSAP is included):

   ```sh
   npx rolldown src/motion/standalone.ts --file dentex-motion.js --format iife --minify
   ```

2. Enqueue `dentex-motion.js` (in the head with `defer`, or in the footer) and
   `motion.css` on every page.

3. Use the same attributes as the React components:

   - `data-hero` on a hero, with children marked `data-anim="eyebrow" | "title" | "sub" | "cta" | "image"`
   - `data-reveal` on blocks that rise in when scrolled into view
   - `data-lines` on static headings inside a `data-reveal` block
   - `data-count` on figures that count up
   - `data-no-transition` on any link that should skip the page transition

4. Optional, to keep the next page covered from its first paint: print this in
   `<head>`

   ```html
   <script>try{if(sessionStorage.getItem("dtx-mould"))document.documentElement.setAttribute("data-mould","closed")}catch(e){}</script>
   ```

   and this right after `<body>`

   ```html
   <div class="dtx-mould" aria-hidden="true"><div class="dtx-mould__half dtx-mould__half--top"></div><div class="dtx-mould__half dtx-mould__half--bottom"></div><div class="dtx-mould__seam"></div><div class="dtx-mould__label"></div></div>
   ```

The product filter glide (`captureGrid` / `flipGrid`) works on any grid whose
cards carry `data-flip-id`; call `captureGrid` before changing the grid and
`flipGrid` after.

## Running a local preview without Cloudflare tooling

The default build targets Cloudflare. To preview the production build with
plain Node instead (PowerShell):

```powershell
$env:NITRO_PRESET = "node-server"; npm run build
$env:PORT = "4173"; node .output/server/index.mjs
```

Then open http://localhost:4173.
