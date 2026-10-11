import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="floating-scroll-top-btn"
      aria-label="Scroll back to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        width: "44px",
        height: "44px",
        borderRadius: "12px",
        backgroundColor: "rgba(18, 20, 28, 0.9)",
        border: "1px solid rgba(0, 229, 255, 0.3)",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 229, 255, 0.15)",
        backdropFilter: "blur(8px)",
        color: "#00E5FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 900,
        transition: "all 0.25s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "#00E5FF";
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 229, 255, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.3)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 229, 255, 0.15)";
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
