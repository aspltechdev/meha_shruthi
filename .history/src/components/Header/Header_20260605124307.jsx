import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <Link to="/">MUSE</Link>
        </div>

        <nav className="nav-links">
          <Link to="/events">Events</Link>
          <Link to="/artists">Artists</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/events" className="header-btn">
          Book Tickets
        </Link>

      </div>
    </header>
  );
};

export default Header;