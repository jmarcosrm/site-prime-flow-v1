
import React, { useRef, useState, useEffect } from 'react';
import { Section, SectionHeading } from '../components/section';
import { TabsSolutions } from '../components/tabs-solutions';
import { Comparison } from '../components/comparison';
import { Reveal } from '../components/reveal';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import Icon from '../components/Icon';
import { sectors, securitySpecs } from '../lib/data';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../lib/cn';
import { OptimizedImage } from '../components/ui/optimized-image';

const heroImages = [
  "https://i.im.ge/2026/01/15/Gjsf6m.Generated-Image-January-14-2026-11-32PM.jpeg",
  "https://i.im.ge/2026/01/15/G9CPYK.Generated-Image-January-14-2026-4-14PM-1.jpeg",
  "https://i.im.ge/2026/01/15/Gja7rY.Generated-Image-January-14-2026-4-18PM.jpeg"
];

const Solutions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentBg, setCurrentBg] = useState(0);

  // PERFORMANCE FIX: Use Ref for mouse movement to prevent re-renders
  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if(!ticking && heroRef.current) {
        window.requestAnimationFrame(() => {
          if (heroRef.current) {
            heroRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
            heroRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    if (window.matchMedia("(min-width: 768px)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const starsY = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
       
       {/* --- DYNAMIC BACKGROUND SYSTEM (Global) --- */}
       <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-black" />
          <motion.div style={{ y: starsY }} className="absolute inset-0 opacity-40 will-change-transform">
             <div className="absolute top-0 left-0 w-full h-[200vh] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          </motion.div>
       </div>

       {/* --- HERO SECTION --- */}
       <section 
        ref={heroRef}
        className="relative min-h-[90vh] md:min-h-[95vh] flex flex-col justify-start pt-48 pb-20 md:pt-80 md:pb-32 px-4 md:px-10 overflow-hidden rounded-b-[2.5rem] md:rounded-b-[5rem] border-b border-white/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] z-20 bg-black [--mouse-x:50%] [--mouse-y:50%]"
      >
        
        {/* 1. Background Layers */}
        <div className="absolute inset-0 z-0 bg-black">
           
           {/* IMAGE SLIDESHOW LAYER WITH OPTIMIZED COMPONENTS */}
           {heroImages.map((img, index) => (
             <div 
               key={index}
               className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out bg-black ${index === currentBg ? 'opacity-70' : 'opacity-0'}`}
             >
               <OptimizedImage 
                  src={img}
                  alt="Solutions Background"
                  className="w-full h-full object-cover"
                  priority={index === 0}
               />
             </div>
           ))}

           <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

           {/* Floating Ambient Orbs */}
           <motion.div 
             className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen will-change-transform"
             animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           />
           <motion.div 
             className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/10 rounded-full blur-[100px] md:blur-[150px] mix-blend-screen will-change-transform"
             animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
           />

           {/* Grain Overlay */}
           <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

           {/* 3D Perspective Grid */}
           <div 
             className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none mix-blend-overlay"
             style={{ perspective: '1000px' }}
           >
              <div 
                className="absolute inset-0 opacity-40 transition-opacity duration-200 will-change-transform"
                style={{ 
                   backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
                   backgroundSize: '60px 60px',
                   transform: 'rotateX(60deg) scale(2.5) translateY(-100px)',
                   transformOrigin: 'top center',
                   height: '200%',
                   maskImage: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), black, transparent)`,
                   WebkitMaskImage: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), black, transparent)`,
                }} 
              />
           </div>

           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" />
        </div>

        {/* 2. Content */}
        <div className="relative z-20 w-full">
          
          <Reveal width="100%" className="flex justify-start mb-6 md:mb-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative inline-flex overflow-hidden rounded-full p-[1px]"
            >
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,var(--accent)_50%,#000000_100%)]" />
              <div className="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-[#050505]/80 px-4 py-1.5 md:px-6 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-300 backdrop-blur-3xl border border-white/5 shadow-2xl transition-colors group-hover:text-white">
                <Zap size={12} className="mr-2 md:mr-3 text-accent fill-accent" />
                Arquitetura Modular
              </div>
            </motion.div>
          </Reveal>
          
          <Reveal width="100%" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1] relative text-white drop-shadow-2xl text-left max-w-[90vw]">
              Sistemas que <br className="hidden md:block" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60">
                evoluem.
                <motion.div 
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[4px] md:h-[6px] bg-accent/80 rounded-full blur-[8px]"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 0.6 }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                />
              </span>
            </h1>
          </Reveal>
          
          <Reveal width="100%" delay={0.2}>
            <p className="text-base sm:text-lg md:text-2xl text-neutral-300 max-w-3xl mb-10 md:mb-16 leading-relaxed font-light drop-shadow-lg text-left">
              Não entregamos caixas pretas. Entregamos uma <span className="text-white font-normal">arquitetura viva</span>, auditável e desenhada para escalar junto com sua operação.
            </p>
          </Reveal>

          <Reveal width="100%" delay={0.3}>
            <div className="flex items-center justify-start">
               <button 
                onClick={() => document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-5 overflow-hidden rounded-full bg-white/5 border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(255,122,0,0.15)] hover:bg-black/40"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="relative z-10 flex items-center gap-3 md:gap-4 text-base md:text-lg font-bold text-white tracking-wide">
                  Explorar módulos
                  <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                     <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </span>
              </button>
            </div>
          </Reveal>

        </div>
      </section>

      {/* --- TABS / MODULES SECTION --- */}
      <section id="modulos" className="relative z-10 py-32 px-4 md:px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
           <SectionHeading 
              eyebrow="Capacidades"
              title="Explore os módulos"
              description="Cada componente funciona de forma independente ou orquestrada."
           />
          <Reveal width="100%">
            <TabsSolutions />
          </Reveal>
        </div>
      </section>

      {/* --- SECTORS --- */}
      <section className="relative z-10 py-24 bg-black">
         <div className="container mx-auto max-w-6xl px-6">
            <SectionHeading 
               title="Adaptável ao seu vertical"
               description="Modelos pré-treinados para contextos específicos, reduzindo tempo de setup."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {sectors.map((sector, idx) => (
                  <React.Fragment key={idx}>
                    <Reveal delay={idx * 0.1} className="h-full">
                       <div className="group relative p-8 rounded-3xl bg-black border border-white/10 hover:border-accent/40 transition-all duration-500 overflow-hidden h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,122,0,0.1)]">
                          
                          {/* Background Image Fade In on Hover */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                             <OptimizedImage 
                                src={`https://source.unsplash.com/random/800x600?${sector.title.split(' ')[0]}&auto=format&fit=crop&q=80&w=800`} 
                                className="w-full h-full object-cover grayscale" 
                                alt={sector.title} 
                             />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent group-hover:from-black/90 group-hover:to-black/80 transition-all duration-500" />
                          
                          <div className="relative z-10 flex flex-col h-full">
                             <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 text-neutral-400 shadow-lg">
                                <Icon name={sector.icon} size={28} strokeWidth={1.5} />
                             </div>
                             
                             <h3 className="text-2xl font-bold text-white mb-4">{sector.title}</h3>
                             <p className="text-neutral-400 text-sm leading-relaxed flex-grow">{sector.desc}</p>
                             
                             <div className="mt-8 flex items-center text-accent text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                Ver cases <ArrowRight size={14} className="ml-2" />
                             </div>
                          </div>
                       </div>
                    </Reveal>
                  </React.Fragment>
               ))}
               
               {/* CTA Card for Sectors */}
               <Reveal delay={sectors.length * 0.1}>
                  <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 hover:border-accent transition-all duration-300 overflow-hidden h-full flex flex-col justify-center items-center text-center cursor-pointer">
                     <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 animate-pulse">
                        <ArrowRight size={32} className="text-accent" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">Sua indústria não está aqui?</h3>
                     <p className="text-neutral-300 text-sm mb-6 max-w-xs">Nossa arquitetura é agnóstica. Agende uma conversa para entender a aderência.</p>
                     <span className="px-6 py-3 rounded-full bg-accent text-white font-bold text-sm shadow-lg hover:bg-accent/80 transition-colors">
                        Falar com consultor
                     </span>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* --- SECURITY SECTION --- */}
      <section className="relative z-10 py-12 md:py-24 px-2 md:px-6 bg-black">
         <div className="relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden min-h-[700px] border border-white/10 shadow-2xl group flex items-center">
            
            <div className="absolute inset-0">
               <OptimizedImage 
                  src="https://i.im.ge/2026/01/15/GjFj4M.Generated-Image-January-14-2026-10-27PM.jpeg" 
                  alt="Security Architecture" 
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent opacity-100" />
               <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
               <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-20 w-full h-full">
               <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center">
                  
                  {/* Left Column */}
                  <div className="py-12 md:py-20">
                     <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-accent uppercase tracking-widest mb-6 backdrop-blur-md">
                           <ShieldCheck size={12} />
                           <span>Security First</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
                           Blindagem <br/> 
                           <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Nativa e Invisível.</span>
                        </h2>
                        <p className="text-lg text-neutral-300 leading-relaxed mb-12 max-w-xl font-light">
                           A segurança não é um módulo adicional. É o alicerce. Cada byte processado é auditado, isolado e criptografado por padrão.
                        </p>
                     </Reveal>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                        {securitySpecs.map((spec, idx) => (
                           <React.Fragment key={idx}>
                             <Reveal delay={0.2 + (idx * 0.1)} width="100%">
                                <div className="p-6 rounded-2xl bg-black backdrop-blur-md border border-white/10 hover:border-accent/40 transition-all duration-300 group/card">
                                   <div className="flex items-center gap-3 mb-3">
                                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/card:bg-accent group-hover/card:text-white transition-colors duration-300">
                                         <Icon name={spec.icon} size={16} className="text-neutral-300 group-hover/card:text-white" />
                                      </div>
                                      <h4 className="text-white font-bold text-sm">{spec.title}</h4>
                                   </div>
                                   <p className="text-xs text-neutral-400 leading-relaxed">{spec.desc}</p>
                                </div>
                             </Reveal>
                           </React.Fragment>
                        ))}
                     </div>
                  </div>

                  <div className="hidden lg:block"></div>

               </div>
            </div>

         </div>
      </section>

      {/* --- COMPARISON SECTION --- */}
      <section className="relative z-10 py-24 md:py-32 bg-black">
        <div className="container mx-auto max-w-6xl px-6">
          <SectionHeading 
            eyebrow="ROI Tangível"
            title="O impacto da mudança"
            description="A diferença entre operações tradicionais e operações augmentadas por IA."
          />
          <Reveal width="100%">
            <Comparison />
          </Reveal>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="relative z-10 pb-12 px-2 md:px-4 bg-black">
        <Reveal width="100%">
          <div className="relative w-full min-h-[500px] md:min-h-[600px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl group bg-neutral-900">
            
            {/* 1. Background Image */}
            <div className="absolute inset-0">
               <OptimizedImage
                  src="https://i.im.ge/2026/01/15/GmK9KF.Generated-Image-January-15-2026-2-01PM-1.jpeg"
                  alt="CTA Background"
                  className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
               />
               
               {/* 2. Gradient Overlay - Darker on right for text readability */}
               <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-black/90" />
               <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
            </div>

            {/* 3. Content - Aligned Right */}
            <div className="relative z-20 h-full flex flex-col justify-center items-end p-8 md:p-16 lg:p-24 w-full min-h-[500px] md:min-h-[600px]">
               <div className="max-w-xl w-full text-left md:text-left">
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-accent uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg">
                     <Sparkles size={12} className="fill-accent" />
                     <span>Próximo Passo</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
                    Quer combinar <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">módulos?</span>
                  </h2>

                  <p className="text-lg text-neutral-300 leading-relaxed mb-10 font-light">
                    Desenhamos a solução por processo, dados e impacto. Agende uma sessão de diagnóstico sem compromisso.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                     <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
                        Solicitar demo
                        <Sparkles size={16} />
                      </button>
                      <Link to="/sobre" className="px-8 py-4 bg-transparent border border-white/10 text-white rounded-full font-semibold hover:bg-white/5 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                        Ver metodologia <ArrowRight className="w-4 h-4" />
                      </Link>
                  </div>
               </div>
            </div>

          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Solutions;
