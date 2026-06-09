import React, { useEffect, useRef, useState } from 'react';
import './ImpactNumbers.css';

const impactData = [
  {
    number: "1000+",
    label: "Events",
    description: "produced across South India",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    highlight: true,
    gradient: "linear-gradient(135deg, #c9a03d, #b8860b)"
  },
  {
    number: "500+",
    label: "Concerts",
    description: "electrifying live performances",
    image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg",
    gradient: "linear-gradient(135deg, #2c1810, #8b4513)"
  },
  {
    number: "60+",
    label: "Cities",
    description: "from metros to cultural hubs",
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg",
    gradient: "linear-gradient(135deg, #c9a03d, #daa520)"
  },
  {
    number: "25+",
    label: "Years",
    description: "of creating magical moments",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    gradient: "linear-gradient(135deg, #8b7355, #2c1810)"
  },
  {
    number: "7+",
    label: "Countries",
    description: "taking Indian music global",
    image: "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg",
    highlight: true,
    gradient: "linear-gradient(135deg, #c9a03d, #ffd700)"
  },
  {
    number: "85+",
    label: "Awards",
    description: "national & international recognitions",
    image: "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg",
    highlight: false,
    gradient: "linear-gradient(135deg, #daa520, #c9a03d)"
  }
];

const ImpactNumbers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({});
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            if (index && !animatedNumbers[index]) {
              animateNumber(parseInt(index));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.in-impact-number');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [animatedNumbers]);

  const animateNumber = (index) => {
    const target = impactData[index].number;
    const cleanNumber = parseInt(target.replace(/[^0-9]/g, ''));
    const suffix = target.includes('+') ? '+' : '';
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = cleanNumber / steps;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      start += increment;
      if (currentStep >= steps) {
        setAnimatedNumbers(prev => ({ ...prev, [index]: cleanNumber + suffix }));
        clearInterval(timer);
      } else {
        setAnimatedNumbers(prev => ({ ...prev, [index]: Math.floor(start) + suffix }));
      }
    }, duration / steps);
  };

  return (
    <section className="in-premium-section" ref={sectionRef}>
      {/* Premium Background Elements */}
      <div className="in-premium-bg"></div>
      <div className="in-premium-pattern"></div>
      <div className="in-premium-glow"></div>

      {/* Cinematic Light Rays */}
      <div className="in-light-rays">
        <div className="in-ray"></div>
        <div className="in-ray"></div>
        <div className="in-ray"></div>
        <div className="in-ray"></div>
      </div>

      {/* Header */}
      <div className="in-premium-header">
        <div className="in-premium-badge">
          <span className="in-badge-line"></span>
          <span className="in-badge-text">THE IMPACT</span>
          <span className="in-badge-line"></span>
        </div>

        <h2 className="in-premium-title">
          <span className="in-title-light">Creating</span>
          <span className="in-title-gradient">Musical Legacy</span>
        </h2>

        <div className="in-premium-stats-bar">
          <div className="in-stat-pill">
            <span className="in-stat-value">15+</span>
            <span className="in-stat-label">Years Excellence</span>
          </div>
          <div className="in-stat-divider"></div>
          <div className="in-stat-pill">
            <span className="in-stat-value">500k+</span>
            <span className="in-stat-label">Audience Reached</span>
          </div>
          <div className="in-stat-divider"></div>
          <div className="in-stat-pill">
            <span className="in-stat-value">85+</span>
            <span className="in-stat-label">Awards Won</span>
          </div>
        </div>
      </div>

      {/* Impact Grid - Premium Card Layout */}
      <div className="in-impact-grid" ref={containerRef}>
        {impactData.map((item, index) => (
          <div
            key={index}
            className={`in-impact-card ${item.highlight ? 'in-card-highlight' : ''} ${activeIndex === index ? 'in-card-active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Card Background Image */}
            <div className="in-card-bg-image">
              <img src={item.image} alt={item.label} />
              <div className="in-card-overlay" style={{ background: item.gradient }}></div>
            </div>

            {/* Card Content */}
            <div className="in-card-content">
              {/* Number Section */}
              <div className="in-card-number-section">
                <span className="in-card-hash">#</span>
                <div className="in-card-number-wrapper">
                  <span 
                    className="in-impact-number"
                    data-index={index}
                    data-number={item.number}
                  >
                    {animatedNumbers[index] || "0"}
                  </span>
                  <div className="in-card-number-line"></div>
                </div>
              </div>

              {/* Label */}
              <div className="in-card-label-section">
                <h3 className="in-card-label">{item.label}</h3>
                <p className="in-card-description">{item.description}</p>
              </div>

              {/* Decorative Element */}
              <div className="in-card-decoration">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="in-card-glow"></div>
          </div>
        ))}
      </div>



      {/* Inspirational Footer */}
      <div className="in-premium-footer">

        <div className="in-footer-quote-container">
          <span className="in-footer-quote-mark">"</span>
          <p className="in-footer-quote">
            From humble beginnings to global stages,<br />
            <strong>every number tells a story of passion and perseverance</strong>
          </p>
          <span className="in-footer-quote-mark">"</span>
        </div>

        <div className="in-footer-stats">
          <div className="in-footer-stat">
            <span className="in-footer-stat-value">50+</span>
            <span className="in-footer-stat-label">Team Members</span>
          </div>
          <div className="in-footer-stat">
            <span className="in-footer-stat-value">100%</span>
            <span className="in-footer-stat-label">Client Satisfaction</span>
          </div>
          <div className="in-footer-stat">
            <span className="in-footer-stat-value">24/7</span>
            <span className="in-footer-stat-label">Dedication</span>
          </div>
        </div>
      </div>

      {/* Scroll Progress Ring */}
      <div className="in-scroll-ring">
        <svg viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="22" fill="none" stroke="rgba(201,160,61,0.1)" strokeWidth="2"/>
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
        <span className="in-ring-text">{Math.floor(scrollProgress * 100)}%</span>
      </div>
    </section>
  );
};

export default ImpactNumbers;