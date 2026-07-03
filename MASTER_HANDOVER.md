# MASTER_HANDOVER.md

**Last updated:** 2026-06-09  
**Scope:** Cross-project navigation document for all Mohamed El-Daby / Blue Team Africa codebases.  
**Audience:** Claude Code (and any future technical partner) starting cold.

**Certainty labels**

| Label | Meaning |
|-------|---------|
| **CERTAIN** | Verified in repo files, CLAUDE.md files, or git remotes |
| **INFERRED** | Reasonable conclusion from naming, folder layout, or partial evidence — verify before acting |
| **UNKNOWN** | Not found in repos; do not assume |

---

## 1. Project Registry

| # | Project | Local path | GitHub repo | Live URL | Stack | Deploy | Status |
|---|---------|-----------|-------------|----------|-------|--------|--------|
| 1 | **blueteamafrica** (marketing site) | `~/Documents/blueteamafrica/` | `BlueTeamAfrica/blueteam` | `https://www.blueteamafrica.com` (**CERTAIN**) | Next.js 16, React 18, Tailwind, Firebase Admin (leads) | Vercel (**CERTAIN**) | Active — production |
| 2 | **blueteam-portal** (client SaaS portal) | `~/Documents/blueteam-portal/` (canonical) + `~/Documents/blueteamafrica/blueteam-portal/` (monorepo copy) | `BlueTeamAfrica/blueteam-portal` | `https://portal.blueteamafrica.com` (**CERTAIN** from env) | Next.js 14, React 18, Tailwind, Firebase, nodemailer, react-pdf | Vercel (**INFERRED**) | Active — production |
| 3 | **secure-reporter-app** (reporter mobile) | `~/Documents/secure-reporter-shared/secure-reporter-app/` | `BlueTeamForAfrica/secure-reporter-app` | N/A — mobile app | Expo ~54, React Native 0.81, Expo Router 6, TypeScript, Firestore REST, Supabase Storage | EAS build → APK/App Store (**UNKNOWN** if published) | Active — pre-production QA |
| 4 | **secure-reporter-dashboard** (Secure Desk) | `~/Documents/secure-reporter-shared/secure-reporter-dashboard/` | `BlueTeamAfrica/blueteam-secure-desk` | **UNKNOWN** custom domain; Vercel preview known | Next.js (App Router), Firebase Admin, Supabase service role, docx | Vercel (**CERTAIN**) | Active — production debugging |
| 5 | **SudanFacts / Atar** (editorial brand) | No separate codebase — config layer inside secure-reporter-dashboard | N/A | `new.sudanfacts.org` (WordPress, separate) | WordPress (public site); `factsd` workspace config (dashboard) | WordPress hosting (**UNKNOWN**) | Config active; WordPress status **UNKNOWN** |
| 6 | **Ikseer** | `~/Documents/Ikseer/` (PDFs/DOCX archive only) | None | None | No codebase | N/A | Archive only — no active dev |

### Notes

- **blueteam-portal** has two locations. Canonical = `~/Documents/blueteam-portal/`. After editing the monorepo copy, always rsync to canonical and push from there. See sync command in `blueteamafrica/CLAUDE.md`.
- **secure-reporter-app** and **secure-reporter-dashboard** share a Firebase project and Supabase bucket. They are a paired system — never change encryption keys on one without coordinating the other.
- **Fintech / firewall consulting** work has no dedicated repo; treat each engagement as standalone. Referenced in user's project list but no artifact path found. (**INFERRED**)

---

## 2. Infrastructure Map

### Firebase Projects

| Firebase project | Used by | Auth | Firestore | Admin SDK method |
|-----------------|---------|------|-----------|-----------------|
| **blueteamafrica marketing** | `blueteamafrica` leads API | Not used | `leads` collection (production) | `FIREBASE_SERVICE_ACCOUNT_KEY` (JSON) or `GOOGLE_APPLICATION_CREDENTIALS` — **confirmed absent from local `.env.local`; unconfirmed in Vercel prod as of 2026-07-03 audit** |
| **blueteam-portal** | `blueteam-portal` | Email/Password | `tenants/{tenantId}/…` multi-tenant | `FIREBASE_CLIENT_EMAIL` + `FIREBASE_PRIVATE_KEY` (**CERTAIN** from CLAUDE.md) |
| **sudanfcts-reporting** (**CERTAIN** from dashboard CLAUDE.md) | `secure-reporter-app` + `secure-reporter-dashboard` | Email/Password (admin accounts only for dashboard; app uses unauthenticated Firestore REST writes) | `submissions`, `adminUsers`, `users` | `FIREBASE_SERVICE_ACCOUNT_BASE64` (preferred) or legacy PEM trio |

> **IMPORTANT:** Three separate Firebase projects — do not mix configs between products.

### Vercel

| Vercel project | Repo | Custom domain |
|---------------|------|---------------|
| blueteamafrica marketing | `BlueTeamAfrica/blueteam` | `www.blueteamafrica.com` (**CERTAIN**) |
| blueteam-portal | `BlueTeamAfrica/blueteam-portal` | `portal.blueteamafrica.com` (**CERTAIN** from env) |
| secure-reporter-dashboard | `BlueTeamAfrica/blueteam-secure-desk` | **UNKNOWN** — custom domain not confirmed |

### Supabase

- **One Supabase project** shared between `secure-reporter-app` (uploads) and `secure-reporter-dashboard` (signed download URLs). (**CERTAIN** from both CLAUDE.md files)
- App uses anon key; dashboard uses service role key (server-only).
- Bucket name set via `EXPO_PUBLIC_SUPABASE_BUCKET` (app) / `SUPABASE_BUCKET` (dashboard) — must be the same bucket.

### Email (SMTP)

- `blueteam-portal` uses Nodemailer (`lib/mailer.ts`) with `SMTP_HOST/PORT/USER/PASS` env vars. (**CERTAIN**)
- No email infrastructure confirmed for other projects.

### DNS / Cloudflare / OPNsense

- **UNKNOWN** — no DNS, CDN, or firewall config found in any repo. Mohamed does OPNsense/firewall consulting work but no config artifact paths are known.

### GitHub Organizations

| Org | Projects |
|-----|---------|
| `BlueTeamAfrica` | blueteam, blueteam-portal, blueteam-secure-desk |
| `BlueTeamForAfrica` | secure-reporter-app |

---

## 3. Credentials Index

> **Locations only — no values stored here.**

| Secret | Where it lives | Notes |
|--------|---------------|-------|
| Firebase web config (marketing) | `~/Documents/blueteamafrica/.env.local` | 6 `NEXT_PUBLIC_FIREBASE_*` vars |
| Firebase web config (portal) | `~/Documents/blueteam-portal/.env.local` | 6 `NEXT_PUBLIC_FIREBASE_*` vars |
| Firebase web config (secure-reporter) | `~/Documents/secure-reporter-shared/secure-reporter-app/.env.local` | 6 `EXPO_PUBLIC_FIREBASE_*` vars |
| Firebase Admin (portal) | `~/Documents/blueteam-portal/.env.local` | `FIREBASE_CLIENT_EMAIL` + `FIREBASE_PRIVATE_KEY` |
| Firebase Admin (secure-desk) | `~/Documents/secure-reporter-shared/secure-reporter-dashboard/.env.local` | `FIREBASE_SERVICE_ACCOUNT_BASE64` preferred; also in Vercel env |
| Supabase (reporter app) | `~/Documents/secure-reporter-shared/secure-reporter-app/.env.local` | `EXPO_PUBLIC_SUPABASE_URL`, `EXPO_PUBLIC_SUPABASE_ANON_KEY`, `EXPO_PUBLIC_SUPABASE_BUCKET` |
| Supabase service role (secure-desk) | `~/Documents/secure-reporter-shared/secure-reporter-dashboard/.env.local` | `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_BUCKET` — server-only |
| Submission payload secret | Both `.env.local` files above | `EXPO_PUBLIC_SUBMISSION_PAYLOAD_SECRET` (app) must equal `SUBMISSION_PAYLOAD_SECRET` (dashboard) — **changing one requires changing the other simultaneously** |
| Portal SMTP | `~/Documents/blueteam-portal/.env.local` | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` |
| Firebase Functions secret | Cloud Function env (not in app repo) | `REPORTER_ATTACHMENT_UPLOAD_SECRET` |
| EAS / Expo build credentials | **UNKNOWN** — not in repo | Needed for APK/production builds |
| App Store / Play Store credentials | **UNKNOWN** | Needed for store distribution |

> **Rule:** Never commit `.env.local`, service account JSON, or any key to git. If a key appears in a README sample, rotate it.

---

## 4. Active Threads Log

Pulled from each project's CLAUDE.md as of 2026-06-09. Status markers: `[ ]` open, `[x]` closed/done, `[?]` unclear.

### secure-reporter-app

| # | Thread | Certainty |
|---|--------|-----------|
| 1 | `[ ]` Device QA matrix — unlock, decoy PIN, panic, offline queue, purge, attachment skip | CERTAIN (from CLAUDE.md) |
| 2 | `[ ]` APK size audit — classify Expo packages; do not remove without checking plugin usage | CERTAIN |
| 3 | `[ ]` Screenshot blocking — Android recents privacy hardening + re-enable `usePreventScreenCapture` (currently disabled) | CERTAIN |
| 4 | `[ ]` Verify env parity — `EXPO_PUBLIC_SUBMISSION_PAYLOAD_SECRET` must match dashboard exactly | CERTAIN |
| 5 | `[ ]` EAS production build config — profiles, credentials, store pipeline | UNKNOWN (not in repo) |
| 6 | `[ ]` Remove any remaining `[EDITOR DEBUG]` log lines before production | INFERRED from previous handover |

### secure-reporter-dashboard

| # | Thread | Certainty |
|---|--------|-----------|
| 1 | `[ ]` Deploy Firestore rules to production: `firebase deploy --only firestore:rules` — `.firebaserc` must point to `sudanfcts-reporting` | CERTAIN |
| 2 | `[ ]` Verify Vercel env — use `/api/admin/debug/auth-check` to confirm `projectsMatch: true` before debugging 401s | CERTAIN |
| 3 | `[ ]` Full auth flow test after rules deployed + env confirmed: login → dashboard → decrypt → attachment download | CERTAIN |
| 4 | `[ ]` Verify `adminUsers/{uid}.active` is correctly set for all admin accounts in production | CERTAIN |
| 5 | `[ ]` Fix RTL sidebar width bug in Arabic mode (`.dashboard-shell` flex layout at 1024px+) | CERTAIN |
| 6 | `[ ]` Translate ItemCard flag strings ("No lead", "Overdue", "Due …") into Arabic via `OrgLabels` / `arLabels` | CERTAIN |
| 7 | `[x]` Firestore rules committed — `firestore.rules` added to repo (2026-06-04) | CERTAIN |
| 8 | `[x]` `HtmlLangSync` client component patches `document.documentElement` lang+dir on mount (2026-06-09) | CERTAIN |

### blueteam-portal

| # | Thread | Certainty |
|---|--------|-----------|
| 1 | `[ ]` Invoice create permission denied for portal owner role — `Firestore rules` need write access to invoices collection for `owner` | CERTAIN (from CLAUDE.md) |
| 2 | `[ ]` Verify all role-based access rules are committed and deployed | CERTAIN |
| 3 | `[ ]` Keep `firestore.rules` in sync with `getBillingPlanIdFromTenant()` after any plan resolution changes | CERTAIN |
| 4 | `[ ]` Any uncommitted portal work in monorepo needs rsync to canonical `~/Documents/blueteam-portal/` + push | INFERRED |

### blueteamafrica (marketing site)

| # | Thread | Certainty |
|---|--------|-----------|
| 1 | `[ ]` Contact form Firestore write in production — 2026-07-03 audit found `FIREBASE_SERVICE_ACCOUNT_KEY` missing locally and unconfirmed in Vercel; handler silently falls back to `data/leads.json` and still returns `success: true`. Leads likely being lost with no visible failure. Fix in progress. | CERTAIN (code audit) |
| 2 | `[ ]` Verify no image 404s on production (`public/images/`) | INFERRED from historical docs |
| 3 | `[ ]` `firestore.rules.temp` exists alongside `firestore.rules` — undetermined if stale or mid-change | CERTAIN file exists, UNKNOWN purpose |
| 4 | `[ ]` Uncommitted deletions of multiple `.md` report files staged on `main` as of 2026-07-03 audit — confirm intentional before `git add -A` | CERTAIN (git status) |

---

## 5. Roadmap Priority Order

Ordered by operational risk (production breakage) → user-facing functionality → infrastructure hygiene.

| Priority | Project | What | Why |
|----------|---------|------|-----|
| **1** | secure-reporter-dashboard | Deploy Firestore rules + verify Vercel env (`projectsMatch`) | Production decryption and auth are untested against live rules; reporters' submissions could be inaccessible |
| **2** | secure-reporter-dashboard | Full auth flow test end-to-end (login → decrypt → attachment) | Gate on priority 1 — confirm system works before onboarding editorial users |
| **3** | secure-reporter-app | Device QA matrix (all security flows) | App is pre-production; cannot ship without verifying decoy PIN, panic, purge on real device |
| **4** | blueteam-portal | Resolve invoice create permission for `owner` role | Blocks billing operations for the company's own managed-service clients |
| **5** | secure-reporter-app | APK size audit + screenshot blocking + remove debug logs | Pre-shipping hygiene; safety-critical (screenshot blocking) |
| **6** | blueteamafrica | Fix contact form Firestore write (missing Admin SDK creds) + silent-failure fallback logic | Confirmed by code audit: leads likely being lost in production with no visible failure; revenue impact |
| **7** | secure-reporter-dashboard | RTL/Arabic — fix sidebar width bug + translate ItemCard flag strings | Required for Arabic-speaking users; known open bugs |
| **8** | blueteam-portal | `firestore.rules` sync with billing plan after any changes | Prevents silent permission drift on plan changes |
| **9** | secure-reporter-app | EAS production build pipeline | Required before any APK distribution |

---

## 6. Key Contacts

> Placeholder structure — fill in names and emails manually.

| Role | Name | Email / Channel | Notes |
|------|------|----------------|-------|
| Owner / Technical lead | Mohamed El-Daby | eldabyk@gmail.com | All projects |
| Atar / Sudan Facts editorial lead | _(fill in)_ | _(fill in)_ | Primary client for Secure Desk / `factsd` workspace |
| Atar / Sudan Facts ops contact | _(fill in)_ | _(fill in)_ | Deployment coordination, `adminUsers` onboarding |
| Hosting / Vercel billing | _(fill in)_ | _(fill in)_ | Vercel account owner |
| Firebase account admin | _(fill in)_ | _(fill in)_ | Owns Firebase console for all three projects |
| Supabase account admin | _(fill in)_ | _(fill in)_ | Shared Supabase project for Secure Reporter |
| SMTP provider contact | _(fill in)_ | _(fill in)_ | Email delivery for portal notifications |
| Ikseer contact | _(fill in)_ | _(fill in)_ | If/when Ikseer becomes an active project |

---

## Quick reference: which repo to edit

| Task | Edit here | Then push to |
|------|-----------|-------------|
| Marketing site content, leads API | `~/Documents/blueteamafrica/` | `BlueTeamAfrica/blueteam` |
| Portal feature (client, billing, tickets) | `~/Documents/blueteam-portal/` (canonical) OR monorepo copy + rsync | `BlueTeamAfrica/blueteam-portal` |
| Reporter mobile app | `~/Documents/secure-reporter-shared/secure-reporter-app/` | `BlueTeamForAfrica/secure-reporter-app` |
| Secure Desk (dashboard) | `~/Documents/secure-reporter-shared/secure-reporter-dashboard/` | `BlueTeamAfrica/blueteam-secure-desk` |

> **Never** commit `.env.local` to any of these repos.  
> **Never** commit without being explicitly asked.  
> **Never** push portal changes only to the monorepo copy — always rsync to canonical first.

---

*End of MASTER_HANDOVER.md*
