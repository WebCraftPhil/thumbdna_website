import { cn } from '@/components/ui-utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn('max-w-3xl', center && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple/90">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-white/68 sm:text-lg">{description}</p> : null}
    </div>
  );
}
