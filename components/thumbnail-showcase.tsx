import Image from 'next/image';
import { showcaseThumbs } from '@/lib/site';
import { cn } from '@/components/ui-utils';

export function ThumbnailShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-glow',
        compact ? 'p-3' : 'p-4',
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-white/10 via-transparent to-purple/15" />
      <div className="relative z-10 grid gap-3 md:grid-cols-3">
        {showcaseThumbs.slice(0, 3).map((thumb, index) => (
          <div
            key={thumb.src}
            className={cn(
              'group relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#0f1728] shadow-soft',
              index === 1 ? 'md:-translate-y-3' : '',
            )}
          >
            <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between">
              <span className="rounded-full bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
                Ready
              </span>
              <span className="rounded-full bg-[#0B1220]/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                HD
              </span>
            </div>
            <div className="relative aspect-[16/10]">
              <Image
                src={thumb.src}
                alt={thumb.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
