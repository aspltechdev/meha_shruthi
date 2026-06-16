import React, { useState } from 'react';
import './BehindTheStage.css';

import imageo from '../assets/music.jpeg';
import imaget from '../assets/imgone.png';
import imageth from '../assets/mimic.png';
import imagef from '../assets/fashion.png';
import imageDance from '../assets/mimicry.png';
import imageComedy from '../assets/mimicry.png';
import imageDJ from '../assets/fashion.png';
import imageMagic from '../assets/fashion.png';
import imageJuggling from '../assets/juggling.png';

const services = [
  { title: 'Music', subtitle: 'Live bands & musical performances', image: imageo },
{ title: 'Dance', subtitle: 'Professional dance troupes & acts', image: imaget },
{ title: 'Mimicry', subtitle: 'Celebrity voice impressions & acts', image: imageth },
{ title: 'Magic Shows', subtitle: 'Mind-blowing illusions & magic', image: imageDJ },
{ title: 'Fashion Shows', subtitle: 'Premium runway productions', image: imagef },
{ title: 'Stand-Up Comedy', subtitle: 'Interactive comedy performances', image: imageDance },
{ title: 'DJ', subtitle: 'High-energy sets for celebrations', image: imageComedy },
{ title: 'Magic Shows', subtitle: 'Mind-blowing illusions & magic', image: imageDJ },
{ title: 'Juggling Shows', subtitle: 'Captivating circus artistry', image: imageJuggling },
];

const BehindTheStage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bts-bento-section">
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