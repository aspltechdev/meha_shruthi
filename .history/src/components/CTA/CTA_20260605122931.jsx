import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <span>Limited Seats Available</span>

        <h2>
          Ready For An
          <br />
          Unforgettable Musical Experience?
        </h2>

        <p>
          Join thousands of music lovers and immerse yourself in
          world-class performances, premium entertainment, and
          unforgettable memories.
        </p>

        <div className="cta-buttons">
          <button className="cta-primary">
            Reserve Your Spot
          </button>

          <button className="cta-secondary">
            Explore Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;