
import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, Activity, AlertOctagon, Zap } from 'lucide-react';
import { comparison } from '../lib/data';
import { motion } from 'framer-motion';
import { cn } from '../lib/cn';

export const Comparison = () => {
  return (
    <div className="relative rounded-[2.5rem] border border-white/10 bg-black overflow-hidden shadow-2xl group">
      
      {/* Global Background Noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
        
        {/* --- LEFT SIDE: LEGACY / CHAOS --- */}
        <div className="p-8 md:p-16 relative border-b md:border-b-0 md:border-r border-white/5 bg-black">
          {/* Subtle Error Gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900/50 to-transparent opacity-50" />
          
          <div className="flex items-center gap-3 mb-12 opacity-60">
             <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/30 border border-red-900/30 text-[10px] font-mono font-bold uppercase tracking-widest text-red-500/80">
                <AlertOctagon size={12} />
                Legacy System
             </div>
          </div>
          
          <ul className="space-y-6">
            {comparison.before.map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group/item relative p-6 rounded-2xl bg-black border border-white/5 flex items-center gap-4 transition-all duration-300 hover:bg-red-950/10 hover:border-red-900/20"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0 border border-white/5 group-hover/item:border-red-900/30 transition-colors">
                   <XCircle size={18} className="text-neutral-600 group-hover/item:text-red-500 transition-colors" />
                </div>
                
                {/* Text */}
                <span className="text-lg font-medium text-neutral-500 decoration-neutral-800 line-through decoration-1 group-hover/item:text-red-400/60 transition-colors">
                  {item}
                </span>

                {/* Connection Line (Desktop only) */}
                <div className="hidden md:block absolute -right-[33px] top-1/2 -translate-y-1/2 w-8 h-[1px] bg-white/5 z-0" />
                <div className="hidden md:block absolute -right-[35px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#111] border border-white/10 z-10" />
              </motion.li>
            ))}
          </ul>
        </div>


        {/* --- CENTRAL DIVIDER (The Processor) --- */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 z-20">
           <div className="absolute inset-0 bg-white/5" />
           {/* Animated Beam */}
           <motion.div 
             className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_15px_var(--accent)]"
             animate={{ top: ['-20%', '120%'] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           />
           
           {/* Central Badge */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-xl bg-black border border-accent/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,122,0,0.15)] relative overflow-hidden">
                 <div className="absolute inset-0 bg-accent/10 animate-pulse" />
                 <ArrowRight size={16} className="text-accent relative z-10" />
              </div>
           </div>
        </div>


        {/* --- RIGHT SIDE: TRANSFORMED / FUTURE --- */}
        <div className="p-8 md:p-16 relative bg-gradient-to-br from-black to-black">
          {/* Active Status Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-accent opacity-50" />
          
          <div className="flex items-center justify-end gap-3 mb-12">
             <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                System Optimized
             </div>
          </div>
          
          <ul className="space-y-6">
            {comparison.after.map((item, idx) => (
              <motion.li 
                key={idx} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="group/item relative p-6 rounded-2xl bg-black border border-white/10 flex items-center gap-4 transition-all duration-500 hover:border-accent/40 hover:bg-accent/[0.02] hover:shadow-[0_0_30px_-10px_rgba(255,122,0,0.1)] hover:-translate-y-1"
              >
                {/* Glowing Backdrop on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Icon */}
                <div className="relative z-10 w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,122,0,0.4)] group-hover/item:scale-110 transition-transform duration-300">
                   <CheckCircle2 size={18} className="text-white" strokeWidth={2.5} />
                </div>
                
                {/* Text */}
                <div className="relative z-10">
                   <span className="text-lg font-bold text-white tracking-wide block">
                     {item}
                   </span>
                   {/* Optional Subtext line simulating data */}
                   <div className="h-0.5 w-0 bg-accent/50 mt-1 group-hover/item:w-12 transition-all duration-500" />
                </div>

                {/* Connection Line (Desktop only) */}
                <div className="hidden md:block absolute -left-[35px] top-1/2 -translate-y-1/2 w-8 h-[1px] bg-accent/20 z-0 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                <div className="hidden md:block absolute -left-[37px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent z-10 opacity-0 group-hover/item:opacity-100 transition-opacity shadow-[0_0_10px_var(--accent)]" />
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};
