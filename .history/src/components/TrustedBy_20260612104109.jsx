import React, { useEffect, useRef, useState } from 'react';
import './TrustedBy.css';
import rotaryImg from "../../assets/imgfour.jpg";
import cosmopolitanImg from "../../assets/imgthree.jpg";
import alumniImg from "../../assets/imgfour.jpg";
import doctorsImg from "../../assets/borderone.jpg";
import weddingImg from "../../assets/borderfour.jpg";
import corporateImg from "../../assets/borderfive.jpg";
import culturalImg from "../../assets/borderseven.jpg";
import privateImg from "../../assets/bg.png";

const clients = [
  {
    name: "Rotary Club",
    category: "Service Organization",
    years: "5+ Years",
    image: rotaryImg,
    description: "International service organization",
    events: "25+ Events"
  },
  {
    name: "Cosmopolitan Club",
    category: "Premium Club",
    years: "7+ Years",
    image: cosmopolitanImg,
    description: "Elite social club network",
    events: "40+ Events"
  },
  {
    name: "Alumni Associations",
    category: "Educational",
    years: "4+ Years",
    image: alumniImg,
    description: "Prestigious alumni networks",
    events: "30+ Events"
  },
  {
    name: "Doctors Conferences",
    category: "Medical",
    years: "6+ Years",
    image: doctorsImg,
    description: "Medical professionals",
    events: "20+ Events"
  },
  {
    name: "Wedding Celebrations",
    category: "Social",
    years: "200+ Events",
    image: weddingImg,
    description: "Luxury wedding planners",
    events: "200+ Events"
  },
  {
    name: "Corporate Events",
    category: "Business",
    years: "50+ Events",
    image: corporateImg,
    description: "Fortune 500 companies",
    events: "50+ Events"
  },
  {
    name: "Cultural Festivals",
    category: "Cultural",
    years: "30+ Festivals",
    image: culturalImg,
    description: "Major cultural events",
    events: "30+ Festivals"
  },
  {
    name: "Private Functions",
    category: "Exclusive",
    years: "100+ Events",
    image: privateImg,
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
    <section className="trusted-light-section" ref={sectionRef}>
      {/* Light Theme Background */}
      <div className="trusted-light-bg"></div>
      <div className="trusted-light-pattern"></div>

      {/* Dynamic Spotlight - Light Theme */}
      <div 
        className="trusted-light-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.08) 0%, rgba(201, 160, 61, 0.03) 40%, transparent 70%)`
        }}
      />

      {/* Light Rays */}
      <div className="trusted-light-rays">
        <div className="trusted-light-ray"></div>
        <div className="trusted-light-ray"></div>
        <div className="trusted-light-ray"></div>
      </div>

      {/* Floating Particles - Light */}
      <div className="trusted-light-particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="trusted-light-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="trusted-light-container">
        {/* Header */}
        <div className="trusted-light-header">
          <div className="trusted-light-badge">
            <span className="trusted-light-badge-dot"></span>
            <span className="trusted-light-badge-text">TRUSTED PARTNERS</span>
            <span className="trusted-light-badge-dot"></span>
          </div>

          <h2 className="trusted-light-title">
            <span className="trusted-light-title-light">Trusted By</span>
            <span className="trusted-light-title-bold">The Best</span>
          </h2>

          <p className="trusted-light-subtitle">
            From intimate gatherings to grand celebrations, we've created unforgettable moments 
            for the world's most discerning clients
          </p>

          {/* Stats */}
          <div className="trusted-light-stats">
            <div className="trusted-light-stat">
              <div className="trusted-light-stat-number">500+</div>
              <div className="trusted-light-stat-label">Events</div>
              <div className="trusted-light-stat-line"></div>
            </div>
            <div className="trusted-light-stat-sep">◉</div>
            <div className="trusted-light-stat">
              <div className="trusted-light-stat-number">100+</div>
              <div className="trusted-light-stat-label">Clients</div>
              <div className="trusted-light-stat-line"></div>
            </div>
            <div className="trusted-light-stat-sep">◉</div>
            <div className="trusted-light-stat">
              <div className="trusted-light-stat-number">98%</div>
              <div className="trusted-light-stat-label">Satisfaction</div>
              <div className="trusted-light-stat-line"></div>
            </div>
          </div>
        </div>

        {/* Image Overlay Cards Grid */}
        <div className="trusted-light-grid">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`trusted-light-card ${isVisible ? 'visible' : ''} ${hoveredIndex === index ? 'hovered' : ''}`}
              style={{ transitionDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Image */}
              <div className="trusted-light-card-image">
                <img src={client.image} alt={client.name} />
                <div className="trusted-light-card-gradient"></div>
              </div>

              {/* Content Overlay on Image */}
              <div className="trusted-light-card-content">
                {/* Top Section */}
                <div className="trusted-light-card-top">
                  <span className="trusted-light-card-category">{client.category}</span>
                  <span className="trusted-light-card-years">{client.years}</span>
                </div>

                {/* Bottom Section */}
                <div className="trusted-light-card-bottom">
                  <h3 className="trusted-light-card-name">{client.name}</h3>
                  <p className="trusted-light-card-desc">{client.description}</p>
                  <div className="trusted-light-card-meta">
                    <span className="trusted-light-card-events">{client.events}</span>
                    <span className="trusted-light-card-arrow">→</span>
                  </div>
                </div>
              </div>

              {/* Hover Reveal */}
              <div className="trusted-light-card-reveal">
                <span>View Portfolio</span>
                <div className="trusted-light-reveal-line"></div>
              </div>

              {/* Card Border */}
              <div className="trusted-light-card-border"></div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="trusted-light-statement">
          <div className="trusted-light-statement-line"></div>
          <div className="trusted-light-statement-content">
            <span className="trusted-light-statement-quote">"</span>
            <p className="trusted-light-statement-text">
              The trust of our clients is the <span className="trusted-light-statement-highlight">foundation</span> of every performance
            </p>
            <span className="trusted-light-statement-quote">"</span>
          </div>
          <div className="trusted-light-statement-line"></div>
        </div>

        {/* CTA */}
        <div className="trusted-light-cta">
          <button className="trusted-light-cta-btn">
            <span>Partner With Us</span>
            <span className="trusted-light-cta-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Bottom Energy Bars - Light */}
      <div className="trusted-light-audio">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="trusted-light-audio-bar"
            style={{
              animationDelay: `${i * 0.08}s`,
              height: `${6 + (i % 12)}px`
            }}
          />
        ))}
      </div>

  
    </section>
  );
};

export default TrustedBy;