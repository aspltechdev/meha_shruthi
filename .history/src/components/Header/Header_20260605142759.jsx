import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          MUSE
        </div>

        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#events">Events</a>
          <a href="#artists">Artists</a>
          <a href="#gallery">Gallery</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="header-btn"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Book Tickets
        </button>

      </div>
    </header>
  );
};

export default Header;