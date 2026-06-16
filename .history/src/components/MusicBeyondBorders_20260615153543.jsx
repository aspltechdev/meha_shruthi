import React, { useEffect, useRef, useState } from 'react';
import './MusicBeyondBorders.css';

import bgImage from '../assets/musicbeyond.png';
import malaysiaImg from '../assets/borderseven.jpg';
import srilankaImg from '../assets/imgfour.jpg';

const countries = [
  {
    name: "Malaysia",
    flag: "🇲🇾",
    city: "Kuala Lumpur",
    year: "2023",
    venue: "PETRONAS Theatre",
    image: malaysiaImg,
    description: "Tropical Rhythms",
    coordinates: { lat: 3.1390, lng: 101.6869 }
  },
  {
    name: "Sri Lanka",
    flag: "🇱🇰",
    city: "Colombo",
    year: "2017",
    venue: "Nelum Pokuna",
    image: srilankaImg,
    description: "Isle of Melody",
    coordinates: { lat: 6.9271, lng: 79.8612 }
  },
];

const MusicBeyondBorders = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
      setScrollProgress(progress);

      const cards = document.querySelectorAll('.mbb-layout-card');
      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < window.innerHeight * 0.6 && cardRect.bottom > window.innerHeight * 0.4) {
          setActiveIndex(idx);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="mbb-layout-section" ref={sectionRef}>
      <div className="mbb-layout-bg">
        <img src={bgImage} alt="" className="mbb-layout-bg-image" />
        <div className="mbb-layout-bg-overlay"></div>
      </div>

      <div className="mbb-layout-container">
        <div className="mbb-layout-header">
          <div className="mbb-layout-badge">
            <span className="mbb-layout-badge-line"></span>
            <span className="mbb-layout-badge-text">GLOBAL TOUR</span>
            <span className="mbb-layout-badge-line"></span>
          </div>

          <h1 className="mbb-layout-title">
            <span className="mbb-layout-title-light">Music</span>
            <span className="mbb-layout-title-bold">Beyond Borders</span>
          </h1>

          <div className="mbb-layout-divider">
            <div className="mbb-layout-divider-line"></div>
            <div className="mbb-layout-divider-diamond">◈</div>
            <div className="mbb-layout-divider-line"></div>
          </div>

          <p className="mbb-layout-subtitle">
            Taking Indian classical music to prestigious venues across the globe
          </p>

          <div className="mbb-layout-stats">
            <div className="mbb-layout-stat">
              <div className="mbb-layout-stat-number">8</div>
              <div className="mbb-layout-stat-label">Countries</div>
            </div>
            <div className="mbb-layout-stat-sep">◉</div>
            <div className="mbb-layout-stat">
              <div className="mbb-layout-stat-number">15+</div>
              <div className="mbb-layout-stat-label">Cities</div>
            </div>
            <div className="mbb-layout-stat-sep">◉</div>
            <div className="mbb-layout-stat">
              <div className="mbb-layout-stat-number">50+</div>
              <div className="mbb-layout-stat-label">Shows</div>
            </div>
          </div>
        </div>

        <div className="mbb-layout-grid">
          <div className="mbb-layout-left">
            {countries.map((country, idx) => (
              <div
                key={idx}
                className={`mbb-layout-card ${activeIndex === idx ? 'active' : ''} ${hoveredCard === idx ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="mbb-layout-card-image">
                  <img src={country.image} alt={country.name} />
                  <div className="mbb-layout-card-overlay"></div>
                  <div className="mbb-layout-card-flag">{country.flag}</div>
                  <div className="mbb-layout-card-year">{country.year}</div>
                </div>

                <div className="mbb-layout-card-content">
                  <div className="mbb-layout-card-number">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                  <h3 className="mbb-layout-card-title">{country.name}</h3>
                  <p className="mbb-layout-card-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="1.5" />
                      <circle cx="12" cy="10" r="3" strokeWidth="1.5" />
                    </svg>
                    {country.city}
                  </p>
                  <p className="mbb-layout-card-venue">{country.venue}</p>
                  <p className="mbb-layout-card-desc">{country.description}</p>
                  <div className="mbb-layout-card-line"></div>
                  <div className="mbb-layout-card-tag">International Tour</div>
                </div>

                <div className="mbb-layout-card-glow"></div>
              </div>
            ))}
          </div>

          <div className="mbb-layout-right">
            <div className="mbb-layout-content-container">
              <div className="mbb-layout-footer">
                <div className="mbb-layout-footer-line"></div>

                <div className="mbb-layout-footer-quote">
                  <div className="mbb-layout-quote-mark">"</div>
                  <div className="mbb-layout-quote-text">
                    <span>Thousands of miles traveled.</span>
                    <strong>Millions of hearts touched.</strong>
                  </div>
                  <div className="mbb-layout-quote-mark">"</div>
                </div>

                <div className="mbb-layout-footer-flags">
                  {countries.map((c, i) => (
                    <div key={i} className="mbb-layout-flag" style={{ animationDelay: `${i * 0.04}s` }}>
                      <span className="mbb-layout-flag-icon">{c.flag}</span>
                      <span className="mbb-layout-flag-name">{c.name}</span>
                    </div>
                  ))}
                </div>

                <button className="mbb-layout-cta">
                  <span>Explore Global Journey</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <div className="mbb-layout-cta-shine"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mbb-layout-scroll-ring">
        <svg viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="22" fill="none" stroke="rgba(201,160,61,0.2)" strokeWidth="2" />
          <circle
            cx="25"
            cy="25"
            r="22"
            fill="none"
            stroke="#c9a03d"
            strokeWidth="2"
            strokeDasharray="138.2"
            strokeDashoffset={138.2 * (1 - scrollProgress)}
            transform="rotate(-90 25 25)"
          />
        </svg>
        <span className="mbb-layout-ring-text">{Math.floor(scrollProgress * 100)}%</span>
      </div>
    </section>
  );
};

export default MusicBeyondBorders;