import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="site-card rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">{intro}</p>
          <div className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-p:text-white/68 prose-li:text-white/68 prose-a:text-purple-300">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
