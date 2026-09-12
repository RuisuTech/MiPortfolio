import React, { useEffect } from 'react';
import { X, Github, Star, Cpu, Layers, CheckCircle, Calendar } from 'lucide-react';
import { Project } from '../types';
import { DEFAULT_PROJECT_IMAGE, DEFAULT_PROJECT_BANNER } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-3xl max-h-[90vh] bg-[var(--rk-bg-card)] border border-[var(--rk-border)] rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-y-auto flex flex-col text-[var(--rk-text)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[var(--rk-bg-card)]/95 backdrop-blur-xl border-b border-[var(--rk-border)]">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--rk-cyan)]/10 text-[var(--rk-cyan)] border border-[var(--rk-cyan)]/30">
              {project.category}
            </span>
            <span className="text-xs text-[var(--rk-text-muted)] flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-[var(--rk-cyan)]" />
              {project.year}
            </span>
          </div>

          <button
            id="modal-close-button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-[var(--rk-text-muted)] hover:text-[var(--rk-text)] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar ventana modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Image Banner */}
        {(() => {
          const projectImage = project.image || DEFAULT_PROJECT_IMAGE;
          const isLogoImage =
            projectImage === DEFAULT_PROJECT_IMAGE ||
            projectImage.includes('avatars.githubusercontent.com') ||
            projectImage.includes('project-default');

          return (
            <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-[var(--rk-bg)] flex items-center justify-center">
              {isLogoImage ? (
                <>
                  <img
                    src={projectImage}
                    alt=""
                    aria-hidden="true"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-125 select-none pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
                  <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-1.5 bg-gradient-to-tr from-[var(--rk-cyan)] to-[var(--rk-blue)] shadow-[0_0_35px_rgba(34,211,238,0.4)]">
                    <img
                      src={projectImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = DEFAULT_PROJECT_BANNER;
                      }}
                      className="w-full h-full object-cover rounded-2xl bg-[var(--rk-bg)]"
                      loading="lazy"
                    />
                  </div>
                </>
              ) : (
                <img
                  src={projectImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = DEFAULT_PROJECT_IMAGE;
                  }}
                  className="w-full h-full object-cover opacity-90"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--rk-bg-card)] via-[var(--rk-bg-card)]/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 text-[var(--rk-text)] z-10">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{project.title}</h2>
                <p className="text-xs sm:text-sm text-[var(--rk-cyan)] font-mono mt-1 line-clamp-1">{project.tagline}</p>
              </div>
            </div>
          );
        })()}

        {/* Modal Body Content */}
        <div className="p-6 space-y-6">
          {/* Action Links & Metrics */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--rk-border)]">
            <div className="flex flex-wrap items-center gap-3">
              <a
                id="modal-project-github"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--rk-bg)] border border-[var(--rk-border)] hover:border-[var(--rk-border-accent)] text-[var(--rk-cyan)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--rk-cyan)]/10 transition-all shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>Repo GitHub ↗</span>
              </a>
            </div>

            {project.stars && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono font-bold">
                <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                <span>{project.stars} Stars</span>
              </div>
            )}
          </div>

          {/* Metrics highlights if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-[var(--rk-text-muted)] uppercase mb-3">
                Métricas de Rendimiento e Impacto
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[var(--rk-bg)] border border-[var(--rk-border)]"
                  >
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-[var(--rk-text-muted)]">
                      {metric.label}
                    </span>
                    <span className="block text-base sm:text-lg font-bold text-[var(--rk-text)] font-mono mt-0.5">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full description */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[var(--rk-text-muted)] uppercase mb-2">
              Descripción General
            </h3>
            <p className="text-[var(--rk-text)]/90 leading-relaxed text-sm sm:text-base">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-[var(--rk-text-muted)] uppercase mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--rk-cyan)]" />
                <span>Características Clave</span>
              </h3>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--rk-text)]/90"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--rk-cyan)] mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Details */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-[var(--rk-text-muted)] uppercase mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[var(--rk-blue)]" />
                <span>Arquitectura Técnica</span>
              </h3>
              <div className="space-y-2">
                {project.architecture.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[var(--rk-bg)] border border-[var(--rk-border)] text-xs text-[var(--rk-text)]/90 font-mono"
                  >
                    {arch}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack tags */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[var(--rk-text-muted)] uppercase mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[var(--rk-indigo)]" />
              <span>Stack Tecnológico</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[var(--rk-bg)] text-[var(--rk-cyan)] border border-[var(--rk-cyan)]/25"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[var(--rk-bg)] border-t border-[var(--rk-border)] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full border border-[var(--rk-border)] text-[var(--rk-text-muted)] hover:text-[var(--rk-text)] hover:bg-white/10 transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
