import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  metadataBase: new URL('https://thumbdna.com'),
  title: {
    default: 'ThumbDNA',
    template: '%s | ThumbDNA',
  },
  description:
    'ThumbDNA learns your creator brand once and generates high-converting YouTube thumbnails forever.',
  openGraph: {
    title: 'ThumbDNA',
    description:
      'Upload your brand once. Generate thumbnails forever. AI-powered thumbnail generation for creators and agencies.',
    url: 'https://thumbdna.com',
    siteName: 'ThumbDNA',
    images: [
      {
        url: '/showcase/thumb-2.png',
        width: 1600,
        height: 900,
        alt: 'ThumbDNA thumbnail generation preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThumbDNA',
    description:
      'Upload your brand once. Generate thumbnails forever. AI-powered thumbnail generation for creators and agencies.',
    images: ['/showcase/thumb-2.png'],
  },
  icons: {
    icon: '/brand/thumbdna-logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
