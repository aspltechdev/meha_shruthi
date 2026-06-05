import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tag">Music • Events • Entertainment</span>

          <h1>
            Meha Sruthi <span>Entertainers</span>
          </h1>

          <p>
            Bringing music, dance, comedy, orchestras, fashion shows and
            unforgettable performances to weddings, corporate events,
            temple functions and special celebrations.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Book an Event
            </a>

            <a href="#services" className="secondary-btn">
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>250+</h3>
              <p>Events</p>
            </div>

            <div>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Entertainment</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="logo-card">
            <img
              src="/logo.png"
              alt="Meha Sruthi Entertainers"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;