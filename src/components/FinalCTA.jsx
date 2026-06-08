import { useEffect, useRef, useState } from 'react';
import './FinalCTA.css';

const FinalCTA = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="fcta-section" ref={sectionRef}>
      {/* Dynamic Spotlight */}
      <div 
        className="fcta-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 180, 0, 0.15) 0%, transparent 50%)`
        }}
      />

      {/* Stage Energy Waves */}
      <div className="fcta-waves">
        <div className="fcta-wave fcta-wave-1"></div>
        <div className="fcta-wave fcta-wave-2"></div>
        <div className="fcta-wave fcta-wave-3"></div>
        <div className="fcta-wave fcta-wave-4"></div>
      </div>

      {/* Light Beams */}
      <div className="fcta-beams">
        <div className="fcta-beam fcta-beam-1"></div>
        <div className="fcta-beam fcta-beam-2"></div>
        <div className="fcta-beam fcta-beam-3"></div>
        <div className="fcta-beam fcta-beam-4"></div>
        <div className="fcta-beam fcta-beam-5"></div>
      </div>

      {/* Floating Particles */}
      <div className="fcta-particles">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="fcta-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Center Energy Ring */}
      <div className="fcta-center-ring">
        <div className="fcta-ring fcta-ring-1"></div>
        <div className="fcta-ring fcta-ring-2"></div>
        <div className="fcta-ring fcta-ring-3"></div>
      </div>

      {/* Content */}
      <div className="fcta-content">
        {/* Top Badge */}
        <div className="fcta-badge">
          <span className="fcta-badge-pulse"></span>
          LET'S CREATE SOMETHING EXTRAORDINARY
        </div>

        {/* Main Headline */}
        <h2 className="fcta-headline">
          <span className="fcta-headline-line">Your Next</span>
          <span className="fcta-headline-line fcta-headline-gold">Standing</span>
          <span className="fcta-headline-line fcta-headline-gold">Ovation</span>
          <span className="fcta-headline-line fcta-headline-white">Starts Here</span>
        </h2>

        {/* Services Strip */}
        <div className="fcta-services">
          <span className="fcta-service-divider">✦</span>
          <span>Weddings</span>
          <span className="fcta-service-divider">✦</span>
          <span>Corporate Events</span>
          <span className="fcta-service-divider">✦</span>
          <span>Celebrity Shows</span>
          <span className="fcta-service-divider">✦</span>
          <span>Live Orchestra</span>
          <span className="fcta-service-divider">✦</span>
        </div>

        {/* CTA Buttons */}
        <div className="fcta-buttons">
          <button className="fcta-btn-primary">
            <span className="fcta-btn-text">Book Consultation</span>
            <span className="fcta-btn-arrow">→</span>
            <div className="fcta-btn-shine"></div>
            <div className="fcta-btn-glow"></div>
          </button>
          
          <button className="fcta-btn-secondary">
            <span className="fcta-btn-text">Watch Showreel</span>
            <span className="fcta-btn-icon">▶</span>
            <div className="fcta-btn-border"></div>
          </button>
        </div>
      </div>

      {/* Bottom Energy Bar */}
      <div className="fcta-energy-bar">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="fcta-energy-line"
            style={{
              animationDelay: `${i * 0.1}s`,
              height: `${10 + Math.random() * 30}px`
            }}
          />
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="fcta-bottom-gradient"></div>
    </section>
  );
};

export default FinalCTA;