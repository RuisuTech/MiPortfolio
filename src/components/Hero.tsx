import React, { useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Globe, Check } from 'lucide-react';
import { profileInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadCV = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/CV_Jose_Luis_Guzman.pdf');
      if (!response.ok) throw new Error('Network error');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'CV_Jose_Luis_Guzman.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
    } catch {
      window.location.href = '/CV_Jose_Luis_Guzman.pdf';
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* RuisuKit Océano ambient glow effects */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[var(--rk-cyan)]/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-36 right-10 w-80 h-80 bg-[var(--rk-blue)]/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Avatar and GitHub Tag */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--rk-cyan)] via-[var(--rk-sky)] to-[var(--rk-blue)] blur-sm opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <img
                src={profileInfo.avatarUrl || "https://avatars.githubusercontent.com/u/138331809?v=4"}
                alt={profileInfo.name}
                className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-[var(--rk-cyan)]/80 shadow-[0_0_25px_rgba(34,211,238,0.4)]"
              />
              <div className="absolute -bottom-2 -right-1 px-2.5 py-0.5 rounded-full bg-[var(--rk-bg-card)] border border-[var(--rk-cyan)]/50 text-[var(--rk-cyan)] text-[10px] font-mono font-bold tracking-wider shadow-lg">
                @{profileInfo.username || 'RuisuTech'}
              </div>
            </div>
          </div>

          {/* Headline and Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[var(--rk-text)] mb-6 leading-[1.1]">
            Hola, soy <span className="rk-gradient-text">{profileInfo.name}</span>
          </h1>

          <p className="text-sm sm:text-lg font-semibold text-[var(--rk-cyan)] mb-4 max-w-2xl font-mono tracking-wider">
            &lt;{profileInfo.role} /&gt;
          </p>

          <p className="text-sm sm:text-base text-[var(--rk-text-muted)] mb-10 max-w-2xl leading-relaxed">
            {profileInfo.headline}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <button
              id="hero-cta-projects"
              onClick={() => handleScrollTo('#proyectos')}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[var(--rk-cyan)] via-[var(--rk-sky)] to-[var(--rk-blue)] hover:brightness-110 text-[#0a0f1a] font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-200 flex items-center gap-2 cursor-pointer hover:scale-102"
            >
              <span>Ver proyectos</span>
              <ArrowDown className="w-4 h-4 animate-bounce text-[#0a0f1a]" />
            </button>

            <button
              id="hero-cta-contact"
              onClick={() => handleScrollTo('#contacto')}
              className="px-6 py-3.5 rounded-full border border-[var(--rk-border)] bg-[var(--rk-bg-card)] hover:border-[var(--rk-border-accent)] hover:bg-[var(--rk-cyan)]/5 text-[var(--rk-text)] font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Mail className="w-4 h-4 text-[var(--rk-cyan)]" />
              <span>Contactar</span>
            </button>

            <a
              id="hero-cta-cv"
              href="/CV_Jose_Luis_Guzman.pdf"
              download="CV_Jose_Luis_Guzman.pdf"
              onClick={handleDownloadCV}
              title="Descargar Currículum Vitae (PDF)"
              className="px-6 py-3.5 rounded-full border border-[var(--rk-border)] bg-[var(--rk-bg-card)] hover:border-[var(--rk-border-accent)] hover:bg-[var(--rk-cyan)]/5 text-[var(--rk-text)] font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4 text-[var(--rk-cyan)]" />
              <span>Descargar CV</span>
            </a>
          </div>

          {/* Social Repositories & Profiles Links */}
          <div className="flex items-center gap-3">
            <a
              id="hero-social-github"
              href={profileInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl border border-[var(--rk-border)] bg-[var(--rk-bg-card)] text-[var(--rk-text-muted)] hover:text-[var(--rk-cyan)] hover:border-[var(--rk-border-accent)] hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] hover:scale-105 transition-all duration-200"
              title="Perfil y Repositorios en GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              id="hero-social-linkedin"
              href={profileInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl border border-[var(--rk-border)] bg-[var(--rk-bg-card)] text-[var(--rk-text-muted)] hover:text-[var(--rk-blue)] hover:border-[var(--rk-blue)]/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] hover:scale-105 transition-all duration-200"
              title="Perfil Profesional en LinkedIn (www.linkedin.com/in/ruisutech)"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {profileInfo.websiteUrl && (
              <a
                id="hero-social-website"
                href={profileInfo.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl border border-[var(--rk-border)] bg-[var(--rk-bg-card)] text-[var(--rk-text-muted)] hover:text-[var(--rk-cyan)] hover:border-[var(--rk-border-accent)] hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] hover:scale-105 transition-all duration-200"
                title="Sitio Web Oficial (www.ruisu.tech)"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
            <button
              id="hero-social-email"
              type="button"
              onClick={handleCopyEmail}
              className="p-3 rounded-2xl border border-[var(--rk-border)] bg-[var(--rk-bg-card)] text-[var(--rk-text-muted)] hover:text-[var(--rk-cyan)] hover:border-[var(--rk-border-accent)] hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] hover:scale-105 transition-all duration-200 cursor-pointer"
              title={copiedEmail ? "¡Correo copiado al portapapeles!" : `Copiar correo: ${profileInfo.email}`}
            >
              {copiedEmail ? <Check className="w-5 h-5 text-[var(--rk-cyan)]" /> : <Mail className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
