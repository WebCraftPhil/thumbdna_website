import type { ReactNode } from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
import { cn } from '@/components/ui-utils';

const body = Inter({ subsets: ['latin'], variable: '--font-body' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} scroll-smooth`}>
      <body className={cn('bg-navy text-white antialiased')}>{children}</body>
    </html>
  );
}
