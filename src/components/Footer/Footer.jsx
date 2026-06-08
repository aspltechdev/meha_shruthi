import { useEffect, useRef, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
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

  return (
    <footer className="footer-section" ref={footerRef}>
      {/* Dynamic Spotlight */}
      <div 
        className="footer-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 180, 0, 0.08) 0%, transparent 50%)`
        }}
      />

      {/* Energy Waves */}
      <div className="footer-waves">
        <div className="footer-wave footer-wave-1"></div>
        <div className="footer-wave footer-wave-2"></div>
      </div>

      {/* Particles */}
      <div className="footer-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="footer-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              <span className="footer-logo-line">Every</span>
              <span className="footer-logo-line footer-logo-gold">Celebration</span>
              <span className="footer-logo-line">Deserves A</span>
              <span className="footer-logo-line footer-logo-gold">Standing Ovation</span>
            </h2>
          </div>

          {/* CTA */}
          <div className="footer-cta">
            <p className="footer-cta-text">Ready to create something extraordinary?</p>
            <button className="footer-cta-btn" onClick={scrollToTop}>
              <span>Start Your Journey</span>
              <span className="footer-cta-arrow">→</span>
              <div className="footer-cta-shine"></div>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider">
          <div className="footer-divider-line"></div>
          <span className="footer-divider-icon">✦</span>
          <div className="footer-divider-line"></div>
        </div>

        {/* Middle Section - Links */}
        <div className="footer-links">
          {/* Navigation */}
          <div className="footer-nav">
            <h4 className="footer-nav-title">Navigate</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#legacy">Our Legacy</a></li>
              <li><a href="#experiences">Experiences</a></li>
              <li><a href="#voices">The Voices</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-nav">
            <h4 className="footer-nav-title">Services</h4>
            <ul className="footer-nav-list">
              <li><a href="#">Live Orchestra</a></li>
              <li><a href="#">Wedding Entertainment</a></li>
              <li><a href="#">Celebrity Shows</a></li>
              <li><a href="#">Corporate Events</a></li>
              <li><a href="#">Fashion Shows</a></li>
              <li><a href="#">Comedy & Special Acts</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-nav">
            <h4 className="footer-nav-title">Connect</h4>
            <ul className="footer-nav-list">
              <li><a href="mailto:hello@eventcompany.com">hello@eventcompany.com</a></li>
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li><span>Chennai, Tamil Nadu</span></li>
              <li><span>India</span></li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-nav">
            <h4 className="footer-nav-title">Follow Us</h4>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <span>Instagram</span>
                <span className="footer-social-arrow">↗</span>
              </a>
              <a href="#" className="footer-social-link" aria-label="YouTube">
                <span>YouTube</span>
                <span className="footer-social-arrow">↗</span>
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <span>Facebook</span>
                <span className="footer-social-arrow">↗</span>
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <span>Twitter</span>
                <span className="footer-social-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider">
          <div className="footer-divider-line"></div>
          <span className="footer-divider-icon">✦</span>
          <div className="footer-divider-line"></div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2025 Event Company. All rights reserved.
          </p>
          
          <button className="footer-back-top" onClick={scrollToTop}>
            <span>Back to Top</span>
            <span className="footer-back-arrow">↑</span>
          </button>

          <p className="footer-tagline">
            Making every celebration spectacular
          </p>
        </div>
      </div>

      {/* Bottom Energy Bar */}
      <div className="footer-energy">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="footer-energy-line"
            style={{
              animationDelay: `${i * 0.1}s`,
              height: `${6 + Math.random() * 20}px`
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;