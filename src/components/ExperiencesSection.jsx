import { useEffect, useRef, useState } from 'react';
import './ExperiencesSection.css';

const experiences = [
  {
    id: "01",
    title: "Live Orchestra",
    description:
      "Powerful live musical performances that create unforgettable memories for audiences of every generation.",
    image: "/images/orchestra.jpg",
    color: "#ffb400"
  },
  {
    id: "02",
    title: "Wedding Entertainment",
    description:
      "From grand entries to magical musical moments, transforming weddings into emotional celebrations.",
    image: "/images/wedding.jpg",
    color: "#ff6b6b"
  },
  {
    id: "03",
    title: "Celebrity Shows",
    description:
      "Bringing renowned artists and celebrity performers to elevate every occasion.",
    image: "/images/celebrity.jpg",
    color: "#c9a96e"
  },
  {
    id: "04",
    title: "Corporate Events",
    description:
      "Professional entertainment experiences for conferences, launches, annual meets and celebrations.",
    image: "/images/corporate.jpg",
    color: "#4ecdc4"
  },
  {
    id: "05",
    title: "Fashion Shows",
    description:
      "Runway productions with music, lighting and immersive audience experiences.",
    image: "/images/fashion.jpg",
    color: "#ff6b00"
  },
  {
    id: "06",
    title: "Comedy & Special Acts",
    description:
      "Stand-up comedy, mimicry, magic shows and unique performances that energize audiences.",
    image: "/images/comedy.jpg",
    color: "#a78bfa"
  },
];

const ExperiencesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

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
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll('.exp-card');
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="exp-section" ref={sectionRef}>
      {/* Dynamic Background */}
      <div 
        className="exp-bg-glow"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${experiences[activeIndex]?.color || '#ffb400'}15 0%, transparent 60%)`
        }}
      />

      {/* Floating elements */}
      <div className="exp-ambient">
        <div className="exp-ambient-circle exp-ambient-circle-1"></div>
        <div className="exp-ambient-circle exp-ambient-circle-2"></div>
        <div className="exp-ambient-line exp-ambient-line-1"></div>
        <div className="exp-ambient-line exp-ambient-line-2"></div>
      </div>

      {/* Header */}
      <div className="exp-header">
        <div className="exp-header-top">
          <span className="exp-header-tag">EXPERIENCES WE CREATE</span>
          <div className="exp-header-divider"></div>
          <span className="exp-header-counter">
            <span className="exp-counter-current">0{activeIndex + 1}</span>
            <span className="exp-counter-separator">/</span>
            <span className="exp-counter-total">0{experiences.length}</span>
          </span>
        </div>

        <h2 className="exp-headline">
          <span className="exp-headline-word">Entertainment</span>
          <span className="exp-headline-word exp-headline-accent">Beyond</span>
          <span className="exp-headline-word">Expectations</span>
        </h2>
      </div>

      {/* Experiences Grid */}
      <div className="exp-container" ref={containerRef}>
        {experiences.map((item, index) => (
          <div
            className={`exp-card ${index === activeIndex ? 'exp-card-active' : ''}`}
            key={item.id}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {/* Card Visual */}
            <div className="exp-card-visual">
              <div className="exp-card-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="exp-card-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="exp-card-image-mask"></div>
                
                {/* Hover Energy Effect */}
                <div className="exp-card-energy">
                  <div className="exp-energy-ring"></div>
                  <div className="exp-energy-ring exp-energy-ring-2"></div>
                </div>
              </div>

              {/* Card Number Badge */}
              <div className="exp-card-badge" style={{ borderColor: item.color }}>
                <span className="exp-badge-number" style={{ color: item.color }}>{item.id}</span>
              </div>

              {/* Color accent line */}
              <div className="exp-card-accent" style={{ background: item.color }}></div>
            </div>

            {/* Card Content */}
            <div className="exp-card-info">
              <h3 className="exp-card-title">{item.title}</h3>
              <p className="exp-card-desc">{item.description}</p>
              
              <button className="exp-card-btn">
                <span className="exp-btn-text">Explore Experience</span>
                <span className="exp-btn-arrow">→</span>
                <div className="exp-btn-underline" style={{ background: item.color }}></div>
              </button>
            </div>

            {/* Card glow on hover */}
            <div className="exp-card-glow" style={{ background: `radial-gradient(circle at center, ${item.color}20, transparent 70%)` }}></div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="exp-progress">
        <div className="exp-progress-track">
          <div 
            className="exp-progress-fill"
            style={{ width: `${((activeIndex + 1) / experiences.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;