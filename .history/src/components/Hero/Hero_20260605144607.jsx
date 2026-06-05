import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-circle circle-1"></div>
      <div className="hero-bg-circle circle-2"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">
            ✦ Chennai's Premier Entertainment Company
          </span>

          <h1>
            Making Every
            <span> Celebration</span>
            <br />
            Spectacular
          </h1>

          <p>
            From grand weddings and live orchestras to corporate events,
            cultural festivals, fashion shows, comedy nights and celebrity
            performances — we create unforgettable experiences.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              Book an Event
            </button>

            <button className="btn-secondary">
              Explore Shows
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>500+</h3>
              <span>Events</span>
            </div>

            <div>
              <h3>100+</h3>
              <span>Artists</span>
            </div>

            <div>
              <h3>15+</h3>
              <span>Years</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="logo-frame">
            <img src="/logo.png" alt="Meha Sruthi Entertainers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;