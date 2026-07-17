import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Settings2, Code2, Users, FileSpreadsheet, ShieldAlert } from 'lucide-react';

export default function About() {
  const steps = [
    {
      icon: <BarChart3 className="text-[#10B981] dark:text-[#18F2A4]" size={20} />,
      title: "1. Diagnóstico e Processos (AS-IS)",
      description: "Antes de uma única linha de código ser escrita, eu analiso e mapeio os fluxos operacionais atuais para encontrar onde estão os gargalos que drenam tempo ou receita."
    },
    {
      icon: <Settings2 className="text-[#10B981] dark:text-[#18F2A4]" size={20} />,
      title: "2. Estratégia e Otimização (TO-BE)",
      description: "Redesenho o fluxo de valor com foco na eficiência operacional, eliminando redundâncias e definindo especificações de negócio claras e de alto impacto comercial."
    },
    {
      icon: <Code2 className="text-[#10B981] dark:text-[#18F2A4]" size={20} />,
      title: "3. Solução Digital Sob Medida",
      description: "Desenvolvo softwares robustos, limpos e otimizados de ponta a ponta (Full Stack) com excelente usabilidade, automatizando os processos validados."
    }
  ];

  return (
    <section id="sobre" className="py-24 border-y border-neutral-100 dark:border-neutral-900 bg-surface-base/30 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="md:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-primary uppercase">
              O Diferencial
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-base">
              A união ideal entre <span className="text-primary">Negócio</span> e <span className="text-neutral-400">Código</span>.
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
              A maioria dos desenvolvedores constrói apenas o que lhes é pedido. Como <strong>Business Analyst</strong> e <strong>Process Analyst</strong>, eu busco entender <em>por que</em> estamos construindo.
            </p>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Minha abordagem híbrida permite analisar a cadeia de suprimentos, as dores logísticas, ou o controle financeiro de um comércio, projetar o fluxo ótimo de tarefas, e materializar essa inteligência em uma ferramenta digital escalável, rápida e focada em resultados operacionais reais.
            </p>
            
            <div className="pt-4">
              <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-900 bg-surface-base relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-gradient-to-br from-[#18F2A4] to-transparent rounded-full blur-xl pointer-events-none" />
                <p className="text-xs md:text-sm font-medium italic text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
                  "Não crio apenas softwares elegantes. Eu crio eficiência operacional traduzida em código de alto desempenho comercial."
                </p>
                <p className="text-xs font-bold text-neutral-800 dark:text-neutral-300">
                  — Carlos Renan
                </p>
              </div>
            </div>
          </div>

          {/* Workflow/Steps Column */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-neutral-400 dark:text-neutral-500 uppercase mb-4">
              Minha Metodologia de Trabalho
            </h3>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl border border-neutral-100 dark:border-neutral-900 bg-surface-base hover:border-neutral-200 dark:hover:border-neutral-800/80 transition-all duration-300 shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-bg-base border border-neutral-100 dark:border-neutral-800 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm md:text-base font-bold text-text-base">
                        {step.title}
                      </h4>
                      <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
