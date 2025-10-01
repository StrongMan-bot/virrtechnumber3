'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is AI automation, and how can it help my business?",
      answer: "AI automation uses intelligent tools to handle repetitive tasks—like responding to customers, booking appointments, or sending follow-up emails—so you can save time, reduce costs, and grow faster."
    },
    {
      question: "Is AI only for big companies?",
      answer: "Not at all. At VIRRTECH, we specialize in helping small businesses unlock the power of AI in simple, practical ways that actually make a difference—no massive budget or tech team required."
    },
    {
      question: "Will AI replace my staff?",
      answer: "No. Our solutions are designed to support your team, not replace them. Think of AI as an extra set of hands that helps your people focus on the work that really matters."
    },
    {
      question: "How long does it take to set everything up?",
      answer: "Most of our clients see results within 1–2 weeks. We handle everything from setup to testing and make sure the transition is smooth and disruption-free."
    },
    {
      question: "Do I need technical skills to use your solutions?",
      answer: "Not at all. We build and manage everything for you. Once it's live, you'll get simple dashboards and support so you always stay in control."
    },
    {
      question: "What kind of support do you offer after setup?",
      answer: "We provide ongoing support, updates, and optimization to make sure your systems continue to run smoothly—and evolve with your business needs."
    }
  ];

  return (
    <section className="py-24 bg-background-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-tech font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-background-light rounded-lg border border-gray-800 overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background-light/50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`px-6 transition-all duration-200 overflow-hidden ${
                  openIndex === index ? 'py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;