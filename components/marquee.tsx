import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/cn';

interface MarqueeItem {
  title: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
  className?: string;
  reverse?: boolean;
  speed?: 'normal' | 'slow' | 'fast';
}

export const Marquee = ({ 
  items, 
  className, 
  reverse = false, 
  speed = 'normal' 
}: MarqueeProps) => {

  const duration = 
    speed === 'slow' ? 80
    : speed === 'fast' ? 40
    : 60;

  const marqueeVariants = {
    animate: {
      x: reverse ? ['0%', '-200%'] : ['-200%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: duration,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div 
      className={cn("relative w-full overflow-hidden py-10", className)}
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
      }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {/* Duplicating the content is necessary for a seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-3 cursor-default px-5"
          >
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-lg font-semibold text-neutral-300">
              {item.title}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};