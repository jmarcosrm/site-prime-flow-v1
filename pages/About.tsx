
import React, { useState, useEffect, useRef } from 'react';
import { Section, SectionHeading } from '../components/section';
import { Reveal } from '../components/reveal';
import { StepsTimeline } from '../components/steps-timeline';
import { PillarsCarousel } from '../components/pillars-carousel';
import { methodology, team, values } from '../lib/data';
import { User, Target, ArrowRight, Quote, CheckCircle2, Linkedin } from 'lucide-react';
import { OptimizedImage } from '../components/ui/optimized-image';
import { motion } from 'framer-motion';

// Hero Images specifically for About Us context
const heroImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2600&auto=format&fit=crop", // Team collaboration
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2600&auto=format&fit=crop", // Strategy meeting
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop"  // Modern office
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentBg, setCurrentBg] = useState(0);

  // PERFORMANCE FIX: Use Ref for mouse movement
  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking && heroRef.current) {
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
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* --- HERO SECTION (PREMIUM & DYNAMIC) --- */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] md:min-h-[85vh] flex flex-col justify-start pt-48 pb-20 md:pt-80 md:pb-32 px-4 md:px-10 overflow-hidden rounded-b-[2.5rem] md:rounded-b-[5rem] border-b border-white/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] z-20 bg-black [--mouse-x:50%] [--mouse-y:50%]"
      >
        
        {/* 1. Background Layers */}
        <div className="absolute inset-0 z-0 bg-black">
           
           {/* IMAGE SLIDER LAYER */}
           {heroImages.map((img, index) => (
             <div 
               key={index}
               className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${index === currentBg ? 'opacity-60' : 'opacity-0'}`}
             >
               <OptimizedImage 
                  src={img} 
                  alt="Background" 
                  className="w-full h-full object-cover grayscale mix-blend-luminosity"
                  priority={index === 0}
               />
             </div>
           ))}

           <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />

           {/* Floating Ambient Orbs */}
           <motion.div 
             className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen will-change-transform"
             animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           />
           <motion.div 
             className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/10 rounded-full blur-[100px] md:blur-[150px] mix-blend-screen will-change-transform"
             animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
           />

           {/* Grain Overlay */}
           <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

           {/* 3D Perspective Grid */}
           <div 
             className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none mix-blend-overlay"
             style={{ perspective: '1000px' }}
           >
              <div 
                className="absolute inset-0 opacity-30 transition-opacity duration-200 will-change-transform"
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

        {/* 2. Content - Refined Copy */}
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
                <Target size={12} className="mr-2 md:mr-3 text-accent fill-accent" />
                Nossa Essência
              </div>
            </motion.div>
          </Reveal>
          
          <Reveal width="100%" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1] relative text-white drop-shadow-2xl text-left max-w-[90vw]">
              Engenharia de elite <br className="hidden md:block" />
              para problemas <br className="md:hidden" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60">
                complexos.
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
              Não somos apenas desenvolvedores. Somos parceiros estratégicos que usam tecnologia para criar <span className="text-white font-normal">vantagem competitiva real</span> e mensurável.
            </p>
          </Reveal>

          <Reveal width="100%" delay={0.3}>
            <button 
              onClick={() => document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-accent transition-colors group"
            >
               Ler nosso manifesto
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* --- MANIFESTO SECTION (REPLACED MISSION/VISION) --- */}
      <Section id="manifesto">
         <div className="relative rounded-[3rem] bg-black border border-white/10 p-8 md:p-16 overflow-hidden group">
            
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
               <div className="lg:col-span-5">
                  <Reveal>
                     <div className="inline-flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                            <Quote size={20} className="text-accent fill-accent" />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest text-neutral-400">Manifesto</span>
                     </div>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                        Acreditamos que a IA não substitui o humano. <br/>
                        <span className="text-neutral-500">Ela o liberta.</span>
                     </h2>
                     <div className="w-20 h-1 bg-accent/50 mb-8 rounded-full" />
                     <p className="text-lg text-neutral-400 leading-relaxed font-light">
                        No mercado atual, "IA" virou sinônimo de mágica ou hype. Para nós, é engenharia pura. 
                        Nosso propósito é desmistificar a tecnologia e aplicá-la onde ela realmente importa: 
                        eliminando o trabalho repetitivo para que seu time possa focar no estratégico.
                     </p>
                  </Reveal>
               </div>

               <div className="lg:col-span-1 hidden lg:flex justify-center h-full">
                  <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
               </div>

               <div className="lg:col-span-6 space-y-10 pl-0 lg:pl-8">
                  <Reveal delay={0.1}>
                     <div className="flex gap-6 group/item">
                        <div className="mt-1 flex-shrink-0">
                           <div className="w-14 h-14 rounded-full bg-[#0F0F0F] border border-white/10 flex items-center justify-center text-blue-500 group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/10 transition-all duration-300 shadow-lg">
                              <Target size={24} />
                           </div>
                        </div>
                        <div>
                           <h3 className="text-2xl font-bold text-white mb-3 group-hover/item:text-blue-400 transition-colors">Visão de Futuro</h3>
                           <p className="text-neutral-400 leading-relaxed text-base">
                              Construir operações autônomas onde dados fluem sem atrito, permitindo que empresas escalem 10x sem aumentar o headcount operacional na mesma proporção.
                           </p>
                        </div>
                     </div>
                  </Reveal>

                  <Reveal delay={0.2}>
                     <div className="flex gap-6 group/item">
                        <div className="mt-1 flex-shrink-0">
                           <div className="w-14 h-14 rounded-full bg-[#0F0F0F] border border-white/10 flex items-center justify-center text-accent group-hover/item:border-accent/50 group-hover/item:bg-accent/10 transition-all duration-300 shadow-lg">
                              <CheckCircle2 size={24} />
                           </div>
                        </div>
                        <div>
                           <h3 className="text-2xl font-bold text-white mb-3 group-hover/item:text-accent transition-colors">Compromisso Prático</h3>
                           <p className="text-neutral-400 leading-relaxed text-base">
                              Entregamos código, não slides. Nossas soluções são desenhadas para durar, com governança, segurança e documentação desde o dia um.
                           </p>
                        </div>
                     </div>
                  </Reveal>
               </div>
            </div>
         </div>
         
         <div className="mt-24">
            <SectionHeading 
               title="Nossos Pilares" 
               description="Os princípios inegociáveis que guiam cada decisão técnica e estratégica."
            />
            {/* Replaced FeatureGrid with PillarsCarousel */}
            <PillarsCarousel items={values} />
         </div>
      </Section>

      {/* Methodology - Vertical Timeline */}
      <Section id="metodologia" className="bg-black border-y border-white/5">
        <SectionHeading 
          title="Como trabalhamos"
          description="Um processo estruturado para mitigar riscos e acelerar valor."
        />
        <StepsTimeline steps={methodology} layout="vertical" />
      </Section>

      {/* Team - Premium Cards */}
      <Section>
        <SectionHeading title="Liderança Técnica" description="Quem está por trás da estratégia." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <React.Fragment key={idx}>
              <Reveal delay={idx * 0.1} className="h-full">
                <div className="group relative h-full bg-neutral-900/50 rounded-3xl border border-white/10 overflow-hidden hover:border-accent/40 transition-all duration-500 hover:-translate-y-2">
                   
                   {/* Gradient Background */}
                   <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <div className="p-8 flex flex-col h-full relative z-10">
                      <div className="flex items-center justify-between mb-8">
                         <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center overflow-hidden">
                            <User size={32} className="text-neutral-500" />
                         </div>
                         <div className="p-2 rounded-full border border-white/10 text-neutral-500 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                            <Linkedin size={18} />
                         </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{member.role}</h3>
                      <p className="text-xs font-mono text-accent uppercase tracking-wider mb-6 opacity-80">Leadership Team</p>
                      
                      <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow border-t border-white/5 pt-6">
                         {member.desc}
                      </p>
                   </div>
                </div>
              </Reveal>
            </React.Fragment>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
