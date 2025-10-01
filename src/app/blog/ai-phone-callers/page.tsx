import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIPhoneCallersContent from '@/components/pages/BlogPost/AIPhoneCallersContent';

export const metadata: Metadata = {
  title: 'AI Phone Callers: Cold Calling & Appointment Booking | VIRRTECH Blog',
  description: 'How AI voice agents handle outreach, qualification, and meeting scheduling at scale.',
  keywords: ['AI phone callers', 'AI voice agents', 'cold calling AI', 'appointment booking AI'],
  openGraph: {
    title: 'AI Phone Callers | VIRRTECH Blog',
    description: 'The future of cold calling and appointment booking with AI.',
    url: 'https://virrtech.com/blog/ai-phone-callers',
  },
  alternates: {
    canonical: '/blog/ai-phone-callers',
  },
};

export default function AIPhoneCallersPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <AIPhoneCallersContent />
      <Footer />
    </div>
  );
}



