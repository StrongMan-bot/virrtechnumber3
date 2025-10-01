'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import FloatingParticlesCanvas from '../ui/FloatingParticlesCanvas';
import { Globe, Clock, DollarSign, BarChart3, Smartphone, Settings, ChevronDown, CheckCircle2, Zap, Rocket, LayoutDashboard, Shield, Brain } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const AIWebDesign: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Is the website really custom, or is it a template?",
      answer: "Every website is generated based on your specific needs, brand, and goals—it's not a reused template. The AI ensures the design is uniquely tailored."
    },
    {
      question: "Can I edit the website after it's built?",
      answer: "Yes! You get access to a user-friendly dashboard where you can update text, images, and even add new sections without needing a developer."
    },
    {
      question: "Does it work on mobile and tablets?",
      answer: "Absolutely. All designs are fully responsive and tested across devices to ensure perfect display on phones, tablets, and desktops."
    },
    {
      question: "Is SEO included?",
      answer: "Yes. Your website is built with technical SEO best practices to help it rank on search engines, and content can be optimized for your keywords."
    },
    {
      question: "What if I need help later?",
      answer: "We offer optional support packages and maintenance plans. You'll also have access to help guides and tutorials inside your dashboard."
    }
  ];

  const includedFeatures = [
    "Custom design tailored to your brand",
    "Responsive layout for all devices",
    "Built-in AI chat assistant for visitors",
    "Content that adapts to visitor behavior",
    "Search engine optimization",
    "Analytics dashboard",
    "Secure hosting and maintenance"
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
            <span className="text-white">AI Web </span>
            <span className="bg-clip-text text-transparent bg-accent-gradient">Design</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get a high-converting, custom website built by AI in days, not weeks.
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
              AI Web Design
            </h2>
            <h3 className="text-2xl font-tech font-bold mb-4">What Is AI Web Design?</h3>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Our AI Web Design service creates professional, custom websites in a fraction of the time and cost of traditional web development. Using advanced AI technology, we deliver stunning, responsive websites that would typically take weeks or months in just days at prices far below market rates.
            </p>
            <h3 className="text-2xl font-tech font-bold mb-4">How It Works</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              We combine your business goals and brand elements with our AI design system to rapidly generate a complete website tailored to your needs. The AI analyzes successful design patterns and creates a site optimized for conversions, user experience, and search engines. Each site includes intelligent features that make your web presence not just beautiful, but smart.
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
              <Rocket className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Ultra-Fast Delivery</h3>
              <p className="text-gray-400">Get your professional website in days, not weeks or months</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <DollarSign className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Exceptional Value</h3>
              <p className="text-gray-400">Premium quality at significantly lower prices than market rates</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Brain className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">AI-Powered Features</h3>
              <p className="text-gray-400">Smart chatbots, personalized content, and intelligent analytics included</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <BarChart3 className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Conversion-Focused</h3>
              <p className="text-gray-400">Designs optimized to turn visitors into customers</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Smartphone className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Mobile-Perfect</h3>
              <p className="text-gray-400">Automatically adapts to look great on any device</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Settings className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Easy Updates</h3>
              <p className="text-gray-400">Simple dashboard for making changes without technical skills</p>
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
              With VIRRTECH's AI Web Design, you get a premium website with advanced features at a fraction of traditional costs. Why pay more and wait longer when AI can deliver professional results faster and more affordably?
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-center mb-16">
            AI Web Design: Common Questions
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

export default AIWebDesign;