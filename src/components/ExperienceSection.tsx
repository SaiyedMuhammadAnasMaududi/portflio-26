'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Sparkles, Server, Terminal, ShieldCheck } from 'lucide-react';

export default function ExperienceSection() {
  const achievements = [
    'Delivered production-grade web applications for local market clients including Danish Traders (danishtraders.pk) — live commercial deployment serving real customers.',
    'Designed, developed, and deployed full-stack applications using React, Next.js, Node.js, and PostgreSQL / Supabase.',
    'Containerized and deployed applications using Docker and Kubernetes across cloud platforms, ensuring high availability & scalability.',
    'Built and deployed AI Employees — autonomous agentic systems — for clients and open-source use (AI Employee Vault on GitHub).',
    'Integrated diverse database solutions including PostgreSQL, Neon DB, Supabase, and vector/embedding databases for AI-powered applications.',
    'Utilized Claude CLI (Claudecli) and AI-native tooling to streamline development workflows and agentic system architecture.',
    'Participated in multiple hackathons, delivering production-ready full-stack applications under tight deadlines.',
  ];

  return (
    <section id="experience" className="py-20 md:py-28 w-full bg-[#020202] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-montserrat tracking-tight text-white">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="h-[3px] w-20 mt-4 bg-[#00ff66] rounded-full shadow-[0_0_10px_#00ff66]" />
        </div>

        {/* Experience Timeline Card */}
        <div className="relative rounded-2xl border border-white/10 bg-zinc-900/50 p-6 md:p-10 shadow-2xl backdrop-blur-md">
          {/* Header Role Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/30">
                  <Briefcase className="w-5 h-5" />
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold font-montserrat text-white">
                  Freelance Full-Stack &amp; AI Developer
                </h3>
              </div>
              <p className="text-sm font-mono text-zinc-400 mt-2">
                Self-Employed — Local &amp; Remote Clients
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00ff66] whitespace-nowrap">
              <Calendar className="w-4 h-4" /> 5 Years Experience
            </div>
          </div>

          {/* Key Deliverables & Achievements Grid */}
          <div className="mt-8 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-4">
              KEY DELIVERABLES &amp; IMPACT
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-[#00ff66]/40 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00ff66] flex-shrink-0 mt-0.5" />
                  <p className="text-xs md:text-sm font-sans text-zinc-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
