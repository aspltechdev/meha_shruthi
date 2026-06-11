import React, { useEffect, useRef, useState } from 'react';
import './FinalCTA.css';

// FIXED PATH: Changed from '../../' to '../'
import bgImage from '../assets/fta.jpeg'; 

const FinalCTA = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
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
    <section className="fcta-premium-section" ref={sectionRef}>
      {/* Background Image Layer */}
      <div 
        className="fcta-premium-bg-image" 
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Premium Light Background */}
      <div className="fcta-premium-bg"></div>
      <div className="fcta-premium-pattern"></div>
      <div className="fcta-premium-glow"></div>

      {/* Dynamic Spotlight */}
      <div 
        className="fcta-premium-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.15) 0%, rgba(201, 160, 61, 0.05) 40%, transparent 70%)`
        }}
      />

      {/* Cinematic Light Rays */}
      <div className="fcta-premium-rays">
        <div className="fcta-premium-ray"></div>
        <div className="fcta-premium-ray"></div>
        <div className="fcta-premium-ray"></div>
        <div className="fcta-premium-ray"></div>
      </div>

      {/* Floating Particles */}
      <div className="fcta-premium-particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="fcta-premium-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 8}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`
            }}
          />
        ))}
      </div>

      {/* Center Energy Rings */}
      <div className="fcta-premium-rings">
        <div className="fcta-premium-ring ring-1"></div>
        <div className="fcta-premium-ring ring-2"></div>
        <div className="fcta-premium-ring ring-3"></div>
        <div className="fcta-premium-ring ring-4"></div>
      </div>

      {/* Main Content */}
      <div className="fcta-premium-container">
        {/* Top Badge */}
        <div className="fcta-premium-badge">
          <span className="fcta-premium-badge-dot"></span>
          <span className="fcta-premium-badge-text">LET'S CREATE MAGIC</span>
          <span className="fcta-premium-badge-dot"></span>
        </div>

        {/* Main Headline */}
        <h2 className="fcta-premium-headline">
          <span className="fcta-premium-headline-light">Your Next</span>
          <div className="fcta-premium-headline-accent">
            <span className="fcta-premium-headline-gold">Standing</span>
            <span className="fcta-premium-headline-gold">Ovation</span>
          </div>
          <span className="fcta-premium-headline-light">Starts Here</span>
        </h2>

        {/* <div className="fcta-premium-divider">
          <span className="fcta-premium-divider-line"></span>
          <span className="fcta-premium-divider-diamond">◈</span>
          <span className="fcta-premium-divider-line"></span>
        </div> */}

        {/* Services Strip */}
        <div className="fcta-premium-services">
          {['Weddings', 'Corporate Events', 'Celebrity Shows', 'Live Orchestra', 'Private Functions'].map((service, i) => (
            <React.Fragment key={i}>
              <span className="fcta-premium-service">{service}</span>
              {i < 4 && <span className="fcta-premium-service-sep">◉</span>}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="fcta-premium-buttons">
          
          <button 
            className="fcta-premium-btn-primary"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="fcta-premium-btn-text">Book Consultation</span>
            {/* <span className="fcta-premium-btn-arrow">→</span> */}
            <div className="fcta-premium-btn-shine"></div>
          </button>
          </div>
        

        {/* Trust Indicator */}
        <div className="fcta-premium-trust">

  <div className="fcta-premium-stat-card">
    <div className="fcta-premium-trust-number">
      500+
    </div>

    <div className="fcta-premium-trust-label">
      Happy Clients
    </div>
  </div>

  <div className="fcta-premium-stat-card">
    <div className="fcta-premium-trust-number">
      1000+
    </div>

    <div className="fcta-premium-trust-label">
      Events
    </div>
  </div>

  <div className="fcta-premium-stat-card">
    <div className="fcta-premium-trust-number">
      98%
    </div>

    <div className="fcta-premium-trust-label">
      Satisfaction
    </div>
  </div>


        </div>
      </div>

    
    </section>
  );
};

export default FinalCTA;
