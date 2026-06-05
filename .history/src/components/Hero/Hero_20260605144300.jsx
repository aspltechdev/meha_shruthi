import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">

          <div className="hero-badge">
            🎵 Chennai's Premier Entertainment Group
          </div>

          <h1>
            Bringing Music,
            <span> Joy & Celebration</span>
            <br />
            To Every Event
          </h1>

          <p>
            Live Orchestra • Classical Music • Dance Shows • Fashion Shows •
            Corporate Events • Weddings • Temple Functions • Stand-Up Comedy
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Book Your Event
            </a>

            <a href="#events" className="btn-secondary">
              View Programs
            </a>
          </div>

          <div className="hero-numbers">
            <div>
              <h3>250+</h3>
              <span>Events</span>
            </div>

            <div>
              <h3>100+</h3>
              <span>Artists</span>
            </div>

            <div>
              <h3>10+</h3>
              <span>Years</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/logo.png" alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;