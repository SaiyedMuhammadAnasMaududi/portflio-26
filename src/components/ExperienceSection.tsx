'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Sparkles, Award, Users, Bot } from 'lucide-react';

export default function ExperienceSection() {
  const governorHouseHighlights = [
    'Selected among the TOP 5 students for mentorship at Governor House Karachi (GIAIC) — Alhamdulillah.',
    'Guiding emerging builders and founders on AI startup architecture, prompt engineering, agentic workflows, and cloud-native systems.',
    'Spearheading knowledge transfer on OpenAI Agent SDK, LLM fine-tuning, RAG pipelines, and full-stack software integration.',
    'Actively contributing across roles: AI Startup Mentor, AI Engineer, Prompt Engineer, and Senior Frontend Developer.',
  ];

  const freelanceAchievements = [
    'Delivered production-grade commercial web apps for clients including Danish Traders (danishtraders.pk) — live in production serving real customers.',
    'Architected and deployed backend services with Node.js, REST APIs, PostgreSQL, MongoDB, Supabase, and Neon DB.',
    'Engineered autonomous AI Employees and agentic workflows (AI Employee Vault on GitHub) using OpenAI Agent SDK and Python.',
    'Containerized full-stack applications with Docker and Kubernetes for high availability and zero-downtime deployments.',
    'Certified across Anthropic Claude Academy (Claude 101, AI Fluency Framework & Foundations, Claude Code 101).',
    'Ranked in top ~50,000 qualifiers out of 500,000+ applicants in the Governor Initiative aptitude examination.',
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

        <div className="space-y-8">
          {/* 1. MENTORSHIP CARD - GOVERNOR HOUSE KARACHI */}
          <div className="relative rounded-2xl border border-[#00ff66]/30 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 p-6 md:p-10 shadow-2xl backdrop-blur-md overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00ff66]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-[#00ff66]/15 text-[#00ff66] border border-[#00ff66]/40 shadow-lg">
                    <Award className="w-6 h-6" />
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-montserrat text-white">
                    AI &amp; Startup Mentor
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/40 text-xs font-mono text-[#00ff66] font-bold">
                    Top 5 Selected • Alhamdulillah
                  </span>
                </div>
                <p className="text-sm font-mono text-cyan-400 font-semibold mt-2">
                  Governor House Karachi — GIAIC (Governor's Initiative for AI, Web3 &amp; Metaverse)
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 whitespace-nowrap">
                <Calendar className="w-4 h-4 text-[#00ff66]" /> Oct 2026 – Present
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-6 relative z-10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00ff66]" /> MENTORSHIP &amp; LEADERSHIP IMPACT
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {governorHouseHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-black/60 border border-white/5 hover:border-[#00ff66]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00ff66] flex-shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm font-sans text-zinc-200 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. FREELANCE FULL-STACK & AI DEVELOPER CARD */}
          <div className="relative rounded-2xl border border-white/10 bg-zinc-900/50 p-6 md:p-10 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-white/5 text-zinc-300 border border-white/10">
                    <Briefcase className="w-6 h-6 text-[#00ff66]" />
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

            {/* Achievements Grid */}
            <div className="mt-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-4">
                KEY DELIVERABLES &amp; PRODUCTION ACHIEVEMENTS
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {freelanceAchievements.map((item, idx) => (
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
      </div>
    </section>
  );
}
