import "./FeaturedEvents.css";

const events = [
  {
    title: "Summer Music Festival",
    date: "15 August 2026",
    location: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
  },
  {
    title: "Live Concert Night",
    date: "28 September 2026",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
  },
  {
    title: "Electronic Beats",
    date: "10 October 2026",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
  },
];

const FeaturedEvents = () => {
  return (
    <section className="featured-events">
      <div className="featured-header">
        <span>Upcoming Events</span>
        <h2>Experience Music Like Never Before</h2>
        <p>
          Discover premium concerts, live performances, and unforgettable
          musical experiences curated for passionate audiences.
        </p>
      </div>

      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} />

            <div className="event-overlay">
              <div className="event-content">
                <span>{event.location}</span>

                <h3>{event.title}</h3>

                <p>{event.date}</p>

                <button>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEvents;