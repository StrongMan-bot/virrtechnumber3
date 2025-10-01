import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIWebDesignContent from '@/components/pages/AIWebDesignContent';

export const metadata: Metadata = {
  title: 'AI Web Design | VIRRTECH - Custom Websites in Days',
  description: 'Get a custom, professional website built by AI in days, not months. Responsive, SEO-optimized websites tailored to your business needs.',
  keywords: ['AI web design', 'custom websites', 'website development', 'AI design', 'responsive websites', 'SEO websites'],
  openGraph: {
    title: 'AI Web Design | VIRRTECH - Custom Websites in Days',
    description: 'Get a custom, professional website built by AI in days, not months.',
    url: 'https://virrtech.com/ai-web-design',
  },
  alternates: {
    canonical: '/ai-web-design',
  },
};

export default function AIWebDesignPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <AIWebDesignContent />
      <Footer />
    </div>
  );
}

