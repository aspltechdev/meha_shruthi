import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      number: "01",
      title: "World-Class Artists",
      description:
        "Experience performances from renowned musicians and emerging talents on one unforgettable stage.",
    },
    {
      number: "02",
      title: "Immersive Atmosphere",
      description:
        "Stunning lighting, visual effects, and premium production designed to elevate every moment.",
    },
    {
      number: "03",
      title: "VIP Experiences",
      description:
        "Exclusive lounges, backstage access, premium seating, and personalized event experiences.",
    },
    {
      number: "04",
      title: "Lasting Memories",
      description:
        "Create unforgettable moments with friends, artists, and music lovers from around the world.",
    },
  ];

  return (
    <section className="experience">
      <div className="experience-header">
        <span>The Experience</span>
        <h2>More Than A Concert</h2>
        <p>
          Every event is carefully crafted to create an extraordinary journey
          through music, culture, and unforgettable live entertainment.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((item) => (
          <div className="experience-card" key={item.number}>
            <span className="experience-number">
              {item.number}
            </span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;