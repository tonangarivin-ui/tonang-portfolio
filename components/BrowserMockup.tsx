'use client';

import React, { useState } from 'react';
import { Project } from '../data/projects';

interface BrowserMockupProps {
  projects: Project[];
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({ projects }) => {
  const [activeId, setActiveId] = useState<string>(projects[0]?.id || '');

  const activeProject =
    projects.find((p) => p.id === activeId) || projects[0];

  if (!activeProject) return null;

  return (
    <div className="browser-mockup" aria-label="Interactive Browser Mockup Showcase">
      {/* Browser Chrome Header */}
      <div className="browser-chrome">
        <div className="browser-chrome-top">
          <div className="window-controls" aria-hidden="true">
            <span className="window-dot dot-red" />
            <span className="window-dot dot-yellow" />
            <span className="window-dot dot-green" />
          </div>

          <div className="browser-address-bar" title={`URL: https://${activeProject.displayUrl}`}>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            <span className="browser-address-text">https://{activeProject.displayUrl}</span>
          </div>

          <div className="browser-chrome-tag" aria-hidden="true">
            <span>PREVIEW</span>
          </div>
        </div>

        {/* Project Selector Tabs */}
        <div className="browser-tabs-bar" role="tablist" aria-label="Daftar tab preview project">
          {projects.map((project) => {
            const isActive = project.id === activeProject.id;
            return (
              <button
                key={project.id}
                role="tab"
                id={`tab-${project.id}`}
                aria-controls={`panel-${project.id}`}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                type="button"
                className={`browser-tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveId(project.id)}
              >
                <span className="tab-title">{project.title}</span>
                <span
                  className={`status-indicator ${
                    project.status === 'Live' ? 'status-live' : 'status-ongoing'
                  }`}
                >
                  {project.status}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Browser Viewport */}
      <div
        className="browser-viewport"
        id={`panel-${activeProject.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeProject.id}`}
      >
        <div className="viewport-banner">
          <div className="preview-label-group">
            <span className="preview-tag">Simulasi UI</span>
            <span className="preview-note">
              Bukan embed langsung atau screenshot final
            </span>
          </div>

          <a
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary viewport-cta"
            aria-label={`Buka project asli ${activeProject.title} di tab baru`}
          >
            <span>Buka project asli</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="viewport-headline-group">
          <h3 className="viewport-title">{activeProject.title}</h3>
          <p className="viewport-tagline">{activeProject.preview.tagline}</p>
        </div>

        {/* Simulated UI Screen Grid */}
        <div className="viewport-screen">
          <div className="preview-grid">
            {activeProject.preview.sampleItems.map((item, idx) => (
              <div key={idx} className="preview-mini-card">
                <div className="mini-card-head">
                  <span className="mini-card-tag">{item.tag}</span>
                  <h4 className="mini-card-title">{item.title}</h4>
                </div>
                <p className="mini-card-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="viewport-footer">
          <div className="viewport-meta">
            <span className="viewport-meta-label">{activeProject.preview.highlightMetricLabel}: </span>
            <strong className="viewport-meta-val">{activeProject.preview.highlightMetricValue}</strong>
          </div>
          <div className="viewport-meta">
            <span className="viewport-meta-label">Peran: </span>
            <strong className="viewport-meta-val">{activeProject.role}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
