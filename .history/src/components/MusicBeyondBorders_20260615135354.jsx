import React, { useEffect, useRef, useState } from 'react';
import './MusicBeyondBorders.css';

import bgVideo from '../assets/hero.mp4';
import bgImage from '../assets/musicbeyond.png';
import srilankaImg from '../assets/imgfour.jpg';
import qatarImg from '../assets/bordertwo.jpg';

const countries = [
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
  {
    name: "Qatar",
    flag: "🇶🇦",
    city: "Doha",
    year: "2023",
    venue: "Qatar National Convention Centre",
    image: qatarImg,
    description: "Gulf Premiere",
    coordinates: { lat: 25.2854, lng: 51.5310 }
  },
];

const MusicBeyondBorders = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
      setScrollProgress(progress);

      const cards = document.querySelectorAll('.mbb-cinematic-card');
      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < window.innerHeight * 0.6 && cardRect.bottom > window.innerHeight * 0.4) {
          setActiveIndex(idx);
        }
      });
    };

    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(e => console.log('Video play:', e));
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="mbb-cinematic-section" ref={sectionRef}>

      {/* FULLSCREEN BACKGROUND */}
      <div className="mbb-cinematic-bg">
        <img src={bgImage} alt="" className="mbb-cinematic-bg-video" />
        <div className="mbb-cinematic-bg-overlay"></div>
        <div className="mbb-cinematic-bg-video-wrapper">
          <video
            ref={videoRef}
            className="mbb-cinematic-bg-video"
            autoPlay
            loop
            muted
            playsInline
            poster={bgImage}
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="/videos/global-tour-bg.mp4" type="video/mp4" />
            <img src={bgImage} alt="Global Tour Background" />
          </video>
          <div className="mbb-cinematic-bg-overlay"></div>
          <div className="mbb-cinematic-bg-gradient"></div>
          <div className="mbb-cinematic-bg-vignette"></div>
          <div className="mbb-cinematic-bg-pattern"></div>
        </div>
      </div>

      {!isVideoLoaded && (
        <div className="mbb-cinematic-loader">
          <div className="mbb-cinematic-loader-spinner"></div>
        </div>
      )}

      {/* CINEMATIC RAYS */}
      <div className="mbb-cinematic-rays">
        <div className="mbb-cinematic-ray"></div>
        <div className="mbb-cinematic-ray"></div>
        <div className="mbb-cinematic-ray"></div>
        <div className="mbb-cinematic-ray"></div>
        <div className="mbb-cinematic-ray"></div>
      </div>

      <div className="mbb-cinematic-grain"></div>

      {/* MAIN CONTENT */}
      <div className="mbb-cinematic-container">

        {/* Header */}
        <div className="mbb-cinematic-header">
          <div className="mbb-cinematic-badge">
            <span className="mbb-cinematic-badge-line"></span>
            <span className="mbb-cinematic-badge-text">GLOBAL TOUR</span>
            <span className="mbb-cinematic-badge-line"></span>
          </div>

          <h1 className="mbb-cinematic-title">
            <span className="mbb-cinematic-title-light">Music</span>
            <span className="mbb-cinematic-title-bold">Beyond Borders</span>
          </h1>

          <div className="mbb-cinematic-divider">
            <div className="mbb-cinematic-divider-line"></div>
            <div className="mbb-cinematic-divider-diamond">◈</div>
            <div className="mbb-cinematic-divider-line"></div>
          </div>

          <p className="mbb-cinematic-subtitle">
            Taking Indian classical music to prestigious venues across the globe
          </p>

          <div className="mbb-cinematic-stats">
            <div className="mbb-cinematic-stat">
              <div className="mbb-cinematic-stat-number">2</div>
              <div className="mbb-cinematic-stat-label">Countries</div>
              <div className="mbb-cinematic-stat-glow"></div>
            </div>
            <div className="mbb-cinematic-stat-sep">◉</div>
            <div className="mbb-cinematic-stat">
              <div className="mbb-cinematic-stat-number">2</div>
              <div className="mbb-cinematic-stat-label">Cities</div>
              <div className="mbb-cinematic-stat-glow"></div>
            </div>
            <div className="mbb-cinematic-stat-sep">◉</div>
            <div className="mbb-cinematic-stat">
              <div className="mbb-cinematic-stat-number">50+</div>
              <div className="mbb-cinematic-stat-label">Shows</div>
              <div className="mbb-cinematic-stat-glow"></div>
            </div>
          </div>
        </div>

        {/* Map dots */}
        <div className="mbb-cinematic-map">
          <div className="mbb-cinematic-map-line"></div>
          {countries.map((country, idx) => (
            <div
              key={idx}
              className={`mbb-cinematic-map-dot ${idx === activeIndex ? 'active' : ''}`}
              style={{
                left: `${30 + idx * 40}%`,
                top: `${35 + (idx % 2) * 20}%`
              }}
            >
              <div className="mbb-cinematic-map-pulse"></div>
              <div className="mbb-cinematic-map-tooltip">{country.city}</div>
            </div>
          ))}
        </div>

        {/* SPLIT LAYOUT: Left = stacked image cards, Right = all text */}
        <div className="mbb-split-layout">

          {/* LEFT COLUMN — two image cards stacked vertically */}
          <div className="mbb-split-images">
            {countries.map((country, idx) => (
              <div
                key={idx}
                className={`mbb-cinematic-card mbb-image-only-card ${activeIndex === idx ? 'active' : ''} ${hoveredCard === idx ? 'hovered' : ''}`}
                onMouseEnter={() => { setHoveredCard(idx); setActiveIndex(idx); }}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="mbb-cinematic-card-media">
                  <img src={country.image} alt={country.name} />
                  <div className="mbb-cinematic-card-overlay"></div>
                  <div className="mbb-cinematic-card-gradient"></div>
                  <div className="mbb-cinematic-card-flag">{country.flag}</div>
                  <div className="mbb-cinematic-card-year">{country.year}</div>
                </div>
                <div className="mbb-cinematic-card-glow"></div>
                <div className="mbb-cinematic-card-corner tl"></div>
                <div className="mbb-cinematic-card-corner tr"></div>
                <div className="mbb-cinematic-card-corner bl"></div>
                <div className="mbb-cinematic-card-corner br"></div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN — all text for all cards */}
          <div className="mbb-split-text">
            {countries.map((country, idx) => (
              <div
                key={idx}
                className={`mbb-text-block ${activeIndex === idx ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <div className="mbb-cinematic-card-number">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="mbb-cinematic-card-title">{country.name}</h3>
                <p className="mbb-cinematic-card-location">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" strokeWidth="1.5" />
                  </svg>
                  {country.city}
                </p>
                <p className="mbb-cinematic-card-venue">{country.venue}</p>
                <p className="mbb-cinematic-card-desc">{country.description}</p>
                <div className="mbb-cinematic-card-line"></div>
                <div className="mbb-cinematic-card-tag">International Tour</div>

                {/* Separator between blocks (not after last) */}
                {idx < countries.length - 1 && (
                  <div className="mbb-text-block-sep"></div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="mbb-cinematic-footer">
          <div className="mbb-cinematic-footer-line"></div>

          <div className="mbb-cinematic-footer-quote">
            <div className="mbb-cinematic-quote-mark">"</div>
            <div className="mbb-cinematic-quote-text">
              <span>Thousands of miles traveled.</span>
              <strong>Millions of hearts touched.</strong>
            </div>
            <div className="mbb-cinematic-quote-mark">"</div>
          </div>

          <div className="mbb-cinematic-footer-flags">
            {countries.map((c, i) => (
              <div key={i} className="mbb-cinematic-flag" style={{ animationDelay: `${i * 0.04}s` }}>
                <span className="mbb-cinematic-flag-icon">{c.flag}</span>
                <span className="mbb-cinematic-flag-name">{c.name}</span>
              </div>
            ))}
          </div>

          <button className="mbb-cinematic-cta">
            <span>Explore Global Journey</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="mbb-cinematic-cta-shine"></div>
          </button>
        </div>
      </div>

      {/* SCROLL PROGRESS RING */}
      <div className="mbb-cinematic-scroll-ring">
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
        <span className="mbb-cinematic-ring-text">{Math.floor(scrollProgress * 100)}%</span>
      </div>

    </section>
  );
};

export default MusicBeyondBorders;