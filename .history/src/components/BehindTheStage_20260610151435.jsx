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









import React, { useEffect, useRef, useState } from 'react';
import './BehindTheStage.css';
import btsBg from '../assets/bordertwo.jpg';
import imageo from '../assets/imgone.jpg';
import imaget from '../assets/imgtwo.jpg';
import imageth from '../assets/imgthree.jpg';
import imagef from '../assets/imgfour.jpg';

const moments = [
  {
    title: "Rehearsals",
    subtitle: "Where perfection begins",
    image: imageo,
    time: "3:00 AM",
    description: "Hours of practice before the spotlight hits.",
  },
  {
    title: "Sound Checks",
    subtitle: "Every decibel matters",
    image: imaget,
    time: "5:30 AM",
    description: "Fine-tuning each note to perfection.",
  },
  {
    title: "Stage Setup",
    subtitle: "Building dreams brick by brick",
    image: imageth,
    time: "8:00 AM",
    description: "Transforming empty spaces into magical venues.",
  },
  {
    title: "Artist Coordination",
    subtitle: "The art of orchestration",
    image: imagef,
    time: "2:00 PM",
    description: "Bringing together creative minds.",
  },
];

const BehindTheStage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [mousePos, setMousePos] = useState({
    x: 50,
    y: 50,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      setMousePos({
        x:
          ((e.clientX - rect.left) / rect.width) * 100,

        y:
          ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener(
      'mousemove',
      handleMouseMove
    );

    return () =>
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
  }, []);

  return (
    <section
  className="bts-premium-section"
  ref={sectionRef}
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(250,245,235,0.72),
        rgba(250,245,235,0.72)
      ),
      url(${btsBg})   
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
      {/* Background Layers */}
      <div className="bts-premium-bg"></div>

      <div className="bts-premium-pattern"></div>

      <div
        className="bts-spotlight"
        style={{
          background: `
            radial-gradient(
              circle at ${mousePos.x}% ${mousePos.y}%,
              rgba(201,160,61,.12),
              transparent 60%
            )
          `,
        }}
      />

      {/* Light Rays */}
      <div className="bts-light-rays">
        <div className="bts-ray"></div>
        <div className="bts-ray"></div>
        <div className="bts-ray"></div>
      </div>

      {/* Header */}
      <div className="bts-premium-header">
        <div className="bts-premium-badge">
          <span className="bts-badge-dot"></span>

          <span className="bts-badge-text">
            BEHIND THE STAGE
          </span>

          <span className="bts-badge-dot"></span>
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
          <span className="bts-subtitle-line"></span>

          <p>
            Every great performance begins
            in the shadows
          </p>

          <span className="bts-subtitle-line"></span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="bts-premium-layout">

        {/* FEATURE CARD */}
        <div
          className="bts-feature-premium"
          onMouseEnter={() =>
            setActiveIndex(0)
          }
          onMouseLeave={() =>
            setActiveIndex(null)
          }
        >
          <div className="bts-feature-media">
<div className="bts-feature-overlay"></div>
            <img
              src={moments[0].image}
              alt={moments[0].title}
              className="bts-feature-image"
            />

            <div className="bts-feature-overlay"></div>

            {/* <div className="bts-live-badge">
              <span className="bts-live-dot"></span>

              <span className="bts-live-text">
                LIVE RECORDING
              </span>
            </div> */}

            {/* <div className="bts-time-stamp">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  strokeWidth="2"
                />

                <polyline
                  points="12 6 12 12 16 14"
                  strokeWidth="2"
                />
              </svg>

              <span>
                {moments[0].time}
              </span>
            </div>
          </div> */}

          <div className="bts-feature-content">

            <h3 className="bts-feature-title">
              {moments[0].title}
            </h3>

            <p className="bts-feature-subtitle">
              {moments[0].subtitle}
            </p>

            <div className="bts-feature-line"></div>

            <p className="bts-feature-description">
              {moments[0].description}
            </p>

          </div>

          <div className="bts-feature-glow"></div>
        </div>
                {/* SIDE CARDS */}
        <div className="bts-side-grid">
          {moments.slice(1).map((moment, index) => (
            <div
              key={index}
              className={`bts-side-premium ${
                activeIndex === index + 1 ? 'active' : ''
              }`}
              onMouseEnter={() =>
                setActiveIndex(index + 1)
              }
              onMouseLeave={() =>
                setActiveIndex(null)
              }
            >
              <div className="bts-side-media">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="bts-side-image"
                />

                <div className="bts-side-overlay"></div>

                <div className="bts-side-time-badge">
                  <span>{moment.time}</span>
                </div>
              </div>

              <div className="bts-side-content">
                <div className="bts-side-info">
                  <h4 className="bts-side-title">
                    {moment.title}
                  </h4>

                  <p className="bts-side-subtitle">
                    {moment.subtitle}
                  </p>
                </div>

                <div className="bts-side-arrow">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="bts-side-glow"></div>
            </div>
          ))}
        </div>
      </div>

      {/* FILM GALLERY */}
      <div className="bts-film-gallery">
        <div className="bts-gallery-header">
          <span className="bts-gallery-dot"></span>

          <span className="bts-gallery-text">
            BEHIND THE SCENES
          </span>

          <span className="bts-gallery-dot"></span>
        </div>

        <div className="bts-film-strip">
          <div className="bts-strip-track">
            {[...moments, ...moments].map(
              (moment, i) => (
                <div
                  key={i}
                  className="bts-strip-frame"
                >
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="bts-strip-image"
                  />

                  <div className="bts-strip-overlay"></div>

                  <div className="bts-strip-number">
                    {(i % moments.length) + 1}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* QUOTE */}
      <div className="bts-premium-quote">
        <div className="bts-quote-decoration">
          <span className="bts-quote-line"></span>

          <span className="bts-quote-diamond">
            ◈
          </span>

          <span className="bts-quote-line"></span>
        </div>

        <div className="bts-quote-content">
          <span className="bts-quote-mark">
            "
          </span>

          <p className="bts-quote-text">
            The magic you see on stage is{' '}
            <strong>
              crafted in the shadows
            </strong>
          </p>

          <span className="bts-quote-mark">
            "
          </span>
        </div>

        <div className="bts-quote-author">
          <span className="bts-author-line"></span>

          <span>
            Behind Every Performance
          </span>

          <span className="bts-author-line"></span>
        </div>
      </div>
    </section>
  );
};

export default BehindTheStage;