import React from 'react';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-tech font-bold text-center mb-16">
          Our Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-colors group">
            <div className="text-primary-500 font-tech mb-4">01</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
              Initial Consultation
            </h3>
            <p className="text-gray-400">
              We start with a conversation to learn about your business goals and pain points.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-colors group">
            <div className="text-primary-500 font-tech mb-4">02</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
              Tailored AI Solutions
            </h3>
            <p className="text-gray-400">
              Our team designs AI-powered tools customized to address your unique needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-colors group">
            <div className="text-primary-500 font-tech mb-4">03</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
              Seamless Integration
            </h3>
            <p className="text-gray-400">
              We deploy our solutions into your workflow with care to avoid disruptions.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-colors group">
            <div className="text-primary-500 font-tech mb-4">04</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
              Continuous Optimization
            </h3>
            <p className="text-gray-400">
              We offer ongoing support, updates, and refinements to keep your systems running at peak efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;