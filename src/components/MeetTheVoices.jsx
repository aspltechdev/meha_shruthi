import { useEffect, useRef, useState } from 'react';
import './MeetTheVoices.css';

const MeetTheVoices = () => {
  const [activeVoice, setActiveVoice] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / (rect.height - window.innerHeight);
      
      if (progress > 0.3 && progress < 0.7) {
        setActiveVoice(0);
      } else if (progress >= 0.7) {
        setActiveVoice(1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="voices" ref={sectionRef}>
      {/* Dynamic Spotlight */}
      <div 
        className="voices-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 180, 0, 0.08) 0%, transparent 50%)`
        }}
      />

      {/* Floating Particles */}
      <div className="voices-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="voice-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="voices-header">
        <div className="header-top">
          <span className="header-tag">THE SOUL</span>
          <div className="header-divider"></div>
          <span className="header-tag">THE VOICE</span>
        </div>
        
        <h2 className="header-title">
          <span className="title-word">Voices</span>
          <span className="title-word outline">Behind</span>
          <span className="title-word">The</span>
          <span className="title-word gold">Magic</span>
        </h2>
      </div>

      {/* Voices Grid */}
      <div className="voices-grid">
        
        {/* Meera Card */}
        <div className={`voice-card ${activeVoice === 0 ? 'active' : ''}`}>
          <div className="card-visual">
            <div className="card-image-container">
              <div className="image-mask">
                <img
                  src="/images/meera.jpg"
                  alt="Meera Sridharan"
                  className="card-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Energy overlay */}
              <div className="card-energy-field">
                <div className="energy-wave"></div>
                <div className="energy-wave wave-2"></div>
              </div>
            </div>

            {/* Floating year badge */}
            <div className="card-badge">
              <span className="badge-icon">✦</span>
              FOUNDER
            </div>
          </div>

          <div className="card-content">
            <div className="content-header">
              <h3 className="voice-name">
                Meera
                <span className="last-name">Sridharan</span>
              </h3>
              <div className="voice-role">Vocalist • Visionary</div>
            </div>

            <p className="voice-story">
              What started as a passion for music evolved into creating 
              unforgettable experiences for thousands across India.
            </p>

            <blockquote className="voice-quote">
              <span className="quote-mark">"</span>
              Music is not what we do. It's what we live.
            </blockquote>

            <div className="card-stats">
              <div className="mini-stat">
                <span className="mini-num">25+</span>
                <span className="mini-label">Years</span>
              </div>
              <div className="mini-divider"></div>
              <div className="mini-stat">
                <span className="mini-num">1000+</span>
                <span className="mini-label">Shows</span>
              </div>
            </div>
          </div>

          <div className="card-glow-effect"></div>
        </div>

        {/* Center Quote Break */}
        <div className="quote-break">
          <div className="quote-container">
            <div className="quote-line top"></div>
            <div className="quote-content">
              <span className="quote-star">✦</span>
              <p>Every Performance Tells A Story</p>
              <span className="quote-star">✦</span>
            </div>
            <div className="quote-line bottom"></div>
          </div>
        </div>

        {/* Kaushik Card */}
        <div className={`voice-card right ${activeVoice === 1 ? 'active' : ''}`}>
          <div className="card-visual">
            <div className="card-image-container">
              <div className="image-mask">
                <img
                  src="/images/kaushik.jpg"
                  alt="Kaushik Sridharan"
                  className="card-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              <div className="card-energy-field">
                <div className="energy-wave"></div>
                <div className="energy-wave wave-2"></div>
              </div>
            </div>

            <div className="card-badge">
              <span className="badge-icon">✦</span>
              PERFORMER
            </div>
          </div>

          <div className="card-content">
            <div className="content-header">
              <h3 className="voice-name">
                Kaushik
                <span className="last-name">Sridharan</span>
              </h3>
              <div className="voice-role">Super Singer • Performer</div>
            </div>

            <p className="voice-story">
              From Super Singer recognition to performing across countries, 
              every stage became an opportunity to create magic.
            </p>

            <blockquote className="voice-quote">
              <span className="quote-mark">"</span>
              Every celebration deserves a standing ovation.
            </blockquote>

            <div className="card-stats">
              <div className="mini-stat">
                <span className="mini-num">500+</span>
                <span className="mini-label">Concerts</span>
              </div>
              <div className="mini-divider"></div>
              <div className="mini-stat">
                <span className="mini-num">7+</span>
                <span className="mini-label">Countries</span>
              </div>
            </div>
          </div>

          <div className="card-glow-effect"></div>
        </div>

      </div>

      {/* Achievement Strip */}
      <div className="achievement-strip">
        <div className="strip-content">
          {[
            { num: "1000+", label: "Events" },
            { num: "500+", label: "Concerts" },
            { num: "60+", label: "Cities" },
            { num: "7+", label: "Countries" }
          ].map((achievement, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-glow"></div>
              <span className="achievement-num">{achievement.num}</span>
              <span className="achievement-label">{achievement.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheVoices;