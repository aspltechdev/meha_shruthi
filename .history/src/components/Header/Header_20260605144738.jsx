import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">

        <div className="logo">
          <img src="/logo.png" alt="Meha Sruthi" />
          <div>
            <h3>Meha Sruthi</h3>
            <span>Entertainers</span>
          </div>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="tel:+919442657611" className="book-btn">
          Book Now
        </a>

      </div>
    </header>
  );
};

export default Header;