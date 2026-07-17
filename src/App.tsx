import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { contactData } from './data';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Establish dark mode by default unless stored otherwise
    try {
      const savedTheme = localStorage.getItem('carlos-portfolio-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    } catch (e) {
      // Handle potential security exceptions in sandboxed iframe contexts
    }
    return true; // default dark mode
  });

  // Keep state and HTML classlist in perfect sync
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      try {
        localStorage.setItem('carlos-portfolio-theme', 'dark');
      } catch (e) {}
    } else {
      root.classList.remove('dark');
      try {
        localStorage.setItem('carlos-portfolio-theme', 'light');
      } catch (e) {}
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen transition-colors duration-500 overflow-x-hidden bg-bg-base text-text-base">
      {/* Premium Floating Header */}
      <Header 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        contactData={contactData} 
      />

      {/* Main Container */}
      <main className="w-full relative">
        {/* Hero Area */}
        <Hero 
          contactData={contactData} 
          isDarkMode={isDarkMode} 
        />

        {/* Section divider accent */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-[1px] w-full bg-neutral-100 dark:bg-neutral-900" />
        </div>

        {/* About Section */}
        <About />

        {/* Real Cases Section */}
        <Projects />

        {/* Professional Experience Section */}
        <Experience />

        {/* Matrix of Skills Section */}
        <Skills />

        {/* Elegant Call to Action Contact Section */}
        <Contact />
      </main>
    </div>
  );
}
