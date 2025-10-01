import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsletterContent from '@/components/pages/NewsletterContent';

export const metadata: Metadata = {
  title: 'Newsletter | VIRRTECH - AI Insights & Updates',
  description: 'Stay updated with the latest AI automation trends, tips, and VIRRTECH insights. Join our newsletter for exclusive content and industry updates.',
  keywords: ['AI newsletter', 'automation insights', 'AI trends', 'business automation tips', 'VIRRTECH updates'],
  openGraph: {
    title: 'Newsletter | VIRRTECH - AI Insights & Updates',
    description: 'Stay updated with the latest AI automation trends and VIRRTECH insights.',
    url: 'https://virrtech.com/newsletter',
  },
  alternates: {
    canonical: '/newsletter',
  },
};

export default function NewsletterPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <NewsletterContent />
      <Footer />
    </div>
  );
}

