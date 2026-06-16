import React, { useState } from 'react';
import './BehindTheStage.css';

import imageo from '../assets/imgone.png';
import imaget from '../assets/mimicry.png';
import imageth from '../assets/imgthreea.png';
import imagef from '../assets/fashion.png';
import imageDance from '../assets/fashion.png';
import imageComedy from '../assets/fashion.png';
import imageDJ from '../assets/fashion.png';
import imageMagic from '../assets/imgmagic.png';
import imageJuggling from '../assets/imgjuggling.png';

const services = [
  { title: 'Stock Intelligence', subtitle: 'Live tracking & analytics', image: imageo },
  { title: 'Smart Banking', subtitle: 'Smart living, every day', image: imaget },
  { title: 'Team Collaboration', subtitle: 'Work better together', image: imageth },
  { title: 'Total Ads', subtitle: 'Reach & performance overview', image: imagef },
  { title: 'Payment Method', subtitle: 'Confirm and pay securely', image: imageDance },
  { title: 'Quick Actions', subtitle: 'Shops, calendar, cards', image: imageComedy },
  { title: 'Mobile Wallet', subtitle: 'Your balance, anywhere', image: imageDJ },
  { title: 'Organic Position', subtitle: 'Average performance today', image: imageMagic },
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
    </section>
  );
};

export default BehindTheStage;