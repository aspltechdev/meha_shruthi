import "./Sponsors.css";

const sponsors = [
  "SPOTIFY",
  "APPLE MUSIC",
  "SONY MUSIC",
  "UNIVERSAL",
  "LIVE NATION",
  "YOUTUBE MUSIC",
  "TICKETMASTER",
  "AMAZON MUSIC",
];

const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="sponsors-header">
        <span>Our Partners</span>
        <h2>Powered By Industry Leaders</h2>
        <p>
          Collaborating with renowned music brands, event partners,
          and entertainment companies to create extraordinary experiences.
        </p>
      </div>

      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <div className="sponsor-card" key={index}>
            {sponsor}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;