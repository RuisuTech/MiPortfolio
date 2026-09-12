import React, { useState, useMemo } from 'react';
import { Cpu, Search, Sparkles, Code2, Database, Cloud, Wrench, Smartphone } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [skillSearch, setSkillSearch] = useState<string>('');

  const categories = [
    'Todas',
    'Frontend',
    'Backend',
    'Mobile',
    'Bases de datos',
    'DevOps',
    'AI & Automation',
    'Tools'
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    'Todas': <Sparkles className="w-4 h-4 text-cyan-400" />,
    'Frontend': <Code2 className="w-4 h-4 text-cyan-400" />,
    'Backend': <Cpu className="w-4 h-4 text-blue-400" />,
    'Mobile': <Smartphone className="w-4 h-4 text-emerald-400" />,
    'Bases de datos': <Database className="w-4 h-4 text-purple-400" />,
    'DevOps': <Cloud className="w-4 h-4 text-sky-400" />,
    'AI & Automation': <Sparkles className="w-4 h-4 text-violet-400" />,
    'Tools': <Wrench className="w-4 h-4 text-pink-400" />
  };

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchCat = activeCategory === 'Todas' || skill.category === activeCategory;
      const matchSearch =
        !skillSearch ||
        skill.name.toLowerCase().includes(skillSearch.toLowerCase().trim()) ||
        skill.category.toLowerCase().includes(skillSearch.toLowerCase().trim());
      return matchCat && matchSearch;
    });
  }, [activeCategory, skillSearch]);

  return (
    <section id="tecnologias" className="py-20 md:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--rk-cyan)]/10 border border-[var(--rk-cyan)]/20 text-[var(--rk-cyan)] text-xs font-bold uppercase tracking-[0.2em] mb-3 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
            <Cpu className="w-3.5 h-3.5 text-[var(--rk-cyan)]" />
            <span>Stack Tecnológico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--rk-text)]">
            Tecnologías
          </h2>
          <p className="mt-4 text-[var(--rk-text-muted)] text-sm sm:text-base leading-relaxed">
            Lenguajes, frameworks, bases de datos y herramientas listadas en el perfil técnico.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div
            id="skill-category-filters"
            className="flex items-center gap-1.5 p-1.5 bg-[var(--rk-bg-card)] rounded-2xl border border-[var(--rk-border)] backdrop-blur-xl overflow-x-auto max-w-full"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat
                    ? 'bg-[var(--rk-cyan)]/15 border border-[var(--rk-cyan)]/30 text-[var(--rk-cyan)] font-bold shadow-[0_0_12px_rgba(34,211,238,0.25)]'
                    : 'text-[var(--rk-text-muted)] hover:text-[var(--rk-text)] hover:bg-white/5'
                }`}
              >
                {categoryIcons[cat]}
                <span>{cat}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[var(--rk-text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="search-skills-input"
              type="text"
              placeholder="Buscar tecnología..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-[var(--rk-bg-card)] border border-[var(--rk-border)] text-[var(--rk-text)] placeholder-[var(--rk-text-muted)] focus:outline-none focus:border-[var(--rk-cyan)]/50 focus:ring-1 focus:ring-[var(--rk-cyan)]/50"
            />
          </div>
        </div>

        {/* Skills Grid - Clean Technologies with Name and Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              id={`skill-item-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="p-4 rounded-2xl bg-[var(--rk-bg-card)] border border-[var(--rk-border)] hover:border-[var(--rk-border-accent)] hover:bg-[var(--rk-bg-card)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-200 backdrop-blur-xl flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--rk-bg)] border border-[var(--rk-border)] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[var(--rk-cyan)]/30 transition-transform">
                {categoryIcons[skill.category] || <Code2 className="w-5 h-5 text-[var(--rk-cyan)]" />}
              </div>
              <div className="overflow-hidden">
                <h3 className="text-sm font-bold text-[var(--rk-text)] group-hover:text-[var(--rk-cyan)] transition-colors truncate">
                  {skill.name}
                </h3>
                <span className="text-[11px] text-[var(--rk-text-muted)] font-mono block truncate">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
