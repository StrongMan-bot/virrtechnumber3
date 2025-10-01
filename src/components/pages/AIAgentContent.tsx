'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import FloatingParticlesCanvas from '../ui/FloatingParticlesCanvas';
import { Bot, Brain, Clock, Shield, ChevronDown, CheckCircle2, Zap, Settings, BarChart, DollarSign, RefreshCw, MessageSquare, Calendar, Database, Users, FileText } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const AIAgent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How is an AI Agent different from a chatbot?",
      answer: "Regular chatbots follow fixed scripts. Our AI Agents understand conversations, learn from experience, and handle complex tasks across your tools. They get smarter over time."
    },
    {
      question: "Will it work with my current business tools?",
      answer: "Yes! AI Agents connect easily with tools like email, calendars, and CRMs. We handle all the setup."
    },
    {
      question: "How quickly can I get started?",
      answer: "Most are running within 2–4 weeks—custom-built for your needs."
    },
    {
      question: "Can I choose what my AI Agent does?",
      answer: "Absolutely. You define its role—customer service, scheduling, order tracking, etc."
    },
    {
      question: "Do I need to be tech-savvy?",
      answer: "Not at all. You'll have a simple dashboard to monitor and make updates."
    },
    {
      question: "How do I know if it's worth it?",
      answer: "We show real-time results like time saved and customer satisfaction. Most clients see ROI in 3–6 months."
    }
  ];

  const includedFeatures = [
    "24/7 customer support",
    "Appointment scheduling",
    "Data processing",
    "Internal employee assistance",
    "Lead qualification",
    "Order tracking",
    "Workflow automation"
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingParticlesCanvas className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-hero-pattern z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark z-20"></div>
        
        <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-tech font-bold mb-6 tracking-tight">
            <span className="text-white">AI </span>
            <span className="bg-clip-text text-transparent bg-accent-gradient">Agent</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your intelligent digital teammate. Always on, always learning.
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
              AI Agent
            </h2>
            <h3 className="text-2xl font-tech font-bold mb-4">What Is An AI Agent?</h3>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              An AI Agent is your business's digital team member that works around the clock. Unlike simple chatbots, our AI Agents can handle complex tasks, make decisions, and learn from interactions to become more effective over time.
            </p>
            <h3 className="text-2xl font-tech font-bold mb-4">How It Works</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Your AI Agent connects to your business systems and tools, allowing it to access the information it needs to assist customers, manage workflows, and complete routine tasks. It communicates through text, voice, or integrates directly with your existing platforms.
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
              <Clock className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
              <p className="text-gray-400">Responds to queries and handles tasks at any hour.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <BarChart className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Consistent Performance</h3>
              <p className="text-gray-400">Delivers the same high-quality service every time.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Zap className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Scalable Support</h3>
              <p className="text-gray-400">Handles hundreds of interactions simultaneously.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <DollarSign className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Cost-Effective</h3>
              <p className="text-gray-400">Reduces staffing needs for routine operations.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Brain className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
              <p className="text-gray-400">Gets smarter with each interaction.</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Settings className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Easy Integration</h3>
              <p className="text-gray-400">Works seamlessly with your existing tools.</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-tech font-bold mb-8 text-center">Common Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <p className="text-lg font-semibold text-center mt-12 text-gray-300">
              With VIRRTECH's AI Agent, you gain a tireless digital assistant that frees your team to focus on creative tasks and strategic growth while ensuring consistent, high-quality service for your customers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-center mb-16">
            AI Agent: Common Questions
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

export default AIAgent;