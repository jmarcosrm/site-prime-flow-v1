import React from 'react';

export const ContactForm = () => {
  return (
    <form className="space-y-6 bg-card p-8 rounded-3xl border border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-muted">Nome completo</label>
          <input 
            type="text" 
            id="name" 
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
            placeholder="Seu nome"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-muted">Email corporativo</label>
          <input 
            type="email" 
            id="email" 
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
            placeholder="nome@empresa.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-muted">Telefone</label>
        <input 
          type="tel" 
          id="phone" 
          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
          placeholder="(00) 00000-0000"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-muted">Mensagem</label>
        <textarea 
          id="message" 
          rows={4}
          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Como podemos ajudar?"
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent/90 transition-all hover:shadow-[0_0_20px_rgba(255,122,0,0.3)] mt-4"
      >
        Enviar mensagem
      </button>
    </form>
  );
};