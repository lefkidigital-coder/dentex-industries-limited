<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep industry taxonomy and multi-sector product matching in `src/data/industries.ts`, separate from product categories, so filters compose without changing catalogue records.
- Product filter state uses validated URL search parameters, so industry CTAs, refreshes and shared links retain the selection.
- Reuse `InspectionHero` for the approved Quality and Industries introduction layouts; crop image-only regions from supplied references rather than embedding screenshot text or navigation.
