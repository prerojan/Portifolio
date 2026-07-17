import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckSquare, GraduationCap } from 'lucide-react';
import { experiences, education } from '../data';

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 border-t border-neutral-100 dark:border-neutral-900 bg-surface-base/30 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-primary uppercase">
            Trajetória Profissional
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-base">
            Experiência e Impacto
          </h2>
          <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400">
            Foco no alinhamento estratégico, otimização de fluxos operacionais e desenvolvimento de sistemas integrados.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Timeline rail */}
          <div className="md:col-span-8 space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-200 dark:before:bg-neutral-800">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-12 group"
              >
                {/* Timeline node */}
                <div className="absolute left-[9px] top-1.5 w-[22px] h-[22px] rounded-full bg-bg-base border-2 border-primary flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>

                <div className="space-y-4">
                  {/* Period + Company Badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-neutral-400 dark:text-neutral-500 tracking-wider">
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {exp.company}
                    </span>
                  </div>

                  {/* Role Title */}
                  <div>
                    <h3 className="text-lg md:text-xl font-extrabold text-text-base">
                      {exp.role}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
                      {exp.description}
                    </p>
                  </div>

                  {/* Specific Achievements */}
                  <ul className="space-y-2.5 pt-2">
                    {exp.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-3 text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        <span className="mt-1 text-primary flex-shrink-0">
                          <CheckSquare size={14} />
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic Education Section */}
          <div className="md:col-span-4">
            <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-900 bg-surface-base sticky top-24 space-y-6">
              <div className="flex items-center gap-2.5 text-text-base font-bold text-base border-b border-neutral-100 dark:border-neutral-900 pb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <GraduationCap size={18} />
                </div>
                <span>Formação Acadêmica</span>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-primary/20 hover:border-primary/60 transition-colors duration-300 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-neutral-400 dark:text-neutral-500 block">
                      {edu.period}
                    </span>
                    <h4 className="text-xs md:text-sm font-bold text-text-base leading-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
