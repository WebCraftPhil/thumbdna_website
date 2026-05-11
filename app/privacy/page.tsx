import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'ThumbDNA privacy policy covering account data, uploaded images, payment processing, cookies, analytics, and retention.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy explains how ThumbDNA handles account data, uploaded assets, payments, analytics, cookies, and retention."
    >
      <h2>Account data</h2>
      <p>
        We collect the information needed to create and maintain your account, including your name, email address, subscription details, and support requests.
      </p>

      <h2>Uploaded images and logos</h2>
      <p>
        When you upload logos, face photos, references, or other Brand DNA assets, we store and process them to generate thumbnails and preserve your style settings.
      </p>

      <h2>Payment processing</h2>
      <p>
        Payment information is handled by trusted third-party processors. ThumbDNA does not store full payment card details on its own servers.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        We use cookies and analytics tools to understand usage, improve the product, and measure conversion. You can control cookies through your browser settings.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain account and usage data for as long as needed to provide the service, comply with legal obligations, and resolve support issues.
      </p>

      <h2>Contact information</h2>
      <p>
        Questions about privacy can be sent to <a href="mailto:privacy@thumbdna.com">privacy@thumbdna.com</a>.
      </p>
    </LegalPage>
  );
}
