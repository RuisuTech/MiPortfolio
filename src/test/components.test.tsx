import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DarkModeToggle } from '../components/DarkModeToggle';

describe('DarkModeToggle', () => {
  it('renders without crashing', () => {
    render(<DarkModeToggle isDark={true} onToggle={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('shows sun icon when dark mode is active', () => {
    render(<DarkModeToggle isDark={true} onToggle={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Activar modo claro');
  });

  it('shows moon icon when light mode is active', () => {
    render(<DarkModeToggle isDark={false} onToggle={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Activar modo oscuro');
  });
});
