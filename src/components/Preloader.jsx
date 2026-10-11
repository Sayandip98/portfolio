import React, { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      onComplete?.();
      return;
    }

    const duration = 1200; // 1.2s total smooth sequence
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Trigger fade-out shortly after reaching 100%
    const timeout = setTimeout(() => {
      setIsFadingOut(true);
      const exitTimeout = setTimeout(() => {
        onComplete?.();
      }, 450); // Match fade-out animation length
      return () => clearTimeout(exitTimeout);
    }, duration + 80);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className={`preloader-overlay ${isFadingOut ? "preloader-exit" : ""}`} role="status" aria-live="polite">
      <div className="preloader-content">
        {/* Monogram Box with Animated Glow & Border */}
        <div className="preloader-monogram-container">
          <div className="preloader-monogram-ring" />
          <div className="preloader-monogram">
            <span className="mono-s">S</span>
            <span className="mono-d">D</span>
            <span className="mono-k">K</span>
          </div>
        </div>

        {/* Name and Subtitle */}
        <div className="preloader-identity">
          <h1 className="preloader-name">SAYANDIP KUNDU</h1>
          <div className="preloader-status">
            <span className="preloader-dot" />
            <span className="preloader-status-text">INITIALIZING EXPERIENCE</span>
          </div>
        </div>

        {/* Thin Cyan Progress Indicator */}
        <div className="preloader-progress-track">
          <div
            className="preloader-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Counter */}
        <div className="preloader-percentage">
          {Math.floor(progress).toString().padStart(2, "0")}%
        </div>
      </div>
    </div>
  );
}
