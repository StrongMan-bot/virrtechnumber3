import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SocialMediaAutomationContent from '@/components/pages/BlogPost/SocialMediaAutomationContent';

export const metadata: Metadata = {
  title: 'Social Media Automation: 10x Output Without Hiring | VIRRTECH Blog',
  description: 'Use AI to scale content scheduling, generation, and engagement without adding headcount.',
  keywords: ['social media automation', 'AI content', 'social scheduling', 'auto replies'],
  openGraph: {
    title: 'Social Media Automation | VIRRTECH Blog',
    description: 'Scale content with AI tools and workflows.',
    url: 'https://virrtech.com/blog/social-media-automation',
  },
  alternates: {
    canonical: '/blog/social-media-automation',
  },
};

export default function SocialMediaAutomationPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <SocialMediaAutomationContent />
      <Footer />
    </div>
  );
}



