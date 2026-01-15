
import React, { useEffect, useState, useRef } from 'react';
import { LucideIcon } from 'lucide-react';
import { OptimizedImage } from './ui/optimized-image';
import { cn } from '../lib/cn';
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap, PanInfo } from 'framer-motion';

interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

interface PillarsCarouselProps {
  items: Pillar[];
}

export const PillarsCarousel = ({ items }: PillarsCarouselProps) => {
  // Triple the items to create the visual buffer for looping
  const repeatedItems = [...items, ...items, ...items];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Motion values
  const x = useMotionValue(0);
  // Speed factor (pixels per frame approx) - Negative moves left
  const baseVelocity = -0.8; 

  // Measure content width dynamically to handle responsive sizes correcty
  useEffect(() => {
    const calculateWidth = () => {
      // Mobile: 220px width + 24px margin (mx-3 = 12px * 2) = 244px
      // Desktop: 320px width + 32px margin (mx-4 = 16px * 2) = 352px
      const isMobile = window.innerWidth < 768;
      const itemWidth = isMobile ? 244 : 352;
      // We calculate width of ONE set of items
      setContentWidth(items.length * itemWidth);
    };

    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, [items.length]);

  // The animation loop
  useAnimationFrame((t, delta) => {
    if (isDragging || contentWidth === 0) return;

    let moveBy = baseVelocity * (delta / 16); // Normalize based on 60fps
    
    // Apply movement
    let newX = x.get() + moveBy;

    // Wrap logic: If we've scrolled past the width of one set, reset to 0
    // This creates the seamless infinite effect
    if (newX <= -contentWidth) {
      newX = 0;
    } else if (newX > 0) {
      // Just in case velocity reverses or bounce happens
      newX = -contentWidth;
    }

    x.set(newX);
  });

  const onDragStart = () => {
    setIsDragging(true);
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="relative w-full overflow-hidden py-10 group touch-pan-y" 
      ref={containerRef}
    >
      
      {/* Side Masks for "Emerging" effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 z-20 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 z-20 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />

      {/* Draggable Track */}
      <motion.div 
        className="flex cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragConstraints={{ 
            left: -contentWidth * 2, // Allow dragging past the first set
            right: 0 
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        dragElastic={0.05} // Low elasticity for "heavy" premium feel
      >
        {repeatedItems.map((item, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 mx-3 md:mx-4 w-[220px] h-[300px] md:w-[320px] md:h-[420px] relative rounded-3xl overflow-hidden border border-white/10 group/card transition-transform duration-300 hover:scale-[1.02] select-none"
          >
            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none">
               {item.image && (
                 <OptimizedImage 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                 />
               )}
            </div>

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 pointer-events-none" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 flex flex-col justify-end h-full z-10 pointer-events-none">
               
               {/* Icon Badge */}
               <div className="mb-auto ml-auto">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover/card:bg-accent group-hover/card:text-white transition-all duration-300">
                     <item.icon size={16} className="md:w-5 md:h-5" />
                  </div>
               </div>

               <div className="transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-8 md:w-12 bg-accent mb-2 md:mb-3" />
                  <p className="text-xs md:text-base text-neutral-300 font-medium leading-snug line-clamp-3 md:line-clamp-none">
                    {item.description}
                  </p>
               </div>
            </div>

            {/* Inner Border */}
            <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none z-20 group-hover/card:border-accent/30 transition-colors" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
