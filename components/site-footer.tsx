import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/support' },
  { label: 'X/Twitter', href: 'https://x.com', external: true },
  { label: 'YouTube', href: 'https://youtube.com', external: true },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#08111a]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1.5 shadow-soft ring-1 ring-white/10">
              <Image
                src="/brand/thumbdna-logo.png"
                alt="ThumbDNA logo"
                width={96}
                height={96}
                className="h-full w-full rounded-xl object-contain"
              />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-white">ThumbDNA</p>
              <p className="text-sm text-white/55">Upload your brand once. Generate thumbnails forever.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:flex-wrap md:justify-end">
            {footerLinks.map((link) =>
              'external' in link && link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className="text-sm text-white/60 transition hover:text-white">
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
