
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { OptimizedImage } from './ui/optimized-image';
import { cn } from '../lib/cn';

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
  // Triple the items to ensure smooth infinite loop without gaps on wide screens
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-10 group">
      
      {/* Side Masks for "Emerging" effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-20 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-20 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />

      {/* Track */}
      <div className="flex animate-scroll hover:[animation-play-state:paused]">
        {repeatedItems.map((item, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 mx-4 w-[280px] h-[380px] md:w-[320px] md:h-[420px] relative rounded-3xl overflow-hidden border border-white/10 group/card transition-transform duration-300 hover:scale-105"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
               {item.image && (
                 <OptimizedImage 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                 />
               )}
            </div>

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full z-10">
               
               {/* Icon Badge */}
               <div className="mb-auto ml-auto">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover/card:bg-accent group-hover/card:text-white transition-all duration-300">
                     <item.icon size={20} />
                  </div>
               </div>

               <div className="transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-accent mb-3" />
                  <p className="text-sm md:text-base text-neutral-300 font-medium leading-snug">
                    {item.description}
                  </p>
               </div>
            </div>

            {/* Inner Border */}
            <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none z-20 group-hover/card:border-accent/30 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};
