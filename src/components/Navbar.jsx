import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";
import { navigationLinks } from "../data/socials";
import "./Navbar.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for header background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section highlight
  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "projects", "journey", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Brand Logo with Official Website Icon */}
        <a
          href="#hero"
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, "#hero")}
          aria-label="Sayandip Kundu — Home"
        >
          <div className="navbar-logo-badge">
            <span className="logo-accent">S</span>
            <span className="logo-mid">D</span>
            <span className="logo-white">K</span>
          </div>
          <div className="navbar-brand-text">
            <span className="brand-name">Sayandip Kundu</span>
            <span className="brand-role">Software Developer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav-desktop" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navigationLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                    {isActive && <span className="nav-active-pill" layoutId="activePill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Action Buttons (Resume + CTA) */}
        <div className="navbar-actions-desktop">
          <a
            href="/Sayandip_Kundu_Resume.pdf"
            download="Sayandip_Kundu_Resume.pdf"
            className="btn btn-secondary btn-navbar"
            title="Download Sayandip Kundu's Resume"
          >
            <FileDown size={15} />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn btn-outline-cyan btn-navbar"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
      
      <div
        className={`mobile-menu-drawer ${isMobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <div className="navbar-logo-badge">
              <span className="logo-accent">S</span>
              <span className="logo-mid">D</span>
              <span className="logo-white">K</span>
            </div>
            <button
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X size={22} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            {navigationLinks.map((link, idx) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="mobile-nav-item">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`mobile-nav-link ${isActive ? "active" : ""}`}
                  >
                    <span className="mobile-link-index">0{idx + 1}.</span>
                    <span className="mobile-link-text">{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-menu-footer">
            <a
              href="/Sayandip_Kundu_Resume.pdf"
              download="Sayandip_Kundu_Resume.pdf"
              className="btn btn-secondary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <FileDown size={16} />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>
            <p className="mobile-footer-note">Kolkata, India • Open to Inquiries</p>
          </div>
        </div>
      </div>
    </header>
  );
}
