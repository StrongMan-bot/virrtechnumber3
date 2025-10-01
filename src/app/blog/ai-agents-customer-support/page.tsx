import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIAgentsCustomerSupportContent from '@/components/pages/BlogPost/AIAgentsCustomerSupportContent';

export const metadata: Metadata = {
  title: 'AI Agents for Customer Support | VIRRTECH Blog',
  description: 'Discover how AI agents are revolutionizing customer support. Learn about implementation strategies, benefits, and real-world success stories.',
  keywords: ['AI customer support', 'AI agents', 'customer service automation', 'AI chatbots', 'support automation'],
  openGraph: {
    title: 'AI Agents for Customer Support | VIRRTECH Blog',
    description: 'Discover how AI agents are revolutionizing customer support with automation.',
    url: 'https://virrtech.com/blog/ai-agents-customer-support',
  },
  alternates: {
    canonical: '/blog/ai-agents-customer-support',
  },
};

export default function AIAgentsCustomerSupportPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <AIAgentsCustomerSupportContent />
      <Footer />
    </div>
  );
}

