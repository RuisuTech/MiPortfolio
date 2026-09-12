import React, { useState, useMemo } from 'react';
import { Github, Search, Sparkles, Star, ArrowUpRight, Code, Info } from 'lucide-react';
import { Project } from '../types';
import { projectsData, DEFAULT_PROJECT_IMAGE, DEFAULT_PROJECT_BANNER } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Todos', 'Fullstack', 'Mobile', 'AI', 'Backend', 'Frontend'];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'Todos' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="proyectos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--rk-cyan)]/10 border border-[var(--rk-cyan)]/20 text-[var(--rk-cyan)] text-xs font-bold uppercase tracking-[0.2em] mb-3 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
            <Code className="w-3.5 h-3.5 text-[var(--rk-cyan)]" />
            <span>Proyectos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--rk-text)]">
            Proyectos Realizados
          </h2>
          <p className="mt-4 text-[var(--rk-text-muted)] text-sm sm:text-base leading-relaxed">
            Selección de proyectos desarrollados en entornos web, mobile y backend.
          </p>
        </div>

        {/* Filter Controls: Categories & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div
            id="project-category-tabs"
            className="flex items-center gap-1.5 p-1.5 bg-[var(--rk-bg-card)] rounded-2xl border border-[var(--rk-border)] backdrop-blur-xl overflow-x-auto max-w-full"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[var(--rk-cyan)]/15 border border-[var(--rk-cyan)]/30 text-[var(--rk-cyan)] font-bold shadow-[0_0_12px_rgba(34,211,238,0.25)]'
                    : 'text-[var(--rk-text-muted)] hover:text-[var(--rk-text)] hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[var(--rk-text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="search-projects-input"
              type="text"
              placeholder="Buscar por tecnología o nombre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-[var(--rk-bg-card)] border border-[var(--rk-border)] text-[var(--rk-text)] placeholder-[var(--rk-text-muted)] focus:outline-none focus:border-[var(--rk-cyan)]/50 focus:ring-1 focus:ring-[var(--rk-cyan)]/50 transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[var(--rk-bg-card)] rounded-3xl border border-dashed border-[var(--rk-border)]">
            <p className="text-[var(--rk-text-muted)] text-sm">
              No se encontraron proyectos con los criterios de búsqueda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[var(--rk-cyan)] uppercase tracking-wider hover:underline cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const projectImage = project.image || DEFAULT_PROJECT_IMAGE;
              const isLogoImage =
                projectImage === DEFAULT_PROJECT_IMAGE ||
                projectImage.includes('avatars.githubusercontent.com') ||
                projectImage.includes('project-default');

              return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group flex flex-col bg-[var(--rk-bg-card)] border border-[var(--rk-border)] rounded-3xl overflow-hidden hover:border-[var(--rk-border-accent)] transition-all duration-300 shadow-[var(--rk-card-shadow)] backdrop-blur-xl"
              >
                {/* Image & Badges Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[var(--rk-bg)] flex items-center justify-center">
                  {isLogoImage ? (
                    <>
                      {/* Ambient background glow from the logo */}
                      <img
                        src={projectImage}
                        alt=""
                        aria-hidden="true"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-125 select-none pointer-events-none"
                        loading="lazy"
                      />
                      {/* Ocean grid overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
                      {/* Centered RuisuTech logo badge */}
                      <div className="relative z-10 w-20 h-20 sm:w-22 sm:h-22 rounded-2xl p-1 bg-gradient-to-tr from-[var(--rk-cyan)] to-[var(--rk-blue)] shadow-[0_0_24px_rgba(34,211,238,0.35)] group-hover:scale-105 group-hover:shadow-[0_0_32px_rgba(34,211,238,0.5)] transition-all duration-300">
                        <img
                          src={projectImage}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = DEFAULT_PROJECT_BANNER;
                          }}
                          className="w-full h-full object-cover rounded-xl bg-[var(--rk-bg)]"
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--rk-bg-card)] via-[var(--rk-bg-card)]/40 to-transparent pointer-events-none" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[var(--rk-bg)]/90 text-[var(--rk-cyan)] backdrop-blur-md border border-[var(--rk-cyan)]/30">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[var(--rk-indigo)]/20 text-[var(--rk-indigo)] border border-[var(--rk-indigo)]/30 backdrop-blur-md">
                        <Sparkles className="w-3 h-3 text-[var(--rk-indigo)]" />
                        Destacado
                      </span>
                    )}
                  </div>

                  {project.stars && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-mono font-bold bg-[var(--rk-bg)]/85 text-amber-300 backdrop-blur-md border border-[var(--rk-border)]">
                      <Star className="w-3 h-3 fill-current text-amber-400" />
                      <span>{project.stars}</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-mono text-[var(--rk-cyan)] font-bold tracking-widest uppercase">
                      {project.year}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--rk-text)] tracking-tight leading-tight line-clamp-1 group-hover:text-[var(--rk-cyan)] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[var(--rk-text-muted)] font-mono mb-2">
                      {project.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--rk-text)]/90 line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-mono rounded-lg bg-[var(--rk-bg)] text-[var(--rk-cyan)] border border-[var(--rk-cyan)]/20 hover:border-[var(--rk-cyan)]/40 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <span className="px-2 py-1 text-[10px] font-mono rounded-lg bg-[var(--rk-bg)] text-[var(--rk-text-muted)] border border-[var(--rk-border)]">
                          +{project.tags.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-[var(--rk-border)] flex items-center justify-between gap-2">
                    <button
                      id={`project-details-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--rk-text-muted)] hover:text-[var(--rk-cyan)] py-1.5 transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-[var(--rk-cyan)]" />
                      <span>Detalles</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        id={`project-github-link-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl border border-[var(--rk-border)] bg-[var(--rk-bg)] text-[var(--rk-cyan)] hover:text-[var(--rk-cyan)] hover:border-[var(--rk-border-accent)] hover:bg-[var(--rk-cyan)]/10 transition-colors text-xs font-bold flex items-center gap-1"
                        title="Ver repositorio de código"
                        aria-label={`Repositorio GitHub de ${project.title}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Repo ↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        )}

        {/* GitHub Full Repositories Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-[var(--rk-bg-card)] border border-[var(--rk-border)] shadow-[var(--rk-card-shadow)] backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--rk-bg)] border border-[var(--rk-border)] flex items-center justify-center text-[var(--rk-cyan)] shrink-0">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[var(--rk-text)] font-bold text-base">Explora todos los repositorios en GitHub</h4>
              <p className="text-[var(--rk-text-muted)] text-xs sm:text-sm mt-0.5">
                Proyectos de código abierto, apps móviles con IA, APIs en Spring Boot, React 19 y más.
              </p>
            </div>
          </div>
          <a
            id="github-all-repos-cta"
            href="https://github.com/RuisuTech?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--rk-cyan)] to-[var(--rk-blue)] hover:brightness-110 text-[#0a0f1a] font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2 border border-[var(--rk-cyan)]/40 shadow-[0_0_15px_rgba(34,211,238,0.25)] shrink-0"
          >
            <span>Ver GitHub @RuisuTech</span>
            <ArrowUpRight className="w-4 h-4 text-[#0a0f1a]" />
          </a>
        </div>
      </div>

      {/* Deep-dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
