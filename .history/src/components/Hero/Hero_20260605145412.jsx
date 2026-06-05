import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-card">

        {/* Left Content */}
        <div className="hero-left">
          <span className="hero-badge">
            ✦ Chennai's Premier Entertainment Company
          </span>

          <h1>
            Every Event
             Becomes
            
            A Grand Celebration
          </h1>

          <p>
            Live Orchestra, Wedding Entertainment, Corporate Events,
            Cultural Festivals, Fashion Shows and Celebrity Performances
            crafted with passion and excellence.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Book Event
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

        {/* Right Image */}
        <div className="hero-right">

          <div className="gold-circle"></div>
          <div className="red-square"></div>
          <div className="gold-square"></div>

          <img
            src="/artist.png"
            alt="Artist"
            className="artist-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;