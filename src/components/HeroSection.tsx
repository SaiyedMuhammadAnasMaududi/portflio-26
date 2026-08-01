'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Monitor } from 'lucide-react';
import MouseTrackingRobot from './MouseTrackingRobot';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Interactive Particle Grid reacting to mouse cursor
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 16), 80);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle dot
        ctx.fillStyle = '#00ff66';
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect to mouse
        const dxMouse = mouseX - p1.x;
        const dyMouse = mouseY - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 180) {
          ctx.strokeStyle = `rgba(0, 255, 102, ${1 - distMouse / 180})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.strokeStyle = `rgba(0, 255, 102, ${(1 - dist / 110) * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-24 pb-16 bg-[#020202]">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Outlined Backdrop Typography */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center pointer-events-none select-none opacity-20">
        <h1 className="text-[5rem] md:text-[11rem] lg:text-[15rem] leading-[0.8] tracking-tighter font-black font-montserrat flex flex-col items-center">
          <span className="text-transparent text-stroke-white">WELCOME</span>
          <span className="text-transparent text-stroke-white">TO MY</span>
          <span className="text-transparent text-stroke-neon">PORTFOLIO</span>
        </h1>
      </div>

      {/* Main Content & Interactive Mouse Tracking Robot */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff66]/30 bg-black/80 backdrop-blur-md mb-4 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
            Available for Full-Stack &amp; AI Projects
          </span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl font-black font-montserrat tracking-tight text-white mb-3"
        >
          Syed Muhammad <span className="text-[#00ff66]">Anas Maududi</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl font-mono text-zinc-300 max-w-3xl mb-4 font-semibold"
        >
          Full-Stack (React, Next.js, Node.js) &amp; AI-Native Engineer
        </motion.p>

        {/* INTERACTIVE 3D SPLINE ROBOT CHARACTER (Reacts to Mouse Cursor) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex justify-center"
        >
          <MouseTrackingRobot />
        </motion.div>

        {/* Action Call-To-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-[#00ff66] text-black font-extrabold text-sm md:text-base font-montserrat transition-all hover:bg-[#00cc52] hover:scale-105 active:scale-95 shadow-xl shadow-[#00ff66]/20 flex items-center gap-2"
          >
            Explore Projects <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#skills"
            className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm md:text-base font-mono border border-white/20 transition-all hover:scale-105 active:scale-95 backdrop-blur-md flex items-center gap-2"
          >
            <Code2 className="w-5 h-5 text-[#00ff66]" /> View IDE Stack
          </a>
        </motion.div>
      </div>
    </section>
  );
}
