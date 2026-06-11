// import { useEffect, useRef, useState } from 'react';
// import './Hero.css';
// import hero from "../../assets/hero.png";

// const Hero = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [cardHover, setCardHover] = useState(false);
//   const heroRef = useRef(null);
//   const cardRef = useRef(null);
//   const contentRef = useRef(null);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     setIsLoaded(true);
    
//     // Auto-play video with error handling
//     if (videoRef.current) {
//       videoRef.current.play().catch(error => {
//         console.log('Video autoplay failed, showing fallback image');
//         setVideoLoaded(false);
//       });
//     }

//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 30;
//       const y = (e.clientY / window.innerHeight - 0.5) * 30;
//       setMousePos({ x, y });

//       if (cardRef.current && !cardHover) {
//         const cardX = (e.clientX / window.innerWidth - 0.5) * 8;
//         const cardY = (e.clientY / window.innerHeight - 0.5) * 8;
//         cardRef.current.style.transform = `translate(${cardX}px, ${cardY}px)`;
//       }
//     };

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('mousemove', handleMouseMove, { passive: true });
//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [cardHover]);

//   const handleVideoLoaded = () => {
//     setVideoLoaded(true);
//   };

//   const contentParallax = {
//     transform: `translateY(${scrollY * 0.4}px)`,
//     opacity: Math.max(0, 1 - scrollY * 0.0025),
//   };

//   const backgroundStyle = {
//     transform: `scale(${1 + scrollY * 0.0002})`,
//   };

//   return (
//     <section className={`hero ${isLoaded ? 'hero--loaded' : ''}`} ref={heroRef}>
//       {/* ========== CINEMATIC VIDEO BACKGROUND ========== */}
//       <div className="hero__bg" style={backgroundStyle}>
//         <div className="hero__bg-video-wrapper">
//           {/* Video Player */}
//           <video
//             ref={videoRef}
//             className={`hero__bg-video ${videoLoaded ? 'hero__bg-video--visible' : ''}`}
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//             poster="https://images.pexels.com/photos/15789084/pexels-photo-15789084.jpeg?auto=compress&cs=tinysrgb&w=1920"
//             onLoadedData={handleVideoLoaded}
//             onCanPlay={handleVideoLoaded}
//           >
//             {/* Multiple video formats for browser compatibility */}
//             <source 
//               src="https://www.pexels.com/download/video/3636753/" 
//               type="video/mp4" 
//             />
//             <source 
//               src="https://www.pexels.com/download/video/3636753/" 
//               type="video/webm" 
//             />
//             <source 
//               src="https://www.pexels.com/download/video/3636753/" 
//               type="video/ogg" 
//             />
//             Your browser does not support the video tag.
//           </video>

//           {/* Fallback Image (shown while video loads or if video fails) */}
//           <img
//             src="https://images.pexels.com/photos/15789084/pexels-photo-15789084.jpeg?auto=compress&cs=tinysrgb&w=1920"
//             alt="South Indian Classical Performance"
//             className={`hero__bg-fallback ${!videoLoaded ? 'hero__bg-fallback--visible' : ''}`}
//             loading="eager"
//           />
//         </div>
        
//         {/* Multi-layered cinematic overlay - Maintains the warm South Indian feel */}
//         <div className="hero__bg-overlay">
//           {/* Base cream/warm overlay */}
//           <div className="hero__bg-overlay--warm" />
          
//           {/* Depth and texture overlay */}
//           <div className="hero__bg-overlay--depth" />
          
//           {/* Golden atmospheric glow */}
//           <div className="hero__bg-overlay--atmosphere" />
          
//           {/* Additional overlay when video is playing to maintain text readability */}
//           <div className={`hero__bg-overlay--texture ${videoLoaded ? 'hero__bg-overlay--texture-active' : ''}`} />
//         </div>
//       </div>

//       {/* ========== DECORATIVE ELEMENTS ========== */}
      
//       {/* Temple-inspired vertical lines */}
//       <div className="hero__architecture">
//         <div className="hero__arch-line hero__arch-line--1" />
//         <div className="hero__arch-line hero__arch-line--2" />
//         <div className="hero__arch-line hero__arch-line--3" />
//         <div className="hero__arch-line hero__arch-line--4" />
//       </div>

//       {/* Subtle golden light rays - more visible over video */}
//       <div className="hero__light-rays">
//         <div className="hero__light-ray hero__light-ray--1" />
//         <div className="hero__light-ray hero__light-ray--2" />
//         <div className="hero__light-ray hero__light-ray--3" />
//         <div className="hero__light-ray hero__light-ray--4" />
//       </div>

//       {/* Floating musical notes */}
//       <div className="hero__notes">
//         <span className="hero__note hero__note--1">𝄞</span>
//         <span className="hero__note hero__note--2">𝅘𝅥𝅯</span>
//         <span className="hero__note hero__note--3">𝅘𝅥𝅰</span>
//         <span className="hero__note hero__note--4">♩</span>
//       </div>

//       {/* Subtle particle/dust effect when video is playing */}
//       {videoLoaded && (
//         <div className="hero__particles">
//           {[...Array(8)].map((_, i) => (
//             <div 
//               key={i}
//               className="hero__particle"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 10}s`,
//                 animationDuration: `${8 + Math.random() * 12}s`,
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* ========== MAIN LAYOUT - Two Column ========== */}
//       <div className="hero__container">
        
//         {/* Left Content */}
//         <div className="hero__content" ref={contentRef} style={contentParallax}>
//           <div className="hero__content-inner">
            
//             {/* Eyebrow with decorative element */}
//             <div className="hero__eyebrow">
//               <div className="hero__eyebrow-decoration">
//                 <span className="hero__eyebrow-dot" />
//                 <span className="hero__eyebrow-dash" />
//               </div>
//               <span className="hero__eyebrow-text">
//                 Premium Entertainment Production
//               </span>
//             </div>

//             {/* Headline */}
//             <h1 className="hero__headline">
//               <div className="hero__headline-line">
//                 <span className="hero__word hero__word--fade">Where</span>
//               </div>
//               <div className="hero__headline-line">
//                 <span className="hero__word hero__word--golden">Tradition</span>
//               </div>
//               <div className="hero__headline-line">
//                 <span className="hero__word">Meets</span>
//               </div>
//               <div className="hero__headline-line">
//                 <span className="hero__word hero__word--emphasis">Spectacle</span>
//               </div>
//             </h1>

//             {/* Description */}
//             <p className="hero__description">
//               South India's foremost production house, orchestrating extraordinary 
//               live experiences rooted in classical artistry and contemporary vision. 
//               From sacred temples to grand auditoriums, we craft moments that echo 
//               through generations.
//             </p>

//             {/* CTA Buttons */}
//             <div className="hero__actions">
//               <button className="hero__btn hero__btn--primary">
//                 <span className="hero__btn-text">Explore Our Work</span>
//                 <svg className="hero__btn-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                   <path d="M1 9H17M17 9L10 2M17 9L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//               <button className="hero__btn hero__btn--secondary">
//                 <span className="hero__btn-text">Begin Your Journey</span>
//               </button>
//             </div>

//             {/* Stats Row */}
//             <div className="hero__stats">
//               <div className="hero__stat">
//                 <span className="hero__stat-number">1.2K+</span>
//                 <span className="hero__stat-label">Productions</span>
//               </div>
//               <div className="hero__stat-separator">
//                 <span className="hero__stat-separator-dot" />
//                 <span className="hero__stat-separator-dot" />
//               </div>
//               <div className="hero__stat">
//                 <span className="hero__stat-number">28</span>
//                 <span className="hero__stat-label">Years Legacy</span>
//               </div>
//               <div className="hero__stat-separator">
//                 <span className="hero__stat-separator-dot" />
//                 <span className="hero__stat-separator-dot" />
//               </div>
//               <div className="hero__stat">
//                 <span className="hero__stat-number">600+</span>
//                 <span className="hero__stat-label">Shows Delivered</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Image Card */}
//         <div 
//           className="hero__card-wrapper"
//           style={{ transform: `translateY(${scrollY * 0.15}px)` }}
//         >
//           <div 
//             className={`hero__card ${cardHover ? 'hero__card--hovered' : ''}`}
//             ref={cardRef}
//             onMouseEnter={() => setCardHover(true)}
//             onMouseLeave={() => setCardHover(false)}
//           >
//             {/* Card Frame - Temple Architecture Inspired */}
//             <div className="hero__card-frame">
//               {/* Corner ornaments */}
//               <div className="hero__card-corner hero__card-corner--tl">
//                 <svg viewBox="0 0 40 40" fill="none">
//                   <path d="M0 2C0 0.895 0.895 0 2 0H15V2H2V15H0V2Z" fill="currentColor"/>
//                   <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.4"/>
//                 </svg>
//               </div>
//               <div className="hero__card-corner hero__card-corner--tr">
//                 <svg viewBox="0 0 40 40" fill="none">
//                   <path d="M40 2C40 0.895 39.105 0 38 0H25V2H38V15H40V2Z" fill="currentColor"/>
//                   <circle cx="32" cy="8" r="2" fill="currentColor" opacity="0.4"/>
//                 </svg>
//               </div>
//               <div className="hero__card-corner hero__card-corner--bl">
//                 <svg viewBox="0 0 40 40" fill="none">
//                   <path d="M0 38C0 39.105 0.895 40 2 40H15V38H2V25H0V38Z" fill="currentColor"/>
//                   <circle cx="8" cy="32" r="2" fill="currentColor" opacity="0.4"/>
//                 </svg>
//               </div>
//               <div className="hero__card-corner hero__card-corner--br">
//                 <svg viewBox="0 0 40 40" fill="none">
//                   <path d="M40 38C40 39.105 39.105 40 38 40H25V38H38V25H40V38Z" fill="currentColor"/>
//                   <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.4"/>
//                 </svg>
//               </div>

//               {/* Image Container */}
//               <div className="hero__card-image-wrapper">
//                 <div className="hero__card-image-mask">
//                   <img
//                     src={hero}
//                     alt="Classical Performer"
//                     className="hero__card-image"
//                   />
//                 </div>
                
//                 {/* Image overlay for cinematic feel */}
//                 <div className="hero__card-image-overlay" />
                
//                 {/* Decorative border lines */}
//                 <div className="hero__card-border hero__card-border--top" />
//                 <div className="hero__card-border hero__card-border--right" />
//                 <div className="hero__card-border hero__card-border--bottom" />
//                 <div className="hero__card-border hero__card-border--left" />
//               </div>

//               {/* Bottom Info Bar */}
//               <div className="hero__card-info">
//                 <div className="hero__card-info-content">
//                   <div className="hero__card-info-icon">
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                       <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="currentColor"/>
//                       <circle cx="10" cy="10" r="3" fill="currentColor"/>
//                     </svg>
//                   </div>
//                   <div className="hero__card-info-text">
//                     <span className="hero__card-info-title">Featured Artist</span>
//                     <span className="hero__card-info-subtitle">Classical Maestro</span>
//                   </div>
//                 </div>
//                 <div className="hero__card-info-decoration">
//                   <span className="hero__card-info-dot" />
//                   <span className="hero__card-info-line" />
//                 </div>
//               </div>

//               {/* Hover glow effect */}
//               <div className="hero__card-glow" />
//             </div>
//           </div>

//           {/* Floating decorative elements around card */}
//           <div className="hero__card-decoration hero__card-decoration--1">
//             <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
//               <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
//               <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
//               <circle cx="30" cy="30" r="12" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
//             </svg>
//           </div>
//           <div className="hero__card-decoration hero__card-decoration--2">
//             <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//               <path d="M20 2L22 18L38 20L22 22L20 38L18 22L2 20L18 18L20 2Z" fill="currentColor" opacity="0.2"/>
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* ========== VIDEO CONTROLS (Optional - Hidden but functional) ========== */}
//       {videoLoaded && (
//         <button 
//           className="hero__video-sound"
//           onClick={() => {
//             if (videoRef.current) {
//               videoRef.current.muted = !videoRef.current.muted;
//             }
//           }}
//           aria-label="Toggle sound"
//         >
//           <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//             <path d="M2 7V13H5L10 18V2L5 7H2Z" fill="currentColor" opacity="0.4"/>
//             <path d="M13 7C14.1046 7 15 7.89543 15 9C15 10.1046 14.1046 11 13 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
//             <path d="M16 5C18.2091 6.10457 18.2091 11.8954 16 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
//           </svg>
//         </button>
//       )}

//       {/* ========== SCROLL INDICATOR ========== */}
//       <div className="hero__scroll">
//         <div className="hero__scroll-indicator">
//           <div className="hero__scroll-line">
//             <div 
//               className="hero__scroll-progress" 
//               style={{ 
//                 transform: `scaleY(${Math.min(1, scrollY / 500)})` 
//               }}
//             />
//           </div>
//           <span className="hero__scroll-text">Scroll to discover</span>
//         </div>
//       </div>

//       {/* ========== BOTTOM GRADIENT ========== */}
//       <div className="hero__fade" />
//     </section>
//   );
// };

// export default Hero;
import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

import hero from "../../assets/hero.png";
import herovideo from '../../assets/videoone.mp4';
import herovideotwo from '../../assets/videothree.mp4';
import herovideothree from '../../assets/videotwo.mp4';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [cardHover, setCardHover] = useState(false);

  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const video1 = videoRef.current;
const video2 = videoRef2.current;
const video3 = videoRef3.current;

if (video1 && video2 && video3) {
  const videos = [video1, video2, video3];

  videos.forEach((video) => {
    video.muted = true;
    video.preload = "auto";
    video.style.display = "none";
  });

  let currentIndex = 0;

  const playVideo = (index) => {
    videos.forEach((video, i) => {
      if (i === index) {
        video.style.display = "block";
        video.play().catch(console.error);
      } else {
        video.pause();
        video.style.display = "none";
      }
    });

    currentIndex = index;
  };

  const handleEnded = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    playVideo(nextIndex);
  };

  videos.forEach((video) => {
    video.addEventListener("ended", handleEnded);
  });

  // Start with first video
  playVideo(0);

  return () => {
    videos.forEach((video) => {
      video.removeEventListener("ended", handleEnded);
      video.pause();
    });
  };
}
    const handleMouseMove = (e) => {
      const x =
        (e.clientX / window.innerWidth - 0.5) * 30;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 30;

      setMousePos({ x, y });

      if (cardRef.current && !cardHover) {
        const cardX =
          (e.clientX / window.innerWidth - 0.5) * 8;

        const cardY =
          (e.clientY / window.innerHeight - 0.5) * 8;

        cardRef.current.style.transform =
          `translate(${cardX}px, ${cardY}px)`;
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener(
      'mousemove',
      handleMouseMove,
      { passive: true }
    );

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    return () => {
      clearTimeout(timeout);

      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );

      window.removeEventListener(
        'scroll',
        handleScroll
      );

      [
        videoRef.current,
        videoRef2.current,
        videoRef3.current,
      ].forEach((video) => {
        if (video) {
          video.pause();
        }
      });
    };
  }, [cardHover]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const contentParallax = {
    transform: `translateY(${scrollY * 0.4}px)`,
    opacity: Math.max(0, 1 - scrollY * 0.0025),
  };

  const backgroundStyle = {
    transform: `scale(${1 + scrollY * 0.0002})`,
  };

  return (
    <section
      className={`hero-pro ${
        isLoaded ? 'hero-pro--loaded' : ''
      }`}
      ref={heroRef}
    >
      {/* VIDEO BACKGROUND */}
      <div
        className="hero-pro__bg"
        style={backgroundStyle}
      >
        <div className="hero-pro__bg-video-wrapper">

          {/* VIDEO 1 */}
          <video
            ref={videoRef}
            className={`hero-pro__bg-video hero-pro__bg-video--left ${
              videoLoaded
                ? 'hero-pro__bg-video--visible'
                : ''
            }`}
            muted
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoaded}
          >
            <source
              src={herovideo}
              type="video/mp4"
            />
          </video>

          {/* VIDEO 2 */}
          <video
            ref={videoRef2}
            className={`hero-pro__bg-video hero-pro__bg-video--right ${
              videoLoaded
                ? 'hero-pro__bg-video--visible'
                : ''
            }`}
            muted
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoaded}
          >
            <source
              src={herovideotwo}
              type="video/mp4"
            />
          </video>

          {/* VIDEO 3 */}
          <video
            ref={videoRef3}
            className={`hero-pro__bg-video ${
              videoLoaded
                ? 'hero-pro__bg-video--visible'
                : ''
            }`}
            muted
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoaded}
          >
            <source
              src={herovideothree}
              type="video/mp4"
            />
          </video>

          {/* FALLBACK IMAGE */}
          <img
            src={hero}
            alt="South Indian Classical Performance"
            className={`hero-pro__bg-fallback ${
              !videoLoaded
                ? 'hero-pro__bg-fallback--visible'
                : ''
            }`}
            loading="eager"
          />

        </div>

        <div className="hero-pro__bg-overlay">
          <div className="hero-pro__bg-overlay--warm" />
          <div className="hero-pro__bg-overlay--depth" />
          <div className="hero-pro__bg-overlay--atmosphere" />

          <div
            className={`hero-pro__bg-overlay--texture ${
              videoLoaded ? 'active' : ''
            }`}
          />
        </div>
      </div>
            {/* DECORATIVE ELEMENTS */}

      <div className="hero-pro__architecture">
        <div className="hero-pro__arch-line"></div>
        <div className="hero-pro__arch-line"></div>
        <div className="hero-pro__arch-line"></div>
        <div className="hero-pro__arch-line"></div>
        <div className="hero-pro__arch-line"></div>
      </div>

      <div className="hero-pro__rays">
        <div className="hero-pro__ray"></div>
        <div className="hero-pro__ray"></div>
        <div className="hero-pro__ray"></div>
        <div className="hero-pro__ray"></div>
        <div className="hero-pro__ray"></div>
      </div>

      <div className="hero-pro__notes">
        <span className="hero-pro__note">♪</span>
        <span className="hero-pro__note">♫</span>
        <span className="hero-pro__note">♪</span>
        <span className="hero-pro__note">♫</span>
        <span className="hero-pro__note">♪</span>
        <span className="hero-pro__note">♫</span>
      </div>

      {videoLoaded && (
        <div className="hero-pro__particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="hero-pro__particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${
                  8 + Math.random() * 12
                }s`,
              }}
            />
          ))}
        </div>
      )}

      {/* MAIN CONTAINER */}
      <div className="hero-pro__container">

        {/* LEFT SIDE - CONTENT */}
        <div
          className="hero-pro__content"
          ref={contentRef}
          style={contentParallax}
        >
          <div className="hero-pro__content-inner">

            {/* Premium Badge */}
            <div className="hero-pro__badge">
              <div className="hero-pro__badge-line"></div>

              <span className="hero-pro__badge-text">
                PREMIUM ENTERTAINMENT PRODUCTION
              </span>

              <div className="hero-pro__badge-line"></div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-pro__headline">

              <span className="hero-pro__headline-line">
                <span className="hero-pro__headline-word">
                  Where
                </span>
              </span>

              <span className="hero-pro__headline-line">
                <span className="hero-pro__headline-word hero-pro__headline-word--gold">
                  Tradition
                </span>
              </span>

              <span className="hero-pro__headline-line">
                <span className="hero-pro__headline-word">
                  Meets
                </span>
              </span>

              <span className="hero-pro__headline-line">
                <span className="hero-pro__headline-word hero-pro__headline-word--bold">
                  Spectacle
                </span>
              </span>

            </h1>

            {/* Description */}
            <p className="hero-pro__description">
              South India's foremost production house,
              orchestrating extraordinary live experiences
              rooted in classical artistry and contemporary
              vision. From sacred temples to grand
              auditoriums, we craft moments that echo
              through generations.
            </p>

            {/* CTA Buttons */}
            <div className="hero-pro__actions">

              <button className="hero-pro__btn hero-pro__btn--primary">

                <span>Explore Our Work</span>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M1 9H17M17 9L10 2M17 9L10 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>

              </button>

              <button className="hero-pro__btn hero-pro__btn--secondary">
                <span>Begin Your Journey</span>
              </button>

            </div>

            {/* Stats */}
            <div className="hero-pro__stats">

              <div className="hero-pro__stat">
                <span className="hero-pro__stat-number">
                  1.2K+
                </span>

                <span className="hero-pro__stat-label">
                  Productions
                </span>
              </div>

              <div className="hero-pro__stat-divider">
                <span>◉</span>
              </div>

              <div className="hero-pro__stat">
                <span className="hero-pro__stat-number">
                  28
                </span>

                <span className="hero-pro__stat-label">
                  Years Legacy
                </span>
              </div>

              <div className="hero-pro__stat-divider">
                <span>◉</span>
              </div>

              <div className="hero-pro__stat">
                <span className="hero-pro__stat-number">
                  600+
                </span>

                <span className="hero-pro__stat-label">
                  Shows
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
            {/* SOUND CONTROL */}
      {videoLoaded && (
        <button
          className="hero-pro__sound"
          onClick={() => {
            [
              videoRef.current,
              videoRef2.current,
              videoRef3.current,
            ].forEach((video) => {
              if (video) {
                video.muted = !video.muted;
              }
            });
          }}
          aria-label="Toggle sound"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M2 7V13H5L10 18V2L5 7H2Z"
              fill="currentColor"
              opacity="0.6"
            />

            <path
              d="M13 7C14.1046 7 15 7.89543 15 9C15 10.1046 14.1046 11 13 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </button>
      )}

      {/* SCROLL INDICATOR */}
      <div className="hero-pro__scroll">

        <div className="hero-pro__scroll-indicator">

          <div className="hero-pro__scroll-line">

            <div
              className="hero-pro__scroll-progress"
              style={{
                transform: `scaleY(${Math.min(
                  1,
                  scrollY / 500
                )})`,
              }}
            />

          </div>

          <span className="hero-pro__scroll-text">
            SCROLL TO DISCOVER
          </span>

        </div>

      </div>

      {/* BOTTOM FADE */}
      <div className="hero-pro__fade"></div>

      {/* LOADER */}
      {!isLoaded && (
        <div className="hero-pro__loader">
          <div className="hero-pro__loader-spinner"></div>
        </div>
      )}

    </section>
  );
};

export default Hero;