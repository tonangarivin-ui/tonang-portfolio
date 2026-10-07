import React from 'react';
import { PROJECTS } from '../data/projects';

export const SelectedWork: React.FC = () => {
  return (
    <section className="section-spacer work-section" id="selected-work" aria-label="Karya Terpilih">
      <div className="container">
        <div className="section-header-editorial">
          <div className="section-meta-index">
            <span className="index-num">01</span>
            <span className="index-label">Karya Pilihan</span>
          </div>
          <h2 className="section-title">Studi Kasus & Project Nyata</h2>
          <p className="section-description">
            Karya digital yang dirancang dan dibangun dengan fokus pada kegunaan nyata, status implementasi terverifikasi, serta struktur antarmuka yang siap digunakan.
          </p>
        </div>

        <div className="case-study-stream">
          {PROJECTS.map((project, index) => (
            <article key={project.id} className="case-study-spread">
              {/* Editorial Header Row */}
              <div className="case-study-header">
                <div className="case-study-num-wrap">
                  <span className="case-study-num">No. 0{index + 1}</span>
                  <span className="case-study-cat">Web & Produk Digital</span>
                </div>
                <div className="case-study-status-wrap">
                  <span
                    className={`status-indicator ${
                      project.status === 'Live' ? 'status-live' : 'status-ongoing'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Main Content Split: Left Narrative, Right Visual Case-Study Plate */}
              <div className="case-study-body">
                <div className="case-study-narrative">
                  <h3 className="case-study-title">{project.title}</h3>
                  <div className="case-study-role">{project.role}</div>

                  <p className="case-study-desc">{project.description}</p>

                  <div className="case-study-details-table">
                    <div className="detail-row">
                      <span className="detail-key">Fokus Rancang</span>
                      <span className="detail-val">{project.preview.tagline}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-key">Domain Asli</span>
                      <span className="detail-val mono">{project.displayUrl}</span>
                    </div>
                  </div>

                  <div className="case-study-scope">
                    <span className="scope-label">Cakupan Teknis:</span>
                    <ul className="scope-list" aria-label={`Cakupan teknis untuk ${project.title}`}>
                      {project.techTags.map((tag) => (
                        <li key={tag} className="scope-item">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-study-actions">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary case-study-btn"
                      aria-label={`Buka website asli ${project.title} di tab baru`}
                    >
                      <span>Buka website asli</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                {/* Right: Visual Case-Study Preview Plate */}
                <div className="case-study-visual-plate">
                  <div className="visual-plate-header">
                    <span className="plate-badge">Preview Antarmuka</span>
                    <span className="plate-domain">{project.displayUrl}</span>
                  </div>

                  <div className="visual-plate-screen">
                    <div className="plate-banner-title">
                      <h4>{project.preview.badge}</h4>
                      <p>{project.preview.tagline}</p>
                    </div>

                    <div className="plate-sample-cards">
                      {project.preview.sampleItems.map((item, i) => (
                        <div key={i} className="plate-sample-card">
                          <span className="plate-card-tag">{item.tag}</span>
                          <h5 className="plate-card-title">{item.title}</h5>
                          <p className="plate-card-text">{item.detail}</p>
                        </div>
                      ))}
                    </div>

                    <div className="plate-metric-strip">
                      <span className="metric-strip-key">{project.preview.highlightMetricLabel}:</span>
                      <span className="metric-strip-val">{project.preview.highlightMetricValue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
