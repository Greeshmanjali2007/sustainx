import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link to="/" className="brand">
          <span className="brand-mark">S</span>
          <span>SustainX</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/post-material">List Material</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="nav-login">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;