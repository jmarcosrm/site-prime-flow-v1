
import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children?: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
}

export const Reveal = ({ 
  children, 
  width = "100%", 
  className, 
  delay = 0.1,
  duration = 0.8 
}: RevealProps) => {
  return (
    <div style={{ position: "relative", width, zIndex: 10 }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30, filter: 'blur(4px)' }, // Reduced y distance and blur for performance
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        initial="hidden"
        whileInView="visible"
        // CRITICAL PERFORMANCE FIX: 'once: true' prevents re-triggering animations constantly, 
        // reducing main thread load during scroll.
        viewport={{ once: true, margin: "-10%" }} 
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
