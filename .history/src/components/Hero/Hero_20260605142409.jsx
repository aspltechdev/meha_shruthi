import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-tag">
            🎵 Chennai's Premium Entertainment Group
          </span>

          <h1>
            Meha Sruthi <span>Entertainers</span>
          </h1>

          <p>
            Elevate your celebrations with live orchestras, classical music,
            dance performances, comedy shows, fashion events, temple programs,
            weddings, and corporate entertainment.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Book Now
            </a>

            <a href="#services" className="secondary-btn">
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>250+</h3>
              <p>Successful Events</p>
            </div>

            <div>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Live Entertainment</p>
            </div>
          </div>
        </div>

        {/* Right Side Logo */}
        <div className="hero-image">
          <div className="logo-card">
            <img
              src="/logo.png"
              alt="Meha Sruthi Entertainers Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;