import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Maximize2,
  AlertCircle,
  // Sparkles,
  Clapperboard,
  Activity,
  Kanban,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "../components/icons/SocialIcons";
import { projectCategories, projectsData } from "../data/projects";
import ProjectModal from "../components/ProjectModal";
import "./Projects.css";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-wrapper projects-section" aria-label="Projects Showcase">
      <div className="container">
        {/* Section Header with Scroll Animation */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>03. FEATURED WORK</span>
          </div>
          <h2 className="section-title">
            Engineered with <span className="gradient-text">Precision &amp; Clarity.</span>
          </h2>
          <p className="section-description">
            Selected software projects addressing real-world workflow friction, user reservation flows, developer analytics, and intelligent utilities.
          </p>
        </motion.div>

        {/* Project Filter Tabs */}
        <motion.div
          className="projects-filter-nav"
          role="tablist"
          aria-label="Project Categories"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`projects-filter-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <motion.div
                    className="projects-active-pill"
                    layoutId="projectsCategoryPill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid with Scroll Reveal */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="project-card card-base"
              >
                {/* Visual Preview Header */}
                <div className="project-preview-container">
                  {/* Dynamic Custom UI Previews */}
                  {project.previewType === "cinema" && (
                    <div className="preview-cinema">
                      <div className="screen-curve" />
                      <div className="cinema-seats-matrix">
                        <div className="seat-row">
                          <span className="seat booked" />
                          <span className="seat" />
                          <span className="seat" />
                          <span className="seat selected" />
                          <span className="seat" />
                          <span className="seat booked" />
                        </div>
                        <div className="seat-row">
                          <span className="seat" />
                          <span className="seat booked" />
                          <span className="seat" />
                          <span className="seat" />
                          <span className="seat selected" />
                          <span className="seat" />
                        </div>
                        <div className="seat-row">
                          <span className="seat booked" />
                          <span className="seat booked" />
                          <span className="seat" />
                          <span className="seat" />
                          <span className="seat" />
                          <span className="seat" />
                        </div>
                      </div>
                      <div className="cinema-preview-footer">
                        <Clapperboard size={14} className="preview-badge-icon" />
                        <span>Interactive Seat Matrix • CineReserve</span>
                      </div>
                    </div>
                  )}

                  {project.previewType === "analytics" && (
                    <div className="preview-analytics">
                      <div className="analytics-header">
                        <Activity size={14} className="preview-badge-icon" />
                        <span>GitHub Cadence &amp; Commit Graph</span>
                      </div>
                      <svg viewBox="0 0 300 90" className="analytics-chart-svg">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,70 Q40,30 80,50 T160,20 T240,40 T300,10 L300,90 L0,90 Z"
                          fill="url(#chartGrad)"
                        />
                        <path
                          d="M0,70 Q40,30 80,50 T160,20 T240,40 T300,10"
                          fill="none"
                          stroke="#00E5FF"
                          strokeWidth="2.5"
                        />
                      </svg>
                      <div className="analytics-stats-row">
                        <span className="stat-chip">Velocity: +38%</span>
                        <span className="stat-chip">Health: 99.4%</span>
                        <span className="stat-chip">PRs: Active</span>
                      </div>
                    </div>
                  )}

                  {/* AI Preview Visual (Commented per requirements - Full-stack web development focus) */}
                  {/*
                  {project.previewType === "ai" && (
                    <div className="preview-ai">
                      <div className="ai-console-header">
                        <Sparkles size={14} className="preview-badge-icon-violet" />
                        <span>LLM Embedding &amp; Context Pipeline</span>
                      </div>
                      <div className="ai-code-console">
                        <div className="console-line">
                          <span className="prompt-arrow">&gt;</span>
                          <span className="prompt-text">vector_search(query)</span>
                        </div>
                        <div className="console-line result">
                          <span className="result-tag">Match:</span>
                          <span className="result-val">Cosine Sim 0.94 • Top Token</span>
                        </div>
                        <div className="console-line explanation">
                          <span className="result-explain">&#10003; Documented &amp; Cached in 14ms</span>
                        </div>
                      </div>
                    </div>
                  )}
                  */}

                  {project.previewType === "kanban" && (
                    <div className="preview-kanban">
                      <div className="kanban-header">
                        <Kanban size={14} className="preview-badge-icon" />
                        <span>Agile Sprint Flow</span>
                      </div>
                      <div className="kanban-cols">
                        <div className="kanban-mini-col">
                          <span className="col-title">In Progress</span>
                          <div className="mini-task-card">Auth Hook</div>
                          <div className="mini-task-card">Grid Layout</div>
                        </div>
                        <div className="kanban-mini-col">
                          <span className="col-title">Review</span>
                          <div className="mini-task-card">API Routes</div>
                        </div>
                        <div className="kanban-mini-col">
                          <span className="col-title">Shipped</span>
                          <div className="mini-task-card done">&#10003; Release v1</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Overlay Quick Inspect Button */}
                  <div className="preview-overlay">
                    <button
                      className="btn btn-secondary btn-quick-view"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`Quick view details for ${project.title}`}
                    >
                      <Maximize2 size={16} />
                      <span>Inspect Architecture</span>
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="project-card-body">
                  <div className="project-card-top-info">
                    <span className="project-status-badge">{project.status}</span>
                    <span className="project-cat-badge">{project.category}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  {/* Problem Statement Box */}
                  <div className="project-problem-preview">
                    <span className="problem-label">Problem Solved:</span>
                    <p className="problem-text">{project.problem}</p>
                  </div>

                  <p className="project-desc">{project.description}</p>

                  {/* Tech Badges */}
                  <div className="project-tags-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Prominent Gradient CTA Button matching Image 1 */}
                  <div className="project-view-cta-wrap">
                    <button
                      className="btn-view-project-gradient"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View Project details for ${project.title}`}
                    >
                      <span>View Project</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  {/* Secondary Quick Links */}
                  <div className="project-secondary-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-sub-link"
                        aria-label={`GitHub Repository for ${project.title}`}
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.demoAvailable && project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-sub-link highlight"
                        aria-label={`Live Demo for ${project.title}`}
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="project-sub-link muted">
                        <AlertCircle size={13} />
                        <span>In Repo</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Architecture Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
