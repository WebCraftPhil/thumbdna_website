import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'ThumbDNA subscription terms, refund policy, intellectual property ownership, and acceptable use.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These Terms of Service govern subscriptions, refunds, intellectual property, and acceptable use for ThumbDNA."
    >
      <h2>Subscription terms</h2>
      <p>
        Some ThumbDNA features are offered on a subscription basis. Plans renew on the cadence shown at purchase unless canceled before the next billing cycle.
      </p>

      <h2>Refund policy</h2>
      <p>
        Refund eligibility may vary by plan and by the reason for the request. If something is wrong, contact support and we will review the case directly.
      </p>

      <h2>Intellectual property ownership</h2>
      <p>
        You retain ownership of the content, logos, and images you upload. ThumbDNA does not claim ownership of your creator brand assets or final exported thumbnails.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You may not use ThumbDNA to upload unlawful content, infringe someone else&apos;s rights, or misuse the service in ways that harm the platform or other users.
      </p>
    </LegalPage>
  );
}
