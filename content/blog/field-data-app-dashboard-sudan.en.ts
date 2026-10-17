// Approved post text, verbatim from field-data-app-dashboard-sudan.en.md (frontmatter + Markdown body).
// Edit the Markdown, not the rendered HTML: lib/markdown.ts converts it at render time.
const source = `---
slug: field-data-app-dashboard-sudan
locale: en
title: "Mobile App + Dashboard: Collecting Field Data Safely When You Work on Sudan"
metaTitle: "Field Data Apps & Dashboards for Sudan"
metaDescription: "How organisations working on Sudan collect field data safely: offline-first apps, encrypted sync and role-based dashboards, with real results."
author: Blue Team Africa
image: /blog/field-data-app-dashboard.webp
imageWidth: 1200
imageHeight: 630
imageAlt: "Illustration: a field app saving a record offline, syncing over an encrypted connection to a program dashboard (fictional data)"
---

## The biggest risk to your field data isn't a hacker

It's the spreadsheet on a staff member's phone. It's the WhatsApp voice note with a beneficiary's name in it, and the paper form that reaches the office three weeks late, if it arrives at all.

Organisations working on Sudan run on information gathered far from where decisions are made. Staff register households in camps, reporters file from towns with no stable connection, sales teams count stock in markets that lose power every afternoon. Meanwhile the people who need that information sit in Port Sudan, Kampala, Cairo or Nairobi.

The usual fix is a patchwork of chat groups, shared spreadsheets and emailed photos. It works until it doesn't: data goes missing, versions clash, and sensitive details end up on phones that can be lost, stolen or searched at a checkpoint.

There is a better pattern, and it isn't new or exotic: a mobile app built for the field, paired with a dashboard built for the office.

## Who this is for

The same pattern serves very different organisations, because the problem underneath is the same: people in the field, decisions somewhere else.

- **NGOs and humanitarian organisations:** beneficiary registration, distribution records, monitoring and evaluation, incident reports.
- **Media organisations:** field reports and material from contributors outside the newsroom, gathered without passing through personal phones and chat apps.
- **Businesses:** field sales, stock counts, deliveries and branch reports from towns where the connection comes and goes.

## How the pattern works

A field data system has four parts, and each one has a single job.

1. **The app on the phone** collects the record: a form, a photo, a GPS point. It saves everything on the device first, so the work never depends on having a signal.
2. **The sync queue** holds records until a connection appears, then sends them in order, retrying quietly when the network drops halfway.
3. **The encrypted connection and central database** receive each record once, check it, and store it in one place instead of fifty phones.
4. **The dashboard** shows managers what is happening as records arrive: totals, maps, late sites, records waiting for review. Each person sees only what their role allows.

The field team works as if the network were always there. The office sees the picture update as soon as it is.

## Five decisions that matter more than the technology

Most field systems that fail don't fail on the choice of framework. They fail on these five decisions.

### 1. Offline-first, not "offline-tolerant"

Many apps claim to work offline but really mean they won't crash when the signal drops. Offline-first is different: the phone is the primary place a record lives until the server confirms it has it. That means a local queue, a clear status on every record (saved, queued, synced), and sensible handling when two people edit the same record before either has synced. If staff ever wait for a spinner before they can move to the next household, the app isn't offline-first.

### 2. Encrypt on the device, in transit and on the server

Data is at risk in three places, and each needs its own protection. Records stored on the phone should be encrypted, not sitting in a readable file. The connection to the server should use TLS, with the app refusing anything that looks like an interception. And the database should be encrypted at rest, with backups that are encrypted too.

### 3. Collect less, and keep identities apart

The safest data is data you never collected. Ask whether each field is truly needed for a decision someone will make. Where you do need personal details, store them separately from the content of reports, so a leak of one does not expose the other. Once a record has synced, the phone does not need to keep a copy.

### 4. Give each role its own view

A field officer, a program manager, a finance officer and a donor need different things. Role-based access means the dashboard shows each of them only what their role requires, and records who looked at what. This protects the people in your data and also makes the dashboard easier to use, because nobody wades through screens meant for someone else.

### 5. Plan for a lost or seized phone

In the places where this work happens, phones get lost, stolen and searched. Design for that day before it comes:

- **Lock the app** with its own PIN, separate from the phone's lock screen.
- **Revoke access remotely,** so a missing phone can be cut off from the server within minutes.
- **Keep little on the device,** so there is little to find.
- **Use a neutral app name and icon** that doesn't announce what the app is for or who uses it.

None of this is exotic. It is what responsible field data collection looks like when the risks are real.

## Built for the phones and networks people actually have

An app tested on a new iPhone over office Wi-Fi tells you very little about how it will behave in the field. Build and test for the real conditions instead:

- **Mid-range Android phones** with limited storage and older system versions, because that is what most field teams carry.
- **Small data payloads,** so a sync finishes in the short window when a connection appears.
- **Compressed photos,** resized on the phone before upload rather than sent at full camera size.
- **Arabic and English in the same app,** with right-to-left layouts that work properly, not as an afterthought.
- **Testing on throttled connections** that drop halfway through, which is when sync bugs show up.

## What it looks like in practice

We have built this pattern for organisations working in exactly these conditions. Two examples:

**A Sudanese humanitarian organisation.** Field staff in conflict-affected areas collect beneficiary surveys, GPS points and incident reports in an offline Android app. Records sync to an ERPNext system when a connection is available, where they feed real-time dashboards for program managers and donor reports. As part of the wider platform, manual data entry fell by 70% and donor reporting became 50% faster. [Read the case study](/portfolio/cslo-sudan).

**A regional NGO in East Africa.** An offline-first web portal lets field staff manage beneficiary data and program activities without a constant connection, syncing automatically when one returns. Headquarters sees every location on one dashboard. Administrative time fell by 75% and donor reporting became 50% faster. [Read the case study](/portfolio/ngo-portal).

## When you don't need a custom app

Often you don't. Free, well-supported tools such as KoboToolbox and ODK handle offline surveys very well, and many humanitarian teams already know them. If you need to run a survey, collect a set of forms and export the results, start there.

A custom app and dashboard start to pay off when one or more of these is true:

- **Your data has to flow into another system,** such as an ERP, a CRM or your finance records, without someone retyping it.
- **Different people need different views,** and the roles matter for privacy, not just convenience.
- **Your workflow isn't a survey:** cases that move through stages, approvals, follow-ups, stock that changes hands.
- **You run offline at scale,** with many devices, many sites and records that change after they are first created.
- **Your risks call for controls** that a general tool can't give you, such as a neutral app name, remote revocation or strict separation of identities.

If none of these apply, a free tool is the right answer, and we will tell you so.

## What we build

Blue Team Africa is a technology team founded by Sudanese technologists. We build offline-first [mobile apps](/services/mobile-apps), the [ERP](/services/erp) and dashboard systems they feed, and the security around both, for NGOs, media organisations and businesses working on Sudan and across East Africa.

If your field data lives in spreadsheets and chat groups today, [tell us how your team works](/contact). We will help you decide whether you need a custom system, or whether a free tool will do.
`

export default source
