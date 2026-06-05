import "./Hero.css";

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

const Hero = () => {
  return (
    <section className="hero" id="hero">

      {/* TOP BAR */}
      <div className="hero-topbar">
        Chennai Meera Sridharan's Meha Sruthi Entertainers — All About ART!
      </div>

      {/* NAV */}
      <nav className="hero-nav">
        <div className="nav-logo">
          <span className="nav-logo-main">Meha Sruthi</span>
          <span className="nav-logo-sub">Entertainers</span>
        </div>

        <a href="tel:9442657611" className="nav-contact">
          <div className="nav-contact-icon">📞</div>
          94426 57611
        </a>
      </nav>

      {/* MAIN */}
      <div className="hero-stage">

        {/* LEFT */}
        <div className="hero-left">

          <div className="hero-badge">
            Live Music & Premium Entertainment
          </div>

          <h1 className="hero-title">
            Meha <span>Sruthi</span>
            <br />
            Entertainers
          </h1>

          <p className="hero-subtitle">
            Premium live entertainment for weddings, corporate events,
            temple festivals, stage shows and celebrations across South India.
          </p>

          {/* SERVICES */}
          <div className="hero-services">
            {services.map((item) => (
              <span key={item} className="service-pill">
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="hero-cta">
            <button className="btn-primary">Book a Show</button>
            <button className="btn-secondary">Watch Highlights</button>
          </div>

          {/* STATS */}
          <div className="hero-stats">
            <div>
              <h3>500+</h3>
              <p>Shows</p>
            </div>
            <div>
              <h3>15+</h3>
              <p>Years</p>
            </div>
            <div>
              <h3>4.9★</h3>
              <p>Rating</p>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">

          <div className="glow-circle"></div>

          <div className="hero-card">
            <div className="music-icon">🎵</div>
            <h2>Live Stage Experience</h2>
            <p>Energy • Emotion • Entertainment</p>
          </div>

          <div className="contact-box">
            <h4>Direct Booking</h4>
            <p>94426 57611</p>
            <p>94002 86507</p>
            <p>94432 29254</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;