import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [currentYear] = useState(new Date().getFullYear());
  const footerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'Our Legacy', href: '#legacy' },
      { name: 'Experiences', href: '#experiences' },
      { name: 'The Voices', href: '#voices' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      'Live Orchestra',
      'Wedding Entertainment',
      'Celebrity Shows',
      'Corporate Events',
      'Cultural Festivals',
      'Private Functions'
    ],
    contact: {
      email: 'hello@mehasruthi.com',
      phone: '+91 98765 43210',
      location: 'Chennai, Tamil Nadu, India'
    },
    social: [
      { name: 'Instagram', url: '#' },
      { name: 'YouTube', url: '#' },
      { name: 'Facebook', url: '#' },
      { name: 'Twitter', url: '#' }
    ]
  };

  // Email Icon SVG
  const EmailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
      <polyline points="22,7 12,13 2,7"/>
    </svg>
  );

  // Phone Icon SVG
  const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );

  // Location Icon SVG
  const LocationIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );

  // Instagram Icon SVG
  const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );

  // YouTube Icon SVG
  const YoutubeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
    </svg>
  );

  // Facebook Icon SVG
  const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );

  // Twitter Icon SVG
  const TwitterIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
    </svg>
  );

  // Arrow Icon
  const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round"/>
    </svg>
  );

  // Up Arrow Icon
  const UpArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round"/>
    </svg>
  );

  return (
    <footer className="footer-pro-section" ref={footerRef}>
      {/* Premium Dark Background Layers */}
      <div className="footer-pro-bg-primary"></div>
      <div className="footer-pro-bg-secondary"></div>
      <div className="footer-pro-bg-pattern"></div>
      <div className="footer-pro-bg-glow"></div>

      {/* Dynamic Interactive Spotlight */}
      <div 
        className="footer-pro-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 160, 61, 0.12) 0%, rgba(201, 160, 61, 0.04) 40%, transparent 70%)`
        }}
      />

      {/* Cinematic Light Rays */}
      <div className="footer-pro-rays">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`footer-pro-ray ray-${i + 1}`}></div>
        ))}
      </div>

      {/* Floating Ambient Particles */}
      <div className="footer-pro-particles">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="footer-pro-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${6 + Math.random() * 10}s`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="footer-pro-container">
        {/* Top Section - Brand Identity */}
        <div className="footer-pro-top">
          <div className="footer-pro-brand">
            <div className="footer-pro-logo">
              <span className="footer-pro-logo-mark">◈</span>
              <span className="footer-pro-logo-text">MEHA SRUTHI</span>
              <span className="footer-pro-logo-mark">◈</span>
            </div>
            <h2 className="footer-pro-tagline">
              <span>Every Celebration</span>
              <span className="footer-pro-tagline-gold">Deserves A Standing Ovation</span>
            </h2>
          </div>

          <div className="footer-pro-cta">
            <p className="footer-pro-cta-label">Ready to create magic?</p>
            <button className="footer-pro-cta-btn" onClick={scrollToTop}>
              <span>Start Your Journey</span>
              <ArrowIcon />
              <div className="footer-pro-cta-shine"></div>
            </button>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="footer-pro-divider">
          <div className="footer-pro-divider-line"></div>
          <div className="footer-pro-divider-diamond">◈</div>
          <div className="footer-pro-divider-line"></div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="footer-pro-links">
          {/* Navigation Column */}
          <div className="footer-pro-col">
            <h4 className="footer-pro-col-title">
              <span className="footer-pro-title-dot"></span>
              Navigate
            </h4>
            <ul className="footer-pro-list">
              {footerLinks.navigation.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer-pro-link">
                    <span className="footer-pro-link-dot">◉</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-pro-col">
            <h4 className="footer-pro-col-title">
              <span className="footer-pro-title-dot"></span>
              Services
            </h4>
            <ul className="footer-pro-list">
              {footerLinks.services.map((service, i) => (
                <li key={i}>
                  <a href="#" className="footer-pro-link">
                    <span className="footer-pro-link-dot">◉</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-pro-col">
            <h4 className="footer-pro-col-title">
              <span className="footer-pro-title-dot"></span>
              Connect
            </h4>
            <ul className="footer-pro-list">
              <li>
                <a href="mailto:hello@mehasruthi.com" className="footer-pro-link footer-pro-link-icon">
                  <EmailIcon />
                  <span>{footerLinks.contact.email}</span>
                </a>
              </li>
              <li>
                <a href="tel:+91944" className="footer-pro-link footer-pro-link-icon">
                  <PhoneIcon />
                  <span>{footerLinks.contact.phone}</span>
                </a>
              </li>
              <li>
                <span className="footer-pro-text footer-pro-link-icon">
                  <LocationIcon />
                  <span>{footerLinks.contact.location}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="footer-pro-col">
            <h4 className="footer-pro-col-title">
              <span className="footer-pro-title-dot"></span>
              Follow
            </h4>
            <div className="footer-pro-social">
              <a href="#" className="footer-pro-social-link">
                <InstagramIcon />
                <span>Instagram</span>
                <span className="footer-pro-social-arrow">→</span>
              </a>
              <a href="#" className="footer-pro-social-link">
                <YoutubeIcon />
                <span>YouTube</span>
                <span className="footer-pro-social-arrow">→</span>
              </a>
              {/* <a href="#" className="footer-pro-social-link">
                <FacebookIcon />
                <span>Facebook</span>
                <span className="footer-pro-social-arrow">→</span>
              </a>
              <a href="#" className="footer-pro-social-link">
                <TwitterIcon />
                <span>Twitter</span>
                <span className="footer-pro-social-arrow">→</span>
              </a> */}
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="footer-pro-divider">
          <div className="footer-pro-divider-line"></div>
          <div className="footer-pro-divider-diamond">◈</div>
          <div className="footer-pro-divider-line"></div>
        </div>

        {/* Bottom Section */}
        <div className="footer-pro-bottom">
          <p className="footer-pro-copyright">
            © {currentYear} Meha Sruthi Entertainments. All rights reserved.
             <span className="crafted-by">
    Crafted by Aspl Tech Solutions Pvt Ltd
  </span>
          </p>
          
          <button className="footer-pro-backtop" onClick={scrollToTop}>
            <span>Back to Top</span>
            <UpArrowIcon />
          </button>

          <div className="footer-pro-credits">
            <span className="footer-pro-credit-dot">◈</span>
            <span>Making every celebration spectacular</span>
            <span className="footer-pro-credit-dot">◈</span>
          </div>
        </div>
      </div>

      {/* Bottom Audio Visualizer */}
      {/* <div className="footer-pro-audio">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="footer-pro-audio-bar"
            style={{
              animationDelay: `${i * 0.08}s`,
              height: `${6 + (i % 12)}px`
            }}
          />
        ))}
      </div> */}

 
    </footer>
  );
};

export default Footer;