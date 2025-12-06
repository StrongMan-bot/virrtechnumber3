import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'
import PageLoader from '../components/ui/PageLoader'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VIRRTECH | AI Automation Agency',
  description: 'Transform your business with AI-powered automation solutions. We provide AI agents, phone callers, web design, email marketing, and social media automation services.',
  keywords: ['AI automation', 'AI agents', 'AI phone calls', 'AI web design', 'email marketing', 'social media automation', 'business automation'],
  authors: [{ name: 'VIRRTECH' }],
  creator: 'VIRRTECH',
  publisher: 'VIRRTECH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://virrtech.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VIRRTECH | AI Automation Agency',
    description: 'Transform your business with AI-powered automation solutions. We provide AI agents, phone callers, web design, email marketing, and social media automation services.',
    url: 'https://virrtech.com',
    siteName: 'VIRRTECH',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VIRRTECH AI Automation Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIRRTECH | AI Automation Agency',
    description: 'Transform your business with AI-powered automation solutions.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="application-name" content="VIRRTECH" />
        <meta name="apple-mobile-web-app-title" content="VIRRTECH" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  'name': 'VIRRTECH',
                  'alternateName': 'VIRRTECH',
                  'url': 'https://virrtech.com',
                  'logo': 'https://virrtech.com/favicon.png'
                },
                {
                  '@type': 'WebSite',
                  'name': 'VIRRTECH',
                  'alternateName': 'VIRRTECH',
                  'url': 'https://virrtech.com',
                  'potentialAction': {
                    '@type': 'SearchAction',
                    'target': 'https://virrtech.com/search?q={search_term_string}',
                    'query-input': 'required name=search_term_string'
                  }
                }
              ]
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '681a7482e630b039f12df728' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: "https://runtime-api.voiceflow.com"
                    }
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
                v.type = "text/javascript"; 
                s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />
      </head>
      <body className="bg-background-dark text-white min-h-screen">
        <PageLoader>
          {children}
        </PageLoader>
        <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER"></div>
      </body>
    </html>
  )
}
