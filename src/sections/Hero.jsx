import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  Mail,
  FileDown,
  // Sparkles,
  Code2,
  Database,
  MapPin
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/SocialIcons";
import { personalInfo } from "../data/socials";
import "./Hero.css";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      <div className="container hero-container">
        {/* Left Column: Content */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Introductory Status Badge */}
          <motion.div variants={itemVariants} className="hero-badge-wrapper">
            <div className="hero-status-badge">
              <span className="hero-status-pulse" />
              <span className="hero-status-text">Available for Developer Roles &amp; Collaborations</span>
            </div>
          </motion.div>

          {/* Subtitle / Name */}
          <motion.div variants={itemVariants} className="hero-name-label">
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-author-name">{personalInfo.name}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="hero-headline">
            Building Digital Experiences with{" "}
            <span className="hero-highlight-cyan">Code</span> &amp;{" "}
            <span className="hero-highlight-violet">Architecture.</span>
            {/* Previously "Intelligence" - commented per full stack web dev focus */}
          </motion.h1>

          {/* Concise Professional Bio */}
          <motion.p variants={itemVariants} className="hero-description">
            Full-stack developer focused on architecting high-performance React web applications, scalable backend systems, and crafting responsive user interfaces with clean engineering practices.
            {/* and exploring modern AI/ML integrations - commented per requirements */}
          </motion.p>

          {/* Action CTAs: Explore Work, Get in Touch, and Download Resume */}
          <motion.div variants={itemVariants} className="hero-cta-group">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="btn btn-primary hero-btn"
            >
              <span>Explore My Work</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="/Sayandip_Kundu_Resume.pdf"
              download="Sayandip_Kundu_Resume.pdf"
              className="btn btn-secondary hero-btn hero-resume-btn"
              title="Download Sayandip Kundu's Resume PDF"
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="btn btn-outline-cyan hero-btn"
            >
              <span>Get in Touch</span>
              <Send size={16} />
            </a>
          </motion.div>

          {/* Social Links & Highlights */}
          <motion.div variants={itemVariants} className="hero-socials-wrapper">
            <span className="hero-social-label">Connect:</span>
            <div className="hero-social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hero-social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hero-social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="hero-social-btn"
                aria-label="Send Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Developer Portrait with Floating Motion Badges */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-composition-wrapper">
            {/* Ambient Backlight Glows */}
            <div className="visual-glow-cyan" />
            <div className="visual-glow-violet" />

            {/* Portrait Image Frame */}
            <div className="hero-portrait-card">
              <div className="hero-portrait-img-box">
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  className="hero-portrait-image"
                />
                <div className="hero-portrait-gradient-overlay" />
                
                {/* Location Badge on Photo */}
                <div className="hero-portrait-tag">
                  <MapPin size={13} className="hero-tag-icon" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Chips with Ambient Movement */}
            <motion.div
              className="floating-chip chip-react"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="chip-icon-box cyan">
                <Code2 size={16} />
              </div>
              <div className="chip-text">
                <span className="chip-title">React 19 &amp; Vite</span>
                <span className="chip-sub">Component Architecture</span>
              </div>
            </motion.div>

            {/* AI / ML Floating Chip (Commented per requirements - Full-stack web dev focus) */}
            {/*
            <motion.div
              className="floating-chip chip-ai"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="chip-icon-box violet">
                <Sparkles size={16} />
              </div>
              <div className="chip-text">
                <span className="chip-title">AI / ML Integration</span>
                <span className="chip-sub">Intelligent Systems</span>
              </div>
            </motion.div>
            */}

            <motion.div
              className="floating-chip chip-backend"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="chip-icon-box dark">
                <Database size={16} />
              </div>
              <div className="chip-text">
                <span className="chip-title">Full Stack Ready</span>
                <span className="chip-sub">APIs &amp; Architecture</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
