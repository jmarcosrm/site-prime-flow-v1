import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CtaSection = () => {
  return (
    <section className="py-12 px-2 md:px-4 w-full">
      <div className="relative w-full min-h-[500px] md:min-h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group bg-black">
        
        {/* 1. Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-105"
          style={{ 
            backgroundImage: `url("https://i.im.ge/2026/01/15/G9RAaz.Generated-Image-January-14-2026-5-35PM-1.jpeg")`,
            backgroundPosition: 'center center'
          }}
        />

        {/* 2. Gradient Overlay - Subtle on left to keep image visible, darker on right for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/60 to-black opacity-90" />
        
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

        {/* 3. Content - Aligned to Right */}
        <div className="relative z-10 h-full flex flex-col justify-center items-end w-full p-8 md:p-16 lg:p-24 min-h-[500px] md:min-h-[600px]">
          <div className="max-w-2xl w-full flex flex-col items-start md:items-start text-left pl-0 md:pl-10 lg:pl-0">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-accent uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg"
            >
               <Sparkles size={12} className="fill-accent" />
               <span>Pronto para escalar?</span>
            </motion.div>
            
            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              Transforme operação <br/>
              em <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">resultado líquido.</span>
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-300 leading-relaxed mb-10 max-w-lg font-light"
            >
              Diagnóstico rápido, implementação governada e impacto que o board reconhece.
            </motion.p>

            {/* Buttons */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link 
                to="/contato"
                className="group px-8 py-4 bg-accent text-white rounded-full font-bold text-sm hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,122,0,0.3)] hover:scale-[1.02]"
              >
                Solicitar demo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/20">
                Falar com expert
              </button>
            </motion.div>

          </div>
        </div>

        {/* Decorative Bottom Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-50" />
      </div>
    </section>
  );
};