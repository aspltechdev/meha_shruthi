import "./Hero.css";

const services = [
  "Corporate Shows",
  "Temple Events",
  "Weddings",
  "Dance",
  "Magic",
  "Comedy",
  "Fashion Shows",
  "Live Orchestra",
];

const Hero = () => {
  return (
    <section className="hero">

      {/* BACKGROUND EFFECTS */}
      <div className="hero-bg"></div>
      <div className="hero-glow red"></div>
      <div className="hero-glow gold"></div>

      {/* TOP BAR */}
      <div className="hero-topbar">
        Chennai’s Premium Live Entertainment Company
      </div>

      {/* MAIN GRID */}
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <div className="hero-badge">
            ✨ Premium Entertainment Since 2008
          </div>

          <h1 className="hero-title">
            MEHA <span>SRUTHI</span>
            <br />
            ENTERTAINERS
          </h1>

          <p className="hero-desc">
            We craft unforgettable live experiences for weddings, corporate events,
            temple festivals, and premium stage shows across South India.
          </p>

          {/* SERVICES GRID (NEW PREMIUM FEATURE) */}
          <div className="services-grid">
            {services.map((item) => (
              <div key={item} className="service-card">
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="cta-row">
            <button className="btn primary">Book a Show</button>
            <button className="btn outline">Watch Portfolio</button>
          </div>

          {/* STATS */}
          <div className="stats">
            <div>
              <h3>500+</h3>
              <p>Events</p>
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

        {/* RIGHT VISUAL CARD */}
        <div className="hero-right">

          <div className="floating-card">
            <div className="music">🎵</div>
            <h2>Live Stage Experience</h2>
            <p>Energy • Emotion • Elegance</p>
          </div>

          <div className="contact-card">
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