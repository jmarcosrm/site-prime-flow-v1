
import React, { useRef, memo } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { cn } from '../lib/cn';
import { Database, Cpu, Zap } from 'lucide-react';

interface ScrollFeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon: any;
}

const features: ScrollFeatureItem[] = [
  {
    id: 1,
    title: "Ingestão de Dados",
    description: "Conectamos em qualquer fonte: SQL, NoSQL, APIs REST/GraphQL ou arquivos flat. Seus dados são normalizados em tempo real antes de tocar o modelo, garantindo consistência desde o primeiro byte.",
    image: "https://i.im.ge/2024/07/22/VqNew1.data-ingestion.jpeg",
    tags: ["ETL Real-time", "Data Lake", "Sanitização"],
    icon: Database
  },
  {
    id: 2,
    title: "Processamento Neural",
    description: "O núcleo da inteligência. Agentes autônomos analisam o contexto, aplicam regras de negócio complexas e decidem o próximo passo com 99.9% de precisão, aprendendo com exceções.",
    image: "https://i.im.ge/2024/07/22/VqNew2.neural-processing.jpeg",
    tags: ["LLMs", "RAG", "Vector DB"],
    icon: Cpu
  },
  {
    id: 3,
    title: "Ação & Resposta",
    description: "O insight vira ação. O sistema dispara webhooks, atualiza o CRM, envia e-mails ou notifica o time humano apenas quando a confiança é baixa ou a regra exige aprovação.",
    image: "https://i.im.ge/2024/07/22/VqNew3.action-response.jpeg",
    tags: ["Webhooks", "Automação", "API Gateway"],
    icon: Zap
  }
];

interface FeatureProps {
  item: ScrollFeatureItem;
  i: number;
  count: number;
  progress: MotionValue<number>;
}

const FeatureText: React.FC<FeatureProps> = memo(({ item, i, count, progress }) => {
  const step = 1 / count;
  const start = i * step;
  const end = (i + 1) * step;
  const isLast = i === count - 1;
  
  // TEXT TRANSITION LOGIC
  // Goal: Prevent overlap. Text A must fade out before Text B fades in.
  
  // Fade In:
  // Item 0: Immediate.
  // Others: Start exactly at 'start'.
  const fadeInStart = i === 0 ? 0 : start; 
  const fadeInEnd = i === 0 ? 0.1 : start + 0.1;
  
  // Fade Out:
  // If last: Never fade out (stays visible until scroll away).
  // Others: Fade out completely by 'end' to avoid overlap with next start.
  const fadeOutStart = isLast ? 1.0 : end - 0.1;
  const fadeOutEnd = isLast ? 1.0 : end;

  const opacity = useTransform(progress, 
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd], 
    [0, 1, 1, 0]
  );
  
  const y = useTransform(progress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [40, 0, 0, isLast ? 0 : -40]
  );

  const pointerEvents = useTransform(progress, 
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    ['none', 'auto', 'auto', 'none']
  );

  return (
    <motion.div 
      style={{ opacity, y, pointerEvents }}
      className="flex flex-col justify-center max-w-lg relative z-20 h-full py-12"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-accent/30 text-accent bg-accent/5 shadow-[0_0_20px_rgba(255,122,0,0.1)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <item.icon size={24} />
        </div>
        <div className="h-px w-16 bg-gradient-to-r from-accent/50 to-transparent" />
        <span className="font-mono text-accent text-sm tracking-widest uppercase">Passo 0{item.id}</span>
      </div>
      
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
        {item.title}
      </h3>
      
      <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-10 font-light border-l-2 border-white/10 pl-6">
        {item.description}
      </p>
      
      <div className="flex flex-wrap gap-3">
        {item.tags.map(tag => (
          <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 uppercase tracking-wider hover:border-accent/40 transition-colors cursor-default">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
});

const FeatureImage: React.FC<FeatureProps> = memo(({ item, i, count, progress }) => {
  const step = 1 / count;
  const start = i * step;
  const end = (i + 1) * step;
  const isLast = i === count - 1;

  // IMAGE TRANSITION LOGIC
  // Goal: Smooth Crossfade. Backgrounds should blend.
  
  // Fade In:
  // Item 0: Immediate.
  // Others: Start fading in *before* the previous one ends (overlap).
  // Overlap window: +/- 0.1 around the 'start' point.
  const fadeInStart = i === 0 ? 0 : start - 0.1;
  const fadeInEnd = i === 0 ? 0.1 : start + 0.1;
  
  // Fade Out:
  // If last: Stay visible.
  // Others: Fade out *after* the next one has started appearing.
  const fadeOutStart = isLast ? 1.0 : end - 0.1;
  const fadeOutEnd = isLast ? 1.0 : end + 0.1;

  const opacity = useTransform(progress, 
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd], 
    [0, 1, 1, 0]
  );
  
  const scale = useTransform(progress,
    [fadeInStart, fadeOutEnd],
    [1.1, 1]
  );

  return (
    <motion.div 
      style={{ opacity }} 
      className="absolute inset-0 z-10"
    >
        <motion.div style={{ scale }} className="w-full h-full">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
        </motion.div>
        
        {/* Cinematic Gradient Overlays to blend with the container */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-[#0A0A0A]/20 mix-blend-multiply" />
    </motion.div>
  );
});

// --- Main Component ---

export const ScrollFeature = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use 300vh for a comfortable scroll pace (1 screen per feature roughly)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative bg-[#020202]">
      
      {/* MOBILE LAYOUT (Simple Stack) */}
      <div className="md:hidden px-6 py-24 flex flex-col gap-24 relative z-10 border-t border-white/5">
         {features.map((item, i) => (
            <div key={i} className="flex flex-col gap-8">
               <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 relative shadow-2xl group bg-[#0A0A0A]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-xs flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                     {i + 1} / 3
                  </div>
               </div>
               <div>
                  <div className="flex items-center gap-3 mb-4">
                     <item.icon className="text-accent" size={24} />
                     <h3 className="text-3xl font-bold text-white leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-lg text-neutral-400 leading-relaxed mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                     {item.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold text-neutral-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded bg-white/5">
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
         ))}
      </div>

      {/* DESKTOP LAYOUT (Sticky Scrollytelling) */}
      <div className="hidden md:flex h-[300vh] relative">
         <div className="sticky top-0 h-screen w-full flex overflow-hidden bg-[#020202]">
            
            {/* LEFT: Text Area */}
            <div className="w-1/2 relative z-20 flex flex-col justify-center pl-16 lg:pl-24 pr-12">
               {/* Content Stacking */}
               <div className="relative h-[60vh] w-full">
                 {features.map((item, i) => (
                    <div key={i} className="absolute inset-0 flex items-center">
                       <FeatureText item={item} i={i} count={features.length} progress={scrollYProgress} />
                    </div>
                 ))}
               </div>
            </div>

            {/* RIGHT: Visual Area */}
            <div className="w-1/2 h-full relative p-8 lg:p-12 flex items-center justify-center">
               <div className="w-full h-[80vh] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#050505] relative shadow-2xl">
                   
                   {/* 1. Persistent Dashboard Background (Grid & UI) */}
                   <div className="absolute inset-0 z-0">
                      {/* Grid */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px]" />
                      
                      {/* Central Loader (Visible when no image is dominant) */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                         <div className="w-64 h-64 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
                         <div className="absolute top-0 left-0 w-64 h-64 rounded-full border border-t-accent/20 border-r-transparent border-b-transparent border-l-transparent animate-[spin_3s_linear_infinite]" />
                      </div>
                   </div>

                   {/* 2. HUD / Decorative Elements */}
                   <div className="absolute top-8 left-8 right-8 flex justify-between z-30">
                      <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                         <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                         <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                         <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                         <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                            System Active
                         </span>
                      </div>
                   </div>

                   {/* 3. Scanlines Overlay (Always on top) */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-30" />
                   
                   {/* 4. Images Layer */}
                   {features.map((item, i) => (
                      <FeatureImage key={i} item={item} i={i} count={features.length} progress={scrollYProgress} />
                   ))}
                   
                   {/* 5. Bottom Metadata */}
                   <div className="absolute bottom-8 left-8 z-30 flex items-center gap-4 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      <div className="flex flex-col">
                        <span className="text-neutral-700">CPU Load</span>
                        <span className="text-neutral-300">12%</span>
                      </div>
                      <div className="w-px h-6 bg-white/10" />
                      <div className="flex flex-col">
                        <span className="text-neutral-700">Memory</span>
                        <span className="text-neutral-300">4.2GB</span>
                      </div>
                      <div className="w-px h-6 bg-white/10" />
                      <div className="flex flex-col">
                        <span className="text-neutral-700">Status</span>
                        <span className="text-accent">Processo em execução</span>
                      </div>
                   </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
