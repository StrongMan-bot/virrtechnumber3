import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EmailMarketingContent from '@/components/pages/EmailMarketingContent';

export const metadata: Metadata = {
  title: 'Email Marketing | VIRRTECH - AI-Powered Email Campaigns',
  description: 'Boost your email marketing with AI-driven campaigns. Personalized emails, automated sequences, and advanced analytics to increase engagement and conversions.',
  keywords: ['email marketing', 'AI email campaigns', 'email automation', 'personalized emails', 'email analytics'],
  openGraph: {
    title: 'Email Marketing | VIRRTECH - AI-Powered Email Campaigns',
    description: 'Boost your email marketing with AI-driven campaigns and personalized emails.',
    url: 'https://virrtech.com/email-marketing',
  },
  alternates: {
    canonical: '/email-marketing',
  },
};

export default function EmailMarketingPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <EmailMarketingContent />
      <Footer />
    </div>
  );
}

