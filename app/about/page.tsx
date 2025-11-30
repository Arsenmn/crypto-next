"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.15);
      currentY = lerp(currentY, targetY, 0.15);

      glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative bg-[#2d1919] w-full min-h-screen text-white overflow-hidden flex items-center justify-center px-10">
      <div
        ref={glowRef}
        className="
          pointer-events-none
          fixed top-0 left-0
          w-[300px] h-[300px]
          bg-amber-400/50
          blur-[140px]
          rounded-full
          z-0
        "
      />

      <div className="max-w-3xl text-center flex flex-col gap-6 z-10 relative animate-text-gradient">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text">
          About This Project
        </h1>
        <p className="text-xl text-white/90 leading-relaxed">
          This project showcases my ability to craft polished interfaces,
          animate elements smoothly, manage global state effectively, and fetch
          and display data from APIs with precision.
        </p>
        <p className="text-xl text-white/80 leading-relaxed">
          Built with Next.js, TailwindCSS, and Framer Motion, every detail is
          designed for performance, usability, and visual appeal.
        </p>
      </div>
    </div>
  );
}
