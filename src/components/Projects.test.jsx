import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Projects from './Projects';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  },
}));

describe('Projects Component', () => {
  it('renders the section heading', () => {
    render(<Projects />);
    expect(screen.getByText('Building real-world tools')).toBeInTheDocument();
  });

  it('renders all projects from the roadmap', () => {
    render(<Projects />);

    expect(screen.getByText('Prism')).toBeInTheDocument();
    expect(screen.getByText('Pillar CRM')).toBeInTheDocument();
    expect(screen.getByText('CampusLoop')).toBeInTheDocument();
  });

  it('renders project descriptions correctly', () => {
    render(<Projects />);

    expect(screen.getByText(/Interactive web experience featuring kinetic gradients/)).toBeInTheDocument();
    expect(screen.getByText(/All-in-one CRM that makes business management seamless/)).toBeInTheDocument();
    expect(screen.getByText(/A closed-loop, student-run, food delivery service/)).toBeInTheDocument();
  });

  it('renders project statuses', () => {
    render(<Projects />);

    expect(screen.getByText('In progress')).toBeInTheDocument();
    const comingSoonElements = screen.getAllByText('Coming soon');
    expect(comingSoonElements).toHaveLength(2);
  });

  it('renders a link for projects that have one', () => {
    render(<Projects />);

    const prismLink = screen.getByRole('link', { name: /Prism/i });
    expect(prismLink).toBeInTheDocument();
    expect(prismLink).toHaveAttribute('href', 'https://prism-virid-five.vercel.app/');
    expect(prismLink).toHaveAttribute('target', '_blank');
  });

  it('does not render a link for projects without one', () => {
    render(<Projects />);

    // Pillar CRM and CampusLoop should be paragraphs, not links
    const pillarCRM = screen.getByText('Pillar CRM');
    expect(pillarCRM.tagName).not.toBe('A');

    const campusLoop = screen.getByText('CampusLoop');
    expect(campusLoop.tagName).not.toBe('A');
  });
});
