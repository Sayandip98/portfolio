import React from "react";
import { motion } from "framer-motion";
import {
  // Brain,
  // GraduationCap,
  Compass,
  CheckCircle2,
  // TerminalSquare,
  Terminal
} from "lucide-react";
import { personalInfo } from "../data/socials";
import "./About.css";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="section-wrapper about-section" aria-label="About Sayandip Kundu">
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
            <span>01. BACKGROUND &amp; PHILOSOPHY</span>
          </div>
          <h2 className="section-title">
            Engineering with Purpose &amp; <span className="gradient-text">Continuous Curiosity.</span>
          </h2>
          <p className="section-description">
            A developer who views code as a vehicle for clarity and problem solving. Dedicated to creating responsive web applications and scalable, performant digital solutions.
            {/* Previously included AI exploration - commented per requirements */}
          </p>
        </motion.div>

        {/* Editorial Bento Grid */}
        <motion.div
          className="about-bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Bento Item 1: Main Editorial Narrative */}
          <motion.div variants={itemVariants} className="bento-card bento-card-main card-base">
            <div className="bento-badge">
              <Compass size={16} />
              <span>Developer Journey</span>
            </div>
            <h3 className="bento-headline">
              Bridging robust full-stack logic with refined, intuitive user experiences.
            </h3>
            <p className="bento-paragraph">
              My path in software engineering is anchored in curiosity and disciplined problem solving. Rather than merely consuming frameworks, I delve deep into core JavaScript fundamentals, component lifecycles, and asynchronous architectures.
            </p>
            <p className="bento-paragraph">
              From designing relational database schemas and RESTful endpoints to tuning client-side render cycles in React, my goal is always the same: software that feels effortless to the user and resilient under the hood.
            </p>

            <div className="bento-highlights">
              <div className="bento-highlight-item">
                <CheckCircle2 size={16} className="highlight-icon" />
                <span>Component-driven modular frontend architecture</span>
              </div>
              <div className="bento-highlight-item">
                <CheckCircle2 size={16} className="highlight-icon" />
                <span>Reliable RESTful API and database workflows</span>
              </div>
              <div className="bento-highlight-item">
                <CheckCircle2 size={16} className="highlight-icon" />
                <span>Dedicated adherence to web accessibility &amp; semantic HTML</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 2: Code Terminal Window (Moved from Hero) */}
          <motion.div variants={itemVariants} className="bento-card bento-card-code card-base">
            <div className="about-terminal-window">
              {/* Terminal Window Header */}
              <div className="about-terminal-header">
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="terminal-file-title">
                  <Terminal size={14} className="terminal-icon" />
                  <span>sayandip.config.js</span>
                </div>
                <div className="terminal-badge">v2.4</div>
              </div>

              {/* Terminal Code Body */}
              <div className="about-terminal-body">
                <div className="code-line">
                  <span className="line-num">01</span>
                  <span className="syntax-keyword">const</span>{" "}
                  <span className="syntax-entity">developer</span> = &#123;
                </div>
                <div className="code-line">
                  <span className="line-num">02</span>
                  {"  "}
                  <span className="syntax-prop">name</span>:{" "}
                  <span className="syntax-string">"{personalInfo.name}"</span>,
                </div>
                <div className="code-line">
                  <span className="line-num">03</span>
                  {"  "}
                  <span className="syntax-prop">coreStack</span>: [
                  <span className="syntax-string">"React"</span>,{" "}
                  <span className="syntax-string">"Node.js"</span>,{" "}
                  <span className="syntax-string">"Express"</span>],
                </div>
                <div className="code-line">
                  <span className="line-num">04</span>
                  {"  "}
                  <span className="syntax-prop">interests</span>: [
                  {/* <span className="syntax-string">"AI/ML"</span>,{" "} */}
                  <span className="syntax-string">"Full-Stack Web"</span>,{" "}
                  <span className="syntax-string">"System Architecture"</span>,{" "}
                  <span className="syntax-string">"DSA"</span>],
                </div>
                <div className="code-line">
                  <span className="line-num">05</span>
                  {"  "}
                  <span className="syntax-prop">philosophy</span>:{" "}
                  <span className="syntax-string">"Build with clean code &amp; empathy."</span>,
                </div>
                <div className="code-line">
                  <span className="line-num">06</span>
                  {"  "}
                  <span className="syntax-prop">readyToBuild</span>:{" "}
                  <span className="syntax-boolean">true</span>
                </div>
                <div className="code-line">
                  <span className="line-num">07</span>
                  &#125;;
                </div>
                <div className="code-line line-highlight">
                  <span className="line-num">08</span>
                  <span className="syntax-comment">// Compiling digital solutions...</span>
                </div>
              </div>

              {/* Terminal Status Bar */}
              <div className="about-terminal-footer">
                <div className="footer-status-pill">
                  <span className="pulse-indicator" />
                  <span>Vite React • Clean Code</span>
                </div>
                <span className="footer-location">{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* 
            BENTO ITEMS 3, 4, 5 (Academic Foundations, AI / ML Curiosity, Core Engineering Tenets)
            Commented out per user requirements — preserved as code comments:
          */}
          {/*
          <motion.div variants={itemVariants} className="bento-card bento-card-half card-base">
            <div className="bento-badge">
              <GraduationCap size={16} />
              <span>Academic Foundations</span>
            </div>
            <h3 className="bento-card-title">Computer Science &amp; Engineering</h3>
            <p className="bento-card-desc">
              Grounded in rigorous academic coursework including Data Structures, Algorithms, Operating Systems, and Database Management.
            </p>
            <div className="bento-pills-wrap">
              <span className="bento-pill">Data Structures</span>
              <span className="bento-pill">Algorithms</span>
              <span className="bento-pill">OOP</span>
              <span className="bento-pill">DBMS</span>
              <span className="bento-pill">System Design</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-card bento-card-half card-base">
            <div className="bento-badge badge-violet">
              <Brain size={16} />
              <span>AI / ML Curiosity</span>
            </div>
            <h3 className="bento-card-title">Intelligent Digital Systems</h3>
            <p className="bento-card-desc">
              Fascinated by how machine learning models and large language models augment real-world developer workflows and automate cognitive tasks.
            </p>
            <div className="bento-pills-wrap">
              <span className="bento-pill pill-violet">Python &amp; ML</span>
              <span className="bento-pill pill-violet">LLM Integration</span>
              <span className="bento-pill pill-violet">Semantic Search</span>
              <span className="bento-pill pill-violet">Vector Workflows</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-card bento-card-wide card-base">
            <div className="bento-principles-header">
              <div className="bento-badge">
                <TerminalSquare size={16} />
                <span>Core Engineering Tenets</span>
              </div>
              <span className="bento-sub-tag">Clean Code • No Bloat</span>
            </div>

            <div className="principles-grid">
              <div className="principle-block">
                <h4 className="principle-title">1. Intentional Architecture</h4>
                <p className="principle-text">
                  Choose tools tailored to the specific problem rather than piling on unnecessary dependencies.
                </p>
              </div>

              <div className="principle-block">
                <h4 className="principle-title">2. Accessible &amp; Responsive First</h4>
                <p className="principle-text">
                  Ensure layouts perform flawlessly across touch screens, keyboards, and varying viewports.
                </p>
              </div>

              <div className="principle-block">
                <h4 className="principle-title">3. Continuous Curiosity</h4>
                <p className="principle-text">
                  Consistently learning new paradigms, debugging edge cases, and turning concepts into real tools.
                </p>
              </div>
            </div>
          </motion.div>
          */}
        </motion.div>
      </div>
    </section>
  );
}
