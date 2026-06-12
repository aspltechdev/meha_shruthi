










// import { useEffect, useRef, useState } from 'react';
// import './EventJourney.css';
// import backgroundImg from '../assets/Background1.jpeg';
// import journey1 from '../assets/journey1.jpeg';
// import journey2 from '../assets/journey2.jpeg';
// import journey3 from '../assets/journey3.jpeg';
// import journey4 from '../assets/journey4.jpeg';
// import journey5 from '../assets/journey5.jpeg';

// const journeySteps = [
//   {
//     number: "01",
//     title: "Share Your Vision",
//     description:
//       "Every extraordinary event begins with a vision. We take the time to understand your goals and unique requirements, transforming ideas into a clear roadmap for success. Through collaborative discussions and thoughtful planning, we align every detail with your goals, ensuring that the foundation of your event reflects your personality, brand, and purpose. This initial stage sets the tone for an experience that is both meaningful and memorable.",
//     image: journey1,
//     gradient: "linear-gradient(135deg, #c9a03d, #b8860b)",
//   },
//   {
//     number: "02",
//     title: "Curate The Experience",
//     description:
//       "With the vision established, we carefully curate every element that brings the event to life. From selecting exceptional artists and entertainment to designing immersive experiences, every detail is thoughtfully considered. Our team balances creativity with precision, ensuring that music, performances, ambiance, and guest engagement come together seamlessly. The result is a carefully crafted experience that captivates audiences and exceeds expectations.",
//     image: journey2,
//     gradient: "linear-gradient(135deg, #daa520, #c9a03d)",
//   },
//   {
//     number: "03",
//     title: "Behind The Scenes",
//     description:
//       "Great events are powered by meticulous preparation. Behind the scenes, our dedicated team coordinates logistics, manages technical requirements, conducts rehearsals, and ensures every component is perfectly aligned. From stage construction and lighting design to sound engineering and production management, every detail is tested and refined. While guests only see the final spectacle, this stage is where excellence is built through expertise, teamwork, and attention to detail.",
//     image: journey3,
//     gradient: "linear-gradient(135deg, #c9a03d, #8b7355)",
//   },
//   {
//     number: "04",
//     title: "Stage Comes Alive",
//     description:
//       "As the lights illuminate and the audience gathers, months of planning transform into a living experience. The stage comes alive with energy, creativity, and unforgettable performances that captivate every guest. Artists connect with audiences, emotions fill the atmosphere, and every moment becomes part of a larger story. This is where vision becomes reality, creating experiences that inspire, entertain, and leave a lasting impact.",
//     image: journey4,
//     gradient: "linear-gradient(135deg, #b8860b, #daa520)",
//   },
//   {
//     number: "05",
//     title: "Memories Forever",
//     description:
//       "The event may conclude, but its impact continues long after the final applause. Through meaningful interactions, unforgettable performances, and moments of celebration, lasting memories are created for every guest. Whether it is recognising achievements, honouring special milestones, or simply sharing moments of joy, these experiences become cherished stories that endure for years to come. Our goal is not only to deliver exceptional events but also to create memories that people will treasure forever.",
//     image: journey5,
//     gradient: "linear-gradient(135deg, #c9a03d, #ffd700)",
//   },
// ];

// const EventJourney = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
//   const intervalRef = useRef(null);
//   const sectionRef = useRef(null);
//   const particlesRef = useRef(
//     [...Array(25)].map(() => ({
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       animationDelay: `${Math.random() * 10}s`,
//       animationDuration: `${5 + Math.random() * 8}s`,
//     }))
//   );
//   const energyBarsRef = useRef(
//     [...Array(20)].map((_, i) => ({
//       animationDelay: `${i * 0.1}s`,
//       height: `${8 + Math.floor(Math.random() * 24)}px`,
//     }))
//   );

//   useEffect(() => {
//     if (isPlaying) {
//       intervalRef.current = setInterval(() => {
//         setActiveStep((prev) => (prev + 1) % journeySteps.length);
//       }, 6000);
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [isPlaying]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       setMousePos({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100,
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const goToStep = (index) => {
//     setActiveStep(index);
//     setIsPlaying(false);
//     clearInterval(intervalRef.current);
//     setTimeout(() => setIsPlaying(true), 8000);
//   };

//   const nextStep = () => goToStep((activeStep + 1) % journeySteps.length);
//   const prevStep = () => goToStep((activeStep - 1 + journeySteps.length) % journeySteps.length);

//   return (
//     <section
//       className="ej-section"
//       ref={sectionRef}
//       style={{
//         backgroundImage: `url(${backgroundImg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       {/* Background overlays */}
//       <div className="ej-bg-overlay" />
//       <div className="ej-bg-pattern" />

//       {/* Dynamic spotlight */}
//       <div
//         className="ej-spotlight"
//         style={{
//           background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201,160,61,0.09) 0%, rgba(201,160,61,0.03) 35%, transparent 65%)`,
//         }}
//       />

//       {/* Light beams */}
//       <div className="ej-beams" aria-hidden="true">
//         <div className="ej-beam" />
//         <div className="ej-beam" />
//         <div className="ej-beam" />
//         <div className="ej-beam" />
//       </div>

//       {/* Particles */}
//       <div className="ej-particles" aria-hidden="true">
//         {particlesRef.current.map((particle, i) => (
//           <div
//             key={i}
//             className="ej-particle"
//             style={particle}
//           />
//         ))}
//       </div>

//       {/* ── HEADER ── */}
//       <header className="ej-header">
//         <div className="ej-badge">
//           <span className="ej-badge-dot" />
//           <span className="ej-badge-text">THE JOURNEY</span>
//           <span className="ej-badge-dot" />
//         </div>

//         <h2 className="ej-title">
//           <span className="ej-title-plain">From Vision To</span>
//           <span className="ej-title-gold">Standing Ovation</span>
//         </h2>

//         <div className="ej-title-rule">
//           <span className="ej-rule-line" />
//           <span className="ej-rule-diamond">◈</span>
//           <span className="ej-rule-line" />
//         </div>
//       </header>

//       {/* ── MAIN GRID ── */}
//       <div className="ej-grid">

//         {/* LEFT — image */}
//         <div className="ej-col-image">
//           <div className="ej-image-frame">
//             {journeySteps.map((step, i) => (
//               <div
//                 key={i}
//                 className={`ej-slide ${i === activeStep ? 'is-active' : ''}`}
//               >
//                 <img src={step.image} alt={step.title} className="ej-img" />
//                 <div className="ej-img-tint" style={{ background: step.gradient }} />
//                 <div className="ej-img-caption">
//                   <span className="ej-caption-num">{step.number}</span>
//                   <span className="ej-caption-label">{step.title}</span>
//                 </div>
//               </div>
//             ))}

//             <div className="ej-counter" aria-live="polite">
//               <span className="ej-counter-cur">0{activeStep + 1}</span>
//               <span className="ej-counter-sep">/</span>
//               <span className="ej-counter-tot">0{journeySteps.length}</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT — steps + description + nav */}
//         <div className="ej-col-content">

//           {/* Step tabs */}
//           <nav className="ej-steps" aria-label="Journey steps">
//             {journeySteps.map((step, i) => (
//               <button
//                 key={i}
//                 className={`ej-step ${i === activeStep ? 'is-active' : ''} ${i < activeStep ? 'is-done' : ''}`}
//                 onClick={() => goToStep(i)}
//                 aria-current={i === activeStep ? 'step' : undefined}
//               >
//                 <span className="ej-step-num">{step.number}</span>
//                 <span className="ej-step-label">{step.title}</span>
//                 <span className="ej-step-bar" />
//               </button>
//             ))}
//           </nav>

//           {/* Description */}
//           <div className="ej-desc-box">
//             {journeySteps.map((step, i) => (
//               <p
//                 key={i}
//                 className={`ej-desc ${i === activeStep ? 'is-active' : ''}`}
//               >
//                 {step.description}
//               </p>
//             ))}
//           </div>

//           {/* Navigation */}
//           <div className="ej-nav">
//             <button className="ej-nav-btn" onClick={prevStep} aria-label="Previous step">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//                 <path d="M15 18l-6-6 6-6" />
//               </svg>
//             </button>

//             <div className="ej-dots" role="tablist" aria-label="Step indicators">
//               {journeySteps.map((_, i) => (
//                 <button
//                   key={i}
//                   role="tab"
//                   aria-selected={i === activeStep}
//                   className={`ej-dot ${i === activeStep ? 'is-active' : ''}`}
//                   onClick={() => goToStep(i)}
//                   aria-label={`Go to step ${i + 1}`}
//                 />
//               ))}
//             </div>

//             <button className="ej-nav-btn" onClick={nextStep} aria-label="Next step">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//                 <path d="M9 18l6-6-6-6" />
//               </svg>
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* ── FOOTER CTA ── */}
//       <footer className="ej-footer">
//         <p className="ej-footer-text">
//           Every event has a story.
//           <span className="ej-footer-accent"> Let's create yours.</span>
//         </p>
//         <button className="ej-footer-cta">
//           <span>Start Your Journey</span>
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//             <path d="M5 12h14M12 5l7 7-7 7" />
//           </svg>
//           <span className="ej-cta-shine" aria-hidden="true" />
//         </button>
//       </footer>

//       {/* Energy bars */}
//       <div className="ej-energy" aria-hidden="true">
//         {energyBarsRef.current.map((bar, i) => (
//           <div
//             key={i}
//             className="ej-energy-bar"
//             style={bar}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EventJourney;
