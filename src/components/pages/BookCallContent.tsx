'use client';

import React, { useEffect } from 'react';
import Button from '../ui/Button';
import Link from 'next/link';
import { User } from 'lucide-react';

const BookCall: React.FC = () => {
  // Load Calendly script after component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      
      <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
        
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="bg-background-light p-8 rounded-lg border border-gray-800">
              <h1 className="text-4xl md:text-5xl font-tech font-bold mb-6">
                Let's Talk About Scaling Smarter with AI
              </h1>
              
              <h2 className="text-2xl font-bold mb-4 text-primary-500">
                Book a 30-Minute Discovery Call
              </h2>
              
              <p className="text-gray-300 mb-8">
                Ready to see how AI and automation can streamline your business? No need for email back-and-forth, just pick a time that works for you.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">What We'll Cover:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Answers to your questions about AI tools and automation strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    A walkthrough of how our solutions work and which fit your business
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Honest advice on whether automation makes sense for your current stage
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-800 pt-8">
                <h3 className="text-xl font-bold mb-4">Who You'll Be Speaking With:</h3>
                <div className="flex items-center">
                  <div className="bg-primary-500/10 p-3 rounded-full mr-4">
                    <User className="w-8 h-8 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Ranginov Ngongo</h4>
                    <p className="text-gray-400">Managing Director, VIRRTECH</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  As a Co-founder of VIRRTECH, I help lean teams and growing businesses unlock time and revenue through smart, personalized AI system, with no big tech team required.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <Link href="/newsletter">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full text-gray-400 hover:text-white"
                  >
                    📰 Not ready yet? Join our newsletter
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Calendly */}
            <div className="bg-background-light p-8 rounded-lg border border-gray-800 h-[800px]">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/ranginov-mn-virrtech/outreach-automation"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default BookCall;