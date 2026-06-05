import "./Header.css";

const Header = () => {
  return (
    <div className="dock-wrapper">
      <div className="dock">

        {/* Left icons */}
        <div className="dock-group left">
          <a href="#events" className="dock-item">🎟</a>
          <a href="#artists" className="dock-item">🏆</a>
        </div>

        {/* CENTER HOME BUTTON */}
        <a href="#hero" className="dock-center">
          🏠
        </a>

        {/* Right icons */}
        <div className="dock-group right">
          <a href="#gallery" className="dock-item">🎵</a>
          <a href="#contact" className="dock-item">👤</a>
        </div>

      </div>
    </div>
  );
};

export default Header;