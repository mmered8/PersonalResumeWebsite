# Domain Notes

## Current state (2026-05-14)

- This repo's content is Mason Locke Meredith's personal/resume site.
- `CNAME` still points to `goalsinoverdrive.com` — left intact so the live site keeps working.
- The brand mismatch (domain says "goals in overdrive", content is personal) is intentional for now; a coordinated swap is planned.

## Planned domain swap

1. Stand up the real `goalsinoverdrive.com` content in the sibling repo `../GoalsinOverdriveV2/`.
2. Purchase `masonmeredith.com` (pending — cost-dependent).
3. Once `masonmeredith.com` is registered and DNS is configured:
   - Update this repo's `CNAME` to `masonmeredith.com`.
   - Update `GoalsinOverdriveV2`'s `CNAME` to `goalsinoverdrive.com`.
   - Flip GitHub Pages custom domain settings on both repos in the same window.
4. If `masonmeredith.com` is unavailable or too expensive, fall back to a different personal domain and update step 3 accordingly.

## Note for future AI agents

If you're editing this repo and the domain swap hasn't happened yet:
- Do NOT change `CNAME` unless explicitly told the swap is happening now.
- The "future home" of this content is `masonmeredith.com` — use that naming if you add metadata, social cards, or canonical URLs that are forward-looking.
- The V2 goalsinoverdrive build is tracked in `../GoalsinOverdriveV2/`.
