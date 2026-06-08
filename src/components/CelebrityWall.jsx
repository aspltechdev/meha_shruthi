import { useEffect, useRef, useState } from 'react';
import './CelebrityWall.css';

const celebrities = [
  {
    name: "Mano",
    role: "Legendary Playback Singer",
    image: "/images/celebrities/mano.jpg",
    accent: "#ffb400"
  },
  {
    name: "Vani Jayaram",
    role: "Padma Bhushan Awardee",
    image: "/images/celebrities/vani.jpg",
    accent: "#c9a96e"
  },
  {
    name: "Haricharan",
    role: "Playback Singer",
    image: "/images/celebrities/haricharan.jpg",
    accent: "#ff6b6b"
  },
  {
    name: "Shweta Mohan",
    role: "Playback Singer",
    image: "/images/celebrities/shweta.jpg",
    accent: "#a78bfa"
  },
  {
    name: "Stephen Devassy",
    role: "Music Composer & Pianist",
    image: "/images/celebrities/stephen.jpg",
    accent: "#4ecdc4"
  },
  {
    name: "Rajesh Vaidhya",
    role: "Veena Maestro",
    image: "/images/celebrities/rajesh.jpg",
    accent: "#ffb400"
  },
  {
    name: "Saindhavi",
    role: "Playback Singer",
    image: "/images/celebrities/saindhavi.jpg",
    accent: "#ff6b00"
  },
  {
    name: "Devan Ekambaram",
    role: "Playback Singer",
    image: "/images/celebrities/devan.jpg",
    accent: "#c9a96e"
  },
];

const CelebrityWall = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="cw-section" ref={sectionRef}>
      {/* Dynamic Background */}
      <div 
        className="cw-bg-aura"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 180, 0, 0.06) 0%, transparent 50%)`
        }}
      />

      {/* Ambient Particles */}
      <div className="cw-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="cw-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="cw-header">
        <div className="cw-header-top">
          <span className="cw-header-tag">COLLABORATIONS</span>
          <div className="cw-header-sparkle">✦</div>
          <span className="cw-header-tag">LEGENDS</span>
        </div>

        <h2 className="cw-headline">
          <span className="cw-headline-line">Shared The Stage</span>
          <span className="cw-headline-line cw-headline-gold">With Legends</span>
        </h2>

        <p className="cw-subtitle">
          A journey filled with performances alongside
          some of the most celebrated names in Indian music.
        </p>
      </div>

      {/* Celebrity Grid */}
      <div className="cw-grid" ref={gridRef}>
        {celebrities.map((artist, index) => (
          <div
            className={`cw-card ${hoveredIndex === index ? 'cw-card-hovered' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'cw-card-dimmed' : ''}`}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ '--card-accent': artist.accent }}
          >
            {/* Card Image Container */}
            <div className="cw-card-image-wrap">
              <img
                src={artist.image}
                alt={artist.name}
                className="cw-card-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              
              {/* Image Overlay */}
              <div className="cw-card-overlay"></div>
              
              {/* Hover Gradient */}
              <div 
                className="cw-card-gradient"
                style={{ background: `linear-gradient(0deg, ${artist.accent}40 0%, transparent 60%)` }}
              ></div>

              {/* Frame Border */}
              <div className="cw-card-frame">
                <div className="cw-frame-corner cw-frame-tl"></div>
                <div className="cw-frame-corner cw-frame-tr"></div>
                <div className="cw-frame-corner cw-frame-bl"></div>
                <div className="cw-frame-corner cw-frame-br"></div>
              </div>

              {/* Energy Glow */}
              <div 
                className="cw-card-energy"
                style={{ 
                  boxShadow: hoveredIndex === index ? `0 0 60px ${artist.accent}30` : 'none'
                }}
              ></div>
            </div>

            {/* Card Info */}
            <div className="cw-card-info">
              <h3 className="cw-card-name">{artist.name}</h3>
              <p className="cw-card-role">{artist.role}</p>
              
              {/* Accent Line */}
              <div 
                className="cw-card-accent"
                style={{ background: artist.accent }}
              ></div>
            </div>

            {/* Hover Spotlight */}
            <div 
              className="cw-card-spotlight"
              style={{ 
                background: `radial-gradient(circle at center, ${artist.accent}20, transparent 70%)`,
                opacity: hoveredIndex === index ? 1 : 0
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Statement Section */}
      <div className="cw-statement">
        <div className="cw-statement-bg">
          <div className="cw-statement-circle cw-statement-circle-1"></div>
          <div className="cw-statement-circle cw-statement-circle-2"></div>
        </div>

        <div className="cw-statement-content">
          <div className="cw-statement-number">
            <span className="cw-number-big">100+</span>
            <div className="cw-number-glow"></div>
          </div>

          <h2 className="cw-statement-headline">
            <span className="cw-statement-line">Artists</span>
            <span className="cw-statement-line cw-statement-gold">One Vision</span>
          </h2>

          <p className="cw-statement-desc">
            Creating unforgettable entertainment
            experiences through collaboration,
            passion and music.
          </p>

          <div className="cw-statement-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityWall;