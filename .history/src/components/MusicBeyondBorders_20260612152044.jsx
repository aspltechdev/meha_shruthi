// // import { useEffect, useRef, useState } from 'react';
// // import './MusicBeyondBorders.css';

// // const countries = [
// //   { 
// //     name: "Canada", 
// //     flag: "🇨🇦", 
// //     city: "Toronto", 
// //     year: "2019", 
// //     venue: "Roy Thomson Hall",
// //     image: "https://images.pexels.com/photos/1421906/pexels-photo-1421906.jpeg"
// //   },
// //   { 
// //     name: "United Kingdom", 
// //     flag: "🇬🇧", 
// //     city: "London", 
// //     year: "2018", 
// //     venue: "Royal Albert Hall",
// //     image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
// //   },
// //   { 
// //     name: "Australia", 
// //     flag: "🇦🇺", 
// //     city: "Sydney", 
// //     year: "2020", 
// //     venue: "Sydney Opera House",
// //     image: "https://images.pexels.com/photos/162196/sydney-opera-house-australia-sydney-ferry-162196.jpeg"
// //   },
// //   { 
// //     name: "Denmark", 
// //     flag: "🇩🇰", 
// //     city: "Copenhagen", 
// //     year: "2022", 
// //     venue: "Koncerthuset",
// //     image: "https://images.pexels.com/photos/2361032/pexels-photo-2361032.jpeg"
// //   },
// //   { 
// //     name: "Switzerland", 
// //     flag: "🇨🇭", 
// //     city: "Zurich", 
// //     year: "2021", 
// //     venue: "Tonhalle",
// //     image: "https://images.pexels.com/photos/586627/pexels-photo-586627.jpeg"
// //   },
// //   { 
// //     name: "Singapore", 
// //     flag: "🇸🇬", 
// //     city: "Marina Bay", 
// //     year: "2019", 
// //     venue: "Esplanade",
// //     image: "https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg"
// //   },
// //   { 
// //     name: "Malaysia", 
// //     flag: "🇲🇾", 
// //     city: "Kuala Lumpur", 
// //     year: "2023", 
// //     venue: "PETRONAS Theatre",
// //     image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg"
// //   },
// //   { 
// //     name: "Sri Lanka", 
// //     flag: "🇱🇰", 
// //     city: "Colombo", 
// //     year: "2017", 
// //     venue: "Nelum Pokuna",
// //     image: "https://images.pexels.com/photos/1056405/pexels-photo-1056405.jpeg"
// //   },
// // ];

// // const MusicBeyondBorders = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [scrollProgress, setScrollProgress] = useState(0);
// //   const [hoveredCard, setHoveredCard] = useState(null);
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (!sectionRef.current) return;

// //       const rect = sectionRef.current.getBoundingClientRect();
// //       const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
// //       setScrollProgress(progress);

// //       const cards = document.querySelectorAll('.mbb-journey-card');
// //       cards.forEach((card, idx) => {
// //         const cardRect = card.getBoundingClientRect();
// //         if (cardRect.top < window.innerHeight * 0.6 && cardRect.bottom > window.innerHeight * 0.4) {
// //           setActiveIndex(idx);
// //         }
// //       });
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     handleScroll();
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <section className="mbb-section" ref={sectionRef}>
// //       {/* Light Theme Background */}
// //       <div className="mbb-bg-light"></div>
// //       <div className="mbb-pattern-overlay"></div>

// //       {/* Header */}
// //       <div className="mbb-header">
// //         <div className="mbb-header-badge">
// //           <span className="mbb-badge-dot"></span>
// //           <span className="mbb-badge-text">GLOBAL JOURNEY</span>
// //           <span className="mbb-badge-dot"></span>
// //         </div>

// //         <h2 className="mbb-title">
// //           <span className="mbb-title-light">Music</span>
// //           <span className="mbb-title-bold">Beyond Borders</span>
// //         </h2>

// //         <p className="mbb-subtitle">
// //           Taking Indian classical music to prestigious venues across the globe
// //         </p>

// //         <div className="mbb-stats">
// //           <div className="mbb-stat">
// //             <span className="mbb-stat-num">8</span>
// //             <span className="mbb-stat-label">Countries</span>
// //           </div>
// //           <div className="mbb-stat-dot"></div>
// //           <div className="mbb-stat">
// //             <span className="mbb-stat-num">15+</span>
// //             <span className="mbb-stat-label">Cities</span>
// //           </div>
// //           <div className="mbb-stat-dot"></div>
// //           <div className="mbb-stat">
// //             <span className="mbb-stat-num">50+</span>
// //             <span className="mbb-stat-label">Performances</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Journey Grid */}
// //       <div className="mbb-grid">
// //         {countries.map((country, idx) => (
// //           <div
// //             key={idx}
// //             className={`mbb-journey-card ${activeIndex === idx ? 'active' : ''}`}
// //             onMouseEnter={() => setHoveredCard(idx)}
// //             onMouseLeave={() => setHoveredCard(null)}
// //             style={{ animationDelay: `${idx * 0.05}s` }}
// //           >
// //             {/* Card Media */}
// //             <div className="mbb-card-media">
// //               <div className="mbb-media-frame">
// //                 <img 
// //                   src={country.image} 
// //                   alt={country.name}
// //                   className="mbb-card-img"
// //                   onError={(e) => {
// //                     e.target.src = 'https://via.placeholder.com/400x300/fdf4e3/c9a03d?text=' + country.name;
// //                   }}
// //                 />
// //                 <div className="mbb-media-overlay"></div>

// //                 {/* Flag Badge */}
// //                 <div className="mbb-flag-badge">
// //                   <span>{country.flag}</span>
// //                 </div>

// //                 {/* Year Badge */}
// //                 <div className="mbb-year-badge">
// //                   <span>{country.year}</span>
// //                 </div>

// //                 {/* Hover Play Icon */}
// //                 <div className={`mbb-hover-icon ${hoveredCard === idx ? 'show' : ''}`}>
// //                   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
// //                     <path d="M8 5v14l11-7z"/>
// //                   </svg>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Card Content */}
// //             <div className="mbb-card-content">
// //               <div className="mbb-card-number">{(idx + 1).toString().padStart(2, '0')}</div>
// //               <h3 className="mbb-card-title">{country.name}</h3>
// //               <p className="mbb-card-location">
// //                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2"/>
// //                   <circle cx="12" cy="10" r="3" strokeWidth="2"/>
// //                 </svg>
// //                 {country.city}
// //               </p>
// //               <p className="mbb-card-venue">{country.venue}</p>
// //               <div className="mbb-card-line"></div>
// //               <div className="mbb-card-tag">
// //                 <span>International Tour</span>
// //               </div>
// //             </div>

// //             {/* Glow Effect */}
// //             <div className="mbb-card-glow"></div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Progress Indicator */}
// //       <div className="mbb-progress">
// //         <div className="mbb-progress-line">
// //           <div className="mbb-progress-fill" style={{ width: `${scrollProgress * 100}%` }}></div>
// //         </div>
// //         <div className="mbb-progress-dots">
// //           {countries.map((_, i) => (
// //             <div key={i} className={`mbb-progress-dot ${i === activeIndex ? 'active' : ''}`}></div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Footer Statement */}
// //       <div className="mbb-footer">
// //         <div className="mbb-footer-line"></div>

// //         <div className="mbb-footer-quote">
// //           <span className="mbb-quote-mark">"</span>
// //           <p>
// //             Thousands of miles traveled.
// //             <br />
// //             <strong>Millions of hearts touched.</strong>
// //           </p>
// //           <span className="mbb-quote-mark">"</span>
// //         </div>

// //         <div className="mbb-footer-flags">
// //           {countries.map((c, i) => (
// //             <div key={i} className="mbb-flag-item" style={{ animationDelay: `${i * 0.03}s` }}>
// //               <span>{c.flag}</span>
// //               <span className="mbb-flag-name">{c.name}</span>
// //             </div>
// //           ))}
// //         </div>

// //         <button className="mbb-cta">
// //           <span>Explore Full Journey</span>
// //           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //             <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
// //           </svg>
// //         </button>
// //       </div>

// //       {/* Scroll Hint */}
// //       <div className="mbb-scroll-hint">
// //         <span>SCROLL</span>
// //         <div className="mbb-scroll-mouse">
// //           <div className="mbb-scroll-wheel"></div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default MusicBeyondBorders;








// import React, { useEffect, useRef, useState } from 'react';
// import './MusicBeyondBorders.css';

// const countries = [
//   { 
//     name: "Canada", 
//     flag: "🇨🇦", 
//     city: "Toronto", 
//     year: "2019", 
//     venue: "Roy Thomson Hall",
//     image: "https://images.pexels.com/photos/1421906/pexels-photo-1421906.jpeg",
//     description: "North American Debut"
//   },
//   { 
//     name: "United Kingdom", 
//     flag: "🇬🇧", 
//     city: "London", 
//     year: "2018", 
//     venue: "Royal Albert Hall",
//     image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
//     description: "European Premiere"
//   },
//   { 
//     name: "Australia", 
//     flag: "🇦🇺", 
//     city: "Sydney", 
//     year: "2020", 
//     venue: "Sydney Opera House",
//     image: "https://images.pexels.com/photos/162196/sydney-opera-house-australia-sydney-ferry-162196.jpeg",
//     description: "Down Under Spectacle"
//   },
//   { 
//     name: "Denmark", 
//     flag: "🇩🇰", 
//     city: "Copenhagen", 
//     year: "2022", 
//     venue: "Koncerthuset",
//     image: "https://images.pexels.com/photos/2361032/pexels-photo-2361032.jpeg",
//     description: "Nordic Melodies"
//   },
//   { 
//     name: "Switzerland", 
//     flag: "🇨🇭", 
//     city: "Zurich", 
//     year: "2021", 
//     venue: "Tonhalle",
//     image: "https://images.pexels.com/photos/586627/pexels-photo-586627.jpeg",
//     description: "Alpine Harmony"
//   },
//   { 
//     name: "Singapore", 
//     flag: "🇸🇬", 
//     city: "Marina Bay", 
//     year: "2019", 
//     venue: "Esplanade",
//     image: "https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg",
//     description: "Asian Showcase"
//   },
//   { 
//     name: "Malaysia", 
//     flag: "🇲🇾", 
//     city: "Kuala Lumpur", 
//     year: "2023", 
//     venue: "PETRONAS Theatre",
//     image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
//     description: "Tropical Rhythms"
//   },
//   { 
//     name: "Sri Lanka", 
//     flag: "🇱🇰", 
//     city: "Colombo", 
//     year: "2017", 
//     venue: "Nelum Pokuna",
//     image: "https://images.pexels.com/photos/1056405/pexels-photo-1056405.jpeg",
//     description: "Isle of Melody"
//   },
// ];

// const MusicBeyondBorders = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
//       setScrollProgress(progress);

//       const cards = document.querySelectorAll('.mbb-pro-card');
//       cards.forEach((card, idx) => {
//         const cardRect = card.getBoundingClientRect();
//         if (cardRect.top < window.innerHeight * 0.6 && cardRect.bottom > window.innerHeight * 0.4) {
//           setActiveIndex(idx);
//         }
//       });
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
//     handleScroll();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <section className="mbb-pro-section" ref={sectionRef}>
//       {/* Premium Light Background */}
//       <div className="mbb-pro-bg"></div>
//       <div className="mbb-pro-pattern"></div>
//       <div className="mbb-pro-glow"></div>

//       {/* Dynamic Spotlight */}
//       <div 
//         className="mbb-pro-spotlight"
//         style={{
//           background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.1) 0%, rgba(201, 160, 61, 0.03) 40%, transparent 70%)`
//         }}
//       />

//       {/* Cinematic Light Rays */}
//       <div className="mbb-pro-rays">
//         <div className="mbb-pro-ray"></div>
//         <div className="mbb-pro-ray"></div>
//         <div className="mbb-pro-ray"></div>
//         <div className="mbb-pro-ray"></div>
//         <div className="mbb-pro-ray"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="mbb-pro-particles">
//         {[...Array(40)].map((_, i) => (
//           <div
//             key={i}
//             className="mbb-pro-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 10}s`,
//               animationDuration: `${5 + Math.random() * 8}s`,
//               width: `${2 + Math.random() * 4}px`,
//               height: `${2 + Math.random() * 4}px`
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Container */}
//       <div className="mbb-pro-container">
//         {/* Header Section */}
//         <div className="mbb-pro-header">
//           <div className="mbb-pro-badge">
//             <span className="mbb-pro-badge-dot"></span>
//             <span className="mbb-pro-badge-text">GLOBAL JOURNEY</span>
//             <span className="mbb-pro-badge-dot"></span>
//           </div>

//           <h2 className="mbb-pro-title">
//             <span className="mbb-pro-title-light">Music</span>
//             <span className="mbb-pro-title-bold">Beyond Borders</span>
//           </h2>

//           <div className="mbb-pro-divider">
//             <span className="mbb-pro-divider-line"></span>
//             <span className="mbb-pro-divider-diamond">◈</span>
//             <span className="mbb-pro-divider-line"></span>
//           </div>

//           <p className="mbb-pro-subtitle">
//             Taking Indian classical music to prestigious venues across the globe
//           </p>

//           {/* Stats */}
//           <div className="mbb-pro-stats">
//             <div className="mbb-pro-stat">
//               <div className="mbb-pro-stat-number">8</div>
//               <div className="mbb-pro-stat-label">Countries</div>
//               <div className="mbb-pro-stat-glow"></div>
//             </div>
//             <div className="mbb-pro-stat-sep">◉</div>
//             <div className="mbb-pro-stat">
//               <div className="mbb-pro-stat-number">15+</div>
//               <div className="mbb-pro-stat-label">Cities</div>
//               <div className="mbb-pro-stat-glow"></div>
//             </div>
//             <div className="mbb-pro-stat-sep">◉</div>
//             <div className="mbb-pro-stat">
//               <div className="mbb-pro-stat-number">50+</div>
//               <div className="mbb-pro-stat-label">Shows</div>
//               <div className="mbb-pro-stat-glow"></div>
//             </div>
//           </div>
//         </div>

//         {/* Journey Cards Grid */}
//         <div className="mbb-pro-grid">
//           {countries.map((country, idx) => (
//             <div
//               key={idx}
//               className={`mbb-pro-card ${activeIndex === idx ? 'active' : ''} ${hoveredCard === idx ? 'hovered' : ''}`}
//               onMouseEnter={() => setHoveredCard(idx)}
//               onMouseLeave={() => setHoveredCard(null)}
//               style={{ animationDelay: `${idx * 0.05}s` }}
//             >
//               {/* Card Image */}
//               <div className="mbb-pro-card-image">
//                 <img src={country.image} alt={country.name} />
//                 <div className="mbb-pro-card-overlay"></div>
//                 <div className="mbb-pro-card-gradient"></div>

//                 {/* Flag Badge */}
//                 <div className="mbb-pro-flag-badge">
//                   <span>{country.flag}</span>
//                 </div>

//                 {/* Year Badge */}
//                 <div className="mbb-pro-year-badge">
//                   <span>{country.year}</span>
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="mbb-pro-card-content">
//                 <div className="mbb-pro-card-number">
//                   {(idx + 1).toString().padStart(2, '0')}
//                 </div>
//                 <h3 className="mbb-pro-card-title">{country.name}</h3>
//                 <p className="mbb-pro-card-location">
//                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="1.5"/>
//                     <circle cx="12" cy="10" r="3" strokeWidth="1.5"/>
//                   </svg>
//                   {country.city}
//                 </p>
//                 <p className="mbb-pro-card-venue">{country.venue}</p>
//                 <p className="mbb-pro-card-desc">{country.description}</p>
//                 <div className="mbb-pro-card-line"></div>
//                 <div className="mbb-pro-card-tag">
//                   <span>International Tour</span>
//                 </div>
//               </div>

//               {/* Hover Arrow */}
//               <div className="mbb-pro-card-arrow">
//                 <span>Explore</span>
//                 <span>→</span>
//               </div>

//               {/* Card Glow */}
//               <div className="mbb-pro-card-glow"></div>

//               {/* Corner Accent */}
//               <div className="mbb-pro-card-corner"></div>
//             </div>
//           ))}
//         </div>

//         {/* Progress Timeline */}
//         <div className="mbb-pro-timeline">
//           <div className="mbb-pro-timeline-line">
//             <div className="mbb-pro-timeline-fill" style={{ width: `${scrollProgress * 100}%` }}></div>
//           </div>
//           <div className="mbb-pro-timeline-dots">
//             {countries.map((_, i) => (
//               <div key={i} className={`mbb-pro-timeline-dot ${i === activeIndex ? 'active' : ''}`}>
//                 <span className="mbb-pro-timeline-year">{countries[i].year}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer Section */}
//         <div className="mbb-pro-footer">
//           <div className="mbb-pro-footer-line"></div>

//           <div className="mbb-pro-footer-quote">
//             <span className="mbb-pro-quote-mark">"</span>
//             <p>
//               Thousands of miles traveled.
//               <br />
//               <strong>Millions of hearts touched.</strong>
//             </p>
//             <span className="mbb-pro-quote-mark">"</span>
//           </div>

//           <div className="mbb-pro-footer-flags">
//             {countries.map((c, i) => (
//               <div key={i} className="mbb-pro-flag" style={{ animationDelay: `${i * 0.03}s` }}>
//                 <span className="mbb-pro-flag-icon">{c.flag}</span>
//                 <span className="mbb-pro-flag-name">{c.name}</span>
//               </div>
//             ))}
//           </div>

//           <button className="mbb-pro-cta">
//             <span>Explore Full Journey</span>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
//             </svg>
//             <div className="mbb-pro-cta-shine"></div>
//           </button>
//         </div>
//       </div>

//       {/* Bottom Audio Visualizer */}
//       <div className="mbb-pro-audio">
//         {[...Array(24)].map((_, i) => (
//           <div
//             key={i}
//             className="mbb-pro-audio-bar"
//             style={{
//               animationDelay: `${i * 0.08}s`,
//               height: `${6 + (i % 12)}px`
//             }}
//           />
//         ))}
//       </div>

//       {/* Scroll Indicator */}
//       <div className="mbb-pro-scroll">
//         <span className="mbb-pro-scroll-text">EXPLORE THE JOURNEY</span>
//         <div className="mbb-pro-scroll-mouse">
//           <div className="mbb-pro-scroll-wheel"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MusicBeyondBorders;

import { useEffect, useRef, useState } from 'react';
import './MeetTheVoices.css';
import m1 from "../assets/sridaran.png";
import m2 from "../assets/meeramam.png";
import meeraVideo from "../assets/meeramam.mp4";
import kaushikVideo from "../assets/vidtwo.mp4";

const MeetTheVoices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState({ meera: false, kaushik: false });
  const [isPlaying, setIsPlaying] = useState({ meera: true, kaushik: false });
  const sectionRef = useRef(null);
  const videoRefMeera = useRef(null);
  const videoRefKaushik = useRef(null);

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
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);
      setProgress(Math.min(1, Math.max(0, scrollProgress)));
      if (scrollProgress < 0.5) setActiveIndex(0);
      else setActiveIndex(1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (activeIndex === 0) {
      videoRefMeera.current?.play().catch(() => {});
      setIsPlaying({ meera: true, kaushik: false });
      videoRefKaushik.current?.pause();
    } else {
      videoRefKaushik.current?.play().catch(() => {});
      setIsPlaying({ meera: false, kaushik: true });
      videoRefMeera.current?.pause();
    }
  }, [activeIndex]);

  const singers = [
    {
      id: 0,
      uniqueId: "meera-the-visionary",
      name: "MEERA SRIDHARAN",
      fullName: "Meera Sridharan",
      title: "The Visionary Voice",
      role: "Founder & Lead Vocalist",
      specialty: "Carnatic • Classical • Soul",
      description: "A voice that carries the soul of tradition, Meera transforms every performance into a spiritual journey through the depths of Indian classical music.",
      quote: "Music flows through my veins like the sacred rivers of Bharath",
      videoUrl: meeraVideo,
      posterImage: m2,
      stats: [
        { value: "25+", label: "Years" },
        { value: "1000+", label: "Performances" },
        { value: "50+", label: "Awards" }
      ],
      achievements: ["Classical Prodigy", "National Award Winner", "International Performer"],
      accentColor: "#c9a03d",
    },
    {
      id: 1,
      uniqueId: "kaushik-the-performer",
      name: "KAUSHIK SRIDHARAN",
      fullName: "Kaushik Sridharan",
      title: "The Stage Virtuoso",
      role: "Lead Performer & Super Singer",
      specialty: "Versatile • Energetic • Magical",
      description: "From Super Singer to international stages, Kaushik brings electrifying energy while honoring every musical tradition.",
      quote: "Every celebration under our banner becomes an eternal memory",
      videoUrl: kaushikVideo,
      posterImage: m1,
      stats: [
        { value: "500+", label: "Concerts" },
        { value: "7+", label: "Countries" },
        { value: "15+", label: "Awards" }
      ],
      achievements: ["Super Singer Fame", "International Tour", "Trendsetter Award"],
      accentColor: "#d4a843",
    }
  ];

  const currentSinger = singers[activeIndex];

  const handleVideoLoad = (id) => setIsVideoLoaded(p => ({ ...p, [id]: true }));

  return (
    <section className="mtv-cinematic-wrapper" ref={sectionRef}>

      {/* Ambient mouse glow */}
      <div className="mtv-cinematic-spotlight" style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${currentSinger.accentColor}18 0%, transparent 55%)`
      }} />

      {/* Floating music notes ambience */}
      <div className="mtv-ambient-notes">
        {['♪','♫','♩','♬','♪','♫'].map((n, i) => (
          <span key={i} className={`mtv-ambient-note mtv-ambient-note-${i}`}
            style={{ color: `${currentSinger.accentColor}40`, animationDelay: `${i * 1.1}s` }}>
            {n}
          </span>
        ))}
      </div>

      {/* ── SECTION HEADER ── */}
      <div className="mtv-theep-header">
        <p className="mtv-theep-overline" style={{ color: currentSinger.accentColor }}>
          Meha Sruthi Entertainers Presents
        </p>
        <h2 className="mtv-theep-headline">
          Meet the <em>Voices</em>
        </h2>
        <p className="mtv-theep-subline">
          Two artists. One legacy. Infinite celebrations.
        </p>
        {/* Nav dot controls — singer selector */}
        <div className="mtv-theep-dots">
          {singers.map((s, i) => (
            <button
              key={s.uniqueId}
              className={`mtv-theep-dot ${activeIndex === i ? 'active' : ''}`}
              style={{ '--accent': s.accentColor }}
              onClick={() => setActiveIndex(i)}
              aria-label={s.fullName}
            >
              <span className="mtv-theep-dot-label">{s.fullName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── SLIDE WRAPPER ── */}
      <div className="mtv-theep-stage">
        {singers.map((singer, idx) => (
          <div
            key={singer.uniqueId}
            className={`mtv-theep-slide ${activeIndex === idx ? 'active' : ''}`}
            style={{ transform: `translateX(${(idx - activeIndex) * 100}%)`, opacity: activeIndex === idx ? 1 : 0 }}
          >

            {/* ══ LEFT HALF — text content ══ */}
            <div className="mtv-theep-left">
              <div className="mtv-theep-content">

                <span className="mtv-theep-tag" style={{ color: singer.accentColor }}>
                  ◉ {singer.title} ◉
                </span>

                <h1 className="mtv-theep-name">
                  {singer.name}
                  <span className="mtv-theep-name-bar" style={{ background: singer.accentColor }} />
                </h1>

                <div className="mtv-theep-role" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
                  {singer.role}
                </div>

                <div className="mtv-theep-specialty">
                  <span className="mtv-theep-spec-dot" style={{ background: singer.accentColor }} />
                  {singer.specialty}
                </div>

                <p className="mtv-theep-desc">{singer.description}</p>

                <div className="mtv-theep-quote" style={{ borderLeftColor: singer.accentColor }}>
                  <span className="mtv-theep-qmark">"</span>
                  {singer.quote}
                  <span className="mtv-theep-qmark">"</span>
                </div>

                {/* Stats row */}
                <div className="mtv-theep-stats">
                  {singer.stats.map((s, i) => (
                    <div key={i} className="mtv-theep-stat">
                      <span className="mtv-theep-stat-val" style={{ color: singer.accentColor }}>{s.value}</span>
                      <span className="mtv-theep-stat-lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="mtv-theep-chips">
                  {singer.achievements.map((a, i) => (
                    <span key={i} className="mtv-theep-chip" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
                      {a}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="mtv-theep-cta" style={{ '--accent': singer.accentColor }}>
                  <span>Experience The Magic</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

              </div>
            </div>

            {/* ══ RIGHT HALF — two tilted cards ══ */}
            <div className="mtv-theep-right">

              {/* CARD 1 — Video card (back, tilted right) */}
              <div className="mtv-theep-card mtv-theep-card-video"
                style={{ '--accent': singer.accentColor }}>
                <div className="mtv-theep-card-inner">
                  <video
                    ref={idx === 0 ? videoRefMeera : videoRefKaushik}
                    className="mtv-theep-card-media"
                    poster={singer.posterImage}
                    loop muted playsInline
                    autoPlay={idx === 0}
                    onLoadedData={() => handleVideoLoad(idx === 0 ? 'meera' : 'kaushik')}
                  >
                    <source src={singer.videoUrl} type="video/mp4" />
                  </video>
                  <div className="mtv-theep-card-overlay" />
                  {/* Live badge */}
                  <div className="mtv-theep-live-badge">
                    <span className="mtv-theep-live-dot" />
                    LIVE
                  </div>
                  {/* Card label */}
                  <div className="mtv-theep-card-label">
                    <span>Performance</span>
                    <span className="mtv-theep-card-label-name" style={{ color: singer.accentColor }}>
                      {singer.fullName}
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 2 — Portrait card (front, tilted left) */}
              <div className="mtv-theep-card mtv-theep-card-portrait"
                style={{ '--accent': singer.accentColor }}>
                <div className="mtv-theep-card-inner">
                  <img
                    src={singer.posterImage}
                    alt={singer.fullName}
                    className="mtv-theep-card-media"
                  />
                  <div className="mtv-theep-card-overlay" />
                  {/* Portrait bottom info */}
                  <div className="mtv-theep-card-label">
                    <span>Artist</span>
                    <span className="mtv-theep-card-label-name" style={{ color: singer.accentColor }}>
                      {singer.fullName}
                    </span>
                  </div>
                  {/* Specialty badge top-right */}
                  <div className="mtv-theep-card-badge" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
                    {singer.specialty.split('•')[0].trim()}
                  </div>
                </div>
              </div>

              {/* Glow blob behind cards */}
              <div className="mtv-theep-card-glow" style={{ background: singer.accentColor }} />

            </div>
          </div>
        ))}
      </div>

      {/* ── BOTTOM NAV ARROWS ── */}
      <div className="mtv-nav-arrows">
        <button
          className={`mtv-nav-arrow prev ${activeIndex === 0 ? 'disabled' : ''}`}
          onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button
          className={`mtv-nav-arrow next ${activeIndex === singers.length - 1 ? 'disabled' : ''}`}
          onClick={() => activeIndex < singers.length - 1 && setActiveIndex(activeIndex + 1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="mtv-scroll-progress">
        <div className="mtv-progress-bar" style={{ transform: `scaleX(${progress})`, background: currentSinger.accentColor }} />
      </div>

    </section>
  );
};

export default MeetTheVoices;