'use client';

import { useMemo, useState } from 'react';
import { supportCategories } from '@/lib/site';

export function ContactForm() {
  const [form, setForm] = useState<{
    name: string;
    email: string;
    category: string;
    message: string;
  }>({
    name: '',
    email: '',
    category: supportCategories[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`ThumbDNA Support - ${form.category}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCategory: ${form.category}\n\n${form.message}`,
    );
    return `mailto:support@thumbdna.com?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <div className="site-card rounded-[2rem] p-6 sm:p-8">
      <form
        className="grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          window.location.href = mailto;
          setSubmitted(true);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            placeholder="Your name"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-purple/50"
          />
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            placeholder="Email address"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-purple/50"
          />
        </div>

        <select
          value={form.category}
          onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-purple/50"
        >
          {supportCategories.map((category) => (
            <option key={category} value={category} className="bg-[#0b1220]">
              {category}
            </option>
          ))}
        </select>

        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          placeholder="Tell us what you need help with"
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-purple/50"
        />

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#08111a] transition hover:bg-gold"
        >
          Send message
        </button>
      </form>

      <div className="mt-5 text-sm text-white/55">
        Typical response time is within 24 hours. If you prefer email, write to{' '}
        <a className="text-white underline decoration-white/25 underline-offset-4" href="mailto:support@thumbdna.com">
          support@thumbdna.com
        </a>
        .
      </div>

      {submitted ? <p className="mt-3 text-sm text-gold">Opening your email client now.</p> : null}
    </div>
  );
}
