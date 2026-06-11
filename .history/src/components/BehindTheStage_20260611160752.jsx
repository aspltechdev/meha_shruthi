// import { useEffect, useRef, useState } from 'react';
// import './BehindTheStage.css';

// const moments = [
//   {
//     title: "Rehearsals",
//     subtitle: "Where perfection begins",
//     image: "/images/bts/rehearsal.jpg",
//     time: "3:00 AM",
//     icon: "🎼"
//   },
//   {
//     title: "Sound Checks",
//     subtitle: "Every decibel matters",
//     image: "/images/bts/soundcheck.jpg",
//     time: "5:30 AM",
//     icon: "🎛️"
//   },
//   {
//     title: "Stage Setup",
//     subtitle: "Building dreams brick by brick",
//     image: "/images/bts/stage.jpg",
//     time: "8:00 AM",
//     icon: "🏗️"
//   },
//   {
//     title: "Artist Coordination",
//     subtitle: "The art of orchestration",
//     image: "/images/bts/artist.jpg",
//     time: "2:00 PM",
//     icon: "🎭"
//   },
// ];

// const BehindTheStage = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const sectionRef = useRef(null);

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

//   return (
//     <section className="bts-section" ref={sectionRef}>
//       {/* Film Grain Overlay */}
//       <div className="bts-grain"></div>
      
//       {/* Vignette */}
//       <div className="bts-vignette"></div>

//       {/* Mouse Light */}
//       <div 
//         className="bts-mouse-light"
//         style={{
//           background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)`
//         }}
//       />

//       {/* Clapperboard Decoration */}
//       <div className="bts-clapperboard">
//         <div className="bts-clapper-top"></div>
//         <div className="bts-clapper-body">
//           <span className="bts-clapper-text">SCENE</span>
//           <span className="bts-clapper-num">04</span>
//           <span className="bts-clapper-take">TAKE 1</span>
//         </div>
//       </div>

//       {/* Header */}
//       <div className="bts-header">
//         <div className="bts-header-tape">
//           <span>🎬</span>
//           <span className="bts-tape-text">BEHIND THE STAGE</span>
//           <span>🎬</span>
//         </div>

//         <h2 className="bts-headline">
//           <span className="bts-headline-top">Before The</span>
//           <span className="bts-headline-mid">Spotlight</span>
//           <span className="bts-headline-bottom">
//             <span className="bts-headline-comes">Comes The</span>
//             <span className="bts-headline-prep">Preparation</span>
//           </span>
//         </h2>

//         <div className="bts-header-stamp">
//           <span className="bts-stamp-text">EXCLUSIVE</span>
//         </div>
//       </div>

//       {/* Main Grid - Asymmetric Layout */}
//       <div className="bts-layout">
//         {/* Large Feature Card */}
//         <div 
//           className="bts-feature-card"
//           onMouseEnter={() => setActiveIndex(0)}
//           onMouseLeave={() => setActiveIndex(null)}
//         >
//           <div className="bts-feature-image-wrap">
//             <img
//               src={moments[0].image}
//               alt={moments[0].title}
//               className="bts-feature-img"
//               onError={(e) => { e.target.style.display = 'none'; }}
//             />
//             <div className="bts-feature-overlay"></div>
            
//             {/* Timecode */}
//             <div className="bts-timecode">
//               <span className="bts-timecode-dot">●</span>
//               <span className="bts-timecode-text">REC</span>
//               <span className="bts-timecode-time">{moments[0].time}</span>
//             </div>

//             {/* Film strip holes */}
//             <div className="bts-film-holes bts-holes-left">
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="bts-film-hole"></div>
//               ))}
//             </div>
//             <div className="bts-film-holes bts-holes-right">
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="bts-film-hole"></div>
//               ))}
//             </div>
//           </div>

//           <div className="bts-feature-info">
//             <div className="bts-feature-icon">{moments[0].icon}</div>
//             <h3 className="bts-feature-title">{moments[0].title}</h3>
//             <p className="bts-feature-subtitle">{moments[0].subtitle}</p>
//             <div className="bts-feature-line"></div>
//           </div>
//         </div>

//         {/* Side Cards */}
//         <div className="bts-side-cards">
//           {moments.slice(1).map((moment, index) => (
//             <div
//               key={index + 1}
//               className={`bts-side-card ${activeIndex === index + 1 ? 'bts-side-active' : ''}`}
//               onMouseEnter={() => setActiveIndex(index + 1)}
//               onMouseLeave={() => setActiveIndex(null)}
//             >
//               <div className="bts-side-image-wrap">
//                 <img
//                   src={moment.image}
//                   alt={moment.title}
//                   className="bts-side-img"
//                   onError={(e) => { e.target.style.display = 'none'; }}
//                 />
//                 <div className="bts-side-overlay"></div>
                
//                 {/* REC Badge */}
//                 <div className="bts-rec-badge">
//                   <span className="bts-rec-dot"></span>
//                   <span className="bts-rec-text">LIVE</span>
//                 </div>
//               </div>

//               <div className="bts-side-info">
//                 <span className="bts-side-icon">{moment.icon}</span>
//                 <div className="bts-side-text">
//                   <h4 className="bts-side-title">{moment.title}</h4>
//                   <p className="bts-side-desc">{moment.subtitle}</p>
//                 </div>
//                 <span className="bts-side-time">{moment.time}</span>
//               </div>

//               {/* Hover line */}
//               <div className="bts-side-accent"></div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Film Strip */}
//       <div className="bts-film-strip">
//         <div className="bts-film-frame" style={{ transform: `translateX(${-activeIndex * 5 || 0}%)` }}>
//           {[...moments, ...moments].map((moment, i) => (
//             <div key={i} className="bts-film-cell">
//               <img src={moment.image} alt="" className="bts-film-cell-img" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Quote */}
//       <div className="bts-quote">
//         <div className="bts-quote-content">
//           <span className="bts-quote-icon">💡</span>
//           <p className="bts-quote-text">
//             The magic you see on stage is <span>crafted in the shadows</span>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BehindTheStage;

import React, { useRef, useState } from 'react';
import './BehindTheStage.css';

import imageo from '../assets/imgone.jpg';
import imaget from '../assets/imgtwo.jpg';
import imageth from '../assets/imgthree.jpg';
import imagef from '../assets/imgfour.jpg';

const moments = [
  {
    title: 'Rehearsals',
    subtitle: 'produced across South India',
    image: imageo,
   
  },
  {
    title: 'Concerts',
    subtitle: 'electrifying live performances',
    image: imaget,
   
  },
  {
    title: 'Stage Setup',
    subtitle: 'transforming empty spaces',
    image: imageth,
    
  },
  {
    title: 'Artist Coordination',
    subtitle: 'bringing together creative minds',
    image: imagef,
    
  },
];

const BehindTheStage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  return (
    <section
      className="bts-premium-section"
      ref={sectionRef}
    >
      {/* Light Rays */}
      <div className="bts-light-rays">
        <div className="bts-ray" />
        <div className="bts-ray" />
        <div className="bts-ray" />
      </div>

      {/* Header */}
      <header className="bts-premium-header">

        <div className="bts-premium-badge">
          <span className="bts-badge-dot" />
          <span className="bts-badge-text">
            Behind the Stage
          </span>
          <span className="bts-badge-dot" />
        </div>

        <h2 className="bts-premium-title">
          <span className="bts-title-light">
            Before The
          </span>

          <span className="bts-title-gradient">
            Spotlight
          </span>
        </h2>

        <div className="bts-premium-subtitle">
          <span className="bts-subtitle-line" />

          <p>
            Every great performance begins in the shadows
          </p>

          <span className="bts-subtitle-line" />
        </div>

      </header>

      {/* Main Layout */}
      <div className="bts-premium-layout">

        {/* Bento Grid */}
        <div className="bts-cards-grid">

          {moments.map((moment, index) => (
            <div
              key={index}
              className={`
                bts-grid-card
                bts-card-${index + 1}
                ${activeIndex === index ? 'active' : ''}
              `}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >

              {/* Background Image */}
              <div className="bts-grid-media">

                <img
                  src={moment.image}
                  alt={moment.title}
                  className="bts-grid-image"
                />

                <div className="bts-grid-overlay" />

              </div>

              {/* Stat */}
              <div className="bts-grid-time">
                {moment.stat}
              </div>

              {/* Content */}
              <div className="bts-grid-content">

                <div className="bts-grid-label-section">

                  <h3 className="bts-grid-title">
                    {moment.title}
                  </h3>

                  <p className="bts-grid-subtitle">
                    {moment.subtitle}
                  </p>

                </div>

              </div>

              <div className="bts-grid-glow" />

            </div>
          ))}

        </div>

        {/* Horizontal Marquee BELOW Grid */}
        <div className="bts-marquee-wrapper">

          <div className="bts-marquee-track">

            {[...moments, ...moments, ...moments].map(
              (moment, index) => (
                <div
                  key={index}
                  className="bts-marquee-card"
                >

                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="bts-marquee-image"
                  />

                  <div className="bts-marquee-overlay" />

                  <div className="bts-marquee-content">

                    <span className="bts-marquee-time">
                      {moment.stat}
                    </span>

                    <h4>
                      {moment.title}
                    </h4>

                    <p>
                      {moment.subtitle}
                    </p>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default BehindTheStage;