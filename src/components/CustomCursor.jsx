import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });

  useEffect(() => {
    if (isTouchDevice) return;

    let rafId;
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
    };

    const animateRing = () => {
      // Fluid lerp tracking
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(animateRing);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Event delegation to detect hovering over clickable / interactive elements
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, .project-card, .skill-card, .bento-card, .timeline-entry-card, .interactive'
      );

      if (interactive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Precision Inner Dot */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isVisible ? "visible" : ""} ${
          isHovered ? "hovered" : ""
        } ${isClicking ? "clicked" : ""}`}
        aria-hidden="true"
      />

      {/* Fluid Trailing Outer Ring */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isVisible ? "visible" : ""} ${
          isHovered ? "hovered" : ""
        } ${isClicking ? "clicked" : ""}`}
        aria-hidden="true"
      />
    </>
  );
}
