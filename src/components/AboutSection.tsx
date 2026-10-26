'use client';

import React, { useState } from 'react';
import { Eye, Download, Building2, CodeXml, Cpu, MapPin, Award } from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export default function AboutSection({ onOpenResume }: AboutSectionProps) {
  const [transformStyle, setTransformStyle] = useState('');
  const [glareOpacity, setGlareOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlareOpacity(0.4);
  };

  const handleMouseLeave = () => {
    setTransformStyle('rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareOpacity(0);
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 w-full text-white bg-[#020202] border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-[radial-gradient(#00ff66_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-montserrat tracking-tight text-white">
            ABOUT ME
          </h2>
          <div className="h-[3px] w-20 mt-4 bg-[#00ff66] rounded-full shadow-[0_0_10px_#00ff66]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - 3D Tilt Profile Card & Resume Action Buttons */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            {/* 3D Interactive Profile Photo Card with Mouse Glare & Border Beam */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transform: transformStyle, perspective: '1000px', transition: 'transform 0.15s ease-out' }}
              className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl border border-white/15 bg-zinc-900 overflow-hidden shadow-2xl cursor-pointer select-none group"
            >
              {/* User Real Profile Photo */}
              <img
                src="/assets/images/anas_profile.jpg"
                alt="Syed Muhammad Anas Maududi Profile Photo"
                className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom Glassmorphism Name Badge Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/75 backdrop-blur-md border-t border-white/10 flex flex-col items-center justify-center text-center">
                <span className="text-sm md:text-base font-black font-montserrat tracking-widest text-[#00ff66] uppercase">
                  Syed Muhammad Anas Maududi
                </span>
                <span className="text-[11px] font-mono text-zinc-400 mt-0.5">
                  Full-Stack &amp; AI-Native Engineer
                </span>
              </div>

              {/* Glare Lighting Reflection Overlay */}
              <div
                style={{ opacity: glareOpacity }}
                className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/15 to-transparent transition-opacity duration-300 z-20"
              />
            </div>

            {/* Resume Action Buttons */}
            <div className="flex gap-3 w-full max-w-[340px] justify-center mt-2">
              <button
                onClick={onOpenResume}
                className="flex items-center justify-center flex-1 gap-2 px-4 py-3 rounded-full bg-white/5 hover:bg-white/10 text-xs md:text-sm font-semibold border border-white/20 transition-all active:scale-95 cursor-pointer text-white shadow-md"
              >
                <Eye className="w-4 h-4 text-[#00ff66]" /> View Resume
              </button>

              <a
                href="/resume/Syed_Muhammad_Anas_Maududi_Resume.pdf"
                download="Syed_Muhammad_Anas_Maududi_Resume.pdf"
                className="flex items-center justify-center flex-1 gap-2 px-4 py-3 rounded-full bg-[#00ff66] hover:bg-[#00cc52] text-black text-xs md:text-sm font-bold transition-all active:scale-95 cursor-pointer shadow-lg shadow-[#00ff66]/20"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </div>
          </div>

          {/* Right Column - Bio & Stat Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-6">
            <h3 className="text-2xl md:text-3xl font-extrabold font-montserrat tracking-tight leading-snug text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#00ff66]">
              Crafting high-performance web applications &amp; autonomous AI Employees.
            </h3>

            <div className="space-y-4 font-sans text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>
                Hello! I'm <strong className="text-white">Syed Muhammad Anas Maududi</strong>, a results-driven Backend &amp; Full-Stack Developer and AI Engineer with 5 years of hands-on experience building, debugging, and scaling modern web applications, robust REST APIs, and autonomous AI systems.
              </p>
              <p>
                Honored to serve as an <strong className="text-[#00ff66]">AI &amp; Startup Mentor at Governor House Karachi (GIAIC)</strong>, selected <strong className="text-cyan-400">among the Top 5 students for mentorship (Alhamdulillah)</strong>. I also qualified among the top ~50,000 students out of 500,000+ applicants for the Governor's Initiative for AI, Web 3.0 &amp; Metaverse.
              </p>
              <p>
                My expertise spans Node.js, Python, React, Next.js, TypeScript, PostgreSQL, MongoDB, Neon DB, Supabase, Docker, and Kubernetes. I have a proven track record delivering live commercial web applications for clients (including <strong className="text-[#00ff66]">Danish Traders — danishtraders.pk</strong>) and orchestrating autonomous agentic workflows with the <strong className="text-[#00ff66]">OpenAI Agent SDK</strong>.
              </p>
            </div>

            {/* Glowing Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4 pt-6 border-t border-white/10">
              {/* Card 1 */}
              <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4 flex flex-col justify-between hover:border-[#00ff66]/50 transition-colors group relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-[#00ff66]" />
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-bold">
                    Experience
                  </span>
                </div>
                <span className="text-sm md:text-base font-bold font-montserrat text-white">
                  5 Years Hands-On
                </span>
                <span className="text-xs text-zinc-400 mt-1">Freelance &amp; AI Dev</span>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4 flex flex-col justify-between hover:border-cyan-400/50 transition-colors group relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-bold">
                    Mentorship Honor
                  </span>
                </div>
                <span className="text-sm md:text-base font-bold font-montserrat text-white">
                  Top 5 Mentor @ Governor House
                </span>
                <span className="text-xs text-zinc-400 mt-1">AI &amp; Startup Mentor (GIAIC)</span>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4 flex flex-col justify-between hover:border-purple-400/50 transition-colors group relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <CodeXml className="w-4 h-4 text-purple-400" />
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-bold">
                    Core Stack
                  </span>
                </div>
                <span className="text-sm md:text-base font-bold font-montserrat text-white">
                  Next.js, React, Node.js
                </span>
                <span className="text-xs text-zinc-400 mt-1">TypeScript &amp; Python</span>
              </div>

              {/* Card 4 */}
              <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4 flex flex-col justify-between hover:border-amber-400/50 transition-colors group relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-bold">
                    DevOps &amp; Cloud
                  </span>
                </div>
                <span className="text-sm md:text-base font-bold font-montserrat text-white">
                  Docker &amp; Kubernetes
                </span>
                <span className="text-xs text-zinc-400 mt-1">Supabase, Neon, Postgres</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Mini Racing Cars Array driving across border line */}
      <div className="relative w-full h-10 mt-16 border-b border-white/10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1 left-0 w-full h-full flex items-end">
          {/* Car 1 */}
          <div className="absolute animate-[drive-car_12s_linear_infinite]" style={{ animationDelay: '0s' }}>
            <div className="mini-car">
              <div className="car-spoiler" />
              <div className="car-smoke car-smoke-1" />
              <div className="car-smoke car-smoke-2" />
              <div className="car-smoke car-smoke-3" />
              <div className="car-wheel wheel-back" />
              <div className="car-wheel wheel-front" />
            </div>
          </div>

          {/* Car 2 */}
          <div className="absolute animate-[drive-car_12s_linear_infinite]" style={{ animationDelay: '3s' }}>
            <div className="mini-car">
              <div className="car-spoiler" />
              <div className="car-smoke car-smoke-1" />
              <div className="car-smoke car-smoke-2" />
              <div className="car-smoke car-smoke-3" />
              <div className="car-wheel wheel-back" />
              <div className="car-wheel wheel-front" />
            </div>
          </div>

          {/* Car 3 */}
          <div className="absolute animate-[drive-car_12s_linear_infinite]" style={{ animationDelay: '6s' }}>
            <div className="mini-car">
              <div className="car-spoiler" />
              <div className="car-smoke car-smoke-1" />
              <div className="car-smoke car-smoke-2" />
              <div className="car-smoke car-smoke-3" />
              <div className="car-wheel wheel-back" />
              <div className="car-wheel wheel-front" />
            </div>
          </div>

          {/* Car 4 */}
          <div className="absolute animate-[drive-car_12s_linear_infinite]" style={{ animationDelay: '9s' }}>
            <div className="mini-car">
              <div className="car-spoiler" />
              <div className="car-smoke car-smoke-1" />
              <div className="car-smoke car-smoke-2" />
              <div className="car-smoke car-smoke-3" />
              <div className="car-wheel wheel-back" />
              <div className="car-wheel wheel-front" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
