import React from 'react';
import { Brain, Phone, Globe, Mail, Share2 } from 'lucide-react';
import Button from '../ui/Button';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, href }) => {
  return (
    <div className="bg-background-light p-6 rounded-lg border border-gray-800 hover:border-primary-500 transition-all duration-300 group">
      <div className="flex items-start space-x-4">
        <div className="text-primary-500 group-hover:text-primary-400 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 mb-4">
            {description}
          </p>
          <Link href={href}>
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto"
            >
              See How It Works
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Agent',
      description: 'Your tireless digital assistant handling routine tasks and customer inquiries, freeing you to focus on growth that matters.',
      href: '/ai-agent'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'AI Phone Caller',
      description: 'Natural, human-like conversations that convert prospects into appointments and qualified leads without your direct involvement.',
      href: '/ai-phone-caller'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'AI Web Design',
      description: 'Beautiful, responsive websites that adapt to visitor behavior—evolving to create the perfect experience for each customer.',
      href: '/ai-web-design'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Marketing Automation',
      description: 'Perfectly timed, personalized messages that nurture relationships and transform contacts into loyal customers effortlessly.',
      href: '/email-marketing'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Automation',
      description: 'Engaging content created and scheduled automatically, maintaining your brand voice while you maintain your balance.',
      href: '/social-media'
    },
  ];

  return (
    <section className="py-24 bg-background-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            A quick look at how VIRRTECH helps businesses grow through automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services