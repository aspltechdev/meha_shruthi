import "./Hero.css";
import { motion } from "framer-motion";

const services = [
  "Corporate Shows",
  "Temple Events",
  "Marriages",
  "Dance",
  "Mimicry",
  "Magic Show",
  "Stand-up Comedy",
  "Fashion Show",
];

const ribbonItems = [
  "Live Music",
  "Classical",
  "Orchestra",
  "Foot-Tapping Performances",
  "Vijay TV Airtel Super Singer",
  "Chennai · Pondicherry",
];

const Hero = () => {
  return (
    <section className="hero" id="hero">

      {/* Top bar */}
      <div className="hero-topbar">
        Chennai Meera Sridharan's Meha Sruthi Entertainers — All About ART!
      </div>

      {/* Nav */}
      <nav className="hero-nav">
        <div className="nav-logo">
          <span className="nav-logo-main">Meha Sruthi</span>
          <span className="nav-logo-sub">Entertainers</span>
        </div>
        <a href="tel:9442657611" className="nav-contact">
          <div className="nav-contact-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
          </div>
          94426 57611
        </a>
      </nav>

      {/* Main stage */}
      <div className="hero-stage">

        {/* Left content */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Live Music & Entertainment</span>
          </div>

          <h1 className="hero-name">
            Meha<br />
            <span className="hero-name-accent">Sruthi</span>
            <span className="hero-name-sub">Entertainers</span>
          </h1>

          <p className="hero-tagline">
            Good music, good times, and good vibes. Foot-tapping performances
            for every occasion — from intimate temple events to grand corporate
            galas.
          </p>

          <div className="hero-services">
            {services.map((s) => (
              <span key={s} className="service-pill">{s}</span>
            ))}
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">500<sup>+</sup></div>
              <div className="stat-lbl">Shows</div>
            </div>
            <div className="stat">
              <div className="stat-num">15<sup>+</sup></div>
              <div className="stat-lbl">Years</div>
            </div>
            <div className="stat">
              <div className="stat-num">4.9<sup>★</sup></div>
              <div className="stat-lbl">Rated</div>
            </div>
          </div>

          <div className="hero-cta">
            <button
              className="btn-book"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a Show
            </button>
            <button
              className="btn-watch"
              onClick={() =>
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Watch Highlights
            </button>
          </div>
        </div>

        {/* Right panel — red with emblem */}
        <div className="hero-right">
          <div className="hero-emblem">
            <div className="emblem-ring">
              <span className="emblem-icon">🎵</span>
            </div>
            <div className="emblem-title">
              Meha Sruthi<br />
              <span>Entertainers</span>
            </div>
            <div className="emblem-since">Est. Chennai · Since 2008</div>
          </div>

          <div className="hero-contact-card">
            <div className="contact-card-label">Call Us Directly</div>
            <div className="contact-card-numbers">
              <span className="contact-num">94426 57611</span>
              <span className="contact-num">94002 86507</span>
              <span className="contact-num">94432 29254</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gold ribbon */}
      <div className="hero-ribbon">
        {[...ribbonItems, ...ribbonItems].map((item, i) => (
          <>
            <span key={`item-${i}`} className="ribbon-item">{item}</span>
            <span key={`dot-${i}`} className="ribbon-dot" />
          </>
        ))}
      </div>

    </section>
  );
};

export default Hero;