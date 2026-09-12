import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">S</span>
            <span>SustainX</span>
          </div>

          <p className="footer-description">
            Giving surplus construction materials another useful life.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>

          <Link to="/marketplace">Marketplace</Link>

          <Link to="/about">About</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 SustainX</span>

        <span>Built for a more circular future.</span>
      </div>
    </footer>
  );
}

export default Footer;