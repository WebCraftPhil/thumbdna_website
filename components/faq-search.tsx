'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { faqItems } from '@/lib/site';

export function FaqSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return faqItems;
    return faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(term) ||
        item.answer.toLowerCase().includes(term),
    );
  }, [query]);

  return (
    <div className="space-y-6">
      <label className="relative block">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search the FAQ"
          className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-purple/50 focus:bg-white/7"
        />
      </label>

      <div className="grid gap-4">
        {results.map((item) => (
          <article key={item.question} className="site-card rounded-[1.5rem] p-5">
            <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            <p className="mt-2 leading-7 text-white/68">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
