import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-circle circle-1"></div>
      <div className="hero-bg-circle circle-2"></div>

      <div className="hero-content">
        <span className="hero-subtitle">
          ✦ Chennai's Premier Entertainment Company
        </span>

        <h1>
          Crafting
          <span> Unforgettable</span>
          <br />
          Celebrations
        </h1>

        <p>
          Live Orchestra • Celebrity Shows • Weddings • Corporate Events •
          Cultural Festivals • Fashion Shows
        </p>

        <div className="hero-actions">
          <button className="gold-btn">Book Event</button>
          <button className="glass-btn">View Shows</button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="logo-frame">
          <img src="/logo.png" alt="Meha Sruthi" />
        </div>
      </div>
    </section>
  );
};

export default Hero;