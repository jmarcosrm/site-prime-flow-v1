
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/cn';
import { Menu, X, ArrowRight, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll quando o menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Início', path: '/', id: '01' },
    { name: 'Soluções', path: '/solucoes', id: '02' },
    { name: 'Sobre nós', path: '/sobre', id: '03' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Variantes de animação para o menu
  const menuVariants = {
    closed: { 
      opacity: 0,
      clipPath: "circle(0% at 90% 5%)",
      transition: { duration: 0.5, ease: [0.32, 0, 0.24, 1] }
    },
    open: { 
      opacity: 1, 
      clipPath: "circle(150% at 90% 5%)",
      transition: { duration: 0.7, ease: [0.32, 0, 0.24, 1] }
    }
  };

  const containerVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 40 },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      {/* --- DESKTOP HEADER (Hidden on Mobile) --- */}
      <header
        className={cn(
          "hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity drop-shadow-md text-foreground relative z-50 pointer-events-auto">
            Sua Marca<span className="text-accent">.</span>
          </Link>

          {/* Desktop Nav - Floating Pill */}
          <nav className="flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-2.5 rounded-full border border-white/10 shadow-lg pointer-events-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors relative hover:text-accent",
                  isActive(link.path) ? "text-foreground" : "text-muted"
                )}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 pointer-events-auto">
            <button className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/90 transition-all hover:shadow-[0_0_20px_rgba(255,122,0,0.3)] shadow-lg">
              Fale conosco
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE HEADER ("Balão Flutuante") --- */}
      <div className="md:hidden fixed top-5 left-4 right-4 z-50 pointer-events-auto transition-all duration-500">
         <div className="w-full bg-[#050505]/90 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-4 flex items-center justify-between shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]">
            {/* Logo Mobile */}
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold tracking-tight text-white">
              Sua Marca<span className="text-accent">.</span>
            </Link>

            {/* Hamburger Trigger */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1 text-white hover:text-accent transition-colors"
              aria-label="Abrir menu"
            >
              <Menu size={24} strokeWidth={2.5} />
            </button>
         </div>
      </div>

      {/* --- MOBILE FULL SCREEN OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[60] bg-[#020202] flex flex-col md:hidden overflow-hidden"
          >
            {/* Background Texture & Ambient Light */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-overlay" />
            <div className="absolute top-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-accent/10 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none z-0" />

            {/* Overlay Header (Close Button) */}
            <div className="px-6 pt-6 pb-4 flex justify-between items-center relative z-20">
               <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Navegação</span>
               <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all hover:scale-105 active:scale-95 shadow-lg"
               >
                  <X size={22} />
               </button>
            </div>

            {/* Navigation Links */}
            <motion.nav 
              variants={containerVariants}
              className="flex-grow flex flex-col justify-center px-6 gap-6 relative z-20"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  variants={itemVariants}
                  className="group"
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-start gap-4 py-2"
                  >
                    <span className="text-xs font-mono text-neutral-600 mt-2 font-bold group-hover:text-accent transition-colors">
                      /{link.id}
                    </span>
                    <div className="flex-1">
                      <span className={cn(
                        "text-3xl font-bold tracking-tighter block transition-colors duration-300",
                        isActive(link.path) ? "text-white" : "text-neutral-400 group-hover:text-white"
                      )}>
                        {link.name}
                      </span>
                    </div>
                    <ArrowRight className={cn(
                       "mt-1.5 transition-all duration-300", 
                       isActive(link.path) ? "opacity-100 translate-x-0 text-accent" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-white"
                    )} />
                  </Link>
                  {/* Subtle Divider */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              ))}
            </motion.nav>
            
            {/* Footer / CTA in Menu */}
            <motion.div 
               variants={itemVariants}
               className="p-6 mt-auto relative z-20"
            >
               <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                 <button className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-[0_0_30px_rgba(255,122,0,0.2)] mb-8 flex items-center justify-center gap-2 group">
                    Fale com especialista
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
                 
                 <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-xs text-neutral-500 font-mono">Siga-nos</span>
                    <div className="flex gap-4">
                      <a href="#" className="p-2 rounded-full bg-black/20 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href="#" className="p-2 rounded-full bg-black/20 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                        <Instagram size={18} />
                      </a>
                      <a href="#" className="p-2 rounded-full bg-black/20 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                        <Twitter size={18} />
                      </a>
                    </div>
                 </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
