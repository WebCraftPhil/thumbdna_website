import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BadgeCheck, ChevronRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';
import { ThumbnailShowcase } from '@/components/thumbnail-showcase';
import { featureItems, pricingPlans, faqItems, showcaseThumbs } from '@/lib/site';
import { cn } from '@/components/ui-utils';

const steps = [
  { title: 'Upload your Brand DNA', detail: 'Drop in your logo, face photo, colors, fonts, and favorite thumbnail references.' },
  { title: 'Enter your video title', detail: 'ThumbDNA turns the idea into a thumbnail brief that fits your niche and style.' },
  { title: 'Generate 3 thumbnail options', detail: 'See multiple directions instantly so you can choose the strongest click-through hook.' },
  { title: 'Export and publish', detail: 'Finish fast, keep consistency, and ship the thumbnail that best fits the video.' },
];

const proofPoints = ['Built for YouTubers', 'Made for agencies', 'Brand DNA trained', 'High-click layouts'];

export default function HomePage() {
  return (
    <div className="noise">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="mx-auto grid max-w-7xl gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="relative z-10 flex flex-col justify-center">
              <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Upload Your Brand Once. Generate Thumbnails Forever.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                AI-powered thumbnail generation trained on your unique style, colors, fonts, face photo, and creative assets.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#08111a] transition hover:bg-gold"
                >
                  Start Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#showcase"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Watch Demo
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {proofPoints.map((item) => (
                  <div key={item} className="glass rounded-full px-4 py-2 text-sm text-white/78">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="site-card relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
                <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-transparent to-blue/15" />
                <div className="relative mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/55">Brand DNA workspace</p>
                    <p className="font-display text-2xl font-semibold text-white">Three thumbnail options</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                    Preview
                  </div>
                </div>
                <ThumbnailShowcase />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-center text-sm uppercase tracking-[0.28em] text-white/38">
              Trusted by creators who want more clicks and less design work.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="site-card rounded-[2rem] p-8">
              <SectionHeading
                title="Most creators waste hours making thumbnails that fail to get clicks."
                description="They rebuild the same visual style every time, without a reusable system or a thumbnail model trained on what their audience already responds to."
              />
            </div>
            <div className="site-card rounded-[2rem] p-8">
              <SectionHeading
                title="ThumbDNA turns your logo, colors, fonts, and face photo into a reusable creative system that generates thumbnails in seconds."
                description="The app learns the visual rules behind your best-performing content and uses them to create fresh options that still feel unmistakably yours."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" id="showcase">
          <SectionHeading
            title="A simple workflow that keeps the brand consistent."
            description="Creators do not need a complicated design process. ThumbDNA handles the visual memory, so each new thumbnail starts from the right place."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="site-card rounded-[1.6rem] p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple/25 to-blue/20 text-white ring-1 ring-white/10">
                  <span className="font-display text-lg font-semibold">{index + 1}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-white/66">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            title="Everything needed to ship better thumbnails faster."
            description="ThumbDNA is built to feel like an operating system for your visual brand, not just a one-off generator."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featureItems.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="site-card rounded-[1.5rem] p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-gold ring-1 ring-white/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-white/66">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="site-card rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                title="Real thumbnails generated with ThumbDNA."
                description="These are the kind of bold, branded results creators can produce without redesigning from scratch every time."
              />
              <Link
                href="/support"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
              >
                Start Free Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {showcaseThumbs.slice(0, 3).map((thumb) => (
                <div
                  key={thumb.src}
                  className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0f1728]"
                >
                  <div className="relative aspect-[16/9]">
                    <Image src={thumb.src} alt={thumb.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            title="Simple plans that scale with your channel."
            description="Launch free, then upgrade only when your content cadence or team size grows."
            center
          />

          <div className="mt-10 grid gap-5 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  'site-card rounded-[1.75rem] p-7',
                  plan.highlighted && 'border-purple/40 bg-white/[0.07] shadow-[0_0_0_1px_rgba(124,58,237,.2),0_30px_80px_rgba(20,20,40,.55)]',
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold text-white">{plan.name}</h3>
                  {plan.highlighted ? (
                    <span className="rounded-full bg-purple/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-purple-200">
                      Most Popular
                    </span>
                  ) : null}
                </div>
                <div className="mt-5 flex items-end gap-2">
                  <span className="font-display text-5xl font-semibold text-white">{plan.price}</span>
                  <span className="pb-1 text-sm text-white/55">{plan.interval}</span>
                </div>
                <p className="mt-4 min-h-[3.5rem] leading-7 text-white/65">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/78">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  data-stripe-plan={plan.name.toLowerCase()}
                  className={cn(
                    'mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition',
                    plan.highlighted
                      ? 'bg-white text-[#08111a] hover:bg-gold'
                      : 'border border-white/10 bg-white/5 text-white hover:bg-white/10',
                  )}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                title="Straight answers to the questions creators ask most."
                description="If a creator is evaluating the product, this is usually where trust gets finished."
              />
              <Link
                href="/faq"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
              >
                Open standalone FAQ
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {faqItems.slice(0, 3).map((item) => (
                <div key={item.question} className="site-card rounded-[1.4rem] p-6">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="mt-2 leading-7 text-white/66">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="site-card overflow-hidden rounded-[2rem] p-8 text-center sm:p-12">
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Stop Guessing. Start Generating Click-Worthy Thumbnails.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/68">
              ThumbDNA captures your unique Brand DNA and transforms it into endless professional thumbnails designed to increase clicks and save time.
            </p>
            <div className="mt-8">
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#08111a] transition hover:bg-gold"
              >
                Start Free Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
