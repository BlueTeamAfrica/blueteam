# Blue Team Africa — Marketing Site
**Last updated:** 2026-05-20
**Repo:** BlueTeamAfrica/blueteam
**Working with:** Claude Code

---

## What this project is

Public marketing website for Blue Team Africa — a managed cybersecurity services company operating in East Africa (Rwanda/Uganda positioning). Purpose: lead generation for web design, hosting, ERP integration, CRM automation, mobile apps, and cybersecurity services. Also a demonstration of Blue Team's own technical capability.

---

## Platform & Setup

- **Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS, Framer Motion, Firebase Admin (leads → Firestore)
- **Brand colors:** Primary `#1982c4`, Secondary `#D97706`, Dark `#0F172A`
- **Fonts:** Poppins (headings), Inter (body)
- **SEO:** JSON-LD, next-sitemap (runs on postbuild)
- **Deploy:** Vercel → `https://www.blueteamafrica.com/`
- **Repo note:** Contains a `blueteam-portal/` subdirectory — must sync to standalone clone after portal changes

---

## What's built

- Full marketing site: homepage, services pages (web-design, hosting, erp-integration, crm-automation, mobile-apps, cybersecurity), portfolio, blog, FAQ, about, contact
- Contact form API (`app/api/leads/route.ts`) with rate limiting, sanitization, Firebase Admin → Firestore in production
- SEO, sitemap, JSON-LD structured data
- Extensive image normalization work completed

---

## Open issues / to verify

- Production contact form → Firestore: verify it's actually working on Vercel (there are historical 404 fix docs suggesting this was a problem)
- Any remaining image 404s in production
- Firebase config in README may contain real API keys — rotate if repo is public

---

## Important sync rule

After any portal changes in the monorepo, sync to standalone:
```
rsync -av --delete \
  --exclude='.git' --exclude='node_modules' --exclude='.next' --exclude='.env.local' \
  ./blueteam-portal/ ~/Documents/blueteam-portal/
cd ~/Documents/blueteam-portal && git add -A && git commit -m "..." && git push origin main
```

---

## What's next

No active sprint. Verify production contact form and image 404s before any new feature work.
