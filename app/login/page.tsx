import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Login',
  description: 'ThumbDNA account login.',
};

export default function LoginPage() {
  return (
    <div>
      <SiteHeader />
      <main className="mx-auto flex max-w-2xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="site-card w-full rounded-[2rem] p-8 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-white/40">Login</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-white">Account access is coming soon.</h1>
          <p className="mx-auto mt-4 max-w-lg leading-7 text-white/68">
            The marketing site is live first. If you need access or want to talk about a plan, reach out to support and we&apos;ll help you get set up.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/support"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#08111a] transition hover:bg-gold"
            >
              Contact Support
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back Home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
