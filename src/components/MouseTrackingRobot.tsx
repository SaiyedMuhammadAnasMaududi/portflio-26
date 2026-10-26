'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MouseTrackingRobot() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [direction, setDirection] = useState<'center' | 'left' | 'right'>('center');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xRatio = e.clientX / window.innerWidth;
      const yRatio = e.clientY / window.innerHeight;
      setMousePos({ x: xRatio, y: yRatio });

      if (xRatio < 0.38) {
        setDirection('left');
      } else if (xRatio > 0.62) {
        setDirection('right');
      } else {
        setDirection('center');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3D Perspective Tilt & Translation Math based on Cursor
  const rotateY = (mousePos.x - 0.5) * 45; // Turns up to 45 deg left or right
  const rotateX = (0.5 - mousePos.y) * 25; // Tilts up/down
  const translateX = (mousePos.x - 0.5) * 60; // Shifts slightly towards cursor

  return (
    <div className="relative flex flex-col items-center justify-center pointer-events-none select-none my-1 md:my-3 z-20">
      {/* Ambient Neon Backlight Glow */}
      <div className="absolute w-[460px] h-[460px] md:w-[580px] md:h-[580px] rounded-full bg-gradient-to-r from-[#00ff66]/25 via-cyan-400/20 to-[#3758f9]/25 blur-[120px] pointer-events-none" />

      {/* 3D Container with Seamless Mouse Tracking Rotation & Pose Swapping */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        animate={{
          rotateY: rotateY,
          rotateX: rotateX,
          x: translateX,
          y: [0, -14, 0], // Gentle hover levitation
        }}
        transition={{
          rotateY: { type: 'spring', stiffness: 140, damping: 20 },
          rotateX: { type: 'spring', stiffness: 140, damping: 20 },
          x: { type: 'spring', stiffness: 120, damping: 20 },
          y: { repeat: Infinity, duration: 3.8, ease: 'easeInOut' },
        }}
        className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-[460px] md:h-[460px] lg:w-[500px] lg:h-[500px] flex items-center justify-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        {/* CENTER STATE IMAGE */}
        <motion.img
          src="/assets/images/robot model.png"
          alt="3D Robot Facing Center"
          animate={{ opacity: direction === 'center' ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 w-full h-full object-contain mix-blend-screen drop-shadow-[0_0_60px_rgba(0,255,106,0.7)]"
        />

        {/* LEFT STATE IMAGE (Turns head, torso and hands left) */}
        <motion.img
          src="/assets/images/left.png"
          alt="3D Robot Facing Left"
          animate={{ opacity: direction === 'left' ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 w-full h-full object-contain mix-blend-screen drop-shadow-[0_0_60px_rgba(0,255,106,0.7)]"
        />

        {/* RIGHT STATE IMAGE (Turns head, torso and hands right) */}
        <motion.img
          src="/assets/images/right.png"
          alt="3D Robot Facing Right"
          animate={{ opacity: direction === 'right' ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 w-full h-full object-contain mix-blend-screen drop-shadow-[0_0_60px_rgba(0,255,106,0.7)]"
        />

        {/* Dynamic Eye Optics Beam tracking cursor position */}
        <motion.div
          animate={{
            x: (mousePos.x - 0.5) * 70,
            y: (mousePos.y - 0.5) * 35,
          }}
          transition={{ type: 'spring', stiffness: 160, damping: 15 }}
          className="absolute top-[28%] w-16 h-3 bg-gradient-to-r from-[#00ff66] via-cyan-300 to-[#00ff66] rounded-full blur-[2px] shadow-[0_0_20px_#00ff66] pointer-events-none opacity-85"
        />
      </motion.div>
    </div>
  );
}
