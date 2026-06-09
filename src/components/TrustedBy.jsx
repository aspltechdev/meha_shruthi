import React, { useEffect, useRef, useState } from 'react';
import './TrustedBy.css';

// Background image - replace with your actual image
import trustedBg from "../assets/hero.png";

const clients = [
  {
    name: "Rotary Club",
    category: "Service Organization",
    years: "5+ Years",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    description: "International service organization",
    events: "25+ Events"
  },
  {
    name: "Cosmopolitan Club",
    category: "Premium Club",
    years: "7+ Years",
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    description: "Elite social club network",
    events: "40+ Events"
  },
  {
    name: "Alumni Associations",
    category: "Educational",
    years: "4+ Years",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    description: "Prestigious alumni networks",
    events: "30+ Events"
  },
  {
    name: "Doctors Conferences",
    category: "Medical",
    years: "6+ Years",
    image: "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
    description: "Medical professionals",
    events: "20+ Events"
  },
  {
    name: "Wedding Celebrations",
    category: "Social",
    years: "200+ Events",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
    description: "Luxury wedding planners",
    events: "200+ Events"
  },
  {
    name: "Corporate Events",
    category: "Business",
    years: "50+ Events",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    description: "Fortune 500 companies",
    events: "50+ Events"
  },
  {
    name: "Cultural Festivals",
    category: "Cultural",
    years: "30+ Festivals",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    description: "Major cultural events",
    events: "30+ Festivals"
  },
  {
    name: "Private Functions",
    category: "Exclusive",
    years: "100+ Events",
    image: "https://images.pexels.com/photos/2253876/pexels-photo-2253876.jpeg",
    description: "VIP private gatherings",
    events: "100+ Events"
  },
];

const TrustedBy = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section className="trusted-pro-section" ref={sectionRef}>
      {/* Background Layer */}
      <div className="trusted-pro-bg-layer">
        <div className="trusted-pro-bg-image"></div>
        <div className="trusted-pro-bg-overlay"></div>
      </div>

      {/* Ambient Light Effects */}
      <div className="trusted-pro-ambient">
        <div className="trusted-pro-ambient-1"></div>
        <div className="trusted-pro-ambient-2"></div>
        <div className="trusted-pro-ambient-3"></div>
      </div>

      {/* Dynamic Spotlight */}
      <div 
        className="trusted-pro-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.12) 0%, rgba(201, 160, 61, 0.04) 30%, transparent 70%)`
        }}
      />

      {/* Light Rays */}
      <div className="trusted-pro-rays">
        <div className="trusted-pro-ray"></div>
        <div className="trusted-pro-ray"></div>
        <div className="trusted-pro-ray"></div>
        <div className="trusted-pro-ray"></div>
        <div className="trusted-pro-ray"></div>
      </div>

      {/* Main Content */}
      <div className="trusted-pro-container">
        {/* Header */}
        <div className="trusted-pro-header">
          <div className="trusted-pro-header-badge">
            <span className="trusted-pro-badge-line"></span>
            <span className="trusted-pro-badge-text">OUR TRUSTED PARTNERS</span>
            <span className="trusted-pro-badge-line"></span>
          </div>

          <h2 className="trusted-pro-title">
            <span className="trusted-pro-title-light">Trusted By</span>
            <span className="trusted-pro-title-bold">The Best</span>
          </h2>

          <p className="trusted-pro-subtitle">
            From intimate gatherings to grand celebrations, we've created unforgettable moments 
            for the most discerning clients across industries
          </p>

          {/* Stats Row */}
          <div className="trusted-pro-stats">
            <div className="trusted-pro-stat">
              <div className="trusted-pro-stat-number">500+</div>
              <div className="trusted-pro-stat-label">Events</div>
            </div>
            <div className="trusted-pro-stat-sep"></div>
            <div className="trusted-pro-stat">
              <div className="trusted-pro-stat-number">100+</div>
              <div className="trusted-pro-stat-label">Clients</div>
            </div>
            <div className="trusted-pro-stat-sep"></div>
            <div className="trusted-pro-stat">
              <div className="trusted-pro-stat-number">98%</div>
              <div className="trusted-pro-stat-label">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Client Grid */}
        <div className="trusted-pro-grid">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`trusted-pro-card ${isVisible ? 'visible' : ''} ${hoveredIndex === index ? 'hovered' : ''}`}
              style={{ transitionDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Image */}
              <div className="trusted-pro-card-image">
                <img src={client.image} alt={client.name} />
                <div className="trusted-pro-card-overlay"></div>
                <div className="trusted-pro-card-category">{client.category}</div>
              </div>

              {/* Card Content */}
              <div className="trusted-pro-card-content">
                <h3 className="trusted-pro-card-name">{client.name}</h3>
                <p className="trusted-pro-card-desc">{client.description}</p>
                <div className="trusted-pro-card-meta">
                  <div className="trusted-pro-meta-item">
                    <span className="trusted-pro-meta-label">Since</span>
                    <span className="trusted-pro-meta-value">{client.years}</span>
                  </div>
                  <div className="trusted-pro-meta-divider"></div>
                  <div className="trusted-pro-meta-item">
                    <span className="trusted-pro-meta-label">Events</span>
                    <span className="trusted-pro-meta-value">{client.events}</span>
                  </div>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="trusted-pro-card-indicator">
                <div className="trusted-pro-indicator-line"></div>
                <div className="trusted-pro-indicator-arrow">→</div>
              </div>

              {/* Hover Glow */}
              <div className="trusted-pro-card-glow"></div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="trusted-pro-trustbar">
          <div className="trusted-pro-trustbar-line"></div>
          <div className="trusted-pro-trustbar-content">
            <span className="trusted-pro-trustbar-quote">"</span>
            <p className="trusted-pro-trustbar-text">
              The trust of our clients is the foundation of every performance
            </p>
            <span className="trusted-pro-trustbar-quote">"</span>
          </div>
          <div className="trusted-pro-trustbar-line"></div>
        </div>

        {/* CTA */}
        <div className="trusted-pro-cta">
          <button className="trusted-pro-cta-btn">
            <span>Partner With Us</span>
            <span className="trusted-pro-cta-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Bottom Audio Visualizer */}
      <div className="trusted-pro-audio">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="trusted-pro-audio-bar"
            style={{
              animationDelay: `${i * 0.08}s`,
              height: `${6 + (i % 15)}px`
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="trusted-pro-scroll">
        <span className="trusted-pro-scroll-text">SCROLL</span>
        <div className="trusted-pro-scroll-mouse">
          <div className="trusted-pro-scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;