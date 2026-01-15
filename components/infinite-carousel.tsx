import React from 'react';
import { cn } from '../lib/cn';
import { ArrowRight } from 'lucide-react';

interface CarouselItem {
  title: string;
  description: string;
  bullets: string[];
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
}

export const InfiniteCarousel = ({ items }: InfiniteCarouselProps) => {
  // Ensure enough width for 4k screens by quadrupling the small list of solutions
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden relative group flex">
       <div className="absolute left-0 top-0 bottom-0 w-10 md:w-32 z-10 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none" />
       <div className="absolute right-0 top-0 bottom-0 w-10 md:w-32 z-10 bg-gradient-to-l from-[var(--bg)] to-transparent pointer-events-none" />

      {/* Track 1 */}
      <div className="flex shrink-0 animate-marquee min-w-full group-hover:[animation-play-state:paused] py-4">
        {repeatedItems.map((item, idx) => (
          <div 
            key={idx}
            className="w-[300px] md:w-[400px] mx-3 md:mx-4 p-8 rounded-2xl border border-border bg-card dark:bg-[#050505] hover:border-accent/30 transition-all duration-300 group/card flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover/card:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-xs font-medium text-muted/80 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-border/50 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-muted">Solução</span>
              <ArrowRight className="w-4 h-4 text-accent opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all" />
            </div>
          </div>
        ))}
      </div>

      {/* Track 2 */}
      <div className="flex shrink-0 animate-marquee min-w-full group-hover:[animation-play-state:paused] py-4" aria-hidden="true">
        {repeatedItems.map((item, idx) => (
          <div 
            key={`${idx}-dup`}
            className="w-[300px] md:w-[400px] mx-3 md:mx-4 p-8 rounded-2xl border border-border bg-card dark:bg-[#050505] hover:border-accent/30 transition-all duration-300 group/card flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover/card:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-xs font-medium text-muted/80 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-border/50 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-muted">Solução</span>
              <ArrowRight className="w-4 h-4 text-accent opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};