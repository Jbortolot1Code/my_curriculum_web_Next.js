"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      _hp: String(formData.get("_hp") ?? ""),
    };

    setStatus("sending");
    setErrorKey(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setErrorKey(data.error ?? "send_failed");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorKey("network");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-slate-500 focus:bg-slate-900/80";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 grid gap-4"
      noValidate
    >
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">
            {t("contact.form.name")}
          </label>
          <input
            type="text"
            name="name"
            required
            maxLength={120}
            className={inputClass}
            placeholder={t("contact.form.namePlaceholder")}
          />
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">
            {t("contact.form.email")}
          </label>
          <input
            type="email"
            name="email"
            required
            maxLength={160}
            className={inputClass}
            placeholder={t("contact.form.emailPlaceholder")}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">
          {t("contact.form.subject")}
        </label>
        <input
          type="text"
          name="subject"
          maxLength={200}
          className={inputClass}
          placeholder={t("contact.form.subjectPlaceholder")}
        />
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">
          {t("contact.form.message")}
        </label>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          className={`${inputClass} resize-y`}
          placeholder={t("contact.form.messagePlaceholder")}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending"
            ? t("contact.form.sending")
            : t("contact.form.submit")}
        </button>

        {status === "success" && (
          <p className="text-sm text-emerald-400">
            {t("contact.form.success")}
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-rose-400">
            {t(`contact.form.errors.${errorKey ?? "send_failed"}`)}
          </p>
        )}
      </div>
    </form>
  );
}
