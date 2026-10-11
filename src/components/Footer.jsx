import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import { personalInfo, navigationLinks } from "../data/socials";
import "./Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="portfolio-footer">
      <div className="container">
        {/* Top Tier */}
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo-badge">
              <span className="logo-accent">S</span>
              <span className="logo-mid">D</span>
              <span className="logo-white">K</span>
            </div>
            <div className="footer-brand-info">
              <span className="footer-author">{personalInfo.name}</span>
              <span className="footer-tagline">
                Full Stack Web Developer
                {/* &amp; AI/ML Enthusiast - commented per requirements */}
              </span>
            </div>
          </div>

          {/* Quick Section Navigation Links */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            <ul className="footer-nav-links">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="footer-nav-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Tier */}
        <div className="footer-bottom">
          <div className="footer-copy">
            <p>
              &copy; {CURRENT_YEAR} {personalInfo.name}. Designed &amp; engineered with React &amp; custom CSS.
            </p>
          </div>

          {/* Social Icons */}
          <div className="footer-social-icons">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="footer-social-icon-btn"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-social-icon-btn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-icon-btn"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
