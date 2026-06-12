



import { useEffect, useRef, useState } from 'react';
import './ClientReactions.css';
import bgVideo from "../assets/videoone.mp4";
import client1 from '../assets/borderthree.jpg';
import client2 from '../assets/back2.png';
import client3 from '../assets/radisson.png';
import client4 from '../assets/tv-shows.png';

const testimonials = [
  {

    quote: "An extraordinary musical experience that kept the audience engaged from start to finish. The standing ovation at Cosmopolitan Club spoke for itself.",
    author: "Cosmopolitan Club",
    role: "Exclusive Live Performance",
    highlight: true,
    image: client1

  },
  {

    quote: "The performance at Grand Cerena exceeded all expectations. The music brought people together and became the highlight of the entire event.",
    author: "Grand Cerena",
    role: "Signature Event Experience",
    highlight: true,
    image: client2

  },
  {

    quote: "An exceptional musical experience at Radisson Resort Pondicherry, where every performance moment resonated with elegance, passion, and unforgettable entertainment.",
    author: "Radisson Resort Pondicherry",
    role: "Exclusive Live Event",
    highlight: true,
    image: client3

  },
  {
    quote: "The Tirupur event brought together thousands of attendees for an unforgettable evening. The electrifying performance, audience enthusiasm, and vibrant atmosphere made it one of the most memorable celebrations of the year.",
    author: "Tirupur Mega Event",
    role: "Live Concert Experience",
    highlight: true,
    image: client4
  }

];

const ClientReactions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isAutoPlaying = true;
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isAutoPlaying) {
      const duration = 6000;



      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);

      }, duration);
    }

    return () => {
      clearInterval(intervalRef.current);

    };
  }, [isAutoPlaying, activeIndex]);

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




  return (
    <section className="cr-premium-section" ref={sectionRef}>
      {/* Premium Light Background */}
      <div className="cr-video-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="cr-video"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="cr-video-overlay"></div>
      </div>
      

      {/* Dynamic Spotlight */}
      <div
        className="cr-premium-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.08) 0%, rgba(201, 160, 61, 0.03) 40%, transparent 70%)`
        }}
      />

      {/* Light Rays */}
      <div className="cr-premium-rays">
        <div className="cr-premium-ray"></div>
        <div className="cr-premium-ray"></div>
        <div className="cr-premium-ray"></div>
      </div>

      {/* Floating Particles */}
      <div className="cr-premium-particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="cr-premium-particle"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${4 + (i % 6)}s`
            }}
          />
        ))}
      </div>
      {/* Main Container */}
      <div className="cr-premium-container">
        {/* Header */}
        <div className="cr-premium-header">
          <div className="cr-premium-badge">
            <span className="cr-premium-badge-dot"></span>
            <span className="cr-premium-badge-text">CLIENT STORIES</span>
            <span className="cr-premium-badge-dot"></span>
          </div>

          <h2 className="cr-premium-title">
            <span className="cr-premium-title-light">Standing</span>
            <span className="cr-premium-title-bold">Ovations</span>
          </h2>

          <div className="cr-premium-title-decor">
            <span className="cr-premium-decor-line"></span>
            <span className="cr-premium-decor-diamond">◈</span>
            <span className="cr-premium-decor-line"></span>
          </div>
        </div>

        {/* Testimonial Display */}
        <div className="cr-premium-display">
          {/* Left Side - Quote */}
          <div className="cr-premium-quote-section">
            <div className="cr-premium-quote-mark">"</div>

            <div className="cr-premium-quote-slider">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`cr-premium-quote-slide ${index === activeIndex ? 'active' : ''}`}
                >
                  <p className="cr-premium-quote-text">{testimonial.quote}</p>
                </div>
              ))}
            </div>

            <div className="cr-premium-author-section">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`cr-premium-author ${index === activeIndex ? 'active' : ''}`}
                >
                  <span className="cr-premium-author-name">{testimonial.author}</span>
                  <span className="cr-premium-author-role">{testimonial.role}</span>
                </div>
              ))}
            </div>

            {/* Rating Stars */}
            {/* <div className="cr-premium-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="cr-premium-star">★</span>
              ))}
              <span className="cr-premium-rating-text">5.0 Rating</span>
            </div> */}
          </div>

          {/* Right Side - Featured Image */}
          <div className="cr-premium-image-section">
            <div className="cr-premium-image-frame">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`cr-premium-image-slide ${index === activeIndex ? 'active' : ''}`}
                >
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div className="cr-premium-image-overlay"></div>
                  <div className="cr-premium-image-glow"></div>
                </div>
              ))}

              {/* Quote Badge on Image */}
              <div className="cr-premium-image-badge">
                <span>✦ HAPPY CLIENT ✦</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress & Controls */}
        {/* <div className="cr-premium-controls">
          <div className="cr-premium-progress-bars">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                className={`cr-premium-progress ${index === activeIndex ? 'active' : ''} ${index < activeIndex ? 'completed' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <div className="cr-premium-progress-track">
                  <div 
                    className="cr-premium-progress-fill"
                    style={{
                      width: index === activeIndex ? `${progress}%` : index < activeIndex ? '100%' : '0%'
                    }}
                  ></div>
                </div>
                <span className="cr-premium-progress-label">
                  {testimonial.author.split(' ').slice(0, 2).join(' ')}
                </span>
              </button>
            ))}
          </div>

          <div className="cr-premium-nav">
            <button 
              className="cr-premium-nav-btn prev"
              onClick={() => goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <button 
              className="cr-premium-nav-btn play"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              {isAutoPlaying ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1"/>
                  <rect x="14" y="4" width="4" height="16" rx="1"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
            
            <button 
              className="cr-premium-nav-btn next"
              onClick={() => goToSlide((activeIndex + 1) % testimonials.length)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div> */}

        {/* Footer Statement */}
        <div className="cr-premium-footer">
          <div className="cr-premium-footer-line"></div>
          <div className="cr-premium-footer-content">
            <span className="cr-premium-footer-quote">"</span>
            <h3 className="cr-premium-footer-text">
              Thousands of Smiles. <span className="cr-premium-footer-highlight">One Purpose.</span>
            </h3>
            <span className="cr-premium-footer-quote">"</span>
          </div>
          <div className="cr-premium-footer-line"></div>
        </div>
      </div>

      {/* Bottom Energy Bars */}
      <div className="cr-premium-audio">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="cr-premium-audio-bar"
            style={{
              animationDelay: `${i * 0.08}s`,
              height: `${6 + (i % 12)}px`
            }}
          />
        ))}
      </div>


    </section>
  );
};

export default ClientReactions;