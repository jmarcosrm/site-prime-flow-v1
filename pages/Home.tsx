
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { Section, SectionHeading } from '../components/section';
import { Marquee } from '../components/marquee';
import { BentoGrid } from '../components/bento-grid';
import { StackingCards } from '../components/stacking-cards';
import { StepsTimeline } from '../components/steps-timeline';
import { StatsStrip } from '../components/stats-strip';
import { Testimonials3D } from '../components/testimonials-3d'; 
import { FAQAccordion } from '../components/faq-accordion';
import { Reveal } from '../components/reveal';
import { CtaSection } from '../components/cta-section';
import { DashboardPreview } from '../components/dashboard-preview';
import { OptimizedImage } from '../components/ui/optimized-image';
import { 
  integrations, 
  bentoItems, 
  solutionsCarouselItems, 
  stepsHome, 
  stats, 
  faqs 
} from '../lib/data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Hero Background Images
const heroImages = [
  "https://i.im.ge/2026/01/15/G9Ey00.Generated-Image-January-14-2026-4-31PM.jpeg"
];

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Memoize data slices to prevent re-calculation on render
  const firstRow = integrations.slice(0, Math.ceil(integrations.length / 2));
  const secondRow = integrations.slice(Math.ceil(integrations.length / 2));

  const [currentBg, setCurrentBg] = useState(0);

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
    
    // Enable mouse move effect on desktop only for performance
    if (window.matchMedia("(min-width: 768px)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* --- HERO SECTION --- */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] md:min-h-[95vh] flex flex-col justify-center md:justify-start pt-24 pb-20 md:pt-80 md:pb-32 px-4 md:px-10 overflow-hidden rounded-b-[2.5rem] md:rounded-b-[5rem] border-b border-white/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] z-20 bg-black [--mouse-x:50%] [--mouse-y:50%]"
      >
        
        {/* 1. Background Layers */}
        <div className="absolute inset-0 z-0 bg-black">
           
           {/* IMAGE SLIDER LAYER */}
           {heroImages.map((img, index) => (
             <div 
               key={index}
               className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${index === currentBg ? 'opacity-80' : 'opacity-0'}`}
             >
               <OptimizedImage 
                  src={img} 
                  alt="Hero Background" 
                  className="w-full h-full object-cover"
                  priority={index === 0} 
               />
             </div>
           ))}

           <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

           {/* Floating Ambient Orbs */}
           <motion.div 
             className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen will-change-transform"
             animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           />
           <motion.div 
             className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[150px] mix-blend-screen will-change-transform"
             animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
           />

           {/* Grain Overlay */}
           <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

           {/* 3D Perspective Grid - NOW ENABLED ON MOBILE (Removed hidden md:block) */}
           {/* Adjusted scale for mobile to avoid extreme distortion */}
           <div 
             className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-overlay"
             style={{ perspective: '1000px' }}
           >
              <div 
                className="absolute inset-0 opacity-30 md:opacity-40 transition-opacity duration-200 will-change-transform"
                style={{ 
                   backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
                   backgroundSize: '60px 60px',
                   /* Mobile-friendly transform: less rotation, less scale */
                   transform: 'rotateX(60deg) scale(1.5) md:scale(2.5) translateY(-50px) md:translateY(-100px)',
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
                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 md:mr-3 animate-pulse shadow-[0_0_12px_var(--accent)]" />
                Automação + IA Aplicada
              </div>
            </motion.div>
          </Reveal>
          
          <Reveal width="100%" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1] relative text-white drop-shadow-2xl text-left max-w-[90vw]">
              Transforme operação <br className="hidden md:block" />
              em <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60">
                resultado
                <motion.div 
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[4px] md:h-[6px] bg-accent/80 rounded-full blur-[8px]"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 0.6 }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                />
              </span>
              <br />
              <span className="font-light text-neutral-300">
                com IA de verdade.
              </span>
            </h1>
          </Reveal>

          <Reveal width="100%" delay={0.2}>
            <p className="text-lg sm:text-lg md:text-2xl text-neutral-300 max-w-3xl mb-10 md:mb-16 leading-relaxed font-light drop-shadow-lg text-left">
              Integramos sistemas, automatizamos processos e colocamos dados para trabalhar. <span className="text-white font-normal">Da estratégia ao deploy</span>, com governança absoluta.
            </p>
          </Reveal>

          <Reveal width="100%" delay={0.3}>
            <div className="flex items-center justify-start">
              <Link 
                to="/solucoes" 
                className="group relative inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-5 overflow-hidden rounded-full bg-white/5 border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(255,122,0,0.15)] hover:bg-black/40 w-full md:w-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4 text-base md:text-lg font-bold text-white tracking-wide">
                  Ver soluções
                  <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                     <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bento Grid */}
      <Section id="entregas">
        <SectionHeading 
          title="Entrega completa, do diagnóstico ao valor em produção"
          description="Não vendemos apenas software. Entregamos a transformação operacional que seu negócio precisa."
        />
        <BentoGrid items={bentoItems} />
      </Section>

      {/* Stacking Cards */}
      <section className="py-24 bg-black/20 overflow-visible">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 mb-12">
          <SectionHeading 
            title="Três soluções centrais, combináveis" 
            description="Role para descobrir como cada frente acelera sua operação."
          />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <StackingCards items={solutionsCarouselItems} />
        </div>
      </section>

      {/* Dashboard Preview - ENABLED ON MOBILE */}
      {/* Removed the 'hidden md:block' wrapper */}
      <DashboardPreview />

      {/* Marquee Section */}
      <div className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-20 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl mb-12 px-6 text-center relative z-10">
          <Reveal width="100%">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-accent" />
              <span className="text-sm font-bold text-accent uppercase tracking-widest">Ecosistema Conectado</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Conecta com o que você já usa — <span className="text-muted">sem fricção.</span>
            </h2>
          </Reveal>
        </div>

        <div className="container mx-auto max-w-5xl px-0 md:px-6 relative z-10">
           <div className="flex flex-col gap-6">
            <Reveal width="100%" delay={0.1}>
              <Marquee items={firstRow} />
            </Reveal>
            <Reveal width="100%" delay={0.2}>
              <Marquee items={secondRow} reverse />
            </Reveal>
           </div>
        </div>
      </div>

      {/* Unified Timeline & Impact Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-accent/5 to-black opacity-50 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="Do diagnóstico ao deploy, com controle"
            eyebrow="Como funciona"
            description="Projetos típicos: 2 a 8 semanas, variando por escopo e integrações."
          />
          
          <StepsTimeline steps={stepsHome} />
          
          <div className="mt-20 md:mt-32">
             <div className="text-center mb-16">
                <Reveal width="100%">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    Impacto operacional que aparece no dia a dia
                  </h2>
                </Reveal>
                <Reveal width="100%" delay={0.1}>
                  <p className="text-lg text-muted max-w-2xl mx-auto">
                    O foco é reduzir atrito operacional e aumentar qualidade de decisão.
                  </p>
                </Reveal>
             </div>
            <StatsStrip items={stats} />
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading title="O que líderes buscam quando adotam IA de verdade" />
        <Reveal width="100%">
          <div className="space-y-12">
             <div>
                <p className="text-center text-sm text-neutral-500 uppercase tracking-widest font-mono mb-8">
                   Feedback em tempo real
                </p>
                <Testimonials3D />
             </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading title="Perguntas frequentes" align="left" className="max-w-3xl mx-auto" />
        <Reveal width="100%">
          <FAQAccordion items={faqs} />
        </Reveal>
      </Section>

      <Reveal width="100%">
        <CtaSection />
      </Reveal>
    </div>
  );
};

export default Home;
