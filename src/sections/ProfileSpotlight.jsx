import React, { useState, useRef } from "react";
import {
  Camera,
  RotateCcw,
  // Sparkles,
  MapPin,
  CheckCircle2,
  Code2,
  ArrowRight
} from "lucide-react";
import { personalInfo } from "../data/socials";
import "./ProfileSpotlight.css";

export default function ProfileSpotlight() {
  const [imageSrc, setImageSrc] = useState(personalInfo.profileImage || "/profile.jpg");
  const [isCustomImage, setIsCustomImage] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageSrc(event.target.result);
          setIsCustomImage(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setImageSrc(personalInfo.profileImage || "/profile.jpg");
    setIsCustomImage(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="profile" className="section-wrapper profile-section" aria-label="Developer Profile & Spotlight">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>01. DEVELOPER SPOTLIGHT</span>
          </div>
          <h2 className="section-title">
            The Person Behind <span className="gradient-text">The Terminal.</span>
          </h2>
          <p className="section-description">
            A glimpse into my development environment, background, and personal approach to building scalable digital solutions.
          </p>
        </div>

        {/* Profile Card Layout */}
        <div className="profile-spotlight-card card-base">
          {/* Left Column: Portrait Showcase */}
          <div className="profile-image-column">
            <div className="profile-image-frame-wrapper">
              {/* Backlight Ambient Glows */}
              <div className="profile-glow-cyan" />
              <div className="profile-glow-violet" />

              {/* Main Image Frame */}
              <div className="profile-image-frame">
                <img
                  src={imageSrc}
                  alt={personalInfo.name}
                  className="profile-portrait-img"
                  loading="lazy"
                />

                {/* Gradient Shadow Overlay */}
                <div className="profile-frame-overlay" />

                {/* Floating Status Pill over image */}
                <div className="profile-image-status-pill">
                  <span className="status-live-dot" />
                  <span>Available for Engineering Roles</span>
                </div>

                {/* Floating Location Badge */}
                <div className="profile-location-chip">
                  <MapPin size={13} className="chip-icon-cyan" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Interactive Image Customizer Bar */}
              <div className="profile-image-controls">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  style={{ display: "none" }}
                  id="profile-photo-upload"
                />
                
                <button
                  type="button"
                  className="btn-image-ctrl upload"
                  onClick={() => fileInputRef.current?.click()}
                  title="Upload your photo to preview"
                >
                  <Camera size={15} />
                  <span>{isCustomImage ? "Change Photo" : "Upload Your Photo"}</span>
                </button>

                {isCustomImage && (
                  <button
                    type="button"
                    className="btn-image-ctrl reset"
                    onClick={handleResetImage}
                    title="Reset to default portrait"
                  >
                    <RotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              <p className="profile-image-hint">
                Tip: Place your photo at <code>public/profile.jpg</code> or upload above to test in real-time.
              </p>
            </div>
          </div>

          {/* Right Column: Persona & Core Highlights */}
          <div className="profile-details-column">
            <div className="profile-badge-row">
              <span className="profile-role-badge">SDK • Full Stack Developer</span>
              {/* &amp; AI/ML commented per requirements */}
              <span className="profile-exp-badge">Continuous Learner</span>
            </div>

            <h3 className="profile-name-heading">{personalInfo.name}</h3>
            <p className="profile-bio-lead">
              Software developer blending full-stack engineering discipline with a passion for modern reactive web interfaces and clean system architecture.
            </p>

            {/* Quick Pillars */}
            <div className="profile-pillars-list">
              <div className="profile-pillar-item">
                <div className="pillar-icon-box">
                  <Code2 size={18} />
                </div>
                <div>
                  <h4 className="pillar-title">Clean &amp; Scalable Web Architecture</h4>
                  <p className="pillar-desc">
                    Specialized in modular React component patterns, predictable state management, and reliable Node.js REST services.
                  </p>
                </div>
              </div>

              {/* Curiosity for AI Pillar (Commented per requirements - Full-stack web dev focus) */}
              {/*
              <div className="profile-pillar-item">
                <div className="pillar-icon-box violet">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="pillar-title">Curiosity for Artificial Intelligence</h4>
                  <p className="pillar-desc">
                    Actively experimenting with machine learning pipelines, LLM context integration, and practical data-driven workflows.
                  </p>
                </div>
              </div>
              */}

              <div className="profile-pillar-item">
                <div className="pillar-icon-box">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="pillar-title">User-Centered Problem Solving</h4>
                  <p className="pillar-desc">
                    Dedicated to high-performance rendering, web accessibility, semantic code, and interfaces that feel effortless to use.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="profile-actions-row">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="btn btn-primary"
              >
                <span>View My Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="btn btn-secondary"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
