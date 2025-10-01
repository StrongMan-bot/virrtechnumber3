import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookCallContent from '@/components/pages/BookCallContent';

export const metadata: Metadata = {
  title: 'Book a Call | VIRRTECH - Free AI Automation Consultation',
  description: 'Schedule a free consultation with our AI automation experts. Discover how AI can transform your business processes and boost productivity.',
  keywords: ['AI consultation', 'automation consultation', 'free consultation', 'AI strategy', 'business transformation'],
  openGraph: {
    title: 'Book a Call | VIRRTECH - Free AI Automation Consultation',
    description: 'Schedule a free consultation with our AI automation experts.',
    url: 'https://virrtech.com/book-call',
  },
  alternates: {
    canonical: '/book-call',
  },
};

export default function BookCallPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <BookCallContent />
      <Footer />
    </div>
  );
}

