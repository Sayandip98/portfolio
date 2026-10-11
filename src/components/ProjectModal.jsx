import React, { useEffect } from "react";
import { X, ExternalLink, Info } from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge-row">
            <span className="modal-tag">{project.category.toUpperCase()}</span>
            <span className="modal-status">{project.status}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Title & Headline */}
        <h2 id="modal-title" className="modal-title">{project.title}</h2>
        <p className="modal-headline">{project.headline}</p>

        {/* Problem Statement Box */}
        <div className="modal-problem-box">
          <div className="box-label">
            <Info size={16} />
            <span>Problem Addressed</span>
          </div>
          <p className="box-text">{project.problem}</p>
        </div>

        {/* Detailed Architecture Description */}
        <div className="modal-section">
          <h3 className="modal-subtitle">System Architecture &amp; Implementation</h3>
          <p className="modal-desc">{project.description}</p>
        </div>

        {/* Key Metrics / Stats */}
        {project.stats && (
          <div className="modal-stats-grid">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="modal-stat-card">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="modal-section">
          <h3 className="modal-subtitle">Technologies Employed</h3>
          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="modal-tag-pill">{tag}</span>
            ))}
          </div>
        </div>

        {/* Demo Status Note */}
        {project.demoNote && (
          <div className="modal-note-box">
            <span className="note-title">Deployment Status:</span>
            <span className="note-body">{project.demoNote}</span>
          </div>
        )}

        {/* Modal Actions */}
        <div className="modal-actions">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary modal-btn"
            >
              <GithubIcon size={18} />
              <span>View Source Code</span>
            </a>
          )}

          {project.demoAvailable && project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary modal-btn"
            >
              <span>Launch Live App</span>
              <ExternalLink size={18} />
            </a>
          ) : (
            <span className="modal-btn-disabled">
              <span>Demo in Repository</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
