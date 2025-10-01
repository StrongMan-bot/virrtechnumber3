'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import FloatingParticlesCanvas from '../ui/FloatingParticlesCanvas';
import { Phone, Clock, Users, BarChart3, ArrowRightLeft, DollarSign, ChevronDown, CheckCircle2, Zap, Settings, MessageSquare, Calendar, Database, RefreshCw, FileText } from 'lucide-react';
import Vapi from '@vapi-ai/web';

interface FAQItem {
  question: string;
  answer: string;
}

const AIPhoneCaller: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [vapi, setVapi] = useState<any>(null);
  const [isCallActive, setIsCallActive] = useState(false);

  useEffect(() => {
    const vapiInstance = new Vapi("6eda2e21-5ff6-451a-b822-e28c15f8a85e");
    setVapi(vapiInstance);

    vapiInstance.on("call-start", () => {
      setIsCallActive(true);
      console.log("Call started");
    });

    vapiInstance.on("call-end", () => {
      setIsCallActive(false);
      console.log("Call ended");
    });

    vapiInstance.on("error", (error: any) => {
      console.error("Call error:", error);
      setIsCallActive(false);
    });

    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, []);

  const startCall = async () => {
    if (!isCallActive && vapi) {
      try {
        await vapi.start("b172b232-03e7-4de8-b309-67ddb59155c3");
      } catch (error) {
        console.error("Error starting call:", error);
      }
    }
  };

  const stopCall = () => {
    if (isCallActive && vapi) {
      vapi.stop();
    }
  };

  const faqItems: FAQItem[] = [
    {
      question: "Does the AI really sound like a human?",
      answer: "Yes. Our AI Phone Caller uses natural-sounding voices that are often mistaken for human. It uses normal speech patterns, understands context, and even responds to interruptions just like a person would."
    },
    {
      question: "Can callers tell they're talking to an AI?",
      answer: "We believe in transparency. The AI introduces itself as an AI assistant working for your company. Most customers appreciate the honesty and still enjoy the convenient, helpful experience."
    },
    {
      question: "How does the AI handle complex questions?",
      answer: "The AI is trained to handle common scenarios for your business. For unusual or complex questions, it can smoothly transfer the call to your team. You decide which situations require human attention."
    },
    {
      question: "Can I customize what the AI says?",
      answer: "Absolutely. We build your AI Phone Caller to reflect your brand voice and follow your specific scripts and guidelines. You control how it introduces itself, the questions it asks, and how it responds."
    },
    {
      question: "How do I know the AI is working effectively?",
      answer: "Our dashboard shows you call volumes, conversion rates, customer satisfaction scores, and other key metrics. You can listen to recorded calls and see transcripts to monitor quality."
    }
  ];

  const includedFeatures = [
    "Customer service and support",
    "Appointment scheduling and confirmations",
    "Lead qualification and nurturing",
    "Order taking and processing",
    "Frequently asked questions",
    "Service renewals and upsells",
    "Customer feedback collection"
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
            <span className="text-white">AI Phone </span>
            <span className="bg-clip-text text-transparent bg-accent-gradient">Caller</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            A voice assistant that makes and answers calls like a real human, without needing a call center.
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

      {/* Overview and Demo Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Overview Column */}
            <div className="bg-background-light p-8 rounded-lg border border-gray-800">
              <h2 className="text-3xl font-tech font-bold mb-6">What Is AI Phone Caller?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI Phone Caller is an intelligent system that handles both incoming and outgoing calls for your business. It speaks naturally with real people, understands their responses, and conducts meaningful conversations without human involvement.
              </p>
              <h3 className="text-xl font-tech font-bold mb-4">How It Works</h3>
              <p className="text-gray-300">
                The AI connects to your customer database and reaches out to prospects or customers following your strategy. For inbound calls, it answers your business line, greets callers, and addresses their needs instantly.
              </p>
            </div>

            {/* Demo Column */}
            <div className="bg-background-light p-8 rounded-lg border border-gray-800 flex flex-col items-center justify-center">
              <Phone className="w-24 h-24 text-primary-500 mb-6" />
              <Button
                variant={isCallActive ? "secondary" : "primary"}
                size="lg"
                className="w-full max-w-md"
                onClick={isCallActive ? stopCall : startCall}
              >
                {isCallActive ? "End Call" : "Talk to our AI Phone Caller"}
              </Button>
              {isCallActive && (
                <p className="mt-4 text-primary-500">Call in progress...</p>
              )}
            </div>
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
              <h3 className="text-xl font-bold mb-3">Always Available</h3>
              <p className="text-gray-400">Answers calls 24/7 and makes outreach calls during optimal hours</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Zap className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">No Wait Times</h3>
              <p className="text-gray-400">Handles multiple calls simultaneously, eliminating hold times</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <BarChart3 className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Consistent Experience</h3>
              <p className="text-gray-400">Every caller receives the same high-quality interaction</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <Database className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Detailed Insights</h3>
              <p className="text-gray-400">Records and analyzes conversations for valuable customer data</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <ArrowRightLeft className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Seamless Escalation</h3>
              <p className="text-gray-400">Transfers to human staff when needed for complex situations</p>
            </div>

            <div className="p-6 rounded-lg bg-background-light border border-gray-800 hover:border-primary-500 transition-all duration-300">
              <DollarSign className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Cost-Effective</h3>
              <p className="text-gray-400">Significantly lower cost per call than staffing a call center</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-tech font-bold mb-8 text-center">Common Uses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <p className="text-lg font-semibold text-center mt-12 text-gray-300">
              With VIRRTECH's AI Phone Caller, you can handle more calls, have more conversations, and create more opportunities without expanding your team or missing important customer interactions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-center mb-16">
            AI Phone Caller: Common Questions
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

export default AIPhoneCaller;