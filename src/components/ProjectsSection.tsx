'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'all' | 'ai' | 'fullstack' | 'client';
  categoryLabel: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  featured?: boolean;
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'fullstack' | 'client'>('all');

  const projects: Project[] = [
    {
      id: 'danish-traders',
      title: 'Danish Traders',
      category: 'client',
      categoryLabel: 'Live Client Production',
      description:
        'Commercial website for a local business client — live production deployment serving real customers with full-stack e-commerce architecture.',
      liveUrl: 'https://danishtraders.pk/',
      tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Supabase', 'Client Project'],
      featured: true,
    },
    {
      id: 'ai-employee-vault',
      title: 'AI Employee Vault',
      category: 'ai',
      categoryLabel: 'AI & Agentic System',
      description:
        'Open-source repository of manufactured AI Employees — autonomous agentic systems built with OpenAI Agent SDK and OpenRouter.',
      githubUrl: 'https://github.com/',
      tags: ['OpenAI Agent SDK', 'OpenRouter', 'AI Employees', 'Python', 'Open Source'],
      featured: true,
    },
    {
      id: 'scholar-assistant',
      title: 'Scholar Assistant (Student Agent)',
      category: 'ai',
      categoryLabel: 'AI & Agentic System',
      description:
        'AI-powered student assistant utilizing OpenAI Agent SDK and OpenRouter, deployed on Streamlit Cloud.',
      liveUrl: 'https://studentagent.streamlit.app',
      tags: ['OpenAI Agent SDK', 'Streamlit', 'OpenRouter', 'Python'],
      featured: true,
    },
    {
      id: 'physical-ai-textbook',
      title: 'Physical AI – Humanoid Robotics Textbook',
      category: 'ai',
      categoryLabel: 'AI & Educational',
      description:
        'Educational web textbook exploring Physical AI concepts, Humanoid Robotics, and autonomous embodied AI.',
      liveUrl: '#',
      tags: ['Physical AI', 'Humanoid Robotics', 'Next.js', 'Educational'],
    },
    {
      id: 'fullstack-todo-app',
      title: 'Full-Stack Todo App',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Web App',
      description:
        'Production-ready task management application with full frontend-backend integration, built for hackathon competition.',
      liveUrl: 'https://full-stack-todo-app-hackathon.vercel.app',
      tags: ['React', 'Next.js', 'REST API', 'Hackathon'],
    },
    {
      id: 'comfy-sofa',
      title: 'Comfy Sofa — Static Design',
      category: 'fullstack',
      categoryLabel: 'UI/UX & Web Design',
      description:
        'Pixel-perfect responsive static website for a furniture brand, built to international UI/UX standards with clean modern layout.',
      liveUrl: 'https://hackathon2submit.vercel.app',
      tags: ['HTML5', 'CSS3', 'Modern UI/UX', 'Responsive Design'],
    },
    {
      id: 'anas-baba-express',
      title: 'Anas Baba Express',
      category: 'fullstack',
      categoryLabel: 'Full-Stack E-Commerce',
      description:
        'Full e-commerce application featuring shopping cart functionality, product catalog search, and API integration.',
      liveUrl: 'https://anasbaba-express.vercel.app',
      tags: ['Next.js', 'React', 'Cart API', 'E-Commerce'],
    },
    {
      id: 'mindful-mosaic',
      title: 'Mindful Mosaic',
      category: 'fullstack',
      categoryLabel: 'Content Platform',
      description:
        'Blog and content platform with API-driven content management and fast dynamic rendering.',
      liveUrl: 'https://mindful-mosaic-swart.vercel.app',
      tags: ['Next.js', 'API CMS', 'Blog Platform'],
    },
    {
      id: 'student-portal',
      title: 'Student Portal',
      category: 'fullstack',
      categoryLabel: 'Educational Platform',
      description:
        'Full-stack educational platform built with Next.js and PostgreSQL (In Active Development).',
      tags: ['Next.js', 'PostgreSQL', 'Auth Systems', 'In Progress'],
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter || (filter === 'fullstack' && p.category === 'client'));

  return (
    <section id="projects" className="py-20 md:py-28 w-full bg-[#020202] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-montserrat tracking-tight text-white">
              SELECTED PROJECTS
            </h2>
            <div className="h-[3px] w-20 mt-4 bg-[#00ff66] rounded-full shadow-[0_0_10px_#00ff66]" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI & Agents' },
              { id: 'fullstack', label: 'Full-Stack Apps' },
              { id: 'client', label: 'Client Work' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setFilter(t.id as 'all' | 'ai' | 'fullstack' | 'client')}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  filter === t.id
                    ? 'bg-[#00ff66] text-black shadow-[0_0_10px_rgba(0,255,102,0.4)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative rounded-2xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-900 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#00ff66]/60 hover:shadow-[0_0_30px_rgba(0,255,102,0.15)]"
              >
                <div>
                  {/* Category Pill & Link Icons */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#00ff66]">
                      {project.categoryLabel}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="p-2 rounded-lg bg-[#00ff66]/10 hover:bg-[#00ff66]/20 text-[#00ff66] transition-colors flex items-center gap-1"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold font-montserrat text-white group-hover:text-[#00ff66] transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm font-sans text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-zinc-800/80 text-[11px] font-mono text-zinc-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
