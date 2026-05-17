# Contact form backend

A Cloudflare Worker that powers the [contact form](../contact.html). It receives
the form POST, validates it, and emails the submission to `mason.mere@gmail.com`
through the Cloudflare Email Service.

This replaced an AWS API Gateway + Lambda endpoint that went dead. Unlike that
setup, the backend now lives in this repo.

## How it works

```
contact.html  --POST JSON-->  masonmeredith-contact Worker  --Email Service-->  Gmail
```

- [`contact-form.js`](contact-form.js) — the Worker. Validates fields, drops
  honeypot submissions, and sends the email via the `CONTACT_EMAIL` binding.
- [`wrangler.toml`](wrangler.toml) — Worker config, including the Email Service
  (`send_email`) binding.
- [`js/scripts.js`](../js/scripts.js) `handleSubmit` POSTs to the Worker's
  `workers.dev` URL.

Live Worker URL: `https://masonmeredith-contact.mason-mere.workers.dev/`

## Requirements

- The `CONTACT_EMAIL` Email Service binding on the Worker.
- `masonmeredith.com` onboarded to **Cloudflare Email Sending** — this verifies
  the domain (SPF/DKIM/DMARC) so `noreply@masonmeredith.com` can be a sender.
  Email Sending onboarding is separate from Email Routing.

## Deploy

With the Wrangler CLI:

```sh
cd worker
wrangler deploy
```

Or paste `contact-form.js` into the Cloudflare dashboard Worker editor and add an
Email Service binding named `CONTACT_EMAIL`.

## Notes

- CORS is locked to `https://masonmeredith.com` and `https://www.masonmeredith.com`.
- The visitor's address goes in `replyTo`, so replying from Gmail reaches them
  directly. The `from` stays `noreply@masonmeredith.com`.
- A hidden `company` honeypot field silently drops bot submissions.
- On failure the Worker returns a `detail` field with the underlying error —
  handy during setup, safe to trim once delivery is confirmed.
