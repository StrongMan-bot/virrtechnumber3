import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIPhoneCallerContent from '@/components/pages/AIPhoneCallerContent';

export const metadata: Metadata = {
  title: 'AI Phone Caller | VIRRTECH - Automated Phone Systems',
  description: 'AI-powered phone calling solutions that handle customer calls, lead generation, and follow-ups. Natural conversations with advanced AI technology.',
  keywords: ['AI phone calls', 'automated calling', 'AI caller', 'phone automation', 'customer calls', 'lead generation'],
  openGraph: {
    title: 'AI Phone Caller | VIRRTECH - Automated Phone Systems',
    description: 'AI-powered phone calling solutions that handle customer calls, lead generation, and follow-ups.',
    url: 'https://virrtech.com/ai-phone-caller',
  },
  alternates: {
    canonical: '/ai-phone-caller',
  },
};

export default function AIPhoneCallerPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <AIPhoneCallerContent />
      <Footer />
    </div>
  );
}

