import { useEffect, useRef, useState } from 'react';
import './LegacySection.css';
import music1 from '../assets/music1.jpg';
import music2 from '../assets/music2.jpg';
import music3 from '../assets/music3.jpg';
import music4 from '../assets/music4.png';
import hero from '../assets/hero.mp4';
// Import your background video or image
import legacyBgImage from '../assets/legbg.jpg';

const milestones = [
  {
    year: "2000",
    title: "The Journey Begins",
    subtitle: "FIRST STAGE",
    description: "Started as a passionate music group with a vision to create unforgettable experiences. The first note that changed everything.",
    image: music1,
    stats: { shows: "1", reach: "Local", impact: "Dreams" },
    gradient: "linear-gradient(135deg, #c9a03d, #b8860b)"
  },
  {
    year: "2010",
    title: "Super Singer",
    subtitle: "NATIONAL RECOGNITION",
    description: "National recognition through Vijay TV Super Singer and major stage performances, reaching millions of hearts.",
    image: music2,
    stats: { shows: "500+", reach: "National", impact: "Millions" },
    gradient: "linear-gradient(135deg, #daa520, #c9a03d)"
  },
  {
    year: "2018",
    title: "1000+ Events",
    subtitle: "MILESTONE ACHIEVED",
    description: "Celebrated 1000 successful events across South India, becoming a trusted name in entertainment industry.",
    image: music3,
    stats: { shows: "1000+", reach: "Pan-India", impact: "Legacy" },
    gradient: "linear-gradient(135deg, #c9a03d, #8b7355)"
  },
  {
    year: "2025",
    title: "International",
    subtitle: "GLOBAL STAGE",
    description: "Expanding our musical legacy across international borders, taking Indian music to the world stage.",
    image: music4,
    stats: { shows: "1500+", reach: "Global", impact: "Worldwide" },
    gradient: "linear-gradient(135deg, #b8860b, #daa520)"
  }
];

const LegacySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-play slides every 4 seconds
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % milestones.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  // Update progress based on active index
  useEffect(() => {
    const newProgress = (activeIndex + 1) / milestones.length;
     // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(newProgress);
  }, [activeIndex]);

  useEffect(() => {
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
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    clearInterval(intervalRef.current);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % milestones.length);
  };

  const prevSlide = () => {
    goToSlide((activeIndex - 1 + milestones.length) % milestones.length);
  };

  const currentMilestone = milestones[activeIndex];

  return (
    <section className="legacy-pro-section" ref={sectionRef}>
      {/* Background Video Layer */}
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

      <div 
        className="legacy-pro-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.15) 0%, rgba(201, 160, 61, 0.05) 40%, transparent 70%)`
        }}
      />

      <div className="legacy-pro-rays">
        <div className="legacy-pro-ray"></div>
        <div className="legacy-pro-ray"></div>
        <div className="legacy-pro-ray"></div>
        <div className="legacy-pro-ray"></div>
        <div className="legacy-pro-ray"></div>
      </div>

      {/* <div className="legacy-pro-particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="legacy-pro-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              width: `${2 + Math.random() * 5}px`,
              height: `${2 + Math.random() * 5}px`
            }}
          />
        ))}
      </div> */}
      <div className="legacy-pro-particles">
  {Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="legacy-pro-particle"
      style={{
        left: `${(i * 19) % 100}%`,
        top: `${(i * 37) % 100}%`,
        animationDelay: `${i * 0.25}s`,
        animationDuration: `${8 + (i % 6)}s`,
        width: `${2 + (i % 4)}px`,
        height: `${2 + (i % 4)}px`,
      }}
    />
  ))}
</div>

      <div className="legacy-pro-grain"></div>

      {/* Main Container */}
      <div className="legacy-pro-container">
        {/* Left Side - Hero Content */}
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

            <div className="legacy-pro-stats">
              <div className="legacy-pro-stat-card">
                <div className="legacy-pro-stat-number">1000+</div>
                <div className="legacy-pro-stat-label">Events</div>
                <div className="legacy-pro-stat-glow"></div>
              </div>
              <div className="legacy-pro-stat-card">
                <div className="legacy-pro-stat-number">60+</div>
                <div className="legacy-pro-stat-label">Cities</div>
                <div className="legacy-pro-stat-glow"></div>
              </div>
              <div className="legacy-pro-stat-card">
                <div className="legacy-pro-stat-number">25+</div>
                <div className="legacy-pro-stat-label">Years</div>
                <div className="legacy-pro-stat-glow"></div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="legacy-pro-progress">
              <div className="legacy-pro-progress-track">
                <div 
                  className="legacy-pro-progress-fill"
                  style={{ width: `${progress * 100}%` }}
                ></div>
              </div>
              <div className="legacy-pro-progress-years">
                {milestones.map((m, i) => (
                  <span 
                    key={i} 
                    className={`legacy-pro-progress-year ${i === activeIndex ? 'active' : ''} ${i < activeIndex ? 'completed' : ''}`}
                    onClick={() => goToSlide(i)}
                  >
                    {m.year}
                  </span>
                ))}
              </div>
            </div>

            <div className="legacy-pro-quote">
              <div className="legacy-pro-quote-icon">“</div>
              <p>From one stage to a global phenomenon</p>
              <div className="legacy-pro-quote-icon">”</div>
            </div>

            {/* Navigation Dots */}
            <div className="legacy-pro-nav-dots">
              {milestones.map((_, i) => (
                <button
                  key={i}
                  className={`legacy-pro-nav-dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Active Timeline Card */}
        <div className="legacy-pro-right">
          <div className="legacy-pro-active-card">
            {/* Card Media */}
            <div className="legacy-pro-card-media">
              <img src={currentMilestone.image} alt={currentMilestone.title} />
              <div className="legacy-pro-card-overlay"></div>
              <div className="legacy-pro-card-gradient" style={{ background: currentMilestone.gradient }}></div>
              
              <div className="legacy-pro-card-year">{currentMilestone.year}</div>
              
              <div className="legacy-pro-card-corner tl"></div>
              <div className="legacy-pro-card-corner tr"></div>
              <div className="legacy-pro-card-corner bl"></div>
              <div className="legacy-pro-card-corner br"></div>
            </div>

            {/* Card Content */}
            <div className="legacy-pro-card-content">
              <h3 className="legacy-pro-card-title">{currentMilestone.title}</h3>
              <p className="legacy-pro-card-subtitle">{currentMilestone.subtitle}</p>
              <p className="legacy-pro-card-desc">{currentMilestone.description}</p>
              
              <div className="legacy-pro-card-stats">
                <div className="legacy-pro-card-stat">
                  <span className="legacy-pro-card-stat-value">{currentMilestone.stats.shows}</span>
                  <span className="legacy-pro-card-stat-label">Events</span>
                </div>
                <div className="legacy-pro-card-stat-divider"></div>
                <div className="legacy-pro-card-stat">
                  <span className="legacy-pro-card-stat-value">{currentMilestone.stats.reach}</span>
                  <span className="legacy-pro-card-stat-label">Reach</span>
                </div>
              </div>

              <div className="legacy-pro-card-link">
                <span className="legacy-pro-card-link-text">Discover Journey</span>
                <span className="legacy-pro-card-arrow">→</span>
              </div>
            </div>

            {/* Energy Rings */}
            <div className="legacy-pro-card-energy">
              <div className="legacy-pro-energy-ring"></div>
              <div className="legacy-pro-energy-ring ring-2"></div>
              <div className="legacy-pro-energy-ring ring-3"></div>
            </div>

            {/* Navigation Arrows */}
            <button className="legacy-pro-nav-arrow prev" onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="legacy-pro-nav-arrow next" onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="legacy-pro-footer">
        <div className="legacy-pro-footer-line"></div>
        <div className="legacy-pro-footer-brand">
          <span className="legacy-pro-footer-diamond">◈</span>
          <span className="legacy-pro-footer-text">South India's Premium Entertainment Powerhouse</span>
          <span className="legacy-pro-footer-diamond">◈</span>
        </div>
        <div className="legacy-pro-footer-line"></div>
      </div>

      {/* <div className="legacy-pro-audio">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="legacy-pro-audio-bar"
            style={{
              animationDelay: `${i * 0.08}s`,
              height: `${8 + (i % 12)}px`
            }}
          />
        ))}
      </div> */}

      <div className="legacy-pro-scroll-ring">
        <svg viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="22" fill="none" stroke="rgba(201,160,61,0.15)" strokeWidth="2"/>
          <circle 
            cx="25" 
            cy="25" 
            r="22" 
            fill="none" 
            stroke="#c9a03d" 
            strokeWidth="2"
            strokeDasharray="138.2"
            strokeDashoffset={138.2 * (1 - progress)}
            transform="rotate(-90 25 25)"
          />
        </svg>
        <span className="legacy-pro-ring-text">{Math.floor(progress * 100)}%</span>
      </div>
    </section>
  );
};

export default LegacySection;