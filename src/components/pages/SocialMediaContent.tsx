'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import FloatingParticlesCanvas from '../ui/FloatingParticlesCanvas';
import { Share2, Clock, Users, BarChart3, Target, Settings, ChevronDown, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const SocialMedia: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Does the AI really sound like me or my brand?",
      answer: "Yes. During setup, we analyze your existing content and brand voice. The AI learns your typical phrases, humor style, and communication patterns. You can review early posts to provide feedback, and the system gets better at matching your voice over time."
    },
    {
      question: "How does the AI know what to post about?",
      answer: "We study your industry, competitors, and audience interests to create a content strategy. The AI monitors trending topics in your field and creates relevant posts that align with your business goals. You can also provide key themes or topics you want to focus on."
    },
    {
      question: "Can I review content before it goes live?",
      answer: "Absolutely. You can choose full automation where the AI posts directly, or review mode where you approve content before publishing. Most clients start with review mode and switch to full automation once they're comfortable with the AI's performance."
    },
    {
      question: "How does the AI handle negative comments?",
      answer: "The AI is trained to respond professionally to criticism, answer questions, and identify when issues need human attention. For sensitive situations, the system can alert you to step in. You set the guidelines for what requires human review."
    },
    {
      question: "How many posts does the system create?",
      answer: "The standard package includes 1 daily post per platform on up to 3 platforms of your choice. We can customize posting frequency based on your needs. The AI also responds to all comments and messages, regardless of how many you receive."
    },
    {
      question: "Will people know it's AI managing my accounts?",
      answer: "That's up to you. The AI can identify itself as your 'social media team' or you can present it as seamless brand communication. The responses are natural enough that most followers won't notice a difference from human management."
    }
  ];

  const platforms = [
    "LinkedIn profile and company pages",
    "Instagram feed, stories, and reels",
    "X (formerly Twitter) timeline",
    "Facebook profiles and business pages",
    "And other platforms you use"
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
            <span className="text-white">Social Media </span>
            <span className="bg-clip-text text-transparent bg-accent-gradient">Automation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            AI-crafted content that works around the clock to grow your brand.
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
      <section id="overview" className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6">
              What Is Social Media Automation?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Our Social Media Automation keeps your business active and engaging online without consuming your time. Using AI, we create, schedule, and post daily content across LinkedIn, Instagram, X (formerly Twitter), and other platforms. The system also monitors and responds to comments, messages, and mentions, maintaining connections with your audience even when you're busy.
            </p>
            <h3 className="text-2xl font-tech font-bold mb-4">How It Works</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our AI studies your brand, industry, and audience preferences to create relevant posts, images, and videos. It publishes content at optimal times, responds to comments naturally, answers direct messages, and tracks performance. You can review content in advance or let the system handle everything automatically.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Clock className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Daily Presence</h3>
              <p className="text-gray-400">Fresh content posted every day on your chosen platforms.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Users className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Real Engagement</h3>
              <p className="text-gray-400">AI responds to comments and messages like you would.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <BarChart3 className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Performance Tracking</h3>
              <p className="text-gray-400">See what's working with simple analytics reports.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Target className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Growth Focus</h3>
              <p className="text-gray-400">Content designed to attract followers and boost engagement.</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-tech font-bold mb-8 text-center">What We Cover</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {platforms.map((platform, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span>{platform}</span>
                </div>
              ))}
            </div>
            
            <p className="text-lg font-semibold text-center mt-12 text-gray-300">
              With VIRRTECH's Social Media Automation, you can maintain an active, engaging social media presence across multiple platforms while focusing on running your business. No more choosing between neglecting your social accounts or spending hours creating content each day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-center mb-16">
            Social Media Automation: Common Questions
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

export default SocialMedia;