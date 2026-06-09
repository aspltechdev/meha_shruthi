// // import { useEffect, useRef, useState } from 'react';
// // import './MusicBeyondBorders.css';

// // const countries = [
// //   {
// //     name: "Canada",
// //     image: "/images/countries/canada.jpg",
// //     flag: "🇨🇦",
// //     color: "#ff4444"
// //   },
// //   {
// //     name: "United Kingdom",
// //     image: "/images/countries/uk.jpg",
// //     flag: "🇬🇧",
// //     color: "#4169e1"
// //   },
// //   {
// //     name: "Australia",
// //     image: "/images/countries/australia.jpg",
// //     flag: "🇦🇺",
// //     color: "#ffb400"
// //   },
// //   {
// //     name: "Denmark",
// //     image: "/images/countries/denmark.jpg",
// //     flag: "🇩🇰",
// //     color: "#c0392b"
// //   },
// //   {
// //     name: "Switzerland",
// //     image: "/images/countries/switzerland.jpg",
// //     flag: "🇨🇭",
// //     color: "#ff6b6b"
// //   },
// //   {
// //     name: "Singapore",
// //     image: "/images/countries/singapore.jpg",
// //     flag: "🇸🇬",
// //     color: "#e74c3c"
// //   },
// //   {
// //     name: "Malaysia",
// //     image: "/images/countries/malaysia.jpg",
// //     flag: "🇲🇾",
// //     color: "#ffb400"
// //   },
// //   {
// //     name: "Sri Lanka",
// //     image: "/images/countries/srilanka.jpg",
// //     flag: "🇱🇰",
// //     color: "#ff6b00"
// //   },
// // ];

// // const MusicBeyondBorders = () => {
// //   const [hoveredIndex, setHoveredIndex] = useState(null);
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       if (!sectionRef.current) return;
// //       const rect = sectionRef.current.getBoundingClientRect();
// //       setMousePosition({
// //         x: ((e.clientX - rect.left) / rect.width) * 100,
// //         y: ((e.clientY - rect.top) / rect.height) * 100
// //       });
// //     };

// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   return (
// //     <section className="mbb-section" ref={sectionRef}>
// //       {/* World Map Background */}
// //       <div className="mbb-world-bg">
// //         <div className="mbb-world-grid">
// //           {[...Array(12)].map((_, i) => (
// //             <div key={i} className="mbb-grid-line mbb-grid-horizontal" style={{ top: `${(i + 1) * 8}%` }}></div>
// //           ))}
// //           {[...Array(12)].map((_, i) => (
// //             <div key={i} className="mbb-grid-line mbb-grid-vertical" style={{ left: `${(i + 1) * 8}%` }}></div>
// //           ))}
// //         </div>
        
// //         {/* Glowing dots representing cities */}
// //         <div className="mbb-city-dots">
// //           {[...Array(15)].map((_, i) => (
// //             <div
// //               key={i}
// //               className="mbb-city-dot"
// //               style={{
// //                 left: `${10 + Math.random() * 80}%`,
// //                 top: `${10 + Math.random() * 80}%`,
// //                 animationDelay: `${Math.random() * 3}s`
// //               }}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       {/* Mouse Follow Glow */}
// //       <div 
// //         className="mbb-mouse-glow"
// //         style={{
// //           background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 180, 0, 0.08) 0%, transparent 50%)`
// //         }}
// //       />

// //       {/* Floating Particles */}
// //       <div className="mbb-particles">
// //         {[...Array(25)].map((_, i) => (
// //           <div
// //             key={i}
// //             className="mbb-particle"
// //             style={{
// //               left: `${Math.random() * 100}%`,
// //               animationDelay: `${Math.random() * 8}s`,
// //               animationDuration: `${4 + Math.random() * 6}s`
// //             }}
// //           />
// //         ))}
// //       </div>

// //       {/* Header */}
// //       <div className="mbb-header">
// //         <div className="mbb-header-top">
// //           <div className="mbb-globe-icon">
// //             <span className="mbb-globe">🌍</span>
// //           </div>
// //           <span className="mbb-header-tag">MUSIC BEYOND BORDERS</span>
// //         </div>

// //         <h2 className="mbb-headline">
// //           <span className="mbb-headline-word">One</span>
// //           <span className="mbb-headline-word mbb-headline-accent">Passion.</span>
// //           <span className="mbb-headline-word">Many</span>
// //           <span className="mbb-headline-word mbb-headline-accent">Countries.</span>
// //         </h2>

// //         <p className="mbb-subtitle">
// //           From intimate stages to international audiences, 
// //           music has taken us around the world.
// //         </p>
// //       </div>

// //       {/* Countries Grid */}
// //       <div className="mbb-grid">
// //         {countries.map((country, index) => (
// //           <div
// //             className={`mbb-card ${hoveredIndex === index ? 'mbb-card-hovered' : ''}`}
// //             key={index}
// //             onMouseEnter={() => setHoveredIndex(index)}
// //             onMouseLeave={() => setHoveredIndex(null)}
// //             style={{ '--country-color': country.color }}
// //           >
// //             {/* Card Number */}
// //             <div className="mbb-card-number">
// //               {(index + 1).toString().padStart(2, "0")}
// //             </div>

// //             {/* Image Container */}
// //             <div className="mbb-card-image-wrap">
// //               <img
// //                 src={country.image}
// //                 alt={country.name}
// //                 className="mbb-card-img"
// //                 onError={(e) => {
// //                   e.target.style.display = 'none';
// //                 }}
// //               />
              
// //               {/* Overlay */}
// //               <div className="mbb-card-overlay"></div>
              
// //               {/* Color gradient on hover */}
// //               <div 
// //                 className="mbb-card-color-wash"
// //                 style={{ background: `linear-gradient(135deg, ${country.color}40, ${country.color}10)` }}
// //               ></div>

// //               {/* Flag Badge */}
// //               <div className="mbb-card-flag">
// //                 <span className="mbb-flag-emoji">{country.flag}</span>
// //               </div>
// //             </div>

// //             {/* Content */}
// //             <div className="mbb-card-content">
// //               <h3 className="mbb-card-name">{country.name}</h3>
              
// //               {/* Location pin */}
// //               <div className="mbb-card-pin">
// //                 <span className="mbb-pin-icon">📍</span>
// //               </div>
// //             </div>

// //             {/* Hover border glow */}
// //             <div 
// //               className="mbb-card-border-glow"
// //               style={{ boxShadow: hoveredIndex === index ? `inset 0 0 0 1px ${country.color}40` : 'none' }}
// //             ></div>

// //             {/* Bottom accent */}
// //             <div 
// //               className="mbb-card-accent"
// //               style={{ background: country.color }}
// //             ></div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Journey Message */}
// //       <div className="mbb-journey">
// //         <div className="mbb-journey-inner">
// //           <div className="mbb-journey-line mbb-journey-line-left"></div>
          
// //           <div className="mbb-journey-content">
// //             <h2 className="mbb-journey-headline">
// //               <span className="mbb-journey-word">Thousands</span>
// //               <span className="mbb-journey-word">Of Miles.</span>
// //               <span className="mbb-journey-word mbb-journey-gold">Millions</span>
// //               <span className="mbb-journey-word mbb-journey-gold">Of Memories.</span>
// //             </h2>
            
// //             <div className="mbb-journey-dots">
// //               <span className="mbb-journey-dot"></span>
// //               <span className="mbb-journey-dot"></span>
// //               <span className="mbb-journey-dot"></span>
// //             </div>
// //           </div>
          
// //           <div className="mbb-journey-line mbb-journey-line-right"></div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default MusicBeyondBorders;

// import { useEffect, useRef, useState } from 'react';
// import './MusicBeyondBorders.css';

// const countries = [
//   {
//     name: "Canada",
//     image: "/images/countries/canada.jpg",
//     flag: "🇨🇦",
//     city: "Toronto",
//     year: "2019",
//     landmark: "CN Tower"
//   },
//   {
//     name: "United Kingdom",
//     image: "/images/countries/uk.jpg",
//     flag: "🇬🇧",
//     city: "London",
//     year: "2018",
//     landmark: "Royal Albert Hall"
//   },
//   {
//     name: "Australia",
//     image: "/images/countries/australia.jpg",
//     flag: "🇦🇺",
//     city: "Sydney",
//     year: "2020",
//     landmark: "Opera House"
//   },
//   {
//     name: "Denmark",
//     image: "/images/countries/denmark.jpg",
//     flag: "🇩🇰",
//     city: "Copenhagen",
//     year: "2022",
//     landmark: "Tivoli Gardens"
//   },
//   {
//     name: "Switzerland",
//     image: "/images/countries/switzerland.jpg",
//     flag: "🇨🇭",
//     city: "Zurich",
//     year: "2021",
//     landmark: "Lake Zurich"
//   },
//   {
//     name: "Singapore",
//     image: "/images/countries/singapore.jpg",
//     flag: "🇸🇬",
//     city: "Marina Bay",
//     year: "2019",
//     landmark: "Esplanade"
//   },
//   {
//     name: "Malaysia",
//     image: "/images/countries/malaysia.jpg",
//     flag: "🇲🇾",
//     city: "Kuala Lumpur",
//     year: "2023",
//     landmark: "Petronas Towers"
//   },
//   {
//     name: "Sri Lanka",
//     image: "/images/countries/srilanka.jpg",
//     flag: "🇱🇰",
//     city: "Colombo",
//     year: "2017",
//     landmark: "Nelum Pokuna"
//   },
// ];

// const MusicBeyondBorders = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const scrollRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!scrollRef.current) return;
//       const container = scrollRef.current;
//       const scrollProgress = container.scrollLeft / (container.scrollWidth - container.clientWidth);
//       const index = Math.round(scrollProgress * (countries.length - 1));
//       setActiveIndex(Math.min(index, countries.length - 1));
//     };

//     const container = scrollRef.current;
//     if (container) {
//       container.addEventListener('scroll', handleScroll);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - scrollRef.current.offsetLeft);
//     setScrollLeft(scrollRef.current.scrollLeft);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   return (
//     <section className="mbb-section" ref={sectionRef}>
//       {/* World Map Watermark */}
//       <div className="mbb-map-bg">
//         <div className="mbb-meridians">
//           {[...Array(8)].map((_, i) => (
//             <div 
//               key={i} 
//               className="mbb-meridian"
//               style={{ 
//                 left: `${12.5 * (i + 1)}%`,
//                 animationDelay: `${i * 0.5}s`
//               }}
//             ></div>
//           ))}
//         </div>
//         <div className="mbb-parallels">
//           {[...Array(5)].map((_, i) => (
//             <div 
//               key={i} 
//               className="mbb-parallel"
//               style={{ 
//                 top: `${20 * (i + 1)}%`,
//                 animationDelay: `${i * 0.7}s`
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>

//       {/* Compass Rose */}
//       <div className="mbb-compass">
//         <div className="mbb-compass-inner">
//           <span className="mbb-compass-n">N</span>
//           <span className="mbb-compass-s">S</span>
//           <span className="mbb-compass-e">E</span>
//           <span className="mbb-compass-w">W</span>
//           <div className="mbb-compass-needle"></div>
//         </div>
//       </div>

//       {/* Header */}
//       <div className="mbb-header">
//         {/* <div className="mbb-header-stamp">
//           <span className="mbb-stamp-text">PASSPORT</span>
//         </div> */}
        
//         <h2 className="mbb-headline">
//           <span className="mbb-headline-top">Music Beyond</span>
//           <span className="mbb-headline-bottom">Borders</span>
//           <div className="mbb-headline-line"></div>
//         </h2>

//         <div className="mbb-stats-row">
//           <div className="mbb-stat-item">
//             <span className="mbb-stat-number">8+</span>
//             <span className="mbb-stat-label">Countries</span>
//           </div>
//           <div className="mbb-stat-divider"></div>
//           <div className="mbb-stat-item">
//             <span className="mbb-stat-number">15+</span>
//             <span className="mbb-stat-label">Cities</span>
//           </div>
//           <div className="mbb-stat-divider"></div>
//           <div className="mbb-stat-item">
//             <span className="mbb-stat-number">50+</span>
//             <span className="mbb-stat-label">Shows</span>
//           </div>
//         </div>
//       </div>

//       {/* Horizontal Scroll Container */}
//       <div 
//         className="mbb-scroll-container"
//         ref={scrollRef}
//         onMouseDown={handleMouseDown}
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseUp}
//         onMouseMove={handleMouseMove}
//       >
//         <div className="mbb-scroll-track">
//           {/* Flight Path Connector */}
//           <div className="mbb-flight-path">
//             <svg className="mbb-path-svg" viewBox="0 0 100 20" preserveAspectRatio="none">
//               <path 
//                 d="M0 10 Q 5 5, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10 T 70 10 T 80 10 T 90 10 T 100 10" 
//                 fill="none" 
//                 stroke="rgba(255,180,0,0.2)" 
//                 strokeWidth="0.5"
//                 strokeDasharray="2,4"
//               />
//             </svg>
//             {/* Plane */}
//             {/* <div 
//               className="mbb-plane"
//               style={{ left: `${(activeIndex / (countries.length - 1)) * 100}%` }}
//             >
//               ✈️
//             </div> */}
//           </div>

//           {/* Country Cards */}
//           {countries.map((country, index) => (
//             <div
//               className={`mbb-country-card ${index === activeIndex ? 'mbb-card-active' : ''}`}
//               key={index}
//               style={{
//                 '--card-index': index
//               }}
//             >
//               {/* Passport Stamp */}
//               <div className="mbb-passport-stamp">
//                 <div className="mbb-stamp-circle">
//                   <span className="mbb-stamp-year">{country.year}</span>
//                   <span className="mbb-stamp-flag">{country.flag}</span>
//                 </div>
//               </div>

//               {/* Image Container */}
//               <div className="mbb-card-visual">
//                 <div className="mbb-card-polaroid">
//                   <img
//                     src={country.image}
//                     alt={country.name}
//                     className="mbb-card-img"
//                     onError={(e) => {
//                       e.target.style.display = 'none';
//                     }}
//                   />
//                   <div className="mbb-polaroid-bottom">
//                     <span className="mbb-polaroid-caption">{country.landmark}</span>
//                   </div>
//                 </div>
                
//                 {/* Location Pin */}
//                 <div className="mbb-location-pin">
//                   <div className="mbb-pin-dot"></div>
//                   <div className="mbb-pin-ripple"></div>
//                 </div>
//               </div>

//               {/* Card Info */}
//               <div className="mbb-card-details">
//                 <div className="mbb-card-header">
//                   <span className="mbb-card-number">
//                     {(index + 1).toString().padStart(2, "0")}
//                   </span>
//                   <span className="mbb-card-flag-lg">{country.flag}</span>
//                 </div>
                
//                 <h3 className="mbb-card-country">{country.name}</h3>
//                 <p className="mbb-card-city">{country.city}</p>
                
//                 <div className="mbb-card-coordinates">
//                   <span className="mbb-coord-icon">📍</span>
//                   <span className="mbb-coord-text">{country.landmark}</span>
//                 </div>
//               </div>

//               {/* Active Glow */}
//               <div className="mbb-card-aura"></div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="mbb-scroll-indicator">
//         <div className="mbb-indicator-track">
//           <div 
//             className="mbb-indicator-fill"
//             style={{ width: `${((activeIndex + 1) / countries.length) * 100}%` }}
//           ></div>
//         </div>
//         <span className="mbb-indicator-text">
//           Swipe or scroll to explore
//         </span>
//       </div>

//       {/* Bottom Message */}
//       <div className="mbb-closing">
//         <div className="mbb-closing-content">
//           <div className="mbb-closing-icon">🌏</div>
//           <p className="mbb-closing-text">
//             Thousands of miles traveled. Millions of hearts touched.
//           </p>
//           <div className="mbb-closing-dots">
//             <span></span><span></span><span></span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MusicBeyondBorders;




/* ==========================================
   SECTION
========================================== */

.mbb-section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 100px 0;

  background:
    radial-gradient(circle at 15% 20%, rgba(232,218,198,.55), transparent 35%),
    radial-gradient(circle at 85% 25%, rgba(250,245,238,.75), transparent 40%),
    radial-gradient(circle at 30% 75%, rgba(221,204,181,.45), transparent 35%),
    radial-gradient(circle at 80% 80%, rgba(243,233,220,.5), transparent 35%),
    linear-gradient(
      135deg,
      #fffdf9 0%,
      #fcf8f2 35%,
      #f5efe6 70%,
      #fffcf8 100%
    );
}

.mbb-section::before {
  content: "";
  position: absolute;
  inset: 0;

  pointer-events: none;

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,.35),
      rgba(255,255,255,.05)
    );

  backdrop-filter: blur(40px);

  opacity: .7;
}

.mbb-section::after {
  content: "";
  position: absolute;
  inset: 0;

  pointer-events: none;

  opacity: .035;

  background-image:
    radial-gradient(#000 .5px, transparent .5px);

  background-size: 5px 5px;
}

/* ==========================================
   GLOBE
========================================== */

.mbb-globe-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.mbb-globe {
  position: absolute;

  top: 120px;
  right: 120px;

  width: 220px;
  height: 220px;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,.45),
      rgba(255,255,255,.12)
    );

  backdrop-filter: blur(30px);

  border: 1px solid rgba(196,170,138,.25);

  box-shadow:
    0 30px 60px rgba(184,154,120,.12),
    inset 0 1px 0 rgba(255,255,255,.8);

  transition: transform .5s ease;
}

.mbb-globe-line {
  position: absolute;
  inset: 0;

  border: 1px solid rgba(181,139,98,.12);
  border-radius: 50%;
}

.mbb-globe-parallel-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;

  background: rgba(181,139,98,.1);
}

.mbb-globe-dot {
  position: absolute;

  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: rgba(181,139,98,.35);
}

.mbb-dot-active {
  background: #c6a37b;

  transform: scale(1.5);

  box-shadow:
    0 0 20px rgba(198,163,123,.5);
}

.mbb-dot-tooltip {
  display: none;
}

.mbb-globe-glow {
  position: absolute;

  top: 120px;
  right: 120px;

  width: 220px;
  height: 220px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(198,163,123,.08),
      transparent 70%
    );

  animation: mbbGlow 4s ease-in-out infinite;
}

@keyframes mbbGlow {
  50% {
    transform: scale(1.1);
  }
}

/* ==========================================
   HEADER
========================================== */

.mbb-header {
  position: relative;
  z-index: 2;

  text-align: center;

  margin-bottom: 60px;
}

.mbb-header-badge {
  display: inline-flex;

  gap: 12px;
  align-items: center;

  font-size: 11px;
  font-weight: 700;

  letter-spacing: 6px;

  color: #b38a63;

  margin-bottom: 24px;
}

.mbb-badge-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #c6a37b;
}

.mbb-headline {
  margin-bottom: 32px;
}

.mbb-headline-main {
  display: block;

  font-size: clamp(3rem,7vw,6rem);
  font-weight: 900;

  color: #111827;
}

.mbb-headline-accent {
  display: block;

  font-size: clamp(3rem,7vw,6rem);
  font-weight: 900;

  background:
    linear-gradient(
      135deg,
      #b58b62,
      #d8c0a1,
      #9e7d58
    );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mbb-header-metrics {
  display: flex;

  justify-content: center;
  gap: 24px;
}

.mbb-metric-value {
  display: block;

  font-size: 30px;
  font-weight: 800;

  color: #b58b62;
}

.mbb-metric-unit {
  font-size: 11px;

  letter-spacing: 3px;

  text-transform: uppercase;

  color: rgba(17,24,39,.6);
}

.mbb-metric-divider {
  color: rgba(17,24,39,.2);
}

/* ==========================================
   SHOWCASE
========================================== */

.mbb-showcase {
  position: relative;
  z-index: 2;

  width: min(1200px,92%);
  margin: auto;
}

.mbb-showcase-card {
  overflow: hidden;

  border-radius: 32px;

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,.65),
      rgba(255,255,255,.35)
    );

  backdrop-filter: blur(35px);

  border: 1px solid rgba(198,163,123,.18);

  box-shadow:
    0 30px 80px rgba(184,154,120,.14),
    inset 0 1px 0 rgba(255,255,255,.9);
}

.mbb-showcase-image {
  width: 100%;
  height: 70vh;

  object-fit: cover;

  display: block;
}

.mbb-showcase-content {
  padding: 40px;

  text-align: center;
}

.mbb-showcase-country {
  font-size: clamp(2rem,5vw,3rem);

  font-weight: 800;

  color: #5f4b3a;

  margin-bottom: 12px;
}

.mbb-showcase-city {
  font-size: 18px;

  color: rgba(17,24,39,.65);

  margin-bottom: 20px;
}

.mbb-showcase-year {
  display: inline-block;

  padding: 12px 24px;

  border-radius: 999px;

  background: rgba(255,255,255,.75);

  border: 1px solid rgba(198,163,123,.18);

  color: #a67c52;

  font-weight: 700;
}

/* ==========================================
   TIMELINE
========================================== */

.mbb-horizontal-timeline {
  margin-top: 50px;

  overflow-x: auto;

  scrollbar-width: none;
}

.mbb-horizontal-timeline::-webkit-scrollbar {
  display: none;
}

.mbb-timeline-track {
  position: relative;

  display: flex;

  justify-content: space-between;
  align-items: center;

  min-width: 900px;

  padding: 30px 20px;
}

.mbb-timeline-track::before {
  content: "";

  position: absolute;

  left: 20px;
  right: 20px;
  top: 50%;

  height: 2px;

  background: rgba(17,24,39,.12);
}

.mbb-timeline-item {
  position: relative;
  z-index: 2;

  background: transparent;

  border: none;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;
}

.mbb-timeline-dot {
  width: 18px;
  height: 18px;

  border-radius: 50%;

  background: white;

  border: 2px solid #c6a37b;

  transition: .3s;
}

.mbb-timeline-item.active .mbb-timeline-dot {
  background: #c6a37b;

  transform: scale(1.3);

  box-shadow:
    0 0 20px rgba(198,163,123,.45);
}

.mbb-timeline-year {
  font-weight: 700;

  color: rgba(17,24,39,.6);
}

.mbb-timeline-item.active .mbb-timeline-year {
  color: #b58b62;
}

/* ==========================================
   STATEMENT
========================================== */

.mbb-statement {
  text-align: center;

  padding: 120px 20px 80px;

  position: relative;
  z-index: 2;
}

.mbb-statement-bg-text {
  position: absolute;

  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12vw;
  font-weight: 900;

  color: rgba(17,24,39,.03);

  pointer-events: none;
}

.mbb-statement-content {
  position: relative;
}

.mbb-statement-line {
  width: 80px;
  height: 2px;

  margin: auto;

  background:
    linear-gradient(
      90deg,
      transparent,
      #c6a37b,
      transparent
    );
}

.mbb-statement-quote {
  font-size: clamp(1.6rem,3vw,2.6rem);

  font-weight: 300;

  color: #374151;

  margin: 30px 0;
}

.mbb-statement-highlight {
  color: #b58b62;
}

.mbb-statement-flags {
  margin-top: 40px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 16px;
}

.mbb-statement-flag {
  font-size: 28px;

  transition: .3s;
}

.mbb-statement-flag:hover {
  transform: translateY(-6px) scale(1.1);
}

/* ==========================================
   RESPONSIVE
========================================== */

@media (max-width: 768px) {

  .mbb-globe,
  .mbb-globe-glow {
    display: none;
  }

  .mbb-showcase-image {
    height: 50vh;
  }

  .mbb-showcase-content {
    padding: 28px;
  }

  .mbb-horizontal-timeline {
    overflow-x: auto;
  }

  .mbb-timeline-track {
    min-width: 700px;
  }

  .mbb-header-metrics {
    gap: 14px;
  }
}

@media (max-width: 480px) {

  .mbb-showcase-image {
    height: 42vh;
  }

  .mbb-showcase-country {
    font-size: 2rem;
  }

  .mbb-statement-quote {
    font-size: 1.4rem;
  }

  .mbb-statement-flag {
    font-size: 24px;
  }
}