// // import "./LegacySection.css";

// // const milestones = [
// //   {
// //     year: "2000",
// //     title: "The Journey Begins",
// //     description:
// //       "Started as a passionate music group with a vision to create unforgettable experiences.",
// //   },
// //   {
// //     year: "2010",
// //     title: "Super Singer Recognition",
// //     description:
// //       "National recognition through Vijay TV Super Singer and major stage performances.",
// //   },
// //   {
// //     year: "2018",
// //     title: "Prestigious Collaborations",
// //     description:
// //       "Performing alongside legendary musicians and becoming part of iconic orchestras.",
// //   },
// //   {
// //     year: "2025",
// //     title: "1000+ Events Milestone",
// //     description:
// //       "Delivering spectacular entertainment experiences across India and internationally.",
// //   },
// // ];

// // const LegacySection = () => {
// //   return (
// //     <section className="legacy">

// //       <div className="legacy-glow"></div>

// //       <div className="legacy-header">

// //         <span className="legacy-tag">
// //           THE LEGACY
// //         </span>

// //         <h2>
// //           25 YEARS OF
// //           <br />
// //           MUSICAL EXCELLENCE
// //         </h2>

// //         <p>
// //           From intimate performances to grand celebrations,
// //           creating unforgettable memories through music and entertainment.
// //         </p>

// //       </div>

// //       <div className="timeline">

// //         {milestones.map((item, index) => (
// //           <div
// //             className="timeline-item"
// //             key={index}
// //           >
// //             <div className="timeline-year">
// //               {item.year}
// //             </div>

// //             <div className="timeline-content">

// //               <h3>
// //                 {item.title}
// //               </h3>

// //               <p>
// //                 {item.description}
// //               </p>

// //             </div>
// //           </div>
// //         ))}

// //       </div>

// //       <div className="legacy-stats">

// //         <div className="stat-card">
// //           <h3>1000+</h3>
// //           <span>Events</span>
// //         </div>

// //         <div className="stat-card">
// //           <h3>500+</h3>
// //           <span>Concerts</span>
// //         </div>

// //         <div className="stat-card">
// //           <h3>60+</h3>
// //           <span>Cities</span>
// //         </div>

// //         <div className="stat-card">
// //           <h3>25+</h3>
// //           <span>Years</span>
// //         </div>

// //       </div>

// //     </section>
// //   );
// // };

// // export default LegacySection;





// // import { useEffect, useRef, useState } from 'react';
// // import './LegacySection.css';

// // const milestones = [
// //   {
// //     year: "2000",
// //     title: "First Stage",
// //     image: "/images/legacy-2000.jpg"
// //   },
// //   {
// //     year: "2010",
// //     title: "Super Singer",
// //     image: "/images/legacy-2010.jpg"
// //   },
// //   {
// //     year: "2018",
// //     title: "1000+ Events",
// //     image: "/images/legacy-2018.jpg"
// //   },
// //   {
// //     year: "2025",
// //     title: "International",
// //     image: "/images/legacy-2025.jpg"
// //   }
// // ];

// // const LegacySection = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [progress, setProgress] = useState(0);
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (!sectionRef.current) return;
      
// //       const rect = sectionRef.current.getBoundingClientRect();
// //       const sectionHeight = rect.height;
// //       const scrolled = -rect.top;
// //       const sectionProgress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
      
// //       setProgress(sectionProgress);
// //       setActiveIndex(Math.floor(sectionProgress * milestones.length));
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <section className="legacy" ref={sectionRef}>
// //       {/* Dynamic Background */}
// //       <div className="legacy-bg">
// //         <div className="bg-gradient"></div>
// //         <div className="bg-particles">
// //           {[...Array(20)].map((_, i) => (
// //             <div
// //               key={i}
// //               className="particle"
// //               style={{
// //                 left: `${Math.random() * 100}%`,
// //                 animationDelay: `${Math.random() * 5}s`,
// //                 animationDuration: `${3 + Math.random() * 4}s`
// //               }}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       {/* Left Side - Static Content */}
// //       <div className="legacy-left">
// //         <div className="left-content">
// //           <div className="stage-badge">
// //             <span className="badge-dot"></span>
// //             THE LEGACY
// //           </div>

// //           <h2 className="legacy-headline">
// //             <span className="headline-line">25 Years</span>
// //             <span className="headline-line gold">Of Magic</span>
// //           </h2>

// //           <div className="legacy-quote">
// //             "From one stage to global phenomenon"
// //           </div>

// //           {/* Progress Indicator */}
// //           <div className="progress-track">
// //             <div 
// //               className="progress-fill"
// //               style={{ width: `${progress * 100}%` }}
// //             ></div>
// //           </div>

// //           {/* Stats Grid */}
// //           <div className="stats-grid">
// //             <div className="stat-box">
// //               <span className="stat-num">1000+</span>
// //               <span className="stat-txt">Shows</span>
// //             </div>
// //             <div className="stat-box">
// //               <span className="stat-num">60+</span>
// //               <span className="stat-txt">Cities</span>
// //             </div>
// //             <div className="stat-box">
// //               <span className="stat-num">25</span>
// //               <span className="stat-txt">Years</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Right Side - Dynamic Timeline Cards */}
// //       <div className="legacy-right">
// //         <div className="cards-container">
// //           {milestones.map((milestone, index) => (
// //             <div
// //               key={index}
// //               className={`legacy-card ${index === activeIndex ? 'active' : ''} ${index < activeIndex ? 'passed' : ''}`}
// //               style={{
// //                 '--card-index': index,
// //                 transform: `translateY(${(index - activeIndex) * 20}px) scale(${index === activeIndex ? 1 : 0.95})`,
// //                 opacity: index === activeIndex ? 1 : index < activeIndex ? 0.5 : 0.3,
// //                 zIndex: index === activeIndex ? 3 : 2 - Math.abs(index - activeIndex)
// //               }}
// //             >
// //               <div className="card-image-wrap">
// //                 <img 
// //                   src={milestone.image} 
// //                   alt={milestone.title}
// //                   className="card-img"
// //                   onError={(e) => {
// //                     e.target.style.display = 'none';
// //                   }}
// //                 />
// //                 <div className="card-img-overlay"></div>
                
// //                 {/* Festival vibes overlay */}
// //                 <div className="card-energy">
// //                   <div className="energy-ring"></div>
// //                   <div className="energy-ring ring-2"></div>
// //                 </div>
// //               </div>

// //               <div className="card-info">
// //                 <span className="card-year">{milestone.year}</span>
// //                 <h3 className="card-title">{milestone.title}</h3>
// //                 <div className="card-arrow">→</div>
// //               </div>

// //               {/* Glow effect */}
// //               <div className="card-glow"></div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Year Indicator */}
// //         <div className="year-indicator">
// //           <span className="current-year">
// //             {milestones[activeIndex]?.year}
// //           </span>
// //           <div className="year-line"></div>
// //         </div>
// //       </div>

// //       {/* Bottom Quote */}
// //       <div className="legacy-footer">
// //         <div className="footer-content">
// //           <div className="footer-line"></div>
// //           <p>South India's Premium Entertainment Powerhouse</p>
// //           <div className="footer-line"></div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default LegacySection;






// import React, { useEffect, useRef, useState } from 'react';
// import './LegacySection.css';

// const milestones = [
//   {
//     year: "2000",
//     title: "First Stage",
//     subtitle: "The Beginning",
//     description: "Started our musical journey on the very first stage",
//     image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
//     stats: { shows: "1", reach: "Local" }
//   },
//   {
//     year: "2010",
//     title: "Super Singer",
//     subtitle: "National Recognition",
//     description: "Reached millions through television and live performances",
//     image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg",
//     stats: { shows: "500+", reach: "National" }
//   },
//   {
//     year: "2018",
//     title: "1000+ Events",
//     subtitle: "Milestone Achieved",
//     description: "Celebrated 1000 successful events across South India",
//     image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
//     stats: { shows: "1000+", reach: "Pan-India" }
//   },
//   {
//     year: "2025",
//     title: "International",
//     subtitle: "Global Stage",
//     description: "Expanding our musical legacy across international borders",
//     image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
//     stats: { shows: "1500+", reach: "Global" }
//   }
// ];

// const LegacySection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;
      
//       const rect = sectionRef.current.getBoundingClientRect();
//       const sectionHeight = rect.height;
//       const scrolled = -rect.top;
//       const sectionProgress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
      
//       setProgress(sectionProgress);
//       setActiveIndex(Math.min(Math.floor(sectionProgress * milestones.length), milestones.length - 1));
//     };

//     const handleMouseMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       setMousePos({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const currentMilestone = milestones[activeIndex];

//   return (
//     <section className="legacy-premium-section" ref={sectionRef}>
//       {/* Premium Light Background */}
//       <div className="legacy-premium-bg"></div>
//       <div className="legacy-premium-pattern"></div>
//       <div className="legacy-premium-glow"></div>

//       {/* Dynamic Spotlight */}
//       <div 
//         className="legacy-premium-spotlight"
//         style={{
//           background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.1) 0%, rgba(201, 160, 61, 0.03) 40%, transparent 70%)`
//         }}
//       />

//       {/* Cinematic Light Rays */}
//       <div className="legacy-premium-rays">
//         <div className="legacy-premium-ray"></div>
//         <div className="legacy-premium-ray"></div>
//         <div className="legacy-premium-ray"></div>
//         <div className="legacy-premium-ray"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="legacy-premium-particles">
//         {[...Array(40)].map((_, i) => (
//           <div
//             key={i}
//             className="legacy-premium-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 12}s`,
//               animationDuration: `${6 + Math.random() * 10}s`,
//               width: `${2 + Math.random() * 4}px`,
//               height: `${2 + Math.random() * 4}px`
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Container */}
//       <div className="legacy-premium-container">
//         {/* Left Side - Static Content */}
//         <div className="legacy-premium-left">
//           <div className="legacy-premium-badge">
//             <span className="legacy-premium-badge-dot"></span>
//             <span className="legacy-premium-badge-text">OUR LEGACY</span>
//             <span className="legacy-premium-badge-dot"></span>
//           </div>

//           <h2 className="legacy-premium-headline">
//             <span className="legacy-premium-headline-light">25 Years</span>
//             <span className="legacy-premium-headline-gold">Of Musical Magic</span>
//           </h2>

//           <div className="legacy-premium-divider">
//             <span className="legacy-premium-divider-line"></span>
//             <span className="legacy-premium-divider-diamond">◈</span>
//             <span className="legacy-premium-divider-line"></span>
//           </div>

//           <p className="legacy-premium-description">
//             From our first note to international stages, we've been creating 
//             unforgettable musical experiences that resonate across generations.
//           </p>

//           {/* Stats Grid */}
//           <div className="legacy-premium-stats">
//             <div className="legacy-premium-stat">
//               <div className="legacy-premium-stat-number">1000+</div>
//               <div className="legacy-premium-stat-label">Shows</div>
//               <div className="legacy-premium-stat-line"></div>
//             </div>
//             <div className="legacy-premium-stat-sep">◉</div>
//             <div className="legacy-premium-stat">
//               <div className="legacy-premium-stat-number">60+</div>
//               <div className="legacy-premium-stat-label">Cities</div>
//               <div className="legacy-premium-stat-line"></div>
//             </div>
//             <div className="legacy-premium-stat-sep">◉</div>
//             <div className="legacy-premium-stat">
//               <div className="legacy-premium-stat-number">25</div>
//               <div className="legacy-premium-stat-label">Years</div>
//               <div className="legacy-premium-stat-line"></div>
//             </div>
//           </div>

//           {/* Progress Indicator */}
//           <div className="legacy-premium-progress">
//             <div className="legacy-premium-progress-track">
//               <div 
//                 className="legacy-premium-progress-fill"
//                 style={{ width: `${progress * 100}%` }}
//               ></div>
//             </div>
//             <div className="legacy-premium-progress-labels">
//               {milestones.map((milestone, i) => (
//                 <span 
//                   key={i} 
//                   className={`legacy-premium-progress-label ${i === activeIndex ? 'active' : ''}`}
//                 >
//                   {milestone.year}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Quote */}
//           <div className="legacy-premium-quote">
//             <span className="legacy-premium-quote-mark">"</span>
//             <p>From one stage to a global phenomenon</p>
//             <span className="legacy-premium-quote-mark">"</span>
//           </div>
//         </div>

//         {/* Right Side - Dynamic Timeline Cards */}
//         <div className="legacy-premium-right">
//           <div className="legacy-premium-cards">
//             {milestones.map((milestone, index) => (
//               <div
//                 key={index}
//                 className={`legacy-premium-card ${index === activeIndex ? 'active' : ''} ${index < activeIndex ? 'passed' : ''}`}
//                 style={{
//                   transform: `translateY(${(index - activeIndex) * 25}px) scale(${index === activeIndex ? 1 : 0.92})`,
//                   opacity: index === activeIndex ? 1 : index < activeIndex ? 0.6 : 0.3,
//                   zIndex: index === activeIndex ? 10 : milestones.length - Math.abs(index - activeIndex),
//                   pointerEvents: index === activeIndex ? 'auto' : 'none'
//                 }}
//               >
//                 {/* Card Image */}
//                 <div className="legacy-premium-card-image">
//                   <img src={milestone.image} alt={milestone.title} />
//                   <div className="legacy-premium-card-overlay"></div>
//                   <div className="legacy-premium-card-gradient"></div>
//                 </div>

//                 {/* Card Content */}
//                 <div className="legacy-premium-card-content">
//                   <div className="legacy-premium-card-year">{milestone.year}</div>
//                   <h3 className="legacy-premium-card-title">{milestone.title}</h3>
//                   <p className="legacy-premium-card-subtitle">{milestone.subtitle}</p>
//                   <p className="legacy-premium-card-desc">{milestone.description}</p>
                  
//                   <div className="legacy-premium-card-stats">
//                     <div className="legacy-premium-card-stat">
//                       <span className="legacy-premium-card-stat-value">{milestone.stats.shows}</span>
//                       <span className="legacy-premium-card-stat-label">Shows</span>
//                     </div>
//                     <div className="legacy-premium-card-stat-divider"></div>
//                     <div className="legacy-premium-card-stat">
//                       <span className="legacy-premium-card-stat-value">{milestone.stats.reach}</span>
//                       <span className="legacy-premium-card-stat-label">Reach</span>
//                     </div>
//                   </div>

//                   <div className="legacy-premium-card-arrow">
//                     <span>Explore</span>
//                     <span>→</span>
//                   </div>
//                 </div>

//                 {/* Glow Effect */}
//                 <div className="legacy-premium-card-glow"></div>
//               </div>
//             ))}
//           </div>

//           {/* Active Year Display */}
//           <div className="legacy-premium-year-display">
//             <div className="legacy-premium-year-ring">
//               <span className="legacy-premium-year-current">{currentMilestone?.year}</span>
//               <div className="legacy-premium-year-pulse"></div>
//             </div>
//             <div className="legacy-premium-year-line"></div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Statement */}
//       <div className="legacy-premium-footer">
//         <div className="legacy-premium-footer-line"></div>
//         <div className="legacy-premium-footer-content">
//           <span className="legacy-premium-footer-diamond">◈</span>
//           <p>South India's Premium Entertainment Powerhouse</p>
//           <span className="legacy-premium-footer-diamond">◈</span>
//         </div>
//         <div className="legacy-premium-footer-line"></div>
//       </div>

//       {/* Bottom Audio Visualizer */}
//       <div className="legacy-premium-audio">
//         {[...Array(24)].map((_, i) => (
//           <div
//             key={i}
//             className="legacy-premium-audio-bar"
//             style={{
//               animationDelay: `${i * 0.08}s`,
//               height: `${6 + (i % 12)}px`
//             }}
//           />
//         ))}
//       </div>

//       {/* Scroll Indicator */}
//       <div className="legacy-premium-scroll">
//         <span className="legacy-premium-scroll-text">SCROLL TO EXPLORE</span>
//         <div className="legacy-premium-scroll-mouse">
//           <div className="legacy-premium-scroll-wheel"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LegacySection;

import React, { useEffect, useRef, useState } from 'react';
import './LegacySection.css';

// Import your background video or image
// import legacyBgVideo from '../assets/legacy-bg-video.mp4';
// or use image
import legacyBgImage from '../assets/legbg.jpg';

const milestones = [
  {
    year: "2000",
    title: "The Journey Begins",
    subtitle: "First Stage",
    description: "Started as a passionate music group with a vision to create unforgettable experiences. The first note that changed everything.",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    stats: { shows: "1", reach: "Local", impact: "Dreams" },
    gradient: "linear-gradient(135deg, #c9a03d, #b8860b)"
  },
  {
    year: "2010",
    title: "Super Singer",
    subtitle: "National Recognition",
    description: "National recognition through Vijay TV Super Singer and major stage performances, reaching millions of hearts.",
    image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg",
    stats: { shows: "500+", reach: "National", impact: "Millions" },
    gradient: "linear-gradient(135deg, #daa520, #c9a03d)"
  },
  {
    year: "2018",
    title: "1000+ Events",
    subtitle: "Milestone Achieved",
    description: "Celebrated 1000 successful events across South India, becoming a trusted name in entertainment industry.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    stats: { shows: "1000+", reach: "Pan-India", impact: "Legacy" },
    gradient: "linear-gradient(135deg, #c9a03d, #8b7355)"
  },
  {
    year: "2025",
    title: "International",
    subtitle: "Global Stage",
    description: "Expanding our musical legacy across international borders, taking Indian music to the world stage.",
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    stats: { shows: "1500+", reach: "Global", impact: "Worldwide" },
    gradient: "linear-gradient(135deg, #b8860b, #daa520)"
  }
];

const LegacySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrolled = -rect.top;
      const sectionProgress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
      
      setProgress(sectionProgress);
      setActiveIndex(Math.min(Math.floor(sectionProgress * milestones.length), milestones.length - 1));
    };

    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    // Play video when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(e => console.log('Video play:', e));
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

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
          <source src="/videos/legacy-bg.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img src={legacyBgImage} alt="Background" />
        </video>
        
        {/* Overlay Layers */}
        <div className="legacy-pro-bg-overlay"></div>
        <div className="legacy-pro-bg-gradient"></div>
        <div className="legacy-pro-bg-vignette"></div>
        <div className="legacy-pro-bg-pattern"></div>
      </div>

      {/* Loading Indicator for Video */}
      {!isVideoLoaded && (
        <div className="legacy-pro-loader">
          <div className="legacy-pro-loader-spinner"></div>
        </div>
      )}

      {/* Dynamic Spotlight Effect */}
      <div 
        className="legacy-pro-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.15) 0%, rgba(201, 160, 61, 0.05) 40%, transparent 70%)`
        }}
      />

      {/* Cinematic Light Rays */}
      <div className="legacy-pro-rays">
        <div className="legacy-pro-ray"></div>
        <div className="legacy-pro-ray"></div>
        <div className="legacy-pro-ray"></div>
        <div className="legacy-pro-ray"></div>
        <div className="legacy-pro-ray"></div>
      </div>

      {/* Floating Particles */}
      <div className="legacy-pro-particles">
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
      </div>

      {/* Film Grain Effect */}
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

            {/* Stats Cards */}
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

            {/* Scroll Progress Bar */}
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
                  >
                    {m.year}
                  </span>
                ))}
              </div>
            </div>

            {/* Cinematic Quote */}
            <div className="legacy-pro-quote">
              <div className="legacy-pro-quote-icon">“</div>
              <p>From one stage to a global phenomenon</p>
              <div className="legacy-pro-quote-icon">”</div>
            </div>
          </div>
        </div>

        {/* Right Side - Timeline Cards */}
        <div className="legacy-pro-right">
          <div className="legacy-pro-timeline">
            {/* Vertical Line */}
            <div className="legacy-pro-timeline-line">
              <div 
                className="legacy-pro-timeline-progress"
                style={{ height: `${progress * 100}%` }}
              ></div>
            </div>

            {/* Cards Stack */}
            <div className="legacy-pro-cards">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`legacy-pro-card ${index === activeIndex ? 'active' : ''} ${index < activeIndex ? 'passed' : ''}`}
                  style={{
                    transform: `translateY(${(index - activeIndex) * 30}px) scale(${index === activeIndex ? 1 : 0.9})`,
                    opacity: index === activeIndex ? 1 : index < activeIndex ? 0.5 : 0.2,
                    zIndex: index === activeIndex ? 10 : milestones.length - Math.abs(index - activeIndex)
                  }}
                >
                  {/* Card Media */}
                  <div className="legacy-pro-card-media">
                    <img src={milestone.image} alt={milestone.title} />
                    <div className="legacy-pro-card-overlay"></div>
                    <div className="legacy-pro-card-gradient" style={{ background: milestone.gradient }}></div>
                    
                    {/* Year Badge */}
                    <div className="legacy-pro-card-year">{milestone.year}</div>
                    
                    {/* Corner Accents */}
                    <div className="legacy-pro-card-corner tl"></div>
                    <div className="legacy-pro-card-corner tr"></div>
                    <div className="legacy-pro-card-corner bl"></div>
                    <div className="legacy-pro-card-corner br"></div>
                  </div>

                  {/* Card Content */}
                  <div className="legacy-pro-card-content">
                    <h3 className="legacy-pro-card-title">{milestone.title}</h3>
                    <p className="legacy-pro-card-subtitle">{milestone.subtitle}</p>
                    <p className="legacy-pro-card-desc">{milestone.description}</p>
                    
                    {/* Card Stats */}
                    <div className="legacy-pro-card-stats">
                      <div className="legacy-pro-card-stat">
                        <span className="legacy-pro-card-stat-value">{milestone.stats.shows}</span>
                        <span className="legacy-pro-card-stat-label">Events</span>
                      </div>
                      <div className="legacy-pro-card-stat-divider"></div>
                      <div className="legacy-pro-card-stat">
                        <span className="legacy-pro-card-stat-value">{milestone.stats.reach}</span>
                        <span className="legacy-pro-card-stat-label">Reach</span>
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="legacy-pro-card-link">
                      <span className="legacy-pro-card-link-text">Discover Journey</span>
                      <span className="legacy-pro-card-arrow">→</span>
                    </div>
                  </div>

                  {/* Energy Ring */}
                  <div className="legacy-pro-card-energy">
                    <div className="legacy-pro-energy-ring"></div>
                    <div className="legacy-pro-energy-ring ring-2"></div>
                    <div className="legacy-pro-energy-ring ring-3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Brand Statement */}
      <div className="legacy-pro-footer">
        <div className="legacy-pro-footer-line"></div>
        <div className="legacy-pro-footer-brand">
          <span className="legacy-pro-footer-diamond">◈</span>
          <span className="legacy-pro-footer-text">South India's Premium Entertainment Powerhouse</span>
          <span className="legacy-pro-footer-diamond">◈</span>
        </div>
        <div className="legacy-pro-footer-line"></div>
      </div>

      {/* Audio Visualizer */}
      <div className="legacy-pro-audio">
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
      </div>

      {/* Scroll Progress Ring */}
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

      {/* Scroll Hint */}
      <div className="legacy-pro-scroll-hint">
        <span className="legacy-pro-scroll-text">SCROLL TO EXPLORE</span>
        <div className="legacy-pro-scroll-mouse">
          <div className="legacy-pro-scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;