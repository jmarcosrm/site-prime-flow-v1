
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { OptimizedImage } from './ui/optimized-image';

export const DashboardPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 1,
    restDelta: 0.001
  });

  const rotateX = useTransform(smoothProgress, [0, 1], [50, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);
  const y = useTransform(smoothProgress, [0, 1], [100, 0]);
  
  const shineTranslate = useTransform(smoothProgress, [0, 1], ["100%", "-150%"]);
  const shineOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.3, 0]);
  const glowOpacity = useTransform(smoothProgress, [0, 1], [0, 0.5]);

  return (
    <section 
      ref={containerRef} 
      className="relative z-30 py-20 md:py-32 px-4 md:px-6 perspective-[2500px] bg-black overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-30">
        <motion.div
          style={{ 
            rotateX, 
            scale, 
            opacity, 
            y,
            transformStyle: "preserve-3d" 
          }}
          className="relative rounded-[1rem] md:rounded-[2rem] border border-white/10 bg-[#0A0A0A] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group will-change-transform"
        >
          {/* Mac-style header dots */}
          <div className="absolute top-0 left-0 right-0 h-8 md:h-12 bg-[#0A0A0A]/90 border-b border-white/5 flex items-center px-4 md:px-6 gap-2 z-20 backdrop-blur-md rounded-t-[1rem] md:rounded-t-[2rem]">
             <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
             <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
             <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
             <div className="ml-4 px-3 py-1 rounded-full bg-white/5 border border-white/5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                  Live Dashboard
                </span>
             </div>
          </div>

          <div className="relative pt-8 md:pt-12 bg-black rounded-[1rem] md:rounded-[2rem] overflow-hidden min-h-[250px] md:min-h-[600px]">
             
             {/* Optimized Image Loading */}
             <div className="relative z-10 w-full h-full">
               <OptimizedImage
                  src="https://i.im.ge/2026/01/14/G0DLIp.Generated-Image-January-13-2026-3-35PM.jpeg"
                  alt="Plataforma de IA Dashboard"
                  className="w-full h-full object-cover shadow-2xl"
               />
             </div>
             
             {/* Interactive Shine Layer */}
             <motion.div 
                style={{ x: shineTranslate, opacity: shineOpacity }}
                className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none will-change-transform"
             />

             {/* Bottom Blend Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
             
             {/* Reflection / Gloss */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none opacity-30 z-10" />
             
             {/* Inner Border Ring */}
             <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1rem] md:rounded-[2rem] pointer-events-none z-30" />
          </div>

        </motion.div>
        
        {/* Glow effect */}
        <motion.div 
            style={{ scale, opacity: glowOpacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[60%] bg-accent/15 blur-[120px] -z-10 rounded-full mix-blend-screen will-change-transform" 
        />
      </div>
    </section>
  );
};
