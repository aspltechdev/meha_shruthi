import "./Header.css";

const Header = () => {
  return (
    <div className="topbar-wrapper">
      <div className="topbar">

        {/* LEFT DOTS (mac style) */}
        <div className="dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        {/* NAV ITEMS */}
        <div className="nav-sections">

          <a href="#hero" className="nav-item active">
            Home
          </a>

          <a href="#events" className="nav-item">
            Events
          </a>

          <a href="#artists" className="nav-item">
            Artists
          </a>

          <a href="#gallery" className="nav-item">
            Gallery
          </a>

          <a href="#contact" className="nav-item badge">
            Contact
            <span>3</span>
          </a>

        </div>

        {/* SEARCH */}
        <div className="search">
          <input type="text" placeholder="Search events..." />
        </div>

      </div>
    </div>
  );
};

export default Header;