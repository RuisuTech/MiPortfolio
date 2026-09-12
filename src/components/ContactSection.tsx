import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, Copy, Check, Sparkles, MessageSquare, Clock, MapPin, ExternalLink } from 'lucide-react';
import { profileInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Por favor ingresa tu nombre completo.';
    if (!formData.email.trim()) {
      errs.email = 'Por favor ingresa tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Ingresa un formato de correo válido.';
    }
    if (!formData.subject.trim()) errs.subject = 'Indica el motivo o asunto.';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'El mensaje debe tener al menos 10 caracteres.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const emailSubject = encodeURIComponent(`[Contacto Portafolio] ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Hola Jose Luis,\n\n` +
      `Nombre: ${formData.name}\n` +
      `Correo de contacto: ${formData.email}\n\n` +
      `Mensaje:\n${formData.message}\n\n` +
      `--\nEnviado desde el portafolio web de Jose Luis Guzman (RuisuTech)`
    );
    const mailtoUrl = `mailto:${profileInfo.email}?subject=${emailSubject}&body=${emailBody}`;
    setLastMailtoUrl(mailtoUrl);

    // Trigger the default email client
    try {
      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = mailtoUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 600);
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profileInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--rk-cyan)]/10 border border-[var(--rk-cyan)]/20 text-[var(--rk-cyan)] text-xs font-bold uppercase tracking-[0.2em] mb-3 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
            <MessageSquare className="w-3.5 h-3.5 text-[var(--rk-cyan)]" />
            <span>Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--rk-text)]">
            Contacto
          </h2>
          <p className="mt-4 text-[var(--rk-text-muted)] text-sm sm:text-base leading-relaxed">
            Para consultas sobre proyectos, oportunidades laborales o preguntas técnicas, puedes escribirme por los siguientes medios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info, Repositories, Social Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--rk-bg-card)] border border-[var(--rk-border)] backdrop-blur-xl shadow-[var(--rk-card-shadow)] space-y-5">
              <h3 className="text-lg font-bold text-[var(--rk-text)] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--rk-cyan)]" />
                <span>Canales directos</span>
              </h3>

              {/* Email item with copy button */}
              <div className="p-4 rounded-2xl bg-[var(--rk-bg)] border border-[var(--rk-border)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[var(--rk-cyan)]/10 border border-[var(--rk-cyan)]/20 text-[var(--rk-cyan)] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-[var(--rk-text-muted)] block font-medium">Correo Electrónico</span>
                    <span className="text-xs sm:text-sm font-semibold text-[var(--rk-text)] truncate block select-all">
                      {profileInfo.email}
                    </span>
                  </div>
                </div>

                <button
                  id="copy-email-btn"
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl border border-[var(--rk-border)] hover:bg-white/10 text-[var(--rk-text-muted)] hover:text-[var(--rk-text)] transition-colors shrink-0 cursor-pointer"
                  title="Copiar correo al portapapeles"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[var(--rk-cyan)]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Repositories Hub card */}
              <div className="p-4 rounded-2xl bg-[var(--rk-bg)] border border-[var(--rk-border)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--rk-bg-card)] border border-[var(--rk-border)] text-[var(--rk-cyan)] flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--rk-text-muted)] block font-medium">Repositorios en GitHub</span>
                    <span className="text-xs sm:text-sm font-semibold text-[var(--rk-text)]">
                      {profileInfo.githubUrl.replace('https://', '')}
                    </span>
                  </div>
                </div>

                <a
                  id="contact-github-direct-link"
                  href={profileInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-[var(--rk-border)] text-[var(--rk-text)] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Ver
                </a>
              </div>

              {/* Website item */}
              {profileInfo.websiteUrl && (
                <div className="p-4 rounded-2xl bg-[var(--rk-bg)] border border-[var(--rk-border)] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--rk-cyan)]/10 border border-[var(--rk-cyan)]/20 text-[var(--rk-cyan)] flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[var(--rk-text-muted)] block font-medium">Sitio Web</span>
                      <span className="text-xs sm:text-sm font-semibold text-[var(--rk-text)]">
                        {profileInfo.websiteUrl.replace('https://', '').replace(/\/$/, '')}
                      </span>
                    </div>
                  </div>

                  <a
                    id="contact-website-direct-link"
                    href={profileInfo.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-[var(--rk-cyan)]/15 hover:bg-[var(--rk-cyan)]/25 border border-[var(--rk-cyan)]/30 text-[var(--rk-cyan)] text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Visitar
                  </a>
                </div>
              )}

              {/* LinkedIn item */}
              <div className="p-4 rounded-2xl bg-[var(--rk-bg)] border border-[var(--rk-border)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--rk-blue)]/10 border border-[var(--rk-blue)]/20 text-[var(--rk-blue)] flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--rk-text-muted)] block font-medium">LinkedIn</span>
                    <span className="text-xs sm:text-sm font-semibold text-[var(--rk-text)]">
                      {profileInfo.linkedinUrl.replace('https://', '').replace(/\/$/, '')}
                    </span>
                  </div>
                </div>

                <a
                  id="contact-linkedin-direct-link"
                  href={profileInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[var(--rk-cyan)] to-[var(--rk-blue)] text-[#0a0f1a] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-opacity"
                >
                  Ver
                </a>
              </div>

              {/* Quick status notes */}
              <div className="pt-3 space-y-2 text-xs text-[var(--rk-text-muted)] border-t border-[var(--rk-border)]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--rk-cyan)] shrink-0" />
                  <span>Respuesta estimada: en menos de 24 horas.</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--rk-text-muted)] shrink-0" />
                  <span>Ubicación: {profileInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Fast Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--rk-bg-card)] border border-[var(--rk-border)] backdrop-blur-xl shadow-[var(--rk-card-shadow)]">
              <h3 className="text-xl font-bold text-[var(--rk-text)] mb-2">
                Enviar un mensaje
              </h3>
              <p className="text-xs sm:text-sm text-[var(--rk-text-muted)] mb-6">
                Completa el formulario y responderé a tu correo a la brevedad.
              </p>

              {submitted ? (
                <div
                  id="contact-form-success"
                  className="p-8 rounded-2xl bg-[var(--rk-cyan)]/10 border border-[var(--rk-cyan)]/30 text-center space-y-4 animate-fade-in shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--rk-cyan)] to-[var(--rk-blue)] text-[#0a0f1a] flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--rk-cyan)]">
                    ¡Mensaje preparado para enviar!
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--rk-text)]/90 max-w-md mx-auto leading-relaxed">
                    Se preparó el correo con destino a <span className="text-[var(--rk-cyan)] font-mono font-semibold">{profileInfo.email}</span> en tu gestor de correo predeterminado.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    {lastMailtoUrl && (
                      <a
                        id="contact-mailto-fallback-link"
                        href={lastMailtoUrl}
                        className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--rk-cyan)] to-[var(--rk-blue)] text-[#0a0f1a] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Abrir app de correo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-full border border-[var(--rk-border)] bg-[var(--rk-bg-card)] hover:border-[var(--rk-border-accent)] text-[var(--rk-text-muted)] hover:text-[var(--rk-text)] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Redactar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-quick-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name field */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[var(--rk-text)] mb-1.5"
                      >
                        Nombre y apellido *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[var(--rk-bg)] border text-sm text-[var(--rk-text)] placeholder-[var(--rk-text-muted)] focus:outline-none transition-all ${
                          errors.name
                            ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                            : 'border-[var(--rk-border)] focus:border-[var(--rk-cyan)]/50 focus:ring-1 focus:ring-[var(--rk-cyan)]/50'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>
                      )}
                    </div>

                    {/* Email field */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[var(--rk-text)] mb-1.5"
                      >
                        Correo electrónico *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="tu-correo@ejemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[var(--rk-bg)] border text-sm text-[var(--rk-text)] placeholder-[var(--rk-text-muted)] focus:outline-none transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                            : 'border-[var(--rk-border)] focus:border-[var(--rk-cyan)]/50 focus:ring-1 focus:ring-[var(--rk-cyan)]/50'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold text-[var(--rk-text)] mb-1.5"
                    >
                      Asunto *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Motivo del mensaje"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[var(--rk-bg)] border text-sm text-[var(--rk-text)] placeholder-[var(--rk-text-muted)] focus:outline-none transition-all ${
                        errors.subject
                          ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-[var(--rk-border)] focus:border-[var(--rk-cyan)]/50 focus:ring-1 focus:ring-[var(--rk-cyan)]/50'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-red-400 mt-1 block">{errors.subject}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[var(--rk-text)] mb-1.5"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Escribe aquí tu mensaje..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[var(--rk-bg)] border text-sm text-[var(--rk-text)] placeholder-[var(--rk-text-muted)] focus:outline-none transition-all resize-y ${
                        errors.message
                          ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-[var(--rk-border)] focus:border-[var(--rk-cyan)]/50 focus:ring-1 focus:ring-[var(--rk-cyan)]/50'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-400 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-[var(--rk-text-muted)]">
                      * Al pulsar enviar, se abrirá tu aplicación de correo para enviar a {profileInfo.email}.
                    </span>

                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[var(--rk-cyan)] to-[var(--rk-blue)] hover:brightness-110 text-[#0a0f1a] font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(34,211,238,0.35)] flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar mensaje</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
