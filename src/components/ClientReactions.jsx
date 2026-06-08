import { useEffect, useRef, useState } from 'react';
import './ClientReactions.css';

const testimonials = [
  {
    quote: "The audience didn't want the performance to end. Pure magic on stage.",
    author: "Corporate Event Client",
    role: "Annual Gala, Chennai",
    highlight: true
  },
  {
    quote: "They transformed our wedding into a celebration that our families still talk about.",
    author: "Wedding Client",
    role: "Destination Wedding, Goa"
  },
  {
    quote: "Exceptional professionalism and unforgettable entertainment. The energy was electric.",
    author: "Event Organizer",
    role: "Cultural Festival, Bangalore",
    highlight: true
  },
];

const ClientReactions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isAutoPlaying) {
      // Progress animation
      const startTime = Date.now();
      const duration = 5000;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed % duration) / duration * 100, 100);
        setProgress(newProgress);
        
        if (elapsed % duration < duration) {
          progressRef.current = requestAnimationFrame(animate);
        }
      };
      
      progressRef.current = requestAnimationFrame(animate);

      // Slide change
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % testimonials.length);
        setProgress(0);
      }, duration);
    }

    return () => {
      clearInterval(intervalRef.current);
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [isAutoPlaying, activeIndex]);

  const goToSlide = (index) => {
    setActiveIndex(index);
    setProgress(0);
    setIsAutoPlaying(false);
    clearInterval(intervalRef.current);
    
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  return (
    <section className="cr-section" ref={sectionRef}>
      {/* Stage Energy Background */}
      <div className="cr-bg">
        <div className="cr-energy-field">
          <div className="cr-energy-wave cr-wave-1"></div>
          <div className="cr-energy-wave cr-wave-2"></div>
          <div className="cr-energy-wave cr-wave-3"></div>
        </div>
        
        <div className="cr-particle-field">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="cr-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${3 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="cr-light-beams">
          <div className="cr-beam cr-beam-1"></div>
          <div className="cr-beam cr-beam-2"></div>
          <div className="cr-beam cr-beam-3"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="cr-content">
        {/* Header */}
        <div className="cr-header">
          <div className="cr-header-top">
            <span className="cr-header-tag">CLIENT STORIES</span>
          </div>
          
          <h2 className="cr-headline">
            <span className="cr-headline-word">Standing</span>
            <span className="cr-headline-word cr-headline-bold">Ovations</span>
          </h2>
        </div>

        {/* Testimonial Display */}
        <div className="cr-display">
          {/* Large Quote */}
          <div className="cr-quote-display">
            <div className="cr-quote-marks">"</div>
            
            <div className="cr-quote-slider">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`cr-quote-slide ${index === activeIndex ? 'cr-quote-active' : ''}`}
                >
                  <p className="cr-quote-text">{testimonial.quote}</p>
                </div>
              ))}
            </div>

            {/* Author Info */}
            <div className="cr-author-display">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`cr-author-info ${index === activeIndex ? 'cr-author-visible' : ''}`}
                >
                  <span className="cr-author-name">{testimonial.author}</span>
                  <span className="cr-author-role">{testimonial.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress & Controls */}
          <div className="cr-controls">
            {/* Progress Bars */}
            <div className="cr-progress-bars">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  className={`cr-progress-bar ${index === activeIndex ? 'cr-bar-active' : ''} ${index < activeIndex ? 'cr-bar-done' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <div className="cr-bar-track">
                    <div 
                      className="cr-bar-fill"
                      style={{
                        width: index === activeIndex ? `${progress}%` : index < activeIndex ? '100%' : '0%',
                        transition: index === activeIndex ? 'none' : 'width 0.5s ease'
                      }}
                    ></div>
                  </div>
                  <span className="cr-bar-label">{testimonial.author.split(' ').slice(0, 2).join(' ')}</span>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="cr-nav">
              <button 
                className="cr-nav-btn"
                onClick={() => goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length)}
              >
                ←
              </button>
              
              <button 
                className="cr-nav-btn cr-nav-play"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              >
                {isAutoPlaying ? '⏸' : '▶'}
              </button>
              
              <button 
                className="cr-nav-btn"
                onClick={() => goToSlide((activeIndex + 1) % testimonials.length)}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="cr-footer">
          <div className="cr-footer-content">
            <h2 className="cr-footer-headline">
              <span className="cr-footer-line">Thousands Of Smiles.</span>
              <span className="cr-footer-line cr-footer-gold">One Purpose.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReactions;