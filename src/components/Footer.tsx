'use client';

import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#020202] text-white border-t border-white/10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2 font-mono text-sm text-zinc-400">
          <span className="text-[#00ff66] font-bold">&lt;_&gt;</span>
          <span>© {new Date().getFullYear()} Syed Muhammad Anas Maududi. All rights reserved.</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#00ff66]/20 hover:border-[#00ff66]/40 text-xs font-mono text-zinc-400 hover:text-[#00ff66] transition-all cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
