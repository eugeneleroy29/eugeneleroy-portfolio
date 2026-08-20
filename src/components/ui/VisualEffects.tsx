"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * 1. Global Ambient Background Layer
 * Tracks mouse movements for a global spotlight + floating aurora gradients + grid pattern
 */
export function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Cursor Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[130px] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Floating Aurora Gradient Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] animate-aurora-1" />
      <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[160px] animate-aurora-2" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[150px] animate-aurora-1" />

      {/* Blueprint Grid Overlay with Radial Fade */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-80" />
    </div>
  );
}

/**
 * 2. Interactive Spotlight Card with Real-time Mouse Reflection
 */
interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}

export function SpotlightCard({ children, className = "", tilt = true }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, opacity: 0 });

  // Spring physics for subtle 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    setMouse({ x: mouseX, y: mouseY, opacity: 1 });

    if (tilt) {
      const width = rect.width;
      const height = rect.height;
      x.set((mouseX / width) - 0.5);
      y.set((mouseY / height) - 0.5);
    }
  };

  const handleMouseLeave = () => {
    setMouse((prev) => ({ ...prev, opacity: 0 }));
    if (tilt) {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
      className={`relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800/80 transition-colors duration-300 hover:border-indigo-500/50 ${className}`}
    >
      {/* Interactive Radial Spotlight Inner Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity: mouse.opacity,
          background: `radial-gradient(400px circle at ${mouse.x}px ${mouse.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

/**
 * 3. Animated Conic Shimmer Border (For Flagship & Key Callouts)
 */
export function ShimmerBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative p-[1px] overflow-hidden rounded-3xl group ${className}`}>
      {/* Rotating Conic Gradient Beam */}
      <div className="absolute inset-[-100%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#6366f1_50%,#10b981_75%,#000000_100%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative rounded-[calc(1.5rem-1px)] bg-zinc-950/90 backdrop-blur-xl h-full w-full">
        {children}
      </div>
    </div>
  );
}