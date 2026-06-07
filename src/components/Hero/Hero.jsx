// import "./Hero.css";

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-card">

//         <div className="hero-left">
//           <span className="hero-badge">
//             ✦ Chennai's Premier Entertainment Company
//           </span>

//           <h1>
//   Making Every
//   <span> Celebration</span>
//   <br />
//   Spectacular
// </h1>

// <p>
//   Live Orchestra, Weddings, Corporate Events &
//   Celebrity Shows across Chennai.
// </p>

//           <div className="hero-buttons">
//             <button className="btn-primary">
//               Book Event
//             </button>

//             <button className="btn-secondary">
//               View Programs
//             </button>
//           </div>

//           <div className="hero-stats">
//             <div>
//               <h3>500+</h3>
//               <span>Events</span>
//             </div>

//             <div>
//               <h3>100+</h3>
//               <span>Artists</span>
//             </div>

//             <div>
//               <h3>15+</h3>
//               <span>Years</span>
//             </div>
//           </div>
//         </div>

//         <div className="hero-right">

//           <div className="gold-circle"></div>

//           <div className="red-square"></div>
//           <div className="gold-square"></div>

//           <img
//             src="/artist.png"
//             alt="Artist"
//             className="artist-image"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;








// import "./Hero.css";
// import { useEffect } from "react";

// const Hero = () => {
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       document.documentElement.style.setProperty(
//         "--mouse-x",
//         `${e.clientX}px`
//       );

//       document.documentElement.style.setProperty(
//         "--mouse-y",
//         `${e.clientY}px`
//       );
//     };

//     window.addEventListener(
//       "mousemove",
//       handleMouseMove
//     );

//     return () =>
//       window.removeEventListener(
//         "mousemove",
//         handleMouseMove
//       );
//   }, []);

//   return (
//     <section className="hero">

//       {/* VIDEO BACKGROUND */}

//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="hero-video"
//       >
//         <source
//           src="https://www.pexels.com/download/video/8513961/"
//           type="video/mp4"
//         />
//       </video>

//       {/* OVERLAY */}

//       <div className="hero-overlay" />

//       {/* LIGHTS */}

//       <div className="spotlight spotlight-left" />
//       <div className="spotlight spotlight-right" />

//       {/* SOUND WAVES */}

//       <div className="sound-wave wave1"></div>
//       <div className="sound-wave wave2"></div>
//       <div className="sound-wave wave3"></div>

//       {/* FLOATING PARTICLES */}

//       <div className="particles"></div>

//       {/* ARTIST */}

//       <img
//         src="https://images.pexels.com/photos/14870722/pexels-photo-14870722.jpeg"
//         alt=""
//         className="artist"
//       />

//       {/* FLOATING MIC */}

//       <img
//         src="/images/mic.png"
//         alt=""
//         className="floating-mic"
//       />

//       {/* CONTENT */}

//       <div className="hero-content">

//         <span className="hero-tag">
//           SOUTH INDIA'S PREMIUM
//           ENTERTAINMENT EXPERIENCE
//         </span>

//         <h1>
//           Every Celebration
//           <br />
//           Deserves A
//           <span> Standing Ovation</span>
//         </h1>

//         <p>
//           Live Music • Celebrity Performances • Weddings •
//           Corporate Events • Mega Entertainment Productions
//         </p>

//         <div className="hero-buttons">

//           <button className="btn-primary">
//             Watch Showreel
//           </button>

//           <button className="btn-secondary">
//             Plan My Event
//           </button>

//         </div>

//       </div>

//       {/* STATS */}

//       <div className="hero-stats">

//         <div>
//           <h3>1000+</h3>
//           <span>Events</span>
//         </div>

//         <div>
//           <h3>25+</h3>
//           <span>Years</span>
//         </div>

//         <div>
//           <h3>500+</h3>
//           <span>Concerts</span>
//         </div>

//       </div>

//       <div className="scroll-indicator">
//         Scroll To Experience ↓
//       </div>

//     </section>
//   );
// };

// export default Hero;











import "./Hero.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source
          src="https://www.pexels.com/download/video/3636753/"
          type="video/mp4"
        />
      </video>

      <div className="overlay"></div>

      <div className="beam beam1"></div>
      <div className="beam beam2"></div>
      <div className="beam beam3"></div>

      <div className="ring ring1"></div>
      <div className="ring ring2"></div>
      <div className="ring ring3"></div>

      <div className="particles"></div>

      <div className="floating-stat stat1">
        1000+
        <span>EVENTS</span>
      </div>

      <div className="floating-stat stat2">
        25+
        <span>YEARS</span>
      </div>

      <div className="floating-stat stat3">
        500+
        <span>CONCERTS</span>
      </div>

      <img
        src="https://images.pexels.com/photos/15789084/pexels-photo-15789084.jpeg"
        alt=""
        className="artist"
      />

      <img
        src="/mic.png"
        alt=""
        className="mic"
      />

      <div className="hero-content">

        <span className="tag">
          SOUTH INDIA'S PREMIUM
          ENTERTAINMENT EXPERIENCE
        </span>

        <h1>
          EVERY
          <br />
          CELEBRATION
          <br />
          <span>DESERVES A</span>
          <br />
          STANDING
          <br />
          OVATION
        </h1>

        <p>
          Live Music • Celebrity Shows •
          Weddings • Corporate Events •
          Mega Entertainment Productions
        </p>

        <div className="hero-buttons">
          <button className="primary">
            Watch Showreel
          </button>

          <button className="secondary">
            Plan My Event
          </button>
        </div>

      </div>

      <div className="music-bar">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="scroll">
        SCROLL TO EXPERIENCE
      </div>

    </section>
  );
};

export default Hero;