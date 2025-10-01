import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIVsTraditionalDesignContent from '@/components/pages/BlogPost/AIVsTraditionalDesignContent';

export const metadata: Metadata = {
  title: 'AI vs Traditional Web Design: What to Choose? | VIRRTECH Blog',
  description: 'Compare AI web design platforms with traditional custom design for your next site.',
  keywords: ['AI web design', 'traditional design', 'website options', 'web design choice'],
  openGraph: {
    title: 'AI vs Traditional Web Design | VIRRTECH Blog',
    description: 'Weigh cost, flexibility, and speed between AI platforms and custom design.',
    url: 'https://virrtech.com/blog/ai-vs-traditional-design',
  },
  alternates: {
    canonical: '/blog/ai-vs-traditional-design',
  },
};

export default function AIVsTraditionalDesignPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <AIVsTraditionalDesignContent />
      <Footer />
    </div>
  );
}



