import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ProfileSection } from './components/ProfileSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  // Theme state: default to dark for Immersive UI experience
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return true; // Default to dark for Immersive UI
    }
    return true;
  });

  const [activeSection, setActiveSection] = useState<string>('inicio');

  // Synchronize HTML element class 'dark' and data-theme attribute
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['inicio', 'proyectos', 'tecnologias', 'perfil', 'contacto'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[var(--rk-bg)] text-[var(--rk-text)] selection:bg-[var(--rk-cyan)]/25 selection:text-[var(--rk-cyan)] relative overflow-x-hidden font-sans transition-colors duration-300">
      {/* RuisuKit Océano ambient glows & grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--rk-cyan)]/10 blur-[140px] rounded-full" />
        <div className="absolute top-[40%] right-10 w-[600px] h-[600px] bg-[var(--rk-blue)]/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-[var(--rk-indigo)]/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      </div>

      <div className="relative z-10">
        {/* Navigation Bar */}
        <Navbar
          isDark={isDark}
          onToggleTheme={toggleTheme}
          activeSection={activeSection}
        />

        {/* Main Content Sections */}
        <main id="main-content">
          <Hero />
          <ProjectsSection />
          <SkillsSection />
          <ProfileSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
