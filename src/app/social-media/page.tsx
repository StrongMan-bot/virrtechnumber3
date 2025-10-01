import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SocialMediaContent from '@/components/pages/SocialMediaContent';

export const metadata: Metadata = {
  title: 'Social Media Automation | VIRRTECH - AI Social Media Management',
  description: 'Automate your social media presence with AI. Content creation, scheduling, engagement, and analytics across all major platforms.',
  keywords: ['social media automation', 'AI social media', 'social media management', 'content automation', 'social media AI'],
  openGraph: {
    title: 'Social Media Automation | VIRRTECH - AI Social Media Management',
    description: 'Automate your social media presence with AI content creation and management.',
    url: 'https://virrtech.com/social-media',
  },
  alternates: {
    canonical: '/social-media',
  },
};

export default function SocialMediaPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <SocialMediaContent />
      <Footer />
    </div>
  );
}

