import { useEffect, useRef, useState } from "react";
import "./CelebrityWall.css";

import manoImg from "../assets/mano1.jpg";
import vaniImg from "../assets/vanijayaram.jpg";
import haricharanImg from "../assets/haricharan.jpg";
import shwetaImg from "../assets/swethamohan.jpg";
import stephenImg from "../assets/stephan.jpg";
import rajeshImg from "../assets/rajesh.jpg";
import saindhaviImg from "../assets/saindhavi.jpg";
import devanImg from "../assets/devan.jpg";

const celebrities = [
  {
    name: "Mano",
    role: "Legendary Playback Singer",
    image: manoImg,
    accent: "#c9a03d",
  },
  {
    name: "Vani Jayaram",
    role: "Padma Bhushan Awardee",
    image: vaniImg,
    accent: "#d4af37",
  },
  {
    name: "Haricharan",
    role: "Playback Singer",
    image: haricharanImg,
    accent: "#b8860b",
  },
  {
    name: "Shweta Mohan",
    role: "Playback Singer",
    image: shwetaImg,
    accent: "#c9a03d",
  },
  {
    name: "Stephen Devassy",
    role: "Music Composer & Pianist",
    image: stephenImg,
    accent: "#d4af37",
  },
  {
    name: "Rajesh Vaidhya",
    role: "Veena Maestro",
    image: rajeshImg,
    accent: "#c9a03d",
  },
  {
    name: "Saindhavi",
    role: "Playback Singer",
    image: saindhaviImg,
    accent: "#b8860b",
  },
  {
    name: "Devan Ekambaram",
    role: "Playback Singer",
    image: devanImg,
    accent: "#d4af37",
  },
];

const CelebrityWall = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    

    return () => {
      
      observer.disconnect();
    };
  }, []);

  return (
    <section className="cw-premium-section" ref={sectionRef}>
      {/* ===========================
          BACKGROUND LAYERS
      ============================ */}

      <div className="cw-premium-bg"></div>

      <div className="cw-premium-noise"></div>

      <div className="cw-premium-vignette"></div>

      

      <div className="cw-premium-pattern"></div>

      {/* Mouse Spotlight */}

     

      {/* Ambient Light Rays */}

      <div className="cw-premium-rays">
        <div className="cw-premium-ray"></div>
        <div className="cw-premium-ray"></div>
        <div className="cw-premium-ray"></div>
        <div className="cw-premium-ray"></div>
        <div className="cw-premium-ray"></div>
      </div>

      {/* Floating Particles */}

      <div className="cw-premium-particles">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="cw-premium-particle"
            style={{
              left: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.25}s`,
              animationDuration: `${7 + (i % 10)}s`,
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
            }}
          />
        ))}
      </div>

      {/* Floating Decorative Orbs */}

      <div className="cw-floating-orb orb-1"></div>
      <div className="cw-floating-orb orb-2"></div>
      <div className="cw-floating-orb orb-3"></div>

      {/* ===========================
          CONTAINER
      ============================ */}

      <div className="cw-premium-container">
        {/* ===========================
            HEADER
        ============================ */}

        <div className="cw-premium-header">
          <div className="cw-premium-badge">
            <span className="cw-premium-badge-dot"></span>

            <span className="cw-premium-badge-text">
              MUSICAL COLLABORATIONS
            </span>

            <span className="cw-premium-badge-dot"></span>
          </div>

          <h2 className="cw-premium-title">
            <span className="cw-premium-title-light">
              Shared The Stage With
            </span>

            <span className="cw-premium-title-bold">Legends</span>
          </h2>

          <div className="cw-premium-divider">
            <span className="cw-premium-divider-line"></span>

            <span className="cw-premium-divider-diamond">✦</span>

            <span className="cw-premium-divider-line"></span>
          </div>

          <p className="cw-premium-subtitle">
            A remarkable journey of performances alongside celebrated voices,
            maestros, composers, and musical icons who have shaped Indian music.
          </p>
        </div>

        {/* ===========================
            GRID
        ============================ */}

        <div className="cw-premium-grid" ref={gridRef}>
          {celebrities.map((artist, index) => (
            <div
              key={index}
              className={`cw-premium-card ${
                isVisible ? "visible" : ""
              } ${hoveredIndex === index ? "hovered" : ""}`}
              style={{
                transitionDelay: `${index * 0.08}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glass Border */}

              <div className="cw-card-border"></div>

              {/* Shimmer */}

              <div className="cw-card-shimmer"></div>

              {/* Image */}

              <div className="cw-premium-card-image">
                <img src={artist.image} alt={artist.name} />

                <div className="cw-premium-card-overlay"></div>

               <div className="cw-premium-card-gradient"></div>

                {/* Reflection */}

                <div className="cw-image-reflection"></div>

                {/* Corner Frame */}

              </div>

              {/* Card Content */}

              <div className="cw-premium-card-info">
                <span className="cw-card-label">FEATURED ARTIST</span>

                <h3 className="cw-premium-card-name">{artist.name}</h3>

                <p className="cw-premium-card-role">{artist.role}</p>

                <div
                  className="cw-premium-card-accent"
                  style={{
                    background: `linear-gradient(90deg, ${artist.accent}, transparent)`,
                  }}
                ></div>
              </div>

              {/* Hover CTA */}

              <div className="cw-premium-card-hover">
                <span className="cw-premium-hover-text">Explore</span>

                <span className="cw-premium-hover-arrow">→</span>
              </div>

              {/* Glow */}

              
            </div>
          ))}
        </div>
        
{/* ===========================
    ANCHORS
=========================== */}

<div className="cw-anchor-section">

  {/* Left Text */}
  <div className="cw-anchor-content">
    <span className="cw-anchor-tag">
      HOSTING EXCELLENCE
    </span>

    <h2 className="cw-anchor-heading">
    Beyond Hosting,
    <br />
    <span>Creating Connections</span>
  </h2>

    <p className="cw-anchor-description">
      The magic of every celebration was elevated by talented
      anchors who brought warmth, elegance, humour, and energy
      to the stage. Their presence transformed performances into
      unforgettable experiences, creating a seamless connection
      between artists and audiences.
    </p>

    <div className="cw-anchor-line"></div>
  </div>

  {/* Anchor Card 1 */}
  <div className="cw-premium-card cw-anchor-card">
    <div className="cw-card-border"></div>

    <div className="cw-card-shimmer"></div>

    <div className="cw-premium-card-image">
      <img src={devanImg} alt="Anchor 1" />

      <div className="cw-premium-card-overlay"></div>
      <div className="cw-premium-card-gradient"></div>
      <div className="cw-image-reflection"></div>
    </div>

    <div className="cw-premium-card-info">
      <span className="cw-card-label">
        FEATURED ANCHOR
      </span>

      <h3 className="cw-premium-card-name">
        Anchor Name 1
      </h3>

      <p className="cw-premium-card-role">
        Celebrity Anchor
      </p>

      <div
        className="cw-premium-card-accent"
        style={{
          background:
            "linear-gradient(90deg, #c9a03d, transparent)",
        }}
      ></div>
    </div>
  </div>

  {/* Anchor Card 2 */}
  <div className="cw-premium-card cw-anchor-card">
    <div className="cw-card-border"></div>

    <div className="cw-card-shimmer"></div>

    <div className="cw-premium-card-image">
      <img src={devanImg} alt="Anchor 2" />

      <div className="cw-premium-card-overlay"></div>
      <div className="cw-premium-card-gradient"></div>
      <div className="cw-image-reflection"></div>
    </div>

    <div className="cw-premium-card-info">
      <span className="cw-card-label">
        FEATURED ANCHOR
      </span>

      <h3 className="cw-premium-card-name">
        Anchor Name 2
      </h3>

      <p className="cw-premium-card-role">
        Event Host & Anchor
      </p>

      <div
        className="cw-premium-card-accent"
        style={{
          background:
            "linear-gradient(90deg, #d4af37, transparent)",
        }}
      ></div>
    </div>
  </div>

</div>
        {/* ===========================
            STATEMENT PANEL
        ============================ */}

        <div className="cw-premium-statement">
          <div className="cw-statement-glow"></div>

          <div className="cw-premium-statement-content">
            <div className="cw-premium-statement-number">
              <span className="cw-premium-statement-number-big">100+</span>

              <div className="cw-premium-statement-number-line"></div>
            </div>

            <div className="cw-premium-statement-text">
              <h2 className="cw-premium-statement-headline">
                <span>Artists.</span>

                <span>One Vision.</span>
              </h2>

              <p className="cw-premium-statement-desc">
                Building unforgettable musical experiences through collaboration,
                artistry, innovation, and a shared passion for performance.
              </p>
            </div>

            <div className="cw-premium-statement-icon">
              <span>✦</span>
            </div>
          </div>
        </div>

        {/* ===========================
            FOOTER DECOR
        ============================ */}

        <div className="cw-premium-footer">
          <div className="cw-premium-footer-line"></div>

          <div className="cw-premium-footer-dots">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="cw-premium-footer-dot"
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* ===========================
          AUDIO VISUALIZER
      ============================ */}
{/* 
      <div className="cw-premium-audio">
        {[...Array(28)].map((_, i) => (
          <div
            key={i}
            className="cw-premium-audio-bar"
            style={{
              animationDelay: `${i * 0.08}s`,
              height: `${8 + (i % 14)}px`,
            }}
          />
        ))}
      </div> */}

      {/* ===========================
          SCROLL INDICATOR
      ============================ */}

         </section>
  );
};

export default CelebrityWall;