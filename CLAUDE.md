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
- Monorepo root — `blueteam-portal/` subdirectory is a fully separate app with its own
  package.json, deploy target, and SEPARATE Firebase project (`blueteam-portal`, NOT shared).
  Canonical portal clone: `~/Documents/blueteam-portal/`.
- secure-reporter-app lives under `BlueTeamAfrica` org (transferred 2026-07-03 from a
  personal account, BlueTeamForAfrica, now deleted). Has its own Firebase project,
  `sudanfcts-reporting` — see incident note below, this project's credentials were
  mixed up with that one.
- Vercel: this project's team is `blueteamafricas-projects` (note the "s" — easy to
  confuse with the similarly-named `blueteams-projects`, a different, mostly-empty team
  under a different account). Confirm `.vercel/project.json` orgId matches
  `team_QRM7drbhAg7GGhINd7WdJbmA` before trusting any `vercel env`/`vercel logs` output —
  a CLI scope mismatch caused a full day of misdiagnosis on 2026-07-07.

## Firebase Admin config
- Env var: `FIREBASE_SERVICE_ACCOUNT_KEY` (full JSON) — NOT FIREBASE_CLIENT_EMAIL/
  FIREBASE_PRIVATE_KEY (that pattern belongs to the portal).
- **RESOLVED 2026-07-07**: this key was set correctly in Vercel prod, but contained the
  wrong service account — one belonging to `sudanfcts-reporting` (Secure Reporter's
  Firebase project), not `blueteamafrica`. Every contact form write since the key was
  first set (~208 days, since ~Dec 2025) authenticated successfully but failed with
  `PERMISSION_DENIED` on the actual Firestore write, silently falling back to a JSON file
  that doesn't persist on Vercel. Every submission in that window was lost. Key was
  regenerated from the correct `blueteamafrica` Firebase project and replaced. Verified
  fixed: a real document (test-verify-final@example.com) landed in the `leads` collection
  in Firebase Console 2026-07-07.
- If this breaks again, check the `client_email` field inside the JSON value first —
  don't assume the var being "set" means it's the right credential.

## Open threads
- [ ] No confirmation mechanism (email/webhook) exists for contact form submissions yet.
- [ ] Check whether `sudanfcts-reporting` project is missing a working service account
  key of its own, given its key was apparently pasted into this project's env vars
  instead — the mix-up may be mirrored on that side.
- [ ] Portal-pattern vars (FIREBASE_ADMIN_CLIENT_EMAIL, FIREBASE_ADMIN_PROJECT_ID,
  FIREBASE_ADMIN_PRIVATE_KEY, CRON_SECRET, SMTP_*) are present in this project's Vercel
  env (added ~147 days ago) but appear to belong to blueteam-portal per its own docs —
  unclear if unused cruft or actually referenced somewhere. Not yet audited.

## Key conventions
- app/api/leads/route.ts switches Firestore vs. fallback based on whether the write
  succeeds — NOT a NODE_ENV check, and NOT just whether adminDb initializes (a service
  account can initialize successfully with wrong-project credentials and still fail on
  the actual write with PERMISSION_DENIED — this was the actual 2026-07-07 root cause).
- Vercel's filesystem is ephemeral outside /tmp — a JSON fallback write there does not
  persist. Fallback path logs [LEADS_LOST] and returns storage: "degraded" (fix committed
  2026-07-07, commit 58d9fbb) rather than silently claiming success.
- No sensitive data collected via contact form; Firestore rules block all client read/write
  on `leads` — Admin SDK bypasses rules, that's the only intended write path.
- SEO and performance matter — avoid heavy client-side JS on public pages.

## Do not touch
- Public-facing page layouts unless explicitly scoped
- Firebase config keys — env vars only, never hardcoded
- `blueteam-portal/` subdirectory unless explicitly switching context to that project

## Session start checklist
1. Read this file, then MASTER_HANDOVER.md in the repo
2. Verify claims against actual code/config before acting on them — this project's docs
   and Vercel/GitHub account setup drifted silently for months in ways that took a full
   session to untangle on 2026-07-03/07. Don't assume "it's been working" means it has.
3. Confirm which open thread is being worked before writing any code
