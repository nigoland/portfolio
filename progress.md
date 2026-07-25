# Portfolio Site — Progress

## Session Handoff
_Updated: 2026-07-19_

**Next action:** Continue the design-consistency pass. Home/About/Work/case-study pages, Header, and Footer link colors were just fixed — re-check them live in the browser first, then extend the same audit to remaining shared components not yet reviewed this session: `Tag` chips (About page skills/languages), `Button` secondary/ghost variants, `ProjectCard` carousel controls, `ThemeToggle` icon, `Mailchimp` block. Decide with Dedi whether Blog/Gallery (currently disabled via `routes["/blog"]`/`routes["/gallery"]` in `once-ui.config.ts`) should be included in the design pass or left alone since they 404 via `RouteGuard`.
**Active stubs:** Not applicable — this project has no backend/router stubs.
**Pre-existing TS errors (skip):** None — `npx tsc --noEmit` was run after every change this session and stayed clean throughout. No pre-existing errors were encountered or skipped.
**Dev server:** User runs their own `npm run dev` from `/Users/dedinigolan/Desktop/Desktop/Dedi/Resume/Portfolio/Site` in their own terminal, serves at `localhost:3000`. It was left running throughout this session (only verified via `curl`, never restarted or replaced). Do not start a competing background dev server in this folder — confirm the user's server is stopped before any `.next` cache work.
**Verified files (don't re-read for content, only for further visual/style changes):**
- `src/resources/custom.css` — full editorial design system (hairline dividers, mono eyebrows/captions, Chain/Stat/SpecList/MetaRow styles, `.reset-button-styles:hover` global link-accent rule, `.cs-nav-active` header state, `.cs-header-meta` mono meta-text style).
- `src/components/work/CaseStudy.tsx` — `Eyebrow`, `Lede`, `SpecList`/`SpecItem`, `Chain`/`ChainItem`, `StatRow`/`Stat` components; exported via `src/components/index.ts` and registered in `src/components/mdx.tsx`.
- `src/components/mdx.tsx` — headings no longer use `HeadingLink` (copy-link icon removed, plain `Heading` with `id` kept for anchors); `createImage` now passes `caption={alt}` so image captions are visible, not alt-only.
- `src/app/work/[slug]/page.tsx` — hero uses `display-strong-l` heading + `Lede` (post summary), plain label/value meta row (Role/Timeframe/Team/Scope) replacing the old bordered pill.
- `src/app/work/projects/exchange-solutions-design-system.mdx` and `operator-platform-rebuild.mdx` — rewritten to use `SpecList`/`Chain`/`StatRow`/`Eyebrow` instead of `Grid`/`Card` boxes. Copy unchanged, only markup.
- `src/resources/icons.ts` — all generic icons standardized to Phosphor Duotone; brand/logo icons (LinkedIn, GitHub, Discord, etc.) intentionally kept as their official marks.
- `src/resources/once-ui.config.ts` — `brand`/`accent` both set to `"orange"` (was cyan+red, was fighting itself); `display.location`/`display.time` set to `false` (removed the top-corner Asia/Singapore + clock, per explicit request — don't re-add without asking).
- `src/resources/content.tsx` — home hero `featured` badge simplified to plain `"Featured work"` string (no "Hydra X" wording, no JSX).
- `src/app/page.tsx` — home hero simplified: removed the "Featured work" badge and the "About – Dedi Nigolan" button entirely (redundant with nav) — hero is now just headline + subline.
- `src/app/about/page.tsx` — removed a duplicated fixed-position wrapper that was double-applying `position:fixed` to the table-of-contents nav (the actual "bug-like" layout glitch); the ToC nav was then moved out of `position:fixed` entirely and into the normal-flow avatar sidebar column (renders right after the language tags). Name heading changed from `display-strong-xl` to `display-strong-l` to match Home's hero scale.
- `src/components/about/TableOfContents.tsx` — rewritten with no `position:fixed`; plain in-flow nav list styled with `.cs-header-meta`.
- `src/components/Header.tsx` — corner location/time elements removed (see config above); active nav item now gets `className="cs-nav-active"` for a real orange "you are here" state instead of plain gray.
- `src/app/work/page.tsx` — H1 changed from rendering `work.title` ("Projects – Dedi Nigolan", meant for `<title>` only) at `heading-strong-xl` (1.5rem) to rendering `work.label` ("Work") at `display-strong-l`, matching Home/case-study hero scale; added a `Lede` using `work.description` for parity with other pages.
- `design-system-reference.html` (Resume root, **not** Portfolio/Site) — published Artifact style guide (colors/typography/icons/components), sourced from real resolved tokens. Redeploy via `Artifact` tool with `url: "https://claude.ai/code/artifact/d05b9416-339c-4811-bf79-4957b68a8268"` to keep the same link if it needs updating to reflect further changes.

**Standing rule (memory):** Never write files to scratchpad or `/tmp` for this project — everything must stay inside `/Users/dedinigolan/Desktop/Desktop/Dedi/Resume`. Saved as a permanent feedback memory after an incident this session.
