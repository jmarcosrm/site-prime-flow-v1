
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { solutionTabs } from '../lib/data';
import { cn } from '../lib/cn';
import { Check, ArrowRight, Sparkles, Box, BarChart, MessageSquare, ChevronRight } from 'lucide-react';

type TabKey = keyof typeof solutionTabs;

// --- Helper: Spotlight Card Effect ---
const SpotlightCard = ({ children, className = "", color = "rgba(255, 122, 0, 0.15)" }: { children?: React.ReactNode; className?: string; color?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative border border-white/10 bg-black overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
};

export const TabsSolutions = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('automation');

  const tabs = [
    { key: 'automation', label: 'Automação Inteligente', icon: Box, theme: 'orange' },
    { key: 'predictive', label: 'Análise Preditiva', icon: BarChart, theme: 'blue' },
    { key: 'nlp', label: 'PLN (Linguagem)', icon: MessageSquare, theme: 'purple' },
  ] as const;

  const content = solutionTabs[activeTab];

  // Dynamic Theme Colors based on selection
  const themeColors = {
    orange: { 
      accent: "text-orange-500", 
      bg: "bg-orange-500", 
      border: "border-orange-500",
      spotlight: "rgba(249, 115, 22, 0.15)",
      gradient: "from-orange-500/20 to-transparent"
    },
    blue: { 
      accent: "text-blue-500", 
      bg: "bg-blue-500", 
      border: "border-blue-500",
      spotlight: "rgba(59, 130, 246, 0.15)",
      gradient: "from-blue-500/20 to-transparent"
    },
    purple: { 
      accent: "text-purple-500", 
      bg: "bg-purple-500", 
      border: "border-purple-500",
      spotlight: "rgba(168, 85, 247, 0.15)",
      gradient: "from-purple-500/20 to-transparent"
    }
  };

  const currentTheme = themeColors[tabs.find(t => t.key === activeTab)?.theme || 'orange'];

  return (
    <div className="w-full">
      {/* 1. Navigation Dock */}
      <div className="flex justify-center mb-12">
        <div className="flex p-2 bg-black border border-white/10 rounded-full relative shadow-2xl backdrop-blur-xl">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 z-10",
                  isActive ? "text-white" : "text-neutral-500 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={cn("absolute inset-0 rounded-full bg-white/10 border border-white/10 shadow-inner")}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <tab.icon size={16} className={cn("transition-colors", isActive ? currentTheme.accent : "currentColor")} />
                <span className="hidden md:inline">{tab.label}</span>
                <span className="md:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Content Grid (Bento) */}
      <div className="relative min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            
            {/* A. Hero Summary Card */}
            <div className="lg:col-span-8 relative group">
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 rounded-[2rem] transition-colors duration-500", currentTheme.gradient)} />
              
              <div className="relative h-full p-8 md:p-12 rounded-[2rem] bg-black border border-white/10 overflow-hidden flex flex-col justify-between min-h-[320px]">
                 
                 {/* Background Texture */}
                 <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
                 />

                 <div className="relative z-10">
                    <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest mb-6", currentTheme.accent)}>
                       <Sparkles size={12} />
                       <span>Core Module</span>
                    </div>
                    
                    <motion.h3 
                      className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-2xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {content.summary}
                    </motion.h3>
                 </div>
                 
                 <div className="relative z-10 mt-8">
                    <button className={cn("group/btn flex items-center gap-2 font-bold text-lg border-b-2 border-transparent hover:border-current transition-all pb-1", currentTheme.accent)}>
                       {content.cta} 
                       <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
            </div>

            {/* B. Deliverables Card (Tech/Terminal Look) */}
            <div className="lg:col-span-4 flex flex-col h-full">
               <div className="h-full p-8 rounded-[2rem] bg-black border border-white/10 relative overflow-hidden flex flex-col justify-center">
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />

                  <h4 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-2 z-10">
                     <div className={cn("w-2 h-2 rounded-full animate-pulse", currentTheme.bg)} />
                     Entregáveis do Sistema
                  </h4>

                  <ul className="space-y-4 z-10">
                     {content.deliverables.map((del, i) => (
                       <motion.li 
                         key={i}
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.2 + (i * 0.1) }}
                         className="flex items-center justify-between p-3 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-colors group"
                       >
                         <span className="text-sm font-medium text-neutral-200">{del}</span>
                         <Check size={14} className={cn("opacity-0 group-hover:opacity-100 transition-opacity", currentTheme.accent)} />
                       </motion.li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* C. Sub-features (Interactive Spotlight Grid) */}
            {content.grid.map((item, idx) => (
              <div key={idx} className="lg:col-span-3">
                <SpotlightCard className="h-full rounded-3xl" color={currentTheme.spotlight}>
                  <div className="p-6 md:p-8 h-full flex flex-col">
                     <div className="mb-4">
                        <div className={cn("w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors group-hover:bg-white/10", currentTheme.accent)}>
                           <ChevronRight size={18} />
                        </div>
                     </div>
                     <h4 className="font-bold text-lg text-white mb-2 group-hover:text-white transition-colors">
                        {item.title}
                     </h4>
                     <p className="text-sm text-neutral-400 leading-relaxed">
                        {item.desc}
                     </p>
                  </div>
                </SpotlightCard>
              </div>
            ))}

            {/* D. Tags / Examples */}
            <div className="lg:col-span-12 mt-4">
               <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start opacity-70 hover:opacity-100 transition-opacity">
                  <span className="text-xs font-mono text-neutral-600 uppercase mr-4">Deployments Ativos:</span>
                  {content.examples.map((ex, i) => (
                     <span key={i} className="px-3 py-1.5 rounded-md bg-black border border-white/10 text-xs text-neutral-400 font-mono">
                        {ex}
                     </span>
                  ))}
               </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
