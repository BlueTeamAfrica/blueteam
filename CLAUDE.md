# Project: blueteamafrica
## Purpose
Public marketing and services showcase site for BlueteamAfrica.com — brand presence, service listings, and lead capture via contact form.

## Stack
- Framework: Next.js 16.0.7, React 18.3, TypeScript 5.4
- Styling: Tailwind CSS 3.4, Framer Motion 11
- Auth: Firebase Auth (admin areas only)
- Database: Firestore (contact form writes) — via Firebase Admin SDK, project `blueteamafrica`
- Sitemap: next-sitemap on postbuild
- Hosting: Vercel

## Relation to other projects
- Monorepo root — `blueteam-portal/` exists as a subdirectory here but is a fully separate
  app with its own `package.json`, deploy target, and **separate Firebase project**
  (`blueteam-portal`, not shared with this one). Canonical portal clone lives at
  `~/Documents/blueteam-portal/` — sync there before pushing portal changes, never push
  portal changes from this monorepo copy.
- No dependency on `secure-reporter-*` codebases

## Firebase Admin config
- Env var: `FIREBASE_SERVICE_ACCOUNT_KEY` (full JSON), or `GOOGLE_APPLICATION_CREDENTIALS`
  — NOT `FIREBASE_CLIENT_EMAIL`/`FIREBASE_PRIVATE_KEY` (that two-var pattern is the
  portal's, not this project's — verify against `lib/firebase-admin.ts` before assuming
  either format, in case this changes).
- As of 2026-07-03 audit: confirmed absent from local `.env.local`. As of same-day check,
  `vercel env ls production` returned zero environment variables set at all — not just
  Admin credentials, nothing. Production is running on hardcoded defaults.

## Open threads
- [ ] Contact form → Firestore in production: Admin SDK credentials missing in Vercel prod
  (confirmed empty env list 2026-07-03). Handler falls back silently and previously
  returned `success: true` regardless. Part 2 (logging/response-flag fix) has been
  implemented in app/api/leads/route.ts. Part 1 (actually setting
  FIREBASE_SERVICE_ACCOUNT_KEY + NEXT_PUBLIC_FIREBASE_* vars in Vercel) still pending as
  of this writing — confirm current status before assuming either is done.
- [ ] `firestore.rules.temp` — confirmed as `allow write: if true` (open write hole).
  Confirmed unused by any code/config. Should be deleted; confirm it has been before
  assuming it's gone.
- [ ] Uncommitted deletions of multiple `.md` report files were staged on `main` as of
  2026-07-03 audit — confirm intentional and committed, or still pending.
- [ ] `BlueTeamForAfrica` (github.com/BlueTeamForAfrica, display name SudanFacts) has
  commit history on this repo and on blueteam-portal, contradicting the "no dependency on
  secure-reporter-*" line above. Check Settings → Collaborators on both repos to confirm
  whether this access is intentional; revoke if not.

## Key conventions
- Contact form submission should write to Firestore and (eventually) trigger admin
  confirmation — as of 2026-07-03 audit, no confirmation mechanism exists at all (no
  email, no webhook, no nodemailer in this project). Don't assume this is built.
- app/api/leads/route.ts switches between Firestore and JSON fallback based on whether
  adminDb initializes — NOT an environment (NODE_ENV) check. A working prod env can still
  fall back if Admin creds are wrong; local dev could hit real Firestore if creds happen
  to be present locally.
- On Vercel, the filesystem is ephemeral/read-only outside /tmp — a JSON fallback write on
  Vercel does not persist. As of the Part 2 fix, Vercel-detected fallback skips the
  filesystem and logs [LEADS_LOST] instead.
- No sensitive data collected via contact form; Firestore rules on `leads` are
  write-blocked from client entirely (Admin SDK bypasses rules) — confirmed in
  firestore.rules as of 2026-07-03.
- SEO and performance matter — avoid heavy client-side JS on public pages

## Service pages
12 directories under app/services/ (plus a [slug] catch-all): branding, crm,
custom-systems, cybersecurity, ecommerce, erp, hosting, maintenance, mobile-apps, ui-ux,
web-design, website-development.

## Do not touch
- Public-facing page layouts unless explicitly scoped
- Firebase config keys — verify they are in environment variables, never hardcoded
- `blueteam-portal/` subdirectory unless explicitly switching context to that project

## Session start checklist
1. Read this file
2. Read MASTER_HANDOVER.md
3. Confirm which open thread you are working on before writing any code
4. If this file and MASTER_HANDOVER.md disagree, verify against actual code/config before
   trusting either — this file has drifted from reality before without being caught for
   months.

## Corrections log
- 2026-07-03 — Prior version claimed blueteamafrica "shares Firebase project with
  blueteam-portal." Disproven by direct code audit (lib/firebase.ts hardcoded fallback
  'blueteamafrica'; portal env shows blueteam-portal.firebaseapp.com). Separate projects.
- 2026-07-03 — Prior version omitted the actual Admin SDK env var name entirely and had no
  record of the production credentials being missing. Added above.
- 2026-07-03 — Prior version listed no service directory names. 12 confirmed via
  filesystem listing; added above.
- 2026-07-03 — This file was found uncommitted with no git history — it had existed on
  disk but was never checked into version control. Committing it now for the first time.
