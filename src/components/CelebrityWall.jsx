// import { useEffect, useRef, useState } from 'react';
// import './CelebrityWall.css';

// const celebrities = [
//   {
//     name: "Mano",
//     role: "Legendary Playback Singer",
//     image: "/images/celebrities/mano.jpg",
//     accent: "#ffb400"
//   },
//   {
//     name: "Vani Jayaram",
//     role: "Padma Bhushan Awardee",
//     image: "/images/celebrities/vani.jpg",
//     accent: "#c9a96e"
//   },
//   {
//     name: "Haricharan",
//     role: "Playback Singer",
//     image: "/images/celebrities/haricharan.jpg",
//     accent: "#ff6b6b"
//   },
//   {
//     name: "Shweta Mohan",
//     role: "Playback Singer",
//     image: "/images/celebrities/shweta.jpg",
//     accent: "#a78bfa"
//   },
//   {
//     name: "Stephen Devassy",
//     role: "Music Composer & Pianist",
//     image: "/images/celebrities/stephen.jpg",
//     accent: "#4ecdc4"
//   },
//   {
//     name: "Rajesh Vaidhya",
//     role: "Veena Maestro",
//     image: "/images/celebrities/rajesh.jpg",
//     accent: "#ffb400"
//   },
//   {
//     name: "Saindhavi",
//     role: "Playback Singer",
//     image: "/images/celebrities/saindhavi.jpg",
//     accent: "#ff6b00"
//   },
//   {
//     name: "Devan Ekambaram",
//     role: "Playback Singer",
//     image: "/images/celebrities/devan.jpg",
//     accent: "#c9a96e"
//   },
// ];

// const CelebrityWall = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const sectionRef = useRef(null);
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       setMousePosition({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section className="cw-section" ref={sectionRef}>
//       {/* Dynamic Background */}
//       <div 
//         className="cw-bg-aura"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 180, 0, 0.06) 0%, transparent 50%)`
//         }}
//       />

//       {/* Ambient Particles */}
//       <div className="cw-particles">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="cw-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 6}s`,
//               animationDuration: `${3 + Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Header */}
//       <div className="cw-header">
//         <div className="cw-header-top">
//           <span className="cw-header-tag">COLLABORATIONS</span>
//           <div className="cw-header-sparkle">✦</div>
//           <span className="cw-header-tag">LEGENDS</span>
//         </div>

//         <h2 className="cw-headline">
//           <span className="cw-headline-line">Shared The Stage</span>
//           <span className="cw-headline-line cw-headline-gold">With Legends</span>
//         </h2>

//         <p className="cw-subtitle">
//           A journey filled with performances alongside
//           some of the most celebrated names in Indian music.
//         </p>
//       </div>

//       {/* Celebrity Grid */}
//       <div className="cw-grid" ref={gridRef}>
//         {celebrities.map((artist, index) => (
//           <div
//             className={`cw-card ${hoveredIndex === index ? 'cw-card-hovered' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'cw-card-dimmed' : ''}`}
//             key={index}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             style={{ '--card-accent': artist.accent }}
//           >
//             {/* Card Image Container */}
//             <div className="cw-card-image-wrap">
//               <img
//                 src={artist.image}
//                 alt={artist.name}
//                 className="cw-card-img"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                 }}
//               />
              
//               {/* Image Overlay */}
//               <div className="cw-card-overlay"></div>
              
//               {/* Hover Gradient */}
//               <div 
//                 className="cw-card-gradient"
//                 style={{ background: `linear-gradient(0deg, ${artist.accent}40 0%, transparent 60%)` }}
//               ></div>

//               {/* Frame Border */}
//               <div className="cw-card-frame">
//                 <div className="cw-frame-corner cw-frame-tl"></div>
//                 <div className="cw-frame-corner cw-frame-tr"></div>
//                 <div className="cw-frame-corner cw-frame-bl"></div>
//                 <div className="cw-frame-corner cw-frame-br"></div>
//               </div>

//               {/* Energy Glow */}
//               <div 
//                 className="cw-card-energy"
//                 style={{ 
//                   boxShadow: hoveredIndex === index ? `0 0 60px ${artist.accent}30` : 'none'
//                 }}
//               ></div>
//             </div>

//             {/* Card Info */}
//             <div className="cw-card-info">
//               <h3 className="cw-card-name">{artist.name}</h3>
//               <p className="cw-card-role">{artist.role}</p>
              
//               {/* Accent Line */}
//               <div 
//                 className="cw-card-accent"
//                 style={{ background: artist.accent }}
//               ></div>
//             </div>

//             {/* Hover Spotlight */}
//             <div 
//               className="cw-card-spotlight"
//               style={{ 
//                 background: `radial-gradient(circle at center, ${artist.accent}20, transparent 70%)`,
//                 opacity: hoveredIndex === index ? 1 : 0
//               }}
//             ></div>
//           </div>
//         ))}
//       </div>

//       {/* Statement Section */}
//       <div className="cw-statement">
//         <div className="cw-statement-bg">
//           <div className="cw-statement-circle cw-statement-circle-1"></div>
//           <div className="cw-statement-circle cw-statement-circle-2"></div>
//         </div>

//         <div className="cw-statement-content">
//           <div className="cw-statement-number">
//             <span className="cw-number-big">100+</span>
//             <div className="cw-number-glow"></div>
//           </div>

//           <h2 className="cw-statement-headline">
//             <span className="cw-statement-line">Artists</span>
//             <span className="cw-statement-line cw-statement-gold">One Vision</span>
//           </h2>

//           <p className="cw-statement-desc">
//             Creating unforgettable entertainment
//             experiences through collaboration,
//             passion and music.
//           </p>

//           <div className="cw-statement-accent"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CelebrityWall;



import React, { useEffect, useRef, useState } from 'react';
import './CelebrityWall.css';

const celebrities = [
  {
    name: "Mano",
    role: "Legendary Playback Singer",
    image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg",
    accent: "#c9a03d"
  },
  {
    name: "Vani Jayaram",
    role: "Padma Bhushan Awardee",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    accent: "#daa520"
  },
  {
    name: "Haricharan",
    role: "Playback Singer",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    accent: "#b8860b"
  },
  {
    name: "Shweta Mohan",
    role: "Playback Singer",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
    accent: "#c9a03d"
  },
  {
    name: "Stephen Devassy",
    role: "Music Composer & Pianist",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    accent: "#daa520"
  },
  {
    name: "Rajesh Vaidhya",
    role: "Veena Maestro",
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    accent: "#c9a03d"
  },
  {
    name: "Saindhavi",
    role: "Playback Singer",
    image: "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
    accent: "#b8860b"
  },
  {
    name: "Devan Ekambaram",
    role: "Playback Singer",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    accent: "#daa520"
  },
];

const CelebrityWall = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="cw-premium-section" ref={sectionRef}>
      {/* Premium Light Background */}
      <div className="cw-premium-bg"></div>
      <div className="cw-premium-pattern"></div>
      <div className="cw-premium-glow"></div>

      {/* Dynamic Spotlight */}
      <div 
        className="cw-premium-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(201, 160, 61, 0.1) 0%, rgba(201, 160, 61, 0.03) 40%, transparent 70%)`
        }}
      />

      {/* Cinematic Light Rays */}
      <div className="cw-premium-rays">
        <div className="cw-premium-ray"></div>
        <div className="cw-premium-ray"></div>
        <div className="cw-premium-ray"></div>
        <div className="cw-premium-ray"></div>
      </div>

      {/* Floating Particles */}
      <div className="cw-premium-particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="cw-premium-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 8}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="cw-premium-container">
        {/* Header */}
        <div className="cw-premium-header">
          <div className="cw-premium-badge">
            <span className="cw-premium-badge-dot"></span>
            <span className="cw-premium-badge-text">COLLABORATIONS</span>
            <span className="cw-premium-badge-dot"></span>
          </div>

          <h2 className="cw-premium-title">
            <span className="cw-premium-title-light">Shared The Stage</span>
            <span className="cw-premium-title-bold">With Legends</span>
          </h2>

          <div className="cw-premium-divider">
            <span className="cw-premium-divider-line"></span>
            <span className="cw-premium-divider-diamond">◈</span>
            <span className="cw-premium-divider-line"></span>
          </div>

          <p className="cw-premium-subtitle">
            A journey filled with performances alongside some of the most celebrated names in Indian music.
          </p>
        </div>

        {/* Celebrity Grid */}
        <div className="cw-premium-grid" ref={gridRef}>
          {celebrities.map((artist, index) => (
            <div
              key={index}
              className={`cw-premium-card ${isVisible ? 'visible' : ''} ${hoveredIndex === index ? 'hovered' : ''}`}
              style={{ transitionDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Image */}
              <div className="cw-premium-card-image">
                <img src={artist.image} alt={artist.name} />
                <div className="cw-premium-card-overlay"></div>
                
                {/* Hover Gradient */}
                <div 
                  className="cw-premium-card-gradient"
                  style={{ background: `linear-gradient(180deg, transparent 40%, ${artist.accent}20 100%)` }}
                ></div>

                {/* Frame Border */}
                <div className="cw-premium-card-frame">
                  <div className="cw-premium-frame-corner tl"></div>
                  <div className="cw-premium-frame-corner tr"></div>
                  <div className="cw-premium-frame-corner bl"></div>
                  <div className="cw-premium-frame-corner br"></div>
                </div>
              </div>

              {/* Card Info Overlay */}
              <div className="cw-premium-card-info">
                <h3 className="cw-premium-card-name">{artist.name}</h3>
                <p className="cw-premium-card-role">{artist.role}</p>
                <div 
                  className="cw-premium-card-accent"
                  style={{ background: artist.accent }}
                ></div>
              </div>

              {/* Hover Effect */}
              <div className="cw-premium-card-hover">
                <span className="cw-premium-hover-text">View Profile</span>
                <span className="cw-premium-hover-arrow">→</span>
              </div>

              {/* Card Glow */}
              <div 
                className="cw-premium-card-glow"
                style={{ 
                  background: `radial-gradient(circle at 50% 50%, ${artist.accent}15, transparent)`,
                  opacity: hoveredIndex === index ? 1 : 0
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Statement Section */}
        <div className="cw-premium-statement">
          <div className="cw-premium-statement-content">
            <div className="cw-premium-statement-number">
              <span className="cw-premium-statement-number-big">100+</span>
              <div className="cw-premium-statement-number-line"></div>
            </div>
            
            <div className="cw-premium-statement-text">
              <h2 className="cw-premium-statement-headline">
                <span>Artists</span>
                <span>One Vision</span>
              </h2>
              <p className="cw-premium-statement-desc">
                Creating unforgettable entertainment experiences through collaboration, passion, and music.
              </p>
            </div>

            <div className="cw-premium-statement-icon">
              <span>◈</span>
            </div>
          </div>
        </div>

        {/* Bottom Decorative */}
        <div className="cw-premium-footer">
          <div className="cw-premium-footer-line"></div>
          <div className="cw-premium-footer-dots">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="cw-premium-footer-dot"></span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Audio Visualizer */}
      <div className="cw-premium-audio">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="cw-premium-audio-bar"
            style={{
              animationDelay: `${i * 0.08}s`,
              height: `${6 + (i % 12)}px`
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="cw-premium-scroll">
        <span className="cw-premium-scroll-text">EXPLORE LEGENDS</span>
        <div className="cw-premium-scroll-mouse">
          <div className="cw-premium-scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityWall;