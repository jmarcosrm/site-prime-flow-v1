
import * as React from 'react';
import { memo } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';
import { Marquee } from './ui/marquee-3d';
import { cn } from '../lib/cn';

// Data adapted for Institutional context
const testimonials = [
  {
    name: 'Elena Fisher',
    username: '@elena_tech',
    body: 'A latência caiu 40% na primeira semana de deploy.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'CTO, FinBank',
  },
  {
    name: 'Marcus Chen',
    username: '@chen_ops',
    body: 'Dashboard em tempo real mudou nossa logística.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'Head of Ops, LogiCorp',
  },
  {
    name: 'Sarah Miller',
    username: '@sarah_m',
    body: 'Governança de dados impecável.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'CISO, SecureNet',
  },
  {
    name: 'David Park',
    username: '@dpark_ai',
    body: 'A integração com legado foi surpreendentemente suave.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'VP Eng, RetailGiant',
  },
  {
    name: 'Jessica Wu',
    username: '@jess_product',
    body: 'ROI visível em menos de 30 dias.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'Product Lead, TechFlow',
  },
  {
    name: 'Robert Fox',
    username: '@rob_fox',
    body: 'Automação que realmente escala.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    role: 'Director, ManuFact',
  },
];

// 1. MEMOIZATION: Prevents React from re-rendering static cards
const TestimonialCard = memo(function TestimonialCard({ img, name, username, body, role }: (typeof testimonials)[number]) {
  return (
    // 2. PERFORMANCE FIX: Removed `backdrop-blur-md`. Blurs inside 3D transforms kill FPS.
    // Replaced with solid bg-[#0A0A0A] which looks similar but renders 60fps.
    // Added `will-change-transform` and `backface-visibility-hidden` for GPU compositing.
    <Card className="w-64 border-white/5 bg-[#0A0A0A] hover:bg-white/5 transition-colors transform-gpu will-change-transform backface-hidden">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-white/10">
            <AvatarImage src={img} alt={name} loading="lazy" />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-bold text-white flex items-center gap-1">
              {name}
            </figcaption>
            <p className="text-[10px] font-medium text-accent uppercase tracking-wider">{role}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-xs text-neutral-300 leading-relaxed">"{body}"</blockquote>
      </CardContent>
    </Card>
  );
});

export function Testimonials3D() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden [perspective:600px] bg-black">
      
      {/* Background Glow - Optimized with pointer-events-none */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

      <div
        className="flex flex-row items-center gap-6 transform-gpu will-change-transform"
        style={{
          transform:
            'translateX(-20px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(10deg)',
        }}
      >
        {/* 
           3. OPTIMIZATION: Reduced `repeat` from 4 to 3. 
           This reduces the DOM node count by 25% while maintaining the infinite illusion.
        */}
        
        {/* Column 1 (Down) */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:50s] [--gap:1.5rem]">
          {testimonials.map((review, i) => (
            <TestimonialCard key={`${review.username}-${i}`} {...review} />
          ))}
        </Marquee>

        {/* Column 2 (Up) */}
        <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:45s] [--gap:1.5rem]">
          {testimonials.map((review, i) => (
            <TestimonialCard key={`${review.username}-${i}-rev`} {...review} />
          ))}
        </Marquee>

        {/* Column 3 (Down) */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:55s] [--gap:1.5rem] hidden md:flex">
          {testimonials.map((review, i) => (
            <TestimonialCard key={`${review.username}-${i}-3`} {...review} />
          ))}
        </Marquee>

         {/* Column 4 (Up) */}
         <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:50s] [--gap:1.5rem] hidden lg:flex">
          {testimonials.map((review, i) => (
            <TestimonialCard key={`${review.username}-${i}-4`} {...review} />
          ))}
        </Marquee>

      </div>
    </div>
  );
}
