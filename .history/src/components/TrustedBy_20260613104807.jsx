// import React, { useEffect, useRef, useState } from 'react';
// import './TrustedBy.css';

// const clients = [
//   {
//     name: "Rotary Club",
//     category: "Service Organization",
//     years: "5+ Years",
//     image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
//     description: "International service organization",
//     events: "25+ Events"
//   },
//   {
//     name: "Cosmopolitan Club",
//     category: "Premium Club",
//     years: "7+ Years",
//     image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
//     description: "Elite social club network",
//     events: "40+ Events"
//   },
//   {
//     name: "Alumni Associations",
//     category: "Educational",
//     years: "4+ Years",
//     image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
//     description: "Prestigious alumni networks",
//     events: "30+ Events"
//   },
//   {
//     name: "Doctors Conferences",
//     category: "Medical",
//     years: "6+ Years",
//     image: "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
//     description: "Medical professionals",
//     events: "20+ Events"
//   },
//   {
//     name: "Wedding Celebrations",
//     category: "Social",
//     years: "200+ Events",
//     image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
//     description: "Luxury wedding planners",
//     events: "200+ Events"
//   },
//   {
//     name: "Corporate Events",
//     category: "Business",
//     years: "50+ Events",
//     image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
//     description: "Fortune 500 companies",
//     events: "50+ Events"
//   },
//   {
//     name: "Cultural Festivals",
//     category: "Cultural",
//     years: "30+ Festivals",
//     image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
//     description: "Major cultural events",
//     events: "30+ Festivals"
//   },
//   {
//     name: "Private Functions",
//     category: "Exclusive",
//     years: "100+ Events",
//     image: "https://images.pexels.com/photos/2253876/pexels-photo-2253876.jpeg",
//     description: "VIP private gatherings",
//     events: "100+ Events"
//   },
// ];

// const TrustedBy = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

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
//     <section className="trusted-light-section" ref={sectionRef}>
//       {/* Light Theme Background */}
//       <div className="trusted-light-bg"></div>
//       <div className="trusted-light-pattern"></div>

//       {/* Dynamic Spotlight - Light Theme */}
//       <div 
//         className="trusted-light-spotlight"
//         style={{
//           background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.08) 0%, rgba(201, 160, 61, 0.03) 40%, transparent 70%)`
//         }}
//       />

//       {/* Light Rays */}
//       <div className="trusted-light-rays">
//         <div className="trusted-light-ray"></div>
//         <div className="trusted-light-ray"></div>
//         <div className="trusted-light-ray"></div>
//       </div>

//       {/* Floating Particles - Light */}
//       <div className="trusted-light-particles">
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className="trusted-light-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 8}s`,
//               animationDuration: `${5 + Math.random() * 8}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Container */}
//       <div className="trusted-light-container">
//         {/* Header */}
//         <div className="trusted-light-header">
//           <div className="trusted-light-badge">
//             <span className="trusted-light-badge-dot"></span>
//             <span className="trusted-light-badge-text">TRUSTED PARTNERS</span>
//             <span className="trusted-light-badge-dot"></span>
//           </div>

//           <h2 className="trusted-light-title">
//             <span className="trusted-light-title-light">Trusted By</span>
//             <span className="trusted-light-title-bold">The Best</span>
//           </h2>

//           <p className="trusted-light-subtitle">
//             From intimate gatherings to grand celebrations, we've created unforgettable moments 
//             for the world's most discerning clients
//           </p>

//           {/* Stats */}
//           <div className="trusted-light-stats">
//             <div className="trusted-light-stat">
//               <div className="trusted-light-stat-number">500+</div>
//               <div className="trusted-light-stat-label">Events</div>
//               <div className="trusted-light-stat-line"></div>
//             </div>
//             <div className="trusted-light-stat-sep">◉</div>
//             <div className="trusted-light-stat">
//               <div className="trusted-light-stat-number">100+</div>
//               <div className="trusted-light-stat-label">Clients</div>
//               <div className="trusted-light-stat-line"></div>
//             </div>
//             <div className="trusted-light-stat-sep">◉</div>
//             <div className="trusted-light-stat">
//               <div className="trusted-light-stat-number">98%</div>
//               <div className="trusted-light-stat-label">Satisfaction</div>
//               <div className="trusted-light-stat-line"></div>
//             </div>
//           </div>
//         </div>

//         {/* Image Overlay Cards Grid */}
//         <div className="trusted-light-grid">
//           {clients.map((client, index) => (
//             <div
//               key={index}
//               className={`trusted-light-card ${isVisible ? 'visible' : ''} ${hoveredIndex === index ? 'hovered' : ''}`}
//               style={{ transitionDelay: `${index * 0.05}s` }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Card Image */}
//               <div className="trusted-light-card-image">
//                 <img src={client.image} alt={client.name} />
//                 <div className="trusted-light-card-gradient"></div>
//               </div>

//               {/* Content Overlay on Image */}
//               <div className="trusted-light-card-content">
//                 {/* Top Section */}
//                 <div className="trusted-light-card-top">
//                   <span className="trusted-light-card-category">{client.category}</span>
//                   <span className="trusted-light-card-years">{client.years}</span>
//                 </div>

//                 {/* Bottom Section */}
//                 <div className="trusted-light-card-bottom">
//                   <h3 className="trusted-light-card-name">{client.name}</h3>
//                   <p className="trusted-light-card-desc">{client.description}</p>
//                   <div className="trusted-light-card-meta">
//                     <span className="trusted-light-card-events">{client.events}</span>
//                     <span className="trusted-light-card-arrow">→</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Hover Reveal */}
//               <div className="trusted-light-card-reveal">
//                 <span>View Portfolio</span>
//                 <div className="trusted-light-reveal-line"></div>
//               </div>

//               {/* Card Border */}
//               <div className="trusted-light-card-border"></div>
//             </div>
//           ))}
//         </div>

//         {/* Trust Statement */}
//         <div className="trusted-light-statement">
//           <div className="trusted-light-statement-line"></div>
//           <div className="trusted-light-statement-content">
//             <span className="trusted-light-statement-quote">"</span>
//             <p className="trusted-light-statement-text">
//               The trust of our clients is the <span className="trusted-light-statement-highlight">foundation</span> of every performance
//             </p>
//             <span className="trusted-light-statement-quote">"</span>
//           </div>
//           <div className="trusted-light-statement-line"></div>
//         </div>

//         {/* CTA */}
//         <div className="trusted-light-cta">
//           <button className="trusted-light-cta-btn">
//             <span>Partner With Us</span>
//             <span className="trusted-light-cta-arrow">→</span>
//           </button>
//         </div>
//       </div>

//       {/* Bottom Energy Bars - Light */}
//       <div className="trusted-light-audio">
//         {[...Array(24)].map((_, i) => (
//           <div
//             key={i}
//             className="trusted-light-audio-bar"
//             style={{
//               animationDelay: `${i * 0.08}s`,
//               height: `${6 + (i % 12)}px`
//             }}
//           />
//         ))}
//       </div>

  
//     </section>
//   );
// };

// export default TrustedBy;

import React, { useEffect, useRef, useState } from 'react';
import './TrustedBy.css';
import backgroundImg from '../assets/Background8.jpeg';
import trust1 from '../assets/trust1.jpeg';
import trust2 from '../assets/trust2.jpeg';
import trust3 from '../assets/trust3.jpeg';
import trust4 from '../assets/trust4.jpeg';
import trust5 from '../assets/trust5.jpeg';
import trust6 from '../assets/trust6.jpeg';
import trust7 from '../assets/trust7.jpeg';
import trust8 from '../assets/trust8.jpeg';

const clients = [
  {
    name: "Rotary Club",
    // category: "Service Organization",
    // years: "5+ Years",
    image: trust1,
    description: "International service organization",
    events: "25+ Events"
  },
  {
    name: "Cosmopolitan Club",
    // category: "Premium Club",
    // years: "7+ Years",
    image: trust2,
    description: "Elite social club network",
    events: "40+ Events"
  },
  {
    name: "Alumni Associations",
    // category: "Educational",
    // years: "4+ Years",
    image: trust3,
    description: "Prestigious alumni networks",
    events: "30+ Events"
  },
  {
    name: "Doctors Conferences",
    // category: "Medical",
    // years: "6+ Years",
    image: trust4,
    description: "Medical professionals",
    events: "20+ Events"
  },
  {
    name: "Wedding Celebrations",
    // category: "Social",
    // years: "200+ Events",
    image: trust5,
    description: "Luxury wedding planners",
    events: "200+ Events"
  },
  {
    name: "Corporate Events",
    category: "Business",
    years: "50+ Events",
    image: trust6,
    description: "Fortune 500 companies",
    events: "50+ Events"
  },
  {
    name: "Cultural Festivals",
    category: "Cultural",
    years: "30+ Festivals",
    image: trust7,
    description: "Major cultural events",
    events: "30+ Festivals"
  },
  {
    name: "Private Functions",
    category: "Exclusive",
    years: "100+ Events",
    image: trust8,
    description: "VIP private gatherings",
    events: "100+ Events"
  },
];

const TrustedBy = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  return (
    <section className="trusted-light-section" ref={sectionRef}>
      {/* Light Theme Background */}
      <div className="trusted-light-bg"></div>
      <div className="trusted-light-pattern"></div>

      {/* Dynamic Spotlight - Light Theme */}
      <div
        className="trusted-light-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #2A3140)`
        }}
      />

      {/* Light Rays */}
      <div className="trusted-light-rays">
        <div className="trusted-light-ray"></div>
        <div className="trusted-light-ray"></div>
        <div className="trusted-light-ray"></div>
      </div>

      {/* Floating Particles - Light */}
      <div className="trusted-light-particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="trusted-light-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="trusted-light-container">
                {/* Header */}
        <div className="trusted-light-header">
          <div className="trusted-light-badge">
            <span className="trusted-light-badge-dot"></span>
            <span className="trusted-light-badge-text">
              TRUSTED PARTNERS
            </span>
            <span className="trusted-light-badge-dot"></span>
          </div>

          <h2 className="trusted-light-title">
            <span className="trusted-light-title-light">
              Trusted By
            </span>

            <span className="trusted-light-title-bold">
              The Best
            </span>
          </h2>

          <p className="trusted-light-subtitle">
            From intimate gatherings to grand celebrations, we've
            created unforgettable moments for the world's most
            discerning clients
          </p>

          {/* Stats */}
          <div className="trusted-light-stats">
            <div className="trusted-light-stat">
              <div className="trusted-light-stat-number">
                500+
              </div>

              <div className="trusted-light-stat-label">
                Events
              </div>

              <div className="trusted-light-stat-line"></div>
            </div>

            <div className="trusted-light-stat-sep">
              ◉
            </div>

            <div className="trusted-light-stat">
              <div className="trusted-light-stat-number">
                100+
              </div>

              <div className="trusted-light-stat-label">
                Clients
              </div>

              <div className="trusted-light-stat-line"></div>
            </div>

            <div className="trusted-light-stat-sep">
              ◉
            </div>

            <div className="trusted-light-stat">
              <div className="trusted-light-stat-number">
                98%
              </div>

              <div className="trusted-light-stat-label">
                Satisfaction
              </div>

              <div className="trusted-light-stat-line"></div>
            </div>
          </div>
        </div>

        {/* Image Overlay Cards Grid */}
        <div className="trusted-light-grid">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`trusted-light-card ${
                isVisible ? 'visible' : ''
              } ${
                hoveredIndex === index ? 'hovered' : ''
              }`}
              style={{
                transitionDelay: `${index * 0.05}s`,
              }}
              onMouseEnter={() =>
                setHoveredIndex(index)
              }
              onMouseLeave={() =>
                setHoveredIndex(null)
              }
            >
              {/* Card Image */}
              <div className="trusted-light-card-image">
                <img
                  src={client.image}
                  alt={client.name}
                />

                <div className="trusted-light-card-gradient"></div>
              </div>

              {/* Content Overlay on Image */}
              <div className="trusted-light-card-content">
                {/* Top Section */}
                <div className="trusted-light-card-top">
                  <span className="trusted-light-card-category">
                    {client.category}
                  </span>

                  <span className="trusted-light-card-years">
                    {client.years}
                  </span>
                </div>

                {/* Bottom Section */}
                <div className="trusted-light-card-bottom">
                  <h3 className="trusted-light-card-name">
                    {client.name}
                  </h3>

                  <p className="trusted-light-card-desc">
                    {client.description}
                  </p>

                  <div className="trusted-light-card-meta">
                    <span className="trusted-light-card-events">
                      {client.events}
                    </span>

                    <span className="trusted-light-card-arrow">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Reveal */}
              <div className="trusted-light-card-reveal">
                <span>View Portfolio</span>

                <div className="trusted-light-reveal-line"></div>
              </div>

              {/* Card Border */}
              <div className="trusted-light-card-border"></div>
            </div>
          ))}
        </div>
                {/* Trust Statement */}
        <div className="trusted-light-statement">
          <div className="trusted-light-statement-line"></div>

          <div className="trusted-light-statement-content">
            <span className="trusted-light-statement-quote">
              "
            </span>

            <p className="trusted-light-statement-text">
              The trust of our clients is the{" "}
              <span className="trusted-light-statement-highlight">
                foundation
              </span>{" "}
              of every performance
            </p>

            <span className="trusted-light-statement-quote">
              "
            </span>
          </div>

          <div className="trusted-light-statement-line"></div>
        </div>

        {/* CTA */}
        <div className="trusted-light-cta">
          <button className="trusted-light-cta-btn">
            <span>Partner With Us</span>

            <span className="trusted-light-cta-arrow">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Energy Bars - Light */}
      <div className="trusted-light-audio">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="trusted-light-audio-bar"
            style={{
              animationDelay: `${i * 0.08}s`,
              height: `${6 + (i % 12)}px`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;