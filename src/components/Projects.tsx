import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Cpu, Zap } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    if (expandedProject === name) {
      setExpandedProject(null);
    } else {
      setExpandedProject(name);
    }
  };

  return (
    <section id="casos" className="py-24 scroll-mt-16 bg-bg-base">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-primary uppercase">
            CASOS REAIS E SISTEMAS EM PRODUÇÃO
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-base">
            Engenharia de Valor
          </h2>
          <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400">
            Aplicações reais pensadas para resolver dores profundas de negócio, estruturadas com análise de processos de ponta a ponta.
          </p>
        </div>

        {/* Projects List */}
        <div className="grid gap-12">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.name;

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-card-base border border-neutral-200 dark:border-neutral-900 rounded-3xl overflow-hidden p-6 md:p-10 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-800"
              >
                {/* Visual Accent Hover Bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  
                  {/* Left Column: Core Info & Problem -> Solution */}
                  <div className="flex-1 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-neutral-200/50 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 border border-neutral-300/40 dark:border-neutral-700/30">
                        {project.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-md bg-primary/10 text-primary font-bold uppercase tracking-wider border border-primary/25">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-text-base mb-2 tracking-tight">
                        {project.name}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                        {project.description}
                      </p>
                    </div>

                    {/* Problem -> Solution -> Result Framework */}
                    <div className="space-y-4 border-l-2 border-neutral-200 dark:border-neutral-800/80 pl-5 my-4">
                      <div className="space-y-1">
                        <h4 className="text-[11px] font-mono font-bold uppercase text-neutral-400 dark:text-neutral-500 tracking-widest flex items-center gap-1.5">
                          <AlertCircle size={12} className="text-red-500/80" /> O Problema
                        </h4>
                        <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-[11px] font-mono font-bold uppercase text-neutral-400 dark:text-neutral-500 tracking-widest flex items-center gap-1.5">
                          <Cpu size={12} className="text-primary" /> A Solução
                        </h4>
                        <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-[11px] font-mono font-bold uppercase text-neutral-400 dark:text-neutral-500 tracking-widest flex items-center gap-1.5">
                          <CheckCircle2 size={12} className="text-primary" /> O Resultado Estimado
                        </h4>
                        <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    </div>

                    {/* Technology Badge List */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-bg-base text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Dynamic Mockup Preview Area */}
                  <div className="w-full lg:w-[420px] flex flex-col justify-between self-stretch bg-surface-base rounded-2xl border border-neutral-200 dark:border-neutral-900/60 p-6 relative group/mockup">
                    
                    {/* Floating corner lights */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent blur-xl rounded-full" />
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900 pb-3">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wider truncate max-w-[200px]">
                          {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        </span>
                      </div>

                      {/* Mockup visual center placeholder */}
                      <div className="h-44 flex flex-col items-center justify-center text-center p-4 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-xl bg-bg-base group-hover/mockup:border-primary/30 transition-colors">
                        <Zap size={24} className="text-primary mb-3 animate-pulse" />
                        <span className="text-xs font-mono font-semibold text-neutral-800 dark:text-neutral-200">
                          {project.name} Interface
                        </span>
                        <span className="text-[10px] text-neutral-400 mt-1">
                          Clique em visitar para ver o protótipo funcional
                        </span>
                      </div>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase bg-text-base text-bg-base hover:opacity-90 transition-all shadow-xs"
                    >
                      Visitar Projeto <ExternalLink size={14} />
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
