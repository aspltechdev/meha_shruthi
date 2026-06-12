import React, { useEffect, useRef, useState } from 'react';
import './TrustedBy.css';

import concertVideo from '../../assets/video.mp4';

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
  }
];

const TrustedBy = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {

    if (paused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 5000);

    return () => clearInterval(timerRef.current);

  }, [paused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? clients.length - 1 : prev - 1
    );
  };

  const current = clients[currentIndex];

  return (

    <section
      className="trusted-light-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* Background Video */}

      <video
        className="trusted-bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={concertVideo} type="video/mp4" />
      </video>

      {/* Light Overlay */}

      <div className="trusted-video-overlay"></div>

      {/* Banner */}

      <div className="trusted-banner">

        {/* Left */}

        <div className="trusted-content">

          <span className="trusted-category">
            {current.category}
          </span>

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
                    <div className="trusted-progress">

            <div className="trusted-slide-count">
              {String(currentIndex + 1).padStart(2, '0')}
              {' / '}
              {String(clients.length).padStart(2, '0')}
            </div>

            <div className="trusted-progress-track">

              <div
                className="trusted-progress-fill"
                style={{
                  width: `${((currentIndex + 1) / clients.length) * 100}%`
                }}
              />

            </div>

          </div>

          <div className="trusted-nav">

            <button
              className="trusted-nav-btn"
              onClick={prevSlide}
              aria-label="Previous"
            >
              ←
            </button>

            <button
              className="trusted-nav-btn"
              onClick={nextSlide}
              aria-label="Next"
            >
              →
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="trusted-stack">

          <div
            className="trusted-polaroid current"
            key={currentIndex}
          >
            <img
              src={current.image}
              alt={current.name}
            />
          </div>
                  </div>

      </div>

    </section>

  );
};

export default TrustedBy;