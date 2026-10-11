import React, { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import MouseGlow from "./components/MouseGlow";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="portfolio-app">
      {/* Loading Sequence */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Background Ambient Decor */}
      <div className="bg-ambient-layer">
        <div className="bg-grid" />
        <div className="ambient-glow-cyan" />
        <div className="ambient-glow-violet" />
      </div>

      {/* Ambient Flashlight Glow */}
      <MouseGlow />

      {/* Interactive Custom Animated Cursor */}
      <CustomCursor />

      {/* Reading Scroll Progress Line */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}
