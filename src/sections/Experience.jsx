import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Milestone,
  Calendar,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import "./Experience.css";

export default function Experience() {
  const [filterType, setFilterType] = useState("all"); // 'all' | 'education' | 'milestones'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Combine academic education and milestones into a unified sequence
  const unifiedJourney = [
    {
      type: "Academic Degree",
      category: "education",
      period: "2022 — Present",
      title: "Bachelor of Technology in Computer Science & Engineering",
      institution: "University Engineering Institute",
      status: "In Progress",
      description: "Focused on core computational theory, system architecture, data structures, and modern web technologies.",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems (DBMS), Computer Networks, OOP.",
        "Specialized Focus: Modern Web Architecture & Scalable Systems, Full-Stack Applications.",
        "Hands-on Labs: Laboratory implementations in C++, Java, Python, and SQL."
      ],
      tags: ["B.Tech CSE", "Data Structures", "Algorithms", "System Architecture"]
    },
    /* AI & ML Exploration (Commented per user requirements - Full-stack web dev focus)
    {
      type: "AI & ML Exploration",
      category: "milestones",
      period: "Recent Focus",
      title: "Machine Learning & LLM Integration Deep Dive",
      institution: null,
      status: "Active Exploration",
      description: "Hands-on implementation of machine learning foundations, Python neural network workflows, and building context-aware tools with generative AI APIs.",
      highlights: null,
      tags: ["Python", "Prompt Engineering", "FastAPI", "Transformers", "Vector Search"]
    },
    */
    {
      type: "Engineering Milestone",
      category: "milestones",
      period: "Ongoing Mastery",
      title: "Full-Stack Web Architecture Specialization",
      institution: null,
      status: "Completed",
      description: "Mastered building production-grade full-stack web applications with React, Node.js, Express, MongoDB, and modern asynchronous workflows.",
      highlights: null,
      tags: ["React.js", "Node.js", "Express", "REST APIs", "Modern CSS"]
    },
    {
      type: "Core Competency",
      category: "milestones",
      period: "Continuous Practice",
      title: "Algorithmic Problem Solving & Data Structures",
      institution: null,
      status: "Continuous",
      description: "Regular practice solving algorithmic challenges in C++ and Java, honing computational efficiency, space/time complexity, and clean code principles.",
      highlights: null,
      tags: ["C++", "Java", "DSA", "Problem Solving"]
    },
    {
      type: "Higher Secondary",
      category: "education",
      period: "2020 — 2022",
      title: "Higher Secondary Education (Pure Science)",
      institution: "Higher Secondary Council",
      status: "Completed",
      description: "Rigorous academic grounding in Pure Mathematics, Physics, Chemistry, and early computer science fundamentals.",
      highlights: [
        "Strong analytical problem-solving foundation in Advanced Mathematics and Physics.",
        "Early programming fundamentals and procedural code structure."
      ],
      tags: ["Mathematics", "Physics", "Computer Science"]
    }
  ];

  const filteredItems =
    filterType === "all"
      ? unifiedJourney
      : unifiedJourney.filter((item) => item.category === filterType);

  return (
    <section id="journey" className="section-wrapper journey-section" aria-label="Education and Milestones">
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
            <span>04. EDUCATION &amp; MILESTONES</span>
          </div>
          <h2 className="section-title">
            Academic Track &amp; <span className="gradient-text">Engineering Journey.</span>
          </h2>
          <p className="section-description">
            A unified progression timeline — structured computer science education paired with self-driven development milestones.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          className="journey-filter-bar"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button
            className={`journey-filter-btn ${filterType === "all" ? "active" : ""}`}
            onClick={() => setFilterType("all")}
          >
            <span>All Milestones</span>
          </button>
          <button
            className={`journey-filter-btn ${filterType === "education" ? "active" : ""}`}
            onClick={() => setFilterType("education")}
          >
            <GraduationCap size={15} />
            <span>Academic Education</span>
          </button>
          <button
            className={`journey-filter-btn ${filterType === "milestones" ? "active" : ""}`}
            onClick={() => setFilterType("milestones")}
          >
            <Milestone size={15} />
            <span>Technical Milestones</span>
          </button>
        </motion.div>

        {/* Single-Line Timeline Layout (Line on Left, Education/Milestones on Right) */}
        <div className="single-timeline-container">
          {/* Continuous Glowing Timeline Spine */}
          <div className="timeline-spine" />

          <motion.div
            className="single-timeline-stream"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const isEducation = item.category === "education";
                return (
                  <motion.div
                    key={item.title}
                    layout
                    variants={itemVariants}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 25 }}
                    transition={{ duration: 0.4 }}
                    className="single-timeline-entry"
                  >
                    {/* Glowing Node On The Line */}
                    <div className="timeline-node-anchor">
                      <div className={`node-pulse-halo ${isEducation ? "cyan" : "violet"}`} />
                      <div className={`node-inner-dot ${isEducation ? "cyan" : "violet"}`} />
                    </div>

                    {/* Timeline Content Card On The Right */}
                    <div className="timeline-entry-card card-base">
                      <div className="entry-card-header">
                        <div className="entry-meta-row">
                          <span className="entry-period-pill">
                            <Calendar size={13} />
                            <span>{item.period}</span>
                          </span>

                          <span className={`entry-type-badge ${isEducation ? "badge-cyan" : "badge-violet"}`}>
                            {isEducation ? <GraduationCap size={13} /> : <Sparkles size={13} />}
                            <span>{item.type}</span>
                          </span>
                        </div>

                        {item.status && (
                          <span className="entry-status-tag">{item.status}</span>
                        )}
                      </div>

                      <h3 className="entry-title">{item.title}</h3>
                      {item.institution && (
                        <span className="entry-institution">{item.institution}</span>
                      )}

                      <p className="entry-desc">{item.description}</p>

                      {/* Highlights */}
                      {item.highlights && (
                        <div className="entry-highlights-list">
                          {item.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="entry-highlight-item">
                              <CheckCircle2 size={15} className="highlight-icon-cyan" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tag badges */}
                      {item.tags && (
                        <div className="entry-tags-row">
                          {item.tags.map((tag) => (
                            <span key={tag} className="entry-tag-pill">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
