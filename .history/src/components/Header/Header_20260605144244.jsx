import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="Meha Sruthi Entertainers" />
          <span>Meha Sruthi Entertainers</span>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#artists">Artists</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="tel:9442657611" className="header-btn">
          Book Now
        </a>
      </div>
    </header>
  );
};

export default Header;