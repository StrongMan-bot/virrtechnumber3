import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  subtitle: string;
  slug: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "How AI Agents Are Transforming Customer Support for Small Businesses",
      subtitle: "Discover how 24/7 AI support is helping lean teams scale service without hiring.",
      slug: "ai-agents-customer-support"
    },
    {
      title: "How to Use AI to Personalize Your Email Marketing at Scale",
      subtitle: "Unlock scalable 1:1 personalization strategies with powerful AI workflows.",
      slug: "ai-email-personalization"
    },
    {
      title: "AI-Driven Email Campaigns: Boosting Open Rates and Conversions",
      subtitle: "See how data-driven automation is delivering smarter, higher-impact email results.",
      slug: "ai-email-campaigns"
    },
    {
      title: "Custom vs. AI-Powered Web Design: What's Right for Your Business?",
      subtitle: "Pros and cons of automated design tools vs traditional developers.",
      slug: "ai-vs-custom-web-design"
    },
    {
      title: "Ways to Use AI Agents to Save Time and Boost Productivity",
      subtitle: "Automate daily tasks, handle inquiries, and free up your team's time.",
      slug: "ai-productivity-boost"
    },
    {
      title: "AI Phone Callers: The Future of Cold Calling and Appointment Booking",
      subtitle: "Discover how AI agents are doing outreach, qualifying leads, and setting meetings.",
      slug: "ai-phone-callers"
    },
    {
      title: "How Social Media Automation Can 10x Your Content Output Without Hiring",
      subtitle: "Streamline content scheduling, generation, and engagement with smart tools.",
      slug: "social-media-automation"
    },
    {
      title: "AI for Call Centers: Eight Case Studies and How You Can Use It",
      subtitle: "Real-world success stories of AI-powered customer support systems.",
      slug: "ai-call-center-cases"
    },
    {
      title: "The Rise of AI Web Design: Should You Still Hire a Traditional Designer?",
      subtitle: "Weigh the cost, flexibility, and speed of new AI design platforms.",
      slug: "ai-vs-traditional-design"
    },
    {
      title: "Let AI Run Your Social Media: Tools, Tips, and Time-Saving Tricks",
      subtitle: "How to automate your posting, replies, and analytics with ease.",
      slug: "ai-social-media-tips"
    }
  ];

  return (
    <>
      
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-tech font-bold mb-6">
              Latest Insights & Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert perspectives on AI automation, practical tips, and success stories to help you grow smarter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-background-light border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:border-primary-500"
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {post.subtitle}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-500 hover:text-primary-400 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/book-call">
              <Button variant="primary" size="lg" className="mx-auto">
                Not sure where to start? Book a Free AI Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default Blog;