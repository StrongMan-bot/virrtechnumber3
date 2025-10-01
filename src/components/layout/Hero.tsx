'use client';

import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import Link from 'next/link';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };
    
    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor(canvas.width * canvas.height / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          color: getRandomColor(),
          speed: Math.random() * 0.2 + 0.1
        });
      }
    };
    
    const getRandomColor = () => {
      const colors = [
        'rgba(99, 102, 241, 0.8)',  // Primary
        'rgba(139, 92, 246, 0.8)',  // Secondary
        'rgba(59, 130, 246, 0.8)',  // Accent
        'rgba(255, 255, 255, 0.5)'  // White
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Move particles
        particle.y -= particle.speed;
        
        // Reset particles that go off screen
        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-hero-pattern z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark z-20"></div>
      
      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-tech font-bold mb-6 tracking-tight">
          <span className="text-white">Meet </span>
          <span className="bg-clip-text text-transparent bg-accent-gradient">VIRRTECH</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Specialised in Precision AI Automation
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <Link href="/book-call">
            <Button
              variant="primary"
              size="lg"
              className="mb-4"
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
  );
};

export default Hero;