import { useEffect, useRef, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [activeLink, setActiveLink] = useState('home');
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'legacy', label: 'Legacy' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'voices', label: 'Voices' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      ref={headerRef}
      className={`header ${isScrolled ? 'header-scrolled' : ''} ${isMenuOpen ? 'header-menu-open' : ''}`}
    >
      {/* Background Glow */}
      <div 
        className="header-bg-glow"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 180, 0, 0.06) 0%, transparent 50%)`
        }}
      />

      {/* Top Energy Line */}
      <div className="header-energy-top">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="header-energy-dot"
            style={{
              animationDelay: `${i * 0.1}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      <div className="header-container">
        {/* Logo */}
        <a href="#" className="header-logo">
          <span className="header-logo-icon">✦</span>
          <div className="header-logo-text">
            <span className="header-logo-name">EVENT</span>
            <span className="header-logo-tagline">Entertainment Company</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className={`header-nav ${isMenuOpen ? 'header-nav-visible' : ''}`}>
          <ul className="header-nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="header-nav-item">
                <a
                  href={`#${link.id}`}
                  className={`header-nav-link ${activeLink === link.id ? 'header-nav-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link.id);
                    setIsMenuOpen(false);
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="header-link-text">{link.label}</span>
                  <span className="header-link-underline"></span>
                  {activeLink === link.id && (
                    <span className="header-link-dot"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="header-mobile-cta">
            <button className="header-btn header-btn-mobile">
              Book Event
              <span className="header-btn-arrow">→</span>
            </button>
          </div>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button className="header-btn">
            <span>Book Event</span>
            <span className="header-btn-arrow">→</span>
            <div className="header-btn-shine"></div>
            <div className="header-btn-glow"></div>
          </button>

          {/* Hamburger */}
          <button 
            className={`header-hamburger ${isMenuOpen ? 'header-hamburger-active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="header-hamburger-line"></span>
            <span className="header-hamburger-line"></span>
            <span className="header-hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Bottom Energy Line */}
      <div className="header-energy-bottom">
        <div className="header-energy-glow-line"></div>
      </div>
    </header>
  );
};

export default Header;