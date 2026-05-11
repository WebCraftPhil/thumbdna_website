import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';
import { FaqSearch } from '@/components/faq-search';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Search the ThumbDNA FAQ for answers about workflow, image models, face uploads, rollover, and agency management.',
};

export default function FaqPage() {
  return (
    <div>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Searchable answers for creators and agencies."
          description="Use the search field below to find the exact answer you need without digging through a long support doc."
          center
        />
        <div className="mt-10">
          <FaqSearch />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
