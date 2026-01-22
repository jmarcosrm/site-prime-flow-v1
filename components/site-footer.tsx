
import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from './reveal';

export const SiteFooter = () => {
  return (
    // Changed px to match CtaSection (px-2 md:px-4) so widths align perfectly
    // Added relative z-40 to ensure footer sits ABOVE any fixed backgrounds from pages (like Solutions noise)
    // Changed bg-background to bg-black to ensure pure black
    <footer className="bg-black relative z-40 px-2 md:px-4 pt-12 md:pt-24 pb-0">
      {/* Removed max-w-[1600px] to allow full expansion matching the card above */}
      {/* Updated rounded-t to match CtaSection's rounded corners (2rem/3rem) */}
      <div className="w-full bg-black border border-white/10 border-b-0 rounded-t-[2rem] md:rounded-t-[3rem] pt-16 md:pt-24 pb-12 px-8 md:px-16 relative overflow-hidden shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)]">
        
        {/* Decorative Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-accent/5 blur-[60px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="space-y-6 max-w-sm">
            <Link to="/">
              <img src="/images/logofooter.png" alt="Sua Marca" className="h-16" />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Transformando operações com inteligência artificial aplicada, governança e integração real. Tecnologia invisível, resultados visíveis.
            </p>
            
            {/* Social Icons Placeholder */}
            <div className="flex gap-4 pt-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors flex items-center justify-center cursor-pointer">
                  <div className="w-4 h-4 bg-neutral-500 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20 w-full md:w-auto">
            <div className="space-y-6">
              <h4 className="font-bold text-white tracking-wide text-sm uppercase">Navegação</h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li><Link to="/" className="hover:text-accent transition-colors">Início</Link></li>
                <li><Link to="/solucoes" className="hover:text-accent transition-colors">Soluções</Link></li>
                <li><Link to="/sobre" className="hover:text-accent transition-colors">Sobre nós</Link></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-white tracking-wide text-sm uppercase">Legal</h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-accent transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Termos de uso</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cookies</a></li>
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="font-bold text-white tracking-wide text-sm uppercase">Contato</h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  contato@suamarca.com
                </li>
                <li>+55 (00) 00000-0000</li>
                <li>São Paulo, BR</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 gap-4">
          <p>&copy; {new Date().getFullYear()} Sua Marca Inc. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
             <span>Design Institucional Premium</span>
             <span className="w-1 h-1 rounded-full bg-neutral-700" />
             <span>Versão 2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
