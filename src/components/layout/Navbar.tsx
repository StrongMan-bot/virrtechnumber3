'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../common/Logo';
import Button from '../ui/Button';
import Dropdown from '../ui/Dropdown';
import { Menu, X } from 'lucide-react';

const serviceItems = [
  { label: 'AI Agent', href: '/ai-agent' },
  { label: 'AI Phone Caller', href: '/ai-phone-caller' },
  { label: 'AI Web Design', href: '/ai-web-design' },
  { label: 'Email Marketing Automation', href: '/email-marketing' },
  { label: 'Social Media Automation', href: '/social-media' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Dropdown label="Services" items={serviceItems} />
            
            <Link href="/blog" className="text-gray-200 hover:text-white transition-colors">
              Blog
            </Link>
            
            <Link href="/newsletter" className="text-gray-200 hover:text-white transition-colors">
              Newsletter
            </Link>
            
            <Link href="/book-call">
              <Button variant="primary" glowing size="md">
                Book a Call
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background-dark/95 backdrop-blur-md shadow-lg">
          <div className="px-3 py-2 font-medium text-white">Services</div>
          {serviceItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-8 py-2 text-base text-gray-300 hover:text-white hover:bg-background-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          <Link
            href="/blog"
            className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-background-light rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          
          <Link
            href="/newsletter"
            className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-background-light rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Newsletter
          </Link>
          
          <div className="px-3 py-3">
            <Link href="/book-call" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="md" className="w-full">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;