import React from 'react';
import './MusicBeyondBorders.css';

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
  },
  {
    name: "Qatar",
    flag: "🇶🇦",
    city: "Doha",
    year: "2023",
    venue: "Qatar National Convention Centre",
    image: qatarImg,
    description: "Gulf Premiere",
  },
];

const MusicBeyondBorders = () => {
  return (
    <>
      {/* ===================== HERO (single screen) ===================== */}
      <section className="mbb-hero">
        <div className="mbb-hero-bg">
          <img src={bgImage} alt="" className="mbb-hero-bg-img" />
          <div className="mbb-hero-overlay"></div>
        </div>

        <div className="mbb-hero-row">
          <div className="mbb-hero-cards">
            {countries.map((country, idx) => (
              <div key={idx} className="mbb-card">
                <div className="mbb-card-media">
                  <img src={country.image} alt={country.name} />
                  <div className="mbb-card-overlay"></div>
                  <div className="mbb-card-flag">{country.flag}</div>
                  <div className="mbb-card-year">{country.year}</div>
                </div>

                <div className="mbb-card-content">
                  <div className="mbb-card-number">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                  <h3 className="mbb-card-title">{country.name}</h3>
                  <p className="mbb-card-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="1.5" />
                      <circle cx="12" cy="10" r="3" strokeWidth="1.5" />
                    </svg>
                    {country.city}
                  </p>
                  <p className="mbb-card-venue">{country.venue}</p>
                  <p className="mbb-card-desc">{country.description}</p>
                  <div className="mbb-card-line"></div>
                  <div className="mbb-card-tag">International Tour</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mbb-hero-content">
            <div className="mbb-badge">
              <span className="mbb-badge-line"></span>
              <span className="mbb-badge-text">GLOBAL TOUR</span>
              <span className="mbb-badge-line"></span>
            </div>

            <h1 className="mbb-title">
              <span className="mbb-title-light">Music</span>
              <span className="mbb-title-bold">Beyond Borders</span>
            </h1>

            <div className="mbb-divider">
              <div className="mbb-divider-line"></div>
              <div className="mbb-divider-diamond">◈</div>
              <div className="mbb-divider-line"></div>
            </div>

            <p className="mbb-subtitle">
              Taking Indian classical music to prestigious venues across the globe
            </p>

            <div className="mbb-stats">
              <div className="mbb-stat">
                <div className="mbb-stat-number">2</div>
                <div className="mbb-stat-label">Countries</div>
              </div>
              <div className="mbb-stat-sep">◉</div>
              <div className="mbb-stat">
                <div className="mbb-stat-number">2</div>
                <div className="mbb-stat-label">Cities</div>
              </div>
              <div className="mbb-stat-sep">◉</div>
              <div className="mbb-stat">
                <div className="mbb-stat-number">50+</div>
                <div className="mbb-stat-label">Shows</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER (below the fold) ===================== */}
      <section className="mbb-details">
        <div className="mbb-footer">
          <div className="mbb-footer-line"></div>

          <div className="mbb-footer-quote">
            <div className="mbb-quote-mark">"</div>
            <div className="mbb-quote-text">
              <span>Thousands of miles traveled.</span>
              <strong>Millions of hearts touched.</strong>
            </div>
            <div className="mbb-quote-mark">"</div>
          </div>

          <div className="mbb-footer-flags">
            {countries.map((c, i) => (
              <div key={i} className="mbb-flag">
                <span className="mbb-flag-icon">{c.flag}</span>
                <span className="mbb-flag-name">{c.name}</span>
              </div>
            ))}
          </div>

          <button className="mbb-cta">
            <span>Explore Global Journey</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default MusicBeyondBorders;