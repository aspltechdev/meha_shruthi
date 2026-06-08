import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const artistRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      if (artistRef.current) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
        artistRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Video Background */}
      <div className="hero-video-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-bg-video"
        >
          <source
            src="https://www.pexels.com/download/video/3636753/"
            type="video/mp4"
          />
        </video>
        <div className="hero-video-mask"></div>
      </div>

      {/* Cursor Spotlight */}
      <div 
        className="hero-cursor-glow"
        style={{
          left: mousePos.x,
          top: mousePos.y
        }}
      />

      {/* Stage Light Beams */}
      <div className="hero-light-beams">
        <div className="hero-light-beam hero-light-beam-1"></div>
        <div className="hero-light-beam hero-light-beam-2"></div>
        <div className="hero-light-beam hero-light-beam-3"></div>
        <div className="hero-light-beam hero-light-beam-4"></div>
        <div className="hero-light-beam hero-light-beam-5"></div>
      </div>

      {/* Energy Rings */}
      <div className="hero-energy-rings">
        <div 
          className="hero-energy-ring hero-energy-ring-1"
          style={{
            transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.001})`
          }}
        ></div>
        <div 
          className="hero-energy-ring hero-energy-ring-2"
          style={{
            transform: `translate(-50%, -50%) scale(${1.2 + scrollY * 0.0005})`
          }}
        ></div>
        <div 
          className="hero-energy-ring hero-energy-ring-3"
          style={{
            transform: `translate(-50%, -50%) scale(${0.8 + scrollY * 0.0008})`
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="hero-particles-wrapper">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="hero-particle-dot"
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

      {/* Floating Stats */}
      <div 
        className="hero-floating-stat hero-floating-stat-left"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        <span className="hero-stat-number">1000+</span>
        <span className="hero-stat-label">EVENTS</span>
        <div className="hero-stat-shine"></div>
      </div>

      <div 
        className="hero-floating-stat hero-floating-stat-right"
        style={{
          transform: `translateY(${-scrollY * 0.2}px)`
        }}
      >
        <span className="hero-stat-number">25+</span>
        <span className="hero-stat-label">YEARS</span>
        <div className="hero-stat-shine"></div>
      </div>

      <div 
        className="hero-floating-stat hero-floating-stat-bottom"
        style={{
          transform: `translateY(${-scrollY * 0.4}px)`
        }}
      >
        <span className="hero-stat-number">500+</span>
        <span className="hero-stat-label">CONCERTS</span>
        <div className="hero-stat-shine"></div>
      </div>

      {/* Artist Image */}
      <div className="hero-artist-wrapper" ref={artistRef}>
        <img
          src="https://images.pexels.com/photos/15789084/pexels-photo-15789084.jpeg"
          alt="Performer"
          className="hero-artist-img"
        />
        <div className="hero-artist-aura"></div>
      </div>

      {/* Floating Microphone */}
      <div 
        className="hero-mic-wrapper"
        style={{
          transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px) rotate(${scrollY * 0.05}deg)`
        }}
      >
        <img
          src="/mic.png"
          alt="Microphone"
          className="hero-mic-img"
        />
      </div>

      {/* Main Content */}
      <div className="hero-main-content">
        <div className="hero-content-inner">
          {/* Badge */}
          <div className="hero-premium-badge">
            <span className="hero-badge-star">✦</span>
            SOUTH INDIA'S PREMIUM ENTERTAINMENT EXPERIENCE
            <span className="hero-badge-star">✦</span>
          </div>

          {/* Headline */}
          <h1 className="hero-main-headline">
            <span className="hero-headline-row">EVERY</span>
            <span className="hero-headline-row">CELEBRATION</span>
            <span className="hero-headline-row hero-headline-gold">DESERVES A</span>
            <span className="hero-headline-row hero-headline-outline">STANDING</span>
            <span className="hero-headline-row hero-headline-gold">OVATION</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-description">
            <span className="hero-desc-divider">•</span>
            Live Music
            <span className="hero-desc-divider">•</span>
            Celebrity Shows
            <span className="hero-desc-divider">•</span>
            Weddings
            <span className="hero-desc-divider">•</span>
            Corporate Events
            <span className="hero-desc-divider">•</span>
            Mega Productions
            <span className="hero-desc-divider">•</span>
          </p>

          {/* CTA Buttons */}
          <div className="hero-action-buttons">
            <button className="hero-btn-primary">
              <span className="hero-btn-icon">▶</span>
              Watch Showreel
              <span className="hero-btn-shimmer"></span>
            </button>
            <button className="hero-btn-secondary">
              <span className="hero-btn-icon">✦</span>
              Plan My Event
            </button>
          </div>
        </div>
      </div>

      {/* Music Beat Bars */}
      <div className="hero-beat-bars">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="hero-beat-single"
            style={{
              animationDelay: `${i * 0.15}s`,
              height: `${15 + Math.random() * 30}px`
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-hint">
        <div className="hero-scroll-line"></div>
        <span className="hero-scroll-text">SCROLL TO EXPERIENCE</span>
        <div className="hero-scroll-arrow">↓</div>
      </div>

      {/* Bottom Gradient */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
};

export default Hero;