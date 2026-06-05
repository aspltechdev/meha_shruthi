import "./Artists.css";

const artists = [
  {
    name: "Ariana Brooks",
    genre: "Pop Artist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
  },
  {
    name: "Daniel Cruz",
    genre: "Electronic DJ",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
  },
  {
    name: "Sophia Lee",
    genre: "Classical Vocalist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800",
  },
  {
    name: "Ryan Walker",
    genre: "Rock Performer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
  },
];

const Artists = () => {
  return (
    <section className="artists">
      <div className="artists-header">
        <span>Featured Artists</span>

        <h2>Meet The Stars Of The Show</h2>

        <p>
          Discover extraordinary talent from across the music industry,
          delivering unforgettable performances and experiences.
        </p>
      </div>

      <div className="artists-grid">
        {artists.map((artist, index) => (
          <div className="artist-card" key={index}>
            <img src={artist.image} alt={artist.name} />

            <div className="artist-overlay">
              <h3>{artist.name}</h3>
              <p>{artist.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artists;