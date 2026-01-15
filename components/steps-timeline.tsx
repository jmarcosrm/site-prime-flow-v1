
import React from 'react';
import { Reveal } from './reveal';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/cn';

interface Step {
  id?: number | string;
  title: string;
  text?: string;
  desc?: string;
  step?: string;
  icon?: LucideIcon;
  image?: string;
}

interface StepsTimelineProps {
  steps: Step[];
  layout?: 'horizontal' | 'vertical';
}

export const StepsTimeline = ({ steps, layout = 'horizontal' }: StepsTimelineProps) => {
  if (layout === 'vertical') {
    return (
      <div className="relative max-w-5xl mx-auto px-4 md:px-0">
        {/* Central Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        
        {/* Left Line (Mobile) */}
        <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="space-y-16 md:space-y-32">
          {steps.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center group",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                
                {/* Node/Marker */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                   {/* Glow effect behind */}
                   <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0A0A0A] border border-white/10 group-hover:border-accent transition-all duration-300 flex items-center justify-center shadow-2xl relative z-10">
                      {item.icon ? (
                         <item.icon size={24} className="text-neutral-500 group-hover:text-accent transition-colors duration-300" />
                      ) : (
                         <span className="text-sm font-bold text-neutral-500 group-hover:text-accent">{item.step}</span>
                      )}
                   </div>
                </div>

                {/* Content Card */}
                <div className={cn(
                   "w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0", // Mobile padding vs Desktop width
                   isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                )}>
                   <Reveal width="100%" delay={idx * 0.1}>
                      <div className={cn(
                         "flex flex-col gap-4",
                         isEven ? "md:items-end" : "md:items-start"
                      )}>
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-accent uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            {item.step || `Step 0${idx+1}`}
                         </div>
                         
                         <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                            {item.title}
                         </h3>
                         
                         <p className="text-neutral-400 leading-relaxed text-sm md:text-lg">
                            {item.desc || item.text}
                         </p>
                      </div>
                   </Reveal>
                </div>
                
                {/* Empty Spacer for the other side */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />

              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Horizontal "Pipeline" Layout (Home) with Images
  return (
    <div className="relative pt-12 pb-8">
      {/* Background Connector Line Container */}
      <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[1px] bg-white/10 overflow-hidden z-0">
        {/* Animated Beam Effect */}
        <motion.div 
          className="absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-transparent via-accent to-transparent blur-[1px]"
          animate={{ left: ['-20%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, idx) => {
          return (
            <React.Fragment key={idx}>
              <Reveal delay={idx * 0.2}>
                <div className="group relative flex flex-col items-center">
                  
                  {/* Step Marker on the Line */}
                  <div className="relative mb-8 z-10">
                     {/* Halo */}
                     <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     <div className="w-6 h-6 rounded-full bg-neutral-900 border-2 border-white/20 group-hover:border-accent group-hover:bg-accent transition-all duration-300 shadow-xl flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                     
                     {/* Number Badge floating above */}
                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted group-hover:text-accent transition-colors">
                        0{idx + 1}
                     </div>
                  </div>

                  {/* Image Card */}
                  <div className="w-full relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] transition-all duration-500 group-hover:border-accent/30 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                    
                    {/* Image Area - Increased Height & Removed Grayscale */}
                    {step.image && (
                      <div className="h-64 md:h-80 w-full overflow-hidden relative border-b border-white/5">
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 mix-blend-overlay" />
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Content Area */}
                    <div className="p-8 text-center">
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                      {/* Added min-h-[3rem] (approx 2 lines) to enforce vertical alignment */}
                      <p className="text-base text-neutral-400 leading-relaxed mx-auto min-h-[3rem]">
                        {step.text || step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Connector */}
                  {idx !== steps.length - 1 && (
                    <div className="md:hidden w-[1px] h-12 bg-gradient-to-b from-white/10 to-transparent my-6" />
                  )}
                </div>
              </Reveal>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
