import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-card">

        <div className="hero-left">
          <span className="hero-badge">
            ✦ Chennai's Premier Entertainment Company
          </span>

          <h1>
  Making Every
  <span> Celebration</span>
  <br />
  Spectacular
</h1>

<p>
  Live Orchestra, Weddings, Corporate Events &
  Celebrity Shows across Chennai.
</p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Book Event
            </button>

            <button className="btn-secondary">
              View Programs
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