import React, { useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code2, Globe, Check } from 'lucide-react';
import { profileInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer id="main-footer" className="bg-[var(--rk-bg)] border-t border-[var(--rk-border)] backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--rk-border)]">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[var(--rk-cyan)]/10 border border-[var(--rk-cyan)]/30 text-[var(--rk-cyan)] flex items-center justify-center font-mono font-bold text-lg shadow-[0_0_15px_rgba(34,211,238,0.25)]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base text-[var(--rk-text)] block">
                {profileInfo.name}
              </span>
              <span className="text-xs text-[var(--rk-cyan)] font-mono">
                {profileInfo.role}
              </span>
            </div>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-[var(--rk-text-muted)]">
            <a href="#inicio" className="hover:text-[var(--rk-cyan)] transition-colors">
              Inicio
            </a>
            <a href="#proyectos" className="hover:text-[var(--rk-cyan)] transition-colors">
              Proyectos
            </a>
            <a href="#tecnologias" className="hover:text-[var(--rk-cyan)] transition-colors">
              Tecnologías
            </a>
            <a href="#perfil" className="hover:text-[var(--rk-cyan)] transition-colors">
              Perfil
            </a>
            <a href="#contacto" className="hover:text-[var(--rk-cyan)] transition-colors">
              Contacto
            </a>
          </div>

          {/* Back to top button */}
          <button
            id="footer-back-to-top"
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--rk-border)] bg-[var(--rk-bg-card)] text-xs font-bold uppercase tracking-wider text-[var(--rk-text-muted)] hover:text-[var(--rk-text)] hover:border-[var(--rk-cyan)]/30 transition-all cursor-pointer"
            aria-label="Volver al inicio de la página"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--rk-cyan)]" />
          </button>
        </div>

        {/* Bottom Social & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--rk-text-muted)]">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {profileInfo.name}. Todos los derechos reservados.</span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href={profileInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--rk-text-muted)] hover:text-[var(--rk-cyan)] transition-colors"
              title="GitHub Repositories"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--rk-text-muted)] hover:text-[var(--rk-blue)] transition-colors"
              title="LinkedIn (www.linkedin.com/in/ruisutech)"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            {profileInfo.websiteUrl && (
              <a
                href={profileInfo.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--rk-text-muted)] hover:text-[var(--rk-cyan)] transition-colors"
                title="Sitio Web (www.ruisu.tech)"
              >
                <Globe className="w-4 h-4" />
              </a>
            )}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-[var(--rk-text-muted)] hover:text-[var(--rk-cyan)] transition-colors cursor-pointer"
              title={copiedEmail ? "¡Correo copiado!" : `Copiar correo: ${profileInfo.email}`}
            >
              {copiedEmail ? <Check className="w-4 h-4 text-[var(--rk-cyan)]" /> : <Mail className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
