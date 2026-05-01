# CLAUDE.md

Guidance for Claude Code when working in this repo.

---

## Project context

This is **camdenrothleder.dev** – my personal site. Right now its job is to help me land **SWE II** and **Forward Deployed Engineer (FDE)** roles, but the site will evolve as my career does. Over time it should become a more playful showcase of skills that don't fit on a resume – things I've built for fun, ideas I'm exploring, interactive demos, etc.

Two things stay true through that evolution:

1. **Recruiters and hiring managers are the primary audience.** A recruiter doing a 30–90 second skim should always be able to find what they need fast. Playful elements should reward exploration, not block the skim path.
2. **Everything on the site reflects on me professionally.** "Playful" means clever, well-crafted, and a little fun – not sloppy, not edgy, not in-jokes a stranger wouldn't get.

Think: the front of the site is a clean professional landing; the deeper you go, the more personality and craft show through. New features can lean into the playful side as long as the top of the page still does its job.

Stack: Next.js (App Router), React, TypeScript, Tailwind. Single-page with anchor navigation (`#about`, `#experience`, `#projects`, `#contact`) – though new sections may be added as the site grows. Aesthetic is dark-mode, minimalist, Brittany-Chiang-inspired.

Deployment: production at https://camdenrothleder.dev/. Treat `main` as deployable.

---

## How to work with me

**Plan before coding for anything non-trivial.** For anything beyond a small fix, outline the approach in chat first and wait for my go-ahead. "Non-trivial" = touching more than one component, adding a dependency, changing routing/layout, altering content shown on the live site, or building a new interactive feature. Typo fixes, single-component tweaks, and obvious bug fixes – just do them.

**Ask when ambiguous, don't guess.** If a request could reasonably mean two things, ask. I'd rather answer one question than review a wrong implementation.

**Small, reviewable changes.** Prefer focused diffs over sweeping refactors. If you notice unrelated issues, mention them – don't silently fix them in the same change.

**No invented content.** Never fabricate jobs, projects, metrics, dates, or technologies on my behalf. If a section needs copy I haven't written, leave a clearly marked `TODO(camden)` placeholder and tell me what you need.

**Be honest about uncertainty.** If you're not sure something works, say so. If you didn't run it, say so. Don't claim success you haven't verified.

---

## Before you change code

1. Read the relevant component(s) fully before editing – match existing patterns rather than introducing new ones.
2. Check whether similar functionality already exists. This codebase is small; duplication is rarely justified.
3. If adding a dependency, justify it first. Prefer the platform (CSS, native browser APIs, Next.js built-ins) over libraries.

---

## Code standards

**TypeScript:** strict mode assumptions. No `any` unless you explain why in a comment. Prefer `type` for unions/aliases, `interface` for object shapes that may be extended.

**Components:** functional components only. Co-locate component-specific types. Keep components under ~150 lines – split when they grow past that.

**Styling:** Tailwind utility classes. Match the existing dark palette and spacing rhythm. Don't introduce arbitrary one-off colors – extend the Tailwind config if a new token is genuinely needed.

**Accessibility is not optional.** Semantic HTML (`<nav>`, `<section>`, `<main>`, proper heading hierarchy). All interactive elements keyboard-reachable with visible focus states. Images need meaningful `alt` text. Color contrast must pass WCAG AA. A recruiter using a screen reader should have a clean experience.

**Performance:** this site should load fast. Use `next/image` for all images. Lazy-load below-the-fold content where it makes sense. Avoid client components when a server component will do. Watch bundle size when adding deps.

**Responsive:** mobile-first. Test mental model: iPhone SE width up to wide desktop. Don't ship anything that breaks below 375px.

---

## Content rules (this matters)

The content on this site is my professional reputation. Treat it carefully.

- **Don't edit copy in `About`, `Experience`, or `Projects` without asking.** Layout/styling changes are fine; rewording my bio or bullet points is not.
- **Bullet points should lead with impact**, follow with method. The existing Dell bullets are the template – match that voice.
- **Metrics need to be real.** If a number appears on the site, I said it. Don't round, embellish, or invent.
- **Projects section:** "In development" badges are honest signaling. Don't remove them until the project actually ships.

---

## What to do when stuck

- If a build breaks and the fix isn't obvious in 1–2 attempts, stop and show me the error rather than thrashing.
- If a library has changed its API since your training data, check the current docs (web search) before guessing.
- If a request conflicts with these rules, flag the conflict – don't silently follow one and ignore the other.

---

## Git & commits

- Commit messages: imperative mood, present tense ("Add contact form validation," not "Added"). Reference the section being changed when relevant ("Experience: add Dell Security role").
- Don't commit on my behalf unless I ask. Stage and show me the diff first.
- Never force-push, rewrite history, or touch `main` directly without explicit approval.

---

## Scope guardrails

These are reasonable to *propose* but don't ship without asking:

- Adding analytics, tracking, or third-party scripts (privacy implications)
- Changing the domain, hosting, or deployment pipeline
- Major structural changes (CMS, database, moving off Next.js)
- Reworking the top-of-page first impression
- New top-level sections or nav items

Adding interactive demos, mini-projects, easter eggs, animations, or playful flourishes deeper in the page is **encouraged** – that's part of where the site is heading. Just propose the idea before building so we can scope it together.

---

## Quick checklist before saying "done"

- [ ] Builds cleanly (`npm run build`)
- [ ] No new TypeScript errors or lint warnings
- [ ] Looks correct on mobile and desktop widths
- [ ] Keyboard-navigable; focus states visible
- [ ] No invented content; placeholders clearly marked
- [ ] Diff is scoped to the requested change
