import React, { useRef, useState } from 'react';
import './BehindTheStage.css';

import imageo from '../assets/imgone.jpg';
import imaget from '../assets/imgtwo.jpg';
import imageth from '../assets/imgthreea.png';
import imagef from '../assets/imgfour.jpg';

const services = [
  {
     title:'Music & Dance',
    subtitle: 'Live bands, playback artists & choreographed performances',
    // tag: 'Music & Dance',
    image: imageo,
  },
  {
     title:'Comedy & Mimicry',
    subtitle: 'Standup comedy & celebrity mimicry acts',
    // tag: 'Comedy & Mimicry',
    image: imaget,
  },
  {
     title:'DJ & Magic Shows',
    subtitle: 'High-energy DJ sets, magic & juggling spectacles',
    // tag: 'DJ & Magic Shows',
    image: imageth,
  },
  {
    title:'Fashion Shows',
    subtitle: 'Curated runway productions for any event',
    // tag: 'Fashion Shows',
    image: imagef,
  },
];

const BehindTheStage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  return (
    <section className="bts-premium-section" ref={sectionRef}>

      {/* Light Rays */}
      <div className="bts-light-rays">
        <div className="bts-ray" />
        <div className="bts-ray" />
        <div className="bts-ray" />
      </div>

      {/* Header */}
      <header className="bts-premium-header">

        <div className="bts-premium-badge">
          <span className="bts-badge-dot" />
          <span className="bts-badge-text">What We Do</span>
          <span className="bts-badge-dot" />
        </div>

        <h2 className="bts-premium-title">
          <span className="bts-title-light">Our</span>
          <span className="bts-title-gradient">Services</span>
        </h2>

        <div className="bts-premium-subtitle">
          <span className="bts-subtitle-line" />
          <p>Music · Dance · Comedy · DJ · Magic · Fashion — what else do you need?</p>
          <span className="bts-subtitle-line" />
        </div>

      </header>

      {/* Main Layout */}
      <div className="bts-premium-layout">

        {/* Bento Grid */}
        <div className="bts-cards-grid">

          {services.map((service, index) => (
            <div
              key={index}
              className={`
                bts-grid-card
                bts-card-${index + 1}
                ${activeIndex === index ? 'active' : ''}
              `}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >

              {/* Background Image */}
              <div className="bts-grid-media">
                <img
                  src={service.image}
                  alt={service.title}
                  className="bts-grid-image"
                />
                <div className="bts-grid-overlay" />
              </div>

              {/* Tag Badge */}
              <div className="bts-grid-time">{service.tag}</div>

              {/* Content */}
              <div className="bts-grid-content">
                <div className="bts-grid-label-section">
                  <h3 className="bts-grid-title">{service.title}</h3>
                  <p className="bts-grid-subtitle">{service.subtitle}</p>
                </div>
              </div>

              <div className="bts-grid-glow" />

            </div>
          ))}

        </div>

        {/* Marquee Strip */}
        <div className="bts-marquee-wrapper">
          <div className="bts-marquee-track">
            {[...services, ...services, ...services].map((service, index) => (
              <div key={index} className="bts-marquee-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="bts-marquee-image"
                />
                <div className="bts-marquee-overlay" />
                <div className="bts-marquee-content">
                  <span className="bts-marquee-time">{service.tag}</span>
                  <h4>{service.title}</h4>
                  <p>{service.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BehindTheStage;