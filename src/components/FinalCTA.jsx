
import React, { useEffect, useRef, useState } from "react";
import "./FinalCTA.css";
import bgImage from "../assets/fta.jpeg";

const FinalCTA = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
 
  const sectionRef = useRef(null);
const particles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: (i * 17) % 100,
  top: (i * 29) % 100,
  delay: (i % 10),
  duration: 5 + (i % 8),
  size: 2 + (i % 4),
}));

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="fcta-premium-section" ref={sectionRef}>
      <div
        className="fcta-premium-bg-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="fcta-premium-bg"></div>
      <div className="fcta-premium-pattern"></div>
      <div className="fcta-premium-glow"></div>

      <div
        className="fcta-premium-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%,
          rgba(201,160,61,0.15) 0%,
          rgba(201,160,61,0.05) 40%,
          transparent 70%)`,
        }}
      />

      <div className="fcta-premium-rays">
        <div className="fcta-premium-ray"></div>
        <div className="fcta-premium-ray"></div>
        <div className="fcta-premium-ray"></div>
        <div className="fcta-premium-ray"></div>
      </div>

      <div className="fcta-premium-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="fcta-premium-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      <div className="fcta-premium-rings">
        <div className="fcta-premium-ring ring-1"></div>
        <div className="fcta-premium-ring ring-2"></div>
        <div className="fcta-premium-ring ring-3"></div>
        <div className="fcta-premium-ring ring-4"></div>
      </div>

      <div className="fcta-premium-container">
        <div className="fcta-premium-badge">
          <span className="fcta-premium-badge-dot"></span>
          <span className="fcta-premium-badge-text">
            LET'S CREATE MAGIC
          </span>
          <span className="fcta-premium-badge-dot"></span>
        </div>

        <h2 className="fcta-premium-headline">
          <span className="fcta-premium-headline-light">Your Next</span>

          <div className="fcta-premium-headline-accent">
            <span className="fcta-premium-headline-gold">Standing</span>
            <span className="fcta-premium-headline-gold">Ovation</span>
          </div>

          <span className="fcta-premium-headline-light">
            Starts Here
          </span>
        </h2>

        <div className="fcta-premium-services">
          {[
            "Weddings",
            "Corporate Events",
            "Celebrity Shows",
            "Live Orchestra",
            "Private Functions",
          ].map((service, i) => (
            <React.Fragment key={i}>
              <span className="fcta-premium-service">{service}</span>
              {i < 4 && (
                <span className="fcta-premium-service-sep">◉</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="fcta-premium-trust">
          <div className="fcta-premium-stat-card">
            <div className="fcta-premium-trust-number">500+</div>
            <div className="fcta-premium-trust-label">
              Happy Clients
            </div>
          </div>

          <div className="fcta-premium-stat-card">
            <div className="fcta-premium-trust-number">1000+</div>
            <div className="fcta-premium-trust-label">Events</div>
          </div>

          <div className="fcta-premium-stat-card">
            <div className="fcta-premium-trust-number">98%</div>
            <div className="fcta-premium-trust-label">
              Satisfaction
            </div>
          </div>
        </div>

        <div className="fcta-premium-buttons">
          <button className="fcta-premium-btn-primary">
            <span className="fcta-premium-btn-text">
              Book Consultation
            </span>
            <span className="fcta-premium-btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
