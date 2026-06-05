import "./Gallery.css";

const galleryImages = [
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
  "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
];

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-header">
        <span>Event Gallery</span>
        <h2>Moments That Define Music</h2>
        <p>
          Explore unforgettable performances, crowd energy,
          and extraordinary musical experiences.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt="Music Event" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;