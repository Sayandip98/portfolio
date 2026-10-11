import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  FileCode2,
  Layout,
  Zap,
  Smartphone,
  Server,
  Cpu,
  Network,
  Terminal,
  Binary,
  Coffee,
  Database,
  HardDrive,
  GitBranch,
  Send,
  Command,
  Layers,
  Grid,
  Search,
  CheckCircle2
  /* Brain, Sparkles, LineChart - Commented per requirements (AI/ML disabled) */
} from "lucide-react";
import { skillCategories, skillsData } from "../data/skills";
import "./Skills.css";

// Dynamic icon mapper
const iconMap = {
  Code2,
  FileCode2,
  Layout,
  Zap,
  Smartphone,
  Server,
  Cpu,
  Network,
  Terminal,
  Binary,
  Coffee,
  Database,
  HardDrive,
  GitBranch,
  Send,
  Command
};

// Domain grouping configuration for the High-Efficiency Stack View
const domainGroups = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "Reactive UIs & Component Architecture",
    theme: "cyan",
    icon: Code2
  },
  {
    id: "backend",
    title: "Backend & Systems",
    subtitle: "RESTful Services & Server Runtime",
    theme: "violet",
    icon: Server
  },
  {
    id: "databases",
    title: "Databases & Storage",
    subtitle: "Document Stores & Relational Schemas",
    theme: "emerald",
    icon: Database
  },
  {
    id: "languages",
    title: "Languages & CS Core",
    subtitle: "Data Structures & Algorithmic Foundations",
    theme: "amber",
    icon: Terminal
  },
  {
    id: "tools",
    title: "DevOps & Tooling",
    subtitle: "Version Control, API Testing & Workflows",
    theme: "indigo",
    icon: Command
  }
];

export default function Skills() {
  const [viewMode, setViewMode] = useState("grouped"); // 'grouped' | 'matrix'
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [inspectedSkill, setInspectedSkill] = useState(skillsData[0]);

  // Filter for matrix view
  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory =
      activeCategory === "all" || skill.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="section-wrapper skills-section" aria-label="Technical Skills">
      <div className="container">
        {/* Section Header with View Mode Switcher */}
        <div className="skills-header-row">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>02. TECHNICAL ARSENAL</span>
            </div>
            <h2 className="section-title">
              Full-Stack <span className="gradient-text">Engineering Stack.</span>
            </h2>
            <p className="section-description">
              Curated full-stack technologies with a focus on clean modularity, performant client interfaces, and robust backend logic.
            </p>
          </motion.div>

          {/* High-Efficiency View Switcher Toggle */}
          <motion.div
            className="skills-view-toggle"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <button
              className={`view-toggle-btn ${viewMode === "grouped" ? "active" : ""}`}
              onClick={() => setViewMode("grouped")}
              title="Domain-Grouped Architecture View"
            >
              <Layers size={15} />
              <span>Domain Stack</span>
            </button>
            <button
              className={`view-toggle-btn ${viewMode === "matrix" ? "active" : ""}`}
              onClick={() => setViewMode("matrix")}
              title="Interactive Matrix View"
            >
              <Grid size={15} />
              <span>Matrix Grid</span>
            </button>
          </motion.div>
        </div>

        {/* UI MODE 1: High-Efficiency Domain-Grouped Architecture View */}
        {viewMode === "grouped" ? (
          <motion.div
            key="grouped-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="skills-domain-hub"
          >
            <div className="domain-cards-grid">
              {domainGroups.map((group) => {
                const groupSkills = skillsData.filter((s) => s.category === group.id);
                const GroupIcon = group.icon;

                return (
                  <div
                    key={group.id}
                    className={`domain-panel theme-${group.theme} card-base`}
                  >
                    {/* Domain Panel Header */}
                    <div className="domain-panel-header">
                      <div className="domain-title-wrap">
                        <div className={`domain-icon-box box-${group.theme}`}>
                          <GroupIcon size={18} />
                        </div>
                        <div>
                          <h3 className="domain-title">{group.title}</h3>
                          <span className="domain-subtitle">{group.subtitle}</span>
                        </div>
                      </div>
                      <span className="domain-count-badge">
                        {groupSkills.length} Techs
                      </span>
                    </div>

                    {/* Compact Interactive Skill Chips */}
                    <div className="domain-chips-list">
                      {groupSkills.map((skill) => {
                        const IconComponent = iconMap[skill.iconName] || Code2;
                        const isSelected = inspectedSkill?.name === skill.name;

                        return (
                          <button
                            key={skill.name}
                            type="button"
                            className={`skill-chip ${isSelected ? "selected" : ""}`}
                            onClick={() => setInspectedSkill(skill)}
                            onMouseEnter={() => setInspectedSkill(skill)}
                          >
                            <div className="chip-icon">
                              <IconComponent size={14} />
                            </div>
                            <span className="chip-name">{skill.name}</span>
                            <span className="chip-tag">{skill.tag}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Interactive Skill Inspector Bar */}
            {inspectedSkill && (
              <motion.div
                layout
                className="skill-inspector-bar card-base"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inspector-left">
                  <div className="inspector-badge">
                    <CheckCircle2 size={15} />
                    <span>Selected Technology</span>
                  </div>
                  <h4 className="inspector-title">{inspectedSkill.name}</h4>
                  <span className="inspector-category">
                    {inspectedSkill.category.toUpperCase()} • {inspectedSkill.tag}
                  </span>
                </div>
                <div className="inspector-right">
                  <span className="inspector-desc-label">Practical Engineering Application:</span>
                  <p className="inspector-desc">{inspectedSkill.focus}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          /* UI MODE 2: Interactive Matrix View with Search & Filter Tabs */
          <motion.div
            key="matrix-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="skills-matrix-view"
          >
            {/* Search & Category Filter Bar */}
            <div className="matrix-toolbar">
              <div className="skills-filter-nav" role="tablist">
                {skillCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      role="tab"
                      aria-selected={isActive}
                      className={`skills-filter-btn ${isActive ? "active" : ""}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      <span>{cat.label}</span>
                      {isActive && (
                        <motion.div
                          className="skills-active-indicator"
                          layoutId="skillsActiveFilter"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Fast Search Input */}
              <div className="skills-search-box">
                <Search size={15} className="search-icon" />
                <input
                  type="text"
                  placeholder="Filter skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="skills-search-input"
                  aria-label="Filter skills by keyword"
                />
              </div>
            </div>

            {/* Matrix Skills Cards Grid */}
            <motion.div layout className="skills-matrix-grid">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => {
                  const IconComponent = iconMap[skill.iconName] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="matrix-skill-card card-base"
                    >
                      <div className="matrix-card-top">
                        <div className="matrix-icon-box">
                          <IconComponent size={18} />
                        </div>
                        <span className="matrix-skill-tag">{skill.tag}</span>
                      </div>
                      <h4 className="matrix-skill-name">{skill.name}</h4>
                      <p className="matrix-skill-focus">{skill.focus}</p>
                      <span className="matrix-category-label">
                        {skill.category.toUpperCase()}
                      </span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
