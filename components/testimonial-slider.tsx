
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, TrendingUp, Building2, User } from 'lucide-react';
import { cn } from '../lib/cn';

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  metric?: string;
  metricLabel?: string;
}

interface TestimonialSliderProps {
  items: Testimonial[];
}

export const TestimonialSlider = ({ items }: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const AUTOPLAY_DELAY = 6000;

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.95
    })
  };

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Background Decor - Dynamic Glow based on slide */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 blur-[100px] pointer-events-none transition-all duration-1000" />

      <div className="relative rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden min-h-[450px] md:min-h-[400px] flex items-center">
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/noise.svg')] mix-blend-overlay" />

        {/* Content Container */}
        <div className="relative z-10 w-full p-8 md:p-16">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                filter: { duration: 0.4 }
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              
              {/* LEFT COLUMN: The "Hard Data" (Metric) */}
              <div className="lg:col-span-4 relative order-2 lg:order-1">
                 <div className="relative p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm overflow-hidden group">
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                       <div className="flex items-center gap-2 mb-4 text-accent">
                          <TrendingUp size={20} />
                          <span className="text-xs font-bold uppercase tracking-widest">Impacto Verificado</span>
                       </div>
                       
                       <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-2">
                          {currentItem.metric}
                       </div>
                       
                       <p className="text-neutral-400 font-medium">
                          {currentItem.metricLabel}
                       </p>
                    </div>

                    {/* Decorative Graph Line */}
                    <svg className="absolute bottom-0 left-0 w-full h-16 opacity-20 text-accent" preserveAspectRatio="none">
                       <path d="M0,64 L20,50 L40,55 L60,30 L80,40 L100,10 L120,20 L140,0 L160,30 L300,64 Z" fill="currentColor" />
                    </svg>
                 </div>
              </div>

              {/* RIGHT COLUMN: The "Soft Context" (Quote) */}
              <div className="lg:col-span-8 flex flex-col justify-center order-1 lg:order-2">
                 <div className="mb-8">
                    <Quote className="w-12 h-12 text-white/10 mb-6 fill-white/5" />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white/90 tracking-tight">
                       "{currentItem.quote}"
                    </h3>
                 </div>

                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
                       <User size={20} className="text-neutral-400" />
                    </div>
                    <div>
                       <div className="font-bold text-white text-lg">
                          {currentItem.author}
                       </div>
                       <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
                          <span>{currentItem.role}</span>
                          {currentItem.company && (
                            <>
                              <span className="w-1 h-1 rounded-full bg-neutral-700" />
                              <span className="flex items-center gap-1">
                                 <Building2 size={12} />
                                 {currentItem.company}
                              </span>
                            </>
                          )}
                       </div>
                    </div>
                 </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* PROGRESS BAR (Bottom) */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/5 w-full">
           <motion.div 
             key={currentIndex} // Restart animation on change
             initial={{ width: "0%" }}
             animate={{ width: "100%" }}
             transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
             className="h-full bg-accent"
           />
        </div>

        {/* NAVIGATION CONTROLS */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
           <button 
             onClick={handlePrev}
             className="p-3 rounded-full bg-black/40 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all backdrop-blur-md group"
             aria-label="Previous testimonial"
           >
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
           </button>
           <button 
             onClick={handleNext}
             className="p-3 rounded-full bg-black/40 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all backdrop-blur-md group"
             aria-label="Next testimonial"
           >
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
           </button>
        </div>

      </div>
      
      {/* Pagination Dots (Optional, visual indicator only) */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
               setDirection(idx > currentIndex ? 1 : -1);
               setCurrentIndex(idx);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              idx === currentIndex ? "w-8 bg-accent" : "bg-white/10 hover:bg-white/30"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};