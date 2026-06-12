// import { useEffect, useRef, useState } from 'react';
// import './MeetTheVoices.css';
// import m1 from "../assets/hero.png";


// const MeetTheVoices = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [progress, setProgress] = useState(0);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       setMousePosition({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100
//       });
//     };

//     const handleScroll = () => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const scrollProgress = -rect.top / (rect.height - window.innerHeight);
//       setProgress(Math.min(1, Math.max(0, scrollProgress)));
      
//       if (scrollProgress < 0.5) {
//         setActiveIndex(0);
//       } else {
//         setActiveIndex(1);
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const singers = [
//     {
//       id: 0,
//       name: "MEERA",
//       fullName: "Meera Sridharan",
//       title: "The Visionary Voice",
//       role: "Founder & Lead Vocalist",
//       specialty: "Carnatic • Classical • Soul",
//       description: "A voice that carries the soul of tradition, Meera transforms every performance into a spiritual journey through the depths of Indian classical music.",
//       quote: "Music flows through my veins like the sacred rivers of Bharath",
//       stats: [
//         { value: "25+", label: "Years" },
//         { value: "1000+", label: "Performances" },
//         { value: "50+", label: "Awards" }
//       ],
//       achievements: ["Classical Prodigy", "National Award Winner", "International Performer"],
//       accentColor: "#c9a03d",
//       bgGradient: "linear-gradient(135deg, #fff8f0, #fdf4e3)"
//     },
//     {
//       id: 1,
//       name: "KAUSHIK",
//       fullName: "Kaushik Sridharan",
//       title: "The Stage Virtuoso",
//       role: "Lead Performer & Super Singer",
//       specialty: "Versatile • Energetic • Magical",
//       description: "From Super Singer to international stages, Kaushik brings electrifying energy while honoring every musical tradition.",
//       quote: "Every celebration under our banner becomes an eternal memory",
//       stats: [
//         { value: "500+", label: "Concerts" },
//         { value: "7+", label: "Countries" },
//         { value: "15+", label: "Awards" }
//       ],
//       achievements: ["Super Singer Fame", "International Tour", "Trendsetter Award"],
//       accentColor: "#d4a843",
//       bgGradient: "linear-gradient(135deg, #fff5e8, #fdf0e0)"
//     }
//   ];

//   const currentSinger = singers[activeIndex];

//   return (
//     <section className="voices-cinematic-light" ref={sectionRef}>
//       {/* Audio Visualizer - Light Theme */}
//       <div className="audio-visualizer-light">
//         {[...Array(32)].map((_, i) => (
//           <div 
//             key={i} 
//             className="viz-bar-light"
//             style={{
//               height: `${20 + Math.sin(Date.now() * 0.002 + i) * 30 + Math.sin(progress * Math.PI * 4) * 20}%`,
//               animationDelay: `${i * 0.05}s`,
//               background: `linear-gradient(180deg, ${currentSinger.accentColor}, #ffd700)`
//             }}
//           />
//         ))}
//       </div>

//       {/* Dynamic Spotlight - Warm Light */}
//       <div 
//         className="cinematic-spotlight-light"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${currentSinger.accentColor}15 0%, transparent 60%)`
//         }}
//       />

//       {/* Subtle Vignette for Light Theme */}
//       <div className="vignette-light"></div>

//       {/* Scroll Progress Bar */}
//       <div className="scroll-progress-light">
//         <div className="progress-bar-light" style={{ transform: `scaleX(${progress})`, background: currentSinger.accentColor }}></div>
//         <div className="progress-dots-light">
//           {singers.map((_, i) => (
//             <div 
//               key={i} 
//               className={`progress-dot-light ${activeIndex === i ? 'active' : ''}`}
//               style={{ background: activeIndex === i ? currentSinger.accentColor : '#d4c4a8' }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Main Cinematic Container */}
//       <div className="cinematic-container-light">
//         {singers.map((singer, idx) => (
//           <div 
//             key={singer.id}
//             className={`cinematic-slide-light ${activeIndex === idx ? 'active' : ''}`}
//             style={{ 
//               transform: `translateX(${(idx - activeIndex) * 100}%)`,
//               opacity: activeIndex === idx ? 1 : 0
//             }}
//           >
//             {/* Left Side - Visual with Light Theme */}
//             <div className="slide-left-light" style={{ background: singer.bgGradient }}>
//               <div className="visual-atmosphere-light">
//                 {/* Particle Field - Light Theme */}
//                 <div className="particle-field-light">
//                   {[...Array(40)].map((_, i) => (
//                     <div 
//                       key={i}
//                       className="music-particle-light"
//                       style={{
//                         left: `${Math.random() * 100}%`,
//                         animationDuration: `${3 + Math.random() * 4}s`,
//                         animationDelay: `${Math.random() * 5}s`,
//                         background: singer.accentColor
//                       }}
//                     />
//                   ))}
//                 </div>

//                 {/* Cinematic Frame with Light Theme */}
//                 <div className="cinematic-frame-light">
//                   <div className="frame-glow-light" style={{ background: singer.accentColor }}></div>
//                   <div className="image-container-light">
//                     <img 
//                       src={m1}
//                       alt={singer.fullName}
//                       className="singer-image-light"
//                       onError={(e) => {
//                         e.target.src = `https://via.placeholder.com/800x1000/fdf4e3/c9a03d?text=${singer.name.charAt(0)}`;
//                       }}
//                     />
//                     <div className="image-overlay-light"></div>
//                   </div>
                  
    
//                   {/* Sound Wave Rings */}
//                   <div className="sound-waves-light">
//                     <div className="wave-ring-light" style={{ borderColor: singer.accentColor }}></div>
//                     <div className="wave-ring-light delay-1" style={{ borderColor: singer.accentColor }}></div>
//                     <div className="wave-ring-light delay-2" style={{ borderColor: singer.accentColor }}></div>
//                   </div>
//                 </div>

//                 {/* Floating Musical Notes */}
//                 <div className="floating-notes-light">
//                   {['♪', '♫', '♪', '♫', '♪', '♫'].map((note, i) => (
//                     <span 
//                       key={i}
//                       className={`note-light note-${i}`}
//                       style={{ 
//                         animationDelay: `${i * 0.4}s`,
//                         color: singer.accentColor,
//                         textShadow: `0 0 10px ${singer.accentColor}40`
//                       }}
//                     >
//                       {note}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Traditional Kolam Dots */}
//                 <div className="kolam-dots">
//                   {[...Array(12)].map((_, i) => (
//                     <div key={i} className="kolam-dot" style={{ background: singer.accentColor }}></div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Content Light Theme */}
//             <div className="slide-right-light">
//               <div className="content-wrapper-light">
//                 <div className="content-reveal-light">
//                   <span className="singer-tag-light" style={{ color: singer.accentColor }}>
//                     ◉ {singer.title} ◉
//                   </span>
                  
//                   <h1 className="singer-name-light">
//                     {singer.name}
//                     <span className="name-glow-light" style={{ background: singer.accentColor }}></span>
//                   </h1>
                  
//                   <p className="singer-fullname-light">{singer.fullName}</p>
                  
//                   <div className="role-badge-light" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
//                     {singer.role}
//                   </div>
                  
//                   <div className="specialty-light">
//                     <span className="specialty-dot-light" style={{ background: singer.accentColor }}></span>
//                     {singer.specialty}
//                   </div>

//                   <p className="description-light">{singer.description}</p>

//                   <div className="quote-block-light" style={{ borderLeftColor: singer.accentColor }}>
//                     <span className="quote-mark-light">"</span>
//                     {singer.quote}
//                     <span className="quote-mark-light">"</span>
//                   </div>

//                   {/* Stats Grid */}
//                   <div className="stats-grid-light">
//                     {singer.stats.map((stat, i) => (
//                       <div key={i} className="stat-card-light">
//                         <div className="stat-value-light" style={{ color: singer.accentColor }}>
//                           {stat.value}
//                         </div>
//                         <div className="stat-label-light">{stat.label}</div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Achievements */}
//                   {/* <div className="achievements-light">
//                     {singer.achievements.map((achievement, i) => (
//                       <div key={i} className="achievement-tag-light" style={{ borderColor: singer.accentColor }}>
//                         <span className="achievement-dot-light" style={{ background: singer.accentColor }}></span>
//                         {achievement}
//                       </div>
//                     ))}
//                   </div> */}

//                   {/* CTA Button */}
//                   <button className="cta-button-light" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
//                     <span>Experience The Magic</span>
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows - Light Theme */}
//       <div className="nav-arrows-light">
//         <button 
//           className={`nav-arrow-light prev ${activeIndex === 0 ? 'disabled' : ''}`}
//           onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </button>
//         <button 
//           className={`nav-arrow-light next ${activeIndex === singers.length - 1 ? 'disabled' : ''}`}
//           onClick={() => activeIndex < singers.length - 1 && setActiveIndex(activeIndex + 1)}
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </button>
//       </div>

//       {/* Scroll Indicator - Light Theme */}
  
//     </section>
//   );
// };

// export default MeetTheVoices;








// import { useEffect, useRef, useState } from 'react';
// import './MeetTheVoices.css';
// import m1 from "../assets/hero.png";

// const MeetTheVoices = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [progress, setProgress] = useState(0);
//   const [isVideoLoaded, setIsVideoLoaded] = useState({ meera: false, kaushik: false });
//   const sectionRef = useRef(null);
//   const videoRefMeera = useRef(null);
//   const videoRefKaushik = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       setMousePosition({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100
//       });
//     };

//     const handleScroll = () => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const scrollProgress = -rect.top / (rect.height - window.innerHeight);
//       setProgress(Math.min(1, Math.max(0, scrollProgress)));
      
//       if (scrollProgress < 0.5) {
//         setActiveIndex(0);
//       } else {
//         setActiveIndex(1);
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Preload videos when in view
//   useEffect(() => {
//     if (activeIndex === 0 && videoRefMeera.current) {
//       videoRefMeera.current.play().catch(e => console.log('Video play prevented:', e));
//       if (videoRefKaushik.current) videoRefKaushik.current.pause();
//     } else if (activeIndex === 1 && videoRefKaushik.current) {
//       videoRefKaushik.current.play().catch(e => console.log('Video play prevented:', e));
//       if (videoRefMeera.current) videoRefMeera.current.pause();
//     }
//   }, [activeIndex]);

//   const singers = [
//     {
//       id: 0,
//       uniqueId: "meera-the-visionary",
//       name: "MEERA",
//       fullName: "Meera Sridharan",
//       title: "The Visionary Voice",
//       role: "Founder & Lead Vocalist",
//       specialty: "Carnatic • Classical • Soul",
//       description: "A voice that carries the soul of tradition, Meera transforms every performance into a spiritual journey through the depths of Indian classical music.",
//       quote: "Music flows through my veins like the sacred rivers of Bharath",
//       videoUrl: "https://images.pexels.com/photos/8041175/pexels-photo-8041175.jpeg",
//       posterImage: m1,
//       stats: [
//         { value: "25+", label: "Years" },
//         { value: "1000+", label: "Performances" },
//         { value: "50+", label: "Awards" }
//       ],
//       achievements: ["Classical Prodigy", "National Award Winner", "International Performer"],
//       accentColor: "#c9a03d",
//       bgGradient: "linear-gradient(135deg, #fff8f0, #fdf4e3)"
//     },
//     {
//       id: 1,
//       uniqueId: "kaushik-the-performer",
//       name: "KAUSHIK",
//       fullName: "Kaushik Sridharan",
//       title: "The Stage Virtuoso",
//       role: "Lead Performer & Super Singer",
//       specialty: "Versatile • Energetic • Magical",
//       description: "From Super Singer to international stages, Kaushik brings electrifying energy while honoring every musical tradition.",
//       quote: "Every celebration under our banner becomes an eternal memory",
//       videoUrl: "https://images.pexels.com/photos/8041175/pexels-photo-8041175.jpeg",
//       posterImage: m1,
//       stats: [
//         { value: "500+", label: "Concerts" },
//         { value: "7+", label: "Countries" },
//         { value: "15+", label: "Awards" }
//       ],
//       achievements: ["Super Singer Fame", "International Tour", "Trendsetter Award"],
//       accentColor: "#d4a843",
//       bgGradient: "linear-gradient(135deg, #fff5e8, #fdf0e0)"
//     }
//   ];

//   const currentSinger = singers[activeIndex];

//   const handleVideoLoad = (singerId) => {
//     setIsVideoLoaded(prev => ({ ...prev, [singerId]: true }));
//   };

//   return (
//     <section className="mtv-cinematic-wrapper" ref={sectionRef}>
//       {/* MTV - Audio Visualizer */}
//       <div className="mtv-audio-visualizer">
//         {[...Array(32)].map((_, i) => (
//           <div 
//             key={i} 
//             className="mtv-viz-bar"
//             style={{
//               height: `${20 + Math.sin(Date.now() * 0.002 + i) * 30 + Math.sin(progress * Math.PI * 4) * 20}%`,
//               animationDelay: `${i * 0.05}s`,
//               background: `linear-gradient(180deg, ${currentSinger.accentColor}, #ffd700)`
//             }}
//           />
//         ))}
//       </div>

//       {/* MTV - Dynamic Spotlight */}
//       <div 
//         className="mtv-cinematic-spotlight"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${currentSinger.accentColor}15 0%, transparent 60%)`
//         }}
//       />

//       {/* MTV - Subtle Vignette */}
//       <div className="mtv-vignette"></div>

//       {/* MTV - Scroll Progress Bar */}
//       <div className="mtv-scroll-progress">
//         <div className="mtv-progress-bar" style={{ transform: `scaleX(${progress})`, background: currentSinger.accentColor }}></div>
//         <div className="mtv-progress-dots">
//           {singers.map((_, i) => (
//             <div 
//               key={i} 
//               className={`mtv-progress-dot ${activeIndex === i ? 'active' : ''}`}
//               style={{ background: activeIndex === i ? currentSinger.accentColor : '#d4c4a8' }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* MTV - Main Container */}
//       <div className="mtv-cinematic-container">
//         {singers.map((singer, idx) => (
//           <div 
//             key={singer.uniqueId}
//             id={singer.uniqueId}
//             className={`mtv-cinematic-slide ${activeIndex === idx ? 'active' : ''}`}
//             style={{ 
//               transform: `translateX(${(idx - activeIndex) * 100}%)`,
//               opacity: activeIndex === idx ? 1 : 0
//             }}
//           >
//             {/* MTV - Left Side Visual */}
//             <div className="mtv-slide-left" style={{ background: singer.bgGradient }}>
//               <div className="mtv-visual-atmosphere">
                
//                 {/* MTV - Particle Field */}
//                 <div className="mtv-particle-field">
//                   {[...Array(40)].map((_, i) => (
//                     <div 
//                       key={i}
//                       className="mtv-music-particle"
//                       style={{
//                         left: `${Math.random() * 100}%`,
//                         animationDuration: `${3 + Math.random() * 4}s`,
//                         animationDelay: `${Math.random() * 5}s`,
//                         background: singer.accentColor
//                       }}
//                     />
//                   ))}
//                 </div>

//                 {/* MTV - Cinematic Video Frame */}
//                 <div className="mtv-cinematic-frame">
//                   <div className="mtv-frame-glow" style={{ background: singer.accentColor }}></div>
//                   <div className="mtv-video-container">
//                     {/* Video Element */}
//                     <video
//                       ref={idx === 0 ? videoRefMeera : videoRefKaushik}
//                       className="mtv-singer-video"
//                       poster={singer.posterImage}
//                       loop
//                       muted
//                       playsInline
//                       autoPlay={idx === 0}
//                       onLoadedData={() => handleVideoLoad(idx === 0 ? 'meera' : 'kaushik')}
//                     >
//                       <source src={singer.videoUrl} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
                    
//                     {/* Loading Overlay */}
//                     {!isVideoLoaded[idx === 0 ? 'meera' : 'kaushik'] && (
//                       <div className="mtv-video-loading">
//                         <div className="mtv-loading-spinner" style={{ borderColor: singer.accentColor }}></div>
//                         <span>Loading Performance...</span>
//                       </div>
//                     )}
                    
//                     {/* Video Overlay Gradient */}
//                     <div className="mtv-video-overlay"></div>
                    
//                     {/* Play/Pause Overlay */}
//                     <div className="mtv-video-controls">
//                       <button className="mtv-video-play-btn">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                           <path d="M8 5v14l11-7z"/>
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
                  
//                   {/* MTV - Live Badge */}
//                   <div className="mtv-live-badge">
//                     <span className="mtv-live-dot"></span>
//                     LIVE PERFORMANCE
//                   </div>

//                   {/* MTV - Sound Wave Rings */}
//                   <div className="mtv-sound-waves">
//                     <div className="mtv-wave-ring" style={{ borderColor: singer.accentColor }}></div>
//                     <div className="mtv-wave-ring delay-1" style={{ borderColor: singer.accentColor }}></div>
//                     <div className="mtv-wave-ring delay-2" style={{ borderColor: singer.accentColor }}></div>
//                   </div>
//                 </div>

//                 {/* MTV - Floating Musical Notes */}
//                 <div className="mtv-floating-notes">
//                   {['♪', '♫', '♪', '♫', '♪', '♫'].map((note, i) => (
//                     <span 
//                       key={i}
//                       className={`mtv-note note-${i}`}
//                       style={{ 
//                         animationDelay: `${i * 0.4}s`,
//                         color: singer.accentColor,
//                         textShadow: `0 0 10px ${singer.accentColor}40`
//                       }}
//                     >
//                       {note}
//                     </span>
//                   ))}
//                 </div>

//                 {/* MTV - Traditional Kolam Dots */}
//                 <div className="mtv-kolam-dots">
//                   {[...Array(12)].map((_, i) => (
//                     <div key={i} className="mtv-kolam-dot" style={{ background: singer.accentColor }}></div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* MTV - Right Side Content */}
//             <div className="mtv-slide-right">
//               <div className="mtv-content-wrapper">
//                 <div className="mtv-content-reveal">
                  
//                   {/* MTV - Singer Tag */}
//                   <span className="mtv-singer-tag" style={{ color: singer.accentColor }}>
//                     ◉ {singer.title} ◉
//                   </span>
                  
//                   {/* MTV - Singer Name */}
//                   <h1 className="mtv-singer-name">
//                     {singer.name}
//                     <span className="mtv-name-glow" style={{ background: singer.accentColor }}></span>
//                   </h1>
                  
//                   {/* MTV - Full Name */}
//                   <p className="mtv-singer-fullname">{singer.fullName}</p>
                  
//                   {/* MTV - Role Badge */}
//                   <div className="mtv-role-badge" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
//                     {singer.role}
//                   </div>
                  
//                   {/* MTV - Specialty */}
//                   <div className="mtv-specialty">
//                     <span className="mtv-specialty-dot" style={{ background: singer.accentColor }}></span>
//                     {singer.specialty}
//                   </div>

//                   {/* MTV - Description */}
//                   <p className="mtv-description">{singer.description}</p>

//                   {/* MTV - Quote Block */}
//                   <div className="mtv-quote-block" style={{ borderLeftColor: singer.accentColor }}>
//                     <span className="mtv-quote-mark">"</span>
//                     {singer.quote}
//                     <span className="mtv-quote-mark">"</span>
//                   </div>

//                   {/* MTV - Stats Grid */}
//                   <div className="mtv-stats-grid">
//                     {singer.stats.map((stat, i) => (
//                       <div key={i} className="mtv-stat-card">
//                         <div className="mtv-stat-value" style={{ color: singer.accentColor }}>
//                           {stat.value}
//                         </div>
//                         <div className="mtv-stat-label">{stat.label}</div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* MTV - Achievements */}
//                   <div className="mtv-achievements">
//                     {singer.achievements.map((achievement, i) => (
//                       <div key={i} className="mtv-achievement-tag" style={{ borderColor: singer.accentColor }}>
//                         <span className="mtv-achievement-dot" style={{ background: singer.accentColor }}></span>
//                         {achievement}
//                       </div>
//                     ))}
//                   </div>

//                   {/* MTV - CTA Button */}
//                   <button className="mtv-cta-button" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
//                     <span>Experience The Magic</span>
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MTV - Navigation Arrows */}
//       <div className="mtv-nav-arrows">
//         <button 
//           className={`mtv-nav-arrow prev ${activeIndex === 0 ? 'disabled' : ''}`}
//           onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </button>
//         <button 
//           className={`mtv-nav-arrow next ${activeIndex === singers.length - 1 ? 'disabled' : ''}`}
//           onClick={() => activeIndex < singers.length - 1 && setActiveIndex(activeIndex + 1)}
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </button>
//       </div>

//       {/* MTV - Scroll Indicator */}
//       <div className="mtv-scroll-indicator">
//         <span>SCROLL</span>
//         <div className="mtv-scroll-mouse">
//           <div className="mtv-scroll-wheel" style={{ background: currentSinger.accentColor }}></div>
//         </div>
//       </div>

//       {/* MTV - Video Hint Tooltip */}
//       <div className="mtv-video-hint">
//         <span className="mtv-hint-icon">🎥</span>
//         <span>Watch Live Performance</span>
//       </div>
//     </section>
//   );
// };

// export default MeetTheVoices;





import { useEffect, useRef, useState } from 'react';
import './MeetTheVoices.css';
import m1 from "../assets/hero.png";
import meeraVideo from "../assets/vidone.mp4";
import kaushikVideo from "../assets/vidtwo.mp4";

const MeetTheVoices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState({ meera: false, kaushik: false });
  const [isPlaying, setIsPlaying] = useState({ meera: true, kaushik: false });
  const sectionRef = useRef(null);
  const videoRefMeera = useRef(null);
  const videoRefKaushik = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);
      setProgress(Math.min(1, Math.max(0, scrollProgress)));
      
      if (scrollProgress < 0.5) {
        setActiveIndex(0);
      } else {
        setActiveIndex(1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle video playback based on active index
  useEffect(() => {
    if (activeIndex === 0) {
      // Play Meera's video, pause Kaushik's
      if (videoRefMeera.current) {
        videoRefMeera.current.play().catch(e => console.log('Meera video play:', e));
        setIsPlaying(prev => ({ ...prev, meera: true }));
      }
      if (videoRefKaushik.current) {
        videoRefKaushik.current.pause();
        setIsPlaying(prev => ({ ...prev, kaushik: false }));
      }
    } else {
      // Play Kaushik's video, pause Meera's
      if (videoRefKaushik.current) {
        videoRefKaushik.current.play().catch(e => console.log('Kaushik video play:', e));
        setIsPlaying(prev => ({ ...prev, kaushik: true }));
      }
      if (videoRefMeera.current) {
        videoRefMeera.current.pause();
        setIsPlaying(prev => ({ ...prev, meera: false }));
      }
    }
  }, [activeIndex]);

  const toggleVideoPlay = (singerId) => {
    if (singerId === 'meera' && videoRefMeera.current) {
      if (isPlaying.meera) {
        videoRefMeera.current.pause();
      } else {
        videoRefMeera.current.play();
      }
      setIsPlaying(prev => ({ ...prev, meera: !prev.meera }));
    } else if (singerId === 'kaushik' && videoRefKaushik.current) {
      if (isPlaying.kaushik) {
        videoRefKaushik.current.pause();
      } else {
        videoRefKaushik.current.play();
      }
      setIsPlaying(prev => ({ ...prev, kaushik: !prev.kaushik }));
    }
  };

  // Video URLs - Replace these with your actual video files
  const singers = [
    {
      id: 0,
      uniqueId: "meera-the-visionary",
      name: "MEERA SRIDHARAN",
      fullName: "Meera Sridharan",
      title: "The Visionary Voice",
      role: "Founder & Lead Vocalist",
      specialty: "Carnatic • Classical • Soul",
      description: "A voice that carries the soul of tradition, Meera transforms every performance into a spiritual journey through the depths of Indian classical music.",
      quote: "Music flows through my veins like the sacred rivers of Bharath",
      videoUrl: kaushikVideo, // Classical performance vibe
      posterImage: m1,
      stats: [
        { value: "25+", label: "Years" },
        { value: "1000+", label: "Performances" },
        { value: "50+", label: "Awards" }
      ],
      achievements: ["Classical Prodigy", "National Award Winner", "International Performer"],
      accentColor: "#c9a03d",
      bgGradient: "linear-gradient(135deg, #fff8f0, #fdf4e3)"
    },
    {
      id: 1,
      uniqueId: "kaushik-the-performer",
      name: "KAUSHIK SRIDHARAN",
      fullName: "Kaushik Sridharan",
      title: "The Stage Virtuoso",
      role: "Lead Performer & Super Singer",
      specialty: "Versatile • Energetic • Magical",
      description: "From Super Singer to international stages, Kaushik brings electrifying energy while honoring every musical tradition.",
      quote: "Every celebration under our banner becomes an eternal memory",
      videoUrl: meeraVideokaushikVideo, // Energetic performance vibe
      posterImage: m1,
      stats: [
        { value: "500+", label: "Concerts" },
        { value: "7+", label: "Countries" },
        { value: "15+", label: "Awards" }
      ],
      achievements: ["Super Singer Fame", "International Tour", "Trendsetter Award"],
      accentColor: "#d4a843",
      bgGradient: "linear-gradient(135deg, #fff5e8, #fdf0e0)"
    }
  ];

  const currentSinger = singers[activeIndex];

  const handleVideoLoad = (singerId) => {
    setIsVideoLoaded(prev => ({ ...prev, [singerId]: true }));
  };

  return (
    <section className="mtv-cinematic-wrapper" ref={sectionRef}>
      {/* MTV - Audio Visualizer */}
      <div className="mtv-audio-visualizer">
        {[...Array(32)].map((_, i) => (
          <div 
            key={i} 
            className="mtv-viz-bar"
            style={{
              height: `${20 + Math.sin(Date.now() * 0.002 + i) * 30 + Math.sin(progress * Math.PI * 4) * 20}%`,
              animationDelay: `${i * 0.05}s`,
              background: `linear-gradient(180deg, ${currentSinger.accentColor}, #ffd700)`
            }}
          />
        ))}
      </div>

      {/* MTV - Dynamic Spotlight */}
      <div 
        className="mtv-cinematic-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${currentSinger.accentColor}15 0%, transparent 60%)`
        }}
      />

      {/* MTV - Subtle Vignette */}
      <div className="mtv-vignette"></div>

      {/* MTV - Scroll Progress Bar */}
      <div className="mtv-scroll-progress">
        <div className="mtv-progress-bar" style={{ transform: `scaleX(${progress})`, background: currentSinger.accentColor }}></div>
        <div className="mtv-progress-dots">
          {singers.map((_, i) => (
            <div 
              key={i} 
              className={`mtv-progress-dot ${activeIndex === i ? 'active' : ''}`}
              style={{ background: activeIndex === i ? currentSinger.accentColor : '#d4c4a8' }}
            />
          ))}
        </div>
      </div>

      {/* MTV - Main Container */}
      <div className="mtv-cinematic-container">
        {singers.map((singer, idx) => (
          <div 
            key={singer.uniqueId}
            id={singer.uniqueId}
            className={`mtv-cinematic-slide ${activeIndex === idx ? 'active' : ''}`}
            style={{ 
              transform: `translateX(${(idx - activeIndex) * 100}%)`,
              opacity: activeIndex === idx ? 1 : 0
            }}
          >
            {/* MTV - Left Side Visual with Video Background */}
            <div className="mtv-slide-left" style={{ background: singer.bgGradient }}>
              {/* Video Background for the left side */}
              <div className="mtv-video-background">
                <video
                  ref={idx === 0 ? videoRefMeera : videoRefKaushik}
                  className="mtv-bg-video"
                  poster={singer.posterImage}
                  loop
                  muted
                  playsInline
                  autoPlay={idx === 0}
                  onLoadedData={() => handleVideoLoad(idx === 0 ? 'meera' : 'kaushik')}
                >
                  <source src={singer.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="mtv-video-overlay-bg"></div>
              </div>

              <div className="mtv-visual-atmosphere">
                
                {/* MTV - Particle Field */}
                <div className="mtv-particle-field">
                  {[...Array(40)].map((_, i) => (
                    <div 
                      key={i}
                      className="mtv-music-particle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${3 + Math.random() * 4}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        background: singer.accentColor
                      }}
                    />
                  ))}
                </div>

                {/* MTV - Cinematic Frame with Singer Image Overlay */}
                <div className="mtv-cinematic-frame">
                  <div className="mtv-frame-glow" style={{ background: singer.accentColor }}></div>
                  <div className="mtv-image-container">
                    <img 
                      src={singer.posterImage}
                      alt={singer.fullName}
                      className="mtv-singer-portrait"
                    />
                    <div className="mtv-image-overlay"></div>
                  </div>
                  
             

                  {/* MTV - Sound Wave Rings */}
                  <div className="mtv-sound-waves">
                    <div className="mtv-wave-ring" style={{ borderColor: singer.accentColor }}></div>
                    <div className="mtv-wave-ring delay-1" style={{ borderColor: singer.accentColor }}></div>
                    <div className="mtv-wave-ring delay-2" style={{ borderColor: singer.accentColor }}></div>
                  </div>
                </div>

                {/* MTV - Floating Musical Notes */}
                <div className="mtv-floating-notes">
                  {['♪', '♫', '♪', '♫', '♪', '♫'].map((note, i) => (
                    <span 
                      key={i}
                      className={`mtv-note note-${i}`}
                      style={{ 
                        animationDelay: `${i * 0.4}s`,
                        color: singer.accentColor,
                        textShadow: `0 0 10px ${singer.accentColor}40`
                      }}
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* MTV - Traditional Kolam Dots */}
                <div className="mtv-kolam-dots">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="mtv-kolam-dot" style={{ background: singer.accentColor }}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* MTV - Right Side Content */}
            <div className="mtv-slide-right">
              <div className="mtv-content-wrapper">
                <div className="mtv-content-reveal">
                  
                  {/* MTV - Singer Tag */}
                  <span className="mtv-singer-tag" style={{ color: singer.accentColor }}>
                    ◉ {singer.title} ◉
                  </span>
                  
                  {/* MTV - Singer Name */}
                  <h1 className="mtv-singer-name">
                    {singer.name}
                    <span className="mtv-name-glow" style={{ background: singer.accentColor }}></span>
                  </h1>
                  
                  {/* MTV - Full Name */}
                  {/* <p className="mtv-singer-fullname">{singer.fullName}</p> */}
                  
                  {/* MTV - Role Badge */}
                  <div className="mtv-role-badge" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
                    {singer.role}
                  </div>
                  
                  {/* MTV - Specialty */}
                  <div className="mtv-specialty">
                    <span className="mtv-specialty-dot" style={{ background: singer.accentColor }}></span>
                    {singer.specialty}
                  </div>

                  {/* MTV - Description */}
                  <p className="mtv-description">{singer.description}</p>

                  {/* MTV - Quote Block */}
                  <div className="mtv-quote-block" style={{ borderLeftColor: singer.accentColor }}>
                    <span className="mtv-quote-mark">"</span>
                    {singer.quote}
                    <span className="mtv-quote-mark">"</span>
                  </div>

                  {/* MTV - Stats Grid */}
                  <div className="mtv-stats-grid">
                    {singer.stats.map((stat, i) => (
                      <div key={i} className="mtv-stat-card">
                        <div className="mtv-stat-value" style={{ color: singer.accentColor }}>
                          {stat.value}
                        </div>
                        <div className="mtv-stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* MTV - Achievements */}
                  <div className="mtv-achievements">
                    {singer.achievements.map((achievement, i) => (
                      <div key={i} className="mtv-achievement-tag" style={{ borderColor: singer.accentColor }}>
                        <span className="mtv-achievement-dot" style={{ background: singer.accentColor }}></span>
                        {achievement}
                      </div>
                    ))}
                  </div>

                  {/* MTV - CTA Button */}
                  <button className="mtv-cta-button" style={{ borderColor: singer.accentColor, color: singer.accentColor }}>
                    <span>Experience The Magic</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MTV - Navigation Arrows */}
      <div className="mtv-nav-arrows">
        <button 
          className={`mtv-nav-arrow prev ${activeIndex === 0 ? 'disabled' : ''}`}
          onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button 
          className={`mtv-nav-arrow next ${activeIndex === singers.length - 1 ? 'disabled' : ''}`}
          onClick={() => activeIndex < singers.length - 1 && setActiveIndex(activeIndex + 1)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* MTV - Scroll Indicator */}
      {/* <div className="mtv-scroll-indicator">
        <span>SCROLL</span>
        <div className="mtv-scroll-mouse">
          <div className="mtv-scroll-wheel" style={{ background: currentSinger.accentColor }}></div>
        </div>
      </div> */}
    </section>
  );
};

export default MeetTheVoices;






