import type { Metadata } from 'next';
import './globals.css';
import { PROFILE } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: `${PROFILE.fullName} — AI Product Engineer & Full-Stack Builder`,
  description: PROFILE.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-zinc-950 text-zinc-100 min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}