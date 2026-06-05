import "./Testimonials.css";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Music Enthusiast",
    review:
      "One of the most immersive live music experiences I've attended. Every detail was thoughtfully curated.",
  },
  {
    name: "Priya Sharma",
    role: "Event Attendee",
    review:
      "The energy, production quality, and artist lineup were exceptional. Truly unforgettable.",
  },
  {
    name: "Rahul Verma",
    role: "Concert Lover",
    review:
      "From ticketing to the final performance, everything felt premium and professionally organized.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <span>Testimonials</span>
        <h2>What People Say About Our Events</h2>
        <p>
          Thousands of music lovers have experienced unforgettable moments
          through our live performances and premium events.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon">❝</div>

            <p className="testimonial-review">
              {item.review}
            </p>

            <div className="testimonial-user">
              <div className="user-avatar">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;