'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sequential typing brand titles matching reference video
  const titles = [
    '< SYED ANAS MAUDUDI _/>',
    '< FULL STACK & AI DEVELOPER _/>',
    '< SOFTWARE ENGINEER _/>',
  ];
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter Loop
  useEffect(() => {
    const currentFullText = titles[titleIdx];
    let speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        if (displayText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIdx((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIdx]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 md:px-12 z-50 transition-all duration-300 flex items-center justify-between py-4 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      {/* Brand Terminal Logo with Dynamic Typewriter (exact reference video) */}
      <a href="#" className="flex items-center text-[#00ff66] font-mono font-bold text-sm md:text-lg tracking-wider">
        <span className="text-white hover:text-[#00ff66] transition-colors">{displayText}</span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 font-inter">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-[#00ff66] transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#00ff66] -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}

        {/* Theme Toggle */}
        <li>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full bg-white/10 text-white border border-white/10"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00ff66]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4 font-mono z-50 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-[#00ff66] py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
