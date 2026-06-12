// TrustedBy.jsx
import React, { useEffect, useRef, useState } from 'react';
import './TrustedBy.css';

const clients = [
  {
    name: "Rotary Club",
    category: "Service Organization",
    years: "5+ Years",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    description: "International service organization",
    events: "25+ Events"
  },
  {
    name: "Cosmopolitan Club",
    category: "Premium Club",
    years: "7+ Years",
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    description: "Elite social club network",
    events: "40+ Events"
  },
  {
    name: "Alumni Associations",
    category: "Educational",
    years: "4+ Years",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    description: "Prestigious alumni networks",
    events: "30+ Events"
  },
  {
    name: "Doctors Conferences",
    category: "Medical",
    years: "6+ Years",
    image: "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
    description: "Medical professionals",
    events: "20+ Events"
  },
  {
    name: "Wedding Celebrations",
    category: "Social",
    years: "200+ Events",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
    description: "Luxury wedding planners",
    events: "200+ Events"
  },
  {
    name: "Corporate Events",
    category: "Business",
    years: "50+ Events",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    description: "Fortune 500 companies",
    events: "50+ Events"
  },
  {
    name: "Cultural Festivals",
    category: "Cultural",
    years: "30+ Festivals",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    description: "Major cultural events",
    events: "30+ Festivals"
  },
  {
    name: "Private Functions",
    category: "Exclusive",
    years: "100+ Events",
    image: "https://images.pexels.com/photos/2253876/pexels-photo-2253876.jpeg",
    description: "VIP private gatherings",
    events: "100+ Events"
  },
];

const TrustedBy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const progressRef = useRef(0);

  const current = clients[currentIndex];

  const previous1 =
    clients[(currentIndex - 1 + clients.length) % clients.length];

  const previous2 =
    clients[(currentIndex - 2 + clients.length) % clients.length];

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      progressRef.current += 2;

      if (progressRef.current >= 100) {
        progressRef.current = 0;

        setCurrentIndex(prev =>
          (prev + 1) % clients.length
        );
      }

      setProgress(progressRef.current);
    }, 120);

    return () => clearInterval(timer);
  }, [paused]);

  const nextSlide = () => {
    progressRef.current = 0;
    setProgress(0);

    setCurrentIndex(prev =>
      (prev + 1) % clients.length
    );
  };

  const prevSlide = () => {
    progressRef.current = 0;
    setProgress(0);

    setCurrentIndex(prev =>
      (prev - 1 + clients.length) % clients.length
    );
  };

  return (
    <section className="trusted-light-section">

      {/* Concert Background Video */}
      <video
        className="trusted-light-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="YOUR_CONCERT_VIDEO.mp4"
          type="video/mp4"
        />
      </video>

      <div className="trusted-video-overlay" />

      {/* Floating Glass Banner */}
      <div
        className="trusted-banner"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* LEFT CONTENT */}
        <div className="trusted-content">

          <div className="trusted-category">
            {current.category}
          </div>

          <h2 className="trusted-title">
            {current.name}
          </h2>

          <p className="trusted-description">
            {current.description}
          </p>

          <div className="trusted-meta">

            <span>
              {current.events}
            </span>

            <span>
              {current.years}
            </span>

          </div>

          {/* Progress */}
          <div className="trusted-progress-wrapper">

            <div className="trusted-slide-count">
              {String(currentIndex + 1).padStart(2, "0")}
              {" / "}
              {String(clients.length).padStart(2, "0")}
            </div>

            <div className="trusted-progress-track">

              <div
                className="trusted-progress-fill"
                style={{
                  width: `${progress}%`
                }}
              />

            </div>

          </div>

          {/* Navigation */}
          <div className="trusted-nav">

            <button
              onClick={prevSlide}
              className="trusted-nav-btn"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="trusted-nav-btn"
            >
              →
            </button>

          </div>

        </div>

        {/* RIGHT POLAROID STACK */}
        <div className="trusted-stack">

          <div className="trusted-polaroid old">

            <img
              src={previous2.image}
              alt={previous2.name}
            />

            <span>
              {previous2.name}
            </span>

          </div>

          <div className="trusted-polaroid previous">

            <img
              src={previous1.image}
              alt={previous1.name}
            />

            <span>
              {previous1.name}
            </span>

          </div>

          <div
            key={currentIndex}
            className="trusted-polaroid current"
          >

            <img
              src={current.image}
              alt={current.name}
            />

            <span>
              {current.name}
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TrustedBy;