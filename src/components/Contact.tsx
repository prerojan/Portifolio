import React from 'react';
import { Mail, MessageSquare, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { contactData } from '../data';

export default function Contact() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contactData.email.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-20 scroll-mt-16 bg-bg-base">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Contact Container Panel */}
        <div className="relative rounded-[2.5rem] bg-[#0A0A0A] dark:bg-[#080808] text-white p-10 md:p-20 overflow-hidden border border-neutral-800 shadow-2xl">
          
          {/* Subtle colored glow overlay */}
          <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#18F2A4] via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono font-bold tracking-wider uppercase">
              Contato Direto
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Vamos transformar suas ideias em <span className="text-primary drop-shadow-[0_0_15px_rgba(24,242,164,0.15)]">soluções de valor?</span>
            </h2>

            <p className="text-sm md:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
              Se você precisa de um professional híbrido que entende profundamente de processos de negócios e entrega engenharia de software impecável, entre em contato hoje mesmo.
            </p>

            {/* Premium action buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              
              {/* E-mail Contact */}
              <a
                href={contactData.email.mailto}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-neutral-100 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail size={16} /> Enviar E-mail
              </a>

              {/* WhatsApp Contact */}
              <a
                href={contactData.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba56] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare size={16} /> Conversar no WhatsApp
              </a>
            </div>

            {/* Quick action: Copy Email Address */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer px-4 py-2 rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/80"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-primary" />
                    <span className="text-primary">E-mail copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copiar e-mail: {contactData.email.address}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Footer divider */}
          <div className="mt-20 pt-10 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 text-xs md:text-sm">
            
            <div className="space-y-1 text-center md:text-left">
              <p>© {new Date().getFullYear()} Carlos Renan. Todos os direitos reservados.</p>
              <p className="text-[10px] text-neutral-600 font-mono">
                Desenvolvido com React + Tailwind CSS + Geist Font.
              </p>
            </div>

            {/* Social channels */}
            <div className="flex gap-6">
              <a
                href={contactData.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors font-medium text-xs font-mono"
              >
                <Github size={14} /> GITHUB <ArrowUpRight size={10} />
              </a>
              <a
                href={contactData.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors font-medium text-xs font-mono"
              >
                <Linkedin size={14} /> LINKEDIN <ArrowUpRight size={10} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
