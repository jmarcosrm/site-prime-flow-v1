
import React, { memo } from 'react';
import { cn } from '../lib/cn';
import { Reveal } from './reveal';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface BentoItem {
  id?: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan: string;
}

interface BentoGridProps {
  items: BentoItem[];
}

// --- High-Fidelity Visual Components (Optimized with Memo) ---

const AutomationVisual = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black opacity-50" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-24 relative flex items-center justify-between px-4">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10" />
          <motion.div 
             className="absolute top-1/2 left-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent w-[30%] will-change-transform"
             animate={{ left: ['-30%', '100%'] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {[1, 2, 3].map((i) => (
            <div key={i} className="relative z-10 flex flex-col items-center gap-2">
               <motion.div 
                 className="w-3 h-3 rounded-full bg-black border border-white/20"
                 animate={{ 
                   borderColor: ['rgba(255,255,255,0.2)', 'rgba(255,122,0,1)', 'rgba(255,255,255,0.2)'],
                 }}
                 transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
               />
               <div className="w-16 h-2 bg-white/5 rounded-full overflow-hidden">
                 <motion.div 
                   className="h-full bg-accent/50 will-change-transform"
                   initial={{ width: 0 }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                 />
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

const AIVisual = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
       <div className="absolute inset-0 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-neutral-900 via-black to-neutral-900 opacity-60" />

       <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
             <motion.div 
               className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 z-10 flex items-center justify-center"
               animate={{ boxShadow: ['0 0 20px rgba(255,122,0,0.1)', '0 0 40px rgba(255,122,0,0.3)', '0 0 20px rgba(255,122,0,0.1)'] }}
               transition={{ duration: 4, repeat: Infinity }}
             >
                <div className="w-2 h-2 bg-accent rounded-full" />
             </motion.div>
             
             {[0, 60, 120, 180, 240, 300].map((deg, i) => (
               <motion.div
                 key={i}
                 className="absolute w-full h-1 will-change-transform"
                 style={{ rotate: deg }}
                 animate={{ rotate: deg + 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: i * -2 }}
               >
                 <div className="w-1.5 h-1.5 rounded-full bg-white/40 absolute right-0 top-0" />
               </motion.div>
             ))}
             
             <motion.div 
                className="absolute inset-0 border border-accent/20 rounded-full will-change-transform"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
             />
          </div>
       </div>
    </div>
  );
});

const IntegrationVisual = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
       <div className="absolute inset-0 bg-neutral-950" />
       
       <div className="absolute inset-0 p-8">
         <svg className="w-full h-full overflow-visible opacity-40">
           <defs>
             <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="transparent" />
               <stop offset="50%" stopColor="var(--accent)" />
               <stop offset="100%" stopColor="transparent" />
             </linearGradient>
           </defs>
           
           <motion.path 
             d="M10,50 Q100,20 200,80 T400,50"
             fill="none"
             stroke="url(#line-gradient)"
             strokeWidth="1"
             strokeDasharray="10 10"
             className="will-change-transform"
             animate={{ strokeDashoffset: [0, -100] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           />
           
           <circle cx="200" cy="80" r="3" fill="var(--accent)" className="shadow-[0_0_10px_var(--accent)]" />
           <circle cx="10" cy="50" r="2" fill="#fff" fillOpacity="0.5" />
           <circle cx="400" cy="50" r="2" fill="#fff" fillOpacity="0.5" />
         </svg>
       </div>
    </div>
  );
});

const DataVisual = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-black" />
      
      <div className="absolute bottom-0 left-0 right-0 h-[60%] px-0 flex items-end">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,100 C50,80 100,90 150,60 S250,40 300,20 S400,30 500,10 L500,150 L0,150 Z"
            fill="url(#chartGradient)"
            className="will-change-transform"
            initial={{ d: "M0,150 C50,150 100,150 150,150 S250,150 300,150 S400,150 500,150 L500,150 L0,150 Z" }}
            animate={{ d: "M0,100 C50,80 100,90 150,60 S250,40 300,20 S400,30 500,10 L500,150 L0,150 Z" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.path
            d="M0,100 C50,80 100,90 150,60 S250,40 300,20 S400,30 500,10"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            className="will-change-transform"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
      </div>
    </div>
  );
});

const GovernanceVisual = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-950" />
      
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-32 h-32 border border-white/10 rounded-lg relative overflow-hidden bg-black/40">
            <div className="p-4 space-y-2 opacity-50">
               <div className="w-full h-2 bg-white/10 rounded-full" />
               <div className="w-[80%] h-2 bg-white/10 rounded-full" />
               <div className="w-[60%] h-2 bg-white/10 rounded-full" />
               <div className="w-[90%] h-2 bg-white/10 rounded-full" />
            </div>
            
            <motion.div 
               className="absolute top-0 left-0 w-full h-1 bg-accent/80 shadow-[0_0_15px_var(--accent)] will-change-transform"
               animate={{ top: ['0%', '100%', '0%'] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
         </div>
      </div>
    </div>
  );
});

const ScaleVisual = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black opacity-30" />
       
       <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-40 mask-image-radial-gradient(circle, black, transparent)">
          {Array.from({ length: 12 }).map((_, i) => (
             <div key={i} className="flex flex-col gap-1">
                {Array.from({ length: 8 }).map((_, j) => (
                   <motion.div 
                      key={j}
                      className="w-2 h-2 rounded-[1px] bg-accent will-change-transform"
                      animate={{ opacity: [0.1, 0.8, 0.1] }}
                      transition={{ 
                        duration: Math.random() * 2 + 1, 
                        repeat: Infinity, 
                        delay: Math.random() * 5 
                      }}
                   />
                ))}
             </div>
          ))}
       </div>
    </div>
  );
});

const VisualMap: Record<string, React.FC> = {
  automation: AutomationVisual,
  ai: AIVisual,
  integration: IntegrationVisual,
  data: DataVisual,
  governance: GovernanceVisual,
  scale: ScaleVisual,
};

export const BentoGrid = memo(({ items }: BentoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(250px,auto)] md:auto-rows-[minmax(280px,auto)]">
      {items.map((item, idx) => {
        const VisualComponent = item.id ? VisualMap[item.id] : null;

        return (
          <React.Fragment key={idx}>
            <Reveal delay={idx * 0.05} className={cn(item.colSpan, "h-full")}>
              <div 
                className="group relative h-full rounded-3xl border border-white/5 bg-[#080808] overflow-hidden flex flex-col justify-end shadow-2xl transition-all duration-500 hover:border-white/10"
              >
                {VisualComponent && <VisualComponent />}
                
                {!VisualComponent && (
                  <div className="absolute inset-0 bg-neutral-900" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent opacity-90 pointer-events-none z-[2]" />

                <div className="relative z-10 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out will-change-transform">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white tracking-tight group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-[95%] group-hover:text-neutral-300 transition-colors">
                    {item.description}
                  </p>
                  
                  <div className="w-full h-[1px] bg-white/10 mt-6 overflow-hidden rounded-full">
                    <div className="w-0 h-full bg-accent group-hover:w-16 transition-all duration-700 ease-out" />
                  </div>
                </div>
              </div>
            </Reveal>
          </React.Fragment>
        );
      })}
    </div>
  );
});
