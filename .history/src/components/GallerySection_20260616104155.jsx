// // // import { useEffect, useRef, useState } from 'react';
// // // import './GallerySection.css';

// // // const gallery = [
// // //   { src: "/gallery/1.jpg", orientation: "portrait", category: "Live Performance" },
// // //   { src: "/gallery/2.jpg", orientation: "landscape", category: "Backstage" },
// // //   { src: "/gallery/3.jpg", orientation: "portrait", category: "Crowd Moments" },
// // //   { src: "/gallery/4.jpg", orientation: "square", category: "Artist Portrait" },
// // //   { src: "/gallery/5.jpg", orientation: "landscape", category: "Stage Design" },
// // //   { src: "/gallery/6.jpg", orientation: "portrait", category: "Behind The Scenes" },
// // //   { src: "/gallery/7.jpg", orientation: "landscape", category: "Live Performance" },
// // //   { src: "/gallery/8.jpg", orientation: "square", category: "Crowd Moments" },
// // //   { src: "/gallery/9.jpg", orientation: "portrait", category: "Artist Portrait" },
// // //   { src: "/gallery/10.jpg", orientation: "landscape", category: "Stage Design" },
// // // ];

// // // const GallerySection = () => {
// // //   const [activeFilter, setActiveFilter] = useState('All');
// // //   const [lightboxIndex, setLightboxIndex] = useState(null);
// // //   const [hoveredIndex, setHoveredIndex] = useState(null);
// // //   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
// // //   const sectionRef = useRef(null);

// // //   const categories = ['All', 'Live Performance', 'Backstage', 'Artist Portrait', 'Stage Design', 'Crowd Moments', 'Behind The Scenes'];
  
// // //   const filteredGallery = activeFilter === 'All' 
// // //     ? gallery 
// // //     : gallery.filter(item => item.category === activeFilter);

// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       if (!sectionRef.current) return;
// // //       const rect = sectionRef.current.getBoundingClientRect();
// // //       setMousePos({
// // //         x: ((e.clientX - rect.left) / rect.width) * 100,
// // //         y: ((e.clientY - rect.top) / rect.height) * 100
// // //       });
// // //     };

// // //     window.addEventListener('mousemove', handleMouseMove);
// // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // //   }, []);

// // //   const openLightbox = (index) => {
// // //     setLightboxIndex(index);
// // //     document.body.style.overflow = 'hidden';
// // //   };

// // //   const closeLightbox = () => {
// // //     setLightboxIndex(null);
// // //     document.body.style.overflow = '';
// // //   };

// // //   const navigateLightbox = (direction) => {
// // //     const newIndex = lightboxIndex + direction;
// // //     if (newIndex >= 0 && newIndex < filteredGallery.length) {
// // //       setLightboxIndex(newIndex);
// // //     }
// // //   };

// // //   // Keyboard navigation
// // //   useEffect(() => {
// // //     const handleKeyDown = (e) => {
// // //       if (lightboxIndex === null) return;
// // //       if (e.key === 'Escape') closeLightbox();
// // //       if (e.key === 'ArrowLeft') navigateLightbox(-1);
// // //       if (e.key === 'ArrowRight') navigateLightbox(1);
// // //     };

// // //     window.addEventListener('keydown', handleKeyDown);
// // //     return () => window.removeEventListener('keydown', handleKeyDown);
// // //   }, [lightboxIndex]);

// // //   return (
// // //     <section className="gallery-section" ref={sectionRef}>
// // //       {/* Dynamic Spotlight */}
// // //       <div 
// // //         className="gallery-spotlight"
// // //         style={{
// // //           background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 180, 0, 0.08) 0%, transparent 50%)`
// // //         }}
// // //       />

// // //       {/* Stage Light Beams */}
// // //       <div className="gallery-beams">
// // //         <div className="gallery-beam gallery-beam-1"></div>
// // //         <div className="gallery-beam gallery-beam-2"></div>
// // //         <div className="gallery-beam gallery-beam-3"></div>
// // //       </div>

// // //       {/* Floating Particles */}
// // //       <div className="gallery-particles">
// // //         {[...Array(25)].map((_, i) => (
// // //           <div
// // //             key={i}
// // //             className="gallery-particle"
// // //             style={{
// // //               left: `${Math.random() * 100}%`,
// // //               top: `${Math.random() * 100}%`,
// // //               animationDelay: `${Math.random() * 8}s`,
// // //               animationDuration: `${4 + Math.random() * 6}s`,
// // //             }}
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* Energy Waves */}
// // //       <div className="gallery-waves">
// // //         <div className="gallery-wave gallery-wave-1"></div>
// // //         <div className="gallery-wave gallery-wave-2"></div>
// // //       </div>

// // //       {/* Header Area */}
// // //       <div className="gallery-header-container">
// // //         <div className="gallery-header-left">
// // //           <div className="gallery-header-badge">
// // //             <span className="gallery-badge-dot"></span>
// // //             PORTFOLIO
// // //           </div>
// // //           <h2 className="gallery-headline">
// // //             <span className="gallery-headline-line">Captured</span>
// // //             <span className="gallery-headline-line gallery-headline-gold">Moments</span>
// // //           </h2>
// // //         </div>
        
// // //         <div className="gallery-header-right">
// // //           <p className="gallery-description">
// // //             A visual journey through our most memorable performances, 
// // //             behind-the-scenes magic, and the energy that defines us.
// // //           </p>
          
// // //           {/* Category Filters */}
// // //           <div className="gallery-filters">
// // //             {categories.map((category) => (
// // //               <button
// // //                 key={category}
// // //                 className={`gallery-filter-btn ${activeFilter === category ? 'gallery-filter-active' : ''}`}
// // //                 onClick={() => setActiveFilter(category)}
// // //               >
// // //                 {category}
// // //                 {activeFilter === category && <span className="gallery-filter-dot"></span>}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Masonry Grid */}
// // //       <div className="gallery-grid">
// // //         {filteredGallery.map((item, index) => (
// // //           <div
// // //             key={index}
// // //             className={`gallery-item gallery-item-${item.orientation} ${hoveredIndex === index ? 'gallery-item-hover' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'gallery-item-dimmed' : ''}`}
// // //             onMouseEnter={() => setHoveredIndex(index)}
// // //             onMouseLeave={() => setHoveredIndex(null)}
// // //             onClick={() => openLightbox(index)}
// // //           >
// // //             <div className="gallery-item-inner">
// // //               {/* Image */}
// // //               <img
// // //                 src={item.src}
// // //                 alt={item.category}
// // //                 className="gallery-image"
// // //                 loading="lazy"
// // //                 onError={(e) => { e.target.style.display = 'none'; }}
// // //               />
              
// // //               {/* Dark Overlay */}
// // //               <div className="gallery-overlay"></div>

// // //               {/* Hover Content */}
// // //               <div className="gallery-hover-content">
// // //                 <div className="gallery-hover-category">{item.category}</div>
// // //                 <div className="gallery-hover-action">
// // //                   <span>View Image</span>
// // //                   <span className="gallery-hover-arrow">→</span>
// // //                 </div>
// // //               </div>

// // //               {/* Stage Light Effect */}
// // //               <div className="gallery-stage-light"></div>

// // //               {/* Corner Accents */}
// // //               <div className="gallery-corners">
// // //                 <span className="gallery-corner gallery-corner-tl"></span>
// // //                 <span className="gallery-corner gallery-corner-tr"></span>
// // //                 <span className="gallery-corner gallery-corner-bl"></span>
// // //                 <span className="gallery-corner gallery-corner-br"></span>
// // //               </div>

// // //               {/* Image Number */}
// // //               <div className="gallery-item-number">0{index + 1}</div>
// // //             </div>

// // //             {/* Caption */}
// // //             <div className="gallery-caption">
// // //               <span className="gallery-caption-text">{item.category}</span>
// // //               <span className="gallery-caption-line"></span>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Lightbox */}
// // //       {lightboxIndex !== null && (
// // //         <div className="gallery-lightbox" onClick={closeLightbox}>
// // //           {/* Lightbox Particles */}
// // //           <div className="gallery-lightbox-particles">
// // //             {[...Array(15)].map((_, i) => (
// // //               <div
// // //                 key={i}
// // //                 className="gallery-lightbox-particle"
// // //                 style={{
// // //                   left: `${Math.random() * 100}%`,
// // //                   animationDelay: `${Math.random() * 4}s`,
// // //                   animationDuration: `${3 + Math.random() * 4}s`,
// // //                 }}
// // //               />
// // //             ))}
// // //           </div>

// // //           <div className="gallery-lightbox-header">
// // //             <button className="gallery-lightbox-close" onClick={closeLightbox}>
// // //               <span>✕</span>
// // //             </button>
// // //             <div className="gallery-lightbox-info">
// // //               <span className="gallery-lightbox-category-name">
// // //                 {filteredGallery[lightboxIndex].category}
// // //               </span>
// // //               <span className="gallery-lightbox-counter">
// // //                 {lightboxIndex + 1} / {filteredGallery.length}
// // //               </span>
// // //             </div>
// // //           </div>

// // //           <button 
// // //             className="gallery-lightbox-nav gallery-lightbox-prev"
// // //             onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
// // //             disabled={lightboxIndex === 0}
// // //           >
// // //             <span>←</span>
// // //           </button>

// // //           <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
// // //             <img
// // //               src={filteredGallery[lightboxIndex].src}
// // //               alt={filteredGallery[lightboxIndex].category}
// // //               className="gallery-lightbox-image"
// // //             />
// // //           </div>

// // //           <button 
// // //             className="gallery-lightbox-nav gallery-lightbox-next"
// // //             onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
// // //             disabled={lightboxIndex === filteredGallery.length - 1}
// // //           >
// // //             <span>→</span>
// // //           </button>

// // //           {/* Bottom Energy Bar */}
// // //           <div className="gallery-lightbox-energy">
// // //             {[...Array(20)].map((_, i) => (
// // //               <div
// // //                 key={i}
// // //                 className="gallery-lightbox-bar"
// // //                 style={{
// // //                   animationDelay: `${i * 0.1}s`,
// // //                   height: `${6 + Math.random() * 20}px`
// // //                 }}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Bottom */}
// // //       <div className="gallery-footer">
// // //         <div className="gallery-footer-content">
// // //           <span className="gallery-footer-icon">✦</span>
// // //           <p className="gallery-footer-text">
// // //             Every frame captures a story worth telling
// // //           </p>
// // //           <span className="gallery-footer-icon">✦</span>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default GallerySection;


// // import React, { useEffect, useRef, useState } from 'react';
// // import './GallerySection.css';

// // const gallery = [
// //   { src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg", orientation: "portrait", category: "Live Performance" },
// //   { src: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg", orientation: "landscape", category: "Backstage" },
// //   { src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg", orientation: "portrait", category: "Crowd Moments" },
// //   { src: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg", orientation: "square", category: "Artist Portrait" },
// //   { src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg", orientation: "landscape", category: "Stage Design" },
// //   { src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg", orientation: "portrait", category: "Behind The Scenes" },
// //   { src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg", orientation: "landscape", category: "Live Performance" },
// //   { src: "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg", orientation: "square", category: "Crowd Moments" },
// //   { src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg", orientation: "portrait", category: "Artist Portrait" },
// //   { src: "https://images.pexels.com/photos/2253876/pexels-photo-2253876.jpeg", orientation: "landscape", category: "Stage Design" },
// //   { src: "https://images.pexels.com/photos/15789084/pexels-photo-15789084.jpeg", orientation: "portrait", category: "Live Performance" },
// //   { src: "https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg", orientation: "landscape", category: "Backstage" },
// // ];

// // const GallerySection = () => {
// //   const [activeFilter, setActiveFilter] = useState('All');
// //   const [lightboxIndex, setLightboxIndex] = useState(null);
// //   const [hoveredIndex, setHoveredIndex] = useState(null);
// //   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
// //   const [scrollProgress, setScrollProgress] = useState(0);
// //   const sectionRef = useRef(null);

// //   const categories = ['All', 'Live Performance', 'Backstage', 'Artist Portrait', 'Stage Design', 'Crowd Moments', 'Behind The Scenes'];
  
// //   const filteredGallery = activeFilter === 'All' 
// //     ? gallery 
// //     : gallery.filter(item => item.category === activeFilter);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (!sectionRef.current) return;
// //       const rect = sectionRef.current.getBoundingClientRect();
// //       const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
// //       setScrollProgress(progress);
// //     };

// //     const handleMouseMove = (e) => {
// //       if (!sectionRef.current) return;
// //       const rect = sectionRef.current.getBoundingClientRect();
// //       setMousePos({
// //         x: ((e.clientX - rect.left) / rect.width) * 100,
// //         y: ((e.clientY - rect.top) / rect.height) * 100
// //       });
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //       window.removeEventListener('mousemove', handleMouseMove);
// //     };
// //   }, []);

// //   const openLightbox = (index) => {
// //     setLightboxIndex(index);
// //     document.body.style.overflow = 'hidden';
// //   };

// //   const closeLightbox = () => {
// //     setLightboxIndex(null);
// //     document.body.style.overflow = '';
// //   };

// //   const navigateLightbox = (direction) => {
// //     const newIndex = lightboxIndex + direction;
// //     if (newIndex >= 0 && newIndex < filteredGallery.length) {
// //       setLightboxIndex(newIndex);
// //     }
// //   };

// //   useEffect(() => {
// //     const handleKeyDown = (e) => {
// //       if (lightboxIndex === null) return;
// //       if (e.key === 'Escape') closeLightbox();
// //       if (e.key === 'ArrowLeft') navigateLightbox(-1);
// //       if (e.key === 'ArrowRight') navigateLightbox(1);
// //     };

// //     window.addEventListener('keydown', handleKeyDown);
// //     return () => window.removeEventListener('keydown', handleKeyDown);
// //   }, [lightboxIndex]);

// //   return (
// //     <section className="gallery-cinematic-section" ref={sectionRef}>
// //       {/* Premium Dark Background */}
// //       <div className="gallery-cinematic-bg"></div>
// //       <div className="gallery-cinematic-pattern"></div>
// //       <div className="gallery-cinematic-glow"></div>

// //       {/* Dynamic Spotlight */}
// //       <div 
// //         className="gallery-cinematic-spotlight"
// //         style={{
// //           background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.12) 0%, rgba(201, 160, 61, 0.04) 40%, transparent 70%)`
// //         }}
// //       />

// //       {/* Cinematic Light Rays */}
// //       <div className="gallery-cinematic-rays">
// //         <div className="gallery-cinematic-ray"></div>
// //         <div className="gallery-cinematic-ray"></div>
// //         <div className="gallery-cinematic-ray"></div>
// //         <div className="gallery-cinematic-ray"></div>
// //         <div className="gallery-cinematic-ray"></div>
// //       </div>

// //       {/* Floating Particles */}
// //       <div className="gallery-cinematic-particles">
// //         {[...Array(50)].map((_, i) => (
// //           <div
// //             key={i}
// //             className="gallery-cinematic-particle"
// //             style={{
// //               left: `${Math.random() * 100}%`,
// //               top: `${Math.random() * 100}%`,
// //               animationDelay: `${Math.random() * 12}s`,
// //               animationDuration: `${6 + Math.random() * 10}s`,
// //               width: `${2 + Math.random() * 4}px`,
// //               height: `${2 + Math.random() * 4}px`
// //             }}
// //           />
// //         ))}
// //       </div>

// //       {/* Film Grain Overlay */}
// //       <div className="gallery-cinematic-grain"></div>

// //       {/* Main Container */}
// //       <div className="gallery-cinematic-container">
        
// //         {/* Header Section */}
// //         <div className="gallery-cinematic-header">
// //           <div className="gallery-cinematic-header-left">
// //             <div className="gallery-cinematic-badge">
// //               <span className="gallery-cinematic-badge-dot"></span>
// //               <span className="gallery-cinematic-badge-text">VISUAL STORIES</span>
// //               <span className="gallery-cinematic-badge-dot"></span>
// //             </div>

// //             <h2 className="gallery-cinematic-title">
// //               <span className="gallery-cinematic-title-light">Captured</span>
// //               <span className="gallery-cinematic-title-bold">Moments</span>
// //             </h2>

// //             <div className="gallery-cinematic-divider">
// //               <span className="gallery-cinematic-divider-line"></span>
// //               <span className="gallery-cinematic-divider-diamond">◈</span>
// //               <span className="gallery-cinematic-divider-line"></span>
// //             </div>
// //           </div>

// //           <div className="gallery-cinematic-header-right">
// //             <p className="gallery-cinematic-description">
// //               A visual journey through our most memorable performances, 
// //               behind-the-scenes magic, and the energy that defines us.
// //             </p>
            
// //             {/* Category Filters */}
// //             <div className="gallery-cinematic-filters">
// //               {categories.map((category) => (
// //                 <button
// //                   key={category}
// //                   className={`gallery-cinematic-filter ${activeFilter === category ? 'active' : ''}`}
// //                   onClick={() => setActiveFilter(category)}
// //                 >
// //                   <span className="gallery-cinematic-filter-dot"></span>
// //                   {category}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Masonry Grid */}
// //         <div className="gallery-cinematic-grid">
// //           {filteredGallery.map((item, index) => (
// //             <div
// //               key={index}
// //               className={`gallery-cinematic-card gallery-cinematic-card--${item.orientation} ${hoveredIndex === index ? 'hovered' : ''}`}
// //               onMouseEnter={() => setHoveredIndex(index)}
// //               onMouseLeave={() => setHoveredIndex(null)}
// //               onClick={() => openLightbox(index)}
// //               style={{ animationDelay: `${index * 0.05}s` }}
// //             >
// //               <div className="gallery-cinematic-card-inner">
// //                 {/* Image */}
// //                 <img
// //                   src={item.src}
// //                   alt={item.category}
// //                   className="gallery-cinematic-image"
// //                   loading="lazy"
// //                 />
                
// //                 {/* Overlay Layers */}
// //                 <div className="gallery-cinematic-overlay"></div>
// //                 <div className="gallery-cinematic-gradient"></div>

// //                 {/* Hover Content */}
// //                 <div className="gallery-cinematic-hover">
// //                   <div className="gallery-cinematic-hover-category">{item.category}</div>
// //                   <div className="gallery-cinematic-hover-action">
// //                     <span>View Gallery</span>
// //                     <span className="gallery-cinematic-hover-arrow">→</span>
// //                   </div>
// //                 </div>

// //                 {/* Corner Accents */}
// //                 <div className="gallery-cinematic-corners">
// //                   <div className="gallery-cinematic-corner tl"></div>
// //                   <div className="gallery-cinematic-corner tr"></div>
// //                   <div className="gallery-cinematic-corner bl"></div>
// //                   <div className="gallery-cinematic-corner br"></div>
// //                 </div>

// //                 {/* Image Counter */}
// //                 <div className="gallery-cinematic-counter">
// //                   <span>0{index + 1}</span>
// //                   <div className="gallery-cinematic-counter-line"></div>
// //                 </div>

// //                 {/* Stage Light Effect */}
// //                 <div className="gallery-cinematic-stage-light"></div>
// //               </div>

// //               {/* Caption */}
// //               <div className="gallery-cinematic-caption">
// //                 <span className="gallery-cinematic-caption-text">{item.category}</span>
// //                 <div className="gallery-cinematic-caption-line"></div>
// //               </div>

// //               {/* Card Glow */}
// //               <div className="gallery-cinematic-card-glow"></div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Footer Quote */}
// //         <div className="gallery-cinematic-footer">
// //           <div className="gallery-cinematic-footer-line"></div>
// //           <div className="gallery-cinematic-footer-content">
// //             <span className="gallery-cinematic-footer-icon">◈</span>
// //             <p className="gallery-cinematic-footer-text">
// //               Every frame captures a story worth telling
// //             </p>
// //             <span className="gallery-cinematic-footer-icon">◈</span>
// //           </div>
// //           <div className="gallery-cinematic-footer-line"></div>
// //         </div>
// //       </div>

// //       {/* Lightbox Modal */}
// //       {lightboxIndex !== null && (
// //         <div className="gallery-cinematic-lightbox" onClick={closeLightbox}>
// //           {/* Lightbox Background Effects */}
// //           <div className="gallery-cinematic-lightbox-bg"></div>
// //           <div className="gallery-cinematic-lightbox-particles">
// //             {[...Array(30)].map((_, i) => (
// //               <div
// //                 key={i}
// //                 className="gallery-cinematic-lightbox-particle"
// //                 style={{
// //                   left: `${Math.random() * 100}%`,
// //                   animationDelay: `${Math.random() * 6}s`,
// //                   animationDuration: `${4 + Math.random() * 6}s`,
// //                 }}
// //               />
// //             ))}
// //           </div>

// //           {/* Lightbox Header */}
// //           <div className="gallery-cinematic-lightbox-header">
// //             <button className="gallery-cinematic-lightbox-close" onClick={closeLightbox}>
// //               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //                 <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
// //               </svg>
// //             </button>
// //             <div className="gallery-cinematic-lightbox-info">
// //               <span className="gallery-cinematic-lightbox-category">
// //                 {filteredGallery[lightboxIndex].category}
// //               </span>
// //               <span className="gallery-cinematic-lightbox-counter">
// //                 <span className="gallery-cinematic-lightbox-current">{String(lightboxIndex + 1).padStart(2, '0')}</span>
// //                 <span className="gallery-cinematic-lightbox-sep">/</span>
// //                 <span className="gallery-cinematic-lightbox-total">{String(filteredGallery.length).padStart(2, '0')}</span>
// //               </span>
// //             </div>
// //           </div>

// //           {/* Navigation Buttons */}
// //           <button 
// //             className="gallery-cinematic-lightbox-nav prev"
// //             onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
// //             disabled={lightboxIndex === 0}
// //           >
// //             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //               <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
// //             </svg>
// //           </button>

// //           {/* Lightbox Content */}
// //           <div className="gallery-cinematic-lightbox-content" onClick={(e) => e.stopPropagation()}>
// //             <img
// //               src={filteredGallery[lightboxIndex].src}
// //               alt={filteredGallery[lightboxIndex].category}
// //               className="gallery-cinematic-lightbox-image"
// //             />
// //             <div className="gallery-cinematic-lightbox-glow"></div>
// //           </div>

// //           <button 
// //             className="gallery-cinematic-lightbox-nav next"
// //             onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
// //             disabled={lightboxIndex === filteredGallery.length - 1}
// //           >
// //             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //               <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round"/>
// //             </svg>
// //           </button>

// //           {/* Lightbox Footer */}
// //           <div className="gallery-cinematic-lightbox-footer">
// //             <div className="gallery-cinematic-lightbox-dots">
// //               {filteredGallery.map((_, i) => (
// //                 <div 
// //                   key={i} 
// //                   className={`gallery-cinematic-lightbox-dot ${i === lightboxIndex ? 'active' : ''}`}
// //                   onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* Bottom Energy Bar */}
// //           <div className="gallery-cinematic-lightbox-audio">
// //             {[...Array(24)].map((_, i) => (
// //               <div
// //                 key={i}
// //                 className="gallery-cinematic-lightbox-bar"
// //                 style={{
// //                   animationDelay: `${i * 0.08}s`,
// //                   height: `${6 + (i % 12)}px`
// //                 }}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       )}

// //       {/* Bottom Audio Visualizer */}
// //       <div className="gallery-cinematic-audio">
// //         {[...Array(30)].map((_, i) => (
// //           <div
// //             key={i}
// //             className="gallery-cinematic-audio-bar"
// //             style={{
// //               animationDelay: `${i * 0.06}s`,
// //               height: `${8 + (i % 14)}px`
// //             }}
// //           />
// //         ))}
// //       </div>

// //       {/* Scroll Progress Ring */}
// //       <div className="gallery-cinematic-scroll-ring">
// //         <svg viewBox="0 0 50 50">
// //           <circle cx="25" cy="25" r="22" fill="none" stroke="rgba(201,160,61,0.2)" strokeWidth="2"/>
// //           <circle 
// //             cx="25" 
// //             cy="25" 
// //             r="22" 
// //             fill="none" 
// //             stroke="#c9a03d" 
// //             strokeWidth="2"
// //             strokeDasharray="138.2"
// //             strokeDashoffset={138.2 * (1 - scrollProgress)}
// //             transform="rotate(-90 25 25)"
// //           />
// //         </svg>
// //         <span className="gallery-cinematic-ring-text">{Math.floor(scrollProgress * 100)}%</span>
// //       </div>

// //       {/* Scroll Hint */}
// //       <div className="gallery-cinematic-scroll">
// //         <span className="gallery-cinematic-scroll-text">EXPLORE GALLERY</span>
// //         <div className="gallery-cinematic-scroll-mouse">
// //           <div className="gallery-cinematic-scroll-wheel"></div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default GallerySection;










// import React, { useEffect, useRef, useState } from 'react';
// import './GallerySection.css';

// const gallery = [
//   { src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg", orientation: "portrait", category: "Live Performance" },
//   { src: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg", orientation: "landscape", category: "Backstage" },
//   { src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg", orientation: "portrait", category: "Crowd Moments" },
//   { src: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg", orientation: "square", category: "Artist Portrait" },
//   { src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg", orientation: "landscape", category: "Stage Design" },
//   { src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg", orientation: "portrait", category: "Behind The Scenes" },
//   { src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg", orientation: "landscape", category: "Live Performance" },
//   { src: "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg", orientation: "square", category: "Crowd Moments" },
//   { src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg", orientation: "portrait", category: "Artist Portrait" },
//   { src: "https://images.pexels.com/photos/2253876/pexels-photo-2253876.jpeg", orientation: "landscape", category: "Stage Design" },
//   { src: "https://images.pexels.com/photos/15789084/pexels-photo-15789084.jpeg", orientation: "portrait", category: "Live Performance" },
//   { src: "https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg", orientation: "landscape", category: "Backstage" },
// ];

// const GallerySection = () => {
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [lightboxIndex, setLightboxIndex] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const sectionRef = useRef(null);

//   const categories = ['All', 'Live Performance', 'Backstage', 'Artist Portrait', 'Stage Design', 'Crowd Moments', 'Behind The Scenes'];
  
//   const filteredGallery = activeFilter === 'All' 
//     ? gallery 
//     : gallery.filter(item => item.category === activeFilter);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
//       setScrollProgress(progress);
//     };

//     const handleMouseMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       setMousePos({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const openLightbox = (index) => {
//     setLightboxIndex(index);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeLightbox = () => {
//     setLightboxIndex(null);
//     document.body.style.overflow = '';
//   };

//   const navigateLightbox = (direction) => {
//     const newIndex = lightboxIndex + direction;
//     if (newIndex >= 0 && newIndex < filteredGallery.length) {
//       setLightboxIndex(newIndex);
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (lightboxIndex === null) return;
//       if (e.key === 'Escape') closeLightbox();
//       if (e.key === 'ArrowLeft') navigateLightbox(-1);
//       if (e.key === 'ArrowRight') navigateLightbox(1);
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [lightboxIndex]);

//   return (
//     <section className="gallery-light-section" ref={sectionRef}>
//       {/* Premium Light Background */}
//       <div className="gallery-light-bg"></div>
//       <div className="gallery-light-pattern"></div>
//       <div className="gallery-light-glow"></div>

//       {/* Dynamic Spotlight */}
//       <div 
//         className="gallery-light-spotlight"
//         style={{
//           background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.12) 0%, rgba(201, 160, 61, 0.04) 40%, transparent 70%)`
//         }}
//       />

//       {/* Cinematic Light Rays */}
//       <div className="gallery-light-rays">
//         <div className="gallery-light-ray"></div>
//         <div className="gallery-light-ray"></div>
//         <div className="gallery-light-ray"></div>
//         <div className="gallery-light-ray"></div>
//         <div className="gallery-light-ray"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="gallery-light-particles">
//         {[...Array(40)].map((_, i) => (
//           <div
//             key={i}
//             className="gallery-light-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 12}s`,
//               animationDuration: `${6 + Math.random() * 10}s`,
//               width: `${2 + Math.random() * 4}px`,
//               height: `${2 + Math.random() * 4}px`
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Container */}
//       <div className="gallery-light-container">
        
//         {/* Header Section */}
//         <div className="gallery-light-header">
//           <div className="gallery-light-header-left">
//             <div className="gallery-light-badge">
//               <span className="gallery-light-badge-dot"></span>
//               <span className="gallery-light-badge-text">VISUAL STORIES</span>
//               <span className="gallery-light-badge-dot"></span>
//             </div>

//             <h2 className="gallery-light-title">
//               <span className="gallery-light-title-light">Captured</span>
//               <span className="gallery-light-title-bold">Moments</span>
//             </h2>

//             <div className="gallery-light-divider">
//               <span className="gallery-light-divider-line"></span>
//               <span className="gallery-light-divider-diamond">◈</span>
//               <span className="gallery-light-divider-line"></span>
//             </div>
//           </div>

//           <div className="gallery-light-header-right">
//             <p className="gallery-light-description">
//               A visual journey through our most memorable performances, 
//               behind-the-scenes magic, and the energy that defines us.
//             </p>
            
//             {/* Category Filters */}
//             <div className="gallery-light-filters">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   className={`gallery-light-filter ${activeFilter === category ? 'active' : ''}`}
//                   onClick={() => setActiveFilter(category)}
//                 >
//                   <span className="gallery-light-filter-dot"></span>
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Masonry Grid */}
//         <div className="gallery-light-grid">
//           {filteredGallery.map((item, index) => (
//             <div
//               key={index}
//               className={`gallery-light-card gallery-light-card--${item.orientation} ${hoveredIndex === index ? 'hovered' : ''}`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               onClick={() => openLightbox(index)}
//               style={{ animationDelay: `${index * 0.05}s` }}
//             >
//               <div className="gallery-light-card-inner">
//                 {/* Image */}
//                 <img
//                   src={item.src}
//                   alt={item.category}
//                   className="gallery-light-image"
//                   loading="lazy"
//                 />
                
//                 {/* Overlay Layers */}
//                 <div className="gallery-light-overlay"></div>
//                 <div className="gallery-light-gradient"></div>

//                 {/* Hover Content */}
//                 <div className="gallery-light-hover">
//                   <div className="gallery-light-hover-category">{item.category}</div>
//                   <div className="gallery-light-hover-action">
//                     <span>View Gallery</span>
//                     <span className="gallery-light-hover-arrow">→</span>
//                   </div>
//                 </div>

//                 {/* Corner Accents */}
//                 <div className="gallery-light-corners">
//                   <div className="gallery-light-corner tl"></div>
//                   <div className="gallery-light-corner tr"></div>
//                   <div className="gallery-light-corner bl"></div>
//                   <div className="gallery-light-corner br"></div>
//                 </div>

//                 {/* Image Counter */}
//                 <div className="gallery-light-counter">
//                   <span>0{index + 1}</span>
//                   <div className="gallery-light-counter-line"></div>
//                 </div>

//                 {/* Stage Light Effect */}
//                 <div className="gallery-light-stage-light"></div>
//               </div>

//               {/* Caption */}
//               <div className="gallery-light-caption">
//                 <span className="gallery-light-caption-text">{item.category}</span>
//                 <div className="gallery-light-caption-line"></div>
//               </div>

//               {/* Card Glow */}
//               <div className="gallery-light-card-glow"></div>
//             </div>
//           ))}
//         </div>

//         {/* Footer Quote */}
//         <div className="gallery-light-footer">
//           <div className="gallery-light-footer-line"></div>
//           <div className="gallery-light-footer-content">
//             <span className="gallery-light-footer-icon">◈</span>
//             <p className="gallery-light-footer-text">
//               Every frame captures a story worth telling
//             </p>
//             <span className="gallery-light-footer-icon">◈</span>
//           </div>
//           <div className="gallery-light-footer-line"></div>
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       {lightboxIndex !== null && (
//         <div className="gallery-light-lightbox" onClick={closeLightbox}>
//           <div className="gallery-light-lightbox-bg"></div>
//           <div className="gallery-light-lightbox-particles">
//             {[...Array(30)].map((_, i) => (
//               <div
//                 key={i}
//                 className="gallery-light-lightbox-particle"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   animationDelay: `${Math.random() * 6}s`,
//                   animationDuration: `${4 + Math.random() * 6}s`,
//                 }}
//               />
//             ))}
//           </div>

//           <div className="gallery-light-lightbox-header">
//             <button className="gallery-light-lightbox-close" onClick={closeLightbox}>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </button>
//             <div className="gallery-light-lightbox-info">
//               <span className="gallery-light-lightbox-category">
//                 {filteredGallery[lightboxIndex].category}
//               </span>
//               <span className="gallery-light-lightbox-counter">
//                 <span>{String(lightboxIndex + 1).padStart(2, '0')}</span>
//                 <span>/</span>
//                 <span>{String(filteredGallery.length).padStart(2, '0')}</span>
//               </span>
//             </div>
//           </div>

//           <button 
//             className="gallery-light-lightbox-nav prev"
//             onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
//             disabled={lightboxIndex === 0}
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
//             </svg>
//           </button>

//           <div className="gallery-light-lightbox-content" onClick={(e) => e.stopPropagation()}>
//             <img
//               src={filteredGallery[lightboxIndex].src}
//               alt={filteredGallery[lightboxIndex].category}
//               className="gallery-light-lightbox-image"
//             />
//             <div className="gallery-light-lightbox-glow"></div>
//           </div>

//           <button 
//             className="gallery-light-lightbox-nav next"
//             onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
//             disabled={lightboxIndex === filteredGallery.length - 1}
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round"/>
//             </svg>
//           </button>

//           <div className="gallery-light-lightbox-footer">
//             <div className="gallery-light-lightbox-dots">
//               {filteredGallery.map((_, i) => (
//                 <div 
//                   key={i} 
//                   className={`gallery-light-lightbox-dot ${i === lightboxIndex ? 'active' : ''}`}
//                   onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="gallery-light-lightbox-audio">
//             {[...Array(24)].map((_, i) => (
//               <div
//                 key={i}
//                 className="gallery-light-lightbox-bar"
//                 style={{
//                   animationDelay: `${i * 0.08}s`,
//                   height: `${6 + (i % 12)}px`
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Bottom Audio Visualizer */}
//       <div className="gallery-light-audio">
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className="gallery-light-audio-bar"
//             style={{
//               animationDelay: `${i * 0.06}s`,
//               height: `${8 + (i % 14)}px`
//             }}
//           />
//         ))}
//       </div>

//       {/* Scroll Progress Ring */}
//       <div className="gallery-light-scroll-ring">
//         <svg viewBox="0 0 50 50">
//           <circle cx="25" cy="25" r="22" fill="none" stroke="rgba(201,160,61,0.2)" strokeWidth="2"/>
//           <circle 
//             cx="25" 
//             cy="25" 
//             r="22" 
//             fill="none" 
//             stroke="#c9a03d" 
//             strokeWidth="2"
//             strokeDasharray="138.2"
//             strokeDashoffset={138.2 * (1 - scrollProgress)}
//             transform="rotate(-90 25 25)"
//           />
//         </svg>
//         <span className="gallery-light-ring-text">{Math.floor(scrollProgress * 100)}%</span>
//       </div>

//       {/* Scroll Hint */}
//       <div className="gallery-light-scroll">
//         <span className="gallery-light-scroll-text">EXPLORE GALLERY</span>
//         <div className="gallery-light-scroll-mouse">
//           <div className="gallery-light-scroll-wheel"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;


import React, { useEffect, useRef, useState } from 'react';
import './GallerySection.css';

// Import background image/video
import bgVideo from '../assets/hero.mp4';
import bgImage from '../assets/Background0.jpeg';
import Performance1 from '../assets/performance1.jpeg';
import Performance2 from '../assets/performance2.jpeg';
import Performance3 from '../assets/performance3.jpeg';
import Stage1  from '../assets/Stage1.jpeg';
import Stage2 from '../assets/Stage2.jpeg';
import Artist1 from '../assets/Artist1.jpeg';
import Artist2 from '../assets/Artist2.jpeg';
import Design from '../assets/Design.jpeg';
import Moments1 from '../assets/Moments1.jpeg';
import Moments2 from '../assets/Moments2.jpeg';
import Scenes from '../assets/Scenes.jpeg';
import imageo from '../assets/music.jpeg';
import nandhini from "../assets/nandini.png";
import julie from "../assets/julie.png";
import magic from "../assets/magic.png";

const gallery = [
  { src: Performance1, orientation: "portrait", category: "Live Performance" },
  { src: Performance2, orientation: "landscape", category: "Live Performance" },
  { src: Performance3, orientation: "square", category: "Live Performance" },

  { src: Stage1, orientation: "landscape", category: "Backstage" },
  { src: Stage2, orientation: "portrait", category: "Backstage" },

  {src: Artist1, orientation: "landscape", category: "Artist Portrait" },
  {src: Artist2, orientation: "square", category: "Artist Portrait" },

  { src: Design, orientation: "landscape", category: "Stage Design" },

  { src: Moments1, orientation: "portrait", category: "Crowd Moments" },
  { src: Moments2, orientation: "square", category: "Crowd Moments" },

  { src: Scenes, orientation: "portrait", category: "Behind The Scenes" },
  { src: imageo, orientation: "portrait", category: "Live Performance" },
  { src: nandhini, orientation: "portrait", category: "Artist Portrait" },
  {src: julie, orientation: "landscape", category: "Artist Portrait" },
  {src: Artist2, orientation: "square", category: "Artist Portrait" },
   
];


const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const categories = ['All', 'Live Performance', 'Backstage', 'Artist Portrait', 'Stage Design', 'Crowd Moments', 'Behind The Scenes'];
  
  const filteredGallery = activeFilter === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(e => console.log('Video play:', e));
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction) => {
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < filteredGallery.length) {
      setLightboxIndex(newIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="gallery-cinematic-section" ref={sectionRef}>
      {/* ========== FULLSCREEN BACKGROUND ========== */}
      <div className="gallery-cinematic-bg">
        <div className="gallery-cinematic-bg-wrapper">
          <video
            ref={videoRef}
            className="gallery-cinematic-bg-video"
            autoPlay
            loop
            muted
            playsInline
            poster={bgImage}
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="/videos/gallery-bg.mp4" type="video/mp4" />
            <img src={bgImage} alt="Gallery Background" />
          </video>
          
          {/* Multi-layered overlays */}
          <div className="gallery-cinematic-bg-overlay"></div>
          <div className="gallery-cinematic-bg-gradient"></div>
          <div className="gallery-cinematic-bg-vignette"></div>
          <div className="gallery-cinematic-bg-pattern"></div>
        </div>
      </div>

      {/* Loading Indicator */}
      {!isVideoLoaded && (
        <div className="gallery-cinematic-loader">
          <div className="gallery-cinematic-loader-spinner"></div>
        </div>
      )}

      {/* ========== CINEMATIC EFFECTS ========== */}
      
      {/* Dynamic Spotlight */}
      <div 
        className="gallery-cinematic-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.15) 0%, rgba(201, 160, 61, 0.05) 40%, transparent 70%)`
        }}
      />

      {/* Golden Light Rays */}
      <div className="gallery-cinematic-rays">
        <div className="gallery-cinematic-ray"></div>
        <div className="gallery-cinematic-ray"></div>
        <div className="gallery-cinematic-ray"></div>
        <div className="gallery-cinematic-ray"></div>
        <div className="gallery-cinematic-ray"></div>
      </div>

      {/* Floating Particles */}
      <div className="gallery-cinematic-particles">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="gallery-cinematic-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`
            }}
          />
        ))}
      </div>

      {/* Film Grain Effect */}
      <div className="gallery-cinematic-grain"></div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="gallery-cinematic-container">
        
        {/* Header Section */}
        <div className="gallery-cinematic-header">
          <div className="gallery-cinematic-header-left">
            <div className="gallery-cinematic-badge">
              <span className="gallery-cinematic-badge-dot"></span>
              <span className="gallery-cinematic-badge-text">VISUAL STORIES</span>
              <span className="gallery-cinematic-badge-dot"></span>
            </div>

            <h2 className="gallery-cinematic-title">
              <span className="gallery-cinematic-title-light">Captured</span>
              <span className="gallery-cinematic-title-bold">Moments</span>
            </h2>

            <div className="gallery-cinematic-divider">
              <span className="gallery-cinematic-divider-line"></span>
              <span className="gallery-cinematic-divider-diamond">◈</span>
              <span className="gallery-cinematic-divider-line"></span>
            </div>
          </div>

          <div className="gallery-cinematic-header-right">
            <p className="gallery-cinematic-description">
              A visual journey through our most memorable performances, 
              behind-the-scenes magic, and the energy that defines us.
            </p>
            
            {/* Category Filters */}
            <div className="gallery-cinematic-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`gallery-cinematic-filter ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  <span className="gallery-cinematic-filter-dot"></span>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Masonry Grid - No White Cards */}
        <div className="gallery-cinematic-grid">
          {filteredGallery.map((item, index) => (
            <div
              key={index}
              className={`gallery-cinematic-card gallery-cinematic-card--${item.orientation} ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openLightbox(index)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="gallery-cinematic-card-inner">
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.category}
                  className="gallery-cinematic-image"
                  loading="lazy"
                />
                
                {/* Overlay Layers - Dark gradient on hover */}
                <div className="gallery-cinematic-overlay"></div>
                <div className="gallery-cinematic-gradient"></div>

                {/* Hover Content - Clean text overlay */}
                <div className="gallery-cinematic-hover">
                  <div className="gallery-cinematic-hover-category">{item.category}</div>
                  <div className="gallery-cinematic-hover-action">
                    <span>View</span>
                    <span className="gallery-cinematic-hover-arrow">→</span>
                  </div>
                </div>

                {/* Corner Accents - Gold on hover */}
                <div className="gallery-cinematic-corners">
                  <div className="gallery-cinematic-corner tl"></div>
                  <div className="gallery-cinematic-corner tr"></div>
                  <div className="gallery-cinematic-corner bl"></div>
                  <div className="gallery-cinematic-corner br"></div>
                </div>

                {/* Stage Light Effect */}
                <div className="gallery-cinematic-stage-light"></div>
              </div>

              {/* Caption - Minimal text overlay */}
              <div className="gallery-cinematic-caption">
                <span className="gallery-cinematic-caption-text">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="gallery-cinematic-footer">
          <div className="gallery-cinematic-footer-line"></div>
          <div className="gallery-cinematic-footer-content">
            <span className="gallery-cinematic-footer-icon">◈</span>
            <p className="gallery-cinematic-footer-text">
              Every frame captures a story worth telling
            </p>
            <span className="gallery-cinematic-footer-icon">◈</span>
          </div>
          <div className="gallery-cinematic-footer-line"></div>
        </div>
      </div>

      {/* ========== CINEMATIC LIGHTBOX ========== */}
      {lightboxIndex !== null && (
        <div className="gallery-cinematic-lightbox" onClick={closeLightbox}>
          <div className="gallery-cinematic-lightbox-bg"></div>
          
          <div className="gallery-cinematic-lightbox-header">
            <button className="gallery-cinematic-lightbox-close" onClick={closeLightbox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="gallery-cinematic-lightbox-info">
              <span className="gallery-cinematic-lightbox-category">
                {filteredGallery[lightboxIndex].category}
              </span>
              <span className="gallery-cinematic-lightbox-counter">
                <span>{String(lightboxIndex + 1).padStart(2, '0')}</span>
                <span>/</span>
                <span>{String(filteredGallery.length).padStart(2, '0')}</span>
              </span>
            </div>
          </div>

          <button 
            className="gallery-cinematic-lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            disabled={lightboxIndex === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="gallery-cinematic-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredGallery[lightboxIndex].src}
              alt={filteredGallery[lightboxIndex].category}
              className="gallery-cinematic-lightbox-image"
            />
            <div className="gallery-cinematic-lightbox-glow"></div>
          </div>

          <button 
            className="gallery-cinematic-lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            disabled={lightboxIndex === filteredGallery.length - 1}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="gallery-cinematic-lightbox-footer">
            <div className="gallery-cinematic-lightbox-dots">
              {filteredGallery.map((_, i) => (
                <div 
                  key={i} 
                  className={`gallery-cinematic-lightbox-dot ${i === lightboxIndex ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                />
              ))}
            </div>
          </div>

          <div className="gallery-cinematic-lightbox-audio">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="gallery-cinematic-lightbox-bar"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  height: `${6 + (i % 12)}px`
                }}
              />
            ))}
          </div>
        </div>
      )}

   

     
    </section>
  );
};

export default GallerySection;