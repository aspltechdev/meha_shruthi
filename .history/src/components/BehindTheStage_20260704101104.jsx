import React, { useState } from 'react';
import './BehindTheStage.css';

import imageo from '../assets/music.jpeg';
import imaget from '../assets/imgone.png';
import imageth from '../assets/mimic.png';
import imagef from '../assets/fashion.png';
import imageDance from '../assets/mimicry.jpeg';
import imageComedy from '../assets/mimicry.jpeg';
import imageDJ from '../assets/dj.png';
import imageMagic from '../assets/magic.png';
import imageJuggling from '../assets/juggling.jpe';
import i from '../assets/magics.png';
// TODO: replace with a dedicated magic show image when available
// import imageMagicShow from '../assets/magic-show.png';

const services = [
  { title: 'Live Music', subtitle: 'Live bands & musical performances', image: imageo },
  { title: 'Dance', subtitle: 'Professional dance troupes & acts', image: imaget },
  { title: 'Mimicry', subtitle: 'Celebrity voice impressions & acts', image: imageth },
  { title: 'Crystal Ball Act', subtitle: 'Witness the Art of Crystal Manipulation', image: imageMagic },
  { title: 'Stand-Up Comedy', subtitle: 'Interactive comedy performances', image: imageDance },
  { title: 'DJ', subtitle: 'High-energy sets for celebrations', image: imageDJ },
  { title: 'Fashion Shows', subtitle: 'Premium runway productions', image: imagef },
  { title: 'Juggling Shows', subtitle: 'Captivating circus artistry', image: imageJuggling },
  { title: 'Magic', subtitle: 'Mesmerizing illusions & sleight of hand', image: i },
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
        {services.map((service, index) => {
          const isMimicry = service.title === 'Mimicry';
          return (
            <div
              key={index}
              className={`bts-bento-card bts-bento-${index + 1} ${
                activeIndex === index ? 'active' : ''
              } ${isMimicry ? 'bts-bento-mimicry' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="bts-bento-media">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`bts-bento-image ${
                    isMimicry ? 'bts-bento-image-mimicry' : ''
                  }`}
                />
                <div className="bts-bento-overlay" />
              </div>
              <div className="bts-bento-content">
                <h3 className="bts-bento-title">{service.title}</h3>
                <p className="bts-bento-subtitle">{service.subtitle}</p>
              </div>
            </div>
          );
        })}
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