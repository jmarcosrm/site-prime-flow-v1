import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowRight, CheckCircle2, Workflow, TrendingUp, BrainCircuit, Activity, ShoppingCart, Package, Mail, AlertCircle, MessageSquare, MapPin, Sparkles, Zap } from 'lucide-react';
import { cn } from '../lib/cn';

interface CardProps {
  i: number;
  title: string;
  description: string;
  bullets: string[];
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

interface StackingCardsProps {
  items: {
    title: string;
    description: string;
    bullets: string[];
  }[];
}

// --- 1. Automation Visual: Warehouse/Logistics ---
const AutomationVisual = ({ color }: { color: string }) => {
  return (
    <div className="h-full w-full flex items-center justify-center p-4 md:p-6 bg-black">
      <motion.div 
         className="relative w-full max-w-[400px] h-[200px] md:h-[300px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10"
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
      >
         {/* Main Image */}
         <img 
           src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" 
           alt="Logistics Automation"
           className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
         />
         
         {/* Gradient Overlay for Text Readability */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

         {/* Content */}
         <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full">
            <div className="flex items-center gap-3 mb-3">
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-500/90 backdrop-blur-md flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <Workflow size={18} className="text-white" />
               </div>
               <div className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-[10px] md:text-xs font-bold text-orange-200 uppercase tracking-wider backdrop-blur-md">
                  Fluxo Completo
               </div>
            </div>
            
            <h3 className="text-lg md:text-2xl font-semibold text-white leading-tight">
               Logística & Estoque <br/>
               <span className="text-orange-100/70 font-normal">100% Automatizados.</span>
            </h3>
         </div>
      </motion.div>
    </div>
  );
};

// --- 2. Predictive Visual: Product Trend ---
const PredictiveVisual = ({ color }: { color: string }) => {
  return (
    <div className="h-full w-full flex items-center justify-center p-4 md:p-6 bg-black">
      <motion.div 
         className="relative w-full max-w-[400px] h-[200px] md:h-[300px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10"
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
      >
         {/* Main Image */}
         <img 
           src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" 
           alt="High Demand Product"
           className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
         />
         
         {/* Dramatic Overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent mix-blend-multiply" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

         {/* Content */}
         <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
            <div className="flex justify-between items-end mb-4">
               <div>
                  <div className="flex items-center gap-2 mb-2">
                     <span className="relative flex h-3 w-3">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                     </span>
                     <span className="text-xs md:text-sm font-bold text-blue-300 uppercase tracking-widest shadow-black drop-shadow-md">Alta Demanda</span>
                  </div>
                  <p className="text-xs md:text-sm text-blue-100/80 max-w-[150px] md:max-w-[200px] leading-relaxed">
                     Previsão de estoque para Black Friday.
                  </p>
               </div>
               
               <div className="text-right">
                  <span className="block text-3xl md:text-4xl font-bold text-white tracking-tighter drop-shadow-xl">+15%</span>
               </div>
            </div>

            {/* Progress Bar Visual */}
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
               <motion.div 
                  className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 0.2 }}
               />
            </div>
         </div>
      </motion.div>
    </div>
  );
};

// --- 3. NLP Visual: Customer Success ---
const NLPVisual = ({ color }: { color: string }) => {
  return (
    <div className="h-full w-full flex items-center justify-center p-4 md:p-6 bg-black">
      <motion.div 
         className="relative w-full max-w-[400px] h-[200px] md:h-[300px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10"
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
      >
         {/* Main Image */}
         <img 
           src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
           alt="Happy Customer"
           className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
         />
         
         {/* Purple Tint Overlay */}
         <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

         {/* Content */}
         <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600/90 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 shadow-lg backdrop-blur-md">
               <CheckCircle2 size={12} />
               <span>Resolvido</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 shadow-xl">
               <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                     <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <p className="text-xs text-purple-200 font-bold uppercase">Cliente</p>
                     <p className="text-[10px] text-neutral-400">Via WhatsApp • Agora</p>
                  </div>
               </div>
               <p className="text-white text-sm md:text-base font-medium leading-snug">
                  "A troca foi autorizada automaticamente. Muito rápido, obrigado!"
               </p>
            </div>
         </div>
      </motion.div>
    </div>
  );
};


const Card: React.FC<CardProps> = ({ i, title, description, bullets, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Theme configuration based on index
  const themes = [
    { 
      color: "text-orange-500", 
      bg: "bg-orange-500", 
      border: "group-hover:border-white/[0.15]",
      gradient: "from-orange-500/20 via-orange-500/5 to-transparent",
      icon: Workflow,
      visual: AutomationVisual
    }, 
    { 
      color: "text-blue-500", 
      bg: "bg-blue-500", 
      border: "group-hover:border-white/[0.15]",
      gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
      icon: TrendingUp,
      visual: PredictiveVisual
    },
    { 
      color: "text-purple-500", 
      bg: "bg-purple-500", 
      border: "group-hover:border-white/[0.15]",
      gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
      icon: BrainCircuit,
      visual: NLPVisual
    }
  ];

  const theme = themes[i] || themes[0];
  const Icon = theme.icon;
  const VisualComponent = theme.visual;

  return (
    // Responsive sticky behavior:
    // We use h-[90vh] to ensure the scroll container has space for sticky to work.
    <div ref={container} className="h-[90vh] flex items-center justify-center sticky top-20 md:top-24">
      <motion.div 
        style={{ 
           scale: scale, 
           // Slight offset for the stacking effect
           top: `calc(-5% + ${i * 25}px)` 
        }} 
        className="flex flex-col relative w-full max-w-6xl rounded-[2rem] md:rounded-[2.5rem] border border-white/[0.08] bg-[#000000] p-6 md:p-14 shadow-[0_20px_80px_-20px_rgba(0,0,0,1)] overflow-hidden origin-top group ring-1 ring-white/[0.05]"
      >
        {/* iOS Top Light Highlight (Inner Bevel) */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 pointer-events-none" />
        
        {/* Subtle Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
        
        {/* Ambient Glow */}
        <div className={cn("absolute -top-[20%] -right-[20%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[120px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none", theme.gradient)} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 h-full relative z-10 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
             {/* Chip Badge */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
               <div className={cn("px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono font-bold uppercase tracking-widest backdrop-blur-sm flex items-center gap-2", theme.color)}>
                  <span className={cn("w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]", theme.bg)} />
                  Módulo 0{i + 1}
               </div>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-[1.05] tracking-tight text-white drop-shadow-lg">
              {title}
            </h2>
            <p className="text-base md:text-xl text-[#888888] leading-relaxed mb-8 md:mb-10 max-w-md font-normal tracking-wide">
              {description}
            </p>

            <ul className="space-y-4">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm md:text-lg text-neutral-200">
                  <div className={cn("w-5 h-5 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/[0.05] shrink-0", theme.color)}>
                     <CheckCircle2 size={12} strokeWidth={3} />
                  </div>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-8 md:mt-12 flex items-center gap-6">
               <button className="group/btn flex items-center gap-3 text-white font-medium text-sm hover:text-white/80 transition-colors">
                  <span className="border-b border-white/20 group-hover/btn:border-white pb-0.5 transition-colors">Explorar capacidades</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>

          {/* Right Content (High Fidelity Visual) */}
          <div className="h-[250px] md:h-[350px] lg:h-[500px] w-full relative order-1 lg:order-2">
            {/* The Window Frame */}
            <div className={cn(
              "w-full h-full rounded-[20px] border border-white/[0.08] bg-[#050505] relative overflow-hidden shadow-2xl transition-all duration-700",
              theme.border
            )}>
              
              {/* MacOS style window controls + Status Bar */}
              <div className="absolute top-0 inset-x-0 h-10 md:h-12 border-b border-white/[0.06] bg-white/[0.01] backdrop-blur-md flex items-center px-5 justify-between z-20">
                 <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a] border border-white/5" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a] border border-white/5" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a] border border-white/5" />
                 </div>
                 <div className="flex gap-3">
                    <div className="h-1 w-8 bg-white/10 rounded-full" />
                 </div>
              </div>

              {/* Main Visual Area */}
              <div className="pt-10 md:pt-12 h-full">
                 <VisualComponent color={theme.color} />
              </div>

            </div>
            
            {/* Decorative Elements behind the frame */}
            <div className={cn("absolute -inset-1 opacity-20 blur-2xl -z-10 rounded-full bg-gradient-to-r", theme.gradient)} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const StackingCards = ({ items }: StackingCardsProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={container} className="relative mt-12 md:mt-20">
      {items.map((item, i) => {
        // Calculations for stacking scale effect
        const targetScale = 1 - ((items.length - i) * 0.05);
        return (
          <Card
            key={i}
            i={i}
            {...item}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};