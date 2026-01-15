import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialSliderProps {
  items: Testimonial[];
}

export const TestimonialSlider = ({ items }: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto min-h-[300px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4 md:px-12"
        >
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Quote className="w-6 h-6 text-accent" />
            </div>
          </div>
          <h3 className="text-xl md:text-3xl font-medium leading-relaxed mb-8">
            "{items[currentIndex].quote}"
          </h3>
          <div className="flex items-center justify-center gap-4">
            {/* CSS Avatar instead of external image for performance */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-neutral-700 flex items-center justify-center">
               <User className="w-5 h-5 text-neutral-400" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">Líder Executivo</p>
              <p className="text-xs text-muted uppercase tracking-wider">{items[currentIndex].author}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 md:bottom-auto md:top-1/2 left-0 right-0 flex justify-between items-center -translate-y-1/2 pointer-events-none px-0 md:-mx-12">
        <button 
          onClick={handlePrev} 
          className="pointer-events-auto p-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-muted hover:text-foreground"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={handleNext} 
          className="pointer-events-auto p-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-muted hover:text-foreground"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};