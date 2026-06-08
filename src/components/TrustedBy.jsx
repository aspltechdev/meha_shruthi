// import { useEffect, useRef, useState } from 'react';
// import './TrustedBy.css';

// const clients = [
//   { name: "Rotary Club", category: "Service Organization", icon: "🏛️" },
//   { name: "Cosmopolitan Club", category: "Premium Club", icon: "✨" },
//   { name: "Alumni Associations", category: "Educational", icon: "🎓" },
//   { name: "Doctors Conferences", category: "Medical", icon: "🏥" },
//   { name: "Wedding Celebrations", category: "Social", icon: "💍" },
//   { name: "Corporate Events", category: "Business", icon: "🏢" },
//   { name: "Cultural Festivals", category: "Cultural", icon: "🎪" },
//   { name: "Private Functions", category: "Exclusive", icon: "🌟" },
// ];

// const TrustedBy = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="trusted-section" ref={sectionRef}>
//       <div className="trusted-container">
        
//         {/* Left - Header & Stats */}
//         <div className="trusted-left">
//           <div className="trusted-left-content">
//             <span className="trusted-eyebrow">TRUSTED BY</span>
            
//             <h2 className="trusted-headline">
//               <span className="trusted-headline-line">Hundreds Of</span>
//               <span className="trusted-headline-line trusted-headline-accent">Events.</span>
//               <span className="trusted-headline-line">Thousands Of</span>
//               <span className="trusted-headline-line trusted-headline-accent">Smiles.</span>
//             </h2>

//             <p className="trusted-description">
//               From intimate gatherings to grand celebrations, 
//               we've had the privilege of creating unforgettable 
//               moments for the most discerning clients.
//             </p>

//             {/* Stats */}
//             <div className="trusted-stats">
//               <div className="trusted-stat">
//                 <span className="trusted-stat-number">500+</span>
//                 <span className="trusted-stat-label">Events</span>
//               </div>
//               <div className="trusted-stat-divider"></div>
//               <div className="trusted-stat">
//                 <span className="trusted-stat-number">100+</span>
//                 <span className="trusted-stat-label">Clients</span>
//               </div>
//               <div className="trusted-stat-divider"></div>
//               <div className="trusted-stat">
//                 <span className="trusted-stat-number">98%</span>
//                 <span className="trusted-stat-label">Satisfaction</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right - Client Grid */}
//         <div className="trusted-right">
//           <div className="trusted-grid">
//             {clients.map((client, index) => (
//               <div
//                 key={index}
//                 className={`trusted-card ${isVisible ? 'trusted-card-visible' : ''} ${hoveredIndex === index ? 'trusted-card-hovered' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'trusted-card-dimmed' : ''}`}
//                 style={{ '--card-delay': `${index * 0.08}s` }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <div className="trusted-card-inner">
//                   <span className="trusted-card-icon">{client.icon}</span>
//                   <h4 className="trusted-card-name">{client.name}</h4>
//                   <span className="trusted-card-category">{client.category}</span>
//                 </div>
                
//                 {/* Bottom accent */}
//                 <div className="trusted-card-accent"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* Bottom Quote */}
//       <div className="trusted-quote">
//         <div className="trusted-quote-line"></div>
//         <p className="trusted-quote-text">
//           "The trust of our clients is the foundation of every performance"
//         </p>
//         <div className="trusted-quote-line"></div>
//       </div>
//     </section>
//   );
// };

// export default TrustedBy;









import { useEffect, useRef, useState } from 'react';
import './TrustedBy.css';

const clients = [
  { name: "Rotary Club", category: "Service Organization" },
  { name: "Cosmopolitan Club", category: "Premium Club" },
  { name: "Alumni Associations", category: "Educational" },
  { name: "Doctors Conferences", category: "Medical" },
  { name: "Wedding Celebrations", category: "Social" },
  { name: "Corporate Events", category: "Business" },
  { name: "Cultural Festivals", category: "Cultural" },
  { name: "Private Functions", category: "Exclusive" },
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
      { threshold: 0.3 }
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
    <section className="trusted-section" ref={sectionRef}>
      {/* Dynamic Spotlight */}
      <div 
        className="trusted-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 180, 0, 0.06) 0%, transparent 50%)`
        }}
      />

      {/* Stage Light Beams */}
      <div className="trusted-beams">
        <div className="trusted-beam trusted-beam-1"></div>
        <div className="trusted-beam trusted-beam-2"></div>
      </div>

      {/* Floating Particles */}
      <div className="trusted-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="trusted-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="trusted-container">
        {/* Left - Header & Stats */}
        <div className="trusted-left">
          <div className="trusted-left-content">
            <div className="trusted-badge">
              <span className="trusted-badge-dot"></span>
              TRUSTED BY
            </div>
            
            <h2 className="trusted-headline">
              <span className="trusted-headline-line">Hundreds Of</span>
              <span className="trusted-headline-line trusted-headline-gold">Events.</span>
              <span className="trusted-headline-line">Thousands Of</span>
              <span className="trusted-headline-line trusted-headline-gold">Smiles.</span>
            </h2>

            <p className="trusted-description">
              From intimate gatherings to grand celebrations, 
              we've had the privilege of creating unforgettable 
              moments for the most discerning clients.
            </p>

            {/* Stats */}
            <div className="trusted-stats">
              <div className="trusted-stat">
                <span className="trusted-stat-number">500+</span>
                <span className="trusted-stat-label">Events</span>
                <div className="trusted-stat-glow"></div>
              </div>
              <div className="trusted-stat-divider"></div>
              <div className="trusted-stat">
                <span className="trusted-stat-number">100+</span>
                <span className="trusted-stat-label">Clients</span>
                <div className="trusted-stat-glow"></div>
              </div>
              <div className="trusted-stat-divider"></div>
              <div className="trusted-stat">
                <span className="trusted-stat-number">98%</span>
                <span className="trusted-stat-label">Satisfaction</span>
                <div className="trusted-stat-glow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Client Grid */}
        <div className="trusted-right">
          <div className="trusted-grid">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`trusted-card ${isVisible ? 'trusted-card-visible' : ''} ${hoveredIndex === index ? 'trusted-card-hovered' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'trusted-card-dimmed' : ''}`}
                style={{ '--card-delay': `${index * 0.08}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="trusted-card-inner">
                  <div className="trusted-card-index">
                    <span>0{index + 1}</span>
                  </div>
                  <h4 className="trusted-card-name">{client.name}</h4>
                  <span className="trusted-card-category">{client.category}</span>
                </div>
                
                {/* Bottom accent */}
                <div className="trusted-card-accent"></div>
                
                {/* Corner glow */}
                <div className="trusted-card-corner"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="trusted-quote">
        <div className="trusted-quote-content">
          <div className="trusted-quote-line"></div>
          <div className="trusted-quote-star">✦</div>
          <p className="trusted-quote-text">
            The trust of our clients is the foundation of every performance
          </p>
          <div className="trusted-quote-star">✦</div>
          <div className="trusted-quote-line"></div>
        </div>
      </div>

      {/* Bottom Energy Bar */}
      <div className="trusted-energy">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="trusted-energy-line"
            style={{
              animationDelay: `${i * 0.1}s`,
              height: `${5 + Math.random() * 18}px`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;