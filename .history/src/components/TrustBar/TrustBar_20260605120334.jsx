import "./TrustBar.css";

const TrustBar = () => {
  const brands = [
    "SPOTIFY",
    "APPLE MUSIC",
    "YOUTUBE MUSIC",
    "SONY MUSIC",
    "UNIVERSAL",
    "TICKETMASTER",
    "LIVE NATION",
    "MUSIC FEST"
  ];

  return (
    <section className="trustbar">
      <div className="trustbar-container">

        <p className="trustbar-title">
          Trusted by artists, venues & music communities
        </p>

        <div className="trustbar-slider">
          <div className="trustbar-track">
            {[...brands, ...brands].map((brand, index) => (
              <div className="trustbar-item" key={index}>
                {brand}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBar;