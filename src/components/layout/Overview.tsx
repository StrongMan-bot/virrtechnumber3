import React from 'react';

const Overview: React.FC = () => {
  return (
    <section className="py-24 bg-background-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6 bg-clip-text text-transparent bg-accent-gradient">
            AI & Automation, Built for Growth
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Unlock efficiency, scale smarter, and stay ahead with AI-powered automation.
          </p>
          <div className="prose prose-lg prose-invert mx-auto max-w-4xl">
            <p className="text-lg text-gray-300 mb-6">
              Growing your business shouldn't mean growing your overhead. As automation reshapes entire industries, the leanest companies are winning, and AI is their competitive edge. For small businesses, adoption isn't optional anymore. It's how you stay in the game.
            </p>
            <p className="text-lg text-gray-300">
              We build systems that deliver measurable impact: streamlined operations, higher revenue per employee, and a healthier bottom line. Our approach makes AI simple, practical, and profitable, so you can scale with confidence instead of complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;