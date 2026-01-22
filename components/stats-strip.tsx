import React from 'react';
import { Reveal } from './reveal';
import { motion } from 'framer-motion';

interface StatItem {
  label: string;
  value: string;
  desc?: string;
}

interface StatsStripProps {
  items: StatItem[];
}

const Stat: React.FC<{ item: StatItem; index: number }> = ({ item, index }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: index * 0.1 }}
        className="flex flex-col items-center"
      >
        <span className="block text-6xl md:text-7xl font-bold text-white tracking-tighter mb-2">
          {item.value}
        </span>
        <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-1">
          {item.label}
        </h4>
        <p className="text-sm text-neutral-500 font-medium mb-4">
          {item.desc}
        </p>
        <motion.div 
          className="h-0.5 bg-orange-500"
          initial={{ width: 0 }}
          whileInView={{ width: "40%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 + 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export const StatsStrip = ({ items }: StatsStripProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 mt-20">
      {items.map((item, idx) => (
        <Stat key={idx} item={item} index={idx} />
      ))}
    </div>
  );
};
