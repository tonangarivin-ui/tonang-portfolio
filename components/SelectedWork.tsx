import React from 'react';
import { PROJECTS } from '../data/projects';

export const SelectedWork: React.FC = () => {
  return (
    <section className="section-spacer" id="selected-work" aria-label="Karya Terpilih">
      <div className="container">
        <span className="section-eyebrow">Karya Terpilih</span>
        <h2 className="section-title">Project yang Dirancang dan Dibangun</h2>
        <p className="section-description">
          Daftar project nyata dengan status terverifikasi, peran pengerjaan, dan tautan langsung untuk menguji implementasinya.
        </p>

        <div className="work-list">
          {PROJECTS.map((project) => (
            <article key={project.id} className="work-card">
              <div className="work-card-main">
                <div className="work-card-header">
                  <h3 className="work-title">{project.title}</h3>
                  <span
                    className={`status-badge ${
                      project.status === 'Live' ? 'live' : 'ongoing'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="work-role">{project.role}</div>

                <p className="work-desc">{project.description}</p>

                <div className="work-tech-tags" aria-label={`Teknologi dan cakupan untuk ${project.title}`}>
                  {project.techTags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="work-card-side">
                <div className="work-side-info">
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
                    Alamat Website
                  </span>
                  <span className="work-url-display">{project.displayUrl}</span>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label={`Buka website asli ${project.title} di tab baru`}
                >
                  <span>Buka website asli</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
