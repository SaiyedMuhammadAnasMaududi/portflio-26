'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Sparkles,
  Terminal,
  Bot,
  Layers,
  Cpu,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  FileText,
} from 'lucide-react';
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
    const particleCount = Math.min(Math.floor(window.innerWidth / 16), 85);

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

  const techBadges = [
    { label: 'Next.js 15 & React', icon: Layers, color: 'text-white' },
    { label: 'OpenAI Agents SDK', icon: Bot, color: 'text-[#00ff66]' },
    { label: 'Python & FastAPI', icon: Terminal, color: 'text-amber-400' },
    { label: 'Postgres & Supabase', icon: Cpu, color: 'text-cyan-400' },
  ];

  const quickStats = [
    { value: '5+', label: 'Years Experience' },
    { value: '15+', label: 'Full-Stack & AI Apps' },
    { value: '100%', label: 'Delivery & Reliability' },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-28 pb-16 md:pb-24 bg-[#020202]">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Cybernetic Ambient Radial Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00ff66]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#00ff66_1px,transparent_1px)] [background-size:48px_48px] opacity-10 pointer-events-none" />

      {/* Outlined Backdrop Typography */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center pointer-events-none select-none opacity-20">
        <h1 className="text-[5rem] md:text-[11rem] lg:text-[15rem] leading-[0.8] tracking-tighter font-black font-montserrat flex flex-col items-center">
          <span className="text-transparent text-stroke-white">WELCOME</span>
          <span className="text-transparent text-stroke-white">TO MY</span>
          <span className="text-transparent text-stroke-neon">PORTFOLIO</span>
        </h1>
      </div>

      {/* Main Content & Interactive Mouse Tracking Robot */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Availability & Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#00ff66]/40 bg-zinc-950/80 backdrop-blur-xl mb-4 shadow-[0_0_25px_rgba(0,255,102,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff66]" />
          </span>
          <span className="text-xs font-mono font-bold text-zinc-100 uppercase tracking-widest flex items-center gap-2">
            Available for Full-Stack &amp; AI Engineering
            <span className="text-zinc-500">|</span>
            <span className="text-[#00ff66] hidden sm:inline flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> High Performance
            </span>
          </span>
        </motion.div>

        {/* Main Name Heading with Gradient Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-montserrat tracking-tight text-white mb-3"
        >
          Syed Muhammad <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] via-emerald-300 to-cyan-400">Anas Maududi</span>
        </motion.h1>

        {/* Dynamic Role Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-zinc-200 max-w-4xl mb-3 font-semibold tracking-tight"
        >
          Full-Stack &amp; AI Systems Engineer <span className="text-zinc-600">|</span> <span className="text-[#00ff66]">AI &amp; Startup Mentor @ Governor House</span>
        </motion.p>

        {/* Professional Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm md:text-base font-sans text-zinc-400 max-w-2xl mb-4 leading-relaxed"
        >
          Building high-octane web products, scalable cloud backends, and autonomous agentic AI systems that solve real-world industry problems.
        </motion.p>

        {/* INTERACTIVE 3D SPLINE ROBOT CHARACTER (Reacts to Mouse Cursor) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex justify-center -my-2 sm:my-0"
        >
          <MouseTrackingRobot />
        </motion.div>

        {/* Action Call-To-Action Buttons & Resume Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-2 sm:mt-4 z-20"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-[#00ff66] text-black font-extrabold text-sm md:text-base font-montserrat transition-all duration-300 hover:bg-[#00e65c] hover:scale-105 active:scale-95 shadow-xl shadow-[#00ff66]/25 flex items-center gap-2 group cursor-pointer"
          >
            Explore Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm md:text-base font-mono border border-white/20 transition-all hover:scale-105 active:scale-95 backdrop-blur-md flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <FileText className="w-5 h-5 text-[#00ff66]" /> View Resume
            </button>
          )}

          <a
            href="#skills"
            className="px-7 py-4 rounded-xl bg-black/60 hover:bg-white/5 text-zinc-300 hover:text-white font-bold text-sm md:text-base font-mono border border-zinc-800 hover:border-zinc-600 transition-all hover:scale-105 active:scale-95 backdrop-blur-md flex items-center gap-2 cursor-pointer"
          >
            <Code2 className="w-5 h-5 text-[#00ff66]" /> Tech Stack IDE
          </a>
        </motion.div>

        {/* Core Capabilities Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-8 z-20"
        >
          {techBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md hover:border-[#00ff66]/40 transition-colors"
              >
                <Icon className={`w-3.5 h-3.5 ${badge.color}`} />
                <span className="text-xs font-mono font-medium text-zinc-300">{badge.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Live Credibility Statistics Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-3 divide-x divide-zinc-800/80 border border-zinc-800/80 rounded-2xl bg-zinc-950/60 backdrop-blur-xl mt-8 max-w-xl w-full py-3.5 px-2 shadow-2xl z-20"
        >
          {quickStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center px-2">
              <span className="text-xl sm:text-2xl font-black font-montserrat text-[#00ff66] tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-zinc-400 text-center uppercase tracking-wider font-semibold mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Social Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-5 mt-6 text-zinc-400 z-20"
        >
          <a
            href="https://github.com/SaiyedMuhammadAnasMaududi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono hover:text-[#00ff66] transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href="https://linkedin.com/in/anas-maududi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono hover:text-[#00ff66] transition-colors"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-mono hover:text-[#00ff66] transition-colors"
          >
            <Mail className="w-4 h-4" /> Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
