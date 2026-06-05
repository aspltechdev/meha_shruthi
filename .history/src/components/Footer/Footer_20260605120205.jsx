import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <h2>MUSE</h2>
          <p>
            Creating unforgettable musical experiences,
            live performances, and world-class events.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Explore</h4>
            <a href="/">Events</a>
            <a href="/">Artists</a>
            <a href="/">Gallery</a>
            <a href="/">Tickets</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="/">About</a>
            <a href="/">Partners</a>
            <a href="/">Careers</a>
            <a href="/">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Social</h4>
            <a href="/">Instagram</a>
            <a href="/">YouTube</a>
            <a href="/">Facebook</a>
            <a href="/">LinkedIn</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MUSE. All Rights Reserved.</p>
        <div className="footer-policy">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;