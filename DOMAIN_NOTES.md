# Domain Notes

## Current state (2026-05-16)

- This repo's content is Mason Locke Meredith's personal/resume site.
- `CNAME` points to **`masonmeredith.com`** — the domain swap has been executed.
- `masonmeredith.com` is registered at Porkbun, DNS managed by Cloudflare.

## Domain swap — DONE (2026-05-16)

The site now lives at `masonmeredith.com`. Completed steps:

1. Created GitHub Pages DNS records in Cloudflare for `masonmeredith.com`:
   - 4 apex `A` records → `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`
   - 4 apex `AAAA` records → `2606:50c0:8000::153` … `8003::153`
   - `www` `CNAME` → `mmered8.github.io`
   - All records set to **DNS only** (not Cloudflare-proxied) so GitHub can issue its HTTPS cert.
2. Flipped this repo's `CNAME` from `goalsinoverdrive.com` to `masonmeredith.com`.
3. GitHub Pages provisions the Let's Encrypt certificate automatically once DNS resolves.

## Consequence: goalsinoverdrive.com

- `goalsinoverdrive.com` is **no longer served by this repo** — a GitHub Pages repo
  serves only one custom domain. It will 404 until a site claims it.
- The plan: build the real `goalsinoverdrive.com` site in `../GoalsinOverdriveV2/`,
  then set that repo's `CNAME` to `goalsinoverdrive.com`.

## Note for future AI agents

- This site's canonical domain is `masonmeredith.com`. Use it for metadata, social
  cards, and canonical URLs.
- If Cloudflare proxying (orange cloud) is ever enabled on the DNS records, set the
  Cloudflare SSL/TLS mode to "Full" or GitHub Pages HTTPS will break.
- The V2 goalsinoverdrive build is tracked in `../GoalsinOverdriveV2/`.
