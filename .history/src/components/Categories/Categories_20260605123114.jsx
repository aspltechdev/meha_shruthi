import "./Categories.css";

const categories = [
  {
    icon: "🎤",
    title: "Live Concerts",
    description:
      "Experience powerful live performances from top artists and bands.",
  },
  {
    icon: "🎧",
    title: "DJ Nights",
    description:
      "Feel the energy with electrifying beats and immersive sound.",
  },
  {
    icon: "🎻",
    title: "Classical Music",
    description:
      "Elegant performances by talented musicians and orchestras.",
  },
  {
    icon: "🎸",
    title: "Rock Festivals",
    description:
      "High-energy events featuring iconic and emerging rock artists.",
  },
  {
    icon: "🎹",
    title: "Acoustic Sessions",
    description:
      "Intimate musical evenings with soulful performances.",
  },
  {
    icon: "🎶",
    title: "Music Festivals",
    description:
      "Multi-day celebrations featuring diverse genres and artists.",
  },
];

const Categories = () => {
  return (
    <section className="categories">
      <div className="categories-header">
        <span>Event Categories</span>

        <h2>Discover Your Perfect Music Experience</h2>

        <p>
          Explore a diverse range of events curated for every music lover,
          from intimate acoustic sessions to grand music festivals.
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;