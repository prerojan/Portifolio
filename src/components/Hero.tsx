import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, MessageSquare, Briefcase, Sparkles, CheckCircle } from 'lucide-react';
import { ContactData } from '../types';

interface HeroProps {
  contactData: ContactData;
  isDarkMode: boolean;
}

export default function Hero({ contactData, isDarkMode }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-20 px-6 overflow-hidden">
      {/* Background grid + ambient glow */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${isDarkMode ? 'grid-bg-dark radial-glow-dark opacity-100' : 'grid-bg-light radial-glow-light opacity-100'}`} />

      {/* Decorative floating badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/35 backdrop-blur-md"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-[11px] font-mono tracking-wider font-semibold text-neutral-600 dark:text-neutral-400">
          DISPONÍVEL PARA NOVOS PROJETOS
        </span>
      </motion.div>

      {/* Name and Professional Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="relative z-10 text-center mb-4"
      >
        <span className="text-sm md:text-base font-bold tracking-widest text-primary uppercase font-mono">
          Carlos Renan
        </span>
      </motion.div>

      {/* Hero Main Headline */}
      <div className="relative z-10 max-w-4xl text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring', damping: 15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400"
        >
          Transformando problemas reais em <span className="text-primary drop-shadow-[0_0_15px_rgba(24,242,164,0.15)]">soluções digitais.</span>
        </motion.h1>

        {/* Subtitle / Core value statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
        >
          Business Analyst • Process Analyst • Full Stack Developer<br />
          <span className="text-neutral-800 dark:text-neutral-200 font-normal text-sm sm:text-base mt-2 block">
            Especialista em construir a ponte perfeita entre estratégia de negócios, mapeamento de processos reais e engenharia de software de altíssima performance.
          </span>
        </motion.p>

        {/* Call to Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          {/* Main CTA: Ver Projetos */}
          <a
            href="#casos"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2 text-bg-base bg-primary hover:opacity-95 shadow-[0_4px_20px_rgba(24,242,164,0.15)] hover:shadow-[0_4px_30px_rgba(24,242,164,0.25)] hover:scale-[1.02] transition-all cursor-pointer"
            id="hero-cta-projects"
          >
            <Briefcase size={15} /> Ver Casos Reais
          </a>

          {/* Secondary CTA: Falar Comigo */}
          <a
            href="#contato"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2 border border-neutral-300 dark:border-neutral-800 text-text-base bg-bg-base/50 hover:bg-neutral-100 dark:hover:bg-neutral-900/50 hover:scale-[1.02] transition-all cursor-pointer"
            id="hero-cta-contact"
          >
            <MessageSquare size={15} /> Entrar em Contato
          </a>
        </motion.div>
      </div>

      {/* Trust/Vercel styling bottom indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-6 left-0 w-full flex flex-col items-center pointer-events-none z-10"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-2 uppercase">
          Role para Explorar
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
