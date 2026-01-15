
import React, { memo } from 'react';
import { cn } from '../lib/cn';

// --- DATA ---
const testimonials = [
  {
    name: 'Elena Fisher',
    handle: '@elena_tech',
    body: 'A latência caiu 40% na primeira semana de deploy.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'CTO, FinBank',
  },
  {
    name: 'Marcus Chen',
    handle: '@chen_ops',
    body: 'Dashboard em tempo real mudou nossa logística.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'Head of Ops, LogiCorp',
  },
  {
    name: 'Sarah Miller',
    handle: '@sarah_m',
    body: 'Governança de dados impecável.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'CISO, SecureNet',
  },
  {
    name: 'David Park',
    handle: '@dpark_ai',
    body: 'Integração legado surpreendentemente suave.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'VP Eng, RetailGiant',
  },
  {
    name: 'Jessica Wu',
    handle: '@jess_product',
    body: 'ROI visível em menos de 30 dias.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'Product Lead, TechFlow',
  },
  {
    name: 'Robert Fox',
    handle: '@rob_fox',
    body: 'Automação que realmente escala.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'Director, ManuFact',
  },
];

// --- 1. LIGHTWEIGHT CARD COMPONENT ---
// Removed Card/Avatar components to reduce React tree depth significantly.
// Used <img> directly for raw performance.
const ReviewCard = memo(({ 
  img, 
  name, 
  body, 
  role 
}: { 
  img: string; 
  name: string; 
  body: string; 
  role: string 
}) => {
  return (
    <div className="group relative flex flex-col gap-3 rounded-xl border border-white/5 bg-[#09090b] p-4 shadow-xl transition-colors hover:bg-white/5">
      <div className="flex items-center gap-3">
        <img 
          className="h-8 w-8 rounded-full object-cover border border-white/10 bg-neutral-800" 
          src={img} 
          alt={name}
          loading="lazy" 
          width={32}
          height={32}
        />
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white leading-none">{name}</span>
          <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wide mt-1">{role}</span>
        </div>
      </div>
      <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
        "{body}"
      </p>
    </div>
  );
});

ReviewCard.displayName = 'ReviewCard';

// --- 2. OPTIMIZED COLUMN ---
// Uses CSS animation (translate3d) instead of JS-driven Framer Motion for the infinite loop.
// This runs on the compositor thread, preventing main-thread jank.
const ReviewColumn = memo(({ 
  reviews, 
  className, 
  duration = "20s",
  reverse = false 
}: { 
  reviews: typeof testimonials; 
  className?: string; 
  duration?: string;
  reverse?: boolean;
}) => {
  return (
    <div className={cn("flex flex-col gap-4 overflow-hidden h-[600px] relative w-64 md:w-72 flex-shrink-0", className)}>
      {/* The Moving Track */}
      <div 
        className={cn(
          "flex flex-col gap-4 w-full will-change-transform",
          reverse ? "animate-marquee-vertical-reverse" : "animate-marquee-vertical"
        )}
        style={{ animationDuration: duration }}
      >
        {/* Render items 3 times to ensure seamless infinite scroll */}
        {reviews.concat(reviews).concat(reviews).map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
      
      {/* Top/Bottom Fade Masks to hide the loop reset "pop" */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
});

ReviewColumn.displayName = 'ReviewColumn';

// --- 3. MAIN COMPONENT ---
export function Testimonials3D() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-black py-10">
      
      {/* 3D Perspective Wrapper */}
      {/* perspective-1000px: creates the 3D depth */}
      <div 
        className="flex h-[600px] items-center justify-center gap-4 md:gap-6 overflow-hidden"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Rotated Plane */}
        <div 
           className="flex gap-4 md:gap-6 transform-gpu"
           style={{
             transform: 'rotateX(15deg) rotateY(-10deg) rotateZ(5deg) scale(1.1)',
           }}
        >
          {/* Column 1 - Slow */}
          <ReviewColumn 
             reviews={testimonials} 
             duration="45s" 
          />
          
          {/* Column 2 - Medium (Reverse) */}
          <ReviewColumn 
            reviews={[...testimonials].reverse()} 
            duration="35s" 
            reverse 
            className="hidden sm:flex" // Hide on very small screens to save GPU
          />
          
          {/* Column 3 - Fast */}
          <ReviewColumn 
            reviews={testimonials} 
            duration="40s" 
            className="hidden md:flex" 
          />

           {/* Column 4 - Medium (Reverse) - Large Screens Only */}
           <ReviewColumn 
            reviews={[...testimonials].reverse()} 
            duration="50s"
            reverse 
            className="hidden lg:flex" 
          />
        </div>
      </div>

      {/* Global Overlay for depth integration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      
      {/* CSS for custom marquee animations defined locally to ensure they exist */}
      <style>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); } /* Moving 1/3 down because we tripled the list */
        }
        @keyframes marquee-vertical-reverse {
          0% { transform: translateY(-33.33%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical linear infinite;
        }
        .animate-marquee-vertical-reverse {
          animation: marquee-vertical-reverse linear infinite;
        }
      `}</style>
    </div>
  );
}
