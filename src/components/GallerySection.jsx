import { useEffect, useRef, useState } from 'react';
import './GallerySection.css';

const gallery = [
  { src: "/gallery/1.jpg", orientation: "portrait", category: "Live Performance" },
  { src: "/gallery/2.jpg", orientation: "landscape", category: "Backstage" },
  { src: "/gallery/3.jpg", orientation: "portrait", category: "Crowd Moments" },
  { src: "/gallery/4.jpg", orientation: "square", category: "Artist Portrait" },
  { src: "/gallery/5.jpg", orientation: "landscape", category: "Stage Design" },
  { src: "/gallery/6.jpg", orientation: "portrait", category: "Behind The Scenes" },
  { src: "/gallery/7.jpg", orientation: "landscape", category: "Live Performance" },
  { src: "/gallery/8.jpg", orientation: "square", category: "Crowd Moments" },
  { src: "/gallery/9.jpg", orientation: "portrait", category: "Artist Portrait" },
  { src: "/gallery/10.jpg", orientation: "landscape", category: "Stage Design" },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

  const categories = ['All', 'Live Performance', 'Backstage', 'Artist Portrait', 'Stage Design', 'Crowd Moments', 'Behind The Scenes'];
  
  const filteredGallery = activeFilter === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === activeFilter);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction) => {
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < filteredGallery.length) {
      setLightboxIndex(newIndex);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="gallery-section" ref={sectionRef}>
      {/* Dynamic Spotlight */}
      <div 
        className="gallery-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 180, 0, 0.08) 0%, transparent 50%)`
        }}
      />

      {/* Stage Light Beams */}
      <div className="gallery-beams">
        <div className="gallery-beam gallery-beam-1"></div>
        <div className="gallery-beam gallery-beam-2"></div>
        <div className="gallery-beam gallery-beam-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="gallery-particles">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="gallery-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Energy Waves */}
      <div className="gallery-waves">
        <div className="gallery-wave gallery-wave-1"></div>
        <div className="gallery-wave gallery-wave-2"></div>
      </div>

      {/* Header Area */}
      <div className="gallery-header-container">
        <div className="gallery-header-left">
          <div className="gallery-header-badge">
            <span className="gallery-badge-dot"></span>
            PORTFOLIO
          </div>
          <h2 className="gallery-headline">
            <span className="gallery-headline-line">Captured</span>
            <span className="gallery-headline-line gallery-headline-gold">Moments</span>
          </h2>
        </div>
        
        <div className="gallery-header-right">
          <p className="gallery-description">
            A visual journey through our most memorable performances, 
            behind-the-scenes magic, and the energy that defines us.
          </p>
          
          {/* Category Filters */}
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`gallery-filter-btn ${activeFilter === category ? 'gallery-filter-active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
                {activeFilter === category && <span className="gallery-filter-dot"></span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="gallery-grid">
        {filteredGallery.map((item, index) => (
          <div
            key={index}
            className={`gallery-item gallery-item-${item.orientation} ${hoveredIndex === index ? 'gallery-item-hover' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'gallery-item-dimmed' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openLightbox(index)}
          >
            <div className="gallery-item-inner">
              {/* Image */}
              <img
                src={item.src}
                alt={item.category}
                className="gallery-image"
                loading="lazy"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              
              {/* Dark Overlay */}
              <div className="gallery-overlay"></div>

              {/* Hover Content */}
              <div className="gallery-hover-content">
                <div className="gallery-hover-category">{item.category}</div>
                <div className="gallery-hover-action">
                  <span>View Image</span>
                  <span className="gallery-hover-arrow">→</span>
                </div>
              </div>

              {/* Stage Light Effect */}
              <div className="gallery-stage-light"></div>

              {/* Corner Accents */}
              <div className="gallery-corners">
                <span className="gallery-corner gallery-corner-tl"></span>
                <span className="gallery-corner gallery-corner-tr"></span>
                <span className="gallery-corner gallery-corner-bl"></span>
                <span className="gallery-corner gallery-corner-br"></span>
              </div>

              {/* Image Number */}
              <div className="gallery-item-number">0{index + 1}</div>
            </div>

            {/* Caption */}
            <div className="gallery-caption">
              <span className="gallery-caption-text">{item.category}</span>
              <span className="gallery-caption-line"></span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          {/* Lightbox Particles */}
          <div className="gallery-lightbox-particles">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="gallery-lightbox-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="gallery-lightbox-header">
            <button className="gallery-lightbox-close" onClick={closeLightbox}>
              <span>✕</span>
            </button>
            <div className="gallery-lightbox-info">
              <span className="gallery-lightbox-category-name">
                {filteredGallery[lightboxIndex].category}
              </span>
              <span className="gallery-lightbox-counter">
                {lightboxIndex + 1} / {filteredGallery.length}
              </span>
            </div>
          </div>

          <button 
            className="gallery-lightbox-nav gallery-lightbox-prev"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            disabled={lightboxIndex === 0}
          >
            <span>←</span>
          </button>

          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredGallery[lightboxIndex].src}
              alt={filteredGallery[lightboxIndex].category}
              className="gallery-lightbox-image"
            />
          </div>

          <button 
            className="gallery-lightbox-nav gallery-lightbox-next"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            disabled={lightboxIndex === filteredGallery.length - 1}
          >
            <span>→</span>
          </button>

          {/* Bottom Energy Bar */}
          <div className="gallery-lightbox-energy">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="gallery-lightbox-bar"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  height: `${6 + Math.random() * 20}px`
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Bottom */}
      <div className="gallery-footer">
        <div className="gallery-footer-content">
          <span className="gallery-footer-icon">✦</span>
          <p className="gallery-footer-text">
            Every frame captures a story worth telling
          </p>
          <span className="gallery-footer-icon">✦</span>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;