import React, { useRef, useState } from 'react';
import './ServicesSection.css';

import imageo from '../assets/imgone.jpg';
import imaget from '../assets/imgtwo.jpg';
import imageth from '../assets/imgthreea.png';
import imagef from '../assets/imgfour.jpg';

const services = [
  {
    title: 'Music & Dance',
    subtitle: 'Live bands, playback artists & choreographed performances',
    tag: 'Live',
    image: imageo,
  },
  {
    title: 'Comedy & Mimicry',
    subtitle: 'Standup comedy & celebrity mimicry acts',
    tag: 'Entertainment',
    image: imaget,
  },
  {
    title: 'DJ & Magic Shows',
    subtitle: 'High-energy DJ sets, magic & juggling spectacles',
    tag: 'Spectacular',
    image: imageth,
  },
  {
    title: 'Fashion Shows',
    subtitle: 'Curated runway productions for any event',
    tag: 'Premium',
    image: imagef,
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  return (
    <section className="srv-section" ref={sectionRef}>

      {/* Light Rays */}
      <div className="bts-light-rays">
        <div className="bts-ray" />
        <div className="bts-ray" />
        <div className="bts-ray" />
      </div>

      {/* Header */}
      <header className="srv-header">
        <div className="srv-badge">
          <span className="srv-badge-dot" />
          <span className="srv-badge-text">What We Do</span>
          <span className="srv-badge-dot" />
        </div>

        <h2 className="srv-title">
          <span className="srv-title-light">Our</span>
          <span className="srv-title-gradient">Services</span>
        </h2>

        <div className="srv-subtitle-row">
          <span className="srv-subtitle-line" />
          <p>Music · Dance · Comedy · DJ · Magic · Fashion — what else do you need?</p>
          <span className="srv-subtitle-line" />
        </div>
      </header>

      {/* Main Layout */}
      <div className="srv-layout">

        {/* Bento Grid */}
        <div className="srv-cards-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`srv-grid-card srv-card-${index + 1} ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Background Image */}
              <div className="srv-grid-media">
                <img
                  src={service.image}
                  alt={service.title}
                  className="srv-grid-image"
                />
                <div className="srv-grid-overlay" />
              </div>

              {/* Tag Badge */}
              <div className="srv-tag">{service.tag}</div>

              {/* Content */}
              <div className="srv-grid-content">
                <div className="srv-grid-label-section">
                  <h3 className="srv-grid-title">{service.title}</h3>
                  <p className="srv-grid-subtitle">{service.subtitle}</p>
                </div>
              </div>

              <div className="srv-grid-glow" />
            </div>
          ))}
        </div>

        {/* Marquee Strip */}
        <div className="srv-marquee-wrapper">
          <div className="srv-marquee-track">
            {[...services, ...services, ...services].map((service, index) => (
              <div key={index} className="srv-marquee-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="srv-marquee-image"
                />
                <div className="srv-marquee-overlay" />
                <div className="srv-marquee-content">
                  <span className="srv-marquee-tag">{service.tag}</span>
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

export default ServicesSection;