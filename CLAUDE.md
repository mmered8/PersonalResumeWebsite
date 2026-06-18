# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static personal resume / portfolio site for Mason Locke Meredith, deployed via **GitHub Pages** to the custom domain in [CNAME](CNAME) (`masonmeredith.com`). No build system, no package manager, no tests — just HTML/CSS/JS served as-is. See [DOMAIN_NOTES.md](DOMAIN_NOTES.md) for the 2026-05-16 swap from `goalsinoverdrive.com` (now handed off to `../GoalsinOverdriveV2/`).

**Purpose:** This is meant to be a virtual resume / business card — a single shareable URL that conveys who Mason is, what he's worked on, and how to reach him. Keep edits aligned with that goal: prioritize clarity, professionalism, and a fast first impression over feature creep.

## Workspace Philosophy: Lean by Default

A deliberate principle across this workspace — surface it before any add or refactor.

- **Delete is the default before adding.** Always ask first whether something can be removed instead of added.
- **If adding, add as lean as possible.** Smallest viable change. No speculative scaffolding, no parallel implementations.
- **Adding is dangerous.** New code, new branches, and new files can break the system or fragment the codebase across this multi-repo workspace. Branch and code drift is the failure mode we are actively avoiding.
- **Don't lose track of what you add.** If it's worth adding, it's worth knowing where it lives.

## Stack

- **Template**: Start Bootstrap "Personal" v1.0.1 + Bootstrap 5.2.3 (loaded via CDN in each page)
- **Styling**: Two CSS files. [css/styles.css](css/styles.css) is the vendored compiled Bootstrap + base theme; do not touch it directly. [css/site.css](css/site.css) loads AFTER it and is the "Front Porch" design layer (cream / deep navy / brass, Fraunces + Plus Jakarta Sans) — make global style changes here. No Sass/PostCSS toolchain.
- **JS**: Plain ES5/ES6 in [js/scripts.js](js/scripts.js) — only used by the contact form.
- **Fonts/icons**: Google Fonts (Plus Jakarta Sans for UI, Fraunces for display serif, JetBrains Mono for code) and Bootstrap Icons via CDN.

## Pages and routing

Four top-level pages, all sharing the same navbar (hand-duplicated in each file — keep them in sync when editing nav links):

- [index.html](index.html) — landing/hero
- [resume.html](resume.html) — resume content
- [projects.html](projects.html) — project cards. Links to `gis_project/index.html` and external URLs (Colab, GitHub repos)
- [contact.html](contact.html) — contact form (see below)

## Contact form → Cloudflare Worker

[js/scripts.js](js/scripts.js) `handleSubmit` POSTs JSON `{name, email, number, message, company}` (the `company` field is a honeypot) to the Cloudflare Worker:

```
https://masonmeredith-contact.mason-mere.workers.dev/
```

The Worker source lives in this repo at [worker/contact-form.js](worker/contact-form.js) (config in [worker/wrangler.toml](worker/wrangler.toml)). It validates the payload, drops honeypot hits, and emails the submission via the Cloudflare Email Service `CONTACT_EMAIL` binding to `mason.mere@gmail.com`. See [worker/README.md](worker/README.md) for deploy and email-binding details. This replaced a dead AWS API Gateway + Lambda endpoint. Success/error UI toggles `#submitSuccessMessage` / `#submitErrorMessage` visibility.

## gis_project/ — embedded legacy portfolio

[gis_project/](gis_project/) is a self-contained 2018 GIS portfolio with its own Bootstrap 4 styling, ArcGIS / Leaflet-style map JS, and assignment artifacts. It is linked from `projects.html` but otherwise lives independently — its CSS and JS do not share anything with the parent site. Treat it as read-only legacy content unless explicitly asked to modify it.

## Local development

No server is required — open the HTML files directly in a browser, or use any static server (e.g. `python -m http.server`) from the repo root. Changes to CSS/JS are picked up on reload; there's no bundler or watch step.

## Deploying

`git push` to the default branch. GitHub Pages serves the repo root and the `CNAME` file routes to the custom domain. There is no CI workflow.

## Conventions

- The navbar is duplicated across `index.html`, `resume.html`, `projects.html`, `contact.html`. When adding/renaming a page, update all four.
- Asset paths are relative (`assets/...`, `css/...`, `js/...`) — keep them that way so GitHub Pages serves them correctly under both the apex domain and any preview URL.
- `css/styles.css` is the vendored compiled Bootstrap — treat it as read-only. Put new rules in `css/site.css`, which is loaded after it and is intended as the override layer.

## Pathing Policy — No Absolute Paths (workspace standard)

Never hardcode absolute paths (`C:\Users\...`, `/mnt/c/...`, `/Users/...`). All
references — in code, configs (`.mcp.json`, hooks), scripts, and docs — must use:
- paths relative to the repo or current file, or
- the `WORKSPACE_ROOT` environment variable for cross-repo references, or
- env vars / installed entry points (console scripts) for tools.

Absolute paths are how this workspace got tangled; keeping them out keeps every repo
portable and the workspace reorganizable. The only sanctioned exception is Windows Task
Scheduler actions (an OS constraint) — keep those centralized and minimal.
