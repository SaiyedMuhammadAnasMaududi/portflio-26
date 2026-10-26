'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export default function EducationSection() {
  const educationItems = [
    {
      title: 'A Levels',
      institution: 'Wales College',
      period: 'In Progress',
      badge: 'Current',
      badgeColor: 'border-amber-400/40 text-amber-400 bg-amber-400/10',
      description: 'Advanced-level academic curriculum fostering analytical reasoning, advanced mathematics, and scientific thinking.',
    },
    {
      title: 'Diploma in Artificial Intelligence & Cloud Native Development',
      institution: 'Governor House, Karachi (GIAIC)',
      period: 'Feb 2024 – Dec 2025',
      badge: 'Governor Initiative',
      badgeColor: 'border-[#00ff66]/40 text-[#00ff66] bg-[#00ff66]/10',
      description: 'Comprehensive specialization across Generative AI, OpenAI Agent SDK, RAG pipelines, Docker, Kubernetes, and Cloud-Native backend systems.',
      highlight: 'Selected as AI & Startup Mentor among the TOP 5 students (Alhamdulillah).',
    },
    {
      title: 'O Levels, Computer Science',
      institution: 'The American Foundation Cambridge School',
      period: 'Aug 2022 – Aug 2025',
      badge: 'Completed',
      badgeColor: 'border-cyan-400/40 text-cyan-400 bg-cyan-400/10',
      description: 'Foundational computer science studies with strong academic honors (1st position in grades 4–6, two-time runner-up for O-Level scholarships).',
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 w-full bg-[#020202] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-montserrat tracking-tight text-white">
            EDUCATION &amp; ACADEMICS
          </h2>
          <div className="h-[3px] w-20 mt-4 bg-[#00ff66] rounded-full shadow-[0_0_10px_#00ff66]" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 md:p-8 flex flex-col justify-between hover:border-[#00ff66]/50 transition-all shadow-2xl group hover:-translate-y-1 duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 text-[#00ff66] border border-white/10 group-hover:border-[#00ff66]/40 transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full border text-[11px] font-mono font-semibold ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-extrabold font-montserrat text-white mt-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm font-mono text-[#00ff66] mt-1.5 font-semibold">
                  {item.institution}
                </p>
                <p className="text-[11px] font-mono text-zinc-400 mt-1">
                  {item.period}
                </p>

                <p className="text-xs md:text-sm font-sans text-zinc-300 mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.highlight && (
                <div className="mt-5 p-3 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/30 flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#00ff66] flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-mono text-[#00ff66] font-bold">
                    {item.highlight}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
