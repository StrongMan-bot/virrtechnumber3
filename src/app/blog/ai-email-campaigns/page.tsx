import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIEmailCampaignsContent from '@/components/pages/BlogPost/AIEmailCampaignsContent';

export const metadata: Metadata = {
  title: 'AI-Driven Email Campaigns: Boosting Open Rates and Conversions | VIRRTECH Blog',
  description: 'How AI optimizes email campaigns with better timing, content, and targeting to increase opens and conversions.',
  keywords: ['AI email campaigns', 'email optimization', 'send time optimization', 'subject line AI'],
  openGraph: {
    title: 'AI-Driven Email Campaigns | VIRRTECH Blog',
    description: 'Boost open rates and conversions with AI-optimized campaigns.',
    url: 'https://virrtech.com/blog/ai-email-campaigns',
  },
  alternates: {
    canonical: '/blog/ai-email-campaigns',
  },
};

export default function AIEmailCampaignsPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <AIEmailCampaignsContent />
      <Footer />
    </div>
  );
}



