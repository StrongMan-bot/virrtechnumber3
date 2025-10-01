'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Phone, TrendingUp, Users, Zap, CheckCircle, Star, ArrowRight } from 'lucide-react';

const AICallCenterCasesContent: React.FC = () => {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 text-sm rounded-full">Call Centers</span>
            <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">AI Success Stories</span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              February 2, 2024
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" />
              12 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-tech font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            AI for Call Centers: 8 Amazing Success Stories That Will Blow Your Mind
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover how companies are using AI to revolutionize customer support and boost their bottom line. These real-world case studies will show you exactly what's possible.
          </p>
        </header>

        <article className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-12">
            
            {/* Key Results Section */}
            <section className="bg-gradient-to-r from-primary-900/20 to-purple-900/20 p-8 rounded-xl border border-primary-500/30">
              <h2 className="text-3xl font-semibold mb-6 text-white flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary-400" />
                The Results That Made Everyone Take Notice
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-lg">Average handling time slashed by <span className="text-green-400 font-bold">35%</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-lg">Customer satisfaction jumped <span className="text-blue-400 font-bold">25-40%</span></span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-lg">100% automated call summaries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300 text-lg">Real-time agent coaching that works</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white">Why Everyone's Talking About AI in Call Centers</h2>
              <div className="bg-background-light/30 p-6 rounded-lg border border-primary-500/20 mb-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Picture this: Your customers get instant answers, your agents feel like superheroes with AI-powered suggestions, and your managers have crystal-clear insights into every conversation. Sound too good to be true? It's not. Companies around the world are already making this happen.
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                In this deep dive, we'll explore 8 incredible success stories from companies that decided to embrace AI in their call centers. You'll see exactly how they did it, what results they achieved, and most importantly, how you can apply these same strategies to transform your own customer support.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you're dealing with long wait times, frustrated customers, or agents who need more support, these case studies will show you there's a better way forward.
              </p>
            </section>

            {/* Case Study 1 */}
            <section className="border-l-4 border-primary-500 pl-6">
              <h2 className="text-3xl font-semibold mb-4 text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                The E-commerce Giant That Cut Wait Times in Half
              </h2>
              <div className="bg-background-light/20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary-400 mb-3">The Challenge</h3>
                <p className="text-gray-300 mb-4">
                  A major online retailer was drowning in customer calls during peak shopping seasons. Average wait times hit 8 minutes, and customer satisfaction scores were plummeting. Their 500-agent call center couldn't keep up with the volume.
                </p>
                <h3 className="text-xl font-semibold text-primary-400 mb-3">The AI Solution</h3>
                <p className="text-gray-300 mb-4">
                  They implemented an intelligent call routing system that could understand the reason for each call in seconds. The AI listened to customers' first few words and instantly directed them to the most qualified agent.
                </p>
                <h3 className="text-xl font-semibold text-green-400 mb-3">The Amazing Results</h3>
                <ul className="list-none space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Wait times dropped from 8 minutes to just 3 minutes</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> First-call resolution increased by 45%</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Customer satisfaction jumped from 3.2 to 4.6 out of 5</li>
                </ul>
              </div>
            </section>

            {/* Case Study 2 */}
            <section className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-3xl font-semibold mb-4 text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                The Bank That Made Every Agent Feel Like an Expert
              </h2>
              <div className="bg-background-light/20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">The Challenge</h3>
                <p className="text-gray-300 mb-4">
                  A regional bank struggled with complex financial queries that required agents to put customers on hold while they searched through multiple systems. New agents took months to get up to speed, and experienced agents were getting burned out.
                </p>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">The AI Solution</h3>
                <p className="text-gray-300 mb-4">
                  They deployed an AI assistant that appeared on every agent's screen, providing real-time suggestions, relevant customer history, and step-by-step guidance for complex procedures. Think of it as having a super-smart colleague whispering helpful advice.
                </p>
                <h3 className="text-xl font-semibold text-green-400 mb-3">The Incredible Results</h3>
                <ul className="list-none space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> New agent training time cut from 12 weeks to just 4 weeks</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Call handling time reduced by 30%</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Agent confidence scores increased by 60%</li>
                </ul>
              </div>
            </section>

            {/* Case Study 3 */}
            <section className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-3xl font-semibold mb-4 text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                The Insurance Company That Eliminated Paperwork Forever
              </h2>
              <div className="bg-background-light/20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">The Problem They Faced</h3>
                <p className="text-gray-300 mb-4">
                  An insurance company's agents spent 20 minutes after each call writing detailed summaries and updating customer records. With hundreds of calls per day, this was eating up massive amounts of time that could be spent helping customers.
                </p>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">How AI Changed Everything</h3>
                <p className="text-gray-300 mb-4">
                  They implemented AI-powered call transcription and summarization. The system listened to every conversation, automatically generated detailed summaries, and updated customer records in real-time. Agents could focus entirely on the customer instead of taking notes.
                </p>
                <h3 className="text-xl font-semibold text-green-400 mb-3">The Mind-Blowing Results</h3>
                <ul className="list-none space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Post-call work time eliminated completely</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Agents could handle 40% more calls per day</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Data accuracy improved by 95%</li>
                </ul>
              </div>
            </section>

            {/* Quick Success Stories */}
            <section className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-xl border border-green-500/30">
              <h2 className="text-3xl font-semibold mb-6 text-white flex items-center gap-3">
                <Zap className="w-8 h-8 text-yellow-400" />
                5 More Quick Wins That Speak Volumes
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">Tech Support Revolution</h3>
                    <p className="text-gray-300 text-sm">A software company's AI can now solve 70% of technical issues instantly, leaving agents free to handle complex problems.</p>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-4">
                    <h3 className="text-lg font-semibold text-pink-400 mb-2">Healthcare Helpline Hero</h3>
                    <p className="text-gray-300 text-sm">A medical center's AI assistant helps patients schedule appointments and get basic health info 24/7, reducing call volume by 50%.</p>
                  </div>
                  <div className="border-l-4 border-cyan-400 pl-4">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Telecom Transformation</h3>
                    <p className="text-gray-300 text-sm">A phone company's AI can diagnose network issues before customers even finish explaining their problem.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">Travel Agency Ace</h3>
                    <p className="text-gray-300 text-sm">An online travel platform uses AI to instantly find and rebook flights during disruptions, turning angry customers into loyal fans.</p>
                  </div>
                  <div className="border-l-4 border-emerald-400 pl-4">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Utility Company Champion</h3>
                    <p className="text-gray-300 text-sm">A power company's AI can predict and prevent service outages by analyzing customer call patterns and maintenance data.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Get Started */}
            <section>
              <h2 className="text-3xl font-semibold mb-6 text-white flex items-center gap-3">
                <ArrowRight className="w-8 h-8 text-primary-400" />
                Your Roadmap to AI Success
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Seeing these success stories probably has you wondering: "How can I get these results for my call center?" The good news is that AI technology is more accessible than ever. Here's your step-by-step guide to getting started.
              </p>
              
              <div className="space-y-6">
                <div className="bg-background-light/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">Step 1: Start Small and Smart</h3>
                  <p className="text-gray-300">
                    Don't try to revolutionize everything at once. Pick one pain point (like long call summaries or difficult call routing) and focus your AI efforts there first. Quick wins build momentum and buy-in from your team.
                  </p>
                </div>
                
                <div className="bg-background-light/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">Step 2: Get Your Team Excited</h3>
                  <p className="text-gray-300">
                    Show your agents how AI will make their jobs easier, not replace them. When they see AI as their helpful sidekick rather than a threat, adoption becomes smooth and natural.
                  </p>
                </div>
                
                <div className="bg-background-light/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">Step 3: Measure What Matters</h3>
                  <p className="text-gray-300">
                    Track metrics like average handle time, customer satisfaction, and first-call resolution. These numbers will prove the value of your AI investment and guide your next steps.
                  </p>
                </div>
              </div>
            </section>

            {/* Common Concerns */}
            <section className="bg-red-900/10 p-8 rounded-xl border border-red-500/20">
              <h2 className="text-3xl font-semibold mb-6 text-white">But What About the Challenges?</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Let's be honest – implementing AI isn't always smooth sailing. Here are the most common concerns we hear and how successful companies overcome them:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">"Our agents are afraid of being replaced"</h3>
                    <p className="text-gray-300">
                      <strong>Reality:</strong> AI makes agents more valuable, not less. Companies using AI typically hire more agents as their customer service becomes so good that business grows.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">"It's too expensive for our budget"</h3>
                    <p className="text-gray-300">
                      <strong>Reality:</strong> Most AI solutions pay for themselves within 6 months through increased efficiency and reduced training costs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">"Our customers want to talk to real people"</h3>
                    <p className="text-gray-300">
                      <strong>Reality:</strong> AI doesn't replace human conversation – it makes human agents better at having those conversations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Call to Action */}
            <section className="text-center">
              <h2 className="text-3xl font-semibold mb-6 text-white">Ready to Write Your Own Success Story?</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                These 8 companies didn't wait for their competitors to get ahead – they took action and transformed their customer experience. The question isn't whether AI will revolutionize call centers. The question is: will you be leading the charge or playing catch-up?
              </p>
              
              <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 text-white">Your AI Journey Starts With a Single Conversation</h3>
                <p className="text-gray-200 mb-6 text-lg">
                  Let's discuss your specific challenges and show you exactly how AI can transform your call center. No sales pressure, just honest advice from experts who've helped hundreds of companies succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center gap-2 text-gray-200">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>Free 30-minute consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>Custom ROI analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>No commitment required</span>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </article>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-xl border border-primary-500/30 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white flex items-center justify-center gap-3">
            <Phone className="w-8 h-8 text-primary-400" />
            Transform Your Call Center Today
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            From intelligent routing to AI-powered summaries – we'll help you choose and deploy the right solution for maximum impact.
          </p>
          <Link href="/book-call">
            <button className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 text-lg">
              Book Your Free Strategy Session
            </button>
          </Link>
          <p className="text-gray-400 text-sm mt-4">Join 500+ companies already using AI to delight their customers</p>
        </div>
      </div>
    </section>
  );
};

export default AICallCenterCasesContent;