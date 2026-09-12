import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDark, onToggle, className = '' }) => {
  return (
    <button
      id="theme-toggle-button"
      onClick={onToggle}
      type="button"
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className={`relative p-2 rounded-xl border border-[var(--rk-border)] bg-[var(--rk-bg-card)] text-[var(--rk-cyan)] hover:border-[var(--rk-border-accent)] hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-200 cursor-pointer flex items-center justify-center ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-90 text-[var(--rk-cyan)]" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-[var(--rk-blue)]" />
      )}
    </button>
  );
};
