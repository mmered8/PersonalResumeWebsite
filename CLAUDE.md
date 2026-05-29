# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static personal resume / portfolio site for Mason Locke Meredith, deployed via **GitHub Pages** to the custom domain in [CNAME](CNAME) (`goalsinoverdrive.com`). No build system, no package manager, no tests — just HTML/CSS/JS served as-is.

**Purpose:** This is meant to be a virtual resume / business card — a single shareable URL that conveys who Mason is, what he's worked on, and how to reach him. Keep edits aligned with that goal: prioritize clarity, professionalism, and a fast first impression over feature creep.

## Workspace Philosophy: Lean by Default

A deliberate principle across this workspace — surface it before any add or refactor.

- **Delete is the default before adding.** Always ask first whether something can be removed instead of added.
- **If adding, add as lean as possible.** Smallest viable change. No speculative scaffolding, no parallel implementations.
- **Adding is dangerous.** New code, new branches, and new files can break the system or fragment the codebase across this multi-repo workspace. Branch and code drift is the failure mode we are actively avoiding.
- **Don't lose track of what you add.** If it's worth adding, it's worth knowing where it lives.

## Stack

- **Template**: Start Bootstrap "Personal" v1.0.1 + Bootstrap 5.2.3 (loaded via CDN in each page)
- **Styling**: [css/styles.css](css/styles.css) is the vendored compiled Bootstrap + theme overrides. Edit this file directly to change global styles; there is no Sass/PostCSS toolchain.
- **JS**: Plain ES5/ES6 in [js/scripts.js](js/scripts.js) — only used by the contact form.
- **Fonts/icons**: Google Fonts (Plus Jakarta Sans) and Bootstrap Icons via CDN.

## Pages and routing

Four top-level pages, all sharing the same navbar (hand-duplicated in each file — keep them in sync when editing nav links):

- [index.html](index.html) — landing/hero
- [resume.html](resume.html) — resume content
- [projects.html](projects.html) — project cards. Links to `gis_project/index.html` and external URLs (Colab, GitHub repos)
- [contact.html](contact.html) — contact form (see below)

## Contact form → AWS API Gateway

[js/scripts.js](js/scripts.js) `handleSubmit` POSTs JSON `{name, email, number, message}` to a hardcoded API Gateway URL:

```
https://hqqehdq4jb.execute-api.us-east-2.amazonaws.com/FormAPI/
```

The endpoint lives in AWS (us-east-2) — this repo does not contain the Lambda/handler. If form submissions break, the issue is most likely on the AWS side, not in this repo. Success/error UI toggles `#submitSuccessMessage` / `#submitErrorMessage` visibility.

## gis_project/ — embedded legacy portfolio

[gis_project/](gis_project/) is a self-contained 2018 GIS portfolio with its own Bootstrap 4 styling, ArcGIS / Leaflet-style map JS, and assignment artifacts. It is linked from `projects.html` but otherwise lives independently — its CSS and JS do not share anything with the parent site. Treat it as read-only legacy content unless explicitly asked to modify it.

## Local development

No server is required — open the HTML files directly in a browser, or use any static server (e.g. `python -m http.server`) from the repo root. Changes to CSS/JS are picked up on reload; there's no bundler or watch step.

## Deploying

`git push` to the default branch. GitHub Pages serves the repo root and the `CNAME` file routes to the custom domain. There is no CI workflow.

## Conventions

- The navbar is duplicated across `index.html`, `resume.html`, `projects.html`, `contact.html`. When adding/renaming a page, update all four.
- Asset paths are relative (`assets/...`, `css/...`, `js/...`) — keep them that way so GitHub Pages serves them correctly under both the apex domain and any preview URL.
- `css/styles.css` is large because it's the full compiled Bootstrap; prefer adding rules at the bottom of the file rather than hunting through the Bootstrap section.
