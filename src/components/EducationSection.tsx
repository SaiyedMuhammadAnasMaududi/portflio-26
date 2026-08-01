'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 w-full bg-[#020202] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-montserrat tracking-tight text-white">
            EDUCATION
          </h2>
          <div className="h-[3px] w-20 mt-4 bg-[#00ff66] rounded-full shadow-[0_0_10px_#00ff66]" />
        </div>

        {/* Education Card */}
        <div className="max-w-3xl rounded-2xl border border-white/10 bg-zinc-900/50 p-6 md:p-8 flex items-start gap-5 hover:border-[#00ff66]/50 transition-colors shadow-2xl">
          <div className="p-3.5 rounded-xl bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/30 flex-shrink-0">
            <GraduationCap className="w-8 h-8" />
          </div>

          <div>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-cyan-400">
              Undergraduate
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold font-montserrat text-white mt-2">
              O Levels
            </h3>
            <p className="text-sm font-mono text-[#00ff66] mt-1">
              The American Foundation Cambridge School
            </p>
            <p className="text-xs md:text-sm font-sans text-zinc-400 mt-3 leading-relaxed">
              Foundational studies emphasizing analytical problem solving, logical reasoning, and computer systems fundamentals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
