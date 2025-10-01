import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <Logo className="mb-4 md:mb-0" />
          
          <div className="flex items-center space-x-8">
            <a
              href="mailto:ranginov.mn@virrtech.com"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>Email Us</span>
            </a>
            
            <a
              href="https://www.linkedin.com/company/virrtech-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VIRRTECH LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;