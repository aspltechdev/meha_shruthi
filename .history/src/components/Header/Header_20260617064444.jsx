import { useEffect, useRef, useState } from 'react';
import './Header.css';
import logo from "../../assets/logo.png";

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'legacy', label: 'Legacy' },
    
    { id: 'voices', label: 'Voices' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      ref={headerRef}
      className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header--menu-open' : ''}`}
    >
      {/* Subtle Background Glow */}
      <div 
        className="header__glow"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 168, 76, 0.04) 0%, transparent 50%)`
        }}
      />

      {/* Top Golden Thread */}
      <div className="header__thread header__thread--top">
        <div className="header__thread-line" />
        <div className="header__thread-ornament">
          <span className="header__thread-dot" />
          <span className="header__thread-diamond" />
          <span className="header__thread-dot" />
        </div>
        <div className="header__thread-line" />
      </div>

      <div className="header__container">
        {/* Logo - Meha Sruthi Entertainers */}
        <a href="#" className="header__logo" aria-label="Meha Sruthi Entertainers - Home">
  <div className="header__logo-mark">
    <img
      src={logo}
      alt="Meha Sruthi Entertainers"
      className="header__logo-img"
    />
  </div>

  {/* <div className="header__logo-text">
    <div className="header__logo-name">
      <span className="header__logo-name--meha">Meha</span>
      <span className="header__logo-name--sruthi">Sruthi</span>
    </div>
    <span className="header__logo-tagline">Entertainers</span>
  </div> */}
</a>

        {/* Navigation */}
        <nav 
          className={`header__nav ${isMenuOpen ? 'header__nav--visible' : ''}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="header__nav-item">
                <a
                  href={`#${link.id}`}
                  className={`header__nav-link ${activeLink === link.id ? 'header__nav-link--active' : ''}`}
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
                  <span className="header__nav-link-text">{link.label}</span>
                  <span className="header__nav-link-line" />
                  {activeLink === link.id && (
                    <span className="header__nav-link-dot" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="header__mobile-cta">
            <button
  className="header__btn header__btn--mobile"

  <span className="header__btn-text">Begin Your Journey</span>
  <span className="header__btn-icon">→</span>
</button>
          </div>
        </nav>

        {/* Right Actions */}
        <div className="header__actions">
          <button className="header__btn header__btn--desktop">
            <span className="header__btn-text">Begin Your Journey</span>
            <span className="header__btn-icon">→</span>
            <div className="header__btn-glow" />
          </button>

          {/* Hamburger Menu */}
          <button 
            className={`header__hamburger ${isMenuOpen ? 'header__hamburger--active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="header__hamburger-line" />
            <span className="header__hamburger-line" />
            <span className="header__hamburger-line" />
          </button>
        </div>
      </div>

      {/* Bottom Golden Thread */}
      <div className="header__thread header__thread--bottom">
        <div className="header__thread-line" />
        <div className="header__thread-ornament">
          <span className="header__thread-dot" />
          <span className="header__thread-diamond" />
          <span className="header__thread-dot" />
        </div>
        <div className="header__thread-line" />
      </div>
    </header>
  );
};

export default Header;