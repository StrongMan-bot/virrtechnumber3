'use client';

import React, { useEffect, useRef } from 'react';

interface FloatingParticlesCanvasProps {
  className?: string;
  particleCount?: number;
  minSize?: number;
  maxSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
  color?: string;
  opacity?: number;
}

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  alpha: number;
};

const FloatingParticlesCanvas: React.FC<FloatingParticlesCanvasProps> = ({
  className,
  particleCount = 80,
  minSize = 0.6,
  maxSize = 2.2,
  minSpeed = 12,
  maxSpeed = 40,
  color = '#93c5fd',
  opacity = 0.25
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    contextRef.current = ctx;

    let width = 0;
    let height = 0;

    const deviceRatio = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * deviceRatio));
      canvas.height = Math.max(1, Math.floor(height * deviceRatio));
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);
    };

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const initParticles = () => {
      particlesRef.current = new Array(particleCount).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: rand(minSize, maxSize),
        speed: rand(minSpeed, maxSpeed),
        drift: rand(-10, 10),
        alpha: rand(0.35 * opacity, 1 * opacity)
      }));
    };

    let lastTs = 0;

    const draw = (ts: number) => {
      if (!contextRef.current) return;
      const dt = Math.min(50, ts - lastTs) / 1000; // seconds, clamp for tab switches
      lastTs = ts;

      ctx.clearRect(0, 0, width, height);

      // subtle background glow gradient
      const grad = ctx.createLinearGradient(0, height, 0, 0);
      grad.addColorStop(0, 'rgba(59, 130, 246, 0.03)');
      grad.addColorStop(1, 'rgba(236, 72, 153, 0.02)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (const p of particlesRef.current) {
        // update
        p.y -= p.speed * dt;
        p.x += p.drift * dt * 0.25;

        // wrap
        if (p.y + p.size < 0) {
          p.y = height + p.size;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // subtle tail
        const tail = ctx.createLinearGradient(p.x, p.y + p.size * 6, p.x, p.y);
        tail.addColorStop(0, 'rgba(255,255,255,0)');
        tail.addColorStop(1, color);
        ctx.strokeStyle = tail;
        ctx.lineWidth = Math.max(0.5, p.size * 0.4);
        ctx.globalAlpha = Math.min(0.8, p.alpha + 0.05);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y + p.size * 6);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(draw);
    };

    const start = () => {
      resize();
      initParticles();
      lastTs = performance.now();
      animationRef.current = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      initParticles();
    };

    start();
    window.addEventListener('resize', onResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [particleCount, minSize, maxSize, minSpeed, maxSpeed, color, opacity]);

  return (
    <canvas ref={canvasRef} className={className} aria-hidden="true" />
  );
};

export default FloatingParticlesCanvas;



