import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Code2, Settings2, ShieldCheck, Check } from 'lucide-react';
import { skillCategories } from '../data';

export default function Skills() {
  // Map string names to actual Lucide icons safely
  const renderIcon = (name: string) => {
    const props = { className: "text-primary", size: 22 };
    switch (name) {
      case 'BarChart3':
        return <BarChart3 {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      case 'Settings2':
        return <Settings2 {...props} />;
      default:
        return <ShieldCheck {...props} />;
    }
  };

  return (
    <section id="competencias" className="py-24 scroll-mt-16 bg-bg-base">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-primary uppercase">
            Habilidades Técnicas e de Negócio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-base">
            Matriz de Competências
          </h2>
          <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400">
            Habilidades distribuídas estrategicamente para otimizar processos analíticos e entregar engenharia de software duradoura.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 md:p-8 rounded-3xl border border-neutral-100 dark:border-neutral-900 bg-surface-base hover:border-neutral-200 dark:hover:border-neutral-800 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-bg-base border border-neutral-200/50 dark:border-neutral-900 flex items-center justify-center shadow-xs">
                    {renderIcon(cat.iconName)}
                  </div>
                  <h3 className="text-base md:text-lg font-extrabold text-text-base tracking-tight leading-tight">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                  {cat.description}
                </p>

                {/* Tags List */}
                <ul className="space-y-2 pt-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Check size={10} />
                      </span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Minimalist footer line */}
              <div className="border-t border-neutral-200/50 dark:border-neutral-900/50 mt-8 pt-4 flex items-center justify-between text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                <span>AUTORIDADE TÉCNICA</span>
                <span>100% ATIVO</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
