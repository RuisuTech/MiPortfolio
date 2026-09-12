import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Code2, Sparkles, Send } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';
import { profileInfo } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Tecnologías', href: '#tecnologias' },
    { label: 'Perfil', href: '#perfil' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b-0 ${
        isScrolled
          ? 'bg-[var(--rk-bg)]/80 backdrop-blur-2xl py-3 shadow-[0_8px_32px_rgba(0,0,0,0.18)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            id="brand-logo-link"
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center gap-3 group text-[var(--rk-text)] transition-transform duration-300 ease-out hover:-translate-y-0.5"
          >
            <div className="w-9 h-9 bg-gradient-to-tr from-[var(--rk-cyan)] to-[var(--rk-blue)] rounded-xl flex items-center justify-center font-bold text-[#0a0f1a] text-sm shadow-[0_0_15px_rgba(34,211,238,0.35)] group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-[#0a0f1a]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-[var(--rk-text)] group-hover:text-[var(--rk-cyan)] transition-colors duration-300">
                RUISU<span className="rk-gradient-text font-black">TECH</span>
              </span>
              <span className="text-[10px] text-[var(--rk-text-muted)] font-mono uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--rk-cyan)] animate-pulse" />
                Desarrollo de Software
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center gap-1.5 bg-[var(--rk-bg-card)]/65 border border-[var(--rk-cyan)]/15 p-1.5 rounded-2xl backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  id={`nav-link-${item.href.replace('#', '')}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium border transition-all duration-300 ease-out select-none ${
                    isActive
                      ? 'bg-[var(--rk-cyan)]/15 border-[var(--rk-cyan)]/35 text-[var(--rk-cyan)] font-semibold shadow-[0_0_14px_rgba(34,211,238,0.22)]'
                      : 'border-transparent text-[var(--rk-text-muted)] hover:text-[var(--rk-text)] hover:bg-[var(--rk-cyan)]/10 hover:border-[var(--rk-cyan)]/25 hover:shadow-[0_0_12px_rgba(34,211,238,0.12)] hover:-translate-y-0.5 active:translate-y-0'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <DarkModeToggle isDark={isDark} onToggle={onToggleTheme} />

            <a
              id="nav-github-link"
              href={profileInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Repositorios en GitHub"
              className="p-2.5 rounded-xl border border-[var(--rk-cyan)]/15 bg-[var(--rk-bg-card)]/70 text-[var(--rk-text-muted)] hover:text-[var(--rk-cyan)] hover:border-[var(--rk-cyan)]/35 hover:bg-[var(--rk-cyan)]/10 hover:shadow-[0_0_12px_rgba(34,211,238,0.15)] hover:-translate-y-0.5 transition-all duration-300 ease-out"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="nav-contact-cta"
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contacto');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--rk-cyan)]/10 border border-[var(--rk-cyan)]/25 rounded-full text-xs font-bold text-[var(--rk-cyan)] uppercase tracking-widest hover:bg-[var(--rk-cyan)]/20 hover:border-[var(--rk-cyan)]/45 hover:shadow-[0_0_16px_rgba(34,211,238,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contacto</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <DarkModeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button
              id="mobile-menu-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-[var(--rk-cyan)]/15 bg-[var(--rk-bg-card)]/70 text-[var(--rk-text)] hover:text-[var(--rk-cyan)] hover:border-[var(--rk-cyan)]/35 hover:bg-[var(--rk-cyan)]/10 transition-all duration-300 ease-out"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 top-[65px] bg-[var(--rk-bg)]/80 backdrop-blur-xl z-40 md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-drawer-content"
            className="bg-[var(--rk-bg-card)] border-b border-[var(--rk-cyan)]/20 p-6 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    id={`mobile-nav-link-${item.href.replace('#', '')}`}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between border transition-all duration-300 ease-out ${
                      isActive
                        ? 'bg-[var(--rk-cyan)]/15 border-[var(--rk-cyan)]/35 text-[var(--rk-cyan)] font-semibold shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                        : 'border-transparent text-[var(--rk-text-muted)] hover:bg-[var(--rk-cyan)]/10 hover:border-[var(--rk-cyan)]/25 hover:text-[var(--rk-cyan)]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-[var(--rk-cyan)]" />}
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[var(--rk-border)] flex flex-col gap-2.5">
              <a
                id="mobile-github-repo-link"
                href={profileInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-[var(--rk-cyan)]/20 bg-[var(--rk-cyan)]/5 text-[var(--rk-text)] font-medium text-xs uppercase tracking-wider hover:border-[var(--rk-cyan)]/40 hover:bg-[var(--rk-cyan)]/15 transition-all duration-300"
              >
                <Github className="w-4 h-4 text-[var(--rk-cyan)]" />
                <span>Explorar GitHub Repositories</span>
              </a>

              <a
                id="mobile-contact-cta-btn"
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contacto');
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[var(--rk-cyan)] to-[var(--rk-blue)] text-[#0a0f1a] font-bold text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:brightness-110 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                <span>Escríbeme un mensaje</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
