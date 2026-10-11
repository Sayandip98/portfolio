import React, { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: "2.5px",
        background: "linear-gradient(90deg, #7C3AED, #00E5FF)",
        boxShadow: "0 0 10px rgba(0, 229, 255, 0.7)",
        zIndex: 9999,
        transition: "width 0.1s ease-out",
        pointerEvents: "none"
      }}
      aria-hidden="true"
    />
  );
}
