import React from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';
import { ContactData } from '../types';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  contactData: ContactData;
}

export default function Header({ isDarkMode, toggleTheme, contactData }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-neutral-100 dark:border-neutral-900 bg-bg-base/80 glass-panel transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-1.5 focus:outline-none">
          <span className="font-mono text-xs text-neutral-400 font-bold uppercase tracking-[0.25em]">
            Carlos<span className="text-primary">.</span>Renan
          </span>
        </a>

        {/* Desktop Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-xs font-medium text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white transition-colors">
            Sobre
          </a>
          <a href="#casos" className="text-xs font-medium text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white transition-colors">
            Casos Reais
          </a>
          <a href="#experiencia" className="text-xs font-medium text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white transition-colors">
            Experiência
          </a>
          <a href="#competencias" className="text-xs font-medium text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white transition-colors">
            Competências
          </a>
          <a href="#contato" className="text-xs font-medium text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white transition-colors">
            Contato
          </a>
        </div>

        {/* Actions (Toggle Theme + CTA) */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-surface-base text-neutral-600 dark:text-neutral-400 hover:text-primary hover:border-primary/40 transition-all cursor-pointer"
            aria-label="Alternar tema"
            id="theme-toggle"
          >
            {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <a
            href={contactData.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border border-neutral-200 dark:border-neutral-800 bg-text-base text-bg-base hover:opacity-90 transition-all"
            id="nav-cta"
          >
            Falar Comigo <ArrowUpRight size={13} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-surface-base cursor-pointer"
            aria-label="Abrir menu"
          >
            <span className={`w-4 h-[1.5px] bg-neutral-600 dark:bg-neutral-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[3px]' : '-translate-y-[2px]'}`}></span>
            <span className={`w-4 h-[1.5px] bg-neutral-600 dark:bg-neutral-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[1.5px]' : 'translate-y-[2px]'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-100 dark:border-neutral-900 bg-bg-base transition-all duration-300">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a
              href="#sobre"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white py-1 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#casos"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white py-1 transition-colors"
            >
              Casos Reais
            </a>
            <a
              href="#experiencia"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white py-1 transition-colors"
            >
              Experiência
            </a>
            <a
              href="#competencias"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white py-1 transition-colors"
            >
              Competências
            </a>
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-white py-1 transition-colors"
            >
              Contato
            </a>
            <a
              href={contactData.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold bg-text-base text-bg-base w-full text-center mt-2 transition-all"
            >
              WhatsApp <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
