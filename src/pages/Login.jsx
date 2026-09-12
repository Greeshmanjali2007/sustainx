import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    localStorage.setItem("sustainxUser", name.trim());
    setLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem("sustainxUser");
    setLoggedIn(false);
    setName("");
  }

  if (loggedIn) {
    return (
      <div className="login-page">
        <section className="login-section">
          <div className="container">
            <div className="login-card login-success">
              <span className="eyebrow">Welcome to SustainX</span>

              <h1>Hello, {name}!</h1>

              <p>
                You are ready to list surplus materials, discover reusable
                resources, and connect with other projects.
              </p>

              <div className="login-actions">
                <Link
                  to="/marketplace"
                  className="button button-primary"
                >
                  Browse marketplace
                </Link>

                <Link
                  to="/post-material"
                  className="button button-outline"
                >
                  List material
                </Link>
              </div>

              <button
                className="login-logout"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="login-page">
      <section className="login-section">
        <div className="container">
          <div className="login-card">
            <div className="login-heading">
              <span className="eyebrow">SustainX account</span>

              <h1>Welcome back.</h1>

              <p>
                Enter your name to continue using the SustainX prototype.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="userName">Your name</label>

                <input
                  id="userName"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="userEmail">Email address</label>

                <input
                  id="userEmail"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="button button-primary login-button"
              >
                Continue
              </button>
            </form>

            <p className="login-note">
              Prototype login — no password or real account is required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;