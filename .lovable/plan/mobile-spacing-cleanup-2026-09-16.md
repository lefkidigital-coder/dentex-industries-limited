# Mobile spacing cleanup

## Goal
Make every Dentex page flow continuously on phones without changing the existing visual direction, product presentation, content, tablet layout, or desktop layout.

## What will change
- Reduce oversized phone-only vertical padding and margins across shared page banners, content sections, calls to action, footer, and interactive homepage sections. Existing spacing returns at the current tablet/desktop breakpoints.
- Remove or relax mobile-only fixed/minimum heights that reserve unnecessary space, while retaining deliberate dimensions for actual product images and interactive diagrams.
- Make the homepage industry visual, manufacturing stage, values seal, recycling loop, product galleries, and map scale safely at 320–430px instead of forcing desktop-sized vertical areas.
- Harden entrance/reveal animations so content is visible immediately if animation setup is delayed or unavailable, and trigger phone reveals before they can appear as empty sections.
- Keep the sticky header at its current compact height and confirm the fixed WhatsApp button remains outside document flow.

## Pages covered
- Home
- About Us
- Our Products and every category
- Every product detail page
- Industries
- Quality & Innovation
- Contact Us
- Privacy Policy, Terms of Service, 404, shared footer and calls to action

## Validation
- Check all routes at 320px, 375px, 390px, and 430px widths.
- Measure section positions and detect unexplained vertical gaps, overflow, clipping, and overlap.
- Scroll each representative page from header through footer, verifying animations, product imagery, navigation, map, and WhatsApp placement.
- Confirm tablet and desktop retain their existing spacing and composition.

## Technical details
- Use responsive utility changes such as compact base spacing with `sm:`/`lg:` restoration rather than broad visual overrides.
- Keep content-driven section sizing; retain aspect ratios only where they represent real media or diagrams.
- Replace inline initial hidden reveal styling with animation-owned visibility and a safe fallback, preventing invisible content from creating apparent blank pages.
