import React, { useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { Reveal } from './reveal';
import { motion } from 'framer-motion';
import { cn } from '../lib/cn';

interface StatItem {
  label: string;
  value: string;
  desc?: string;
  icon?: LucideIcon;
}

interface StatsStripProps {
  items: StatItem[];
}

interface SpotlightCardProps {
  item: StatItem;
  index: number;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ item, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const Icon = item.icon;

  return (
    <Reveal delay={index * 0.1} className="h-full">
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#080808] px-8 py-10 shadow-2xl transition-colors duration-300 hover:border-white/20"
      >
        {/* Spotlight Effect Layer */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,122,0,0.15), transparent 40%)`,
          }}
        />

        {/* Technical Grid Pattern Background (Subtle) */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px' 
          }} 
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-muted group-hover:text-accent group-hover:border-accent/20 transition-all duration-300">
              {Icon && <Icon size={20} strokeWidth={1.5} />}
            </div>
            {/* Live Indicator */}
            <div className="flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_var(--accent)]" />
            </div>
          </div>

          {/* Stats */}
          <div>
            <motion.span 
              className="block text-5xl md:text-6xl font-bold text-white tracking-tighter mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {item.value}
            </motion.span>
            
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2 opacity-90">
              {item.label}
            </h4>
            <p className="text-sm text-neutral-500 font-medium">
              {item.desc}
            </p>
          </div>

          {/* Progress Bar Visual */}
          <div className="w-full h-1 bg-white/5 rounded-full mt-8 overflow-hidden">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export const StatsStrip = ({ items }: StatsStripProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
      {items.map((item, idx) => (
        <SpotlightCard key={idx} item={item} index={idx} />
      ))}
    </div>
  );
};
