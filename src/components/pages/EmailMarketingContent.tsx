'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import FloatingParticlesCanvas from '../ui/FloatingParticlesCanvas';
import { Mail, Clock, Users, BarChart3, Target, Settings, ChevronDown, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const EmailMarketing: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How personalized are these emails really?",
      answer: "The AI tailors each email based on user behavior, purchase history, and interests—not just their name."
    },
    {
      question: "Do I need a big email list for this to work?",
      answer: "No. It works well for any list size—even 100 contacts."
    },
    {
      question: "Will my emails look professional?",
      answer: "Yes. Emails use mobile-friendly designs that match your brand, filled with personalized content."
    },
    {
      question: "How much time will I need to spend?",
      answer: "Very little—just 15–30 minutes/month reviewing results and approving suggestions."
    },
    {
      question: "Will these emails go to spam folders?",
      answer: "Rarely. The system follows deliverability best practices and personalization helps improve inbox placement."
    },
    {
      question: "How do I know if it's working?",
      answer: "You'll see real-time metrics like open/click rates, purchases, and total revenue from email campaigns."
    }
  ];

  const includedFeatures = [
    "AI-powered content generation",
    "Automated send-time optimization",
    "Dynamic personalization",
    "A/B testing automation",
    "Revenue tracking dashboard",
    "Deliverability optimization",
    "Mobile-responsive templates"
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingParticlesCanvas
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-hero-pattern z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark z-20"></div>
        
        <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-tech font-bold mb-6 tracking-tight">
            <span className="text-white">Email Marketing </span>
            <span className="bg-clip-text text-transparent bg-accent-gradient">Automation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Send smarter emails that convert, without lifting a finger
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <Link href="/book-call">
              <Button
                variant="primary"
                size="lg"
                className="mb-2"
              >
                Devise a Solution
              </Button>
            </Link>
            <Link href="/newsletter">
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-400 hover:text-white"
              >
                📰 Still deciding? Join our newsletter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6">
              Email Marketing Automation
            </h2>
            <h3 className="text-2xl font-tech font-bold mb-4">What Is Email Marketing Automation?</h3>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Our Email Marketing Automation system sends personalized emails to thousands of people at once, without extra work. Each message feels custom-made, even when sent to your entire list.
            </p>
            <h3 className="text-2xl font-tech font-bold mb-4">How It Works</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our AI learns from your customer data, product info, and behavior patterns to send the right email to the right person at the right time. It auto-generates content, schedules, sends, and improves with each campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-center mb-16">
            Key Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Users className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Personal Touch at Scale</h3>
              <p className="text-gray-400">Every email feels custom-written for the recipient.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Target className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Works for Any Business</h3>
              <p className="text-gray-400">Great for retail, services, and B2B companies.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <BarChart3 className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">More Sales</h3>
              <p className="text-gray-400">Targeted offers that drive conversions and revenue.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Clock className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Save Time</h3>
              <p className="text-gray-400">No more manual email writing and scheduling.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Mail className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Smart Delivery</h3>
              <p className="text-gray-400">Sends at the perfect time for each recipient.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Settings className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Easy Management</h3>
              <p className="text-gray-400">Simple dashboard for monitoring and updates.</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-tech font-bold mb-8 text-center">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <p className="text-lg font-semibold text-center mt-12 text-gray-300">
              With VIRRTECH's Email Marketing Automation, you send thousands of personalized emails that boost engagement and drive revenue—without hiring a team or wasting hours.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-center mb-16">
            Email Marketing Automation: Common Questions
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-background-light rounded-lg border border-gray-800 overflow-hidden transition-all duration-200"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background-light/50"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-medium text-lg">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`px-6 transition-all duration-200 overflow-hidden ${
                    openFaqIndex === index ? 'py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default EmailMarketing;