import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://get-stasis.dev'),
  title: {
    default: 'Stasis - Self-Hosted Git Server',
    template: '%s | Stasis',
  },
  description:
    'A self-hosted Git server with a GitHub-inspired interface, user profiles, contribution graphs, CI/CD, and more.',
  keywords: ['git', 'server', 'self-hosted', 'ci', 'cd', 'devops', 'open-source', 'github-alternative'],
  authors: [{ name: 'Bravo68Web' }, { name: 'XxThunderBlastxX' }],
  creator: 'Stasis',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://get-stasis.dev',
    siteName: 'Stasis',
    title: 'Stasis - Self-Hosted Git Server',
    description:
      'A self-hosted Git server with a GitHub-inspired interface, user profiles, contribution graphs, CI/CD, and more.',
    images: [
      {
        url: '/og/docs/image.png',
        width: 1200,
        height: 630,
        alt: 'Stasis - Self-Hosted Git Server',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stasis - Self-Hosted Git Server',
    description:
      'A self-hosted Git server with a GitHub-inspired interface, user profiles, contribution graphs, CI/CD, and more.',
    images: ['/og/docs/image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="canonical" href="https://get-stasis.dev" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
