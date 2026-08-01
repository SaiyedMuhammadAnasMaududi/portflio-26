'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Rocket, Monitor } from 'lucide-react';

interface ImmersiveIntroModalProps {
  onEnter: () => void;
}

export default function ImmersiveIntroModal({ onEnter }: ImmersiveIntroModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Pre-load audio
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const audio = new Audio('/audio/f1.wav');
      audio.preload = 'auto';
      audio.volume = 1.0;
    }
  }, []);

  const playEngineSound = () => {
    try {
      const audio = new Audio('/audio/f1.wav');
      audio.volume = 1.0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => playSynthEngineRoar());
      }
    } catch {
      playSynthEngineRoar();
    }
  };

  const playSynthEngineRoar = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1300, ctx.currentTime + 1.2);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 1.6);

      gain.gain.setValueAtTime(0.8, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.8);
    } catch {
      // fallback
    }
  };

  const handleStart = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    if (soundEnabled) {
      playEngineSound();
    }

    // After horizontal blind shutter animation completes
    setTimeout(() => {
      setIsOpen(false);
      onEnter();
    }, 1400);
  };

  const shutters = Array.from({ length: 8 });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed inset-0 w-full h-screen z-[9999] bg-[#020202] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* HORIZONTAL MECHANICAL SHUTTER BLINDS (Matching reference video) */}
          {isTransitioning && (
            <div className="absolute inset-0 z-50 flex flex-col pointer-events-none">
              {shutters.map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 1 }}
                  animate={{ scaleY: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.08,
                    ease: [0.77, 0, 0.175, 1],
                  }}
                  style={{ transformOrigin: i % 2 === 0 ? 'top' : 'bottom' }}
                  className="w-full flex-1 bg-white border-b border-zinc-300 shadow-2xl"
                />
              ))}
            </div>
          )}

          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#00ff66_1px,transparent_1px)] [background-size:36px_36px] opacity-15 pointer-events-none" />

          {/* Glowing Ambient Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00ff66]/30 via-cyan-400/25 to-[#3758f9]/30 rounded-full blur-[150px] pointer-events-none" />

          {/* Sound Toggle */}
          <button
            onClick={() => {
              const nextState = !soundEnabled;
              setSoundEnabled(nextState);
              if (nextState) playEngineSound();
            }}
            className="absolute top-6 right-6 z-40 flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#00ff66]/40 bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors backdrop-blur-md cursor-pointer shadow-lg"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-[#00ff66] animate-pulse" /> Sound: ON (F1 Engine Roar)
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-zinc-400" /> Sound: MUTED
              </>
            )}
          </button>

          {/* Center Content: LET'S GO Button Standing Side-By-Side With 3D Robot Model */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6">
            {/* LET'S GO CTA Button */}
            <motion.div
              animate={isTransitioning ? { scale: 0.9, opacity: 0 } : { scale: 1, opacity: 1 }}
              className="relative group order-2 md:order-1"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff66] via-[#00ffff] to-[#3758f9] rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700 animate-pulse" />
              <button
                onClick={handleStart}
                disabled={isTransitioning}
                className="relative px-12 py-6 text-2xl md:text-3xl font-black text-white bg-black border border-[#00ff66]/50 rounded-xl cursor-pointer tracking-[0.4em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 font-montserrat shadow-2xl"
              >
                <Rocket className="w-7 h-7 text-[#00ff66] animate-bounce" />
                LET'S GO
              </button>
            </motion.div>

            {/* 3D Robot Character Standing Next to Button */}
            <motion.div
              initial={{ x: -100, opacity: 0, scale: 0.8 }}
              animate={
                isTransitioning
                  ? { scale: 1.2, opacity: 0 }
                  : { x: 0, opacity: 1, scale: 1, y: [0, -12, 0] }
              }
              transition={
                isTransitioning
                  ? { duration: 0.4 }
                  : { y: { repeat: Infinity, duration: 3.5, ease: 'easeInOut' } }
              }
              className="relative order-1 md:order-2 flex items-center justify-center pointer-events-none select-none"
            >
              {/* Backlight Aura */}
              <div className="absolute inset-0 rounded-full bg-[#00ff66]/30 blur-2xl opacity-60" />

              {/* 3D Robot Image */}
              <img
                src="/assets/images/robot model.png"
                alt="3D Spline Robot Character"
                className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_45px_rgba(0,255,106,0.7)] mix-blend-screen pointer-events-none"
              />

              {/* Laser Visor Beam Scanner */}
              <motion.div
                animate={{ x: [-24, 24, -24], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                className="absolute top-[28%] w-10 h-2.5 bg-gradient-to-r from-[#00ff66] via-cyan-300 to-[#00ff66] rounded-full blur-[2px] shadow-[0_0_15px_#00ff66]"
              />
            </motion.div>
          </div>

          {/* Bottom Warning Badge */}
          <div className="absolute bottom-8 w-full max-w-lg px-6 flex flex-col items-center gap-2">
            <div className="px-6 py-2.5 bg-white/5 border border-[#00ff66]/30 rounded-full backdrop-blur-md shadow-2xl flex items-center justify-center text-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-ping" />
              <p className="text-xs md:text-sm font-bold text-white uppercase tracking-widest font-sans">
                FOR THE BEST IMMERSIVE EXPERIENCE, PLEASE VIEW ON A DESKTOP.
              </p>
            </div>
            <p className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest text-center">
              (IF YOU ARE ON MOBILE, SWITCH TO A DESKTOP DEVICE FOR A BETTER EXPERIENCE)
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
