import React, { useState } from 'react';
import './BehindTheStage.css';

import imageo from '../assets/music.jpeg';
import imaget from '../assets/imgone.png';
import imageth from '../assets/mimic.png';
import imagef from '../assets/fashion.png';
import imageDance from '../assets/mimicry.png';
import imageComedy from '../assets/mimicry.png';
import imageDJ from '../assets/dj.png';
import imageMagic from '../assets/magic.png';
import imageJuggling from '../assets/juggling.png';

const services = [
  { title: 'Music', subtitle: 'Live bands & musical performances', image: imageo },
{ title: 'Dance', subtitle: 'Professional dance troupes & acts', image: imaget },
{ title: 'Mimicry', subtitle: 'Celebrity voice impressions & acts', image: imageth },
{ title: 'Magic Shows', subtitle: 'Mind-blowing illusions & magic', image: imageMagic },

{ title: 'Stand-Up Comedy', subtitle: 'Interactive comedy performances', image: imageDance },
{ title: 'DJ', subtitle: 'High-energy sets for celebrations', image: imageComedy },
{ title: 'Fashion Shows', subtitle: 'Premium runway productions', image: imagef },
{ title: 'Juggling Shows', subtitle: 'Captivating circus artistry', image: imageJuggling },
];

const BehindTheStage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bts-bento-section">
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
      <div className="bts-bento-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bts-bento-card bts-bento-${index + 1} ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="bts-bento-media">
              <img src={service.image} alt={service.title} className="bts-bento-image" />
              <div className="bts-bento-overlay" />
            </div>
            <div className="bts-bento-content">
              <h3 className="bts-bento-title">{service.title}</h3>
              <p className="bts-bento-subtitle">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Marquee Strip */}
      <div className="bts-marquee-wrapper">
        <div className="bts-marquee-track">
          {[...services, ...services, ...services].map((service, index) => (
            <div key={index} className="bts-marquee-card">
              <img src={service.image} alt={service.title} className="bts-marquee-image" />
              <div className="bts-marquee-overlay" />
              <div className="bts-marquee-content">
                <h4>{service.title}</h4>
                <p>{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindTheStage;