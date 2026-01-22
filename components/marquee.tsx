import React from 'react';
import { cn } from '../lib/cn';
import { LucideIcon } from 'lucide-react';

interface MarqueeItem {
  title: string;
  icon: LucideIcon;
}

interface MarqueeProps {
  items: MarqueeItem[];
  className?: string;
  reverse?: boolean;
}

export const Marquee = ({ items, className, reverse = false }: MarqueeProps) => {
  // Ensure we have enough items to fill a wide screen (4k)
  // Duplicating the items 4 times inside each track ensures density.
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div 
      className={cn("relative flex overflow-hidden w-full group select-none py-10", className)}
      style={{
        // The mask creates the "appearing from nowhere" effect. 
        maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'
      }}
    >
      
      {/* Track 1 */}
      <div 
        className={cn(
          "flex shrink-0 gap-20 pr-20 items-center whitespace-nowrap min-w-full",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover:[animation-play-state:paused]"
        )}
      >
        {repeatedItems.map((item, idx) => (
          <div 
            key={`${item.title}-${idx}`} 
            className="group/icon relative flex items-center justify-center transition-all duration-500 hover:scale-125 cursor-default"
            title={item.title}
          >
            {/* Glow effect behind icon */}
            <div className="absolute inset-0 bg-accent/40 blur-2xl rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500" />
            
            <item.icon 
              className="w-10 h-10 md:w-12 md:h-12 text-muted/20 group-hover/icon:text-accent transition-all duration-500 relative z-10" 
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>

      {/* Track 2 (Duplicate for seamless loop) */}
      <div 
        className={cn(
          "flex shrink-0 gap-20 pr-20 items-center whitespace-nowrap min-w-full",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {repeatedItems.map((item, idx) => (
          <div 
            key={`${item.title}-${idx}-dup`} 
            className="group/icon relative flex items-center justify-center transition-all duration-500 hover:scale-125 cursor-default"
            title={item.title}
          >
            {/* Glow effect behind icon */}
            <div className="absolute inset-0 bg-accent/40 blur-2xl rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500" />
            
            <item.icon 
              className="w-10 h-10 md:w-12 md:h-12 text-muted/20 group-hover/icon:text-accent transition-all duration-500 relative z-10" 
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>
    </div>
  );
};