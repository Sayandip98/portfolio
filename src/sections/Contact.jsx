import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Clock,
  Check,
  Copy,
  CheckCircle2,
  AlertCircle,
  Mail,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/SocialIcons";
import { personalInfo } from "../data/socials";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'fallback' | null
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please provide your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Real form submission via FormSubmit AJAX service
      const response = await fetch("https://formsubmit.co/ajax/sayandipkundu.dev@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Inquiry from ${formData.name} via Portfolio`,
          message: formData.message,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success !== "false") {
        setSubmissionStatus("success");
      } else {
        // Fallback to client mail dispatch
        setSubmissionStatus("fallback");
      }
    } catch {
      // Offline, network error or adblocker: graceful fallback to direct mailto
      setSubmissionStatus("fallback");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLaunchMailClient = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Sayandip,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const copyEmailToClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(personalInfo.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = personalInfo.email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
  };

  const copyPreparedMessage = async () => {
    try {
      const textToCopy = `To: ${personalInfo.email}\nSubject: ${formData.subject || "Portfolio Inquiry"}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      }
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch (err) {
      console.error("Clipboard copy message failed:", err);
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-section" aria-label="Contact and Inquiries">
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
            <span>05. GET IN TOUCH</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional Together.</span>
          </h2>
          <p className="section-description">
            Whether you have an engineering role, collaborative project idea, or wish to discuss full-stack web architecture and scalable systems, my inbox is open.
            {/* Previously included AI discussion - commented per user requirements */}
          </p>
        </motion.div>

        <div className="contact-layout">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-info-card card-base">
              <h3 className="info-card-title">Direct Connection</h3>
              <p className="info-card-desc">
                Feel free to email directly or connect across professional networks.
              </p>

              {/* Email Box with One-Click Copy */}
              <div className="contact-email-box">
                <div className="email-meta">
                  <span className="email-label">EMAIL ADDRESS</span>
                  <a href={`mailto:${personalInfo.email}`} className="email-link">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="copy-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className="text-cyan" /> : <Copy size={16} />}
                </button>
              </div>

              {copiedEmail && (
                <span className="copy-notice">✓ Email address copied to clipboard!</span>
              )}

              {/* Location & Timezone Details */}
              <div className="contact-meta-list">
                <div className="contact-meta-item">
                  <MapPin size={16} className="meta-icon" />
                  <span>Based in {personalInfo.location}</span>
                </div>
                <div className="contact-meta-item">
                  <Clock size={16} className="meta-icon" />
                  <span>Timezone: {personalInfo.timezone}</span>
                </div>
              </div>

              {/* Verified Social Connect Buttons */}
              <div className="contact-social-buttons">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-connect-btn"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} className="arrow-icon" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-connect-btn"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} className="arrow-icon" />
                </a>
              </div>
            </div>

            {/* Availability Banner */}
            <div className="availability-card card-base">
              <div className="avail-badge">
                <span className="avail-pulse" />
                <span className="avail-text">Current Status</span>
              </div>
              <h4 className="avail-heading">Actively Seeking Opportunities</h4>
              <p className="avail-desc">
                Open to Full-Stack Developer, Software Engineer, and React engineering positions and high-impact web collaborations.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-form-card card-base">
              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-subtitle">
                Fill out the details below. This form directly delivers your message to my inbox.
              </p>

              {submissionStatus === "success" ? (
                <div className="form-success-container">
                  <div className="success-icon-box">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="success-title">Message Delivered Successfully!</h4>
                  <p className="success-desc">
                    Thank you! Your inquiry has been sent directly to <strong>{personalInfo.email}</strong>. I will review it and reply as soon as possible.
                  </p>
                  
                  <div className="success-actions">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setSubmissionStatus(null);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : submissionStatus === "fallback" ? (
                <div className="form-success-container">
                  <div className="success-icon-box warning">
                    <AlertCircle size={32} />
                  </div>
                  <h4 className="success-title">Ready to Send via Email</h4>
                  <p className="success-desc">
                    Your message has been formatted. Click below to launch your default mail app, or copy the content to clipboard.
                  </p>

                  <div className="success-actions">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleLaunchMailClient}
                    >
                      <span>Open in Mail Client</span>
                      <Send size={16} />
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={copyPreparedMessage}
                    >
                      <span>{copiedMessage ? "✓ Copied to Clipboard!" : "Copy Prepared Message"}</span>
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-cyan"
                      onClick={() => setSubmissionStatus(null)}
                    >
                      <span>Back to Form</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="contact-form">
                  <div className="form-group-row">
                    {/* Name Input */}
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Alex Rivera"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? "input-error" : ""}`}
                        required
                      />
                      {errors.name && <span className="field-error">{errors.name}</span>}
                    </div>

                    {/* Email Input */}
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Your Email <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? "input-error" : ""}`}
                        required
                      />
                      {errors.email && <span className="field-error">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="e.g. Full-Stack Developer Role / Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Your Message <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-input textarea-input ${errors.message ? "input-error" : ""}`}
                      required
                    />
                    {errors.message && <span className="field-error">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <div className="form-footer-actions">
                    <button
                      type="button"
                      onClick={handleLaunchMailClient}
                      className="form-mail-link"
                    >
                      <Mail size={13} />
                      <span>Or send directly via your email client</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
