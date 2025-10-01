import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  glowing?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  glowing = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500';
  
  const variantStyles = {
    primary: 'bg-accent-gradient text-white hover:opacity-90',
    secondary: 'bg-secondary-700 text-white hover:bg-secondary-800',
    outline: 'border border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50/10',
    ghost: 'text-primary-500 bg-transparent hover:bg-primary-50/10'
  };
  
  const sizeStyles = {
    sm: 'text-sm px-4 py-1.5',
    md: 'text-base px-5 py-2',
    lg: 'text-lg px-6 py-2.5'
  };
  
  const glowingClass = glowing ? 'animate-glow' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${glowingClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;