import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AICallCenterCasesContent from '@/components/pages/BlogPost/AICallCenterCasesContent';

export const metadata: Metadata = {
  title: 'AI for Call Centers: Eight Case Studies | VIRRTECH Blog',
  description: 'Eight practical ways call centers use AI to improve speed, quality, and cost.',
  keywords: ['AI call center', 'agent assist', 'call summarization', 'IVR AI'],
  openGraph: {
    title: 'AI for Call Centers | VIRRTECH Blog',
    description: 'Eight case studies of AI-powered customer support.',
    url: 'https://virrtech.com/blog/ai-call-center-cases',
  },
  alternates: {
    canonical: '/blog/ai-call-center-cases',
  },
};

export default function AICallCenterCasesPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <AICallCenterCasesContent />
      <Footer />
    </div>
  );
}



