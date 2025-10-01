import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIProductivityBoostContent from '@/components/pages/BlogPost/AIProductivityBoostContent';

export const metadata: Metadata = {
  title: 'AI Productivity Boost: Save Time with AI Agents | VIRRTECH Blog',
  description: 'Ways to use AI agents to automate work, boost productivity, and free up time.',
  keywords: ['AI productivity', 'AI agents', 'automation ideas', 'workflow automation'],
  openGraph: {
    title: 'AI Productivity Boost | VIRRTECH Blog',
    description: 'Use AI agents to save time and boost productivity.',
    url: 'https://virrtech.com/blog/ai-productivity-boost',
  },
  alternates: {
    canonical: '/blog/ai-productivity-boost',
  },
};

export default function AIProductivityBoostPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <AIProductivityBoostContent />
      <Footer />
    </div>
  );
}



