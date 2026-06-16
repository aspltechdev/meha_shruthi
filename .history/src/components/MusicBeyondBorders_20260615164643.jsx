import React from 'react';
import './MusicBeyondBorders.css';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

const MusicBeyondBorders = () => {
  return (
    <section className="mbb-hero">
      <div className="mbb-hero-container">
        <div className="mbb-hero-left">
          <h1 className="mbb-hero-title">
            A new way to learn <br />
            & get knowledge
          </h1>

          <p className="mbb-hero-desc">
            Build a modern learning experience with engaging visuals, clean typography,
            and a premium card-based layout that feels polished and dynamic.
          </p>

          <div className="mbb-hero-actions">
            <button className="mbb-btn mbb-btn-primary">Join Class</button>
            <button className="mbb-btn mbb-btn-secondary">Learn More</button>
          </div>

          <div className="mbb-hero-stats">
            <div className="mbb-stat">
              <div className="mbb-stat-number">15.2K</div>
            </div>
            <div className="mbb-stat">
              <div className="mbb-stat-number">4.5K</div>
            </div>
            <div className="mbb-stat">
              <div className="mbb-stat-number">Resources</div>
            </div>
          </div>
        </div>

        <div className="mbb-hero-right">
          <div className="mbb-collage">
            <div className="mbb-collage-card mbb-card-1">
              <img src={image1} alt="Collage 1" />
            </div>

            <div className="mbb-collage-card mbb-card-2">
              <img src={image2} alt="Collage 2" />
            </div>

            <div className="mbb-collage-ring"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicBeyondBorders;