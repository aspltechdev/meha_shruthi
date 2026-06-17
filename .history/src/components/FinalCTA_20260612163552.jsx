import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FinalCTA.css";
import bgImage from "../assets/fta.jpeg";

// Register ScrollTrigger with GSAP core
gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);
  
  // Directly targeting elements to animate text without triggering React re-renders
  const clientRef = useRef(null);
  const eventRef = useRef(null);
  const satisfactionRef = useRef(null);

  // Generate static background particles configuration array
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: (i * 17) % 100,
    top: (i * 29) % 100,
    delay: i % 10,
    duration: 5 + (i % 8),
    size: 2 + (i % 4),
  }));

  useGSAP(() => {
    // 1. Master Entrance Timeline bound to ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100px", // Fires as soon as the section peaks up from the bottom
        toggleActions: "play none none none", // Plays once, locks in place
      },
      defaults: { ease: "power4.out" }
    });

    // Cascade animate text blocks from invisible up to regular positioning
    tl.fromTo(
      ".fcta-premium-badge, .fcta-premium-headline, .fcta-premium-services, .fcta-premium-stat-card, .fcta-premium-buttons",
      { 
        opacity: 0, 
        y: 40 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        stagger: 0.25 
      }
    );

    // 2. Simultaneous Counter Roll Animation
    // Stores a single state object tracking progress from 0 to 100% to run everything in absolute sync
    const animationProgress = { percentage: 0 };

    tl.to(animationProgress, {
      percentage: 1,
      duration: 2.5, // Total length of time the counter rolling takes
      ease: "power3.out", // Smooth gradual slow-down finish
      onUpdate: () => {
        const currentProgress = animationProgress.percentage;

        if (clientRef.current) {
          clientRef.current.innerText = Math.floor(currentProgress * 500) + "+";
        }
        if (eventRef.current) {
          eventRef.current.innerText = Math.floor(currentProgress * 1000) + "+";
        }
        if (satisfactionRef.current) {
          satisfactionRef.current.innerText = Math.floor(currentProgress * 98) + "%";
        }
      }
    }, "-=1.2"); // Starts counting right as the stat cards cascade into view

    // 3. Luxury Momentum-based Spotlight Mouse Tracking
    const handleMouseMove = (e) => {
      if (!sectionRef.current || !spotlightRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      gsap.to(spotlightRef.current, {
        background: `radial-gradient(circle at ${x}% ${y}%,
          rgba(201,160,61,0.18) 0%,
          rgba(201,160,61,0.06) 40%,
          transparent 70%)`,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: sectionRef });

  return (
    <section className="fcta-premium-section" ref={sectionRef}>
      <div
        className="fcta-premium-bg-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="fcta-premium-bg"></div>
      <div className="fcta-premium-pattern"></div>
      <div className="fcta-premium-glow"></div>
      <div className="fcta-premium-spotlight" ref={spotlightRef} />

      <div className="fcta-premium-rays">
        <div className="fcta-premium-ray"></div>
        <div className="fcta-premium-ray"></div>
        <div className="fcta-premium-ray"></div>
        <div className="fcta-premium-ray"></div>
      </div>

      <div className="fcta-premium-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="fcta-premium-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      <div className="fcta-premium-rings">
        <div className="fcta-premium-ring ring-1"></div>
        <div className="fcta-premium-ring ring-2"></div>
        <div className="fcta-premium-ring ring-3"></div>
        <div className="fcta-premium-ring ring-4"></div>
      </div>

      <div className="fcta-premium-container">
        <div className="fcta-premium-badge">
          <span className="fcta-premium-badge-dot"></span>
          <span className="fcta-premium-badge-text">LET'S CREATE MAGIC</span>
          <span className="fcta-premium-badge-dot"></span>
        </div>

        <h2 className="fcta-premium-headline">
          <span className="fcta-premium-headline-light">Your Next</span>
          <div className="fcta-premium-headline-accent">
            <span className="fcta-premium-headline-gold">Standing</span>
            <span className="fcta-premium-headline-gold">Ovation</span>
          </div>
          <span className="fcta-premium-headline-light">Starts Here</span>
        </h2>

        <div className="fcta-premium-services">
          {[
            "Weddings",
            "Corporate Events",
            "Celebrity Shows",
            "Live Orchestra",
            "Private Functions",
          ].map((service, i) => (
            <React.Fragment key={i}>
              <span className="fcta-premium-service">{service}</span>
              {i < 4 && <span className="fcta-premium-service-sep">◉</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Stats Flex cards structured with direct ref injectors for memory safety */}
        <div className="fcta-premium-trust" style={{ display: 'flex', position: 'relative', zIndex: 10 }}>
          <div className="fcta-premium-stat-card">
            <div className="fcta-premium-trust-number" ref={clientRef}>0+</div>
            <div className="fcta-premium-trust-label">Happy Clients</div>
          </div>

          <div className="fcta-premium-stat-card">
            <div className="fcta-premium-trust-number" ref={eventRef}>0+</div>
            <div className="fcta-premium-trust-label">Events</div>
          </div>

          <div className="fcta-premium-stat-card">
            <div className="fcta-premium-trust-number" ref={satisfactionRef}>0%</div>
            <div className="fcta-premium-trust-label">Satisfaction</div>
          </div>
        </div>

        <div className="fcta-premium-buttons">
          <button className="fcta-premium-btn-primary">
            <span className="fcta-premium-btn-text">Book Consultation</span>
            <span className="fcta-premium-btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
