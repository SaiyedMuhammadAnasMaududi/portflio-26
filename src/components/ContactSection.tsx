'use client';

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 w-full bg-[#020202] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-montserrat tracking-tight text-white">
            GET IN TOUCH
          </h2>
          <div className="h-[3px] w-20 mt-4 bg-[#00ff66] rounded-full shadow-[0_0_10px_#00ff66]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-extrabold font-montserrat tracking-tight text-white leading-snug">
              Let's build something extraordinary together.
            </h3>

            <p className="text-sm md:text-base font-sans text-zinc-400 leading-relaxed">
              Whether you need a high-performance Next.js web application, an autonomous AI Employee system, cloud containerization, or technical consultation — feel free to reach out!
            </p>

            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-xs md:text-sm font-mono text-zinc-300">
              <span className="w-3 h-3 rounded-full bg-[#00ff66] animate-ping" />
              <span>Available for new freelance projects &amp; AI contracts</span>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4 mt-2">
              <a
                href="mailto:tafs4920@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-white/10 hover:border-[#00ff66]/60 transition-colors group cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-[#00ff66]/10 text-[#00ff66] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold block">
                    EMAIL ADDRESS
                  </span>
                  <span className="text-sm md:text-base font-bold font-mono text-white group-hover:text-[#00ff66] transition-colors">
                    tafs4920@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-white/30 text-xs md:text-sm font-semibold font-mono text-white transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4 text-[#00ff66]" /> GitHub
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-white/30 text-xs md:text-sm font-semibold font-mono text-white transition-colors cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 md:p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#00ff66]/20 border border-[#00ff66] flex items-center justify-center text-[#00ff66] animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-montserrat text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm font-sans text-zinc-400 max-w-md">
                  Thank you for getting in touch. I will review your inquiry and respond to your email promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#00ff66] focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#00ff66] focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / AI Development"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#00ff66] focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project requirements or goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#00ff66] focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#00ff66] hover:bg-[#00cc52] text-black font-bold text-sm font-montserrat uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] active:scale-95 shadow-[0_0_20px_rgba(0,255,102,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
