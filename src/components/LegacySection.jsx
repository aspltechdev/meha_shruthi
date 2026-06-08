// import "./LegacySection.css";

// const milestones = [
//   {
//     year: "2000",
//     title: "The Journey Begins",
//     description:
//       "Started as a passionate music group with a vision to create unforgettable experiences.",
//   },
//   {
//     year: "2010",
//     title: "Super Singer Recognition",
//     description:
//       "National recognition through Vijay TV Super Singer and major stage performances.",
//   },
//   {
//     year: "2018",
//     title: "Prestigious Collaborations",
//     description:
//       "Performing alongside legendary musicians and becoming part of iconic orchestras.",
//   },
//   {
//     year: "2025",
//     title: "1000+ Events Milestone",
//     description:
//       "Delivering spectacular entertainment experiences across India and internationally.",
//   },
// ];

// const LegacySection = () => {
//   return (
//     <section className="legacy">

//       <div className="legacy-glow"></div>

//       <div className="legacy-header">

//         <span className="legacy-tag">
//           THE LEGACY
//         </span>

//         <h2>
//           25 YEARS OF
//           <br />
//           MUSICAL EXCELLENCE
//         </h2>

//         <p>
//           From intimate performances to grand celebrations,
//           creating unforgettable memories through music and entertainment.
//         </p>

//       </div>

//       <div className="timeline">

//         {milestones.map((item, index) => (
//           <div
//             className="timeline-item"
//             key={index}
//           >
//             <div className="timeline-year">
//               {item.year}
//             </div>

//             <div className="timeline-content">

//               <h3>
//                 {item.title}
//               </h3>

//               <p>
//                 {item.description}
//               </p>

//             </div>
//           </div>
//         ))}

//       </div>

//       <div className="legacy-stats">

//         <div className="stat-card">
//           <h3>1000+</h3>
//           <span>Events</span>
//         </div>

//         <div className="stat-card">
//           <h3>500+</h3>
//           <span>Concerts</span>
//         </div>

//         <div className="stat-card">
//           <h3>60+</h3>
//           <span>Cities</span>
//         </div>

//         <div className="stat-card">
//           <h3>25+</h3>
//           <span>Years</span>
//         </div>

//       </div>

//     </section>
//   );
// };

// export default LegacySection;





import { useEffect, useRef, useState } from 'react';
import './LegacySection.css';

const milestones = [
  {
    year: "2000",
    title: "First Stage",
    image: "/images/legacy-2000.jpg"
  },
  {
    year: "2010",
    title: "Super Singer",
    image: "/images/legacy-2010.jpg"
  },
  {
    year: "2018",
    title: "1000+ Events",
    image: "/images/legacy-2018.jpg"
  },
  {
    year: "2025",
    title: "International",
    image: "/images/legacy-2025.jpg"
  }
];

const LegacySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrolled = -rect.top;
      const sectionProgress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
      
      setProgress(sectionProgress);
      setActiveIndex(Math.floor(sectionProgress * milestones.length));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="legacy" ref={sectionRef}>
      {/* Dynamic Background */}
      <div className="legacy-bg">
        <div className="bg-gradient"></div>
        <div className="bg-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Left Side - Static Content */}
      <div className="legacy-left">
        <div className="left-content">
          <div className="stage-badge">
            <span className="badge-dot"></span>
            THE LEGACY
          </div>

          <h2 className="legacy-headline">
            <span className="headline-line">25 Years</span>
            <span className="headline-line gold">Of Magic</span>
          </h2>

          <div className="legacy-quote">
            "From one stage to global phenomenon"
          </div>

          {/* Progress Indicator */}
          <div className="progress-track">
            <div 
              className="progress-fill"
              style={{ width: `${progress * 100}%` }}
            ></div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-num">1000+</span>
              <span className="stat-txt">Shows</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">60+</span>
              <span className="stat-txt">Cities</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">25</span>
              <span className="stat-txt">Years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Dynamic Timeline Cards */}
      <div className="legacy-right">
        <div className="cards-container">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`legacy-card ${index === activeIndex ? 'active' : ''} ${index < activeIndex ? 'passed' : ''}`}
              style={{
                '--card-index': index,
                transform: `translateY(${(index - activeIndex) * 20}px) scale(${index === activeIndex ? 1 : 0.95})`,
                opacity: index === activeIndex ? 1 : index < activeIndex ? 0.5 : 0.3,
                zIndex: index === activeIndex ? 3 : 2 - Math.abs(index - activeIndex)
              }}
            >
              <div className="card-image-wrap">
                <img 
                  src={milestone.image} 
                  alt={milestone.title}
                  className="card-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="card-img-overlay"></div>
                
                {/* Festival vibes overlay */}
                <div className="card-energy">
                  <div className="energy-ring"></div>
                  <div className="energy-ring ring-2"></div>
                </div>
              </div>

              <div className="card-info">
                <span className="card-year">{milestone.year}</span>
                <h3 className="card-title">{milestone.title}</h3>
                <div className="card-arrow">→</div>
              </div>

              {/* Glow effect */}
              <div className="card-glow"></div>
            </div>
          ))}
        </div>

        {/* Year Indicator */}
        <div className="year-indicator">
          <span className="current-year">
            {milestones[activeIndex]?.year}
          </span>
          <div className="year-line"></div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="legacy-footer">
        <div className="footer-content">
          <div className="footer-line"></div>
          <p>South India's Premium Entertainment Powerhouse</p>
          <div className="footer-line"></div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;