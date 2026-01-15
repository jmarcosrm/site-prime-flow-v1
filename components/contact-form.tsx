
import React, { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-card rounded-3xl border border-border"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-accent shadow-[0_0_30px_rgba(255,122,0,0.2)]"
        >
          <CheckCircle2 size={40} />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-3">Mensagem Recebida</h3>
        <p className="text-muted max-w-xs mx-auto mb-8">
          Nossa equipe técnica analisará sua solicitação e entrará em contato em até 24h.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-accent hover:text-white transition-colors"
        >
          Enviar outra mensagem
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-card p-8 rounded-3xl border border-border shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted">Nome</label>
          <input 
            required
            type="text" 
            id="name" 
            className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:bg-background transition-all placeholder:text-neutral-700"
            placeholder="Seu nome"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted">Email Corporativo</label>
          <input 
            required
            type="email" 
            id="email" 
            className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:bg-background transition-all placeholder:text-neutral-700"
            placeholder="voce@empresa.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-muted">Telefone</label>
        <input 
          type="tel" 
          id="phone" 
          className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:bg-background transition-all placeholder:text-neutral-700"
          placeholder="(11) 99999-9999"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted">Sobre o Projeto</label>
        <textarea 
          required
          id="message" 
          rows={4}
          className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:bg-background transition-all resize-none placeholder:text-neutral-700"
          placeholder="Descreva brevemente seu desafio operacional..."
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent/90 transition-all hover:shadow-[0_0_20px_rgba(255,122,0,0.3)] mt-2 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            <span>Processando...</span>
          </>
        ) : (
          <>
            <span>Solicitar Diagnóstico</span>
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
      
      <p className="text-center text-[10px] text-neutral-600">
        Seus dados estão protegidos sob nossa política de privacidade.
      </p>
    </form>
  );
};
