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
import { useEffect, useState } from "react";
import "./MusicBeyondBorders.css";

const countries = [
  {
    name: "Sri Lanka",
    image: "/images/countries/srilanka.jpg",
  
    city: "Colombo",
    year: "2017",
    landmark: "Nelum Pokuna"
  },
  {
    name: "United Kingdom",
    image: "/images/countries/uk.jpg",
  
    city: "London",
    year: "2018",
    landmark: "Royal Albert Hall"
  },
  {
    name: "Canada",
    image: "/images/countries/canada.jpg",
  
    city: "Toronto",
    year: "2019",
    landmark: "CN Tower"
  },
  {
    name: "Singapore",
    image: "/images/countries/singapore.jpg",
    
    city: "Marina Bay",
    year: "2019",
    landmark: "Esplanade"
  },
  {
    name: "Australia",
    image: "/images/countries/australia.jpg",
    
    city: "Sydney",
    year: "2020",
    landmark: "Opera House"
  },
  {
    name: "Switzerland",
    image: "/images/countries/switzerland.jpg",
    
    city: "Zurich",
    year: "2021",
    landmark: "Lake Zurich"
  },
  {
    name: "Denmark",
    image: "/images/countries/denmark.jpg",
    
    city: "Copenhagen",
    year: "2022",
    landmark: "Tivoli Gardens"
  },
  {
    name: "Malaysia",
    image: "/images/countries/malaysia.jpg",
   
    city: "Kuala Lumpur",
    year: "2023",
    landmark: "Petronas Towers"
  }
];

const MusicBeyondBorders = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === countries.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const activeCountry = countries[activeIndex];

  return (
    <section className="mbb-section">
      <div className="mbb-container">
        <div
  className="mbb-timeline"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
  {countries.map((country, index) => (
    <button
      key={index}
      className={`mbb-point ${
        activeIndex === index ? "active" : ""
      }`}
      onClick={() => setActiveIndex(index)}
    >
      <div className="mbb-point-image">
        <img
          src={country.image}
          alt={country.name}
          className="mbb-point-image-img"
        />

        <div className="mbb-point-overlay">
          <span>{country.name}</span>
        </div>
      </div>
    </button>
  ))}
</div>

        {/* RIGHT GLASS BANNER */}
        <div className="mbb-banner">
          {/* Background Image */}
          <div className="mbb-banner-image">
            <img
              src={activeCountry.image}
              alt={activeCountry.name}
            />
          </div>

          {/* Glass Overlay */}
          <div className="mbb-banner-overlay">
            <div className="mbb-content">
              {/* <span className="mbb-heading-small">
              MUSIC BEYOND
            </span> */}

            {/* <h1>BORDERS</h1> */}
              
              {/* <span className="mbb-year">
                
              </span>

              <h2 className="mbb-country">
                {activeCountry.name}
              </h2>

              <p className="mbb-city">
                📍 {activeCountry.city}
              </p>

              <span className="mbb-landmark">
                {activeCountry.landmark}
              </span> */}

              {/* <div className="mbb-tour-tag">
                INTERNATIONAL TOUR
              </div> */}
            </div>
          </div>

          {/* Decorative Title */}
          <div className="mbb-heading">
            <span className="mbb-heading-small">
              MUSIC BEYOND
            </span>

            <h1>BORDERS</h1>
            <div className="mbb-content">
  <span className="mbb-year">
    {activeCountry.year}
  </span>

  <h2 className="mbb-country">
    {activeCountry.name}
  </h2>

  <p className="mbb-city">
    📍 {activeCountry.city}
  </p>

  <span className="mbb-landmark">
    {activeCountry.landmark}
  </span>

  <div className="mbb-tour-tag">
    INTERNATIONAL TOUR
  </div>

  {/* Closing */}
  <div className="mbb-closing">
    <div className="mbb-closing-content">
      <div className="mbb-closing-icon">🌏</div>

      <p className="mbb-closing-text">
        Thousands of miles traveled.
        Millions of hearts touched.
      </p>

      <div className="mbb-closing-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicBeyondBorders;