'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2 } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    interest: '',
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu2.make.com/w8ea4reynnu7v4tckwkeipa19qw967u7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <>
      
      <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
        
        <div className="relative z-30 w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Mail className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-tech font-bold mb-6">
              Join the VIRRTECH Newsletter
            </h1>
            <p className="text-xl text-gray-300">
              Get expert tips, AI updates, and insider strategies – straight to your inbox.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-background-light p-8 rounded-lg border border-primary-500 text-center">
              <CheckCircle2 className="w-16 h-16 text-primary-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Thanks for joining!</h2>
              <p className="text-gray-300 mb-6">You'll start receiving helpful insights soon.</p>
              <Link 
                href="/"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-2 rounded-full transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="bg-background-light p-8 rounded-lg border border-gray-800"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-background-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-background-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-2">
                    Biggest AI Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-background-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 text-white"
                  >
                    <option value="">Select your interest</option>
                    <option value="AI Agent">AI Agent</option>
                    <option value="AI Phone Caller">AI Phone Caller</option>
                    <option value="AI Web Design">AI Web Design</option>
                    <option value="Email Marketing Automation">Email Marketing Automation</option>
                    <option value="Social Media Automation">Social Media Automation</option>
                  </select>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="w-4 h-4 border border-gray-700 rounded bg-background-dark text-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <label htmlFor="consent" className="ml-3 text-sm text-gray-300">
                    I agree to receive emails from VIRRTECH and understand I can unsubscribe anytime.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-medium px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

    </>
  );
};

export default Newsletter;