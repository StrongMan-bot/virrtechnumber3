import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogContent from '@/components/pages/BlogContent';

export const metadata: Metadata = {
  title: 'AI Blog | VIRRTECH - Latest AI Automation Insights',
  description: 'Explore the latest insights, tips, and trends in AI automation. Learn how businesses are transforming with AI-powered solutions.',
  keywords: ['AI blog', 'automation insights', 'AI trends', 'business automation', 'AI tips', 'automation case studies'],
  openGraph: {
    title: 'AI Blog | VIRRTECH - Latest AI Automation Insights',
    description: 'Explore the latest insights and trends in AI automation.',
    url: 'https://virrtech.com/blog',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <BlogContent />
      <Footer />
    </div>
  );
}

