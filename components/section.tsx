import React from 'react';
import { cn } from '../lib/cn';
import { Reveal } from './reveal';

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 md:py-32 px-4 md:px-6 overflow-hidden relative", className)}>
      <div className="container mx-auto max-w-6xl relative z-10">
        {children}
      </div>
    </section>
  );
};

export const SectionHeading = ({ eyebrow, title, description, align = 'center', className }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-16", align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <Reveal width="100%" className="mb-4">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal width="100%" delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal width="100%" delay={0.2}>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};