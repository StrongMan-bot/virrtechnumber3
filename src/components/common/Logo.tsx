import React from 'react';
import { Network } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Network className="w-8 h-8 text-primary-500 mr-2" />
      <span className="font-tech font-bold text-2xl bg-clip-text text-transparent bg-accent-gradient">
        VIRRTECH
      </span>
    </div>
  );
};

export default Logo;