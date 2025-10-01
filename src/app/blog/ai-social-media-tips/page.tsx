import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AISocialMediaTipsContent from '@/components/pages/BlogPost/AISocialMediaTipsContent';

export const metadata: Metadata = {
  title: 'Let AI Run Your Social Media: Tools & Tips | VIRRTECH Blog',
  description: 'How to automate posting, replies, and analytics with AI while keeping brand tone.',
  keywords: ['AI social media', 'social media automation', 'AI tools', 'auto DMs'],
  openGraph: {
    title: 'AI Social Media Tips | VIRRTECH Blog',
    description: 'Tools and workflows to let AI run your social media.',
    url: 'https://virrtech.com/blog/ai-social-media-tips',
  },
  alternates: {
    canonical: '/blog/ai-social-media-tips',
  },
};

export default function AISocialMediaTipsPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <AISocialMediaTipsContent />
      <Footer />
    </div>
  );
}



