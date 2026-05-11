import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/lib/site';
import { cn } from '@/components/ui-utils';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0B1220]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1.5 shadow-soft ring-1 ring-white/10">
            <Image
              src="/brand/thumbdna-logo.png"
              alt="ThumbDNA logo"
              width={96}
              height={96}
              className="h-full w-full rounded-xl object-contain"
              priority
            />
          </span>
          <span className="hidden font-display text-lg font-semibold tracking-tight text-white sm:block">
            ThumbDNA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium text-white/70 transition hover:text-white',
                'highlight' in link && link.highlight && 'rounded-full border border-purple/40 bg-purple/20 px-4 py-2 text-white',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/support"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
