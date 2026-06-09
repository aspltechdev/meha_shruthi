// import { useEffect, useRef, useState } from 'react';
// import './ClientReactions.css';

// const testimonials = [
//   {
//     quote: "The audience didn't want the performance to end. Pure magic on stage.",
//     author: "Corporate Event Client",
//     role: "Annual Gala, Chennai",
//     highlight: true
//   },
//   {
//     quote: "They transformed our wedding into a celebration that our families still talk about.",
//     author: "Wedding Client",
//     role: "Destination Wedding, Goa"
//   },
//   {
//     quote: "Exceptional professionalism and unforgettable entertainment. The energy was electric.",
//     author: "Event Organizer",
//     role: "Cultural Festival, Bangalore",
//     highlight: true
//   },
// ];

// const ClientReactions = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const intervalRef = useRef(null);
//   const progressRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     if (isAutoPlaying) {
//       // Progress animation
//       const startTime = Date.now();
//       const duration = 5000;

//       const animate = () => {
//         const elapsed = Date.now() - startTime;
//         const newProgress = Math.min((elapsed % duration) / duration * 100, 100);
//         setProgress(newProgress);
        
//         if (elapsed % duration < duration) {
//           progressRef.current = requestAnimationFrame(animate);
//         }
//       };
      
//       progressRef.current = requestAnimationFrame(animate);

//       // Slide change
//       intervalRef.current = setInterval(() => {
//         setActiveStep((prev) => (prev + 1) % testimonials.length);
//         setProgress(0);
//       }, duration);
//     }

//     return () => {
//       clearInterval(intervalRef.current);
//       if (progressRef.current) cancelAnimationFrame(progressRef.current);
//     };
//   }, [isAutoPlaying, activeIndex]);

//   const goToSlide = (index) => {
//     setActiveIndex(index);
//     setProgress(0);
//     setIsAutoPlaying(false);
//     clearInterval(intervalRef.current);
    
//     setTimeout(() => {
//       setIsAutoPlaying(true);
//     }, 8000);
//   };

//   return (
//     <section className="cr-section" ref={sectionRef}>
//       {/* Stage Energy Background */}
//       <div className="cr-bg">
//         <div className="cr-energy-field">
//           <div className="cr-energy-wave cr-wave-1"></div>
//           <div className="cr-energy-wave cr-wave-2"></div>
//           <div className="cr-energy-wave cr-wave-3"></div>
//         </div>
        
//         <div className="cr-particle-field">
//           {[...Array(30)].map((_, i) => (
//             <div
//               key={i}
//               className="cr-particle"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 6}s`,
//                 animationDuration: `${3 + Math.random() * 5}s`
//               }}
//             />
//           ))}
//         </div>

//         <div className="cr-light-beams">
//           <div className="cr-beam cr-beam-1"></div>
//           <div className="cr-beam cr-beam-2"></div>
//           <div className="cr-beam cr-beam-3"></div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="cr-content">
//         {/* Header */}
//         <div className="cr-header">
//           <div className="cr-header-top">
//             <span className="cr-header-tag">CLIENT STORIES</span>
//           </div>
          
//           <h2 className="cr-headline">
//             <span className="cr-headline-word">Standing</span>
//             <span className="cr-headline-word cr-headline-bold">Ovations</span>
//           </h2>
//         </div>

//         {/* Testimonial Display */}
//         <div className="cr-display">
//           {/* Large Quote */}
//           <div className="cr-quote-display">
//             <div className="cr-quote-marks">"</div>
            
//             <div className="cr-quote-slider">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className={`cr-quote-slide ${index === activeIndex ? 'cr-quote-active' : ''}`}
//                 >
//                   <p className="cr-quote-text">{testimonial.quote}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Author Info */}
//             <div className="cr-author-display">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className={`cr-author-info ${index === activeIndex ? 'cr-author-visible' : ''}`}
//                 >
//                   <span className="cr-author-name">{testimonial.author}</span>
//                   <span className="cr-author-role">{testimonial.role}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Progress & Controls */}
//           <div className="cr-controls">
//             {/* Progress Bars */}
//             <div className="cr-progress-bars">
//               {testimonials.map((testimonial, index) => (
//                 <button
//                   key={index}
//                   className={`cr-progress-bar ${index === activeIndex ? 'cr-bar-active' : ''} ${index < activeIndex ? 'cr-bar-done' : ''}`}
//                   onClick={() => goToSlide(index)}
//                 >
//                   <div className="cr-bar-track">
//                     <div 
//                       className="cr-bar-fill"
//                       style={{
//                         width: index === activeIndex ? `${progress}%` : index < activeIndex ? '100%' : '0%',
//                         transition: index === activeIndex ? 'none' : 'width 0.5s ease'
//                       }}
//                     ></div>
//                   </div>
//                   <span className="cr-bar-label">{testimonial.author.split(' ').slice(0, 2).join(' ')}</span>
//                 </button>
//               ))}
//             </div>

//             {/* Navigation */}
//             <div className="cr-nav">
//               <button 
//                 className="cr-nav-btn"
//                 onClick={() => goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length)}
//               >
//                 ←
//               </button>
              
//               <button 
//                 className="cr-nav-btn cr-nav-play"
//                 onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//               >
//                 {isAutoPlaying ? '⏸' : '▶'}
//               </button>
              
//               <button 
//                 className="cr-nav-btn"
//                 onClick={() => goToSlide((activeIndex + 1) % testimonials.length)}
//               >
//                 →
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Statement */}
//         <div className="cr-footer">
//           <div className="cr-footer-content">
//             <h2 className="cr-footer-headline">
//               <span className="cr-footer-line">Thousands Of Smiles.</span>
//               <span className="cr-footer-line cr-footer-gold">One Purpose.</span>
//             </h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientReactions;






import React, { useEffect, useRef, useState } from 'react';
import './ClientReactions.css';

const testimonials = [
  {
    quote: "The audience didn't want the performance to end. Pure magic on stage.",
    author: "Corporate Event Client",
    role: "Annual Gala, Chennai",
    highlight: true,
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
  },
  {
    quote: "They transformed our wedding into a celebration that our families still talk about.",
    author: "Wedding Client",
    role: "Destination Wedding, Goa",
    highlight: false,
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
  },
  {
    quote: "Exceptional professionalism and unforgettable entertainment. The energy was electric.",
    author: "Event Organizer",
    role: "Cultural Festival, Bangalore",
    highlight: true,
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
  },
  {
    quote: "A truly magical experience that left everyone speechless. World-class talent!",
    author: "Celebrity Client",
    role: "Private Function, Mumbai",
    highlight: false,
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg"
  }
];

const ClientReactions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isAutoPlaying) {
      const duration = 6000;
      let startTime = Date.now();

      const animateProgress = () => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);
        
        if (newProgress < 100) {
          progressRef.current = requestAnimationFrame(animateProgress);
        }
      };
      
      progressRef.current = requestAnimationFrame(animateProgress);

      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        startTime = Date.now();
        setProgress(0);
      }, duration);
    }

    return () => {
      clearInterval(intervalRef.current);
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
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

  const goToSlide = (index) => {
    setActiveIndex(index);
    setProgress(0);
    setIsAutoPlaying(false);
    clearInterval(intervalRef.current);
    
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="cr-premium-section" ref={sectionRef}>
      {/* Premium Light Background */}
      <div className="cr-premium-bg"></div>
      <div className="cr-premium-pattern"></div>

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
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`
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