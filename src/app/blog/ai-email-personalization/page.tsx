import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIEmailPersonalizationContent from '@/components/pages/BlogPost/AIEmailPersonalizationContent';

export const metadata: Metadata = {
  title: 'AI Email Personalization Strategies | VIRRTECH Blog',
  description: 'Master AI-driven email personalization to boost engagement and conversions. Learn advanced techniques and implementation strategies.',
  keywords: ['AI email personalization', 'email marketing AI', 'personalized emails', 'email automation', 'email engagement'],
  openGraph: {
    title: 'AI Email Personalization Strategies | VIRRTECH Blog',
    description: 'Master AI-driven email personalization to boost engagement and conversions.',
    url: 'https://virrtech.com/blog/ai-email-personalization',
  },
  alternates: {
    canonical: '/blog/ai-email-personalization',
  },
};

export default function AIEmailPersonalizationPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <AIEmailPersonalizationContent />
      <Footer />
    </div>
  );
}

