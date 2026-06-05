import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <span>MUSE</span>
        </div>

        <nav className="nav-links">
          <a href="#events">Events</a>
          <a href="#artists">Artists</a>
          <a href="#gallery">Gallery</a>
          <a href="#sponsors">Partners</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="header-btn"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Book Tickets
        </button>

      </div>
    </header>
  );
};

export default Header;