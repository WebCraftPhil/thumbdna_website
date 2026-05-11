import type { Metadata } from 'next';
import { ArrowRight, LifeBuoy, MessageSquareText, Sparkles } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Contact ThumbDNA support for billing, technical support, and feature requests.',
};

const supportCards = [
  {
    title: 'Billing',
    description: 'Questions about plans, invoices, refunds, and account upgrades.',
    icon: LifeBuoy,
  },
  {
    title: 'Technical Support',
    description: 'Help with uploads, exports, generation errors, and brand kit syncing.',
    icon: MessageSquareText,
  },
  {
    title: 'Feature Requests',
    description: 'Share what would make the workflow faster or more useful for your brand.',
    icon: Sparkles,
  },
] as const;

export default function SupportPage() {
  return (
    <div>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Support"
              title="Get help fast."
              description="Typical response time is within 24 hours. We keep the support path simple so creators can keep shipping."
            />

            <div className="mt-8 grid gap-4">
              {supportCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="site-card rounded-[1.5rem] p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-gold ring-1 ring-white/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-semibold text-white">{card.title}</h2>
                        <p className="mt-2 leading-7 text-white/66">{card.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 site-card rounded-[1.5rem] p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-white/35">Email</p>
              <a href="mailto:support@thumbdna.com" className="mt-2 block text-2xl font-semibold text-white">
                support@thumbdna.com
              </a>
              <p className="mt-2 text-white/66">We typically respond within 24 hours.</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                <ArrowRight className="h-4 w-4" />
                For the fastest response, include your account email and the plan name.
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
