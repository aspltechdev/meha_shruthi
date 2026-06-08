import { useEffect, useRef, useState } from 'react';
import './EventJourney.css';

const journeySteps = [
  {
    number: "01",
    title: "Share Your Vision",
    description: "Every unforgettable event begins with a dream, an idea, or a celebration waiting to happen.",
    image: "/images/process/vision.jpg",
  },
  {
    number: "02",
    title: "Curate The Experience",
    description: "From artists and music to stage concepts, every detail is carefully crafted for perfection.",
    image: "/images/process/curate.jpg",
  },
  {
    number: "03",
    title: "Behind The Scenes",
    description: "Sound checks, rehearsals, stage setup, lighting and coordination come together flawlessly.",
    image: "/images/process/preparation.jpg",
  },
  {
    number: "04",
    title: "Stage Comes Alive",
    description: "The lights turn on, music begins and audiences become part of something unforgettable.",
    image: "/images/process/performance.jpg",
  },
  {
    number: "05",
    title: "Memories Forever",
    description: "Long after the event ends, the memories live in every photograph, video and smile.",
    image: "/images/process/memories.jpg",
  },
];

const EventJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % journeySteps.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

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

  const goToStep = (index) => {
    setActiveStep(index);
    setIsPaused(true);
    clearInterval(intervalRef.current);
    
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const nextStep = () => goToStep((activeStep + 1) % journeySteps.length);
  const prevStep = () => goToStep((activeStep - 1 + journeySteps.length) % journeySteps.length);

  return (
    <section className="ej-section" ref={sectionRef}>
      {/* Dynamic Spotlight */}
      <div 
        className="ej-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 180, 0, 0.08) 0%, transparent 50%)`
        }}
      />

      {/* Stage Light Beams */}
      <div className="ej-beams">
        <div className="ej-beam ej-beam-1"></div>
        <div className="ej-beam ej-beam-2"></div>
        <div className="ej-beam ej-beam-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="ej-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="ej-particle"
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
      <div className="ej-waves">
        <div className="ej-wave ej-wave-1"></div>
        <div className="ej-wave ej-wave-2"></div>
      </div>

      <div className="ej-container">
        {/* Header */}
        <div className="ej-header">
          <div className="ej-header-badge">
            <span className="ej-badge-dot"></span>
            OUR PROCESS
          </div>
          <h2 className="ej-header-title">
            <span className="ej-title-line">From Vision To</span>
            <span className="ej-title-line ej-title-gold">Standing Ovation</span>
          </h2>
        </div>

        {/* Main Display */}
        <div className="ej-display">
          {/* Image Panel */}
          <div className="ej-image-panel">
            <div className="ej-image-wrapper">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`ej-image-slide ${index === activeStep ? 'ej-image-visible' : ''}`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="ej-image"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="ej-image-overlay"></div>
                  <div className="ej-image-stage-light"></div>
                </div>
              ))}
              
              {/* Image Counter */}
              <div className="ej-image-counter">
                <span className="ej-counter-current">0{activeStep + 1}</span>
                <span className="ej-counter-sep">/</span>
                <span className="ej-counter-total">0{journeySteps.length}</span>
              </div>
            </div>
          </div>

          {/* Content Panel */}
          <div className="ej-content-panel">
            {/* Steps Navigation */}
            <div className="ej-steps-nav">
              {journeySteps.map((step, index) => (
                <button
                  key={index}
                  className={`ej-step-tab ${index === activeStep ? 'ej-step-tab-active' : ''} ${index < activeStep ? 'ej-step-tab-passed' : ''}`}
                  onClick={() => goToStep(index)}
                >
                  <span className="ej-step-tab-num">{step.number}</span>
                  <span className="ej-step-tab-title">{step.title}</span>
                  <span className="ej-step-tab-indicator">
                    {index < activeStep && (
                      <span className="ej-step-tab-done"></span>
                    )}
                    {index === activeStep && (
                      <span className="ej-step-tab-current"></span>
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Content */}
            <div className="ej-content-display">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`ej-content-block ${index === activeStep ? 'ej-content-block-active' : ''}`}
                >
                  <p className="ej-content-desc">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="ej-controls">
              <button className="ej-ctrl-btn" onClick={prevStep} aria-label="Previous">
                <span>←</span>
              </button>
              
              <div className="ej-ctrl-dots">
                {journeySteps.map((_, index) => (
                  <button
                    key={index}
                    className={`ej-ctrl-dot ${index === activeStep ? 'ej-ctrl-dot-active' : ''} ${index < activeStep ? 'ej-ctrl-dot-done' : ''}`}
                    onClick={() => goToStep(index)}
                    aria-label={`Step ${index + 1}`}
                  />
                ))}
              </div>
              
              <button className="ej-ctrl-btn" onClick={nextStep} aria-label="Next">
                <span>→</span>
              </button>
            </div>

            {/* Auto-play */}
            <div className="ej-autoplay">
              <button 
                className="ej-autoplay-toggle"
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? 'Play' : 'Pause'}
              >
                <span className={`ej-autoplay-icon ${!isPaused ? 'ej-autoplay-playing' : ''}`}>
                  <span className="ej-autoplay-bar"></span>
                  <span className="ej-autoplay-bar"></span>
                </span>
              </button>
              <span className="ej-autoplay-label">
                {isPaused ? 'Paused' : 'Auto-playing'}
              </span>
              <div className="ej-autoplay-track">
                <div className={`ej-autoplay-progress ${!isPaused ? 'ej-autoplay-animating' : ''}`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="ej-footer">
          <p className="ej-footer-text">
            Every event has a story.
            <span className="ej-footer-accent"> Let's create yours.</span>
          </p>
          <button className="ej-footer-btn">
            <span>Start Your Journey</span>
            <span className="ej-footer-arrow">→</span>
            <div className="ej-footer-shine"></div>
          </button>
        </div>
      </div>

      {/* Bottom Energy Bar */}
      <div className="ej-bottom-energy">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="ej-bottom-bar"
            style={{
              animationDelay: `${i * 0.12}s`,
              height: `${6 + Math.random() * 20}px`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default EventJourney;