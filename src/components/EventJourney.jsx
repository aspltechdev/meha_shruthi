// import { useEffect, useRef, useState } from 'react';
// import './EventJourney.css';

// const journeySteps = [
//   {
//     number: "01",
//     title: "Share Your Vision",
//     description: "Every unforgettable event begins with a dream, an idea, or a celebration waiting to happen.",
//     image: "/images/process/vision.jpg",
//   },
//   {
//     number: "02",
//     title: "Curate The Experience",
//     description: "From artists and music to stage concepts, every detail is carefully crafted for perfection.",
//     image: "/images/process/curate.jpg",
//   },
//   {
//     number: "03",
//     title: "Behind The Scenes",
//     description: "Sound checks, rehearsals, stage setup, lighting and coordination come together flawlessly.",
//     image: "/images/process/preparation.jpg",
//   },
//   {
//     number: "04",
//     title: "Stage Comes Alive",
//     description: "The lights turn on, music begins and audiences become part of something unforgettable.",
//     image: "/images/process/performance.jpg",
//   },
//   {
//     number: "05",
//     title: "Memories Forever",
//     description: "Long after the event ends, the memories live in every photograph, video and smile.",
//     image: "/images/process/memories.jpg",
//   },
// ];

// const EventJourney = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
//   const intervalRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     if (!isPaused) {
//       intervalRef.current = setInterval(() => {
//         setActiveStep((prev) => (prev + 1) % journeySteps.length);
//       }, 5000);
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [isPaused]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       setMousePos({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const goToStep = (index) => {
//     setActiveStep(index);
//     setIsPaused(true);
//     clearInterval(intervalRef.current);
    
//     setTimeout(() => {
//       setIsPaused(false);
//     }, 10000);
//   };

//   const nextStep = () => goToStep((activeStep + 1) % journeySteps.length);
//   const prevStep = () => goToStep((activeStep - 1 + journeySteps.length) % journeySteps.length);

//   return (
//     <section className="ej-section" ref={sectionRef}>
//       {/* Dynamic Spotlight */}
//       <div 
//         className="ej-spotlight"
//         style={{
//           background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 180, 0, 0.08) 0%, transparent 50%)`
//         }}
//       />

//       {/* Stage Light Beams */}
//       <div className="ej-beams">
//         <div className="ej-beam ej-beam-1"></div>
//         <div className="ej-beam ej-beam-2"></div>
//         <div className="ej-beam ej-beam-3"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="ej-particles">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="ej-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 8}s`,
//               animationDuration: `${4 + Math.random() * 6}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Energy Waves */}
//       <div className="ej-waves">
//         <div className="ej-wave ej-wave-1"></div>
//         <div className="ej-wave ej-wave-2"></div>
//       </div>

//       <div className="ej-container">
//         {/* Header */}
//         <div className="ej-header">
//           <div className="ej-header-badge">
//             <span className="ej-badge-dot"></span>
//             OUR PROCESS
//           </div>
//           <h2 className="ej-header-title">
//             <span className="ej-title-line">From Vision To</span>
//             <span className="ej-title-line ej-title-gold">Standing Ovation</span>
//           </h2>
//         </div>

//         {/* Main Display */}
//         <div className="ej-display">
//           {/* Image Panel */}
//           <div className="ej-image-panel">
//             <div className="ej-image-wrapper">
//               {journeySteps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`ej-image-slide ${index === activeStep ? 'ej-image-visible' : ''}`}
//                 >
//                   <img
//                     src={step.image}
//                     alt={step.title}
//                     className="ej-image"
//                     onError={(e) => { e.target.style.display = 'none'; }}
//                   />
//                   <div className="ej-image-overlay"></div>
//                   <div className="ej-image-stage-light"></div>
//                 </div>
//               ))}
              
//               {/* Image Counter */}
//               <div className="ej-image-counter">
//                 <span className="ej-counter-current">0{activeStep + 1}</span>
//                 <span className="ej-counter-sep">/</span>
//                 <span className="ej-counter-total">0{journeySteps.length}</span>
//               </div>
//             </div>
//           </div>

//           {/* Content Panel */}
//           <div className="ej-content-panel">
//             {/* Steps Navigation */}
//             <div className="ej-steps-nav">
//               {journeySteps.map((step, index) => (
//                 <button
//                   key={index}
//                   className={`ej-step-tab ${index === activeStep ? 'ej-step-tab-active' : ''} ${index < activeStep ? 'ej-step-tab-passed' : ''}`}
//                   onClick={() => goToStep(index)}
//                 >
//                   <span className="ej-step-tab-num">{step.number}</span>
//                   <span className="ej-step-tab-title">{step.title}</span>
//                   <span className="ej-step-tab-indicator">
//                     {index < activeStep && (
//                       <span className="ej-step-tab-done"></span>
//                     )}
//                     {index === activeStep && (
//                       <span className="ej-step-tab-current"></span>
//                     )}
//                   </span>
//                 </button>
//               ))}
//             </div>

//             {/* Active Content */}
//             <div className="ej-content-display">
//               {journeySteps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`ej-content-block ${index === activeStep ? 'ej-content-block-active' : ''}`}
//                 >
//                   <p className="ej-content-desc">{step.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Controls */}
//             <div className="ej-controls">
//               <button className="ej-ctrl-btn" onClick={prevStep} aria-label="Previous">
//                 <span>←</span>
//               </button>
              
//               <div className="ej-ctrl-dots">
//                 {journeySteps.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`ej-ctrl-dot ${index === activeStep ? 'ej-ctrl-dot-active' : ''} ${index < activeStep ? 'ej-ctrl-dot-done' : ''}`}
//                     onClick={() => goToStep(index)}
//                     aria-label={`Step ${index + 1}`}
//                   />
//                 ))}
//               </div>
              
//               <button className="ej-ctrl-btn" onClick={nextStep} aria-label="Next">
//                 <span>→</span>
//               </button>
//             </div>

//             {/* Auto-play */}
//             <div className="ej-autoplay">
//               <button 
//                 className="ej-autoplay-toggle"
//                 onClick={() => setIsPaused(!isPaused)}
//                 aria-label={isPaused ? 'Play' : 'Pause'}
//               >
//                 <span className={`ej-autoplay-icon ${!isPaused ? 'ej-autoplay-playing' : ''}`}>
//                   <span className="ej-autoplay-bar"></span>
//                   <span className="ej-autoplay-bar"></span>
//                 </span>
//               </button>
//               <span className="ej-autoplay-label">
//                 {isPaused ? 'Paused' : 'Auto-playing'}
//               </span>
//               <div className="ej-autoplay-track">
//                 <div className={`ej-autoplay-progress ${!isPaused ? 'ej-autoplay-animating' : ''}`}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="ej-footer">
//           <p className="ej-footer-text">
//             Every event has a story.
//             <span className="ej-footer-accent"> Let's create yours.</span>
//           </p>
//           <button className="ej-footer-btn">
//             <span>Start Your Journey</span>
//             <span className="ej-footer-arrow">→</span>
//             <div className="ej-footer-shine"></div>
//           </button>
//         </div>
//       </div>

//       {/* Bottom Energy Bar */}
//       <div className="ej-bottom-energy">
//         {[...Array(16)].map((_, i) => (
//           <div
//             key={i}
//             className="ej-bottom-bar"
//             style={{
//               animationDelay: `${i * 0.12}s`,
//               height: `${6 + Math.random() * 20}px`
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EventJourney;










import React, { useEffect, useRef, useState } from 'react';
import './EventJourney.css';

const journeySteps = [
  {
    number: "01",
    title: "Share Your Vision",
    description: "Every unforgettable event begins with a dream, an idea, or a celebration waiting to happen. We listen, understand, and bring your vision to life.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    gradient: "linear-gradient(135deg, #c9a03d, #b8860b)"
  },
  {
    number: "02",
    title: "Curate The Experience",
    description: "From artists and music to stage concepts, every detail is carefully crafted for perfection. We handpick the best talent and create magical moments.",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    gradient: "linear-gradient(135deg, #daa520, #c9a03d)"
  },
  {
    number: "03",
    title: "Behind The Scenes",
    description: "Sound checks, rehearsals, stage setup, lighting and coordination come together flawlessly. The magic happens long before the spotlight turns on.",
    image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg",
    gradient: "linear-gradient(135deg, #c9a03d, #8b7355)"
  },
  {
    number: "04",
    title: "Stage Comes Alive",
    description: "The lights turn on, music begins and audiences become part of something unforgettable. Every note, every cheer creates pure magic.",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    gradient: "linear-gradient(135deg, #b8860b, #daa520)"
  },
  {
    number: "05",
    title: "Memories Forever",
    description: "Long after the event ends, the memories live in every photograph, video and smile. We create experiences that last a lifetime.",
    image: "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg",
    gradient: "linear-gradient(135deg, #c9a03d, #ffd700)"
  },
];

const EventJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % journeySteps.length);
      }, 6000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

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
    setIsPlaying(false);
    clearInterval(intervalRef.current);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  const nextStep = () => goToStep((activeStep + 1) % journeySteps.length);
  const prevStep = () => goToStep((activeStep - 1 + journeySteps.length) % journeySteps.length);

  return (
    <section className="ej-premium-section" ref={sectionRef}>
      {/* Premium Background */}
      <div className="ej-premium-bg"></div>
      <div className="ej-premium-pattern"></div>

      {/* Dynamic Spotlight */}
      <div 
        className="ej-spotlight-premium"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.1) 0%, rgba(201, 160, 61, 0.03) 30%, transparent 70%)`
        }}
      />

      {/* Cinematic Light Beams */}
      <div className="ej-light-beams">
        <div className="ej-beam-premium"></div>
        <div className="ej-beam-premium"></div>
        <div className="ej-beam-premium"></div>
        <div className="ej-beam-premium"></div>
      </div>

      {/* Floating Particles */}
      <div className="ej-particle-field">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="ej-particle-premium"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="ej-premium-header">
        <div className="ej-premium-badge">
          <span className="ej-badge-dot"></span>
          <span className="ej-badge-text">THE JOURNEY</span>
          <span className="ej-badge-dot"></span>
        </div>

        <h2 className="ej-premium-title">
          <span className="ej-title-light">From Vision To</span>
          <span className="ej-title-gradient">Standing Ovation</span>
        </h2>

        <div className="ej-title-decoration">
          <span className="ej-decoration-line"></span>
          <span className="ej-decoration-diamond">◈</span>
          <span className="ej-decoration-line"></span>
        </div>
      </div>

      {/* Main Content */}
      <div className="ej-premium-container">
        {/* Left Side - Image Display */}
        <div className="ej-image-display">
          <div className="ej-image-frame">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`ej-image-slide-premium ${index === activeStep ? 'active' : ''}`}
              >
                <div className="ej-image-wrapper-premium">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="ej-image-premium"
                  />
                  <div className="ej-image-gradient" style={{ background: step.gradient }}></div>
                </div>
                
                {/* Overlay Content */}
                <div className="ej-image-caption">
                  <div className="ej-caption-number">{step.number}</div>
                  <div className="ej-caption-title">{step.title}</div>
                </div>
              </div>
            ))}
            
            {/* Image Counter */}
            <div className="ej-image-counter-premium">
              <span className="ej-counter-current">0{activeStep + 1}</span>
              <span className="ej-counter-sep">/</span>
              <span className="ej-counter-total">0{journeySteps.length}</span>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="ej-content-display-premium">
          {/* Step Indicator */}
          {/* <div className="ej-step-indicator">
            {journeySteps.map((step, index) => (
              <button
                key={index}
                className={`ej-step-premium ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
                onClick={() => goToStep(index)}
              >
                <div className="ej-step-number">{step.number}</div>
                <div className="ej-step-title">{step.title}</div>
                <div className="ej-step-line"></div>
              </button>
            ))}
          </div> */}

          {/* Description */}
          <div className="ej-description-premium">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`ej-desc-premium ${index === activeStep ? 'active' : ''}`}
              >
                <p className="ej-desc-text">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="ej-navigation-premium">
            <button className="ej-nav-premium prev" onClick={prevStep}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="ej-dots-premium">
              {journeySteps.map((_, index) => (
                <button
                  key={index}
                  className={`ej-dot-premium ${index === activeStep ? 'active' : ''}`}
                  onClick={() => goToStep(index)}
                />
              ))}
            </div>
            
            <button className="ej-nav-premium next" onClick={nextStep}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Auto-play Toggle */}
          {/* <div className="ej-autoplay-premium">
            <button 
              className="ej-autoplay-btn"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
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
            <div className="ej-autoplay-track">
              <div 
                className={`ej-autoplay-progress ${isPlaying ? 'animating' : ''}`}
                style={{ animationDuration: '6s' }}
              ></div>
            </div>
            <span className="ej-autoplay-text">{isPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div> */}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="ej-premium-footer">
        {/* <div className="ej-footer-decoration">
          <span className="ej-footer-line"></span>
          <span className="ej-footer-diamond">◈</span>
          <span className="ej-footer-line"></span>
        </div> */}
        
        <div className="ej-footer-content">
          <p className="ej-footer-text">
            Every event has a story.
            <span className="ej-footer-accent"> Let's create yours.</span>
          </p>
          <button className="ej-footer-cta">
            <span>Start Your Journey</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="ej-cta-shine"></div>
          </button>
        </div>
      </div>

      {/* Bottom Energy Bars */}
      <div className="ej-energy-bars">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="ej-energy-bar"
            style={{
              animationDelay: `${i * 0.1}s`,
              height: `${8 + Math.random() * 25}px`
            }}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      {/* <div className="ej-scroll-hint">
        <span>DISCOVER THE JOURNEY</span>
        <div className="ej-scroll-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14M5 12l7 7 7-7" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div> */}
    </section>
  );
};

export default EventJourney;