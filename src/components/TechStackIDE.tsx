'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Code, Server, Cpu, Database, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FileTab {
  id: string;
  name: string;
  icon: React.ReactNode;
  code: string;
  skills: Array<{ name: string; category: string }>;
}

interface BouncingIcon {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  src: string;
  name: string;
}

export default function TechStackIDE() {
  const [activeTab, setActiveTab] = useState<string>('frontend');
  const [isRunning, setIsRunning] = useState(false);
  const [ranSuccess, setRanSuccess] = useState(false);
  const [bouncingIcons, setBouncingIcons] = useState<BouncingIcon[]>([]);
  const animationRef = useRef<number | null>(null);

  const tabs: FileTab[] = [
    {
      id: 'frontend',
      name: 'frontend.ts',
      icon: <Code className="w-4 h-4 text-sky-400" />,
      skills: [
        { name: 'React.js', category: 'Frontend Library' },
        { name: 'Next.js (App Router)', category: 'Full-Stack Framework' },
        { name: 'TypeScript', category: 'Type Safety' },
        { name: 'HTML5 & CSS3', category: 'Web Standard' },
        { name: 'Tailwind CSS', category: 'Styling' },
      ],
      code: `// Frontend & UI Architecture
export const frontendStack = {
  frameworks: ["Next.js 14/15", "React 19", "TypeScript"],
  styling: ["Tailwind CSS", "Framer Motion", "Vanilla CSS"],
  principles: ["Responsive UI", "Micro-Animations", "SEO Best Practices"],
  renderMode: "SSR / SSG / Client Dynamic"
};

console.log("⚡ Frontend setup optimized for peak performance!");`,
    },
    {
      id: 'backend',
      name: 'backend.ts',
      icon: <Server className="w-4 h-4 text-green-400" />,
      skills: [
        { name: 'Node.js', category: 'Runtime' },
        { name: 'Express / REST APIs', category: 'API Architecture' },
        { name: 'Python', category: 'AI & Scripting' },
        { name: 'Streamlit', category: 'AI Web Apps' },
        { name: 'NextAuth / Auth Systems', category: 'Authentication' },
      ],
      code: `// Backend & API Infrastructure
import { Router } from "express";

export const backendService = {
  runtimes: ["Node.js", "Python 3.11+"],
  architectures: ["REST APIs", "Serverless Functions", "Microservices"],
  auth: ["NextAuth", "JWT", "OAuth 2.0"],
  methodologies: ["SDD (Spec-Driven Dev)", "TDD (Test-Driven Dev)"]
};

console.log("🚀 Backend API services active & listening!");`,
    },
    {
      id: 'ai_agentic',
      name: 'ai_agentic.ts',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      skills: [
        { name: 'OpenAI Agent SDK', category: 'Agentic Framework' },
        { name: 'Claude CLI (Claudecli)', category: 'AI Development Tooling' },
        { name: 'AI Employees Manufacturing', category: 'Workflow Automation' },
        { name: 'RAG & Chatbots', category: 'Knowledge Retrieval' },
        { name: 'OpenRouter', category: 'Multi-Model Inference' },
      ],
      code: `// Autonomous Agentic Systems & Manufactured AI Employees
import { Agent, AgentRunner } from "@openai/agent-sdk";

export async function manufactureAIEmployee(role: string) {
  const employee = new Agent({
    name: role,
    model: "gpt-4o",
    instructions: "Automate end-to-end client workflows with zero supervision.",
    tools: ["web_search", "code_executor", "database_query"]
  });
  return await AgentRunner.deploy(employee);
}

console.log("🧠 Manufactured AI Employees deployed to vault.");`,
    },
    {
      id: 'devops_db',
      name: 'devops_db.ts',
      icon: <Database className="w-4 h-4 text-amber-400" />,
      skills: [
        { name: 'Docker Containerization', category: 'DevOps' },
        { name: 'Kubernetes Orchestration', category: 'Cloud Infrastructure' },
        { name: 'PostgreSQL & Neon DB', category: 'Relational DB' },
        { name: 'Supabase', category: 'BaaS & Database' },
        { name: 'Vector & Embedding DBs', category: 'AI Vector Search' },
      ],
      code: `// Database & DevOps Cloud Pipeline
export const cloudInfra = {
  containers: ["Docker", "Kubernetes Orchestration"],
  databases: ["PostgreSQL", "Neon DB", "Supabase", "Vector DBs"],
  deployment: ["Cloud Native", "Vercel", "Render", "Streamlit Cloud"],
  pipeline: ["CI/CD Workflows", "Automated Error Resolution"]
};

console.log("📦 Cloud containerization & DB connections established!");`,
    },
  ];

  const currentTabData = tabs.find((t) => t.id === activeTab) || tabs[0];

  const deviconList = [
    { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg' },
    { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'OpenAI', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg' },
  ];

  const handleRunCode = () => {
    setIsRunning(true);
    setRanSuccess(false);

    // Spawn falling bouncing devicon SVG icons
    const newIcons: BouncingIcon[] = deviconList.map((item, idx) => ({
      id: Date.now() + idx,
      x: 40 + Math.random() * 350,
      y: 20 + Math.random() * 60,
      vx: (Math.random() - 0.5) * 7,
      vy: 2 + Math.random() * 4,
      src: item.src,
      name: item.name,
    }));

    setBouncingIcons(newIcons);

    // Confetti explosion
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#00ff66', '#00ffff', '#3758f9', '#a855f7'],
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsRunning(false);
      setRanSuccess(true);
      setTimeout(() => {
        setRanSuccess(false);
        setBouncingIcons([]);
      }, 4000);
    }, 1200);
  };

  // Physics Animation Loop
  useEffect(() => {
    if (bouncingIcons.length === 0) return;

    const updatePhysics = () => {
      setBouncingIcons((prev) =>
        prev.map((icon) => {
          let nx = icon.x + icon.vx;
          let ny = icon.y + icon.vy;
          let nvx = icon.vx;
          let nvy = icon.vy + 0.35; // gravity

          if (nx < 10 || nx > 460) nvx *= -0.8;
          if (ny > 360) {
            ny = 360;
            nvy *= -0.7; // bounce
          }

          return { ...icon, x: nx, y: ny, vx: nvx, vy: nvy };
        })
      );

      animationRef.current = requestAnimationFrame(updatePhysics);
    };

    animationRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [bouncingIcons]);

  return (
    <section id="skills" className="py-20 md:py-28 w-full bg-[#020202] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-montserrat tracking-tight text-white">
            MY TECH STACK
          </h2>
          <div className="h-[3px] w-20 mt-4 bg-[#00ff66] rounded-full shadow-[0_0_10px_#00ff66]" />
        </div>

        {/* IDE Container */}
        <div className="w-full mx-auto rounded-xl overflow-hidden border border-zinc-800 bg-[#09090b] shadow-2xl relative">
          {/* Falling Bouncing Devicon SVG Icons Container */}
          <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
            {bouncingIcons.map((icon) => (
              <div
                key={icon.id}
                style={{
                  transform: `translate3d(${icon.x}px, ${icon.y}px, 0)`,
                }}
                className="absolute p-2 rounded-xl bg-black/90 border border-white/20 shadow-2xl backdrop-blur-md transition-transform duration-75 flex items-center justify-center"
              >
                <img src={icon.src} alt={icon.name} className="w-8 h-8 object-contain drop-shadow-md" />
              </div>
            ))}
          </div>

          {/* Top Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0c0c0e] border-b border-zinc-800 select-none relative z-40">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
            </div>

            {/* Window Title */}
            <div className="flex-1 text-center text-xs font-mono text-zinc-400 hidden md:block">
              anas-maududi-portfolio — Visual Studio Code
            </div>

            {/* Run Code Button */}
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold transition-all bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/30 hover:bg-[#00ff66]/20 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,255,102,0.2)] cursor-pointer"
            >
              {ranSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#00ff66]" /> Executed!
                </>
              ) : (
                <>
                  <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} /> Run Code
                </>
              )}
            </button>
          </div>

          {/* IDE Main Workspace */}
          <div className="flex flex-col md:flex-row h-auto md:h-[480px]">
            {/* Sidebar Explorer */}
            <div className="md:w-60 bg-[#070708] border-r border-zinc-800 flex md:flex-col overflow-x-auto md:overflow-visible select-none">
              <div className="px-4 py-3 text-xs font-bold text-zinc-500 uppercase tracking-wider hidden md:block mt-2 font-mono">
                EXPLORER
              </div>
              <div className="flex md:flex-col w-full">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-3 md:py-2.5 text-xs font-mono whitespace-nowrap transition-colors outline-none text-left ${
                      activeTab === tab.id
                        ? 'bg-[#09090b] text-white border-b-2 md:border-b-0 md:border-l-2 border-[#00ff66]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                    }`}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Editor Code Viewer */}
            <div className="flex-1 flex flex-col justify-between p-4 md:p-6 bg-[#09090b] font-mono text-xs md:text-sm overflow-y-auto">
              <div className="space-y-1 text-zinc-300">
                {currentTabData.code.split('\n').map((line, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="w-6 text-right text-zinc-600 select-none">{idx + 1}</span>
                    <span className="whitespace-pre-wrap">{line}</span>
                  </div>
                ))}
              </div>

              {/* Skill Tags Footer */}
              <div className="mt-8 pt-4 border-t border-zinc-800 flex flex-wrap gap-2">
                {currentTabData.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-xs font-mono text-[#00ff66] flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
                    {s.name} <span className="text-zinc-500">({s.category})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
