# Localization — Arabic (AR) & Swahili (SW)

Tracks progress toward full Arabic and Swahili support on blueteamafrica.com.

## Phase 1 — Audit & Inventory
- [x] Identify all user-facing copy on the site
- [x] Export English source strings

## 1. Architecture approach

**Arabic typography**
- Body/long-form text: Scheherazade New (Google Fonts, SIL Naskh-style, Regular + Bold only — no support for lighter/heavier weights).
- UI elements (nav, buttons, form labels, badges): [DECISION NEEDED — Scheherazade New is hard to read at small sizes; consider a plainer Arabic UI font such as Noto Kufi Arabic, IBM Plex Sans Arabic, or Tajawal for these, paired with Scheherazade New for headings/body].
- Load via `next/font/google` (both fonts) rather than a runtime Google Fonts `<link>` tag, for consistency with how the site currently handles font loading — confirmed: `app/layout.tsx` uses `next/font/google` with CSS variable pattern (`Inter`, `Poppins`), Arabic fonts should follow the same approach.

## Phase 2 — Arabic Translation
- [x] Machine-translation draft produced (`projects/translation-draft-en-ar.md`)
- [x] Arabic glossary reviewed and approved — final file at `projects/translation-final-en-ar.md` (approved by Eldaby, native Arabic speaker, 2026-08-03)
- [ ] Implement `next-intl` (or equivalent) i18n routing
- [ ] Wire AR strings into site components
- [ ] RTL layout pass (Tailwind `dir="rtl"`)
- [ ] QA review on live staging

## Phase 3 — Swahili Translation
- [ ] Identify Swahili translator / reviewer
- [ ] Produce SW draft
- [ ] Reviewed SW strings
- [ ] Implement SW locale
