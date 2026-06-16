import { useEffect, useRef, useState } from 'react';
import './LegacySection.css';
import music1 from '../assets/music1.jpg';
import music2 from '../assets/music2.jpg';
import music3 from '../assets/music3.jpg';
import music4 from '../assets/music4.png';
import legacyBgImage from '../assets/legbg.jpg';
import heroArtist from '../assets/music4.png'; // replace with your actual hero artist image

const milestones = [
  {
    year: "2000",
    title: "The Journey Begins",
    subtitle: "FIRST STAGE",
    description: "Started as a passionate music group with a vision to create unforgettable experiences. The first note that changed everything.",
    image: music1,
    gradient: "linear-gradient(135deg, #c9a03d, #b8860b)"
  },
  {
    year: "2010",
    title: "Super Singer",
    subtitle: "NATIONAL RECOGNITION",
    description: "National recognition through Vijay TV Super Singer and major stage performances, reaching millions of hearts.",
    image: music2,
    gradient: "linear-gradient(135deg, #daa520, #c9a03d)"
  },
  {
    year: "2018",
    title: "1000+ Events",
    subtitle: "MILESTONE ACHIEVED",
    description: "Celebrated 1000 successful events across South India, becoming a trusted name in entertainment industry.",
    image: music3,
    gradient: "linear-gradient(135deg, #c9a03d, #8b7355)"
  },
  {
    year: "2025",
    title: "International",
    subtitle: "GLOBAL STAGE",
    description: "Expanding our musical legacy across international borders, taking Indian music to the world stage.",
    image: music4,
    gradient: "linear-gradient(135deg, #b8860b, #daa520)"
  }
];

const floatingCards = [
  { year: "2000", title: "The Journey Begins", position: "tl" },
  { year: "2010", title: "Super Singer",        position: "tr" },
  { year: "2018", title: "1000+ Events",        position: "bl" },
  { year: "2025", title: "International",       position: "br" }
];

const LegacySection = () => {
  const [mousePos, setMousePos]           = useState({ x: 50, y: 50 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const sectionRef = useRef(null);
  const videoRef   = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width)  * 100,
        y: ((e.clientY - rect.top)  / rect.height) * 100
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(e => console.log('Video play:', e));
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="legacy-pro-section" ref={sectionRef}>

      {/* ── Background Video Layer ── */}
      <div className="legacy-pro-bg">
        <video
          ref={videoRef}
          className="legacy-pro-bg-video"
          autoPlay
          loop
          muted
          playsInline
          poster={legacyBgImage}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="" type="video/mp4" />
          <img src={legacyBgImage} alt="Background" />
        </video>
        <div className="legacy-pro-bg-overlay"></div>
        <div className="legacy-pro-bg-gradient"></div>
        <div className="legacy-pro-bg-vignette"></div>
        <div className="legacy-pro-bg-pattern"></div>
      </div>

      {!isVideoLoaded && (
        <div className="legacy-pro-loader">
          <div className="legacy-pro-loader-spinner"></div>
        </div>
      )}

      {/* ── Spotlight (mouse-tracked) ── */}
      <div
        className="legacy-pro-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201,160,61,0.15) 0%, rgba(201,160,61,0.05) 40%, transparent 70%)`
        }}
      />

      {/* ── Rays ── */}
      <div className="legacy-pro-rays">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="legacy-pro-ray"></div>
        ))}
      </div>

      {/* ── Particles ── */}
      <div className="legacy-pro-particles">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="legacy-pro-particle"
            style={{
              left:              `${(i * 19) % 100}%`,
              top:               `${(i * 37) % 100}%`,
              animationDelay:    `${i * 0.25}s`,
              animationDuration: `${8 + (i % 6)}s`,
              width:             `${2 + (i % 4)}px`,
              height:            `${2 + (i % 4)}px`
            }}
          />
        ))}
      </div>

      {/* ── Grain ── */}
      <div className="legacy-pro-grain"></div>

      {/* ════════════════════════════════════════
          SECTION 1 — HERO
          ════════════════════════════════════════ */}
      <div className="legacy-pro-container">

        {/* LEFT — copy, stats, quote, CTA */}
        <div className="legacy-pro-left">
          <div className="legacy-pro-content">

            <div className="legacy-pro-badge">
              <span className="legacy-pro-badge-line"></span>
              <span className="legacy-pro-badge-text">25 YEARS OF EXCELLENCE</span>
              <span className="legacy-pro-badge-line"></span>
            </div>

            <h1 className="legacy-pro-headline">
              <span className="legacy-pro-headline-light">Our Musical</span>
              <span className="legacy-pro-headline-gold">Legacy</span>
            </h1>

            <div className="legacy-pro-divider">
              <div className="legacy-pro-divider-line"></div>
              <div className="legacy-pro-divider-diamond">◈</div>
              <div className="legacy-pro-divider-line"></div>
            </div>

            <p className="legacy-pro-description">
              From intimate performances to grand celebrations, creating unforgettable memories
              through music and entertainment that resonates across generations.
            </p>

            {/* Stats */}
            <div className="legacy-pro-stats">
              {[
                { number: "1000+", label: "Events" },
                { number: "60+",   label: "Cities" },
                { number: "25+",   label: "Years"  }
              ].map((stat) => (
                <div key={stat.label} className="legacy-pro-stat-card">
                  <div className="legacy-pro-stat-number">{stat.number}</div>
                  <div className="legacy-pro-stat-label">{stat.label}</div>
                  <div className="legacy-pro-stat-glow"></div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="legacy-pro-quote">
              <div className="legacy-pro-quote-icon">"</div>
              <p>From one stage to a global phenomenon</p>
              <div className="legacy-pro-quote-icon">"</div>
            </div>

            {/* CTA */}
            <div className="legacy-pro-cta-wrap">
              <button className="legacy-pro-cta-btn">
                <span className="legacy-pro-cta-text">Discover Our Journey</span>
                <span className="legacy-pro-cta-arrow">→</span>
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT — hero image + blob behind + floating chips */}
        <div className="legacy-pro-right">

          {/* Blob sits OUTSIDE the image wrapper, directly in .legacy-pro-right */}
          <div className="legacy-pro-hero-blob"></div>

          {/* Image wrapper — above the blob */}
          <div className="legacy-pro-hero-image-wrap">

            <div className="legacy-pro-hero-img-frame">
              <img
                src={heroArtist}
                alt="Featured Artist"
                className="legacy-pro-hero-img"
              />
              <div className="legacy-pro-hero-img-overlay"></div>
              <div
                className="legacy-pro-hero-img-gradient"
                style={{ background: milestones[3].gradient }}
              ></div>
              <div className="legacy-pro-card-corner tl"></div>
              <div className="legacy-pro-card-corner tr"></div>
              <div className="legacy-pro-card-corner bl"></div>
              <div className="legacy-pro-card-corner br"></div>
              <div className="legacy-pro-hero-glow-ring ring-1"></div>
              <div className="legacy-pro-hero-glow-ring ring-2"></div>
            </div>

            {/* Floating milestone chips */}
            {floatingCards.map((card) => (
              <div
                key={card.position}
                className={`legacy-pro-float-card legacy-pro-float-card--${card.position}`}
              >
                <span className="legacy-pro-float-year">{card.year}</span>
                <span className="legacy-pro-float-title">{card.title}</span>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* ════════════════════════════════════════
          SECTION 2 — MILESTONE TIMELINE GRID
          ════════════════════════════════════════ */}
      <div className="legacy-pro-timeline-section">

        <div className="legacy-pro-timeline-header">
          <div className="legacy-pro-divider">
            <div className="legacy-pro-divider-line"></div>
            <div className="legacy-pro-divider-diamond">◈</div>
            <div className="legacy-pro-divider-line"></div>
          </div>
          <h2 className="legacy-pro-timeline-heading">
            Milestones of <span>Excellence</span>
          </h2>
        </div>

        <div className="legacy-pro-milestone-grid">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="legacy-pro-milestone-card">

              <div className="legacy-pro-milestone-media">
                <img src={milestone.image} alt={milestone.title} />
                <div className="legacy-pro-milestone-media-overlay"></div>
                <div
                  className="legacy-pro-milestone-media-gradient"
                  style={{ background: milestone.gradient }}
                ></div>
                <div className="legacy-pro-card-corner tl"></div>
                <div className="legacy-pro-card-corner tr"></div>
              </div>

              <div className="legacy-pro-milestone-body">
                <div className="legacy-pro-milestone-year-tag">{milestone.year}</div>
                <h3 className="legacy-pro-milestone-title">{milestone.title}</h3>
                <p className="legacy-pro-milestone-subtitle">{milestone.subtitle}</p>
                <p className="legacy-pro-milestone-desc">{milestone.description}</p>
                <div className="legacy-pro-milestone-index">
                  <span className="legacy-pro-milestone-index-num">0{index + 1}</span>
                  <span className="legacy-pro-milestone-index-line"></span>
                </div>
              </div>

              <div className="legacy-pro-milestone-bottom-glow"></div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer brand strip ── */}
      <div className="legacy-pro-footer">
        <div className="legacy-pro-footer-line"></div>
        <div className="legacy-pro-footer-brand">
          <span className="legacy-pro-footer-diamond">◈</span>
          <span className="legacy-pro-footer-text">South India's Premium Entertainment Powerhouse</span>
          <span className="legacy-pro-footer-diamond">◈</span>
        </div>
        <div className="legacy-pro-footer-line"></div>
      </div>

    </section>
  );
};

export default LegacySection;