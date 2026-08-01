'use client';

import React, { useEffect, useRef } from 'react';

interface Robot3DCanvasProps {
  isFlying: boolean;
}

export default function Robot3DCanvas({ isFlying }: Robot3DCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 300);
    let height = (canvas.height = 360);

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 + (isFlying ? 0 : Math.sin(time * 2) * 10);

      ctx.save();
      ctx.translate(centerX, centerY);

      if (isFlying) {
        ctx.rotate(-0.35); // Superhero flight angle
      }

      // --- 3D Lighting & Metallic Gradients ---
      const silverGrad = ctx.createLinearGradient(-40, -80, 40, 80);
      silverGrad.addColorStop(0, '#f1f5f9');
      silverGrad.addColorStop(0.5, '#94a3b8');
      silverGrad.addColorStop(1, '#334155');

      const blueArmorGrad = ctx.createLinearGradient(-40, -40, 40, 60);
      blueArmorGrad.addColorStop(0, '#00f0ff');
      blueArmorGrad.addColorStop(0.5, '#3758f9');
      blueArmorGrad.addColorStop(1, '#0284c7');

      // --- 1. Thruster Flames (When Flying) ---
      if (isFlying) {
        ctx.save();
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 30;

        const flameH = 70 + Math.random() * 25;
        const flameGrad = ctx.createLinearGradient(0, 80, 0, 80 + flameH);
        flameGrad.addColorStop(0, '#ffffff');
        flameGrad.addColorStop(0.4, '#00f0ff');
        flameGrad.addColorStop(1, 'transparent');

        // Left Thruster Flame
        ctx.fillStyle = flameGrad;
        ctx.beginPath();
        ctx.moveTo(-20, 80);
        ctx.lineTo(0, 80 + flameH);
        ctx.lineTo(-40, 80 + flameH * 0.8);
        ctx.closePath();
        ctx.fill();

        // Right Thruster Flame
        ctx.beginPath();
        ctx.moveTo(20, 80);
        ctx.lineTo(0, 80 + flameH);
        ctx.lineTo(40, 80 + flameH * 0.8);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }

      // --- 2. Metallic 3D Legs & Thruster Boots ---
      ctx.fillStyle = blueArmorGrad;
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 1.5;

      // Left Leg
      ctx.beginPath();
      ctx.roundRect(-32, 25, 22, 60, 6);
      ctx.fill();
      ctx.stroke();

      // Right Leg
      ctx.beginPath();
      ctx.roundRect(10, 25, 22, 60, 6);
      ctx.fill();
      ctx.stroke();

      // --- 3. Armored Torso & Chest ---
      ctx.fillStyle = silverGrad;
      ctx.beginPath();
      ctx.moveTo(-45, -55);
      ctx.lineTo(45, -55);
      ctx.lineTo(35, 30);
      ctx.lineTo(-35, 30);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#3758f9';
      ctx.stroke();

      // Inner Blue Chest Armor Plate
      ctx.fillStyle = blueArmorGrad;
      ctx.beginPath();
      ctx.moveTo(-32, -45);
      ctx.lineTo(32, -45);
      ctx.lineTo(24, 15);
      ctx.lineTo(-24, 15);
      ctx.closePath();
      ctx.fill();

      // Glowing Cyan Arc Reactor Core
      ctx.save();
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 20;
      ctx.fillStyle = '#00f0ff';
      ctx.beginPath();
      ctx.arc(0, -12, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, -12, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // --- 4. Shoulder Armor & Mechanical Arms ---
      ctx.fillStyle = silverGrad;
      // Left Shoulder
      ctx.beginPath();
      ctx.arc(-52, -48, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Right Shoulder
      ctx.beginPath();
      ctx.arc(52, -48, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Left Arm
      ctx.fillRect(-62, -30, 14, 45);
      // Right Arm
      ctx.fillRect(48, -30, 14, 45);

      // --- 5. Metallic Head & Helmet ---
      ctx.fillStyle = silverGrad;
      ctx.beginPath();
      ctx.roundRect(-30, -115, 60, 50, 12);
      ctx.fill();
      ctx.strokeStyle = '#00f0ff';
      ctx.stroke();

      // Glowing Eyes Visor
      ctx.fillStyle = '#020617';
      ctx.beginPath();
      ctx.roundRect(-22, -100, 44, 16, 8);
      ctx.fill();

      ctx.save();
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 15;
      ctx.fillStyle = '#00f0ff';
      // Left Eye
      ctx.beginPath();
      ctx.arc(-11, -92, 4.5, 0, Math.PI * 2);
      ctx.fill();
      // Right Eye
      ctx.beginPath();
      ctx.arc(11, -92, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Antenna
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, -115);
      ctx.lineTo(0, -132);
      ctx.stroke();

      ctx.save();
      ctx.shadowColor = '#00ff66';
      ctx.shadowBlur = 12;
      ctx.fillStyle = '#00ff66';
      ctx.beginPath();
      ctx.arc(0, -135, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isFlying]);

  return <canvas ref={canvasRef} className="w-[300px] h-[360px] pointer-events-none" />;
}
