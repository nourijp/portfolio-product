# portfolio-product

Subdomain:    product.hamednouri.com
Stack:        Next.js (App Router, static export) + Tailwind 4, source in `_source/`
Public email: product@hamednouri.com
Resume:       No PDF supplied yet — Resume buttons currently mailto a resume request.
              See `_source/src/content/site.ts` (`resumeUrl`) to swap in a real PDF
              at `_source/public/files/` once one exists.

## Purpose
Product Owner / AI Product / Product Technology positioning. Built for enterprise
Product Owner applications (Toyota Financial Services being the initial target).

## Structure
- `/` — hero, about, product capabilities, selected work, experience, contact CTA
- `/work` and `/work/[slug]` — case studies (data in `_source/src/content/work.ts`)
- `/labs` — technical breadth/experiments, linking out to projects.hamednouri.com
  (data in `_source/src/content/labs.ts`)

## Known open items
- Real employment dates are missing from `_source/src/content/experience.ts`
  (marked `TODO — add dates`, hidden from the UI until filled in).
- Several case-study sections in `_source/src/content/work.ts` are marked
  `todo: true` where a fact wasn't confirmed (Discovery/Prioritization/Outcome/
  Iteration for Publishing Workflow Automation and Multilingual Collaboration).
  These render as a visibly marked "Draft — not yet finalized" box rather than
  fabricated content — fill in real detail when available.
- No portrait photo yet — hero and header intentionally ship without one
  (see `_source/src/app/components/ui/avatar-monogram.tsx`, which falls back
  to an "HN" monogram and accepts a real `imageSrc` later with no layout changes).

## Build
```
cd _source && npm install && npm run build
```

## Deploy
```
bash deploy.sh
git add -A && git commit -m "..." && git push
```
