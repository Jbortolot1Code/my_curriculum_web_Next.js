import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const rateBucket = new Map<string, number[]>();

function getClientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateBucket.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  hits.push(now);
  rateBucket.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "rate_limited" },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const data = body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    _hp?: string;
  };

  if (data._hp && data._hp.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const subject = (data.subject ?? "").trim();
  const message = (data.message ?? "").trim();

  if (!name || name.length > 120) {
    return NextResponse.json({ error: "invalid_name" }, { status: 400 });
  }
  if (!email || !isValidEmail(email) || email.length > 160) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (!message || message.length < 10 || message.length > 4000) {
    return NextResponse.json({ error: "invalid_message" }, { status: 400 });
  }
  if (subject.length > 200) {
    return NextResponse.json({ error: "invalid_subject" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !from || !to) {
    console.error("contact: missing env configuration");
    return NextResponse.json(
      { error: "server_not_configured" },
      { status: 500 }
    );
  }

  const safeSubject = subject || `Contato do site — ${name}`;
  const html = `
    <h2>Nova mensagem do currículo web</h2>
    <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Assunto:</strong> ${escapeHtml(safeSubject)}</p>
    <hr>
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: safeSubject,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("contact: resend error", res.status, detail);
      return NextResponse.json(
        { error: "send_failed" },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("contact: fetch error", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
