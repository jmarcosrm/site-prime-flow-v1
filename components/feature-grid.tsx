import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Reveal } from './reveal';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureGridProps {
  features: Feature[];
}

export const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, idx) => (
        <React.Fragment key={idx}>
          <Reveal delay={idx * 0.1} className="h-full">
            <div className="group h-full p-6 rounded-2xl border border-border bg-card dark:bg-[#050505] hover:border-accent/30 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden">
               {/* Inner glow effect */}
               <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               
               <div className="relative z-10 flex flex-col h-full">
                 <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                   <feature.icon size={20} />
                 </div>
                 
                 <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                 <p className="text-sm text-muted leading-relaxed mb-4">{feature.description}</p>
                 
                 {/* Seta sutil */}
                 <div className="mt-auto pt-2 flex items-center text-xs font-bold text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                   <span className="mr-2">Detalhes</span>
                   <ArrowRight size={12} />
                 </div>
               </div>
            </div>
          </Reveal>
        </React.Fragment>
      ))}
    </div>
  );
};