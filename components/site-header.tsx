import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/cn';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for scroll performance
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Soluções', path: '/solucoes' },
    { name: 'Sobre nós', path: '/sobre' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none", // pointer-events-none permite clicar através da área vazia
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity drop-shadow-md text-foreground relative z-50 pointer-events-auto">
          Sua Marca<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav - Floating Pill */}
        <nav className="hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-2.5 rounded-full border border-white/10 shadow-lg pointer-events-auto">
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
        <div className="hidden md:flex items-center gap-4 pointer-events-auto">
          <button className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/90 transition-all hover:shadow-[0_0_20px_rgba(255,122,0,0.3)] shadow-lg">
            Fale conosco
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4 z-50 pointer-events-auto">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col pt-32 px-6 pb-6 md:hidden pointer-events-auto"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-bold py-4 border-b border-white/10 flex justify-between items-center",
                    isActive(link.path) ? "text-accent" : "text-white"
                  )}
                >
                  {link.name}
                  {isActive(link.path) && <span className="w-2 h-2 rounded-full bg-accent" />}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto">
               <button className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-[0_0_30px_rgba(255,122,0,0.3)]">
                  Fale conosco
               </button>
               <p className="text-center text-neutral-500 text-xs mt-8">
                  &copy; {new Date().getFullYear()} Sua Marca Inc.
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};