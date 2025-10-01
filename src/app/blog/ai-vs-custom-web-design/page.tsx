import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIVsCustomWebDesignContent from '@/components/pages/BlogPost/AIVsCustomWebDesignContent';

export const metadata: Metadata = {
  title: 'AI vs Custom Web Design: Which is Right for You? | VIRRTECH Blog',
  description: 'Compare AI web design with traditional custom development. Learn the pros, cons, and when to choose each approach for your business.',
  keywords: ['AI web design', 'custom web design', 'website development', 'AI vs traditional', 'web design comparison'],
  openGraph: {
    title: 'AI vs Custom Web Design: Which is Right for You? | VIRRTECH Blog',
    description: 'Compare AI web design with traditional custom development approaches.',
    url: 'https://virrtech.com/blog/ai-vs-custom-web-design',
  },
  alternates: {
    canonical: '/blog/ai-vs-custom-web-design',
  },
};

export default function AIVsCustomWebDesignPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <AIVsCustomWebDesignContent />
      <Footer />
    </div>
  );
}

