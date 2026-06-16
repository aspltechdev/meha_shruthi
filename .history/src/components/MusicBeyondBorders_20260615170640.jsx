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

import React, { useEffect, useRef, useState } from 'react';
import './MusicBeyondBorders.css';

// Import your background video or image
import bgVideo from '../assets/hero.mp4';
import bgImage from '../assets/musicbeyond.png';
import canadaImg from '../assets/borderone.jpg';
import ukImg from '../assets/bordertwo.jpg';
import australiaImg from '../assets/borderthree.jpg';
import denmarkImg from '../assets/borderfour.jpg';
import switzerlandImg from '../assets/borderfive.jpg';
import singaporeImg from '../assets/bordersix.jpg';
import malaysiaImg from '../assets/borderseven.jpg';
import srilankaImg from '../assets/imgfour.jpg';

const countries = [
  {
    name: "Canada",
    flag: "🇨🇦",
    city: "Toronto",
    year: "2019",
    venue: "Roy Thomson Hall",
    image: canadaImg,
    description: "North American Debut",
    coordinates: { lat: 43.6532, lng: -79.3832 }
  },
  
  {
    name: "Sri Lanka",
    flag: "🇱🇰",
    city: "Colombo",
    year: "2017",
    venue: "Nelum Pokuna",
    image: srilankaImg,
    description: "Isle of Melody",
    coordinates: { lat: 6.9271, lng: 79.8612 }
  },
];

const MusicBeyondBorders = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
      setScrollProgress(progress);

      const cards = document.querySelectorAll('.mbb-cinematic-card');
      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < window.innerHeight * 0.6 && cardRect.bottom > window.innerHeight * 0.4) {
          setActiveIndex(idx);
        }
      });
    };

    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    // Video autoplay with observer
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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="mbb-cinematic-section" ref={sectionRef}>
      {/* ========== FULLSCREEN BACKGROUND VIDEO/IMAGE ========== */}
      <div className="mbb-cinematic-bg">
        <img src={bgImage} alt="" className="mbb-cinematic-bg-video" />
        <div className="mbb-cinematic-bg-overlay"></div>
        <div className="mbb-cinematic-bg-video-wrapper">
          <video
            ref={videoRef}
            className="mbb-cinematic-bg-video"
            autoPlay
            loop
            muted
            playsInline
            poster={bgImage}
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="/videos/global-tour-bg.mp4" type="video/mp4" />
            <img src={bgImage} alt="Global Tour Background" />
          </video>

          {/* Multi-layered overlays for cinematic feel */}
          <div className="mbb-cinematic-bg-overlay"></div>
          <div className="mbb-cinematic-bg-gradient"></div>
          <div className="mbb-cinematic-bg-vignette"></div>
          <div className="mbb-cinematic-bg-pattern"></div>
        </div>
      </div>

      {/* Loading indicator */}
      {!isVideoLoaded && (
        <div className="mbb-cinematic-loader">
          <div className="mbb-cinematic-loader-spinner"></div>
        </div>
      )}

      {/* ========== CINEMATIC EFFECTS ========== */}

      {/* Dynamic Spotlight */}


      {/* Golden Light Rays */}
      <div className="mbb-cinematic-rays">
        <div className="mbb-cinematic-ray"></div>
        <div className="mbb-cinematic-ray"></div>
        <div className="mbb-cinematic-ray"></div>
        <div className="mbb-cinematic-ray"></div>
        <div className="mbb-cinematic-ray"></div>
      </div>

      {/* Floating Particles */}


      {/* Film Grain Effect */}
      <div className="mbb-cinematic-grain"></div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="mbb-cinematic-container">

        {/* Header Section */}
        <div className="mbb-cinematic-header">
          <div className="mbb-cinematic-badge">
            <span className="mbb-cinematic-badge-line"></span>
            <span className="mbb-cinematic-badge-text">GLOBAL TOUR</span>
            <span className="mbb-cinematic-badge-line"></span>
          </div>

          <h1 className="mbb-cinematic-title">
            <span className="mbb-cinematic-title-light">Music</span>
            <span className="mbb-cinematic-title-bold">Beyond Borders</span>
          </h1>

          <div className="mbb-cinematic-divider">
            <div className="mbb-cinematic-divider-line"></div>
            <div className="mbb-cinematic-divider-diamond">◈</div>
            <div className="mbb-cinematic-divider-line"></div>
          </div>

          <p className="mbb-cinematic-subtitle">
            Taking Indian classical music to prestigious venues across the globe
          </p>

          {/* Stats with animated counters */}
          <div className="mbb-cinematic-stats">
            <div className="mbb-cinematic-stat">
              <div className="mbb-cinematic-stat-number" data-target="8">8</div>
              <div className="mbb-cinematic-stat-label">Countries</div>
              <div className="mbb-cinematic-stat-glow"></div>
            </div>
            <div className="mbb-cinematic-stat-sep">◉</div>
            <div className="mbb-cinematic-stat">
              <div className="mbb-cinematic-stat-number" data-target="15">15+</div>
              <div className="mbb-cinematic-stat-label">Cities</div>
              <div className="mbb-cinematic-stat-glow"></div>
            </div>
            <div className="mbb-cinematic-stat-sep">◉</div>
            <div className="mbb-cinematic-stat">
              <div className="mbb-cinematic-stat-number" data-target="50">50+</div>
              <div className="mbb-cinematic-stat-label">Shows</div>
              <div className="mbb-cinematic-stat-glow"></div>
            </div>
          </div>
        </div>

        {/* World Map Visualization */}
        <div className="mbb-cinematic-map">
          <div className="mbb-cinematic-map-line"></div>
          {countries.map((country, idx) => (
            <div
              key={idx}
              className={`mbb-cinematic-map-dot ${idx === activeIndex ? 'active' : ''}`}
              style={{
                left: `${10 + (idx * 12)}%`,
                top: `${20 + (idx % 3) * 25}%`
              }}
            >
              <div className="mbb-cinematic-map-pulse"></div>
              <div className="mbb-cinematic-map-tooltip">{country.city}</div>
            </div>
          ))}
        </div>

        {/* Journey Cards Grid */}
        <div className="mbb-cinematic-grid">
          {countries.map((country, idx) => (
            <div
              key={idx}
              className={`mbb-cinematic-card ${activeIndex === idx ? 'active' : ''} ${hoveredCard === idx ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Card Media */}
              <div className="mbb-cinematic-card-media">
                <img src={country.image} alt={country.name} />
                <div className="mbb-cinematic-card-overlay"></div>
                <div className="mbb-cinematic-card-gradient"></div>

                {/* Badges */}
                <div className="mbb-cinematic-card-flag">{country.flag}</div>
                <div className="mbb-cinematic-card-year">{country.year}</div>
              </div>

              {/* Card Content */}
              <div className="mbb-cinematic-card-content">
                <div className="mbb-cinematic-card-number">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="mbb-cinematic-card-title">{country.name}</h3>
                <p className="mbb-cinematic-card-location">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" strokeWidth="1.5" />
                  </svg>
                  {country.city}
                </p>
                <p className="mbb-cinematic-card-venue">{country.venue}</p>
                <p className="mbb-cinematic-card-desc">{country.description}</p>
                <div className="mbb-cinematic-card-line"></div>
                <div className="mbb-cinematic-card-tag">International Tour</div>
              </div>

              {/* Hover Reveal */}
              {/* <div className="mbb-cinematic-card-hover">
                <span>Discover Journey</span>
                <span className="mbb-cinematic-card-arrow">→</span>
              </div> */}

              {/* Card Glow */}
              <div className="mbb-cinematic-card-glow"></div>

              {/* Corner Accents */}
              <div className="mbb-cinematic-card-corner tl"></div>
              <div className="mbb-cinematic-card-corner tr"></div>
              <div className="mbb-cinematic-card-corner bl"></div>
              <div className="mbb-cinematic-card-corner br"></div>
            </div>
          ))}
        </div>

        {/* Cinematic Timeline */}
        {/* <div className="mbb-cinematic-timeline">
          <div className="mbb-cinematic-timeline-track">
            <div className="mbb-cinematic-timeline-line"></div>
            <div 
              className="mbb-cinematic-timeline-progress"
              style={{ width: `${scrollProgress * 100}%` }}
            ></div>
          </div>
          <div className="mbb-cinematic-timeline-dots">
            {countries.map((country, i) => (
              <div 
                key={i} 
                className={`mbb-cinematic-timeline-dot ${i === activeIndex ? 'active' : ''} ${i < activeIndex ? 'completed' : ''}`}
              >
                <span className="mbb-cinematic-timeline-year">{country.year}</span>
                <span className="mbb-cinematic-timeline-city">{country.city}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Footer Statement */}
        <div className="mbb-cinematic-footer">
          <div className="mbb-cinematic-footer-line"></div>

          <div className="mbb-cinematic-footer-quote">
            <div className="mbb-cinematic-quote-mark">“</div>
            <div className="mbb-cinematic-quote-text">
              <span>Thousands of miles traveled.</span>
              <strong>Millions of hearts touched.</strong>
            </div>
            <div className="mbb-cinematic-quote-mark">”</div>
          </div>

          <div className="mbb-cinematic-footer-flags">
            {countries.map((c, i) => (
              <div key={i} className="mbb-cinematic-flag" style={{ animationDelay: `${i * 0.04}s` }}>
                <span className="mbb-cinematic-flag-icon">{c.flag}</span>
                <span className="mbb-cinematic-flag-name">{c.name}</span>
              </div>
            ))}
          </div>

          <button className="mbb-cinematic-cta">
            <span>Explore Global Journey</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="mbb-cinematic-cta-shine"></div>
          </button>
        </div>
      </div>

      {/* ========== BOTTOM AUDIO VISUALIZER ========== */}
      {/* <div className="mbb-cinematic-audio">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="mbb-cinematic-audio-bar"
            style={{
              animationDelay: `${i * 0.06}s`,
              height: `${8 + (i % 14)}px`
            }}
          />
        ))}
      </div> */}

      ========== SCROLL PROGRESS RING ==========
      {/* <div className="mbb-cinematic-scroll-ring">
        <svg viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="22" fill="none" stroke="rgba(201,160,61,0.2)" strokeWidth="2" />
          <circle
            cx="25"
            cy="25"
            r="22"
            fill="none"
            stroke="#c9a03d"
            strokeWidth="2"
            strokeDasharray="138.2"
            strokeDashoffset={138.2 * (1 - scrollProgress)}
            transform="rotate(-90 25 25)"
          />
        </svg> */}
        {/* <span className="mbb-cinematic-ring-text">{Math.floor(scrollProgress * 100)}%</span> */}
      </div>

    </section>
  );
};

export default MusicBeyondBorders;