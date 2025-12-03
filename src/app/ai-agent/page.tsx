import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIAgentContent from '@/components/pages/AIAgentContent';

export const metadata: Metadata = {
  title: 'AI Agents | VIRRTECH - Intelligent Business Automation',
  description: 'Deploy intelligent AI agents that understand, learn, and automate complex business processes. Custom-built AI solutions that work 24/7 to grow your business.',
  keywords: ['AI agents', 'business automation', 'intelligent automation', 'AI assistants', 'workflow automation'],
  openGraph: {
    title: 'AI Agents | VIRRTECH - Intelligent Business Automation',
    description: 'Deploy intelligent AI agents that understand, learn, and automate complex business processes.',
    url: 'https://virrtech.com/ai-agent',
  },
  alternates: {
    canonical: '/ai-agent',
  },
};

export default function AIAgentPage() {
  const jsonLd = {
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
        'url': 'https://virrtech.com',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://virrtech.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  return (
    <div className="bg-background-dark text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <AIAgentContent />
      <Footer />
    </div>
  );
}

