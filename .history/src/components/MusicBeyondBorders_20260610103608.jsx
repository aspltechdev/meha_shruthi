import { useEffect, useRef, useState } from 'react';
import './MusicBeyondBorders.css';
import canadaImg from '../assets/borderone.jpg';
import ukImg from '../assets/bordertwo.jpg';
import australiaImg from '../assets/borderthree.jpg';
import denmarkImg from '../assets/borderfour.jpg';
import switzerlandImg from '../assets/switzerland.jpg';
import singaporeImg from '../assets/singapore.jpg';
import malaysiaImg from '../assets/malaysia.jpg';
import srilankaImg from '../assets/srilanka.jpg';

const countries = [
  {
    name: "Canada",
    flag: "🇨🇦",
    city: "Toronto",
    year: "2019",
    venue: "Roy Thomson Hall",
    image: canadaImg,
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    city: "London",
    year: "2018",
    venue: "Royal Albert Hall",
    image: ukImg,
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    city: "Sydney",
    year: "2020",
    venue: "Sydney Opera House",
    image: australiaImg,
  },
  {
    name: "Denmark",
    flag: "🇩🇰",
    city: "Copenhagen",
    year: "2022",
    venue: "Koncerthuset",
    image: denmarkImg,
  },
  {
    name: "Switzerland",
    flag: "🇨🇭",
    city: "Zurich",
    year: "2021",
    venue: "Tonhalle",
    image: switzerlandImg,
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    city: "Marina Bay",
    year: "2019",
    venue: "Esplanade",
    image: singaporeImg,
  },
  {
    name: "Malaysia",
    flag: "🇲🇾",
    city: "Kuala Lumpur",
    year: "2023",
    venue: "PETRONAS Theatre",
    image: malaysiaImg,
  },
  {
    name: "Sri Lanka",
    flag: "🇱🇰",
    city: "Colombo",
    year: "2017",
    venue: "Nelum Pokuna",
    image: srilankaImg,
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

      const cards = document.querySelectorAll('.mbb-journey-card');
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
    <section className="mbb-section" ref={sectionRef}>
      {/* Light Theme Background */}
      <div className="mbb-bg-light"></div>
      <div className="mbb-pattern-overlay"></div>

      {/* Header */}
      <div className="mbb-header">
        <div className="mbb-header-badge">
          <span className="mbb-badge-dot"></span>
          <span className="mbb-badge-text">GLOBAL JOURNEY</span>
          <span className="mbb-badge-dot"></span>
        </div>

        <h2 className="mbb-title">
          <span className="mbb-title-light">Music</span>
          <span className="mbb-title-bold">Beyond Borders</span>
        </h2>

        <p className="mbb-subtitle">
          Taking Indian classical music to prestigious venues across the globe
        </p>

        <div className="mbb-stats">
          <div className="mbb-stat">
            <span className="mbb-stat-num">8</span>
            <span className="mbb-stat-label">Countries</span>
          </div>
          <div className="mbb-stat-dot"></div>
          <div className="mbb-stat">
            <span className="mbb-stat-num">15+</span>
            <span className="mbb-stat-label">Cities</span>
          </div>
          <div className="mbb-stat-dot"></div>
          <div className="mbb-stat">
            <span className="mbb-stat-num">50+</span>
            <span className="mbb-stat-label">Performances</span>
          </div>
        </div>
      </div>

      {/* Journey Grid */}
      <div className="mbb-grid">
        {countries.map((country, idx) => (
          <div
            key={idx}
            className={`mbb-journey-card ${activeIndex === idx ? 'active' : ''}`}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            {/* Card Media */}
            <div className="mbb-card-media">
              <div className="mbb-media-frame">
                <img 
                  src={country.image} 
                  alt={country.name}
                  className="mbb-card-img"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/fdf4e3/c9a03d?text=' + country.name;
                  }}
                />
                <div className="mbb-media-overlay"></div>
                
                {/* Flag Badge */}
                <div className="mbb-flag-badge">
                  <span>{country.flag}</span>
                </div>
                
                {/* Year Badge */}
                <div className="mbb-year-badge">
                  <span>{country.year}</span>
                </div>

                {/* Hover Play Icon */}
                <div className={`mbb-hover-icon ${hoveredCard === idx ? 'show' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="mbb-card-content">
              <div className="mbb-card-number">{(idx + 1).toString().padStart(2, '0')}</div>
              <h3 className="mbb-card-title">{country.name}</h3>
              <p className="mbb-card-location">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" strokeWidth="2"/>
                </svg>
                {country.city}
              </p>
              <p className="mbb-card-venue">{country.venue}</p>
              <div className="mbb-card-line"></div>
              <div className="mbb-card-tag">
                <span>International Tour</span>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="mbb-card-glow"></div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="mbb-progress">
        <div className="mbb-progress-line">
          <div className="mbb-progress-fill" style={{ width: `${scrollProgress * 100}%` }}></div>
        </div>
        <div className="mbb-progress-dots">
          {countries.map((_, i) => (
            <div key={i} className={`mbb-progress-dot ${i === activeIndex ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>

      {/* Footer Statement */}
      <div className="mbb-footer">
        <div className="mbb-footer-line"></div>
        
        <div className="mbb-footer-quote">
          <span className="mbb-quote-mark">"</span>
          <p>
            Thousands of miles traveled.
            <br />
            <strong>Millions of hearts touched.</strong>
          </p>
          <span className="mbb-quote-mark">"</span>
        </div>

        <div className="mbb-footer-flags">
          {countries.map((c, i) => (
            <div key={i} className="mbb-flag-item" style={{ animationDelay: `${i * 0.03}s` }}>
              <span>{c.flag}</span>
              <span className="mbb-flag-name">{c.name}</span>
            </div>
          ))}
        </div>

        <button className="mbb-cta">
          <span>Explore Full Journey</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Scroll Hint */}
      <div className="mbb-scroll-hint">
        <span>SCROLL</span>
        <div className="mbb-scroll-mouse">
          <div className="mbb-scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default MusicBeyondBorders;