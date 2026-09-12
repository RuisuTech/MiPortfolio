import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, MapPin, Calendar, CheckCircle2, ChevronRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { experienceData, educationData, certificationsData, profileInfo } from '../data/portfolioData';

export const ProfileSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experiencia' | 'educacion' | 'certificaciones'>('experiencia');

  return (
    <section id="perfil" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--rk-cyan)]/10 border border-[var(--rk-cyan)]/20 text-[var(--rk-cyan)] text-xs font-bold uppercase tracking-[0.2em] mb-3 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
            <Briefcase className="w-3.5 h-3.5 text-[var(--rk-cyan)]" />
            <span>Trayectoria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--rk-text)]">
            Sobre mí y Trayectoria
          </h2>
          <p className="mt-4 text-[var(--rk-text-muted)] text-sm sm:text-base leading-relaxed">
            Formación en desarrollo de software, experiencia en proyectos prácticos y constante aprendizaje técnico.
          </p>
        </div>

        {/* Bio Card Overview */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[var(--rk-bg-card)] border border-[var(--rk-border)] backdrop-blur-xl shadow-[var(--rk-card-shadow)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={profileInfo.avatarUrl || "https://avatars.githubusercontent.com/u/138331809?v=4"}
                  alt={profileInfo.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[var(--rk-cyan)]/80 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                />
                <div>
                  <h3 className="text-xl font-bold text-[var(--rk-text)]">
                    {profileInfo.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[var(--rk-cyan)] font-mono">
                      @{profileInfo.username || 'RuisuTech'}
                    </span>
                    <span className="text-xs text-[var(--rk-text-muted)]">•</span>
                    <span className="text-xs text-[var(--rk-text-muted)] font-medium">
                      Perú
                    </span>
                  </div>
                  <p className="text-xs text-[var(--rk-text-muted)] font-mono mt-0.5">
                    {profileInfo.role}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-[var(--rk-text-muted)]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--rk-cyan)] shrink-0" />
                  <span className="text-[var(--rk-text)]/90">{profileInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--rk-blue)] shrink-0" />
                  <span className="text-[var(--rk-text)]/90">Proyectos de código abierto en GitHub</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[var(--rk-indigo)] shrink-0" />
                  <span className="text-[var(--rk-text)]/90">Enfoque en código ordenado y buenas prácticas</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3 text-[var(--rk-text)]/90 text-sm sm:text-base leading-relaxed">
              {profileInfo.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center mb-10">
          <div
            id="profile-nav-tabs"
            className="flex items-center gap-1.5 p-1.5 bg-[var(--rk-bg-card)] rounded-2xl border border-[var(--rk-border)] backdrop-blur-xl overflow-x-auto max-w-full"
          >
            <button
              onClick={() => setActiveTab('experiencia')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'experiencia'
                  ? 'bg-[var(--rk-cyan)]/15 border border-[var(--rk-cyan)]/30 text-[var(--rk-cyan)] font-bold shadow-[0_0_12px_rgba(34,211,238,0.25)]'
                  : 'text-[var(--rk-text-muted)] hover:text-[var(--rk-text)] hover:bg-white/5'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experiencia</span>
            </button>

            <button
              onClick={() => setActiveTab('educacion')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'educacion'
                  ? 'bg-[var(--rk-cyan)]/15 border border-[var(--rk-cyan)]/30 text-[var(--rk-cyan)] font-bold shadow-[0_0_12px_rgba(34,211,238,0.25)]'
                  : 'text-[var(--rk-text-muted)] hover:text-[var(--rk-text)] hover:bg-white/5'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Educación</span>
            </button>

            <button
              onClick={() => setActiveTab('certificaciones')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'certificaciones'
                  ? 'bg-[var(--rk-cyan)]/15 border border-[var(--rk-cyan)]/30 text-[var(--rk-cyan)] font-bold shadow-[0_0_12px_rgba(34,211,238,0.25)]'
                  : 'text-[var(--rk-text-muted)] hover:text-[var(--rk-text)] hover:bg-white/5'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certificaciones</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Experiencia Laboral Timeline */}
        {activeTab === 'experiencia' && (
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-[var(--rk-border)]">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                id={`exp-card-${exp.id}`}
                className="relative pl-10 sm:pl-16 group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute left-2.5 sm:left-6.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[var(--rk-bg)] bg-[var(--rk-cyan)] shadow-[0_0_12px_rgba(34,211,238,0.8)] group-hover:scale-125 transition-transform" />

                <div className="p-6 sm:p-7 rounded-3xl bg-[var(--rk-bg-card)] border border-[var(--rk-border)] hover:border-[var(--rk-border-accent)] backdrop-blur-xl shadow-[var(--rk-card-shadow)] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[var(--rk-text)]">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-[var(--rk-cyan)]">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[var(--rk-text-muted)] font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[var(--rk-cyan)]" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[var(--rk-cyan)]" />
                        {exp.location}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-[var(--rk-bg)] text-[var(--rk-cyan)] border border-[var(--rk-cyan)]/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--rk-text)]/90 mb-4 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-5">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-[var(--rk-text-muted)]">
                      Logros Cuantificables
                    </h5>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--rk-text)]/90"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[var(--rk-cyan)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack used in this role */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--rk-border)]">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-mono rounded-lg bg-[var(--rk-bg)] text-[var(--rk-cyan)] border border-[var(--rk-cyan)]/20"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Formación Académica */}
        {activeTab === 'educacion' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="p-6 sm:p-7 rounded-3xl bg-[var(--rk-bg-card)] border border-[var(--rk-border)] backdrop-blur-xl shadow-[var(--rk-card-shadow)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--rk-blue)]/10 border border-[var(--rk-blue)]/20 text-[var(--rk-blue)] flex items-center justify-center mb-4 shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[var(--rk-cyan)]">
                    {edu.period}
                  </span>
                  <h4 className="text-lg font-bold text-[var(--rk-text)] mt-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-[var(--rk-text)]/90 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[var(--rk-text-muted)] flex items-center gap-1 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[var(--rk-cyan)]" />
                    {edu.location}
                  </p>

                  {edu.honors && (
                    <div
                      className={`p-3 rounded-2xl text-xs font-medium mb-4 flex items-center gap-2 border ${
                        edu.honors.toLowerCase().includes('sin certificado')
                          ? 'bg-[var(--rk-bg)] border-[var(--rk-border)] text-[var(--rk-text-muted)]'
                          : 'bg-amber-500/10 border-amber-500/25 text-amber-300'
                      }`}
                    >
                      <Award
                        className={`w-4 h-4 shrink-0 ${
                          edu.honors.toLowerCase().includes('sin certificado')
                            ? 'text-[var(--rk-cyan)]'
                            : 'text-amber-400'
                        }`}
                      />
                      <span>{edu.honors}</span>
                    </div>
                  )}

                  {edu.courses && edu.courses.length > 0 && (
                    <div>
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-[var(--rk-text-muted)] mb-2">
                        Materias y Módulos Clave
                      </h5>
                      <ul className="space-y-1">
                        {edu.courses.map((course, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-[var(--rk-text)]/90 flex items-center gap-1.5"
                          >
                            <ChevronRight className="w-3 h-3 text-[var(--rk-cyan)]" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Certificaciones Técnicas Oficiales */}
        {activeTab === 'certificaciones' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-3xl bg-[var(--rk-bg-card)] border border-[var(--rk-border)] backdrop-blur-xl shadow-[var(--rk-card-shadow)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[var(--rk-text)] leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[var(--rk-text-muted)] mt-1 font-medium">
                    Emisor: {cert.issuer}
                  </p>
                  <p className="text-xs text-[var(--rk-cyan)] font-mono mt-0.5">
                    Año: {cert.issueDate}
                  </p>

                  {cert.credentialId && (
                    <div className="mt-4 p-3 rounded-2xl bg-[var(--rk-bg)] border border-[var(--rk-border)] font-mono text-[11px] text-[var(--rk-text)]/90">
                      <span className="text-[var(--rk-text-muted)] block text-[10px] uppercase font-bold">Credencial ID:</span>
                      {cert.credentialId}
                    </div>
                  )}
                </div>

                {cert.credentialUrl && (
                  <div className="mt-6 pt-4 border-t border-[var(--rk-border)]">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--rk-cyan)] hover:text-[var(--rk-sky)] hover:underline uppercase tracking-wider"
                    >
                      <span>Ver Certificado Oficial</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
