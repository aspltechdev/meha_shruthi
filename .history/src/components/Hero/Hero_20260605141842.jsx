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

      {/* BACKGROUND LAYERS */}
      <div className="bg-orb red"></div>
      <div className="bg-orb gold"></div>

      {/* TOP BAR */}
      <div className="hero-topbar">
        Chennai’s Premium Live Entertainment Company
      </div>

      {/* CONTENT */}
      <div className="hero-container">

        <div className="hero-left">

          <div className="badge">
            Premium Entertainment Since 2008
          </div>

          <h1 className="title">
            MEHA <span>SRUTHI</span>
            <br />
            ENTERTAINERS
          </h1>

          <p className="desc">
            We deliver world-class live entertainment for weddings,
            corporate events, temple festivals and stage shows across South India.
          </p>

          {/* SERVICES */}
          <div className="services">
            {services.map((item) => (
              <div key={item} className="service">
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="cta">
            <button className="btn primary">Book a Show</button>
            <button className="btn secondary">Watch Portfolio</button>
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

        {/* RIGHT (TEXT ONLY PREMIUM CARD) */}
        <div className="hero-right">

          <div className="glass-card">
            <h2>Live Experience</h2>
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