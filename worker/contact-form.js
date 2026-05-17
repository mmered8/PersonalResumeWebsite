/**
 * Contact-form backend for masonmeredith.com
 * ------------------------------------------------------------------
 * A Cloudflare Worker that receives the POST from contact.html and
 * emails the submission via the Cloudflare Email Service binding.
 *
 * Deployed separately to Cloudflare (NOT served by GitHub Pages).
 * Binding:  CONTACT_EMAIL  (Email Service)
 * Requires: masonmeredith.com onboarded to Cloudflare Email Sending,
 *           so noreply@masonmeredith.com is a verified sender.
 * See worker/README.md for deployment.
 */

const TO = "mason.mere@gmail.com";
const FROM = { email: "noreply@masonmeredith.com", name: "masonmeredith.com contact" };
const ALLOWED = ["https://masonmeredith.com", "https://www.masonmeredith.com"];

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED.includes(origin) ? origin : ALLOWED[0],
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      "Vary": "Origin",
    };

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return reply({ error: "Method not allowed" }, 405, cors);

    let data;
    try {
      data = await request.json();
    } catch {
      return reply({ error: "Invalid request." }, 400, cors);
    }

    // Honeypot: bots fill hidden fields, humans don't. Silently accept and drop.
    if (String(data.company || "").trim()) return reply({ ok: true }, 200, cors);

    const clip = (s) => String(s ?? "").trim().slice(0, 5000);
    const name = clip(data.name);
    const email = clip(data.email);
    const phone = clip(data.number ?? data.phone);
    const message = clip(data.message);

    if (!name || !email || !message)
      return reply({ error: "Please fill in your name, email, and message." }, 422, cors);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      return reply({ error: "That email address doesn't look valid." }, 422, cors);

    const text =
      `New message from the masonmeredith.com contact form\n\n` +
      `Name:    ${name}\n` +
      `Email:   ${email}\n` +
      `Phone:   ${phone || "(not provided)"}\n\n` +
      `Message:\n${message}\n`;

    try {
      await env.CONTACT_EMAIL.send({
        to: TO,
        from: FROM,
        replyTo: { email, name },
        subject: `Contact form — ${name}`,
        text,
      });
    } catch (err) {
      // `detail` surfaces the Cloudflare error (e.g. E_SENDER_NOT_VERIFIED)
      // during setup — safe to trim later once delivery is confirmed.
      return reply(
        {
          error: "The message could not be sent. Please email mason.mere@gmail.com directly.",
          detail: String((err && err.message) || err),
        },
        502,
        cors,
      );
    }
    return reply({ ok: true }, 200, cors);
  },
};

function reply(body, status, cors) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}
